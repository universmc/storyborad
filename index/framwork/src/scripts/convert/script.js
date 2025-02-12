// ... votre JavaScript existant ...

ipcMain.on('binary-to-hexa', (event, binary) => {
    const { binaryToHex } = require('./ascii_module');
    event.reply('reply', binaryToHex(binary));
  });
  
  ipcMain.on('hexa-to-binary', (event, hex) => {
    const { hexToBinary } = require('./ascii_module');
    event.reply('reply', hexToBinary(hex));
  });