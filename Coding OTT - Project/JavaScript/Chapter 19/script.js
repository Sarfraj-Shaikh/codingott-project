// ## Task 2

function compareValues() {
    let numOne = Number(document.getElementById("num1").value);
    let numTwo = Number(document.getElementById("num2").value);
    let result = document.getElementById("result");
    result.innerHTML = (numOne === "" || numTwo == "") ? "Enter The Number" : (numOne == numTwo) ? "Numbers are Equal" : "Numbers aren't Equal";
}

function greatNum() {
    let numOne = Number(document.getElementById("num1").value);
    let numTwo = Number(document.getElementById("num2").value);
    let result = document.getElementById("result");
    result.innerHTML = (numOne === "" || numTwo == "") ? "Enter The Number" : (numOne > numTwo) ? "First Number is Greater Than Second Number" : "First Number is not Greater Than Second Number";
}

function lssNum() {
    let numOne = Number(document.getElementById("num1").value);
    let numTwo = Number(document.getElementById("num2").value);
    let result = document.getElementById("result");
    result.innerHTML = (numOne === "" || numTwo == "") ? "Enter The Number" : (numOne < numTwo) ? "First Number is Less Than Second Number" : "First Number is not Less Than Second Number";
}


