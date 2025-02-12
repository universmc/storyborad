function binaryToHex(binary) {
    // Vérification que l'entrée est bien un nombre binaire
    if (!/^[01]+$/.test(binary)) {
      return "Entrée invalide. Veuillez entrer un nombre binaire.";
    }
  
    return parseInt(binary, 2).toString(16).toUpperCase();
  }
  
  function hexToBinary(hex) {
    // Vérification que l'entrée est bien un nombre hexadécimal
    if (!/^[0-9A-Fa-f]+$/.test(hex)) {
      return "Entrée invalide. Veuillez entrer un nombre hexadécimal.";
    }
  
    return parseInt(hex, 16).toString(2);
  }
  
  module.exports = {
    drawBanner,
    binaryToHex,
    hexToBinary
  };