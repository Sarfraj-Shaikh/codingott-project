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

