// ## Task: 1

let img = document.getElementById("img");

function width() {
    let imgWidth = document.getElementById("img-width");
    img.style.width = `${imgWidth.value}px`;
}

function height() {
    let imgHeight = document.getElementById("img-height");
    img.style.height = `${imgHeight.value}px`;
}

function radius() {
    let imgRadius = document.getElementById("img-radius");
    img.style.borderRadius = `${imgRadius.value}px`;
}

function addBorder() {
    img.style.border = "3px solid #000000";
}

function removeBorder() {
    img.style.border = "none";
}

// ## Task: 2

let res = document.getElementById("result");

function right() {
    res.value = "Right Answer!";
    res.style.color = "green";
}

function wrong() {
    res.value = "Wrong Answer!";
    res.style.color = "red";
}

// ## Task: 3

function show() {
    let input = document.getElementById("input-txt");
    let output = document.getElementById("txt-res");
    output.innerHTML = input.value;
}