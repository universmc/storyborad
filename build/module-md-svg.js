const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
const borderChars = {topLeft: '╔',topRight: '╗',bottomLeft: '╚',bottomRight: '╝', horizontal: '═',vertical: '║',intersectionLeft: '╠',intersectionRight: '╣',intersectionTop: '╦',intersectionBottom: '╩',intersectionCross: '╬',
  };
  
  const generateSVG = await groq.chat.completions.create({
    "messages": [
      {role: "system",name:"system", content:"initiation du module generateSVG "},
      {role: "assistant",name:"generateSVG", content:"Comprendre et Maitrisé le SVG howto_SVG.md"},
    ],
    model: "gemma2-9b-it",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((generateSVG)=>{
    const mdContent = generateSVG.choices[0]?.message?.content;
    const outputFilePath = "mdMessages_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();