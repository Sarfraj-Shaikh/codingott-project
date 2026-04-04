// Task: 1

function printSum() {

    let num = Number(document.getElementById("t1Input").value);
    let numInput = document.getElementById("t1Input");
    let output = document.getElementById("t1Output");

    let genBtn = document.getElementById("t1Btn");
    let clearBtn = document.getElementById("t1ClrBtn");

    output.innerHTML = "";
    let sum = 0;

    if (numInput.value === "") {

        numInput.style.border = "2px solid red";

    } else {

        numInput.style.border = "1px solid gray";

        for (let i = 1; i <= num; i++) {

            sum += i;

        }

        output.innerHTML = sum;
        genBtn.style.display = "none";
        clearBtn.style.display = "block";

    }

}

function clearPrintSum() {

    let numInput = document.getElementById("t1Input");
    let output = document.getElementById("t1Output");

    let genBtn = document.getElementById("t1Btn");
    let clearBtn = document.getElementById("t1ClrBtn");

    output.innerHTML = "";
    genBtn.style.display = "block";
    clearBtn.style.display = "none";
    numInput.value = "";

}

// Task: 2

function printEvenSum() {

    let num = Number(document.getElementById("t2Input").value);
    let numInput = document.getElementById("t2Input");
    let output = document.getElementById("t2Output");

    let genBtn = document.getElementById("t2Btn");
    let clearBtn = document.getElementById("t2ClrBtn");

    output.innerHTML = "";
    let sum = 0;

    if (numInput.value === "") {

        numInput.style.border = "2px solid red";

    } else {

        numInput.style.border = "1px solid gray";

        for (let i = 1; i <= num; i++) {

            if (i % 2 === 0) {

                sum += i;

            }

        }

        output.innerHTML = sum;
        genBtn.style.display = "none";
        clearBtn.style.display = "block";

    }

}

function clearPrintEvenSum() {

    let numInput = document.getElementById("t2Input");
    let output = document.getElementById("t2Output");

    let genBtn = document.getElementById("t2Btn");
    let clearBtn = document.getElementById("t2ClrBtn");

    output.innerHTML = "";
    genBtn.style.display = "block";
    clearBtn.style.display = "none";
    numInput.value = "";

}

// Task: 3

function printOddSum() {

    let num = Number(document.getElementById("t3Input").value);
    let numInput = document.getElementById("t3Input");
    let output = document.getElementById("t3Output");

    let genBtn = document.getElementById("t3Btn");
    let clearBtn = document.getElementById("t3ClrBtn");

    output.innerHTML = "";
    let sum = 0;

    if (numInput.value === "") {

        numInput.style.border = "2px solid red";

    } else {

        numInput.style.border = "1px solid gray";

        for (let i = 1; i <= num; i++) {

            if (i % 2 !== 0) {

                sum += i;

            }

        }

        output.innerHTML = sum;
        genBtn.style.display = "none";
        clearBtn.style.display = "block";

    }

}

function clearPrintOddSum() {

    let numInput = document.getElementById("t3Input");
    let output = document.getElementById("t3Output");

    let genBtn = document.getElementById("t3Btn");
    let clearBtn = document.getElementById("t3ClrBtn");

    output.innerHTML = "";
    genBtn.style.display = "block";
    clearBtn.style.display = "none";
    numInput.value = "";

}

// Task: 4

function printTable() {

    let num = Number(document.getElementById("t4Input").value);
    let numInput = document.getElementById("t4Input");
    let output = document.getElementById("t4Output");

    let genBtn = document.getElementById("t4Btn");
    let clearBtn = document.getElementById("t4ClrBtn");

    output.innerHTML = "";

    if (numInput.value === "") {

        numInput.style.border = "2px solid red";

    } else {

        numInput.style.border = "1px solid gray";

        for (let i = 1; i <= 10; i++) {


            output.innerHTML += (num * i) + "<br>";

        }

        genBtn.style.display = "none";
        clearBtn.style.display = "block";

    }

}

function clearPrintTable() {

    let numInput = document.getElementById("t4Input");
    let output = document.getElementById("t4Output");

    let genBtn = document.getElementById("t4Btn");
    let clearBtn = document.getElementById("t4ClrBtn");

    output.innerHTML = "";
    genBtn.style.display = "block";
    clearBtn.style.display = "none";
    numInput.value = "";

}

// Task: 5

function printDigit() {

    let num = Number(document.getElementById("t5Input").value);
    let numInput = document.getElementById("t5Input");
    let output = document.getElementById("t5Output");

    let numLength = num.toString().length;

    let genBtn = document.getElementById("t5Btn");
    let clearBtn = document.getElementById("t5ClrBtn");

    output.innerHTML = "";

    if (numInput.value === "") {

        numInput.style.border = "2px solid red";

    } else {

        numInput.style.border = "1px solid gray";

        for (let i = 1; i <= numLength; i++) {

            break;

        }

        output.innerHTML += numLength;
        genBtn.style.display = "none";
        clearBtn.style.display = "block";

    }

}

function clearPrintDigit() {

    let numInput = document.getElementById("t5Input");
    let output = document.getElementById("t5Output");

    let genBtn = document.getElementById("t5Btn");
    let clearBtn = document.getElementById("t5ClrBtn");

    output.innerHTML = "";
    genBtn.style.display = "block";
    clearBtn.style.display = "none";
    numInput.value = "";

}