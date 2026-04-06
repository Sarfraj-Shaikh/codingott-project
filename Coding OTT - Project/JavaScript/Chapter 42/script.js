// Task: 1

let keyInput = document.getElementById("keyInput");
keyInput.addEventListener("keydown", function (event) {

    let keyName = document.getElementById("keyName");
    let keyCode = document.getElementById("keyCode");
    let keyCodeOld = document.getElementById("keyCodeOld");

    keyName.textContent = event.key;
    keyCode.textContent = event.code;
    keyCodeOld.textContent = event.keyCode;

});