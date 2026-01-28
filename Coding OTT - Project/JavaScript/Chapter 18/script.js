// ## Task 1

function showResult() {
    let numValue = document.getElementById("singleExpression").value;
    let result = document.getElementById("result1");
    result.innerHTML = "Result: "+eval(numValue);
}

// ## Task 2

function calculate() {
    let numOne = Number(document.getElementById("num1").value);
    let oper = document.getElementById("operator").value;
    let numTwo = Number(document.getElementById("num2").value);
    let result = document.getElementById("result2");

    let calculate = numOne + oper + numTwo;
    result.innerHTML = "Result: "+eval(calculate);

}
