
function add() {
  const taskInput = document.getElementById("to");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("list");

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const taskText = document.createElement("span");
  taskText.textContent = "• " + taskValue;
  taskText.style.flex = "1";

  // ✏️ Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = function () {
    const currentText = taskText.textContent.replace(/^•\s*/, ""); // remove bullet for editing
    const newTask = prompt("Edit your task:", currentText);
    if (newTask !== null && newTask.trim() !== "") {
      taskText.textContent = "• " + newTask.trim();
    }
  };

  // ❌ Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = function () {
    taskDiv.remove();
  };

  // Style buttons
  [editBtn, deleteBtn].forEach((btn) => {
    btn.style.marginLeft = "5px";
    btn.style.padding = "5px 5px";
    btn.style.cursor = "pointer";
  });

  taskDiv.appendChild(taskText);
  taskDiv.appendChild(editBtn);
  taskDiv.appendChild(deleteBtn);

  taskList.appendChild(taskDiv);

  taskInput.value = "";
}
