const OpenAI = require("openai");
const axios = require("axios");
const fs = require("fs");
const openai = new OpenAI();

// 🔹 Liste d’emojis dynamiques pour l'affichage des logs
const emojis = {
  start: "🚀",
  success: "✅",
  error: "❌",
  downloading: "📥",
  saving: "💾",
};

// 🔹 Fonction pour générer une image avec DALL-E 3
async function generateImage(prompt, resolution = "1024x1024", outputPath = "output/") {
  try {
    console.log(`${emojis.start} Génération de l'image en cours avec le prompt : "${prompt}"...`);

    // 🔹 Appel à l'API OpenAI
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: resolution,
    });

    const imageUrl = response.data[0].url;
    console.log(`${emojis.downloading} Téléchargement de l'image depuis : ${imageUrl}`);

    // 🔹 Télécharger l’image
    const imageResponse = await axios.get(imageUrl, { responseType: "arraybuffer" });

    // 🔹 Générer un nom de fichier basé sur le prompt et la date
    const date = new Date().toISOString().split("T")[0];
    const sanitizedPrompt = prompt.replace(/[^a-zA-Z0-9]/g, "_").substring(0, 50); // Nettoyer le prompt
    const fileName = `${outputPath}image_${sanitizedPrompt}_${date}.webp`;

    // 🔹 Sauvegarde locale
    fs.writeFileSync(fileName, imageResponse.data);
    console.log(`${emojis.success} Image générée et sauvegardée : ${fileName}`);
    
    return fileName;
  } catch (error) {
    console.error(`${emojis.error} Erreur lors de la génération de l'image :`, error.message);
  }
}

// 🔹 Exemple d’utilisation
const promptExample = "Imagine un storyboard fantastique dans un centre-ville futuriste 🌃🚀.";
const resolutionExample = "1792x1024";

generateImage(promptExample, resolutionExample);
