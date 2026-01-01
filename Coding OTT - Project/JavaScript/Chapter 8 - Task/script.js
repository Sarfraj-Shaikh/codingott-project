// 1. Write a program to find the addition of 2 and 4 using a function.

var a = 2;
var b = 4;

function addFun() {
    window.alert(a + b);
}

function subFun() {
    window.alert(a - b);
}

function mulFun() {
    window.alert(a * b);
}

function divFun() {
    window.alert(a / b);
}

function checkRem() {
    window.alert(a % b);
}

// 2. Write a program to find the solution of the expression: 5 + 6 - 2 / 8 * 4.

function oneSol() {

    // 1st Showing Question in Alert
    window.alert("Question: 5 + 6 - 2 / 8 * 4");

    // Performing Mathematical Operation
    window.alert(5+6-2/8*4);
}

function secSol() {
    var a = 5;
    var b = 6;
    var c = 2;
    var d = 8;
    var e = 4;
    var result = a+b-c/d*e;
    window.alert(result);
}

// 3. Write a program to calculate 5 % of 1000.

// First Solution
function perCal() {
    window.alert((5 / 100) * 1000);
}

// Second Solution
function sec_perCal() {
    var percentage = 5;
    var amount = 1000
    window.alert((percentage / 100) * amount);
}

// 4. Write a program to find the division of 6 and 2 using a function.
function divOne() {
    window.alert(6/2);
}

function divTwo() {
    var a = 6;
    var b = 2;
    var result = a/b;
    window.alert(result);
}

// 5. Write a program to convert the result of 2 + 9 into a string and print it.
function numToStr() {
    var a = 2;
    var b = 9;
    var result = +a+b; // Converted to string (Second Way)
    window.alert(+(a+b)); // First Way
    document.write(result); // Second Way
}

// 6. Write a program to print the first character of your name.
function myName() {
    window.alert('S');
}

// 7. Write a program to find the solution of the expression: 4.0 * 6 / 1 + 2.3 - 9.6.
function decOp() {

    // 1st Showing Question in Alert
    window.alert("Question: 4.0 * 6 / 1 + 2.3 - 9.6");

    // Performing Mathematical Operation
    window.alert((4.0*6/1+2.3-9.6).toFixed(2));
}

function secDecOp() {
    var a = 4.0;
    var b = 6;
    var c = 1;
    var d = 2.3;
    var e = 9.6;
    var result = a*b/c+d-e;
    window.alert(result);
}
