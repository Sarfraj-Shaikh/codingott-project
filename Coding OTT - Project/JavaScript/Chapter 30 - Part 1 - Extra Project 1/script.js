// ### Task: Password Show / Hide Toggle

function showHidePass() {

    let input = document.getElementById("pass");
    let btn = document.getElementById("btn");

    if (btn.innerHTML === "Show") {

        input.type = "text";
        btn.innerHTML = "Hide";

    } else {

        input.type = "password";
        btn.innerHTML = "Show";

    }
}



