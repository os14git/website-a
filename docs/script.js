// const audio = new Audio('audio/lp2menu.mp3');
// const playButton = document.getElementById('playButton');

// playButton.addEventListener('click', function() {
//     audio.play()
//         .catch(error => {
//             console.error("Playback failed:", error);
//         });
// });
const gamephotostl = document.getElementById('gamephotostl');
const audio = document.getElementById('hoverSound1');

gamephotostl.addEventListener('mouseenter', () => {
    audio.currentTime = 0; // Reset to start
    audio.play();
});

gamephotostl.addEventListener('mouseleave', () => {
    audio.pause(); // Stop playback
});

const gamephotosbr = document.getElementById('gamephotosbr');
const audio1 = document.getElementById('hoverSound2');

gamephotosbr.addEventListener('mouseenter', () => {
    audio1.currentTime = 0; // Reset to start
    audio1.playbackRate = 1;
    audio1.play();
});

gamephotosbr.addEventListener('mouseleave', () => {
    audio1.pause(); // Stop playback
});


const gamephotosbl = document.getElementById('gamephotosbl');
const audio2 = document.getElementById('hoverSound3');

gamephotosbl.addEventListener('mouseenter', () => {
    audio2.currentTime = 0; // Reset to start
    audio2.play();
});

gamephotosbl.addEventListener('mouseleave', () => {
    audio2.pause(); // Stop playback
});

const gamephotostr = document.getElementById('gamephotostr');
const audio3 = document.getElementById('hoverSound4');

gamephotostr.addEventListener('mouseenter', () => {
    audio3.currentTime = 0; // Reset to start
    audio3.play();
});

gamephotostr.addEventListener('mouseleave', () => {
    audio3.pause(); // Stop playback
});