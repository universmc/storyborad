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
  
    const SinglePage = 
    {
    "page_structure": {
      "page_type": "index", // ou "about", "contact", "product" etc.
      "style": "modern", // ou "minimaliste", "vintage", "futuriste" etc.
      "purpose": "présenter les produits", // ou "informer", "vendre", "engager" etc.
      "audience": "jeunes adultes", // ou "seniors", "professionnels", "grand public" etc.
      "tonalité": "dynamique", // ou "sérieux", "ludique", "élégant" etc.
      "éléments_clé": ["hero section", "call to action", "footer"], // liste des éléments essentiels
      "contraintes": "responsive design", // ou "compatibilité mobile", "faible temps de chargement" etc.
      "inspiration": "Dribbble", // ou "Behance", "un site concurrent" etc.
    },
    "exemple_prompt": "Crée un wireframe pour une page d'accueil moderne, destinée à un public de jeunes adultes, avec une section héro attrayante, un appel à l'action clair et un pied de page informatif. Le design doit être responsive et s'inspirer des tendances actuelles sur Dribbble.",
    "conseils": [
      "Sois aussi précis que possible dans ta description.",
      "Utilise des verbes d'action pour guider la génération.",
      "Expérimente avec différents styles et éléments.",
      "N'hésite pas à fournir des exemples visuels.",
      "Itère sur ton prompt jusqu'à obtenir le résultat souhaité."
    ]
  };

    const script = "[].js";

    groq.chat.completions.create({
        messages: [
            {role: "system",content:`Ìntégration des ${items} et programmation des ${iteration} et des exemple de ${SinglePage}`},
            {role: "assistant",content:`Crée un wireframe minimaliste pour une page de produit destinée à des professionnels. La page doit mettre en avant les caractéristiques clés du produit, avec un appel à l'action fort incitant à l'achat. Le design doit être épuré et inspirant, avec une touche de modernité. Le wireframe doit être responsive et optimisé pour un chargement rapide.`},
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
