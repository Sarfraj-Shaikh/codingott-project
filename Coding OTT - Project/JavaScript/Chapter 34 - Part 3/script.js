// Task: 1

function printNum() {

    let num = Number(document.getElementById("t1Input").value);
    let numInput = document.getElementById("t1Input");
    let output = document.getElementById("t1Output");

    let genBtn = document.getElementById("t1Btn");
    let clearBtn = document.getElementById("t1ClrBtn");

    output.innerHTML = "";

    if (numInput.value === "") {

        numInput.style.border = "2px solid red";

    } else {

        numInput.style.border = "1px solid gray";

        for (let i = 1; i <= num; i++) {

            output.innerHTML += i + "<br>";

        }

        genBtn.style.display = "none";
        clearBtn.style.display = "block";

    }

}

function clearPrintNum() {

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

function printRevNum() {

    let num = Number(document.getElementById("t2Input").value);
    let numInput = document.getElementById("t2Input");
    let output = document.getElementById("t2Output");

    let genBtn = document.getElementById("t2Btn");
    let clearBtn = document.getElementById("t2ClrBtn");

    output.innerHTML = "";

    if (numInput.value === "") {

        numInput.style.border = "2px solid red";

    } else {

        numInput.style.border = "1px solid gray";

        for (let i = num; i >= 1; i--) {

            output.innerHTML += i + "<br>";

        }

        genBtn.style.display = "none";
        clearBtn.style.display = "block";

    }

}

function clearRevNum() {

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

function printAlphabet() {

    let output = document.getElementById("t3Output");

    let genBtn = document.getElementById("t3Btn");
    let clearBtn = document.getElementById("t3ClrBtn");

    output.innerHTML = "";

    let start = 'A';
    let stop = 'Z'

    for (let i = start.charCodeAt(); i <= stop.charCodeAt(); i++) {

        output.innerHTML += String.fromCharCode(i) + "<br>";

    }

    genBtn.style.display = "none";
    clearBtn.style.display = "block";

}

function clearAlphabet() {

    let output = document.getElementById("t3Output");

    let genBtn = document.getElementById("t3Btn");
    let clearBtn = document.getElementById("t3ClrBtn");

    output.innerHTML = "";
    genBtn.style.display = "block";
    clearBtn.style.display = "none";

}

// Task: 4

function printEvenNum() {

    let output = document.getElementById("t4Output");

    let genBtn = document.getElementById("t4Btn");
    let clearBtn = document.getElementById("t4ClrBtn");

    output.innerHTML = "";

    for (let i = 1; i <= 100; i++) {

        if (i % 2 === 0) {

            output.innerHTML += i + "<br>";

        }

    }

    genBtn.style.display = "none";
    clearBtn.style.display = "block";

}

function clearEvenNum() {

    let output = document.getElementById("t4Output");

    let genBtn = document.getElementById("t4Btn");
    let clearBtn = document.getElementById("t4ClrBtn");

    output.innerHTML = "";
    genBtn.style.display = "block";
    clearBtn.style.display = "none";

}

// Task: 4

function printOddNum() {

    let output = document.getElementById("t5Output");

    let genBtn = document.getElementById("t5Btn");
    let clearBtn = document.getElementById("t5ClrBtn");

    output.innerHTML = "";

    for (let i = 1; i <= 100; i++) {

        if (i % 2 !== 0) {

            output.innerHTML += i + "<br>";

        }

    }

    genBtn.style.display = "none";
    clearBtn.style.display = "block";

}

function clearOddNum() {

    let output = document.getElementById("t5Output");

    let genBtn = document.getElementById("t5Btn");
    let clearBtn = document.getElementById("t5ClrBtn");

    output.innerHTML = "";
    genBtn.style.display = "block";
    clearBtn.style.display = "none";

}