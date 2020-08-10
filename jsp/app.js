// for the javascript we'll be doing three things //selectors //event listeners //functions
// console.log("hellow");
//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// declare the filter selector
const filterOption = document.querySelector(".filter-todo");

// event listeners
//create a click event and add a function of addTodo
todoButton.addEventListener("click", addTodo);

//for the delete button
todoList.addEventListener("click", deleleCheck);

//the second part //adding delete functionality
// todoList.addEventListener("click", deleteCheck);

//for the todo filter
filterOption.addEventListener("click", filterTodo);

//funtions
function addTodo(event) {
  // prevent form form submitting
  event.preventDefault();

  // start generating the todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // start generating the li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");

  //stick the todo inside the div that we have created
  todoDiv.appendChild(newTodo);

  // now i need two buttons 1. a complete button like a checkmark 2. a delete button

  //check mark
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class = "fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //now time for ur trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append all to the list
  todoList.appendChild(todoDiv);

  // now we go to the css and style the buttons

  //after the css buttons

  // i want to clear the text in the input box
  todoInput.value = "";

  // now start adding the delete functionality
}

//for the delete and check
function deleleCheck(e) {
  //console dot log to check what we are clicking on
  // console.log(e.target);

  //lets grab the item that is what ever we are clicking on
  const item = e.target;
  //delete todo
  if (item.classList[0] === "trash-btn") {
    // item.remove();
    const todo = item.parentElement;
    todo.remove();
  }

  //check
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//for the delete button go to line 12 and then come back here
function deleleCheck(e) {
  // console.log(e.target); test with this to see what you are clicking on

  const item = e.target;
  //delete todo
  if (item.classList[0] === "trash-btn") {
    // item.remove(); this will delete only the button
    const todo = item.parentElement;

    todo.remove(); //make sure to comment out after adding the delete animation

    //to animate the deletion after animating the checkmark with css
    // todo.classList.add("fall");
    // todo.addEventListener("transitioned", function () {
    //   todo.remove();
    // });
  }

  // for the checkmark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

// after css line 167
// doing the filter
// declare the filter selector at the top and add an event listener

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
