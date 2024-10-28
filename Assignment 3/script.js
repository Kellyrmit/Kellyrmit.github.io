function changeAvatar(outfitImage) {
  document.getElementById("avatar").src = outfitImage; // Changes the avatar image
}

function confirmSelection() {
  // Redirect to the confirmation page
  window.location.href = "endgame.html"; // Change this to your target page
}

function playAgain() {
  window.location.href = "index.html"; // Redirect to index.html
}
