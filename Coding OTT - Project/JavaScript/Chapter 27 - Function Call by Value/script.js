// ### Task: Call By Value Calculator

function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    add(num1, num2);
    sub(num1, num2);
    mult(num1, num2);
    div(num1, num2);
    rem(num1, num2);
}

function add(val1, val2) {

    let results = document.getElementById("results1");
    results.innerHTML = `Addition: ${val1+val2}`;
}

function sub(val1, val2) {

    let results = document.getElementById("results2");
    results.innerHTML = `Subtraction: ${val1-val2}`;
}

function mult(val1, val2) {

    let results = document.getElementById("results3");
    results.innerHTML = `Multiplication: ${val1*val2}`;
}

function div(val1, val2) {

    let results = document.getElementById("results4");
    let cal = Number((val1/val2).toFixed(2));

    results.innerHTML = `Division: ${cal}`;
}

function rem(val1, val2) {

    let results = document.getElementById("results5");
    results.innerHTML = `Reminder: ${val1%val2}`;

}


