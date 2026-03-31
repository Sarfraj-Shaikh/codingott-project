// Task: 

let nums = [];

function addNumOne() {

    let currentBtn = document.getElementById("btn1");
    let upcomingBtn = document.getElementById("btn2");
    let input = document.getElementById("text1");
    let arrayNums = document.getElementById("arrayNums");
    let inputNum = Number(document.getElementById("text1").value);

    if (inputNum == "") {

        input.style.border = "2px solid red";

    } else {

        input.style.border = "none";
        currentBtn.style.display = "none";
        upcomingBtn.style.display = "block";

        nums.push(inputNum);
        arrayNums.innerHTML = nums;

    }
}

function addNumTwo() {

    let currentBtn = document.getElementById("btn2");
    let upcomingBtn = document.getElementById("btn3");
    let input = document.getElementById("text2");
    let arrayNums = document.getElementById("arrayNums");
    let inputNum = Number(document.getElementById("text2").value);

    if (inputNum == "") {

        input.style.border = "2px solid red";

    } else {

        input.style.border = "none";
        currentBtn.style.display = "none";
        upcomingBtn.style.display = "block";

        nums.push(inputNum);
        arrayNums.innerHTML = nums;

    }
}

function addNumThree() {

    let currentBtn = document.getElementById("btn3");
    let upcomingBtn = document.getElementById("btn4");
    let input = document.getElementById("text3");
    let arrayNums = document.getElementById("arrayNums");
    let inputNum = Number(document.getElementById("text3").value);

    if (inputNum == "") {

        input.style.border = "2px solid red";

    } else {

        input.style.border = "none";
        currentBtn.style.display = "none";
        upcomingBtn.style.display = "block";

        nums.push(inputNum);
        arrayNums.innerHTML = nums;

    }
}

function addNumFour() {

    let currentBtn = document.getElementById("btn4");
    let upcomingBtn = document.getElementById("btn5");
    let input = document.getElementById("text4");
    let arrayNums = document.getElementById("arrayNums");
    let inputNum = Number(document.getElementById("text4").value);

    if (inputNum == "") {

        input.style.border = "2px solid red";

    } else {

        input.style.border = "none";
        currentBtn.style.display = "none";
        upcomingBtn.style.display = "block";

        nums.push(inputNum);
        arrayNums.innerHTML = nums;

    }
}

function addNumFive() {

    let currentBtn = document.getElementById("btn5");
    let upcomingBtn = document.getElementById("btn6");
    let input = document.getElementById("text5");
    let arrayNums = document.getElementById("arrayNums");
    let inputNum = Number(document.getElementById("text5").value);

    if (inputNum == "") {

        input.style.border = "2px solid red";

    } else {

        input.style.border = "none";
        currentBtn.style.display = "none";
        upcomingBtn.style.display = "block";

        nums.push(inputNum);
        arrayNums.innerHTML = nums;

    }
}

function addNumSix() {

    let currentBtn = document.getElementById("btn6");
    let upcomingBtn = document.getElementById("btn7");
    let input = document.getElementById("text6");
    let arrayNums = document.getElementById("arrayNums");
    let inputNum = Number(document.getElementById("text6").value);

    if (inputNum == "") {

        input.style.border = "2px solid red";

    } else {

        input.style.border = "none";
        currentBtn.style.display = "none";
        upcomingBtn.style.display = "block";

        nums.push(inputNum);
        arrayNums.innerHTML = nums;

    }
}

function addNumSeven() {

    let currentBtn = document.getElementById("btn7");
    let upcomingBtn = document.getElementById("btn8");
    let input = document.getElementById("text7");
    let arrayNums = document.getElementById("arrayNums");
    let inputNum = Number(document.getElementById("text7").value);

    if (inputNum == "") {

        input.style.border = "2px solid red";

    } else {

        input.style.border = "none";
        currentBtn.style.display = "none";
        upcomingBtn.style.display = "block";

        nums.push(inputNum);
        arrayNums.innerHTML = nums;

    }
}

function addNumEight() {

    let currentBtn = document.getElementById("btn8");
    let upcomingBtn = document.getElementById("btn9");
    let input = document.getElementById("text8");
    let arrayNums = document.getElementById("arrayNums");
    let inputNum = Number(document.getElementById("text8").value);

    if (inputNum == "") {

        input.style.border = "2px solid red";

    } else {

        input.style.border = "none";
        currentBtn.style.display = "none";
        upcomingBtn.style.display = "block";

        nums.push(inputNum);
        arrayNums.innerHTML = nums;

    }
}

function addNumNine() {

    let currentBtn = document.getElementById("btn9");
    let upcomingBtn = document.getElementById("btn10");
    let input = document.getElementById("text9");
    let arrayNums = document.getElementById("arrayNums");
    let inputNum = Number(document.getElementById("text9").value);

    if (inputNum == "") {

        input.style.border = "2px solid red";

    } else {

        input.style.border = "none";
        currentBtn.style.display = "none";
        upcomingBtn.style.display = "block";

        nums.push(inputNum);
        arrayNums.innerHTML = nums;

    }
}

function addNumTen() {

    let currentBtn = document.getElementById("btn10");
    let input = document.getElementById("text10");
    let inputNum = Number(document.getElementById("text10").value);
    
    let arrayNums = document.getElementById("arrayNums");
    let ascendingResult = document.getElementById("ascendingResult");
    let descendingResult = document.getElementById("descendingResult");

    if (inputNum == "") {

        input.style.border = "2px solid red";

    } else {

        input.style.border = "none";
        currentBtn.style.display = "none";

        nums.push(inputNum);
        arrayNums.innerHTML = nums;

        ascendingResult.innerHTML = nums.sort(function(a, b){return (a - b);});
        descendingResult.innerHTML = nums.sort(function(a, b){return (a - b);}).reverse();

    }
}

