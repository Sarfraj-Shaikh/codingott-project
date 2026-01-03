// Please write a program in which clicking a button applies a glowing effect to the text.
function glowEff() {
    document.getElementById("name").style.textShadow = "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 52px #0fa, 0 0 62px #0fa, 0 0 72px #0fa, 0 0 81px #0fa";
}

function changeGlow() {
    var text = document.getElementById("name");
    text.style.textShadow = "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0084ffff, 0 0 52px #0084ffff, 0 0 62px #0084ffff, 0 0 72px #0084ffff, 0 0 81px #0084ffff";
}