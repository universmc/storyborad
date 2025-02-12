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
  
    const script = "[].js";

    groq.chat.completions.create({
        messages: [
            {role: "system",content:`Ìntégration des ${items} et programmatoion de ${iteration}`},
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
