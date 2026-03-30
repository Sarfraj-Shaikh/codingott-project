// ### Task: Dark Mode / Light Mode Switch

function darkLightMode() {

    let card = document.getElementById("card");
    let heading = document.getElementById("heading");
    let text = document.getElementById("text");
    let btn = document.getElementById("btn");

    if (btn.innerHTML === "Dark Mode") {

        card.style.backgroundColor = "#000000";
        heading.style.color = "#FFFFFF";
        text.style.color = "#cacaca";
        btn.style.backgroundColor = "#004cff"
        btn.style.color = "#FFFFFF";

        heading.innerHTML = "DARK MODE";
        btn.innerHTML = "Light Mode";

    } else {

        card.style.backgroundColor = "#f2f2f2";
        heading.style.color = "#000000";
        text.style.color = "#2d2d2d";
        btn.style.backgroundColor = "#000000"
        btn.style.color = "#FFFFFF";

        heading.innerHTML = "LIGHT MODE";
        btn.innerHTML = "Dark Mode";
        
    }

}




