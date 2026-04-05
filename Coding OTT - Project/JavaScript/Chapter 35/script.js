// Task: 1

let alertBtn = document.getElementById("alertBtn");

alertBtn.addEventListener("click", function () {

    window.alert("Button clicked! DOM event working ✅")

});

// Task: 2

let changeTextBtn = document.getElementById("changeTextBtn");
let resetTextBtn = document.getElementById("resetTextBtn");
let textTarget = document.getElementById("textTarget");
const originalText = document.getElementById("textTarget").innerHTML;

changeTextBtn.addEventListener("click", changeText);
resetTextBtn.addEventListener("click", resetText);

function changeText() {

    textTarget.innerHTML = "Website Made By Sarfraj!";
}

function resetText() {

    textTarget.innerHTML = originalText;

}

// Task: 3

let countNumber = 0;
let counterValue = document.getElementById("counterValue");
let incBtn = document.getElementById("incBtn");
let resetCounterBtn = document.getElementById("resetCounterBtn");

incBtn.addEventListener("click", increaseNumber);
resetCounterBtn.addEventListener("click", resetCounter);

function increaseNumber() {

    countNumber++;
    counterValue.textContent = countNumber;

}

function resetCounter() {

    countNumber = 0;
    counterValue.textContent = 0;
}

// Task: 4

let visibleStatus = "show";
let toggleBox = document.getElementById("toggleBox");
let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {


    if (visibleStatus === "hide") {

        toggleBtn.innerHTML = `<span class="icon">👁️</span> Hide`;
        toggleBox.style.display = "flex";
        visibleStatus = "show";

    } else {

        toggleBtn.innerHTML = `<span class="icon">🙈</span> Show`;
        toggleBox.style.display = "none";
        visibleStatus = "hide";
    }
});

// Task: 5

let colorBox = document.getElementById("colorBox");
let colorBlue = document.getElementById("colorBlue");
let colorGreen = document.getElementById("colorGreen");
let colorOrange = document.getElementById("colorOrange");
let colorRed = document.getElementById("colorRed");
let colorPurple = document.getElementById("colorPurple");
let colorDark = document.getElementById("colorDark");

colorBlue.addEventListener("click", function () {

    colorBox.style.backgroundColor = "#5b8cff";

});

colorGreen.addEventListener("click", function () {

    colorBox.style.backgroundColor = "#22c55e";

});

colorOrange.addEventListener("click", function () {

    colorBox.style.backgroundColor = "#f59e0b";

});

colorRed.addEventListener("click", function () {

    colorBox.style.backgroundColor = "#ef4444";

});

colorPurple.addEventListener("click", function () {

    colorBox.style.backgroundColor = "#7c5cff";

});

colorDark.addEventListener("click", function () {

    colorBox.style.backgroundColor = "#111827";

});