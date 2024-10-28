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
