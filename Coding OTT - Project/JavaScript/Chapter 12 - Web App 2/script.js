// ## Task: 1

let mainImg = document.getElementById("main-img");
let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let img3 = document.getElementById("img-3");
let img4 = document.getElementById("img-4");

function imgOne() {
    mainImg.src = img1.src;
    img1.style.border = "2px solid black";
    img2.style.border = "2px solid white";
    img3.style.border = "2px solid white";
    img4.style.border = "2px solid white";
}

function imgTwo() {
    mainImg.src = img2.src;
    img1.style.border = "2px solid white";
    img2.style.border = "2px solid black";
    img3.style.border = "2px solid white";
    img4.style.border = "2px solid white";
}

function imgThree() {
    mainImg.src = img3.src;
    img1.style.border = "2px solid white";
    img2.style.border = "2px solid white";
    img3.style.border = "2px solid black";
    img4.style.border = "2px solid white";
}

function imgFour() {
    mainImg.src = img4.src;
    img1.style.border = "2px solid white";
    img2.style.border = "2px solid white";
    img3.style.border = "2px solid white";
    img4.style.border = "2px solid black";
}

// ## Task: 2

let password = document.getElementById("pass");
let hideBtn = document.getElementById("hide");
let showBtn = document.getElementById("show");

function show() {
    password.type = "text";
    hideBtn.style.display = "inline-block";
    showBtn.style.display = "none";

}

function hide() {
    password.type = "password";
    hideBtn.style.display = "none";
    showBtn.style.display = "inline-block";
}