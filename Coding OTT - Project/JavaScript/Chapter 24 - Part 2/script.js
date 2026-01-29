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
    (fName === "") ? fInput.setAttribute("class","animate__animated animate__headShake") : fName.charAt(0).match(capital) ? tick.style.display = "block" : fInput.setAttribute("class","animate__animated animate__headShake");
}
/* ========== First Name Validation End Here! ========== */




