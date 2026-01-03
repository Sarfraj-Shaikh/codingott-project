// 1. Write a program that uses a global variable across three different functions.

var a = 5;
var b = 6;

function add() {
    window.alert(a+b);
}

function sub() {
    window.alert(a-b);
}

function mul() {
    window.alert(a*b);
}

// 2. Write a program that stores a value in a variable at the time of declaration.

var myName = "Mo. Sarfraj Shaikh";
var myCourse = "JavaScript - Coding Ott";
var courseMentor = "Mr. Sourav Sir";
var chapterNo = 9;

// 3. Write a program that stores a value in a variable after its declaration.

var coursePurchasedOn;
var currentlyLearning;

coursePurchasedOn = "31-12-2025";
currentlyLearning = "JavaScript";

// 4. Write a program to declare three variables without assigning any values.

var one;
var two;
var three;

// 5. Write a program that calls the same function at least three times.

function sameFunThree() {
    window.alert("Function Called Successfully Completed");
}