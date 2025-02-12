// ascii_module.js
function drawBanner(text) {
    // Votre code pour dessiner une bannière ASCII
    console.log("╔═══════════════════════════════════════════╗");
    console.log(`║${text.padStart(40)}║`);
    console.log("╚═══════════════════════════════════════════╝");
}

// Autres fonctions pour dessiner différentes figures ASCII

module.exports = {
    drawBanner
};