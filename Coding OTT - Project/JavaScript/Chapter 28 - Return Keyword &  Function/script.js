// ### Task: Return Keyword & Functions

function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let results1 = document.getElementById("results1");
    let results2 = document.getElementById("results2");
    let results3 = document.getElementById("results3");
    let results4 = document.getElementById("results4");
    let results5 = document.getElementById("results5");

    results1.innerHTML = add(num1, num2);
    results2.innerHTML = sub(num1, num2);
    results3.innerHTML = mult(num1, num2);
    results4.innerHTML = div(num1, num2);
    results5.innerHTML = rem(num1, num2);
}

function add(val1, val2) {

    return `Addition: ${val1+val2}`;
}

function sub(val1, val2) {

    return `Subtraction: ${val1-val2}`;
}

function mult(val1, val2) {

    return `Multiplication: ${val1*val2}`;
}

function div(val1, val2) {

    let cal = Number((val1/val2).toFixed(2));

    return `Division: ${cal}`;
}

function rem(val1, val2) {

    return `Reminder: ${val1%val2}`;

}


