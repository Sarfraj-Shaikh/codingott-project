// ### Task 1: Even / Odd Checker

function numChecker() {

    let input = document.getElementById("numInput");
    let output = document.getElementById("result");

    if (input.value === "") {

        output.innerHTML = "Please Enter Number";
        output.style.color = "red";

    } else {

        if (input.value % 2 == 0) {

            output.innerHTML = "Even Number";
            output.style.color = "green";

        } else {

            output.innerHTML = "Odd Number";
            output.style.color = "blue";

        }
    }
}


// ### Task 2: Zoom In / Zoom Out / Reset

let zoomInBtn = document.getElementById("btn1");
let zoomOutBtn = document.getElementById("btn2");
let resetZoomBtn = document.getElementById("btn3");

let fontSize = 18;
let maxSize = 60;
let minSize = 10;

zoomInBtn.onclick = function zoomIn() {

    let zoomText = document.getElementById("zoomText");
    let zoomMsg = document.getElementById("zoomMsg");

    if (fontSize < maxSize) {

        fontSize += 5;
        zoomText.style.fontSize = fontSize + "px";
        zoomMsg.innerHTML = "";

    } else {

        zoomMsg.innerHTML = "⚠ Maximum zoom limit reached!";
        zoomMsg.style.color = "red";

    }

}

zoomOutBtn.onclick = function zoomOut() {

    let zoomText = document.getElementById("zoomText");
    let zoomMsg = document.getElementById("zoomMsg");

    if (fontSize > minSize) {

        fontSize -= 5;
        zoomText.style.fontSize = fontSize + "px";
        zoomMsg.innerHTML = "";


    } else {

        zoomMsg.innerHTML = "⚠ Maximum zoom limit reached!";
        zoomMsg.style.color = "red";

    }

}

resetZoomBtn.onclick = function resetZoom() {

    let zoomText = document.getElementById("zoomText");
    let zoomMsg = document.getElementById("zoomMsg");

    fontSize = 18;
    zoomText.style.fontSize = fontSize + "px";
    zoomMsg.innerHTML = "🔄 Zoom reset to default!";
    zoomMsg.style.color = "blue";

}


