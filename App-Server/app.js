const { app, Menu, Tray } = require('electron')
require('./src/Server')

app.whenReady()
.then(() => {
    let tray = new Tray('../assets/logo.png')
    const contextMenu = Menu.buildFromTemplate([
        { label: 'Apple Music RP' },
    ])
    tray.setToolTip('Apple Music RP')
    tray.setContextMenu(contextMenu)
})
