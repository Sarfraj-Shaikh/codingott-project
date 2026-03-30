// Task 1: Grade Checker Project

function checkGrade() {

    let input = document.getElementById("marks").value;
    let output = document.getElementById("gradeResult");

    if (input.trim() === "") {

        output.innerHTML = "Enter Your Marks";
        output.style.color = "red";

    } else {

        if (input >= 80) {

            output.innerHTML = "Grade A";
            output.style.color = "green";

        } else if (input >= 60) {

            output.innerHTML = "Grade B";
            output.style.color = "purple";

        } else if (input >= 40) {

            output.innerHTML = "Grade C";
            output.style.color = "blue";

        } else {

            output.innerHTML = "Failed";
            output.style.color = "red";

        }

    }
}

// Task 2: Login Checker

function checkLogin() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let output = document.getElementById("loginResult");

    if (username.trim() === "" || password.trim() === "") {

        output.innerHTML = "Enter Username or Password";
        output.style.color = "red";

    } else {

        if (username.trim() === "admin" && password.trim() === "1234") {

            output.innerHTML = "Login Successful";
            output.style.color = "green";

        } else {

            output.innerHTML = "Invalid Username or Password";
            output.style.color = "purple";

        }

    }
}

// Task 3: Discount Calculator

function checkDiscount() {

    let input = document.getElementById("amount").value;
    let output = document.getElementById("discountResult");

    if (input.trim() === "") {

        output.innerHTML = "Enter Your Bill Amount";
        output.style.color = "red";

    } else {

        if (input >= 5000) {

            output.innerHTML = "20% Discount";
            output.style.color = "green";

        } else if (input >= 2000) {

            output.innerHTML = "10% Discount";
            output.style.color = "purple";

        } else if (input >= 1000) {

            output.innerHTML = "5% Discount";
            output.style.color = "blue";

        } else {

            output.innerHTML = "No Discount";
            output.style.color = "red";

        }

    }
}

