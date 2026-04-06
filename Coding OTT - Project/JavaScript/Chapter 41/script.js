// Task: 1

let currentUrl = document.getElementById("currentUrl");
history.pushState(null, null, "secure-url")
currentUrl.textContent = window.location.href;

let homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", function () {

    history.pushState(null, null, "home");
    currentUrl.textContent = window.location.href;
});

let aboutBtn = document.getElementById("aboutBtn");
aboutBtn.addEventListener("click", function () {

    history.pushState(null, null, "about");
    currentUrl.textContent = window.location.href;
});

let contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", function () {

    history.pushState(null, null, "contact");
    currentUrl.textContent = window.location.href;
});

let refreshBtn = document.getElementById("refreshBtn");
refreshBtn.addEventListener("click", function () {

    history.pushState(null, null, "index.html");
    history.go(0);
    currentUrl.textContent = window.location.href;

});

window.addEventListener("keydown", function (event) {

    if (event.ctrlKey && (event.key === "c" || event.key === "C")) {

        event.preventDefault();
        alert("Copy is disabled!");

    };

});
