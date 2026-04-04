// Task: 1

let task = [];

function addTask() {

    let taskText = document.getElementById("taskInput").value;
    let taskInput = document.getElementById("taskInput");

    let errorMsg = document.getElementById("errorMsg");

    if (taskText.trim() === "") {

        errorMsg.innerText = "⚠ Please enter a task first.";
        taskInput.style.border = "2px solid red";

    } else {

        errorMsg.innerText = "";
        taskInput.style.border = "1px solid rgba(255, 255, 255, 0.15)";

        // ======================== ADD TASK ========================>

        task.push({
            title: taskText,
            completed: false
        });

        taskInput.value = "";
        loadTask();
    }

}

function loadTask() {

    let clearAllBtn = document.getElementById("clearAllBtn");
    let taskList = document.getElementById("taskList");
    let taskCount = document.getElementById("taskCount");

    taskList.innerHTML = "";

    for (let i = 0; i < task.length; i++) {

        let list = document.createElement("li");
        list.className = "task-item";

        const taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.innerText = task[i].title;

        const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";

        const doneBtn = document.createElement("button");
        doneBtn.className = "done-btn";
        doneBtn.innerText = task[i].completed ? "Undo" : "Done";

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerText = "Delete";

        btnGroup.appendChild(doneBtn);
        btnGroup.appendChild(deleteBtn);

        list.appendChild(taskText);
        list.appendChild(btnGroup);

        taskList.appendChild(list);

        if (task[i].completed === true) {
            taskText.classList.add("completed");
        }

        doneBtn.onclick = function () {

            markComplete(i);
            
        }

        deleteBtn.onclick = function () {

            deleteTask(i);
        }

    }

    taskCount.innerHTML = task.length;

    if (taskCount == 0) {

        clearAllBtn.style.display = "none";

    } else {

        clearAllBtn.style.display = "block";

    }
}

function clearAllTask() {

    let clearAllBtn = document.getElementById("clearAllBtn");

    if (task != []) {

        task = [];
        loadTask();

    }

    if (task.length == 0) {

        clearAllBtn.style.display = "none";

    } else {

        clearAllBtn.style.display = "block";

    }

}

function markComplete(index) {

    if (task[index].completed === true) {

        task[index].completed = false;
        loadTask();

    } else {

        task[index].completed = true;
        loadTask();

    }

}

function deleteTask(index) {

    task.splice(index, 1);
    loadTask();
}