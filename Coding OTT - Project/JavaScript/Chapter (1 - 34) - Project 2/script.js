// Task: 1

function calculateMark() {

    let math = Number(document.getElementById("math").value);
    let english = Number(document.getElementById("english").value);
    let science = Number(document.getElementById("science").value);
    let computer = Number(document.getElementById("computer").value);

    let hint1 = document.getElementById("hint1");
    let hint2 = document.getElementById("hint2");
    let hint3 = document.getElementById("hint3");
    let hint4 = document.getElementById("hint4");

    if (math == "") {

        hint1.innerHTML = "Enter Your Math Marks";
        hint1.style.color = "red";

    } else if (math > 100) {

        hint1.innerHTML = "Invalid Marks";
        hint1.style.color = "red";

    } else {

        hint1.innerHTML = "Enter marks between 0 and 100";
        hint1.style.color = "#eaf0ff80";

        if (english == "") {

            hint2.innerHTML = "Enter Your English Marks";
            hint2.style.color = "red";

        } else if (english > 100) {

            hint2.innerHTML = "Invalid Marks";
            hint2.style.color = "red";

        } else {

            hint2.innerHTML = "Enter marks between 0 and 100";
            hint2.style.color = "#eaf0ff80";

            if (science == "") {

                hint3.innerHTML = "Enter Your Science Marks";
                hint3.style.color = "red";

            } else if (science > 100) {

                hint3.innerHTML = "Invalid Marks";
                hint3.style.color = "red";

            } else {

                hint3.innerHTML = "Enter marks between 0 and 100";
                hint3.style.color = "#eaf0ff80";

                if (computer == "") {

                    hint4.innerHTML = "Enter Your Math Marks";
                    hint4.style.color = "red";

                } else if (computer > 100) {

                    hint4.innerHTML = "Invalid Marks";
                    hint4.style.color = "red";

                } else {

                    hint4.innerHTML = "Enter marks between 0 and 100";
                    hint4.style.color = "#eaf0ff80";

                    let totalMarks = math + english + science + computer;
                    result(totalMarks, math, english, science, computer)

                }
            }

        }

    }

    return false;

}

function result(tMarks, m, e, s, c) {

    let totalMarks = document.getElementById("totalMarks");
    let percentage = document.getElementById("percentage");
    let grade = document.getElementById("grade");
    let status = document.getElementById("status");

    let mathOut = document.getElementById("mathOut");
    let englishOut = document.getElementById("englishOut");
    let scienceOut = document.getElementById("scienceOut");
    let computerOut = document.getElementById("computerOut");

    totalMarks.innerHTML = tMarks;
    let per = percentage.innerHTML = ((tMarks / 400) * 100);
    per.toFixed(2)

    if (per >= 90) {

        grade.innerHTML = "A";
        grade.style.color = "green";

    }
    else if (per >= 75) {

        grade.innerHTML = "B";
        grade.style.color = "green";

    }
    else if (per >= 60) {

        grade.innerHTML = "C";
        grade.style.color = "blue";

    }
    else if (per >= 40) {

        grade.innerHTML = "D";
        grade.style.color = "yellow";

    }
    else {

        grade.innerHTML = "E";
        grade.style.color = "red";

    }

    if (m < 33 || e < 33 || s < 33 || c < 33) {

        status.innerHTML = "Fail";
        status.style.color = "red";

    } else {

        status.innerHTML = "Pass";
        status.style.color = "#59ff00";

    }

    if (m < 33) {

        mathOut.innerHTML = "Fail";
        mathOut.style.color = "red";

    } else {

        mathOut.innerHTML = m + "/100";
        mathOut.style.color = "#FFFFFF";
    }

    if (e < 33) {

        englishOut.innerHTML = "Fail";
        englishOut.style.color = "red";

    } else {

        englishOut.innerHTML = e + "/100";
        englishOut.style.color = "#FFFFFF";
    }

    if (s < 33) {

        scienceOut.innerHTML = "Fail";
        scienceOut.style.color = "red";

    } else {

        scienceOut.innerHTML = s + "/100";
        scienceOut.style.color = "#FFFFFF";
    }

    if (c < 33) {

        computerOut.innerHTML = "Fail";
        computerOut.style.color = "red";

    } else {

        computerOut.innerHTML = c + "/100";
        computerOut.style.color = "#FFFFFF";
    }

    return false;

}

function resetMark() {

    let math = document.getElementById("math");
    let english = document.getElementById("english");
    let science = document.getElementById("science");
    let computer = document.getElementById("computer");

    let hint1 = document.getElementById("hint1");
    let hint2 = document.getElementById("hint2");
    let hint3 = document.getElementById("hint3");
    let hint4 = document.getElementById("hint4");

    let totalMarks = document.getElementById("totalMarks");
    let percentage = document.getElementById("percentage");
    let grade = document.getElementById("grade");
    let status = document.getElementById("status");

    let mathOut = document.getElementById("mathOut");
    let englishOut = document.getElementById("englishOut");
    let scienceOut = document.getElementById("scienceOut");
    let computerOut = document.getElementById("computerOut");

    math.value = "";
    english.value = "";
    science.value = "";
    computer.value = "";

    hint1.innerHTML = "Enter marks between 0 and 100";
    hint2.innerHTML = "Enter marks between 0 and 100";
    hint3.innerHTML = "Enter marks between 0 and 100";
    hint4.innerHTML = "Enter marks between 0 and 100";

    totalMarks.innerHTML = "--";
    percentage.innerHTML = "--";
    status.innerHTML = "--";

    mathOut.innerHTML = "--";
    englishOut.innerHTML = "--";
    scienceOut.innerHTML = "--";
    computerOut.innerHTML = "--";

    return false;

}