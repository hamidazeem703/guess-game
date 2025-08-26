// Game State
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highscore = 0;

// DOM Elements
let message = document.querySelector('.message');
let guess = document.querySelector('.guess');
let check = document.querySelector('.check');
let again = document.querySelector('.again');
let scoreEl = document.querySelector('.score');
let highscoreEl = document.querySelector('.highscore');
let secretEl = document.querySelector('.secretnumber');

// Modal Elements
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let modalText = document.querySelector('.modal-text');
let closeBtn = document.querySelector('.close-modal');

// Utility Functions (DRY)
function displayMessage(msg, color = "blue") {
  message.textContent = msg;
  message.style.color = color;
}
function updateScore(newScore) {
  score = newScore;
  scoreEl.textContent = score;
}
function setBackground(color) {
  document.body.style.backgroundColor = color;
}
function showModal(text) {
  modalText.textContent = text;
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Game Logic
check.addEventListener('click', function () {
  let userGuess = Number(guess.value);

  if (userGuess < 1 || userGuess > 10) {
    showModal("⚠️ INVALID NUMBER (Enter 1 - 10)");
    displayMessage("INVALID NUMBER", "red");
  } 
  else if (!userGuess) {
    displayMessage("NO NUMBER ENTERED!", "red");
  } 
  else if (userGuess === secretNumber) {
    displayMessage("🎉 CORRECT NUMBER!", "green");
    secretEl.textContent = secretNumber;
    setBackground("rgb(0,255,0)");

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } 
  else if (userGuess !== secretNumber) {
    if (score > 1) {
      displayMessage(userGuess > secretNumber ? "ENTER LOWER NUMBER" : "ENTER HIGHER NUMBER", "orange");
      updateScore(score - 1);
    } else {
      showModal("💥 YOU LOST!");
      displayMessage("💥 YOU LOST!", "red");
      setBackground("rgb(200,0,0)");
      updateScore(0);
    }
  }
});

// Again Button
again.addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 10) + 1;

  updateScore(score);
  displayMessage("START GUESSING A NUMBER");
  secretEl.textContent = "?";
  guess.value = "";
  setBackground("#FFF9AF");
});

// Modal Close Events
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === "Escape" && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
