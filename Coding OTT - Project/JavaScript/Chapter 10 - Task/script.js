// 1. Please write a program that displays your name using innerHTML when a button is clicked.
function showName() {
    var storeName = document.getElementById("name");
    storeName.innerHTML = "Mo. Sarfraj Shaikh"
}

// 2. Please write a program that uses multiple buttons to call multiple functions.
function funOne() {
    document.getElementById("one").innerHTML = "My&nbsp;";
}

function funTwo() {
    document.getElementById("two").innerHTML = "Name&nbsp;";
}

function funThree() {
    document.getElementById("three").innerHTML = "is&nbsp;";
}

function funFour() {
    document.getElementById("four").innerHTML = "Sarfraj";
    document.getElementById("four").style.color = "Yellow";
}