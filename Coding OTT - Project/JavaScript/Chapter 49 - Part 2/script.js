// Task:

window.onload = checkNetwork();
function checkNetwork() {

    let statusCard = document.getElementById("statusCard");
    let statusIcon = document.getElementById("statusIcon");
    let statusTitle = document.getElementById("statusTitle");
    let statusText = document.getElementById("statusText");
    let indicatorText = document.getElementById("indicatorText");

    let timer = setInterval(function () {

        if (navigator.onLine === true) {

            statusCard.className = "status-card online";
            statusIcon.textContent = "✔";
            statusTitle.textContent = "Welcome";
            statusText.textContent = "This project was built by Sarfraj Shaikh.";
            indicatorText.textContent = "Detected";
            
            
        } else {
            
            statusCard.className = "status-card offline";
            statusIcon.textContent = "✖";
            statusTitle.textContent = "No Network";
            statusText.textContent = "No Internet Connection Found, Please Check Your Wi-Fi or Mobile Data.";
            indicatorText.textContent = "You're Offline";
            
        };

    }, 1000);

};