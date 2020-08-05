//selectors
const toDoInput = document.querySelector(".toDoInput");
const toDoButton = document.querySelector(".toDoButton");
const toDoList = document.querySelector(".toDoList");
//event listeners
toDoButton.addEventListener("click", addtoDo);
toDoList.addEventListener("click", deleteCheck);
//func
function addtoDo(event) {
  event.preventDefault();

  const toDoDiv = document.createElement("div");
  toDoDiv.classList.add("todo");

  const newToDo = document.createElement("li");
  newToDo.innerHTML = toDoInput.value;
  newToDo.classList.add("toDoItem");

  toDoDiv.appendChild(newToDo);

  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class = "fas fa-check"></i>';
  completeButton.classList.add("completeBtn");
  toDoDiv.appendChild(completeButton);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class = "fas fa-trash"></i>';
  trashBtn.classList.add("trash-Btn");
  toDoDiv.appendChild(trashBtn);
  toDoList.appendChild(toDoDiv);

  toDoInput.value = "";
}
function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-Btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  if (item.classList[0] === "completeBtn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
