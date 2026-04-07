// Task:

let userNameText = document.getElementById("userNameText");

function checkCookie() {

    if (document.cookie.length === 0) {

        let name = window.prompt("Enter Your Name");

        if (name !== null || name.trim() !== "") {

            storeName(name);

        };

    } else {

        let cookie = document.cookie.split("=");
        userNameText.textContent = cookie[1];

    };

};

checkCookie();

function storeName(name) {

    document.cookie = "name =" + name + "; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";
    let cookie = document.cookie.split("=");
    userNameText.textContent = cookie[1];
    
};