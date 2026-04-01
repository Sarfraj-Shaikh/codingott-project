// Task: 1

function showEven() {

    let num = Number(document.getElementById("evenInput").value);
    let numInput = document.getElementById("evenInput");
    let output = document.getElementById("evenOutput");

    let genBtn = document.getElementById("evenBtn");
    let clearBtn = document.getElementById("evenClrBtn");

    output.innerHTML = "";

    if (numInput.value === "") {

        numInput.style.border = "2px solid red";

    } else {

        numInput.style.border = "1px solid gray";

        if (num % 2 !== 0) {

            output.innerHTML = "Number is not even";

        } else {

            for (let i = 1; i <= num; i++) {

                if (i % 2 === 0) {

                    output.innerHTML += i + "<br>";

                }

            }

            genBtn.style.display = "none";
            clearBtn.style.display = "block";

        }


    }

}

function clearEven() {

    let numInput = document.getElementById("evenInput");
    let output = document.getElementById("evenOutput");

    let genBtn = document.getElementById("evenBtn");
    let clearBtn = document.getElementById("evenClrBtn");

    output.innerHTML = "";
    genBtn.style.display = "block";
    clearBtn.style.display = "none";
    numInput.value = "";

}

// Task: 2

function showOdd() {

    let num = Number(document.getElementById("oddInput").value);
    let numInput = document.getElementById("oddInput");
    let output = document.getElementById("oddOutput");

    let genBtn = document.getElementById("oddBtn");
    let clearBtn = document.getElementById("oddClrBtn");

    output.innerHTML = "";

    if (numInput.value === "") {

        numInput.style.border = "2px solid red";

    } else {

        numInput.style.border = "1px solid gray";

        if (num % 2 == 0) {

            output.innerHTML = "Number is even";

        } else {

            for (let i = 1; i <= num; i++) {

                if (i % 2 !== 0) {

                    output.innerHTML += i + "<br>";

                }

            }

            genBtn.style.display = "none";
            clearBtn.style.display = "block";

        }


    }

}

function clearOdd() {

    let numInput = document.getElementById("oddInput");
    let output = document.getElementById("oddOutput");

    let genBtn = document.getElementById("oddBtn");
    let clearBtn = document.getElementById("oddClrBtn");

    output.innerHTML = "";
    genBtn.style.display = "block";
    clearBtn.style.display = "none";
    numInput.value = "";

}