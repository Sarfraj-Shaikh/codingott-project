// ## Task 

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let result = document.getElementById("result");

    result.innerHTML = (name === "" || email === "") ? "Enter Name or Email" : (name === "Sarfraj" && email === "demo@example.com") ? "Success" : "Failed";
    return false;
}


