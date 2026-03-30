// Task 1: Positive / Negative Checker

function checkPositiveNegative() {

    let input = document.getElementById("pnInput").value;
    let output = document.getElementById("pnResult");

    if (input.trim() === "") {

        output.innerHTML = "Enter a Number";
        output.style.color = "red";

    } else {

        if (input < 0) {

            output.innerHTML = "Negative Number";
            output.style.color = "red";

        } else {

            output.innerHTML = "Positive Number";
            output.style.color = "green";

        }
    }
}

// Task 2: Voting Eligibility Checker

function checkVoting() {

    let input = document.getElementById("ageInput").value;
    let output = document.getElementById("voteResult");

    if (input.trim() === "") {

        output.innerHTML = "Enter Your Age";
        output.style.color = "red";

    } else {

        if (input <= 18) {

            output.innerHTML = "Sorry, You're not Eligible For Voting";
            output.style.color = "red";

        } else {

            output.innerHTML = "Yeah! You're Eligible For Voting";
            output.style.color = "green";

        }
    }
}

// Task 3: Password Strength Checker

function checkPassword() {

    let input = document.getElementById("passInput").value;
    let output = document.getElementById("passResult");

    if (input.trim() === "") {

        output.innerHTML = "Enter Your Password";
        output.style.color = "red";

    } else {

        if (input.length >= 8) {

            output.innerHTML = "Strong Password";
            output.style.color = "green";

        } else {

            output.innerHTML = "Weak Password";
            output.style.color = "red";

        }
    }
}

// Task 4: Grade Checker Project

function checkGrade() {

    let input = document.getElementById("marksInput").value;
    let output = document.getElementById("gradeResult");

    if (input.trim() === "") {

        output.innerHTML = "Enter Your Mark";
        output.style.color = "red";

    } else {

        if (input >= 80) {

            output.innerHTML = "Grade A";
            output.style.color = "green";

        } else if (input >= 60) {

            output.innerHTML = "Grade B";
            output.style.color = "blue";

        } else if (input >= 40) {

            output.innerHTML = "Grade C";
            output.style.color = "#464e00";

        } else {

            output.innerHTML = "Fail";
            output.style.color = "red";

        }
    }
}

// Task 5: Simple Calculator (Add / Subtract)

function calculator(operator) {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let output = document.getElementById("calcResult");

    if (num1 === "" || num2 === "") {

        output.innerHTML = "Enter a Number";
        output.style.color = "red";

    } else {

        if (operator === "add") {

            output.innerHTML = "Addition Result: " + (num1 + num2);
            output.style.color = "green";

        } else {

            output.innerHTML = "Subtraction Result: " + (num1 - num2);
            output.style.color = "green";

        }
    }
}


// Task 6: Dummy Login Checker

function checkLogin() {

    let username = document.getElementById("userInput").value;
    let password = document.getElementById("loginPassInput").value;
    let output = document.getElementById("loginResult");

    if (username.trim() === "" || password.trim() === "") {

        output.innerHTML = "Enter a Username or Password";
        output.style.color = "red";

    } else {

        if (username.trim() === "admin" && password.trim() === "1234") {

            output.innerHTML = "Login Successful";
            output.style.color = "green";

        } else {

            output.innerHTML = "Invalid Username or Password";
            output.style.color = "red";
        }
    }
}

// Task 7: Discount Checker

function checkDiscount() {

    let input = document.getElementById("billInput").value;
    let output = document.getElementById("discountResult");

    if (input.trim() === "") {

        output.innerHTML = "Enter Your Bill Amount";
        output.style.color = "red";

    } else {

        if (input >= 1000) {

            output.innerHTML = "10% Discount Applied";
            output.style.color = "green";

        } else {

            output.innerHTML = "No Discount";
            output.style.color = "red";
        }
    }
}

// Task 8: Temperature Checker

function checkTemperature() {

    let input = document.getElementById("tempInput").value;
    let output = document.getElementById("tempResult");

    if (input.trim() === "") {

        output.innerHTML = "Enter Temperature";
        output.style.color = "red";

    } else {

        if (input >= 30) {

            output.innerHTML = "Hot Weather";
            output.style.color = "red";

        } else if (input >= 15) {

            output.innerHTML = "Normal Weather";
            output.style.color = "black";

        } else {

            output.innerHTML = "Cold Weather";
            output.style.color = "blue";

        }
    }
}

// Task 9: Even/Odd + Positive/Negative Combined

function checkCombo() {

    let input = document.getElementById("comboInput").value;
    let output = document.getElementById("comboResult");

    if (input.trim() === "") {

        output.innerHTML = "Enter a Number";
        output.style.color = "red";

    } else {

        if (input % 2 == 0) {

            if (input < 0) {

                output.innerHTML = "Negative Even Number";
                output.style.color = "red";

            } else {

                output.innerHTML = "Positive Even Number";
                output.style.color = "green";

            }


        } else {

            if (input < 0) {

                output.innerHTML = "Negative Odd Number";
                output.style.color = "red";

            } else {

                output.innerHTML = "Positive Odd Number";
                output.style.color = "green";

            }

        }
    }
}

// Task 10: Number Guess Game (Basic)

function guessGame() {

    let fixedNumber = 6;

    let input = document.getElementById("guessInput").value;
    let output = document.getElementById("guessResult");

    if (input.trim() === "") {

        output.innerHTML = "Enter a Number";
        output.style.color = "red";

    } else {

        if (input == 6) {

            output.innerHTML = "Wow, You're Right!";
            output.style.color = "green";

        } else {

            output.innerHTML = "Oops, You're Wrong!";
            output.style.color = "red";

        }
    }
}