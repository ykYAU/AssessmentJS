const player = document.getElementById('player');
const musicphoto = document.getElementById('musicphoto');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const music = document.getElementById('music');

let isPlaying = false;
let currIndex = 0;


//Array
const aMusicD = [
    {
        tag: './music/bensound-betterdays.mp3',
        mimage: './image/betterdays.jpg',
        nartist: 'Benjamin Tissot',
        dmusicn: 'Better Days'
    },
    {
        tag: './music/bensound-sunny.mp3',
        mimage: './image/sunny.jpg',
        nartist: 'Benjamin Tissot',
        dmusicn: 'Sunny'
    },
    {
        tag: './music/bensound-ukulele.mp3',
        mimage: './image/ukulele.jpg',
        nartist: 'Benjamin Tissot',
        dmusicn: 'Ukulele'
    }
]
function playSong() {
   playBtn.querySelector('i.fa').classList.remove('fa-play');
   playBtn.querySelector('i.fa').classList.add('fa-pause');
   music.play();
}

function pauseSong() {
    playBtn.querySelector('i.fa').classList.add('fa-play');
    playBtn.querySelector('i.fa').classList.remove('fa-pause');
    music.pause();
 }
 

 function setSong(index) {

    player.innerHTML = `Playing ${index + 1} of ${aMusicD.length}`;
    musicphoto.src = aMusicD[index].mimage;
    title.innerHTML = aMusicD[index].dmusicn;
    artist.innerHTML= aMusicD[index].nartist;
    music.src = aMusicD[index].tag;
    
}


function prevSong() {
    currIndex--;
    if (currIndex < 0) {
        currIndex = aMusicD.length -1;
    }
    setSong(currIndex);
    playSong();
}

function nextSong() {
    currIndex++;
    if (currIndex > aMusicD.length -1) {
        currIndex = 0;
    }
    setSong(currIndex);
    playSong();
}



setSong(2);

// Event listeners

prevBtn.addEventListener('click', prevSong);

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
        isPlaying = false;
    } else {
        playSong();
        isPlaying = true;
    }
});

nextBtn.addEventListener('click', nextSong);
