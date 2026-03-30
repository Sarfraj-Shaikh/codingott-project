// ### Task: Text Hide / Show Project

function showHideText() {

    let text = document.getElementById("para");
    let btn = document.getElementById("btn");

    if (btn.innerHTML === "Hide Text") {

        text.style.display = "none";
        btn.innerHTML = "Show Text";

    } else {

        text.style.display = "block";
        btn.innerHTML = "Hide Text";

    }
}




