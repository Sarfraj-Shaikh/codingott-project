// Task:

if (document.cookie.length === 0) {

    let theme = null;

} else {

    let cookie = document.cookie.split("=");
    theme = cookie[1];
    checkTheme();

}

let themeToggleBtn = document.getElementById("themeToggleBtn");
themeToggleBtn.addEventListener("click", themeChanger);

function themeChanger() {

    if (theme === null) {

        document.cookie = "theme = Dark; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";
        let cookie = document.cookie.split("=");
        theme = cookie[1];
        checkTheme();

    }
    else if (theme === "Dark") {

        document.cookie = "theme = Light; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";
        let cookie = document.cookie.split("=");
        theme = cookie[1];
        checkTheme();

    }
    else {

        document.cookie = "theme = Dark; expires = Sun, 31 Dec 2119 12:00:00 UTC; path = /";
        let cookie = document.cookie.split("=");
        theme = cookie[1];
        checkTheme();

    }

};

function checkTheme() {

    let body = document.getElementById("body");

    if (theme === "Dark") {

        body.className = "dark";

    } else {

        body.className = "";

    };

};