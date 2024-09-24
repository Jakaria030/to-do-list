const addTask = () => {
    const taskInput = document.getElementById("task-input");
    const taskInputValue = taskInput.value.trim();

    if(taskInputValue !== ""){
        const taskList = document.getElementById("task-list");
        const li = document.createElement("li");

        li.innerHTML = "<input type='checkbox'> " + taskInputValue + " <button onclick='deleteTask(this)'>Delete</button>";
        taskList.appendChild(li);

        taskInput.value = "";
    }else{
        alert("Please Add a Task.");
    }
}

const deleteTask = (childElement) => {
    const li = childElement.parentNode;
    li.parentNode.removeChild(li);
}

const deletedTaskChecked = () => {
    const taskList = document.getElementById("task-list");
    const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    
    checkboxes.forEach(checkbox => {
        deleteTask(checkbox);
    });
}