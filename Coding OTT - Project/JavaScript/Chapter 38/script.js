// Task: 1

let imaged = document.getElementById("imaged");
imaged.addEventListener("change", uploadFile);

function uploadFile() {

    let uploadText = document.getElementById("uploadText");
    uploadText.textContent = "Uploading...";

    let imaged = document.getElementById("imaged");
    let fileNameText = document.getElementById("fileName");
    let uploadBox = document.getElementById("uploadBox");
    let img = document.getElementById("img");
    let uploadAnotherBtn = document.getElementById("uploadAnotherBtn");

    let reader = new FileReader();

    reader.onload = function () {

        uploadText.textContent = "Uploaded";
        fileNameText.textContent = imaged.files[0].name;
        img.src = reader.result;

        uploadBox.style.display = "none";
        img.style.display = "block";
        fileNameText.style.display = "block";
        uploadAnotherBtn.style.display = "block";

    }

    setTimeout(function () {

        reader.readAsDataURL(imaged.files[0]);

    }, 1000);

    uploadAnotherBtn.addEventListener("click", function () {

        imaged.value = "";
        img.src = "";

        uploadBox.style.display = "block";
        img.style.display = "none";
        fileNameText.style.display = "none";
        uploadAnotherBtn.style.display = "none";

        uploadText.textContent = "Upload Your Another Image";

    });

}