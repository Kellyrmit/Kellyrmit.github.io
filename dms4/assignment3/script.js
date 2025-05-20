const questions = [
  "Who are you?",
  "What is your name, Earthling?",
  "Nevermind, human names are bothersome. I'll just call you Earthling.",
  "Earthling, we are compiling intelligence on Earth lifeforms. Can you describe how your day went?",
  "Ah, yes — classic Earthling behavior. Emotional turbulence, minor victories, and caffeine-based sustenance. Interesting.  ",
  "If one day, an apocalyse came and you're free from work, what would you do with your freedom? Hypothetically, of course :)",
  "Intruiging. Without work to define your existence, who are you as a person?",
  "I see. Thank you for your input, Earthling. You're free to do whatever you like with your remaining time on earth.",
  "...",
  "...",
  "Persistent Earthing, do you want to die faster with what short time you have left ^^?",
];

let currentQuestion = 0;

function nextQuestion() {
  const userAnswer = document.getElementById("typingBox").value;
  console.log("User answered:", userAnswer);
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    promptBox.innerText = "";
    return;
  }

  promptBox.classList.remove("typing");
  void promptBox.offsetWidth;
  promptBox.classList.add("typing");

  promptBox.innerText = questions[currentQuestion];
}

function clearAnswer() {
  document.getElementById("typingBox").value = "";
}
