const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const columnDiv = event.target.parentElement;
  const li = columnDiv.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  console.log(toDos);

  saveToDos();
  // li.remove();
  li.remove();
}

function paintToDo(newTodoObj) {
  console.log("i will paint", newTodoObj);
  const list = document.createElement("li");
  list.id = newTodoObj.id;
  const spanBox = document.createElement("span");
  spanBox.innerText = newTodoObj.text;
  const btn = document.createElement("button");
  const columnBox1 = document.createElement("div");
  const columnBox2 = document.createElement("div");
  btn.innerText = "X";
  btn.addEventListener("click", deleteToDo);
  list.appendChild(columnBox1);
  list.appendChild(columnBox2);
  columnBox1.appendChild(btn);
  columnBox2.appendChild(spanBox);
  toDoList.prepend(list);
  console.log(toDos);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  console.log(parsedToDos);
  parsedToDos.forEach(paintToDo);
}

console.log(toDos);
