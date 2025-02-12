#!/bin/bash

# Configuration
CONTEXT="test: la véritable réussite de la préservation de la vie humaine"
JSON="[]"
SCRIPT="[]"

# Création de la requête
curl -X POST https://api.groq.com/openai/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d "{
    \"messages\": [
      {
        \"role\": \"user\",
        \"content\": \"convertir ${CONTEXT} ce contexte au format JSON\"
      },
      {
        \"role\": \"assistant\",
        \"content\": \"rédiger la synchrone en JavaScript du fichier ${JSON} pour servire de ${SCRIPT}.js d'affichage pour une page HTML\"
      },
      {
        \"role\": \"user\",
        \"content\": \"ta réponse doit intégralement être rédigé au format HTML En intégrant le ${SCRIPT} pour afficher le ${CONTEXT}.json , En respectant les normes du Web sémantique W3C\"
      }
    ],
    \"model\": \"mixtral-8x7b-32768\",
    \"temperature\": 0.8,
    \"max_tokens\": 2048,
    \"top_p\": 1,
    \"stop\": null,
    \"stream\": false
}" | jq -r '.choices[0].message.content' > output.html

# Création du nom de fichier avec horodatage
OUTPUT_FILE="Json_$(date +%s).html"

# Copie du contenu dans le fichier final
cp output.html "$OUTPUT_FILE"

echo "Documentation générée et enregistrée dans $OUTPUT_FILE"