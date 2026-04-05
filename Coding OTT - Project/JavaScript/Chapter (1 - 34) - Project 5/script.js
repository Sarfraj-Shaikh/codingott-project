// Task: 1

const userGuess = document.getElementById("userGuess");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");

const message = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");

let randomNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;
let maxAttempts = 20;
let gameOver = false;

function showMessage(text, className) {

    message.innerHTML = text;
    message.style.display = "block";

    message.classList.remove("success", "fail", "warning");

    if (className) {
        message.classList.add(className);
    }
}


function checkGuess() {

    resetBtn.style.display = "none";

    if (gameOver === true) {
        showMessage("Game is over! Click Reset.", "fail");
        return;
    }

    let guess = Number(userGuess.value);

    if (guess < 1 || guess > 50 || isNaN(guess)) {
        showMessage("❌ Please enter a number between 1 and 50.", "warning");
        return;
    }

    attempts++;
    attemptsEl.innerHTML = attempts;

    if (guess === randomNumber) {
        showMessage(`✅ Correct! You took ${attempts} attempts.`, "success");
        gameOver = true;
        checkBtn.disabled = true;
        return;
    }

    let difference = Math.abs(randomNumber - guess);

    if (difference <= 10) {

        showMessage("🔥 Very Close!", "warning");

    } else if (guess > randomNumber) {

        showMessage("📈 Too High!", "fail");

    } else {

        showMessage("📉 Too Low!", "fail");

    }

    if (attempts >= maxAttempts) {

        showMessage(`❌ You Failed! The number was ${randomNumber}.`, "fail");
        gameOver = true;
        checkBtn.disabled = true;
        resetBtn.style.display = "block";

    }

    userGuess.value = "";
    userGuess.focus();

}

function resetGame() {

    randomNumber = Math.floor(Math.random() * 50) + 1;
    attempts = 0;
    gameOver = false;

    attemptsEl.innerHTML = attempts;
    userGuess.value = "";
    checkBtn.disabled = false;

    showMessage("Start guessing...", "");
    message.style.display = "none";
    userGuess.focus();
    resetBtn.style.display = "none";
}

checkBtn.addEventListener("click", checkGuess);

resetBtn.addEventListener("click", resetGame);

userGuess.addEventListener("keyup", function (event) {

    if (event.key === "Enter") {
        checkGuess();
    }

});