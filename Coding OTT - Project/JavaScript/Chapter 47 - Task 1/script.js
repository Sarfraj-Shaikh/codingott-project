// Task:

let downloadingCount = 10;

let countdown = document.getElementById("countdown");
let countdown2 = document.getElementById("countdown2");
countdown.textContent = downloadingCount;
countdown2.innerText = downloadingCount;


function timer() {

    let downloadImage = document.getElementById("downloadImage");
    let countBox = document.getElementById("countBox");
    let resetBtn = document.getElementById("resetBtn");

    imageUrl = downloadImage.src;
    let fileName = imageUrl.split("/").pop().split("?")[0];

    let downloadingTimer = setInterval(download, 1000);

    function download() {

        downloadingCount--;
        countdown.textContent = downloadingCount;

        if (downloadingCount === 0) {

            clearInterval(downloadingTimer);
            countBox.style.display = "none";
            resetBtn.style.display = "block";

            let a = document.createElement("a");
            a.href = imageUrl;
            a.download = fileName;
            a.click();

        };

    }

    resetBtn.addEventListener("click", resetTime);

    function resetTime() {

        downloadingCount = 10;
        countdown.textContent = downloadingCount;
        downloadingTimer = setInterval(download, 1000);
        countBox.style.display = "block";
        resetBtn.style.display = "none";

    };
};

timer();


let downloadBtn = document.getElementById("downloadBtn");
downloadBtn.addEventListener("click", downloadImg);

function downloadImg() {

    let downloadImage = document.getElementById("downloadImage");

    imageUrl = downloadImage.src;
    let fileName = imageUrl.split("/").pop().split("?")[0];

    let a = document.createElement("a");
    a.href = imageUrl;
    a.download = fileName;
    a.click();

};