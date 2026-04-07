// Task:

let createBtn = document.getElementById("createBtn");
let readBtn = document.getElementById("readBtn");
let updateBtn = document.getElementById("updateBtn");
let deleteBtn = document.getElementById("deleteBtn");
let output = document.getElementById("output");

createBtn.addEventListener("click", createCookie);
function createCookie() {

    let cookieName = document.getElementById("cookieName").value;
    let cookieValue = document.getElementById("cookieValue").value;

    if (cookieName.trim() === "") {

        alert("Please Enter Cookie Name");
        return false;

    }

    else if (cookieValue.trim() === "") {

        alert("Please Enter Cookie Value");
        return false;

    }

    else {

        document.cookie = cookieName + "=" + cookieValue + "; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";
        output.textContent = "Cookies Has Been Created";

        createBtn.style.display = "none";
        readBtn.style.display = "block";
        updateBtn.style.display = "block";
        deleteBtn.style.display = "block";

    };

};

readBtn.addEventListener("click", readCookie);
function readCookie() {

    if (document.cookie.length === 0) {

        output.textContent = "No Cookies Found";

    } else {

        let allCookie = document.cookie.split("=");
        output.innerHTML = "Cookies: " + allCookie + "<br> <br>" + "Cookie Name: " + allCookie[0] + "<br>" + "Cookie Value: " + allCookie[1];

    };

};

updateBtn.addEventListener("click", updateCookie);
function updateCookie() {

    let cookieName = document.getElementById("cookieName").value;
    let cookieValue = document.getElementById("cookieValue").value;

    if (cookieName.trim() === "") {

        alert("Please Enter Cookie Name");
        return false;

    }

    else if (cookieValue.trim() === "") {

        alert("Please Enter Cookie Value");
        return false;

    }

    else {

        document.cookie = cookieName + "=" + cookieValue + "; expires = Sun, 31 2119 12:00:00 UTC; path = /";
        output.textContent = "Cookies Has Been Updated";

    };

};

deleteBtn.addEventListener("click", deleteCookie);
function deleteCookie() {

    let cookieName = document.getElementById("cookieName").value;
    let cookieValue = document.getElementById("cookieValue").value;

    if (cookieName.trim() === "") {

        alert("Please Enter Cookie Name");
        return false;

    }

    else if (cookieValue.trim() === "") {

        alert("Please Enter Cookie Value");
        return false;

    }

    else {

        document.cookie = cookieName + "=" + cookieValue + "; max-age = 0; path = /";
        output.textContent = "Cookies Has Been Deleted";

        createBtn.style.display = "block";
        readBtn.style.display = "block";
        updateBtn.style.display = "none";
        deleteBtn.style.display = "none";

    };

};

function checkCookie() {

    if (document.cookie.length === 0) {

        createBtn.style.display = "block";
        readBtn.style.display = "none";
        updateBtn.style.display = "none";
        deleteBtn.style.display = "none";

    } else {

        createBtn.style.display = "none";
        readBtn.style.display = "block";
        updateBtn.style.display = "block";
        deleteBtn.style.display = "block";

    };

};

checkCookie();

