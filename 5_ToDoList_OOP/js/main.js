import {ToDo} from "./todo.js"
import {ToDoList} from "./todoList.js"

let toDoList = new ToDoList();
let completeList = new ToDoList();
let flagSort = "todo";

const getID = (id) => {
  return document.getElementById(id);
}

const addToDo = () => {
  let textToDo = getID("newTask").value;
  let ulToDo = getID("todo");

  if (textToDo != ""){
    let td = new ToDo(textToDo, "todo");
    toDoList.addToDo(td);
  }

  showToDoList(ulToDo);
  getID("newTask").value = "";
}

getID("addItem").addEventListener("click", ()=>{
  addToDo();
})

/* Hiển thị danh sach to do len UI */
const showToDoList = (ulToDo) => {
  ulToDo.innerHTML = toDoList.renderToDo();
}

const showCompleteList = (ulComplete) => {
  ulComplete.innerHTML = completeList.renderToDo();
}

/* Xóa toDo list */
const deleteToDo = (e) => {
  let tdIndex = e.currentTarget.getAttribute("data-index");
  let status = e.currentTarget.getAttribute("data-status");
  let ulToDo = getID("todo");
  let ulComplete = getID("completed");

  if (status == "todo") {
    toDoList.removeToDo(tdIndex);
    showToDoList(ulToDo);
  } else if (status == "completed") {
    completeList.removeToDo(tdIndex);
    showCompleteList(ulComplete);
  } else {
    alert("Can't not delete");
  }
}

window.deleteToDo = deleteToDo;

const completeToDo = (e) => {
  let tdIndex = e.currentTarget.getAttribute("data-index");
  let status = e.currentTarget.getAttribute("data-status");
  let ulToDo = getID("todo");
  let ulComplete = getID("completed");
  if (status == "todo"){
    let completeItem = toDoList.tdList.slice(tdIndex, tdIndex + 1);
    let objectToDo = new ToDo(completeItem[0].textToDo, "completed");
    console.log(objectToDo);
    moveToDo(toDoList, completeList, objectToDo, tdIndex);
  } else if (status == "completed") {
    let undoItem = completeList.tdList.slice(tdIndex, tdIndex + 1);
    let objectToDo = new ToDo(undoItem[0].textToDo, "todo");
    console.log(objectToDo);
    moveToDo(completeList, toDoList, objectToDo, tdIndex);
  } else {
    alert("Can't not move todo !");
  }

  showToDoList(ulToDo);
  showCompleteList(ulComplete);
}

window.completeToDo = completeToDo;

const moveToDo = (depart, arrival, object, index) => {
  /* Remove to do depart */
  depart.removeToDo(index);

  /* Add to do to arrival */
  arrival.addToDo(object);
}

/* Sắp xếp tăng dần */
const sortASC = (e)=>{
  let ulToDo = getID("todo");
  let ulComplete = getID("completed");
  console.log(flagSort);
  if (flagSort == "todo") {
    toDoList.sortToDoList(false);
    showToDoList(ulToDo);
  } else {
    completeList.sortToDoList(false);
    showCompleteList(ulComplete);
  }
}
window.sortASC = sortASC;

const sortDES = (e)=>{
  let ulToDo = getID("todo");
  let ulComplete = getID("completed");

  if (flagSort == "todo"){
    toDoList.sortToDoList(true);
    showToDoList(ulToDo);
  } else {
    completeList.sortToDoList(true);
    showCompleteList(ulComplete);
  }
}

window.sortDES = sortDES;

const flagSorts = () => {
  if (flagSort == "completed") {
    flagSort = "todo";
    getID("one").style.color = "#fff";
  } else {
    flagSort = "completed";
    getID("one").style.color = "#25b99a";
  }
}
window.flagSorts = flagSorts;


// const phones = [
//   { id: 1, model: "iphone 1", price: 10000 },
//   { id: 2, model: "iphone 2", price: 11000 },
//   { id: 3, model: "iphone 3", price: 12000 },
//   { id: 4, model: "iphone 4", price: 13000 },
//   { id: 5, model: "iphone 5", price: 14000 },
// ]
// let newPhone = []
// for (let key in phones) {
//   if (phones[key].price > 11000) {
//     newPhone.push(phones[key])
//   }
// }
// console.log(newPhone)