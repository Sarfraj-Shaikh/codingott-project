// ### 1. Dynamic Heading Create Karna 

let container = document.getElementById("contain");

let headText = document.createElement("h1");
let msg = document.createTextNode("Welcome to My Website");

headText.appendChild(msg);
container.appendChild(headText);


// ### 2. Paragraph Generator

function paraGenerator() {

    let textMessage = document.getElementById("paraInput").value;
    let paraArea = document.getElementById("paraArea");

    let heading = document.createElement("p");
    let message = document.createTextNode(textMessage);

    heading.appendChild(message);
    paraArea.appendChild(heading);

}

// ### 3. List Banana (UL / OL)

function addListItem() {

    let item = document.getElementById("listInput").value;
    let listArea = document.getElementById("listArea");

    let listIteam = document.createElement("li");
    let listContent = document.createTextNode(item);

    listIteam.appendChild(listContent);
    listArea.appendChild(listIteam);

}

// ### 4. Profile Card 

function createProfile() {

    let profileArea = document.getElementById("profileArea");
    let nameInput = document.getElementById("nameInput").value;
    let descInput = document.getElementById("descInput").value;

    let card = document.createElement("div");
    card.className = "box";

    let name = document.createElement("h2");
    let nameContent = document.createTextNode(nameInput);
    name.appendChild(nameContent);

    let desc = document.createElement("p");
    let descContent = document.createTextNode(descInput);
    desc.appendChild(descContent);

    card.appendChild(name);
    card.appendChild(desc);
    profileArea.appendChild(card);

}

// ### 5. Notification Message 

function showSuccess() {

    let notifyArea = document.getElementById("notifyArea");

    let div = document.createElement("div");
    div.className = "success";

    let text = document.createTextNode("Success! Your action was completed.");
    div.appendChild(text);
    notifyArea.appendChild(div);
}

function showWarning() {

    let notifyArea = document.getElementById("notifyArea");

    let div = document.createElement("div");
    div.className = "warning";

    let text = document.createTextNode("Warning! Something went wrong.");
    div.appendChild(text);
    notifyArea.appendChild(div);
}

// ### 6. Footer Text Add Karna 

let Containerfooter = document.getElementById("Containerfooter");
let footer = document.createElement("footer");
let text = document.createTextNode("Made with ❤️ By Sarfraj Shaikh!");

footer.appendChild(text);
Containerfooter.appendChild(footer);

// ### 7. Button Create Karna 

function createButton() {

    let buttonArea = document.getElementById("buttonArea");
    let btn = document.createElement("button");
    let txt = document.createTextNode("This button is dynamically created with js");

    btn.appendChild(txt);
    buttonArea.appendChild(btn);
}
