let loop = false;
const audio = document.querySelector("#custom-audio-player");
const loopButton = document.querySelector("#loop-btn");
const decreaseVolumeButton = document.querySelector("#decrease-volume-btn");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const increaseVolumeButton = document.querySelector("#increase-volume-btn");
const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
const progressBar = document.querySelector("#progress-bar-fill");
audio.addEventListener("timeupdate", updateProgressBar);
loopButton.addEventListener("click", loopAudio);
audio.addEventListener("ended", replay);
decreaseVolumeButton.addEventListener("click", decreaseVolume);
playPauseBtn.addEventListener("click", togglePlay);
increaseVolumeButton.addEventListener("click", increaseVolume);
muteUnmuteButton.addEventListener("click", toggleAudio);
audio.removeAttribute("controls");

function togglePlay() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    audio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

function replay() {
  console.log("loop is", loop);
  if (loop) {
    audio.currentTime = 0;
    audio.play();
  }
}

function loopAudio() {
  if (loop) {
    loop = false;
    loopButton.style.backgroundColor = "#fc8b40";
  } else {
    loop = true;
    loopButton.style.backgroundColor = "#ffa4a4";
  }
  console.log("loop is", loop);
}

function decreaseVolume() {
  if (audio.volume > 0.11) {
    audio.volume -= 0.1;
    console.log("Volume decreased to:", audio.volume);
  }
}

function increaseVolume() {
  if (audio.volume < 1) {
    // Ensure the volume doesn't exceed 1
    audio.volume += 0.1; // Increase the volume by 0.1
    console.log("Volume increased to:", audio.volume);
  }
}

function toggleAudio() {
  if (audio.muted) {
    audio.muted = false;
    muteUnmuteButton.style.backgroundColor = "#fc8b40";
  } else {
    audio.muted = true;
    muteUnmuteButton.style.backgroundColor = "#ffa4a4";
  }
}

function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";
}
