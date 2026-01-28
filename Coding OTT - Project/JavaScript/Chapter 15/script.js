// ## Task

function fontSize() {
    let text = document.getElementById("dynamicText");
    let range = document.getElementById("fontRange").value;
    let result = document.getElementById("fontSizeDisplay");

    text.style.fontSize = range + "px";

    // result.innerHTML = "Your font size is: " +range +" px";
    result.innerHTML = `Your font size is: ${range} px`;
    
    /*
    Output Possibilities: Dono ki output ko properly show karte hai, magar ek me bar bar data type change ho rha hai isliye "+" ka sign lagaya gya hai.
    */
}


