document.getElementById("save-btn").addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  if (title.trim() === "" || description.trim() === "") {
    alert("Please fill out both fields.");
    return;
  }

  const todoItemsContainer = document.getElementById("todo-items");

  const row = document.createElement("tr");

  const titleCell = document.createElement("td");
  titleCell.textContent = title;
  row.appendChild(titleCell);

  const descriptionCell = document.createElement("td");
  descriptionCell.textContent = description;
  row.appendChild(descriptionCell);

  const deleteCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", function () {
    todoItemsContainer.removeChild(row);
  });
  deleteCell.appendChild(deleteButton);
  row.appendChild(deleteCell);

  todoItemsContainer.appendChild(row);

  // Clear the input fields
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
});
