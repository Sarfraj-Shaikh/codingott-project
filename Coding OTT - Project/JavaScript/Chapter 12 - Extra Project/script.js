// ## Task 1

let font = document.getElementById("font-txt");

function fontSize() {
    let fontSize = document.getElementById("font-size").value;
    font.style.fontSize = `${fontSize}px`;
}

function fontColor() {
    let fontColor = document.getElementById("font-clr").value;
    font.style.color = fontColor;
}

function addBold() {
    font.style.fontWeight = "bold";
}

function removeBold() {
    font.style.fontWeight = "normal";
}

function addItalic() {
    font.style.fontStyle = "italic";
}

function removeItalic() {
    font.style.fontStyle = "normal";
}

function addBoth() {
    font.style.fontWeight = "bold";
    font.style.fontStyle = "italic";
}

function removeBoth() {
    font.style.fontWeight = "normal";
    font.style.fontStyle = "normal";
}

function alignLeft() {
    font.style.textAlign = "left";
}

function alignCenter() {
    font.style.textAlign = "center";
}

function alignRight() {
    font.style.textAlign = "right";
}

// ## Task 2

let bg = document.getElementById("theme-bg");
let txt = document.getElementById("heading-txt");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

function lightTheme() {
    bg.style.backgroundColor = "#FFFFFF";
    txt.style.color = "#000000";

    // Button 1
    btn1.style.backgroundColor = "#FFFFFF";
    btn1.style.color = "#000000";
    btn1.style.border = "1px solid #000000";

    // Button 2
    btn2.style.backgroundColor = "#000000";
    btn2.style.color = "#FFFFFF";
    btn2.style.border = "1px solid #000000";

    // Button 3
    btn3.style.backgroundColor = "#0000ff";
    btn3.style.color = "#FFFFFF";
    btn3.style.border = "1px solid #000000";

}

function darkTheme() {
    bg.style.backgroundColor = "#000000";
    txt.style.color = "#FFFFFF";

    // Button 1
    btn1.style.backgroundColor = "#000000";
    btn1.style.color = "#FFFFFF";
    btn1.style.border = "1px solid #FFFFFF";

    // Button 2
    btn2.style.backgroundColor = "#000000";
    btn2.style.color = "#FFFFFF";
    btn2.style.border = "1px solid #FFFFFF";

    // Button 3
    btn3.style.backgroundColor = "#000000";
    btn3.style.color = "#FFFFFF";
    btn3.style.border = "1px solid #FFFFFF";
}

function blueTheme() {
    bg.style.backgroundColor = "#0000ff";
    txt.style.color = "#FFFFFF";

    // Button 1
    btn1.style.backgroundColor = "#FFFFFF";
    btn1.style.color = "#000000";
    btn1.style.border = "1px solid #000000";

    // Button 2
    btn2.style.backgroundColor = "#FFFFFF";
    btn2.style.color = "#000000";
    btn2.style.border = "1px solid #000000";

    // Button 3
    btn3.style.backgroundColor = "#FFFFFF";
    btn3.style.color = "#000000";
    btn3.style.border = "1px solid #000000";
}

// ## Task 3

let passResult = document.getElementById("result");

function passStrength() {
    let pass = document.getElementById("pass-txt").value;

    if (pass.length < 5) {
        passResult.innerHTML = `<b>Strength:</b> Weak`;
        passResult.style.color = "#ff0000";
    }
    else if (pass.length >= 5 && pass.length <= 8) {
        passResult.innerHTML = `<b>Strength:</b> Medium`;
        passResult.style.color = "#000000";
    }
    else {
        passResult.innerHTML = `<b>Strength:</b> Strong`;
        passResult.style.color = "#008000";
    }
}

// ## Task 4

function livePreview() {
    let mgs = document.getElementById("msg-txt").value;
    let output = document.getElementById("msg-result");

    if (mgs === "") {
        output.innerHTML = "Your Message Will Goes Here!";
    } else {
        output.innerHTML = mgs;
    }
}

// ## Task 5

function formSubmit() {
    event.preventDefault();
    let name = document.getElementById("f-name").value;
    let email = document.getElementById("f-email").value;
    let pass = document.getElementById("f-pass").value;
    let confirmPass = document.getElementById("f-cpass").value;
    let error = document.getElementById("error-msg");

    if (name === "") {
        error.innerHTML = "Name Can't be Empty";
        error.style.display = "inline-block";
    }
    else if (email === "") {
        error.innerHTML = "Email Can't be Empty";
        error.style.display = "inline-block";
    }
    else if (pass === "") {
        error.innerHTML = "Password Can't be Empty";
        error.style.display = "inline-block";
    }
    else if (pass.length < 6) {
        error.innerHTML = "Minimum 6 Letter Password Required";
        error.style.display = "inline-block";
    }
    else if (confirmPass === "") {
        error.innerHTML = "Confirm Password Can't be Empty";
        error.style.display = "inline-block";
    }
    else if (pass !== confirmPass) {
        error.innerHTML = "Confirm Password Doesn't Match";
        error.style.display = "inline-block";
    }
    else {
        error.innerHTML = "Successfully, Form Validated!";
        error.style.display = "inline-block";
        error.style.color = "green";
    }

}
