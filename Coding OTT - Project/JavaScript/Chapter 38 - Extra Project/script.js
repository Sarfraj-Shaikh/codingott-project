let fileInput = document.getElementById("fileInput");
let previewGrid = document.getElementById("previewGrid");
let dropZone = document.getElementById("dropZone");
let emptyState = document.getElementById("emptyState");

function formatSize(bytes) {

    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    
}

function checkEmptyState() {

    if (previewGrid.querySelectorAll(".preview-item").length === 0) {

        emptyState.style.display = "block";

    } else {

        emptyState.style.display = "none";

    }
}

fileInput.addEventListener("change", function () {
    uploadImageFile(this.files);
});

function uploadImageFile(files) {

    if (!files || files.length === 0) {
        checkEmptyState();
        return;
    }

    emptyState.style.display = "none";

    for (let i = 0; i < files.length; i++) {

        let file = files[i];
        let readFile = new FileReader();

        readFile.onload = function () {

            const wrapper = document.createElement("div");
            wrapper.className = "preview-item";

            const removeBtn = document.createElement("button");
            removeBtn.className = "remove-btn";
            removeBtn.textContent = "Remove";

            let media = document.createElement("img");
            media.src = readFile.result;
            media.alt = file.name;

            const info = document.createElement("div");
            info.className = "preview-info";

            const nameEl = document.createElement("div");
            nameEl.className = "file-name";
            nameEl.textContent = file.name;

            const metaEl = document.createElement("div");
            metaEl.className = "file-meta";
            metaEl.textContent = `${file.type} • ${formatSize(file.size)}`;

            info.appendChild(nameEl);
            info.appendChild(metaEl);

            wrapper.appendChild(removeBtn);
            wrapper.appendChild(media);
            wrapper.appendChild(info);

            previewGrid.appendChild(wrapper);

            removeBtn.addEventListener("click", function () {

                wrapper.remove();
                checkEmptyState();

            });

            checkEmptyState();
        };

        readFile.readAsDataURL(file);
    }
}

dropZone.addEventListener("dragover", function (e) {

    e.preventDefault();

});

dropZone.addEventListener("drop", function (e) {

    e.preventDefault();
    uploadImageFile(e.dataTransfer.files);

});