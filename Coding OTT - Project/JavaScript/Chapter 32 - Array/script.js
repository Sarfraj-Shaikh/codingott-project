// Task 1: Shopping List Manager

let t1Before = document.getElementById("t1Before");
let t1Method = document.getElementById("t1Method");
let t1After = document.getElementById("t1After");
let t1Final = document.getElementById("t1Final");

let shoppingList = ["Milk", "Bread", "Sugar"];
t1Before.innerHTML = "[ " + shoppingList + " ]";

function addRice() {

    t1Method.innerHTML = 'push("Rice")';
    shoppingList.push("Rice");
    t1After.innerHTML = "[ " + shoppingList + " ]";

    t1Final.innerHTML = shoppingList;

}

function usePop() {

    t1Method.innerHTML = 'pop()';
    shoppingList.pop();
    t1After.innerHTML = "[ " + shoppingList + " ]";

    t1Final.innerHTML = shoppingList;

}


function addTea() {

    t1Method.innerHTML = 'unshift()';
    shoppingList.unshift("Tea 🍵",);
    t1After.innerHTML = "[ " + shoppingList + " ]";

    t1Final.innerHTML = shoppingList;

}

function useShift() {

    t1Method.innerHTML = 'shift()';
    shoppingList.shift();
    t1After.innerHTML = "[ " + shoppingList + " ]";

    t1Final.innerHTML = shoppingList;

}

function useSplice() {

    t1Method.innerHTML = 'splice(1, 1)';
    shoppingList.splice(1, 1);
    t1After.innerHTML = "[ " + shoppingList + " ]";

    t1Final.innerHTML = shoppingList;

}

function useJoin() {

    t1Method.innerHTML = 'join(" | ")';
    let joined = shoppingList.join(" | ");
    t1After.innerHTML = "[ " + joined + " ]";

    t1Final.innerHTML = joined;

}

// Task 2: Class Attendance List

let t2Before = document.getElementById("t2Before");
let t2Method = document.getElementById("t2Method");
let t2After = document.getElementById("t2After");
let t2Final = document.getElementById("t2Final");

let attendanceList = ["Rahul", "Aman", "Neha", "Riya"];
t2Before.innerHTML = "[ " + attendanceList + " ]";

function addSahil() {

    t2Method.innerHTML = 'push("Sahil")';
    attendanceList.push("Sahil");
    t2After.innerHTML = "[ " + attendanceList + " ]";

    t2Final.innerHTML = attendanceList;

}

function addPrincipal() {

    t2Method.innerHTML = 'unshift("Principal")';
    attendanceList.unshift("Principal");
    t2After.innerHTML = "[ " + attendanceList + " ]";

    t2Final.innerHTML = attendanceList;

}

function deleteT2FirstItem() {

    t2Method.innerHTML = 'shift()';
    attendanceList.shift();
    t2After.innerHTML = "[ " + attendanceList + " ]";

    t2Final.innerHTML = attendanceList;

}

function deleteT2LastItem() {

    t2Method.innerHTML = 'pop()';
    attendanceList.pop();
    t2After.innerHTML = "[ " + attendanceList + " ]";

    t2Final.innerHTML = attendanceList;

}

function deleteT2Item() {

    t2Method.innerHTML = 'splice(1, 1)';
    attendanceList.splice(1, 1);
    t2After.innerHTML = "[ " + attendanceList + " ]";

    t2Final.innerHTML = attendanceList;

}

function addT2Space() {

    t2Method.innerHTML = 'splice(1, 1)';
    let joined = attendanceList.join(", ");
    t2After.innerHTML = "[ " + joined + " ]";

    t2Final.innerHTML = joined;

}

// Task 3: Train Coach Game

let t3Before = document.getElementById("t3Before");
let t3Method = document.getElementById("t3Method");
let t3After = document.getElementById("t3After");
let t3Final = document.getElementById("t3Final");

let trainCoachList = ["A1", "B1", "C1", "D1"];
t3Before.innerHTML = "[ " + trainCoachList + " ]";

function addE1() {

    t3Method.innerHTML = 'push("E1")';
    trainCoachList.push("E1");
    t3After.innerHTML = "[ " + trainCoachList + " ]";

    t3Final.innerHTML = trainCoachList;

}

function addVip() {

    t3Method.innerHTML = 'unshift("VIP")';
    trainCoachList.unshift("VIP");
    t3After.innerHTML = "[ " + trainCoachList + " ]";

    t3Final.innerHTML = trainCoachList;

}

function deleteT3LastItem() {

    t3Method.innerHTML = 'pop()';
    trainCoachList.pop();
    t3After.innerHTML = "[ " + trainCoachList + " ]";

    t3Final.innerHTML = trainCoachList;

}

function deleteT3FirstItem() {

    t3Method.innerHTML = 'shift()';
    trainCoachList.shift();
    t3After.innerHTML = "[ " + trainCoachList + " ]";

    t3Final.innerHTML = trainCoachList;

}

function spliceT3Item() {

    t3Method.innerHTML = 'splice(1,1)';
    trainCoachList.splice(1, 1);
    t3After.innerHTML = "[ " + trainCoachList + " ]";

    t3Final.innerHTML = trainCoachList;

}

function joinT3Item() {

    t3Method.innerHTML = 'join(" - ")';
    let joined = trainCoachList.join(" - ");
    t3After.innerHTML = "[ " + joined + " ]";

    t3Final.innerHTML = joined;

}

// Task 4: Contact List Manager

let t4Before = document.getElementById("t4Before");
let t4Method = document.getElementById("t4Method");
let t4After = document.getElementById("t4After");
let t4Final = document.getElementById("t4Final");

let contactList = ["Aman", "Rahul", "Neha", "Riya"];
t4Before.innerHTML = "[ " + contactList + " ]";

function addT4Sahil() {

    t4Method.innerHTML = 'push("Sahil")';
    contactList.push("Sahil");
    t4After.innerHTML = "[ " + contactList + " ]";

    t4Final.innerHTML = contactList;

}

function addT4Emergency() {

    t4Method.innerHTML = 'unshift("Emergency")';
    contactList.unshift("Emergency");
    t4After.innerHTML = "[ " + contactList + " ]";

    t4Final.innerHTML = contactList;

}

function sortT4Item() {

    t4Method.innerHTML = 'sort()';
    contactList.sort();
    t4After.innerHTML = "[ " + contactList + " ]";

    t4Final.innerHTML = contactList;

}

function slicetT4Item() {

    let t4Top3 = document.getElementById("t4Top3");

    t4Method.innerHTML = 'slice(0, 3)';
    let updated = contactList.slice(0, 3);
    t4After.innerHTML = "[ " + updated + " ]";

    t4Final.innerHTML = updated;
    t4Top3.innerHTML = updated;

}

let newContactList = ["Zoya", "Karan"];

function concatT4Item() {

    t4Method.innerHTML = 'concat(newContactList)';
    let updated = contactList.concat(newContactList);
    t4After.innerHTML = "[ " + updated + " ]";

    t4Final.innerHTML = updated;

}

function joinT4Item() {

    t4Method.innerHTML = 'join(" , ")';
    let updated = contactList.join(" , ");
    t4After.innerHTML = "[ " + updated + " ]";

    t4Final.innerHTML = updated;

}

// Task 5: Number Lab (Sorting + Slicing)

let t5Before = document.getElementById("t5Before");
let t5Method = document.getElementById("t5Method");
let t5After = document.getElementById("t5After");
let t5Final = document.getElementById("t5Final");

let numList = [45, 12, 78, 10, 5, 99, 23];
t5Before.innerHTML = "[ " + numList + " ]";

function sortT5Item() {

    t5Method.innerHTML = 'sort(function(a, b){return (a-b)})';
    numList.sort(function (a, b) { return (a - b) });
    t5After.innerHTML = "[ " + numList + " ]";

    t5Final.innerHTML = numList;

}

function revT5Item() {

    t5Method.innerHTML = 'sort(function(a, b){return (a-b)}).reverse()';
    numList.sort(function (a, b) { return (a - b) }).reverse();
    t5After.innerHTML = "[ " + numList + " ]";

    t5Final.innerHTML = numList;

}

function topSliceT5Item() {

    let t5Top3 = document.getElementById("t5Top3");

    t5Method.innerHTML = 'slice(0, 3)';
    let updated = numList.slice(0, 3);
    t5After.innerHTML = "[ " + updated + " ]";

    t5Final.innerHTML = updated;
    t5Top3.innerHTML = updated;

}

function lowSliceT5Item() {

    let t5Low3 = document.getElementById("t5Low3");

    t5Method.innerHTML = 'slice(-3)';
    let updated = numList.slice(-3);
    t5After.innerHTML = "[ " + updated + " ]";

    t5Final.innerHTML = updated;
    t5Low3.innerHTML = updated;

}

let newNumList = [100, 200, 300];

function newT5Item() {

    t5Method.innerHTML = 'concat(newNumList)';
    let updated = numList.concat(newNumList);
    t5After.innerHTML = "[ " + updated + " ]";

    t5Final.innerHTML = updated;

}

function joinT5Item() {

    t5Method.innerHTML = 'concat(newNumList)';
    let updated = numList.join(" | ");
    t5After.innerHTML = "[ " + updated + " ]";

    t5Final.innerHTML = updated;

}

// Extra Challenge

let exBefore = document.getElementById("exBefore");
let exMethod = document.getElementById("exMethod");
let exAfter = document.getElementById("exAfter");
let exFinal = document.getElementById("exFinal");

let alphabetList = ["A", "B", "C", "D", "E"];
exBefore.innerHTML = "[ " + alphabetList + " ]";

function removeExItem() {

    exMethod.innerHTML = 'splice(2, 1)';
    alphabetList.splice(2, 1);
    exAfter.innerHTML = "[ " + alphabetList + " ]";

    exFinal.innerHTML = alphabetList;

}

function addExItem() {

    exMethod.innerHTML = 'splice(2, 1, "X")';
    alphabetList.splice(2, 1, "X");
    exAfter.innerHTML = "[ " + alphabetList + " ]";

    exFinal.innerHTML = alphabetList;

}
function sliceExItem() {

    let exSliceResult = document.getElementById("exSliceResult");

    exMethod.innerHTML = 'slice(1, 4)';
    let updated = alphabetList.slice(1, 4);
    exAfter.innerHTML = "[ " + updated + " ]";

    exFinal.innerHTML = updated;
    exSliceResult.innerHTML = updated;

}

function joinExItem() {

    exMethod.innerHTML = 'join(" - ")';
    let updated = alphabetList.join(" - ");
    exAfter.innerHTML = "[ " + updated + " ]";

    exFinal.innerHTML = updated;

}