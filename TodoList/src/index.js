// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  pendingList = document.querySelector(".js-pendingList"),
  finishedList = document.querySelector(".js-finishedList");

const PENDING_LS = "pending";
const FINISHED_LS = "finished";

let pens = [];
let fins = [];

let plen = 0,
  flen = 0;

function saveTodos() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pens));
  localStorage.setItem(FINISHED_LS, JSON.stringify(fins));
}

function loadTodos() {
  const pl = localStorage.getItem(PENDING_LS);
  const fl = localStorage.getItem(FINISHED_LS);
  if (pl !== null) {
    const parsed = JSON.parse(pl);
    parsed.forEach(function(todo) {
      paintPendingList(todo.text);
    });
  }
  if (fl !== null) {
    const parsed = JSON.parse(fl);
    parsed.forEach(function(todo) {
      paintFinishedList(todo.text);
    });
  }
}

function deletePending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanPens = pens.filter(function(todo) {
    return todo.id !== parseInt(li.id);
  });
  pens = cleanPens;
  saveTodos();
}

function pendingToFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanPens = pens.filter(function(todo) {
    return todo.id !== parseInt(li.id);
  });
  const selectedPen = pens.filter(function(todo) {
    return todo.id === parseInt(li.id);
  });
  pens = cleanPens;
  paintFinishedList(selectedPen[0].text);
  saveTodos();
}

function deleteFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);
  const cleanFins = fins.filter(function(todo) {
    return todo.id !== parseInt(li.id);
  });
  fins = cleanFins;
  saveTodos();
}

function finishedToPending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);
  const cleanFins = fins.filter(function(todo) {
    return todo.id !== parseInt(li.id);
  });
  const selectedFin = fins.filter(function(todo) {
    return todo.id === parseInt(li.id);
  });
  fins = cleanFins;
  paintPendingList(selectedFin[0].text);
  saveTodos();
}

function paintPendingList(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = ++plen;
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deletePending);
  finBtn.innerHTML = "✔";
  finBtn.addEventListener("click", pendingToFinished);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
  li.id = newId;
  pendingList.appendChild(li);
  const penObj = {
    text: text,
    id: newId
  };
  pens.push(penObj);
  saveTodos();
}

function paintFinishedList(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const penBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = ++flen;
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deleteFinished);
  penBtn.innerHTML = "➖";
  penBtn.addEventListener("click", finishedToPending);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(penBtn);
  li.id = newId;
  finishedList.appendChild(li);
  const finObj = {
    text: text,
    id: newId
  };
  fins.push(finObj);
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintPendingList(currentValue);
  todoInput.value = "";
}

function init() {
  loadTodos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
