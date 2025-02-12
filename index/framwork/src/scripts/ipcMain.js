// main.js
const { ipcMain } = require('electron');

ipcMain.on('draw-banner', (event, text) => {
    const { drawBanner } = require('./test.js');
    drawBanner(text);
});