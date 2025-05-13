const questions = [
  "Who are you?",
  "What a weird-sounding name... Nice to meet you, I'm **** *** ********. ",
];

let currentQuestion = 0;

function nextQuestion() {
  const userAnswer = document.getElementById("typingBox").value;
  console.log("User answered:", userAnswer);
  currentQuestion++;

  document.getElementById("promptBox").value = questions[currentQuestion];
}

function clearAnswer() {
  document.getElementById("typingBox").value = "";
}
