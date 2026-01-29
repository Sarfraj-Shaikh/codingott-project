// ## Task 

function showRules() {
    let rules = document.getElementById("rules");
    rules.style.display = "inline-block";
}

function validatePassword() {
    let rulesBg = document.getElementById("rules");
    let pass = document.getElementById("password").value;
    let upper = document.getElementById("upper");
    let lower = document.getElementById("lower");
    let number = document.getElementById("number");
    let special = document.getElementById("special");
    let leng = document.getElementById("length");
    let successIcon = document.getElementById("successIcon");

    let capital = /[A-Z]/g;
    let small = /[a-z]/g;
    let num = /[0-9]/g;
    let symb = /[!@#$%^&*()_\-+=\[\]{};:'"\\|,.<>\/?`~]/g;

    pass.match(capital) ? upper.style.display = "none" : upper.style.display = "block";
    pass.match(small) ? lower.style.display = "none" : lower.style.display = "block";
    pass.match(num) ? number.style.display = "none" : number.style.display = "block";
    pass.match(symb) ? special.style.display = "none" : special.style.display = "block";
    (pass.length < 6) ? leng.style.display = "block" : leng.style.display = "none";

    pass.match(capital) && pass.match(small) && pass.match(num) && pass.match(symb) && (pass.length > 6) ? rulesBg.style.display = "none" : rulesBg.style.display = "block";

    pass.match(capital) && pass.match(small) && pass.match(num) && pass.match(symb) && (pass.length > 6) ? successIcon.style.display = "block" : successIcon.style.display = "none";

}


