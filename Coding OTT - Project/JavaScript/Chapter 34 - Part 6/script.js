// Task: 1

function printSum() {

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

        let updatedNum = numInput.value;
        let reverseNum = updatedNum.split("").reverse().join("");

        output.innerHTML = reverseNum;

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

    if (numInput.value === "") {

        numInput.style.border = "2px solid red";

    } else {

        numInput.style.border = "1px solid gray";

        let updatedNum = numInput.value;
        let reverseNum = updatedNum.split("").reverse().join("");

        if (updatedNum === reverseNum) {

            output.innerHTML = "Number is palindrome";

        } else {

            output.innerHTML = "Number is not palindrome";

        }


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

    if (numInput.value === "") {

        numInput.style.border = "2px solid red";

    } else {

        numInput.style.border = "1px solid gray";

        let numStr = numInput.value;

        for (let digit = 0; digit <= 9; digit++) {

            let count = 0;

            for (let i = 0; i < numStr.length; i++) {

                if (numStr[i] == digit) {
                    count++;
                }

            }

            output.innerHTML += digit + " => " + count + "<br>";
        }

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

        if (num === 0) {
            output.innerHTML = "Zero";
            genBtn.style.display = "none";
            clearBtn.style.display = "block";
            return;
        }

        let result = "";

        while (num > 0) {

            let lastDigit = num % 10;
            let digitWords = "";

            switch (lastDigit) {

                case 0:
                    digitWords = "Zero";
                    break;

                case 1:
                    digitWords = "One";
                    break;

                case 2:
                    digitWords = "Two";
                    break;

                case 3:
                    digitWords = "Three";
                    break;

                case 4:
                    digitWords = "Four";
                    break;

                case 5:
                    digitWords = "Five";
                    break;

                case 6:
                    digitWords = "Six";
                    break;

                case 7:
                    digitWords = "Seven";
                    break;

                case 8:
                    digitWords = "Eight";
                    break;

                case 9:
                    digitWords = "Nine";
                    break;
            }

            result = digitWords + " " + result;
            num = parseInt(num / 10);
        }

        output.innerHTML = result;

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

    let output = document.getElementById("t5Output");

    let genBtn = document.getElementById("t5Btn");
    let clearBtn = document.getElementById("t5ClrBtn");

    output.innerHTML = "";

    for (let i = 1; i <= 227; i++) {

        output.innerHTML += i + " = " + String.fromCharCode(i) + "<br>";
    }

    genBtn.style.display = "none";
    clearBtn.style.display = "block";

}

function clearPrintDigit() {

    let output = document.getElementById("t5Output");

    let genBtn = document.getElementById("t5Btn");
    let clearBtn = document.getElementById("t5ClrBtn");

    output.innerHTML = "";
    genBtn.style.display = "block";
    clearBtn.style.display = "none";

}