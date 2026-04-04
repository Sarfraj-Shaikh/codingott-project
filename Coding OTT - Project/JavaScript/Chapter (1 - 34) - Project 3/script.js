// Task: 1

let userBalance = 0;
let userExpense = 0;
let expenseList = [];
let highExpense = 0;

function addBalance() {

    let incomeAmountInput = document.getElementById("incomeAmount");
    let incomeAmount = Number(document.getElementById("incomeAmount").value);

    if (incomeAmount == "") {

        incomeAmountInput.style.border = "2px solid red";

    } else {

        incomeAmountInput.style.border = "1px solid #ffffff24";
        userBalance = incomeAmount;
        checkCurrentBal();
    }
}

function checkCurrentBal() {

    let incomeAmount = Number(document.getElementById("incomeAmount").value);
    let incomeAmountInput = document.getElementById("incomeAmount");
    let addBalanceBtn = document.getElementById("addBalanceBtn");
    let balance = document.getElementById("balance");

    if (incomeAmount != 0) {

        addBalanceBtn.innerHTML = "Update Balance";
        incomeAmountInput.value = userBalance;
        balance.innerHTML = "₹" + (userBalance - userExpense);
    }
}

function clearUserBal() {

    let incomeAmountInput = document.getElementById("incomeAmount");
    let addBalanceBtn = document.getElementById("addBalanceBtn");

    userBalance = 0;
    incomeAmountInput.value = "";
    addBalanceBtn.innerHTML = "Add Balance";

}

function addExpense() {

    let expenseTitle = document.getElementById("expenseTitle").value;
    let expenseAmount = Number(document.getElementById("expenseAmount").value);

    let expenseTitleInput = document.getElementById("expenseTitle");
    let expenseAmountInput = document.getElementById("expenseAmount");


    if (userBalance === 0) {

        window.alert("First Add Balance");

    } else {

        if (expenseTitleInput.value === "") {

            expenseTitleInput.style.border = "2px solid red";

        } else {

            expenseTitleInput.style.border = "1px solid #ffffff24";

            if (expenseAmountInput.value === "") {

                expenseAmountInput.style.border = "2px solid red";

            } else {

                expenseAmountInput.style.border = "1px solid #ffffff24";

                expenseList.push({

                    product: expenseTitle,
                    amt: expenseAmount
                });

                userExpense += expenseAmount;
                loadExpense();
            }
        }
    }

}

function loadExpense() {

    let totalExpenseItem = document.getElementById("totalExpenseItem");
    let totalExpense = document.getElementById("totalExpense");
    let expenseListBg = document.getElementById("expenseListBg");
    let emptyMsg = document.getElementById("emptyMsg");
    let highestExpense = document.getElementById("highestExpense");
    let balance = document.getElementById("balance");

    totalExpenseItem.innerHTML = expenseList.length;
    totalExpense.innerHTML = "₹" + userExpense;

    expenseListBg.innerHTML = "";

    if (expenseList.length == 0) {

        highExpense = 0;
        emptyMsg.style.display = "block";
        highestExpense.innerHTML = "₹0";

    } else {

        emptyMsg.style.display = "none";
        highExpense = 0;

        for (let i = 0; i < expenseList.length; i++) {

            if (expenseList[i].amt > highExpense) {
                highExpense = expenseList[i].amt;
            }

            let listItem = document.createElement("div");
            listItem.className = "list-item";

            let listInfo = document.createElement("div");
            listInfo.className = "list-info";

            let heading = document.createElement("h3");
            heading.innerHTML = expenseList[i].product;

            let amount = document.createElement("p")
            amount.innerHTML = expenseList[i].amt;

            let btn = document.createElement("button");
            btn.className = "delete-btn";
            btn.innerHTML = "Delete";

            listInfo.appendChild(heading);
            listInfo.appendChild(amount);

            listItem.appendChild(listInfo);
            listItem.appendChild(btn);

            expenseListBg.appendChild(listItem);

            btn.onclick = function () {
                deleteExpense(i);
            }

        }

        highestExpense.innerHTML = "₹" + highExpense;
        balance.innerHTML = "₹" + (userBalance - userExpense);
    }

}

function deleteExpense(index) {
    userExpense -= expenseList[index].amt;
    expenseList.splice(index, 1);
    loadExpense();
}

function clearExpense() {

    let expenseTitleInput = document.getElementById("expenseTitle");
    let expenseAmountInput = document.getElementById("expenseAmount");

    expenseTitleInput.value = "";
    expenseAmountInput.value = "";

    userBalance = 0;
    userExpense = 0;
    expenseList = [];
    highExpense = 0;

    checkCurrentBal();
    loadExpense();
}