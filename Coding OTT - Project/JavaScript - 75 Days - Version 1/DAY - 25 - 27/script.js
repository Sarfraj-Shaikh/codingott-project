/* ================= TASK ================= */

function repeatMessage() {

    let message = document.getElementById("message").value.trim();
    let repeatCount = document.getElementById("repeatCount").value;
    
    let error = document.getElementById("error");
    let output = document.getElementById("output");

    if (message === "") {

        error.textContent = "Type Your Messages";
        output.innerHTML = "";
        return;

    }

    if (isNaN(repeatCount) || repeatCount === "") {

        error.textContent = "Enter Reapeat Count";
        output.innerHTML = "";
        return;

    }

    if (repeatCount <= 0) {

        error.textContent = "Minimum 1 Alllowed";
        output.innerHTML = "";
        return;

    }

    if (repeatCount > 10) {

        error.textContent = "Maximum 10 Allowed";
        output.innerHTML = "";
        return;

    }

    error.textContent = "";
    output.innerHTML = "";

    for (let i = 1; i < repeatCount; i++) {

        output.innerHTML += message + "\n";

    }
}