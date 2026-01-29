// ## Task

/* ========== First Name Validation Start Here! ========== */
function firstNameVal() {
    let fName = document.getElementById("firstName").value;
    let fInput = document.getElementById("firstName");
    let errorMsg = document.getElementById("error-text");
    let tick = document.getElementById("tick");
    let capital = /[A-Z]/g;

    errorMsg.style.display = "block";

    (fName === "") ? errorMsg.innerHTML = "First Name is required" : fName.charAt(0).match(capital) ? errorMsg.style.display = "none" : errorMsg.innerHTML = "First letter is must be capital";
    (fName === "") ? fInput.style.border = "1px solid red" : fName.charAt(0).match(capital) ? fInput.style.border = "" : fInput.style.border = "1px solid red";
    (fName === "") ? tick.style.display = "none" : fName.charAt(0).match(capital) ? tick.style.display = "block" : tick.style.display = "none";
    (fName === "") ? fInput.setAttribute("class", "animate__animated animate__headShake") : fName.charAt(0).match(capital) ? tick.style.display = "block" : fInput.setAttribute("class", "animate__animated animate__headShake");
}
/* ========== First Name Validation End Here! ========== */

/* ========== Last Name Validation Start Here! ========== */
function lastNameVal() {
    let lName = document.getElementById("lastName").value;
    let lInput = document.getElementById("lastName");
    let errorMsg = document.getElementById("error-text2");
    let tick = document.getElementById("tick2");
    let capital = /[A-Z]/g;

    errorMsg.style.display = "block";

    (lName === "") ? errorMsg.innerHTML = "Last Name is required" : lName.charAt(0).match(capital) ? errorMsg.style.display = "none" : errorMsg.innerHTML = "First letter is must be capital";

    (lName === "") ? lInput.style.border = "1px solid red" : lName.charAt(0).match(capital) ? lInput.style.border = "" : lInput.style.border = "1px solid red";

    (lName === "") ? tick.style.display = "none" : lName.charAt(0).match(capital) ? tick.style.display = "block" : tick.style.display = "none";

    (lName === "") ? lInput.setAttribute("class", "animate__animated animate__headShake") : lName.charAt(0).match(capital) ? tick.style.display = "block" : lInput.setAttribute("class", "animate__animated animate__headShake");
}
/* ========== Last Name Validation End Here! ========== */

/* ========== Mobile Number Validation Start Here! ========== */
function mobileNumVal() {
    let mNum = document.getElementById("mobileNumber").value;
    let mInput = document.getElementById("mobileNumber");
    let errorMsg = document.getElementById("error-text4");
    let tick = document.getElementById("tick4");
    let indNum = /[7-9]/g;

    errorMsg.style.display = "block";

    (mNum === "") ? errorMsg.innerHTML = "Mobile Number is required" : mNum.charAt(0).match(indNum) ? errorMsg.style.display = "none" : errorMsg.innerHTML = "Only Indian Number is accepted";

    (mNum === "") ? mInput.style.border = "1px solid red" : mNum.charAt(0).match(indNum) ? mNum.length === 10 ? mInput.style.border = "" : mInput.style.border = "1px solid red" : errorMsg.innerHTML = "Mobile Number must be 10 Digits";

    (mNum === "") ? tick.style.display = "none" : mNum.length === 10 ? mNum.charAt(0).match(indNum) ? tick.style.display = "block" : errorMsg.innerHTML = "Only Indian Number is accepted" : tick.style.display = "none";

    (mNum === "") ? mInput.setAttribute("class", "animate__animated animate__headShake") : mName.charAt(0).match(capital) ? tick.style.display = "block" : mInput.setAttribute("class", "animate__animated animate__headShake");
}
/* ========== Mobile Number Validation End Here! ========== */

/* ========== Username Validation Start Here! ========== */
function uNameVal() {
    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let uName = document.getElementById("userName");
    let errorMsg = document.getElementById("error-text5");
    let tick = document.getElementById("tick5");

    errorMsg.style.display = "block";

    (fName === "" || lName === "") ? (errorMsg.innerHTML = "Both first and last name are required", uName.value = "", uName.style.border = "1px solid red", tick.style.display = "none") : (errorMsg.style.display = "none", uName.value = (fName + lName).toLowerCase(), uName.style.border = "", tick.style.display = "block", uName.setAttribute("disabled", "disabled"));
}
/* ========== Username Validation End Here! ========== */

/* ========== Password Validation Start Here! ========== */
function passVal() {
    let pwd = document.getElementById("password").value;
    let pwdInput = document.getElementById("password");
    let errorMsg = document.getElementById("error-text6");
    let tick = document.getElementById("tick6");

    let capital = /[A-Z]/g;
    let small = /[a-z]/g;
    let num = /[0-9]/g;
    let sym = /[!@#$%^&*(),.?":{}|<>]/g;

    errorMsg.style.display = "block";

    (pwd === "") ? (errorMsg.innerHTML = "Password is required", tick.style.display = "none", pwdInput.style.border = "1px solid red") : pwd.match(capital) ? pwd.match(small) ? pwd.match(num) ? pwd.match(sym) ? pwd.length < 6 ? (errorMsg.innerHTML = "Enter at least 6 character password", pwdInput.style.border = "1px solid red", tick.style.display = "none") : (tick.style.display = "block", errorMsg.style.display = "none", pwdInput.style.border = "") : (errorMsg.innerHTML = "Enter at least one special character", pwdInput.style.border = "1px solid red", tick.style.display = "none") : (errorMsg.innerHTML = "Enter at least single number", pwdInput.style.border = "1px solid red", tick.style.display = "none") : (errorMsg.innerHTML = "Enter at least one small letter", pwdInput.style.border = "1px solid red", tick.style.display = "none") : (errorMsg.innerHTML = "Enter at least one capital letter", pwdInput.style.border = "1px solid red", tick.style.display = "none");

}
/* ========== Password Validation End Here! ========== */

/* ========== Confirm Password Validation Start Here! ========== */
function conPassVal() {
    let pwd = document.getElementById("password").value;
    let conPwd = document.getElementById("conPassword").value;
    let pwdInput = document.getElementById("password");
    let conPwdInput = document.getElementById("conPassword");
    let errorMsg = document.getElementById("error-text7");
    let tick = document.getElementById("tick7");
    let btn = document.getElementById("subBtn");

    errorMsg.style.display = "block";

    (conPwd === "") ? (errorMsg.innerHTML = "Confirm Password is required", conPwdInput.style.border = "1px solid red") : (pwd === conPwd) ? (btn.disabled = false, btn.style.cursor = "pointer", btn.style.backgroundColor = "blue", tick.style.display = "block", errorMsg.style.display = "none", conPwdInput.style.border = "") : (btn.disabled = true, btn.style.cursor = "not-allowed", btn.style.backgroundColor = "#007bff", errorMsg.innerHTML = "Confirm password is not match", tick.style.display = "none", conPwdInput.style.border = "1px solid red");
}
/* ========== Confirm Password Validation End Here! ========== */