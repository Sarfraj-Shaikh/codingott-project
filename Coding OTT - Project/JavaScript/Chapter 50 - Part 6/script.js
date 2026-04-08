// Task:

function adddata() {

    let userId = document.getElementById("userId");
    let userName = document.getElementById("userName");
    let userEmail = document.getElementById("userEmail");
    let userPhone = document.getElementById("userPhone");
    let userPass = document.getElementById("userPass");

    if (userId.value.trim() === "") {

        userId.style.border = "2px solid red";
        userName.style.border = "1px solid #d1d5db";
        userEmail.style.border = "1px solid #d1d5db";
        userPhone.style.border = "1px solid #d1d5db";
        userPass.style.border = "1px solid #d1d5db";

    }
    else if (userName.value.trim() === "") {

        userId.style.border = "1px solid #d1d5db";
        userName.style.border = "2px solid red";
        userEmail.style.border = "1px solid #d1d5db";
        userPhone.style.border = "1px solid #d1d5db";
        userPass.style.border = "1px solid #d1d5db";

    }
    else if (userEmail.value.trim() === "") {

        userId.style.border = "1px solid #d1d5db";
        userName.style.border = "1px solid #d1d5db";
        userEmail.style.border = "2px solid red";
        userPhone.style.border = "1px solid #d1d5db";
        userPass.style.border = "1px solid #d1d5db";

    }
    else if (userEmail.value.match("@")) {

        if (userPhone.value.trim() === "") {

            userId.style.border = "1px solid #d1d5db";
            userName.style.border = "1px solid #d1d5db";
            userEmail.style.border = "1px solid #d1d5db";
            userPhone.style.border = "2px solid red";
            userPass.style.border = "1px solid #d1d5db";
        }
        else if (userPhone.value.length !== 10) {

            userId.style.border = "1px solid #d1d5db";
            userName.style.border = "1px solid #d1d5db";
            userEmail.style.border = "1px solid #d1d5db";
            userPhone.style.border = "2px solid red";
            userPass.style.border = "1px solid #d1d5db";
        }
        else if (userPass.value.trim() === "") {

            userId.style.border = "1px solid #d1d5db";
            userName.style.border = "1px solid #d1d5db";
            userEmail.style.border = "1px solid #d1d5db";
            userPhone.style.border = "1px solid #d1d5db";
            userPass.style.border = "2px solid red";
        }
        else if (userPass.value.length < 8) {

            userId.style.border = "1px solid #d1d5db";
            userName.style.border = "1px solid #d1d5db";
            userEmail.style.border = "1px solid #d1d5db";
            userPhone.style.border = "1px solid #d1d5db";
            userPass.style.border = "2px solid red";
        }
        else {

            userId.style.border = "1px solid #d1d5db";
            userName.style.border = "1px solid #d1d5db";
            userEmail.style.border = "1px solid #d1d5db";
            userPhone.style.border = "1px solid #d1d5db";
            userPass.style.border = "1px solid #d1d5db";

            let userDetail = {
                id: userId.value.trim(),
                name: userName.value.trim(),
                email: userEmail.value.trim(),
                phone: userPhone.value.trim(),
                pass: userPass.value.trim(),
            };

            if (localStorage.getItem(userDetail.id) !== null) {

                showText(`User ID ${userDetail.id} is already exists.`);
                return;

            }

            for (let i = 0; i < localStorage.length; i++) {

                let key = localStorage.key(i);
                let storedData = localStorage.getItem(key);
                let storedUser = JSON.parse(storedData);

                if (storedUser.name === userDetail.name) {

                    showText(`This *${userDetail.name}* name is already used.`);
                    return;

                }

                if (storedUser.email === userDetail.email) {

                    showText(`This *${userDetail.email}* email is already used.`);
                    return;

                }

                if (storedUser.phone === userDetail.phone) {

                    showText(`This *${userDetail.phone}* number is already used.`);
                    return;

                }
            }

            localStorage.setItem(userDetail.id, JSON.stringify(userDetail));

            readData();
            showText(`User ${userDetail.id} Data Added Successfully.`);
            setTimeout(resetInput, 300);

        }

    }
    else {

        userId.style.border = "1px solid #d1d5db";
        userName.style.border = "1px solid #d1d5db";
        userEmail.style.border = "2px solid red";
        userPhone.style.border = "1px solid #d1d5db";
        userPass.style.border = "1px solid #d1d5db";
    };

};

function readData() {

    let userTable = document.getElementById("userTable");
    let noUserBox = document.getElementById("noUserBox");
    let userList = document.getElementById("userList");

    if (localStorage.length === 0) {

        userTable.style.display = "none";
        noUserBox.style.display = "block";

    } else {

        userTable.style.display = "block";
        noUserBox.style.display = "none";

        userList.innerHTML = "";

        for (let i = 0; i < localStorage.length; i++) {

            let keys = localStorage.key(i);
            let allUsers = localStorage.getItem(keys);
            let result = JSON.parse(allUsers);

            userList.innerHTML += `
                        <tr>
                            <td>${result.id}</td>
                            <td>${result.name}</td>
                            <td>${result.email}</td>
                            <td>${result.phone}</td>
                            <td>${result.pass}</td>
                            <td>
                            <div class="action-btns">
                            <button class="edit-btn" onclick="editData(${result.id})">Edit</button>
                            <button class="delete-btn" onclick="deleteData(${result.id})">Delete</button>
                            </div>
                            </td>
                        </tr>
            `;

        };

        showText("All Data Loaded Successfully.");

    };

};

readData();

function editData(id) {

    let userId = document.getElementById("userId");
    let userName = document.getElementById("userName");
    let userEmail = document.getElementById("userEmail");
    let userPhone = document.getElementById("userPhone");
    let userPass = document.getElementById("userPass");
    let createBtn = document.getElementById("createBtn");
    let editBtn = document.getElementById("editBtn");

    userId.disabled = true;
    userId.style.cursor = "not-allowed";
    userId.style.backgroundColor = "#EEEEEE";

    createBtn.style.display = "none";
    editBtn.style.display = "block";

    let renderDetail = localStorage.getItem(id);
    let result = JSON.parse(renderDetail);

    userId.value = result.id;
    userName.value = result.name;
    userEmail.value = result.email;
    userPhone.value = result.phone;
    userPass.value = result.pass;

};

function updateData() {

    let userId = document.getElementById("userId");
    let userName = document.getElementById("userName");
    let userEmail = document.getElementById("userEmail");
    let userPhone = document.getElementById("userPhone");
    let userPass = document.getElementById("userPass");
    let createBtn = document.getElementById("createBtn");
    let editBtn = document.getElementById("editBtn");

    let userDetail = {
        id: userId.value.trim(),
        name: userName.value.trim(),
        email: userEmail.value.trim(),
        phone: userPhone.value.trim(),
        pass: userPass.value.trim(),
    };

    if (localStorage.getItem(userDetail.id) === null) {
        showText(`User ID ${userDetail.id} not found. Cannot update.`);
        return;
    }

    // Duplicate validation (skip same ID)
    for (let i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i);

        // Skip current user record
        if (key === userDetail.id) {
            continue;
        }

        let storedData = localStorage.getItem(key);
        let storedUser = JSON.parse(storedData);

        if (storedUser.name === userDetail.name) {
            showText(`This *${userDetail.name}* name is already used.`);
            return;
        }

        if (storedUser.email === userDetail.email) {
            showText(`This *${userDetail.email}* email is already used.`);
            return;
        }

        if (storedUser.phone === userDetail.phone) {
            showText(`This *${userDetail.phone}* number is already used.`);
            return;
        }
    }

    // Update user
    localStorage.setItem(userDetail.id, JSON.stringify(userDetail));

    readData();
    showText(`User ${userDetail.id} Data Updated Successfully.`);

    userId.disabled = false;
    userId.style.cursor = "text";
    userId.style.backgroundColor = "#FFFFFF";

    createBtn.style.display = "block";
    editBtn.style.display = "none";

    setTimeout(resetInput, 300);
}

function deleteData(id) {

    let userData = localStorage.removeItem(id);
    readData();

};

function showText(text) {

    let message = document.getElementById("message");
    message.innerHTML = text;

};

function resetInput() {

    let userId = document.getElementById("userId");
    let userName = document.getElementById("userName");
    let userEmail = document.getElementById("userEmail");
    let userPhone = document.getElementById("userPhone");
    let userPass = document.getElementById("userPass");

    userId.value = "";
    userName.value = "";
    userEmail.value = "";
    userPhone.value = "";
    userPass.value = "";

};