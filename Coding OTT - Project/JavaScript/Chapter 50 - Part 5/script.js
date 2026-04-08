// Task:

let userTable = document.getElementById("userTable");

let updateBtn = document.getElementById("updateBtn");
updateBtn.addEventListener("click", updateData);

function outputMessage(message) {

    let outputBox = document.getElementById("outputBox");
    outputBox.innerHTML = message;

};

let saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", addData);

function addData() {

    let userId = document.getElementById("userId");
    let userName = document.getElementById("userName");
    let userEmail = document.getElementById("userEmail");
    let userPhone = document.getElementById("userPhone");

    if (userId.value.trim() === "") {

        userId.style.border = "2px solid red";
        userName.style.border = "1px solid rgba(255, 255, 255, 0.15)";
        userEmail.style.border = "1px solid rgba(255, 255, 255, 0.15)";
        userPhone.style.border = "1px solid rgba(255, 255, 255, 0.15)";


    } else {

        userId.style.border = "1px solid rgba(255, 255, 255, 0.15)";

        if (userName.value.trim() === "") {

            userName.style.border = "2px solid red";

        } else {

            userName.style.border = "1px solid rgba(255, 255, 255, 0.15)";

            if (userEmail.value.trim() === "") {

                userEmail.style.border = "2px solid red";

            } else {

                userEmail.style.border = "1px solid rgba(255, 255, 255, 0.15)";

                if (userPhone.value.trim() === "") {

                    userPhone.style.border = "2px solid red";

                } else if (userPhone.value.length !== 10) {

                    userPhone.style.border = "2px solid red";

                } else {

                    userPhone.style.border = "1px solid rgba(255, 255, 255, 0.15)";

                    let users = {

                        id: userId.value,
                        name: userName.value,
                        email: userEmail.value,
                        phone: userPhone.value,
                    };

                    let renderUser = sessionStorage.getItem(userId.value);

                    if (renderUser === null) {

                        let allUser = JSON.stringify(users);
                        sessionStorage.setItem(userId.value, allUser);

                        outputMessage(`✅ Created: User (${userId.value}) added to Session Storage.`);
                        loadData();

                        setTimeout(function () {

                            userId.value = "";
                            userName.value = "";
                            userEmail.value = "";
                            userPhone.value = "";

                        }, 100)


                    } else {

                        outputMessage("❌ Create Failed: User ID already exists.");

                    };

                };
            };
        };
    };

    return false;
};

let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetData);

function resetData() {

    let userId = document.getElementById("userId");
    let userName = document.getElementById("userName");
    let userEmail = document.getElementById("userEmail");
    let userPhone = document.getElementById("userPhone");

    if (userId.value.trim() !== "" || userName.value.trim() !== "" || userEmail.value.trim() !== "" || userPhone.value.trim() !== "") {

        userId.value = "";
        userName.value = "";
        userEmail.value = "";
        userPhone.value = "";

        resetBtn.textContent = "Cleared";

        setTimeout(function () {

            resetBtn.textContent = "Reset";
            saveBtn.style.display = "block";
            updateBtn.style.display = "none";

        }, 1000);

    };

};

function loadData() {

    userTable.innerHTML = "";

    for (let i = 0; i <= sessionStorage.length; i++) {

        let keys = sessionStorage.key(i);

        if (keys !== null) {

            let loadUser = sessionStorage.getItem(keys);
            let result = JSON.parse(loadUser);

            userTable.innerHTML += `
        <tr>
          <td>${result.id}</td>
          <td>${result.name}</td>
          <td>${result.email}</td>
          <td>${result.phone}</td>
          <td>
            <div class="action-btns">
              <button class="edit-btn" onclick="editUser('${result.id}'); enableBtn()">Edit</button>
              <button class="delete-btn" onclick="deleteUser('${result.id}')">Delete</button>
            </div>
          </td>
        </tr>
      `;

        };

        outputMessage(`📌 Data loaded from Session Storage (READ operation).`);

    };

};

function enableBtn() {

    saveBtn.style.display = "none";
    updateBtn.style.display = "block";
}

function deleteUser(id) {

    let user = sessionStorage.getItem(id);
    let result = JSON.parse(user);
    sessionStorage.removeItem(result.id);

    outputMessage(`🗑️ Deleted: User (${id}) removed from Session Storage.`);
    loadData();
};

function clearAllData() {

    sessionStorage.clear();
    outputMessage(`🧹 All users cleared from Session Storage.`);
    loadData();

};

function editUser(id) {

    let userId = document.getElementById("userId");
    userId.disabled = true;
    userId.style.cursor = "not-allowed";

    let userName = document.getElementById("userName");
    let userEmail = document.getElementById("userEmail");
    let userPhone = document.getElementById("userPhone");

    let user = sessionStorage.getItem(id);
    let result = JSON.parse(user);

    userId.value = result.id;
    userName.value = result.name;
    userEmail.value = result.email;
    userPhone.value = result.phone;
};

function updateData() {

    let userId = document.getElementById("userId");
    let userName = document.getElementById("userName");
    let userEmail = document.getElementById("userEmail");
    let userPhone = document.getElementById("userPhone");

    if (userId.value.trim() === "") {

        userId.style.border = "2px solid red";
        userName.style.border = "1px solid rgba(255, 255, 255, 0.15)";
        userEmail.style.border = "1px solid rgba(255, 255, 255, 0.15)";
        userPhone.style.border = "1px solid rgba(255, 255, 255, 0.15)";


    } else {

        userId.style.border = "1px solid rgba(255, 255, 255, 0.15)";

        if (userName.value.trim() === "") {

            userName.style.border = "2px solid red";

        } else {

            userName.style.border = "1px solid rgba(255, 255, 255, 0.15)";

            if (userEmail.value.trim() === "") {

                userEmail.style.border = "2px solid red";

            } else {

                userEmail.style.border = "1px solid rgba(255, 255, 255, 0.15)";

                if (userPhone.value.trim() === "") {

                    userPhone.style.border = "2px solid red";

                } else if (userPhone.value.length !== 10) {

                    userPhone.style.border = "2px solid red";

                } else {

                    userPhone.style.border = "1px solid rgba(255, 255, 255, 0.15)";

                    let users = {

                        id: userId.value,
                        name: userName.value,
                        email: userEmail.value,
                        phone: userPhone.value,
                    };

                    let allUser = JSON.stringify(users);
                    sessionStorage.setItem(userId.value, allUser);

                    outputMessage(`✅ Updated: User (${userId.value}) details edited successfully.`);
                    loadData();

                    saveBtn.style.display = "block";
                    updateBtn.style.display = "none";

                    setTimeout(function () {

                        userId.value = "";
                        userName.value = "";
                        userEmail.value = "";
                        userPhone.value = "";

                        userId.disabled = false;
                        userId.style.cursor = "text";
                    }, 100)

                };
            };
        };
    };

    return false;
};

loadData();
