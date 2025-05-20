const questions = [
  "Who are you?",
  "What is your name?",
  "Question 2",
  "Question 3",
];

let currentQuestion = 0;

function nextQuestion() {
  const userAnswer = document.getElementById("typingBox").value;
  console.log("User answered:", userAnswer);
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    document.getElementById("promptBox").innerText = "";
    return;
  }

  document.getElementById("promptBox").innerText = questions[currentQuestion];
}

function clearAnswer() {
  document.getElementById("typingBox").value = "";
}
