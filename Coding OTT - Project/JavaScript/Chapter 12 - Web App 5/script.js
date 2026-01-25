// ## Task

let video = document.getElementById("vid");

function uploadVid() {
    let file = document.getElementById("my-vid").value.replace(/.*(\/|\\)/, '');
    video.src = file;
}

function play() {
    video.play();
}

function stop() {
    video.pause();
}