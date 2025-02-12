// prompt.js
const document = {
    "description": "Ce fichier JavaScript sert à générer dynamiquement du contenu HTML en fonction de paramètres définis. Il est particulièrement utile pour créer des interfaces utilisateur personnalisées et interactives.",
    "framework": "Aucun framework spécifique n'est requis pour ce fichier, mais il peut être intégré à n'importe quel projet web existant.",
    "pageWeb": {
      "type": "SinglePage",
      "style": "futuriste",
      "topic": "Intelligence Artificielle"
    },
    "structure": {
      "variables": "Définir des variables pour stocker les paramètres de la page (style, thème, contenu dynamique).",
      "fonctions": {
        "genererHTML": "Fonction principale qui construit le code HTML en fonction des variables et des templates."
      },
      "evenements": "Associer des événements aux éléments HTML pour créer des interactions (clics, survol, etc.)."
    },
    "exemples": {
      "generationDynamique": "Créer des sections de contenu qui changent en fonction de l'interaction de l'utilisateur.",
      "personnalisation": "Adapter l'apparence de la page en fonction des préférences de l'utilisateur.",
      "intégrationAI": "Utiliser une API d'intelligence artificielle pour générer du contenu dynamique (textes, images, etc.)."
    },
    "recommandations": {
      "templates": "Utiliser un moteur de templates (Handlebars, Mustache) pour faciliter la génération de HTML.",
      "modularite": "Structurer le code en modules pour une meilleure organisation et réutilisabilité.",
      "optimisation": "Minimiser le nombre de requêtes HTTP pour améliorer les performances de la page.",
      "accessibilite": "Respecter les normes d'accessibilité (WCAG) pour rendre la page utilisable par tous."
    }
  };
function genererHTML() {
    const theme = "futuriste";
    const contenu = "Bienvenue dans le monde de l'intelligence artificielle !";
  
    const html = `
      <div class="container ${theme}">
        <h1>${contenu}</h1>
        </div>
    `;
  
    document.body.innerHTML = html;
  }
  
  genererHTML();