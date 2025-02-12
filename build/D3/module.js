const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {

  const CDN = "https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js";
  const D3 = "https://d3js.org/api";
  const groq =`<script src="https://cdn.jsdelivr.net/npm/groq-js@1.15.0/dist/index.min.js"></script> `

  const items = `${CDN},${D3},${groq}`;

  const iteration = "'index.html','style.css','scripts.js','anime.scss','beta.svg',"

  const borderChars = {topLeft: '╔',topRight: '╗',bottomLeft: '╚',bottomRight: '╝', horizontal: '═',vertical: '║',intersectionLeft: '╠',intersectionRight: '╣',intersectionTop: '╦',intersectionBottom: '╩',intersectionCross: '╬',
  };
  
  groq.chat.completions.create({
    "messages": [
      {role: "system",name:"system", content:`Ìntégration des ${items} et programmatoion de ${iteration}`},
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