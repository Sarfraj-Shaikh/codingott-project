# 💰 Expense Tracker

## 🔥 Banana kya hai?
Tumhe ek Expense Tracker App banana hai jisme user:

- Expense ka name likhe (eg: "Pizza")
- Amount enter kare
- Add button click kare
- List me expense show ho
- Total expense calculate ho
- Highest expense show ho
- Expense delete kar sake

## 🧠 Data Structure (Array of Objects)
Data store karne ke liye array of objects use hoga:

```js
let expenses = [
  { title: "Pizza", amount: 200 },
  { title: "Tea", amount: 20 }
];
````

## ✅ Features

### 1) Add Expense

User input le:

* title
* amount

Array me object push karo:

```js
expenses.push({ title: title, amount: amount });
```

### 2) Delete Expense

Expense ko index ke basis pe remove karo:

```js
expenses.splice(index, 1);
```

### 3) Render Expense List

Loop karke list ko HTML me show karo:

```js
expenses.forEach((expense, index) => {
  console.log(expense.title, expense.amount);
});
```

### 4) Total Expense Calculate

Saare expenses ka sum nikalna:

```js
let total = 0;

expenses.forEach((expense) => {
  total += expense.amount;
});
```

### 5) Highest Expense Show

Sabse bada amount find karna:

```js
let max = 0;

expenses.forEach((expense) => {
  if (expense.amount > max) {
    max = expense.amount;
  }
});
```

## 🧩 Topics Used

### JavaScript

* Arrays + Objects
* push / splice
* Loops (for / forEach)
* Functions
* Return
* Operators & Conditionals

### DOM

* DOM selectors (getElementById)
* innerHTML

## ⭐ Extra Improvement (Recommended)

Income input lo, phir balance calculate karo:

Income = 1000
Total Expense = 400
Balance = 600

Formula:

```js
balance = income - totalExpense;
```

## 🎯 End Goal

Ek real-world mini project jo properly kaam kare:

* Add Expense
* Delete Expense
* Render List
* Total Calculate
* Highest Expense Detect
* Balance Calculate

