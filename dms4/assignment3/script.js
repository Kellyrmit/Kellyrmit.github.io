const questions = [
  "Who are you?",
  "What a weird-sounding name... Nice to meet you, I'm **** *** ********. ",
  "Question 2",
  "Question 3",
];

let currentQuestion = 0;

function nextQuestion() {
  const userAnswer = document.getElementById("typingBox").value;
  console.log("User answered:", userAnswer);
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    document.getElementById("promptBox").value = "";
    return;
  }

  document.getElementById("promptBox").value = questions[currentQuestion];
}

function clearAnswer() {
  document.getElementById("typingBox").value = "";
}
