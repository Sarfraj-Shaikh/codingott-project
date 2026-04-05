// Task: 1

let videoInput = document.getElementById("videoInput");
videoInput.addEventListener("change", uploadFile);

function uploadFile() {

    let uploadText = document.getElementById("uploadText");
    uploadText.textContent = "Uploading...";

    let videoInput = document.getElementById("videoInput");
    let fileNameText = document.getElementById("fileName");
    let uploadBox = document.getElementById("uploadBox");
    let videoPlayer = document.getElementById("videoPlayer");
    let uploadAnotherBtn = document.getElementById("uploadAnotherBtn");

    let reader = new FileReader();

    reader.onload = function () {

        videoPlayer.src = reader.result;
        uploadText.textContent = "Upload Complete";
        fileNameText.textContent = "File Name: " + videoInput.files[0].name;

        uploadBox.style.display = "none";
        videoPlayer.style.display = "block";
        fileNameText.style.display = "block";
        uploadAnotherBtn.style.display = "block";

    }

    setTimeout(function () {

        reader.readAsDataURL(videoInput.files[0]);

    }, 3000);

    uploadAnotherBtn.addEventListener("click", function () {

        videoInput.value = "";
        videoPlayer.src = "";

        uploadBox.style.display = "block";
        videoPlayer.style.display = "none";
        fileNameText.style.display = "none";
        uploadAnotherBtn.style.display = "none";

        uploadText.textContent = "Upload Your Another File";

    });

}