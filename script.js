function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("tasks");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = taskInput.value + '<button class="remove" onclick="removeTask(this)">Remove</button>';
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function removeTask(button) {
    var taskList = document.getElementById("tasks");
    var li = button.parentElement;
    taskList.removeChild(li);
}