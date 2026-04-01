// Task: 1

function printArray() {

    let namesOutput = document.getElementById("namesOutput");

    let student = ["Rahul", "Shyam", "Rakesh", "Priya", "Rohit"];
    namesOutput.innerHTML = student.join(" ");

    for (let i = 0; i <= 4; i++) {

        namesOutput.innerHTML += updatedList[i];
    }
}

// Task: 2

function generateTable() {

    let num = Number(document.getElementById("tableNum").value);
    let numInput = document.getElementById("tableNum");
    let tableOutput = document.getElementById("tableOutput");

    let genBtn = document.getElementById("genBtn");
    let clrBtn = document.getElementById("clrBtn");

    if (numInput.value === "") {

        numInput.style.border = "2px solid red";

    } else {

        numInput.style.border = "1px solid gray";
        genBtn.style.display = "none";
        clrBtn.style.display = "block";

        for (let i = 1; i <= 10; i++) {

            tableOutput.innerHTML += (num * i) + "<br>";
        }

    }
}

function clearData() {

    let num = Number(document.getElementById("tableNum").value);
    let numInput = document.getElementById("tableNum");
    let tableOutput = document.getElementById("tableOutput");

    let genBtn = document.getElementById("genBtn");
    let clrBtn = document.getElementById("clrBtn");

    genBtn.style.display = "block";
    clrBtn.style.display = "none";
    tableOutput.innerHTML = "";
    numInput.value = "";

}