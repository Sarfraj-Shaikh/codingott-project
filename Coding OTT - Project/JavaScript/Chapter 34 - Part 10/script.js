// Task: 1

function showDialog() {

    let result = document.getElementById("t1Output");

    let output = window.confirm("This is confirmation message for you, please click on any button to see result");

    if(output == true) {

        result.innerHTML = "Congratulation, You Clicked On Confirmed Button";
        result.style.color = "green";
        
    } else {
        
        result.innerHTML = "Oops! You Clicked On Cancelled Button";
        result.style.color = "red";

    }
}