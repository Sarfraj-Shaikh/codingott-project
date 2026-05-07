/* ================= TASK ================= */
let menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", sidebarToggle);

function sidebarToggle() {

    let sidebar = document.getElementById("sidebar");
    let mainContent = document.getElementById("mainContent");

    sidebar.classList.toggle("hide");
    mainContent.classList.toggle("full");

}

function showRegForm() {

    let signupCard = document.getElementById("signupCard");
    let loginCard = document.getElementById("loginCard");

    signupCard.style.display = "block";
    loginCard.style.display = "none";

    clearSignupErrors();

}

function showLoginForm() {

    let signupCard = document.getElementById("signupCard");
    let loginCard = document.getElementById("loginCard");

    signupCard.style.display = "none";
    loginCard.style.display = "block";

    clearLoginErrors();

}

let signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function (e) {

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById("signupConfirmPassword").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const signupSuccess = document.getElementById("signupSuccess");

    clearSignupErrors();
    e.preventDefault();

    if (name === "") {

        nameError.innerText = "Enter Your Full Name";

    }
    else if (email === "") {

        emailError.innerText = "Enter Email ID";
    }
    else if (email.match("@")) {

        if (email.match("gmail.com")) {

            if (password === "") {

                passwordError.innerText = "Enter Your Password";

            }
            else if (confirmPassword === "") {

                confirmPasswordError.innerText = "Enter Your Confirm Password";

            }
            else if (password === confirmPassword) {

                signupSuccess.innerText = "Signup successful! Now login.";
                signupForm.reset();

            } else {

                confirmPasswordError.innerText = "Your Confirm Password Is Not Match";

            }


        } else {

            emailError.innerText = "Only 'gmail.com' Alllowed";

        }

    } else {

        emailError.innerText = "Invalid Email ID";

    }

});

let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const loginEmailError = document.getElementById("loginEmailError");
    const loginPasswordError = document.getElementById("loginPasswordError");
    const loginError = document.getElementById("loginError");
    const loginSuccess = document.getElementById("loginSuccess");

    clearLoginErrors();

    if (email === "") {

        loginEmailError.innerText = "Enter Email ID";
    }
    else if (email.match("@")) {

        if (email.match("gmail.com")) {

            if (password === "") {

                loginPasswordError.innerText = "Enter Your Password";

            }
            else {

                loginSuccess.innerText = "Login successful!";
                loginForm.reset();

            }

        } else {

            loginEmailError.innerText = "Only 'gmail.com' Alllowed";

        }

    } else {

        loginEmailError.innerText = "Invalid Email ID";

    }

});

function clearSignupErrors() {

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";
    document.getElementById("signupSuccess").innerText = "";

}

function clearLoginErrors() {

    document.getElementById("loginEmailError").innerText = "";
    document.getElementById("loginPasswordError").innerText = "";
    document.getElementById("loginError").innerText = "";
    document.getElementById("loginSuccess").innerText = "";

}