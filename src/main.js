'use strict';
const {app, BrowserWindow} = require('electron')
const electronReload = require('electron-reload')

const createWindow = () => {
    const win = new BrowserWindow({
        width:800,
        height:600,
        // icon: __dirname + '/Bluetooth.ico',
    })

    win.loadFile('./public/index.html');
}

app.on('ready', () => {
    createWindow();
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows.length === 0) createWindow();
})