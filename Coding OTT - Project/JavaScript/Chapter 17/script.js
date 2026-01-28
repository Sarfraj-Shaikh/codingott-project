// ## Task

let img = document.getElementById("image");
let contrast = document.getElementById("contrast").value;
let saturation = document.getElementById("saturation").value;

function bright() {
    let bright = document.getElementById("brightness").value;
    let brightnessValue = document.getElementById("brightnessValue");

    img.style.WebkitFilter = "brightness(" + bright + "%)";
    img.style.Filter = "brightness(" + bright + "%)";
    brightnessValue.innerHTML = bright + "%";
}

function contra() {
    let contrast = document.getElementById("contrast").value;
    let contrastValue = document.getElementById("contrastValue");

    img.style.WebkitFilter = "contrast(" + contrast + "%)";
    img.style.Filter = "contrast(" + contrast + "%)";
    contrastValue.innerHTML = contrast + "%";
}

function satur() {
    let saturat = document.getElementById("saturation").value;
    let saturationValue = document.getElementById("saturationValue");

    img.style.WebkitFilter = "saturate(" + saturat + "%)";
    img.style.Filter = "saturate(" + saturat + "%)";
    saturationValue.innerHTML = saturat + "%";
}

/*
    1ST WAY:
    img.style.webkitFilter = `brightness(${bright}%)`;
    img.style.filter = `brightness(${bright}%)`;

    2ND WAY:
    img.style.WebkitFilter = "brightness(" + bright + "%)";
    img.style.Filter = "brightness(" + bright + "%)";
*/