const { app, Menu, Tray } = require('electron')
require('./src/Server')

function createWindow() {
    let tray = null
    app.whenReady().then(() => {
        tray = new Tray('../assets/logo.png')
        const contextMenu = Menu.buildFromTemplate([
            { label: 'Apple Music RP started.' },
        ])
        tray.setToolTip('Apple Music RP')
        tray.setContextMenu(contextMenu)
    })
}

app.whenReady().then(createWindow)
