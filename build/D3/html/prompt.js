{
    "description": "Ce fichier JavaScript sert à générer dynamiquement des prompts personnalisés pour l'utilisateur, en fonction des paramètres spécifiés. Il peut être utilisé pour créer des interfaces utilisateur interactives et adaptées à différents contextes.",
    "framework": "Indépendant", // Ce fichier peut être utilisé avec n'importe quel framework JavaScript (React, Vue, Angular, etc.) ou même en JavaScript pur.
    "pageWeb": {
      "type": "SinglePage",
      "style": "futuriste",
      "topic": "Intelligence artificielle"
    },
    "fonctionnalités": [
      {
        "nom": "Génération de prompts",
        "description": "Crée des messages personnalisés à l'utilisateur, basés sur des variables définies ou des données dynamiques."
      },
      {
        "nom": "Personnalisation",
        "description": "Permet de configurer le style, le contenu et le comportement des prompts en fonction des besoins spécifiques de l'application."
      },
      {
        "nom": "Intégration avec d'autres technologies",
        "description": "Peut être utilisé en conjonction avec des bibliothèques d'IA, des moteurs de recherche ou d'autres services externes pour enrichir les prompts."
      }
    ],
    "exemple_d'utilisation": `
    // Exemple de code JavaScript :
    function genererPrompt(topic, style) {
      let prompt = "";
      switch (topic) {
        case "Intelligence artificielle":
          prompt = "Quel est votre avis sur l'impact de l'IA sur le marché du travail ?";
          break;
        // ... d'autres cas possibles
      }
      // Ajout de styles spécifiques
      if (style === "futuriste") {
        // Appliquer des classes CSS ou des styles en ligne
      }
      return prompt;
    }
  
    // Utilisation du prompt dans une page web :
    const promptElement = document.getElementById('prompt');
    promptElement.textContent = genererPrompt("Intelligence artificielle", "futuriste");
    `,
    "recommandations": [
      {
        "description": "Utiliser une bibliothèque de gestion d'états pour gérer les différents états des prompts (ouverts, fermés, en cours de saisie)."
      },
      {
        "description": "Mettre en place une structure de données claire pour stocker les différents types de prompts et leurs paramètres."
      },
      {
        "description": "Envisager d'utiliser des modèles de conception comme le modèle observateur pour gérer les mises à jour de l'interface utilisateur en fonction des changements d'état des prompts."
      }
    ]
  }