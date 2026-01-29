// ## Task 

function showMessage() {
    let pass = document.getElementById("password").value;
    let result = document.getElementById("message");
    (pass.length < 10) ? result.style.display = "inline-block" : result.style.display = "none";
}

function validatePassword() {
    let pass = document.getElementById("password").value;
    let result = document.getElementById("message");
    let loader = document.getElementById("loader");
    let tick = document.getElementById("tick");
    result.style.display = "none";

    // (pass == "") ? loader.style.display = "none" : loader.style.display = "inline-block";
    (pass.length < 10) ? loader.style.display = "inline-block" : loader.style.display = "none";
    (pass.length < 10) ? tick.style.display = "none" : tick.style.display = "inline-block";
}


