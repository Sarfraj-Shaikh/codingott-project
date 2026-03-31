// ## Task

/* ARRAY STRUCTURE 

[ First Name, Last Name, Email, Mobile Number, Username, Password, Confirm Password ] 

ARRAY [ 0 ] = First Name
ARRAY [ 1 ] = Last Name
ARRAY [ 2 ] = Email ID
ARRAY [ 3 ] = Mobile Number
ARRAY [ 4 ] = Username
ARRAY [ 5 ] = Password
ARRAY [ 6 ] = Confirm Password

*/

let arr = [];

/* ========== First Name Validation Start Here! ========== */

function firstNameVal() {

    let fName = document.getElementById("firstName").value;
    let fInput = document.getElementById("firstName");
    let errorMsg = document.getElementById("error-text");
    let tick = document.getElementById("tick");
    let capital = /[A-Z]/g;

    if (fName.trim() === "") {

        errorMsg.style.display = "block";
        errorMsg.innerHTML = "First Name is required";
        fInput.style.border = "1px solid red";
        fInput.setAttribute("class", "animate__animated animate__headShake");
        tick.style.display = "none";


    } else if (fName.charAt(0).match(capital)) {

        tick.style.display = "block";
        fInput.style.border = "2px solid #ccc";
        errorMsg.style.display = "none";
        arr[0] = fName;



    } else {

        errorMsg.style.display = "block";
        errorMsg.innerHTML = "First letter is must be capital";
        fInput.style.border = "1px solid red";
        fInput.setAttribute("class", "animate__animated animate__headShake");
        tick.style.display = "none";

    }


}
/* ========== First Name Validation End Here! ========== */

/* ========== Last Name Validation Start Here! ========== */
function lastNameVal() {
    let lName = document.getElementById("lastName").value;
    let lInput = document.getElementById("lastName");
    let errorMsg = document.getElementById("error-text2");
    let tick = document.getElementById("tick2");
    let capital = /[A-Z]/g;

    if (lName.trim() === "") {

        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Last Name is required";
        lInput.style.border = "1px solid red";
        lInput.setAttribute("class", "animate__animated animate__headShake");
        tick.style.display = "none";


    } else if (lName.charAt(0).match(capital)) {

        tick.style.display = "block";
        lInput.style.border = "2px solid #ccc";
        errorMsg.style.display = "none";

        arr[1] = lName;


    } else {

        errorMsg.style.display = "block";
        errorMsg.innerHTML = "First letter is must be capital";
        lInput.style.border = "1px solid red";
        lInput.setAttribute("class", "animate__animated animate__headShake");
        tick.style.display = "none";

    }
}
/* ========== Last Name Validation End Here! ========== */

/* ========== Mobile Number Validation Start Here! ========== */
function mobileNumVal() {

    let mNum = document.getElementById("mobileNumber").value;
    let mInput = document.getElementById("mobileNumber");
    let errorMsg = document.getElementById("error-text4");
    let tick = document.getElementById("tick4");
    let indNum = /[7-9]/g;

    if (mNum.trim() === "") {

        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Mobile Number is required";
        mInput.style.border = "1px solid red";
        mInput.setAttribute("class", "animate__animated animate__headShake");
        tick.style.display = "none";


    } else if (mNum.charAt(0).match(indNum)) {

        if (mNum.length === 10) {

            tick.style.display = "block";
            mInput.style.border = "2px solid #ccc";
            errorMsg.style.display = "none";

            arr[3] = mNum;


        } else {

            errorMsg.style.display = "block";
            errorMsg.innerHTML = "Mobile Number must be 10 Digits";
            mInput.style.border = "1px solid red";
            mInput.setAttribute("class", "animate__animated animate__headShake");
            tick.style.display = "none";

        }

    } else {

        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Only Indian Number is accepted";
        mInput.style.border = "1px solid red";
        mInput.setAttribute("class", "animate__animated animate__headShake");
        tick.style.display = "none";

    }
}
/* ========== Mobile Number Validation End Here! ========== */

/* ========== Username Validation Start Here! ========== */
function uNameVal() {

    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let uName = document.getElementById("userName");
    let errorMsg = document.getElementById("error-text5");
    let tick = document.getElementById("tick5");

    if (fName.trim() === "" || lName.trim() === "") {

        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Both first and last name are required";
        uName.style.border = "1px solid red";
        uName.setAttribute("class", "animate__animated animate__headShake");
        tick.style.display = "none";
        uName.value = "";


    } else {

        uName.value = (fName + lName).toLowerCase();
        uName.setAttribute("disabled", "disabled");
        tick.style.display = "block";
        errorMsg.style.display = "none";
        uName.style.border = "2px solid #ccc";

        arr[4] = uName.value;

    }

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

    if (pwd.trim() === "") {

        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Password is required";
        pwdInput.style.border = "1px solid red";
        pwdInput.setAttribute("class", "animate__animated animate__headShake");
        tick.style.display = "none";

    } else if (pwd.match(capital)) {

        if (pwd.match(small)) {

            if (pwd.match(num)) {

                if (pwd.match(sym)) {

                    if (pwd.length < 6) {

                        errorMsg.style.display = "block";
                        errorMsg.innerHTML = "Enter at least 6 character password";
                        pwdInput.style.border = "1px solid red";
                        pwdInput.setAttribute("class", "animate__animated animate__headShake");
                        tick.style.display = "none";

                    } else {

                        errorMsg.style.display = "none";
                        pwdInput.style.border = "2px solid #ccc";
                        tick.style.display = "block";

                        arr[5] = pwd;


                    }

                } else {

                    errorMsg.style.display = "block";
                    errorMsg.innerHTML = "Enter at least one special character";
                    pwdInput.style.border = "1px solid red";
                    pwdInput.setAttribute("class", "animate__animated animate__headShake");
                    tick.style.display = "none";

                }

            } else {

                errorMsg.style.display = "block";
                errorMsg.innerHTML = "Enter at least single number";
                pwdInput.style.border = "1px solid red";
                pwdInput.setAttribute("class", "animate__animated animate__headShake");
                tick.style.display = "none";

            }

        } else {

            errorMsg.style.display = "block";
            errorMsg.innerHTML = "Enter at least one small letter";
            pwdInput.style.border = "1px solid red";
            pwdInput.setAttribute("class", "animate__animated animate__headShake");
            tick.style.display = "none";
        }

    } else {

        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Enter at least one capital letter";
        pwdInput.style.border = "1px solid red";
        pwdInput.setAttribute("class", "animate__animated animate__headShake");
        tick.style.display = "none";

    }

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

    if (conPwd.trim() === "") {

        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Confirm Password is required";
        conPwdInput.style.border = "1px solid red";
        conPwdInput.setAttribute("class", "animate__animated animate__headShake");
        tick.style.display = "none";

    } else if (pwd === conPwd) {

        errorMsg.style.display = "none";
        conPwdInput.style.border = "2px solid #ccc";
        tick.style.display = "block";

        arr[6] = conPwd;


    } else {

        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Confirm password is not match";
        conPwdInput.style.border = "1px solid red";
        conPwdInput.setAttribute("class", "animate__animated animate__headShake");
        tick.style.display = "none";

    }
}
/* ========== Confirm Password Validation End Here! ========== */

/* ========== Email Validation Start Here! ========== */
function emailVal() {

    let email = document.getElementById("email").value;
    let emailInput = document.getElementById("email");
    let errorMsg = document.getElementById("error-text3");
    let box = document.getElementById("main-box");
    let tick = document.getElementById("tick3");

    let gmail = document.getElementById("gmail");
    let yahoo = document.getElementById("yahoo");
    let zoho = document.getElementById("zoho");

    if (email.trim() === "") {

        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Email ID is required";
        emailInput.style.border = "1px solid red";
        emailInput.setAttribute("class", "animate__animated animate__headShake");
        tick.style.display = "none";

    } else if (email.match('@')) {

        box.style.display = "block";

        if (email.match("gmail.com") || email.match("yahoomail.com") || email.match("zohomail.in")) {

            box.style.display = "none";
            errorMsg.style.display = "none";
            emailInput.style.border = "2px solid #ccc";
            tick.style.display = "block";

            arr[2] = email;

        } else {

            errorMsg.style.display = "block";
            errorMsg.innerHTML = "Enter valid email";
            emailInput.style.border = "1px solid red";
            emailInput.setAttribute("class", "animate__animated animate__headShake");
            tick.style.display = "none";
        }


    } else {

        errorMsg.style.display = "block";
        errorMsg.innerHTML = "Enter valid email";
        emailInput.style.border = "1px solid red";
        emailInput.setAttribute("class", "animate__animated animate__headShake");
        tick.style.display = "none";

    }

}
/* ========== Email Validation End Here! ========== */

/* ========== Email Suggestion Start Here! ========== */
function gmail() {
    let email = document.getElementById("email");
    let box = document.getElementById("main-box");

    email.value = email.value + "gmail.com";
    box.style.display = "none";
    emailVal();
}

function yahoo() {
    let email = document.getElementById("email");
    let box = document.getElementById("main-box");

    email.value = email.value + "yahoomail.com";
    box.style.display = "none";
    emailVal();
}

function zoho() {
    let email = document.getElementById("email");
    let box = document.getElementById("main-box");

    email.value = email.value + "zohomail.in";
    box.style.display = "none";
    emailVal();
}
/* ========== Email Suggestion End Here! ========== */

function allData() {

    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let mNum = document.getElementById("mobileNumber").value;
    let uName = document.getElementById("userName").value;
    let pwd = document.getElementById("password").value;
    let conPwd = document.getElementById("conPassword").value;
    let email = document.getElementById("email").value;

    if (fName.trim() === "" || lName.trim() === "" || mNum.trim() === "" || uName.trim() === "" || pwd.trim() === "" || conPwd.trim() === "" || email.trim() === "") {

        window.alert("Enter all fields");

    } else {

        window.alert(arr);

    }

}