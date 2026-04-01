// Task:

function repeatText() {

    let output = document.getElementById("output");
    let resetBtn = document.getElementById("resetBtn");
    let genBtn = document.getElementById("genBtn");

    let text = document.getElementById("msg").value;
    let num = Number(document.getElementById("num").value);

    let textInput = document.getElementById("msg");
    let numInput = document.getElementById("num");

    if (text.trim() === "") {

        textInput.style.border = "2px solid red";
        numInput.style.border = "1px solid gray";

    } else if (numInput.value === "") {

        textInput.style.border = "1px solid gray";
        numInput.style.border = "2px solid red";

    } else {

        textInput.style.border = "1px solid gray";
        numInput.style.border = "1px solid gray";

        for (let i = 1; i <= num; i++) {

            output.innerHTML += text + "<br>";
            resetBtn.style.display = "block";
            genBtn.style.display = "none";

        }
    }

}

function resetText() {

    let output = document.getElementById("output");
    let resetBtn = document.getElementById("resetBtn");
    let genBtn = document.getElementById("genBtn");

    let text = document.getElementById("msg");
    let num = document.getElementById("num");
    text.value = "";
    num.value = "";

    output.innerHTML = "";
    resetBtn.style.display = "none";
    genBtn.style.display = "block";


}