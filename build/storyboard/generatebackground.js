import { Configuration, OpenAIApi } from 'openai';
import fs from 'fs';
import axios from 'axios';

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

// Générer une image avec DALL-E 3
async function generateImage(prompt, outputPath = 'build/background.png') {
    try {
        const response = await openai.createImage({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });

        const imageUrl = response.data.data[0].url;
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        fs.writeFileSync(outputPath, imageResponse.data);

        console.log(`✅ Image générée et sauvegardée : ${outputPath}`);
    } catch (error) {
        console.error("❌ Erreur lors de la génération d'image :", error);
    }
}

// Exemple d'utilisation
generateImage("Un paysage cyberpunk avec des néons et des gratte-ciels futuristes.");
