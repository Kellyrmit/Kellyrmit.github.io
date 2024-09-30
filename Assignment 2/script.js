let loop = false; // Variable to track whether the audio is looping.
//Down below are the references to the buttons and progress bar elements from the html file.
const audio = document.querySelector("#custom-audio-player");
const loopButton = document.querySelector("#loop-btn");
const decreaseVolumeButton = document.querySelector("#decrease-volume-btn");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const increaseVolumeButton = document.querySelector("#increase-volume-btn");
const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
const progressBar = document.querySelector("#progress-bar-fill");
// Event listeners: Functions are triggered user clicks on the buttons.
// I did so much trial and error to get these buttons working, i figured after a while to put these event listeners in one place, otherwise it'll not work and the original audio controls would appear.
audio.addEventListener("timeupdate", updateProgressBar);
loopButton.addEventListener("click", loopAudio);
audio.addEventListener("ended", replay);
decreaseVolumeButton.addEventListener("click", decreaseVolume);
playPauseBtn.addEventListener("click", togglePlay);
increaseVolumeButton.addEventListener("click", increaseVolume);
muteUnmuteButton.addEventListener("click", toggleAudio);
audio.removeAttribute("controls"); // Hide default audio controls

// Function to toggle play/pause button
function togglePlay() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    audio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// Function to replay audio when it ends if loop is enabled.
function replay() {
  console.log("loop is", loop);
  if (loop) {
    // If the loop is enabled, the audio resets to the start and plays again
    audio.currentTime = 0;
    audio.play();
  }
}
// Function to toggle the loop function.
function loopAudio() {
  if (loop) {
    loop = false;
    loopButton.style.backgroundColor = "#fc8b40";
  } else {
    loop = true;
    loopButton.style.backgroundColor = "#ffa4a4"; // This is to let users know when the loop is on. I styled it pink to match the colour scheme.
  }
  console.log("loop is", loop);
}

// Function to decrease the volume.
function decreaseVolume() {
  if (audio.volume > 0.11) {
    // This prevents the volume from going below a minimum threshold
    audio.volume -= 0.1; // Decreases volume by 0.1.
    console.log("Volume decreased to:", audio.volume);
  }
}
// Function to increase the volume.
function increaseVolume() {
  if (audio.volume < 1) {
    // This ensures the volume doesn't exceed the maximum value of (1).
    audio.volume += 0.1; // Increases the volume by 0.1.
    console.log("Volume increased to:", audio.volume);
  }
}
// Function to toggle mute/unmute function.
function toggleAudio() {
  if (audio.muted) {
    audio.muted = false;
    // Unmute the audio
    muteUnmuteButton.style.backgroundColor = "#fc8b40";
  } else {
    audio.muted = true;
    // Mute the audio
    muteUnmuteButton.style.backgroundColor = "#ffa4a4"; // This is to let users know that they muted the music. I also made it pink to maintain consistency.
  }
}
// Function to update the progress bar as the audio plays
function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";
} // This calculates the progress as a percentage and sets the width based on the audio progress.
