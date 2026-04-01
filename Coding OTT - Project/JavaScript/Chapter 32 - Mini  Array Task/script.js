// Task 1: Grocery / Inventory Manager

// STEP 1

let groceryList = ["Milk", "Bread", "Sugar"];

let p1Before1 = document.getElementById("p1Before1");
let p1Method1 = document.getElementById("p1Method1");
let p1After1 = document.getElementById("p1After1");

p1Before1.innerHTML = groceryList;
p1Method1.innerHTML = "push()";
groceryList.push("Rice");
p1After1.innerHTML = groceryList;

// STEP 2

let p1Before2 = document.getElementById("p1Before2");
let p1Method2 = document.getElementById("p1Method2");
let p1After2 = document.getElementById("p1After2");

p1Before2.innerHTML = groceryList;
p1Method2.innerHTML = "pop()";
groceryList.pop();
p1After2.innerHTML = groceryList;

// STEP 3

let p1Before3 = document.getElementById("p1Before3");
let p1Method3 = document.getElementById("p1Method3");
let p1After3 = document.getElementById("p1After3");

p1Before3.innerHTML = groceryList;
p1Method3.innerHTML = "unshift()";
groceryList.unshift("Tea");
p1After3.innerHTML = groceryList;

// STEP 4

let p1Before4 = document.getElementById("p1Before4");
let p1Method4 = document.getElementById("p1Method4");
let p1After4 = document.getElementById("p1After4");

p1Before4.innerHTML = groceryList;
p1Method4.innerHTML = "shift()";
groceryList.shift();
p1After4.innerHTML = groceryList;

// STEP 5

let p1Before5 = document.getElementById("p1Before5");
let p1Method5 = document.getElementById("p1Method5");
let p1After5 = document.getElementById("p1After5");

p1Before5.innerHTML = groceryList;
p1Method5.innerHTML = "splice()";
groceryList.splice(1, 1);
p1After5.innerHTML = groceryList;

// STEP 6

let newGroceryList = ["Oil", "Salt"];

let p1Before6 = document.getElementById("p1Before6");
let p1Method6 = document.getElementById("p1Method6");
let p1After6 = document.getElementById("p1After6");

p1Before6.innerHTML = newGroceryList;
p1Method6.innerHTML = "Created New Array";
p1After6.innerHTML = newGroceryList;

// STEP 7

let p1Before7 = document.getElementById("p1Before7");
let p1Method7 = document.getElementById("p1Method7");
let p1After7 = document.getElementById("p1After7");

p1Before7.innerHTML = groceryList;
p1Method7.innerHTML = "concat()";
let updated = groceryList.concat(newGroceryList);
p1After7.innerHTML = updated;

// STEP 8

let p1Before8 = document.getElementById("p1Before8");
let p1Method8 = document.getElementById("p1Method8");
let p1After8 = document.getElementById("p1After8");

p1Before8.innerHTML = updated;
p1Method8.innerHTML = "join()";
let joined = updated.join(" | ");
p1After8.innerHTML = joined;

// Task 2: Student Attendance Dashboard

// STEP 1

let studentList = ["Rahul", "Aman", "Neha", "Riya"];

let p2Before1 = document.getElementById("p2Before1");
let p2Method1 = document.getElementById("p2Method1");
let p2After1 = document.getElementById("p2After1");

p2Before1.innerHTML = studentList;
p2Method1.innerHTML = "push()";
studentList.push("Sahil");
p2After1.innerHTML = studentList;

// STEP 2

let p2Before2 = document.getElementById("p2Before2");
let p2Method2 = document.getElementById("p2Method2");
let p2After2 = document.getElementById("p2After2");

p2Before2.innerHTML = studentList;
p2Method2.innerHTML = "unshift()";
studentList.unshift("Principal");
p2After2.innerHTML = studentList;

// STEP 3

let p2Before3 = document.getElementById("p2Before3");
let p2Method3 = document.getElementById("p2Method3");
let p2After3 = document.getElementById("p2After3");

p2Before3.innerHTML = studentList;
p2Method3.innerHTML = "shift()";
studentList.shift();
p2After3.innerHTML = studentList;

// STEP 4

let p2Before4 = document.getElementById("p2Before4");
let p2Method4 = document.getElementById("p2Method4");
let p2After4 = document.getElementById("p2After4");

p2Before4.innerHTML = studentList;
p2Method4.innerHTML = "shift()";
studentList.shift();
p2After4.innerHTML = studentList;

// STEP 5

let p2Before5 = document.getElementById("p2Before5");
let p2Method5 = document.getElementById("p2Method5");
let p2After5 = document.getElementById("p2After5");

p2Before5.innerHTML = studentList;
p2Method5.innerHTML = "pop()";
studentList.pop();
p2After5.innerHTML = studentList;

// STEP 6

let p2Before6 = document.getElementById("p2Before6");
let p2Method6 = document.getElementById("p2Method6");
let p2After6 = document.getElementById("p2After6");

p2Before6.innerHTML = studentList;
p2Method6.innerHTML = "splice()";
studentList.splice(0, 1);
p2After6.innerHTML = studentList;

// STEP 7

studentList = ["Rahul", "Aman", "Neha", "Riya", "Rahul", "Ankit"];

let p2Before7 = document.getElementById("p2Before7");
let p2Method7 = document.getElementById("p2Method7");
let p2After7 = document.getElementById("p2After7");

p2Before7.innerHTML = studentList;
p2Method7.innerHTML = "sort()";
studentList.sort();
p2After7.innerHTML = studentList;

// STEP 8

let p2Before8 = document.getElementById("p2Before8");
let p2Method8 = document.getElementById("p2Method8");
let p2After8 = document.getElementById("p2After8");

p2Before8.innerHTML = studentList;
p2Method8.innerHTML = "slice()";
let updated2 = studentList.slice(0, 3);
p2After8.innerHTML = updated2;

// STEP 9

let newStudentList = ["Karan", "Zoya"];

let p2Before9 = document.getElementById("p2Before9");
let p2Method9 = document.getElementById("p2Method9");
let p2After9 = document.getElementById("p2After9");

p2Before9.innerHTML = newStudentList;
p2Method9.innerHTML = "Created New Student List";
p2After9.innerHTML = newStudentList;

// STEP 10

let p2Before10 = document.getElementById("p2Before10");
let p2Method10 = document.getElementById("p2Method10");
let p2After10 = document.getElementById("p2After10");

p2Before10.innerHTML = studentList;
p2Method10.innerHTML = "concat()";
let updated3 = studentList.concat(newStudentList);
p2After10.innerHTML = updated3;

// STEP 11

let p2Before11 = document.getElementById("p2Before11");
let p2Method11 = document.getElementById("p2Method11");
let p2After11 = document.getElementById("p2After11");

p2Before11.innerHTML = updated3;
p2Method11.innerHTML = "join()";
let updated4 = updated3.join(", ");
p2After11.innerHTML = updated4;

// Task 3: Train Coach Booking System

// STEP 1

let coachList = ["A1", "B1", "C1", "D1"];

let p3Before1 = document.getElementById("p3Before1");
let p3Method1 = document.getElementById("p3Method1");
let p3After1 = document.getElementById("p3After1");

p3Before1.innerHTML = coachList;
p3Method1.innerHTML = "push()";
coachList.push("E1");
p3After1.innerHTML = coachList;

// STEP 2

let p3Before2 = document.getElementById("p3Before2");
let p3Method2 = document.getElementById("p3Method2");
let p3After2 = document.getElementById("p3After2");

p3Before2.innerHTML = coachList;
p3Method2.innerHTML = "unshift()";
coachList.unshift("VIP");
p3After2.innerHTML = coachList;

// STEP 3

let p3Before3 = document.getElementById("p3Before3");
let p3Method3 = document.getElementById("p3Method3");
let p3After3 = document.getElementById("p3After3");

p3Before3.innerHTML = coachList;
p3Method3.innerHTML = "pop()";
coachList.pop();
p3After3.innerHTML = coachList;

// STEP 4

let p3Before4 = document.getElementById("p3Before4");
let p3Method4 = document.getElementById("p3Method4");
let p3After4 = document.getElementById("p3After4");

p3Before4.innerHTML = coachList;
p3Method4.innerHTML = "shift()";
coachList.shift();
p3After4.innerHTML = coachList;

// STEP 5

let p3Before5 = document.getElementById("p3Before5");
let p3Method5 = document.getElementById("p3Method5");
let p3After5 = document.getElementById("p3After5");

p3Before5.innerHTML = coachList;
p3Method5.innerHTML = "splice()";
coachList.splice(1, 1);
p3After5.innerHTML = coachList;

// STEP 6

let p3Before6 = document.getElementById("p3Before6");
let p3Method6 = document.getElementById("p3Method6");
let p3After6 = document.getElementById("p3After6");

p3Before6.innerHTML = coachList;
p3Method6.innerHTML = "splice()";
coachList.splice(2, 1, "X1");
p3After6.innerHTML = coachList;

// STEP 7

coachList = ["A1", "B1", "C1", "D1"]; 

let p3Before7 = document.getElementById("p3Before7");
let p3Method7 = document.getElementById("p3Method7");
let p3After7 = document.getElementById("p3After7");

p3Before7.innerHTML = coachList;
p3Method7.innerHTML = "slice()";
let updated5 = coachList.slice(1, 4);
p3After7.innerHTML = updated5;

// STEP 8

let newCoachList = ["F1", "G1"]; 

let p3Before8 = document.getElementById("p3Before8");
let p3Method8 = document.getElementById("p3Method8");
let p3After8 = document.getElementById("p3After8");

p3Before8.innerHTML = newCoachList;
p3Method8.innerHTML = "Created New Coach List";
p3After8.innerHTML = newCoachList;

// STEP 9

let p3Before9 = document.getElementById("p3Before9");
let p3Method9 = document.getElementById("p3Method9");
let p3After9 = document.getElementById("p3After9");

p3Before9.innerHTML = coachList;
p3Method9.innerHTML = "concat()";
let updated6 = coachList.concat(newCoachList);
p3After9.innerHTML = updated6;

// STEP 10

let p3Before10 = document.getElementById("p3Before10");
let p3Method10 = document.getElementById("p3Method10");
let p3After10 = document.getElementById("p3After10");

p3Before10.innerHTML = updated6;
p3Method10.innerHTML = "join()";
let updated7 = updated6.join(" - ");
p3After10.innerHTML = updated7;