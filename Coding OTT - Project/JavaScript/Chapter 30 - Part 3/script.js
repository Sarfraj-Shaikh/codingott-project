// Task: Form Validation

function nameVal() {

    let input = document.getElementById("fname");
    let warningIcon = document.getElementById("warning-icon");

    if (input.value.trim() === "") {

        input.style.border = "2px solid red";
        warningIcon.style.display = "block";

    } else {

        input.style.border = "1px solid #ccd0d5";
        warningIcon.style.display = "none";

    }

}

function surNameVal() {

    let input = document.getElementById("lname");
    let warningIcon = document.getElementById("warningIcon2");

    if (input.value.trim() === "") {

        input.style.border = "2px solid red";
        warningIcon.style.display = "block";

    } else {

        input.style.border = "1px solid #ccd0d5";
        warningIcon.style.display = "none";

    }

}

function numEmailVal() {

    let input = document.getElementById("email");
    let warningIcon = document.getElementById("warningIcon3");

    if (input.value.trim() === "") {

        input.style.border = "2px solid red";
        warningIcon.style.display = "block";

    } else {

        input.style.border = "1px solid #ccd0d5";
        warningIcon.style.display = "none";

    }

}

function passVal() {

    let input = document.getElementById("pass");
    let warningIcon = document.getElementById("warningIcon4");

    if (input.value.trim() === "") {

        input.style.border = "2px solid red";
        warningIcon.style.display = "block";

    } else {

        input.style.border = "1px solid #ccd0d5";
        warningIcon.style.display = "none";

    }

}
