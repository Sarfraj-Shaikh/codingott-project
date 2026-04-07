// Task:

function checkcookie() {

    let numResultBg = document.getElementById("numResultBg");
    let numResult = document.getElementById("numResult");
    let popupOverlay = document.getElementById("popupOverlay");

    if (document.cookie.length !== 0) {

        numResultBg.style.display = "block";
        popupOverlay.style.display = "none";

        let cookie = document.cookie.split("=");
        numResult.textContent = cookie[1];

    };

};

let submitMobileBtn = document.getElementById("submitMobileBtn");
submitMobileBtn.addEventListener("click", valForm);

function valForm() {

    let mobileInput = document.getElementById("mobileInput");
    let mobile = document.getElementById("mobileInput").value;

    if (mobile.trim() === "") {

        mobileInput.style.border = "2px solid red";

    }

    else if (mobileInput.value.length !== 10) {

        mobileInput.style.border = "2px solid red";

    }

    else {

        mobileInput.style.border = "1px solid rgba(255, 255, 255, 0.18)";
        storeNum(mobile);
        checkcookie();

    };

};

function storeNum(num) {

    document.cookie = "Mobile =" + num + "; expires = Mon, 31 Dec 2119 12:00:00 UTC; path = /";

};

checkcookie();