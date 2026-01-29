// Get references to the elements
const hoverArea = document.getElementsByTagName('gamephotostl')
const audio = document.getElementById('lpmusic');

// Add event listener for mouse entering the element
hoverArea.addEventListener('mouseenter', function() {
  // Reset the audio to the beginning every time
  audio.currentTime = 0; 
  audio.play();
});

// Add event listener for mouse leaving the element
hoverArea.addEventListener('mouseleave', function() {
  audio.pause();
  // Optional: reset current time if you want it to restart from the beginning on next hover
  // audio.currentTime = 0; 
});