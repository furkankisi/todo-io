
const newTodoInput = document.getElementById("newTodoInput");
const todoList = document.getElementById("todoList");
const itemsLeft = document.getElementById("itemsLeft");


function updateItemsLeft() {
  const remainingItems = todoList.querySelectorAll("li").length;
  itemsLeft.textContent = `${remainingItems} item(s) left`;
}


function addTodo() {
  const text = newTodoInput.value.trim(); 
  if (text) {
    const li = document.createElement("li"); 
    li.className = "todo-item";

   
    const input = document.createElement("input");
    input.type = "text";
    input.value = text;
    input.className = "todo-input";
    input.setAttribute("readonly", true); 

    
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";

    editButton.addEventListener("click", () => {
      if (editButton.textContent === "Edit") {
        input.removeAttribute("readonly");
        input.focus(); 
        editButton.textContent = "Save";
      } else {
        input.setAttribute("readonly", true); 
        editButton.textContent = "Edit";
      }
    });

    
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";

    
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "asset/css/img/trash.png"; 
    deleteIcon.alt = "Delete";
    deleteIcon.style.width = "20px"; 
    deleteIcon.style.height = "20px";

    deleteButton.appendChild(deleteIcon);

    deleteButton.addEventListener("click", () => {
      li.remove(); 
      updateItemsLeft(); 
    });

    
    li.appendChild(input);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li); 
    newTodoInput.value = ""; 
    updateItemsLeft(); 
  }
}


newTodoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
