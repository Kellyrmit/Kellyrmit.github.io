const questions = [
  "Who are you?",
  "What a weird-sounding name... Nice to meet you, I'm **** *** ********. ",
];

let currentQuestion = 0;

function nextQuestion() {
  currentQuestion++;
  document.getElementById("promptBox").value = questions[currentQuestion];
}
