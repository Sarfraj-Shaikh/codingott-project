// Task:

function checkCookie() {

    let cookieError = document.getElementById("cookieError");
    let welcomeBox = document.getElementById("welcomeBox");
    let confirmRemindBtn = document.getElementById("confirmRemindBtn");
    let remindBox = document.getElementById("remindBox");
    let actionRow = document.getElementById("action-row");
    let dontShowBtn = document.getElementById("dontShowBtn");
    let remindBtn = document.getElementById("remindBtn");
    let imageBox = document.getElementById("imageBox");
    let welcomeText = document.getElementById("welcome-text");

    if (navigator.cookieEnabled) {

        if (document.cookie.length === 0) {

            imageBox.style.display = "block";
            cookieError.style.display = "none";

        } else {

            welcomeBox.style.display = "block";
            imageBox.style.display = "none";

            let allCookie = document.cookie.split("; ");
            for (let i = 0; i < allCookie.length; i++) {

                let cookie = allCookie[i].split("=");

                if (cookie[i] === "remindLater") {

                    welcomeText.innerHTML = "Your preferences have been saved." + "&nbsp;" + "We remind you again after " + cookie[1] + "<br>" + "Enjoy your experience.";

                }
                else if (cookie[i] === "remindAgain") {

                    welcomeText.innerHTML = "Your preferences have been saved." + "&nbsp;" + "We " + cookie[1] + " remind you again. " +  "<br>" + "Enjoy your experience.";

                }
            };

        };

        dontShowBtn.addEventListener("click", function () {

            let confirmChoice = confirm("Are You Want To Sure?");
            if (confirmChoice) {

                hideForever();

            };

        });

        remindBtn.addEventListener("click", function () {

            actionRow.style.display = "none";
            confirmRemindBtn.style.display = "none";
            remindBox.style.display = "block";


        });

    } else {

        imageBox.style.display = "none";
        cookieError.style.display = "block";

    };

};

checkCookie();

function hideForever() {

    document.cookie = "remindAgain = Never; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";
    checkCookie();

};

function remindLater(day, dayName) {

    let confirmRemindBtn = document.getElementById("confirmRemindBtn");

    let expires = "";

    function dayCalculate() {

        let date = new Date();
        date.setTime(date.getTime() + (day * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();

        confirmRemindBtn.style.display = "block";

    };

    dayCalculate();

    confirmRemindBtn.addEventListener("click", function () {

        document.cookie = "remindLater =" + dayName + expires + "path = /";
        checkCookie();

    });

};