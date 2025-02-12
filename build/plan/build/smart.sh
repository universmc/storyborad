#!/bin/bash

# Configuration
CONTEXT="test: Développement de SmartContrat, générateur de contenu au format solidity"
JSON="[]"
SCRIPT="[]"
SMARTCONTRACT="[output.sol]"

# Vérifier si jq est installé
if ! command -v jq &> /dev/null; then
    echo "Erreur: jq n'est pas installé. Veuillez installer jq pour exécuter ce script."
    exit 1
fi

# Vérifier si curl est installé
if ! command -v curl &> /dev/null; then
    echo "Erreur: curl n'est pas installé. Veuillez installer curl pour exécuter ce script."
    exit 1
fi

# Vérifier si l'API key est définie
if [ -z "${GROQ_API_KEY}" ]; then
    echo "Erreur: La variable d'environnement GROQ_API_KEY n'est pas définie."
    exit 1
fi

# Création de la requête
response=$(curl -s -X POST https://api.groq.com/openai/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${GROQ_API_KEY}" \
  -d "{
    \"messages\": [
      {
        \"role\": \"user\",
        \"content\": \"convertir ${CONTEXT} ce contexte au format JSON pour servire de base au ${SMARTCONTRACT}\"
      },
      {
        \"role\": \"assistant\",
        \"content\": \"rédiger la synchrone en JavaScript du fichier ${JSON} pour servire de ${SCRIPT}.js pour le developpement du smartContract }pour une page HTML\"
      },
      {
        \"role\": \"user\",
        \"content\": \"ta réponse doit intégralement être rédigé au format HTML En intégrant le ${SCRIPT} pour afficher le ${CONTEXT} et le script solidity du ${SMARTCONTRACT}, En respectant les normes du Web sémantique W3C\"
      }
    ],
    \"model\": \"mixtral-8x7b-32768\",
    \"temperature\": 0.8,
    \"max_tokens\": 2048,
    \"top_p\": 1,
    \"stop\": null,
    \"stream\": false
}")

# Vérifier si la requête a échoué
if [ $? -ne 0 ]; then
    echo "Erreur: La requête HTTP a échoué."
    exit 1
fi

# Extraire le contenu HTML de la réponse
html_content=$(echo "$response" | jq -r '.choices[0].message.content')

# Vérifier si le contenu HTML est récupéré
if [ -z "$html_content" ]; then
    echo "Erreur: Aucun contenu HTML récupéré dans la réponse."
    echo "Réponse de l'API:"
    echo "$response"
    exit 1
fi

# Création du nom de fichier avec horodatage
timestamp=$(date +%s)
output_file="smart_${timestamp}.html"

# Écriture du contenu dans le fichier
echo "$html_content" > "$output_file"

echo "Documentation générée et enregistrée dans $output_file"