const express = require('express')
var cors = require('cors');
const client = require('discord-rich-presence')('739608561503699119');
const app = express()
const port = 6969

app.use(cors());

app.get('/:Title/:Artist', (req, res) => {
    // Discord RP Stuff goes here
    client.updatePresence({
        state: req.params.Title,
        details: req.params.Artist,
        largeImageKey: 'logo',
        smallImageKey: 'play',
        instance: true,
      });

  res.json({
      code: 200
  })

  console.log("Changed Rich Presence to " + req.params.Title, req.params.Artist)
})

app.listen(port, () => {
  console.log(`Apple Music RP app listening at http://localhost:${port}`)
})