// ### Task: Image Hide & Show

function hideShowImg() {

    let img = document.getElementById("myImage");
    let btn = document.getElementById("btn");

    if (btn.innerHTML === "Hide Image") {

        img.style.display = "none";
        btn.innerHTML = "Show Image";

    } else {

        img.style.display = "block";
        btn.innerHTML = "Hide Image";

    }

}




