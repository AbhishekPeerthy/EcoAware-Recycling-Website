// EcoAware quiz: questions, answer checking and score.
// This file uses only JavaScript included with the website.

var questions = [
  {q:'Which is usually the best first step for reducing waste?',a:['Buy more packaging','Avoid unnecessary purchases','Throw away reusable items'],correct:1,why:'Reducing unnecessary consumption prevents waste before it exists.'},
  {q:'What should you do with a plastic bottle before recycling it?',a:['Empty it and follow local instructions','Fill it with food scraps','Put it in general waste every time'],correct:0,why:'Empty containers and follow your council’s collection guidance.'},
  {q:'Where should household batteries normally go?',a:['Ordinary recycling bin','Designated battery collection point','Food waste bin'],correct:1,why:'Batteries need specialist collection and must not go in ordinary bins.'},
  {q:'What is a good way to reduce single-use plastic?',a:['Use a refillable bottle','Buy extra disposable cups','Replace reusable bags weekly'],correct:0,why:'Refillable bottles reduce the need for disposable ones.'},
  {q:'What should you do if you are unsure whether packaging is accepted?',a:['Guess','Check local council guidance','Put it in any bin'],correct:1,why:'Recycling rules vary between local authorities.'},
  {q:'Which material is commonly accepted when clean and dry?',a:['Paper and cardboard','Food-covered tissues','Ceramic mugs'],correct:0,why:'Many local collections accept clean, dry paper and cardboard.'},
  {q:'What is a sensible option for a working old phone?',a:['Put it in household rubbish','Donate or use a verified take-back scheme','Put it in food waste'],correct:1,why:'Reuse and approved electronics collection can keep devices in circulation.'},
  {q:'What is generally better than recycling a usable item?',a:['Throwing it away','Reusing or repairing it','Buying a replacement immediately'],correct:1,why:'Reuse can extend a product’s life and avoid waste.'},
  {q:'Which item often needs different treatment from glass bottles and jars?',a:['Glass jar','Glass drinks bottle','Ceramic plate'],correct:2,why:'Ceramics are not processed the same way as bottle and jar glass.'},
  {q:'What is EcoAware’s locator currently showing?',a:['Live council-verified results','Clearly labelled fictional examples','A real-time GPS map'],correct:1,why:'The locator is a demonstration and does not access live centre data.'}];

var questionNumber = 0;
var score = 0;
var hasAnswered = false;

var questionText = document.getElementById("quiz-question");
var answersBox = document.getElementById("quiz-answers");
var feedback = document.getElementById("quiz-feedback");
var nextButton = document.getElementById("quiz-next");
var counter = document.getElementById("quiz-counter");
var scoreText = document.getElementById("quiz-score");
var progressBar = document.getElementById("quiz-progress");

// Show the current question and create answer buttons.
function showQuestion() {
  hasAnswered = false;
  var question = questions[questionNumber];

  questionText.textContent = question.q;
  counter.textContent = "Question " + (questionNumber + 1) + " of " + questions.length;
  scoreText.textContent = "Score: " + score;
  progressBar.style.width = (questionNumber / questions.length * 100) + "%";
  feedback.textContent = "";
  answersBox.innerHTML = "";

  nextButton.disabled = true;
  nextButton.textContent = questionNumber === questions.length - 1
    ? "See my results →" : "Next question →";

  for (var i = 0; i < question.a.length; i++) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.textContent = String.fromCharCode(65 + i) + ". " + question.a[i];
    button.dataset.answer = i;
    button.addEventListener("click", checkAnswer);
    answersBox.appendChild(button);
  }
}

// Check the selected answer and show feedback.
function checkAnswer(event) {
  if (hasAnswered) return;
  hasAnswered = true;

  var chosen = Number(event.target.dataset.answer);
  var question = questions[questionNumber];

  if (chosen === question.correct) score++;

  var buttons = answersBox.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    if (i === question.correct) buttons[i].classList.add("correct");
    if (i === chosen && chosen !== question.correct) {
      buttons[i].classList.add("incorrect");
    }
  }

  feedback.textContent = (chosen === question.correct ? "Correct! " : "Not quite. ")
    + question.why;
  scoreText.textContent = "Score: " + score;
  nextButton.disabled = false;
}

// Show the final score.
function finishQuiz() {
  counter.textContent = "Quiz complete";
  scoreText.textContent = "Final score: " + score + "/" + questions.length;
  progressBar.style.width = "100%";
  questionText.textContent = score >= 8 ? "Excellent work! 🌿"
    : score >= 5 ? "Good effort! 🌱" : "Keep learning! ♻";

  answersBox.innerHTML = "";
  var message = document.createElement("p");
  message.textContent = "You answered " + score + " out of " + questions.length
    + " questions correctly. Explore the guide to learn more.";
  answersBox.appendChild(message);
  feedback.textContent = "";
  nextButton.textContent = "Restart quiz ↻";
  nextButton.disabled = false;
}

// Move to the next question, or restart after the results.
nextButton.addEventListener("click", function () {
  if (questionNumber >= questions.length) {
    questionNumber = 0;
    score = 0;
    showQuestion();
    return;
  }

  if (!hasAnswered) return;

  questionNumber++;
  if (questionNumber < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
});

showQuestion();
