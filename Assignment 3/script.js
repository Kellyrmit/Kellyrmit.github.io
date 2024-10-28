window.addEventListener("load", function () {
  const audio = document.getElementById("background-music");
  audio.play().catch((error) => {
    console.log("Autoplay was blocked. Waiting for user interaction.");
  });
}); //Trying to get the music to autoplay when my website loads, but it still doesn't work :(

function changeAvatar(outfitImage) {
  document.getElementById("avatar").src = outfitImage; // Changes the avatar image
}

function confirmSelection() {
  // Redirect to the end game page
  window.location.href = "endgame.html";
}

function playAgain() {
  // Redirect back to the main game page
  window.location.href = "index.html";
}
