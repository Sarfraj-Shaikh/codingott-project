// ## Task 1

let btn = document.getElementById("actionBtn");
btn.onclick = function btnClick() {
    let result = document.getElementById("result");
    result.style.display = "block";
    result.innerHTML = "Button Clicked! Without Using HTML onclick Attribute.";
}

// ## Task 2 

function attributeSet() {
    let result = document.getElementById("result");
    result.style.display = "block";
    result.setAttribute("align", "right");
}

function changeBg() {
    let bg = document.getElementById("card");
    bg.setAttribute("style", "background-color: powderblue");
}

