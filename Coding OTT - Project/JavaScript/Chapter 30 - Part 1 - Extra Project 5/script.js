// ### Task: Like / Unlike Button

function likeUnlike() {

    let heart = document.getElementById("heart");
    let msg = document.getElementById("msg");
    let btn = document.getElementById("btn");

    if (btn.innerHTML === "Like") {

        heart.innerHTML = "❤️";
        msg.innerHTML = "Thanks For Your Like, Made By Sarfraj Shaikh!";
        btn.innerHTML = "Unlike";

    } else {

        heart.innerHTML = "🤍";
        msg.innerHTML = "";
        btn.innerHTML = "Like";

    }
}




