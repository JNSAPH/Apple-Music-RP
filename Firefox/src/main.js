console.log("Apple Music RP is working on this Page. Please Start the Server if you haven't.")

function getSongDetails() {
    let Title = document.getElementsByClassName('web-chrome-playback-lcd__song-name-scroll-inner-text-wrapper')[0]
    let Artist = document.getElementsByClassName('web-chrome-playback-lcd__sub-copy-scroll-inner-text-wrapper')[0]
    //let SongDuration = document.getElementsByClassName('web-chrome-playback-lcd__scrub')[0].max / 60 // Might gets used later
    let PlayStatus = document.getElementsByClassName('button-reset web-chrome-playback-controls__playback-btn')[1]
    pingServer(Title, Artist, PlayStatus)
}

function pingServer(Title, Artist, PlayStatus) {
    let Status = false
    if (PlayStatus.attributes[0].name == "data-test-playback-control-pause") Status = true;
    if (!Title) return fetch(`http://localhost:6969/undefined/undefined/${Status}`)
    fetch(`http://localhost:6969/${Title.innerText}/${Artist.innerText}/${Status}`)
}

setInterval(() => {
    getSongDetails()
}, 1000 * 5);




