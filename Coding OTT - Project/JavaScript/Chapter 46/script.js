// Task:

let rememberMe = document.getElementById("rememberMe");
rememberMe.addEventListener("change", deleteLoginDetails);

let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", userLogin);

function userLogin() {

    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let rememberMe = document.getElementById("rememberMe");

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username.trim() === "") {

        usernameInput.style.border = "2px solid red";
        passwordInput.style.border = "1px solid rgba(255, 255, 255, 0.18)";

    }
    else if (password.trim() === "") {

        usernameInput.style.border = "1px solid rgba(255, 255, 255, 0.18)";
        passwordInput.style.border = "2px solid red";

    }
    else {

        usernameInput.style.border = "1px solid rgba(255, 255, 255, 0.18)";
        passwordInput.style.border = "1px solid rgba(255, 255, 255, 0.18)";

        if (rememberMe.checked === true) {

            storeLoginDetails();

        } else {

            alert("Welcome Dear, We dont store your data.");
            return false;

        };

    };

};

function storeLoginDetails() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let name = username;
    let pass = password;

    document.cookie = "user=" + name + "; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";
    document.cookie = "pass=" + pass + "; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";

    alert("Login Details Saved Successfully.");
    return false;

};

function deleteLoginDetails() {

    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let rememberMe = document.getElementById("rememberMe");

    if (document.cookie.length === 0) {

        return false;

    } else {

        if (rememberMe.checked === false) {

            document.cookie = "user=; max-age=0; path=/";
            document.cookie = "pass=; max-age=0; path=/";

            username.value = "";
            password.value = "";

            alert("Login Details Deleted Successfully.");
            return false;

        };
    };

};

function getCookie() {

    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let rememberMe = document.getElementById("rememberMe");

    if (document.cookie.length !== 0) {

        let cookie = document.cookie.split("; ");

        for (let i = 0; i < cookie.length; i++) {

            let user = cookie[i].split("=");

            if (user[0] === "user") {

                username.value = user[1];

            };

            if (user[0] === "pass") {

                password.value = user[1];

            };

        };

        if (username.value !== "" && password.value !== "") {

            rememberMe.checked = true;

        };

    };

};

getCookie();
