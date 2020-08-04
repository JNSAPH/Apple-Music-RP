const express = require('express')
var cors = require('cors');

const clientId = '739608561503699119';
const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

const app = express()
const port = 6969

app.use(cors());

app.get('/:Title/:Artist/:Status', (req, res) => {
    // Discord RP Stuff goes here
      client.setActivity({
        details: req.params.Title,
        state: "by " + req.params.Artist,
        largeImageKey: 'logo',
        largeImageText: 'github.com/JNSAPH', 
        smallImageKey: req.params.Status == "true" ? 'play' : 'pause',
        instance: false
      }).catch(err => {
        console.log(err);
      });

  res.json({
      code: 200
  })
})

app.listen(port, () => {
  console.log(`Apple Music RP app listening at http://localhost:${port}`)
  client.login({clientId}).catch(console.error);
})