const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {
    const contexte = "SinglePage: Développement du modèle de réponse au format HTML";
    const CDN = "https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js";
    const D3 = "https://d3js.org/d3.v7.min.js";
    const groqCDN ="https://cdn.jsdelivr.net/npm/groq-js@1.15.0/dist/index.min.js";
    const threeJs ="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.172.0/three.tsl.js";
    const bootstrapJs ="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    const bootstrapCSS ="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";

    const bootstrap = `${bootstrapCSS},${bootstrapJs}`;
    const items = `${bootstrap},${CDN},${D3},${groqCDN},${threeJs}`;
  
    const iteration = "'index.html','style.css','scripts.js','icon.svg',"
    const theme = "[]"
    const contenu = "[]"
    const script = "[].js";

    groq.chat.completions.create({
        messages: [
            {role: "system",content:`Ìntégration des ${items} et programmatoion de ${iteration}`},
            {role: "assistant",content:`Crée un wireframe minimaliste pour une page de produit destinée à des professionnels. La page doit mettre en avant les caractéristiques clés du produit, avec un appel à l'action fort incitant à l'achat. Le design doit être épuré et inspirant, avec une touche de modernité. Le wireframe doit être responsive et optimisé pour un chargement rapide.`},
            {role: "system",content:`// prompt.js
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
  
    const html = '
      <div class="container ${theme}">
        <h1>${contenu}</h1>
        </div>
    ';
  
    document.body.innerHTML = html;
  }
  
  genererHTML();`},
            {
                role: "user",
                content: `ta réponse doit intégralement être rédigé au format HTML En intégrant le ${script} pour afficher le ${contexte}.json , En respectant les normes du Web sémantique W3C`
            }
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0.8,
        max_tokens: 2048,
        top_p: 1,
        stop: null,
        stream: false
}).then((chatCompletion) => {
        const htmlContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "Json_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
        fs.writeFileSync(outputFilePath, htmlContent);
        console.log("Documentation générée et enregistrée dans " + outputFilePath);
    });
}
main();
