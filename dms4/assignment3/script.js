window.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("popupDialog");
  dialog.showModal();

  document.getElementById("continueBtn").addEventListener("click", () => {
    dialog.close();
  });
});

const questions = [
  "Who are you?",
  "What a weird-sounding name... Nice to meet you, I'm **** *** ********. ",
  "Question 2",
  "Question 3",
];

let currentQuestion = 0;

function nextQuestion() {
  const userAnswer = document.getElementById("typingBox").innerText;
  console.log("User answered:", userAnswer);
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    document.getElementById("promptBox").innerText = "";
    return;
  }

  document.getElementById("promptBox").innerText = questions[currentQuestion];
}

function clearAnswer() {
  document.getElementById("typingBox").innerText = "";
}
