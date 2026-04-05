// Task: 1

let allQuiz = [
    {

        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Jupiter", "Mars", "Saturn"],
        correct: 2
    },
    {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    },
    {
        question: "Who invented the light bulb?",
        options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Albert Einstein"],
        correct: 1
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Graphite"],
        correct: 2
    },
    {
        question: "Which country is home to the ancient city of Petra?",
        options: ["Egypt", "Jordan", "Greece", "Turkey"],
        correct: 1
    }
];

let totalQuestions = allQuiz.length;

function loadQuiz() {

    let questionText = document.getElementById("questionText");
    let optionsBtn1 = document.getElementById("optionsBtn1");
    let optionsBtn2 = document.getElementById("optionsBtn2");
    let optionsBtn3 = document.getElementById("optionsBtn3");
    let optionsBtn4 = document.getElementById("optionsBtn4");

    const optionButtons = [optionsBtn1, optionsBtn2, optionsBtn3, optionsBtn4];

    const scoreEl = document.getElementById("score");
    const nextBtn = document.getElementById("nextBtn");

    const currentQEl = document.getElementById("currentQ");
    const totalQEl = document.getElementById("totalQ");

    const quizScreen = document.getElementById("quizScreen");
    const resultScreen = document.getElementById("resultScreen");
    const finalScoreEl = document.getElementById("finalScore");
    const finalTotalEl = document.getElementById("finalTotal");

    const restartBtn = document.getElementById("restartBtn");

    let userScore = 0;
    let currentQuestionIndex = 0;

    totalQEl.innerHTML = allQuiz.length;
    finalTotalEl.innerHTML = allQuiz.length;

    function loadQuestion() {

        nextBtn.disabled = true;

        const currentQuestion = allQuiz[currentQuestionIndex];
        currentQEl.innerHTML = currentQuestionIndex + 1;

        for (let i = 0; i < optionButtons.length; i++) {

            questionText.innerHTML = currentQuestion.question;

            optionButtons[i].innerHTML = `${String.fromCharCode(65 + i)}) ${currentQuestion.options[i]}`;

            optionButtons[i].classList.remove("correct");
            optionButtons[i].classList.remove("wrong");

            optionButtons[i].disabled = false;
        }
    }

    function checkAnswer(selectedIndex) {

        const correctIndex = allQuiz[currentQuestionIndex].correct;

        for (let i = 0; i < optionButtons.length; i++) {
            optionButtons[i].disabled = true;
        }

        // correct answer case
        if (selectedIndex === correctIndex) {
            userScore++;
            scoreEl.innerHTML = userScore;

            optionButtons[selectedIndex].classList.add("correct");
        }
        // wrong answer case
        else {
            optionButtons[selectedIndex].classList.add("wrong");
            optionButtons[correctIndex].classList.add("correct");
        }

        // enable next button after selection
        nextBtn.disabled = false;
    }


    // ================================
    // FUNCTION: Next Question
    // ================================
    function nextQuestion() {
        currentQuestionIndex++;

        if (currentQuestionIndex >= allQuiz.length) {
            showResult();
        } else {
            loadQuestion();
        }
    }


    // ================================
    // FUNCTION: Show Result
    // ================================
    function showResult() {
        quizScreen.style.display = "none";
        resultScreen.style.display = "block";

        finalScoreEl.innerHTML = userScore;
    }


    // ================================
    // FUNCTION: Restart Quiz
    // ================================
    function restartQuiz() {
        currentQuestionIndex = 0;
        userScore = 0;

        scoreEl.innerHTML = userScore;

        resultScreen.style.display = "none";
        quizScreen.style.display = "block";

        loadQuestion();
    }


    // ================================
    // EVENT LISTENERS (Loop use)
    // ================================
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].addEventListener("click", function () {
            checkAnswer(i);
        });
    }

    nextBtn.addEventListener("click", nextQuestion);
    restartBtn.addEventListener("click", restartQuiz);
}

loadQuiz();
loadQuestion();