# 🎯 Guess My Number Game

A simple and fun **Guess My Number** game built with **HTML, CSS, and JavaScript**.  
The goal is to guess a random number between **1 and 10**. Your score decreases with each wrong attempt, and the game tracks your **highscore** across rounds. It’s a great beginner-friendly project to understand **DOM manipulation**, **events**, and **basic game logic** in JavaScript.

---

## 🚀 Features
- 🔢 Random number between **1–10**
- ⬇️ **Score decreases** on each wrong guess
- 🏆 **Highscore tracking** across rounds
- 🪟 **Popup modal messages** for invalid input & game over (ESC to close)
- 🎨 Clean and minimal UI with **responsive design**
- 🧹 Refactored with **DRY principle** for cleaner code
- 🔄 **Reset button** to restart the game anytime

---

## 📂 Project Structure
guess-number-game/
│── index.html # Game layout and structure
│── guessNumber.css # Styling (colors, layout, UI)
│── guessNumber.js # Game logic, DOM manipulation, modal handling
│── README.md # Project documentation

---

## 🕹️ How to Play
1. Enter a number between **1–10** in the input box.
2. Click **CHECK!** to submit your guess.
3. If your guess is wrong:
   - The **score decreases**.
   - A hint tells you whether to guess higher or lower.
4. If your guess is correct:
   - 🎉 A success message is shown.
   - Background turns green.
   - **Highscore** updates if it’s your best score.
5. If your score reaches **0** → 💥 You lose (a popup shows).
6. Click **AGAIN!** to restart the game.

---

## ⚡ Installation & Setup
To play locally:

```bash
# Clone this repository
git clone https://github.com/YOUR-USERNAME/guess-number-game.git

# Navigate into the folder
cd guess-number-game

# Open the game in your browser
open index.html   # (or double click index.html)
