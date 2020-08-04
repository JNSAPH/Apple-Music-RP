console.log("Apple Music RP is working on this Page. Please Start the Server if you haven't.")

function getSongDetails() {
    let Title = document.getElementsByClassName('web-chrome-playback-lcd__song-name-scroll-inner-text-wrapper')[0].innerText
    let Artist = document.getElementsByClassName('web-chrome-playback-lcd__sub-copy-scroll-inner-text-wrapper')[0].innerText
    //let SongDuration = document.getElementsByClassName('web-chrome-playback-lcd__scrub')[0].max / 60 // Might gets used later
    let PlayStatus = document.getElementsByClassName('button-reset web-chrome-playback-controls__playback-btn')[1].attributes[0].name // Might gets used later
    pingServer(Title, Artist, PlayStatus)
}

function pingServer(Title, Artist, PlayStatus) {
    let Status = false
    if (PlayStatus == "data-test-playback-control-pause") Status = true;
    fetch(`http://localhost:6969/${Title}/${Artist}/${Status}`)
}

setInterval(() => {
    getSongDetails()
}, 1000 * 5);




