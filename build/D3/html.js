const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {

    const contexte = "test: la véritable réussite de la préservation de la vie humaine";

    const json = "[]";
    const script = "[]";

    groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: `convertir ${contexte} ce contexte au format JSON,`
            },
            {
                role: "assistant",
                content: `rédiger la synchrone en JavaScript du fichier ${json} pour servire de ${script}.js d'affichage pour une page HTML`
            },
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
