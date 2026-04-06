// Task: 1

let message = document.getElementById("message");

function showMessage(text) {
    message.textContent = text;
}

window.addEventListener("load", function () {

    let nav = performance.getEntriesByType("navigation")[0];

    if (nav.type === "reload") {

        showMessage("You refreshed the page.");

    }
    else if (nav.type === "back_forward") {

        showMessage("You navigated using Back/Forward button.");

    }
    else {

        showMessage("You opened the page normally.");

    }

});

let backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", function () {

    showMessage("You clicked on Back button.");
    history.back();

});

let forwardBtn = document.getElementById("forwardBtn");
forwardBtn.addEventListener("click", function () {

    showMessage("You clicked on Forward button.");
    history.forward();

});

let goBtn = document.getElementById("goBtn");
goBtn.addEventListener("click", function () {

    showMessage("You clicked on Go (Refresh) button.");
    history.go(0);

});

let gobackBtn = document.getElementById("goBackBtn");
gobackBtn.addEventListener("click", function () {

    showMessage("You clicked on Go (Back) button.");
    history.go(-1);

});

let refreshBtn = document.getElementById("refreshBtn");
refreshBtn.addEventListener("click", function () {

    showMessage("You clicked on Go (Refresh) button.");
    history.go(0);

});

let goForwardBtn = document.getElementById("goForwardBtn");
goForwardBtn.addEventListener("click", function () {

    showMessage("You clicked on Go (Forward) button.");
    history.go(1);

});
