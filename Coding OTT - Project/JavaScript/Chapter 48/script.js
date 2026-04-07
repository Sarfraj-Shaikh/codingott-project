// Task:

let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");

let storedName = document.getElementById("storedName");
let storedEmail = document.getElementById("storedEmail");
let storedPassword = document.getElementById("storedPassword");

let saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", function () {

    if (nameInput.value.trim() === "") {

        window.alert("Enter Your Name");
        return false;

    }
    else if (emailInput.value.trim() === "") {

        window.alert("Enter Your Email");
        return false;

    }
    else if (!emailInput.value.includes("@")) {

        window.alert("Invalid Email ID");
        return false;

    }
    else if (passwordInput.value.trim() === "") {

        window.alert("Enter Your Password");
        return false;

    }
    else if (passwordInput.value.length < 8) {

        window.alert("Enter Minimum 8 Digits Password");
        return false;
    }
    else {

        storeData(nameInput.value, emailInput.value, passwordInput.value);

    }


});

let clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", deleteData);

function checkCookie() {

    if (document.cookie.length === 0) {

        clearBtn.style.display = "none";
        saveBtn.textContent = "Save in Cookies"

        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";

    } else {

        clearBtn.style.display = "block";
        saveBtn.textContent = "Update in Cookies"

        let cookie = document.cookie.split("; ");

        for (let i = 0; i < cookie.length; i++) {

            let allCookie = cookie[i].split("=");

            if (allCookie[0] === "name") {

                nameInput.value = allCookie[1];
                storedName.innerHTML = `Name: <span class="empty-msg">${allCookie[1]}</span>`
            }

            if (allCookie[0] === "email") {

                emailInput.value = allCookie[1];
                storedEmail.innerHTML = `Email: <span class="empty-msg">${allCookie[1]}</span>`
            }
            
            if (allCookie[0] === "pass") {
                
                passwordInput.value = allCookie[1];
                storedPassword.innerHTML = `Password: <span class="empty-msg">${allCookie[1]}</span>`
            }
            
        };
        
    };
    
};

checkCookie();

function storeData(name, email, pass) {
    
    if (document.cookie.length === 0) {
        
        window.alert("Data Stored Successfully");
        
        document.cookie = "name =" + name + "; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";
        document.cookie = "email =" + email + "; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";
        document.cookie = "pass =" + pass + "; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";
        
        checkCookie();
        
    } else {
        
        window.alert("Stored Data Updated Successfully");
        
        document.cookie = "name =" + name + "; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";
        document.cookie = "email =" + email + "; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";
        document.cookie = "pass =" + pass + "; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";
        
        checkCookie();
        
    }
    
};

function deleteData() {
    
    window.alert("Stored Data Deleted Successfully");
    
    document.cookie = "name=; max-age = 0; path = /";
    document.cookie = "email=; max-age = 0; path = /";
    document.cookie = "pass=; max-age = 0; path = /";
    
    storedName.innerHTML = `Name: <span class="empty-msg">Empty</span>`
    storedEmail.innerHTML = `Email: <span class="empty-msg">Empty</span>`
    storedPassword.innerHTML = `Password: <span class="empty-msg">Empty</span>`
    
    checkCookie();
};