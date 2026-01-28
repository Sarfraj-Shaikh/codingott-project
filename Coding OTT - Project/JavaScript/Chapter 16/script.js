// ## Task 2

function calculateAdd() {
    let numOne = Number(document.getElementById("add1").value);
    let numTwo = Number(document.getElementById("add2").value);
    let numResult = document.getElementById("resultAdd");
    numResult.innerHTML = `Result: ${numOne + numTwo}`;
}

function calculateSub() {
    let numOne = Number(document.getElementById("sub1").value);
    let numTwo = Number(document.getElementById("sub2").value);
    let numResult = document.getElementById("resultSub");
    numResult.innerHTML = `Result: ${numOne - numTwo}`;
}

function calculateMul() {
    let numOne = Number(document.getElementById("mul1").value);
    let numTwo = Number(document.getElementById("mul2").value);
    let numResult = document.getElementById("resultMul");
    numResult.innerHTML = `Result: ${numOne * numTwo}`;
}

function calculateDiv() {
    let numOne = Number(document.getElementById("div1").value);
    let numTwo = Number(document.getElementById("div2").value);
    let numResult = document.getElementById("resultDiv");
    (numTwo === 0) ? numResult.innerHTML = `Infinite Value` : numResult.innerHTML = `Result: ${numOne / numTwo}`;
}

function calculateMod() {
    let numOne = Number(document.getElementById("mod1").value);
    let numTwo = Number(document.getElementById("mod2").value);
    let numResult = document.getElementById("resultMod");
    numResult.innerHTML = `Result: ${numOne % numTwo}`;
}

/* OUTPUT POSSIBILITIES

    1ST WAY
    numResult.innerHTML = numOne+numTwo;

    2ND WAY
    let res = numOne+numTwo;
    numResult.innerHTML = "Result: "+res;

    3RD WAY
    numResult.innerHTML = `Result: ${numOne+numTwo}`;
*/


