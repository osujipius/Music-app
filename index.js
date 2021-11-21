// Variable assignments

const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const title = document.querySelector("#title");


// Song Title

const songs = ["Mia", "No Guidance", "Panini", "Going bad", "Ballin",
 "Sunflower"];

 let songIndex = 0;

// Load song into DOM
loadSong(songs[songIndex]);

//Update song details
function loadSong(song) {
    title.innerText = song
    audio.src =`Songs/${song}.mp3`
};

function playSong() {
  musicContainer.classList.add("play")
  playBtn.querySelector("i.fas").classList.remove("fa-play")
  playBtn.querySelector("i.fas").classList.add("fa-pause")

  audio.play()
}

function pauseSong() {
    musicContainer.classList.remove("play")
    playBtn.querySelector("i.fas").classList.add("fa-play")
    playBtn.querySelector("i.fas").classList.remove("fa-pause")

    audio.pause()
}

function prevSong() {
   songIndex--

   if (songIndex < 0) {
       songIndex = songs.length - 1
   }

   loadSong(songs[songIndex])

   playSong()
};

function nextSong () {
    songIndex++

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }
 
    loadSong(songs[songIndex])
 
    playSong()
}



// Even listeners
playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play")

    if(isPlaying) {
        pauseSong()
    } else{
        playSong()
    
    }
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong)



