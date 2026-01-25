// ## Task: 1

function img() {
    let image = document.getElementById("imgs").value.replace(/.*(\/|\\)/, '');
    let imgResult = document.getElementById("img-res");
    imgResult.innerHTML = `<b>Image File Name:</b> ${image}`;
}

function video() {
    let vid = document.getElementById("vid").value.replace(/.*(\/|\\)/, '');
    let videoResult = document.getElementById("vid-res");
    videoResult.innerHTML = `<b>Video File Name:</b> ${vid}`;
}

function anyFile() {
    let file = document.getElementById("files").value.replace(/.*(\/|\\)/, '');
    let fileResult = document.getElementById("files-res");
    fileResult.innerHTML = `<b>File Name:</b> ${file}`;
}

// ## Task: 2

function imgPreview() {
    let image = document.getElementById("img-pre");
    let file = document.getElementById("my-img").value.replace(/.*(\/|\\)/, '');
    image.src = file;
    image.alt = file;
}

