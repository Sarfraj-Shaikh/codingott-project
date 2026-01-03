// Please write a program that demonstrates the results of CSS properties using JavaScript selectors, along with functions, variables, and CSS.

// 1. Text Color
function blueText() {
    var text = document.getElementById("res-text");
    text.style.color = "blue";
}

function greenText() {
    var text = document.getElementById("res-text");
    text.style.color = "green";
}

function redText() {
    var text = document.getElementById("res-text");
    text.style.color = "red";
}

function whiteText() {
    var text = document.getElementById("res-text");
    text.style.color = "white"
}

function blackText() {
    var text = document.getElementById("res-text");
    text.style.color = "black";
}

// 2. Text (Font Size)
function pixcel() {
    var text = document.getElementById("res-text");
    text.style.fontSize = "20px";
}

function perc() {
    var text = document.getElementById("res-text");
    text.style.fontSize = "195%";
}

function rem() {
    var text = document.getElementById("res-text");
    text.style.fontSize = "2.5rem";
}

function em() {
    var text = document.getElementById("res-text");
    text.style.fontSize = "3em";
}

// 3. Shape BG 


function redBg() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.backgroundColor = "red";
}

function greenBg() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.backgroundColor = "green";
}

function blueBg() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.backgroundColor = "blue";
}

function imgBg() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.backgroundImage = "url('https://img.freepik.com/free-vector/black-background-with-wavy-lines_52683-76524.jpg?semt=ais_hybrid&w=740&q=80')";
}

// 4. Background Border
function redBorder() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.border = "2px solid red";
}

function greenBorder() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.border = "2px solid green";
}

function blueBorder() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.border = "2px solid blue";
}

function blackBorder() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.border = "2px solid black";
}

// 5. Text Margin 
function tenMar() {
    var text = document.getElementById("res-text");
    text.style.margin = "50px";
}

function fifteenMar() {
    var text = document.getElementById("res-text");
    text.style.margin = "15px";
}

function twentyMar() {
    var text = document.getElementById("res-text");
    text.style.margin = "20px";
}

function thirtyMar() {
    var text = document.getElementById("res-text");
    text.style.margin = "30px";
}

// 6. Text Padding 
function tenPad() {
    var text = document.getElementById("res-text");
    text.style.padding = "10px";
}

function fifteenPad() {
    var text = document.getElementById("res-text");
    text.style.padding = "15px";
}

function twentyPad() {
    var text = document.getElementById("res-text");
    text.style.padding = "20px";
}

function thirtyPad() {
    var text = document.getElementById("res-text");
    text.style.padding = "25px";
}

// 7. Background Height
function tenH() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.height = "50px";
}


function twentyH() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.height = "80px";
}

function thirtyH() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.height = "120px";
}

function fifteenH() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.height = "140px";
}

// 8. Background Width
function tenW() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.width = "80px";
}


function twentyW() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.width = "100px";
}

function thirtyW() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.width = "120px";
}

function fifteenW() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.width = "140px";
}

// 9. Text Font Family
function sans() {
    var text = document.getElementById("res-text");
    text.style.fontFamily = "Verdana";
}

function gill() {
    var text = document.getElementById("res-text");
    text.style.fontFamily = "Gill Sans";
}

function arial() {
    var text = document.getElementById("res-text");
    text.style.fontFamily = "Arial";
}

function impact() {
    var text = document.getElementById("res-text");
    text.style.fontFamily = "Impact";
}

// 10. Shape Border Radius
function border() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.borderRadius = "20px";
}

function borderPerc() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.borderRadius = "15%";
}

function borderRem() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.borderRadius = "2rem";
}

function borderEm() {
    var shape = document.getElementsByClassName("result-container")[0];
    shape.style.borderRadius = "3em";
}