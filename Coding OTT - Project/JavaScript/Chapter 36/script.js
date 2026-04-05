// Task: 1

let timeRunning;
let startClockBtn = document.getElementById("startClockBtn");
let stopClockBtn = document.getElementById("stopClockBtn");

startClockBtn.addEventListener("click", startTime);
stopClockBtn.addEventListener("click", stopTime);

function updateTime() {

    let clock = document.getElementById("clock");

    let todayDate = new Date();
    const h = todayDate.getHours();
    const m = todayDate.getMinutes();
    const s = todayDate.getSeconds();

    clock.textContent = `${h}:${m}:${s}`;

}

function startTime() {

    timeRunning = setInterval(updateTime, 1000);

}

function stopTime() {

    clearInterval(timeRunning);

}

// Task: 2

let countDowm = 10;
let counter;

let countdownValue = document.getElementById("countdownValue");
let startCountdownBtn = document.getElementById("startCountdownBtn");
let restartCountdownBtn = document.getElementById("restartCountdownBtn");
let stopCountdownBtn = document.getElementById("stopCountdownBtn");


startCountdownBtn.addEventListener("click", function () {

    clearInterval(counter);

    counter = setInterval(function () {

        countDowm--;
        countdownValue.textContent = countDowm;

        if (countDowm == 0) {

            clearInterval(counter);
            window.alert("Time’s up!");
            countDowm = 0;
        }

    }, 1000);

});

stopCountdownBtn.addEventListener("click", function () {

    clearInterval(counter);

});

restartCountdownBtn.addEventListener("click", function () {

    clearInterval(counter);
    countDowm = 10;

    counter = setInterval(function () {

        countDowm--;
        countdownValue.textContent = countDowm;

        if (countDowm == 0) {

            clearInterval(counter);
            window.alert("Time’s up!");
        }

    }, 1000);

});

// Task: 3 

let color;
let colorChanger;

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let autoColorBox = document.getElementById("autoColorBox");
let startColorBtn = document.getElementById("startColorBtn");
let stopColorBtn = document.getElementById("stopColorBtn");

startColorBtn.addEventListener("click", function () {

    colorChanger = setInterval(function () {

        autoColorBox.style.background = randomRGB();

    }, 1000);

});

stopColorBtn.addEventListener("click", function () {

    clearInterval(colorChanger);
    autoColorBox.style.background = "#4f8cff38";

});

// Task: 4

let autoCount = 0;
let autoCounter;

let clickCount = document.getElementById("clickCount");
let clickBtn = document.getElementById("clickBtn");
let stopAutoResetBtn = document.getElementById("stopAutoResetBtn");
let startAutoResetBtn = document.getElementById("startAutoResetBtn");

clickBtn.addEventListener("click", function () {

    autoCount++
    clickCount.textContent = autoCount;

});

startAutoResetBtn.addEventListener("click", function () {

    autoCounter = setInterval(function () {

        autoCount = 0;
        clickCount.textContent = autoCount;

    }, 5000);

});

stopAutoResetBtn.addEventListener("click", function () {

    clearInterval(autoCounter);

});

// Task: 5

let currentSlider = 0;
let slider;

const images = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
];

let sliderImg = document.getElementById("sliderImg");
let clickCountImg = document.getElementById("clickCount");
let sliderText = document.getElementById("sliderText");
let sliderStatus = document.getElementById("sliderStatus");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let stopSliderBtn = document.getElementById("stopSliderBtn");
let startSliderBtn = document.getElementById("startSliderBtn");


startSliderBtn.addEventListener("click", startSlider);
stopSliderBtn.addEventListener("click", stopSlider);
prevBtn.addEventListener("click", preSlider);
nextBtn.addEventListener("click", nxtSlider);

function updateSlider() {

    sliderImg.src = images[currentSlider];
    sliderText.textContent = `Image ${currentSlider + 1} / ${images.length}`;

}

function startSlider() {

    stopSlider();

    sliderStatus.textContent = "Auto: ON";

    slider = setInterval(function () {

        currentSlider = (currentSlider + 1) % images.length;
        updateSlider();

    }, 1500);
}

function stopSlider() {
    clearInterval(slider);
    sliderStatus.textContent = "Auto: OFF";
}

function preSlider() {
    currentSlider = (currentSlider - 1 + images.length) % images.length;
    updateSlider();
    stopSlider();
}

function nxtSlider() {
    currentSlider = (currentSlider + 1) % images.length;
    updateSlider();
    stopSlider();
}

updateSlider();
startSlider();