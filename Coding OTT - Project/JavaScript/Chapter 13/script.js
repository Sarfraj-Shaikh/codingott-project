// ## Task 1

function showName() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let output = document.getElementById("nameResult");

    output.innerHTML = "<b>Full Name:</b> " + firstName + lastName;
    return false;
}

// ## Task 2 
function addMaker() {
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("phone").value;
    let spouse = document.getElementById("spouse").value;
    let relation = document.getElementById("relationSelect").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    let pinCode = document.getElementById("pinCode").value;
    let add = document.getElementById("address").value;

    let addressBox = document.getElementById("customText");

    addressBox.innerHTML = `<b>Name:</b> ${name} ${relation} ${spouse} <br> 
    <b>Email:</b> ${email} <br> <b>Phone:</b> ${number} <br> <b>Address:</b> ${add} ${city}, ${state}, ${country} ${pinCode}<br>`;

    return false;
}

// ## Customization Options

let addressResult = document.getElementById("customText");
let boldBg = document.getElementById("boldBg");
let italicBg = document.getElementById("italicBg");
let underlineBg = document.getElementById("underlineBg");

function bold() {
    boldBg.style.backgroundColor = "#0056b3";
    addressResult.style.fontWeight = "bold";
}

function italic() {
    italicBg.style.backgroundColor = "#0056b3";
    addressResult.style.fontStyle = "italic";
}

function underline() {
    underlineBg.style.backgroundColor = "#0056b3";
    addressResult.style.textDecoration = "underline";
}

function reset() {
    addressResult.style.fontWeight = "normal";
    addressResult.style.fontStyle = "normal";
    addressResult.style.textDecoration = "none";

    boldBg.style.backgroundColor = "#007bff";
    italicBg.style.backgroundColor = "#007bff";
    underlineBg.style.backgroundColor = "#007bff";

}

// ## Text Alignment Options

function txtAlign() {
    let align = document.getElementById("alignSelect").value;
    // let addressResult = document.getElementById("customText");

    if (align != "") {
        if (align == "left") {
            addressResult.style.textAlign = "left";
        }
        else if (align == "center") {
            addressResult.style.textAlign = "center";

        }
        else {
            addressResult.style.textAlign = "right";
        }
    }
}

// ## Text Color Options

function txtColor() {
    let color = document.getElementById("colorSelect").value;
    
    if (color != "") {
        if (color == "red") {
            addressResult.style.color = "red";
        }
        else if (color == "blue") {
            addressResult.style.color = "blue";
        }
        else if (color == "green") {
            addressResult.style.color = "green";
        }
        else {
            addressResult.style.color = "black";
            
        }
    }
}

// ## Text Color Options

function printFull() {
    window.print();
}

function printAddress() {
    let containerOne = document.getElementById("container1");
    let addForm = document.getElementById("addressForm");
    let customizeTxt = document.getElementById("customize-controls");
    let printBtn = document.getElementById("print-con");
    containerOne.style.display = "none";
    addForm.style.display = "none";
    customizeTxt.style.display = "none";
    printBtn.style.display = "none";
    window.print();
}

