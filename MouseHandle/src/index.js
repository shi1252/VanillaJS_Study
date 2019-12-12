// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  resize: handleResize,
  mouseover: handleMouseOver,
  mouseleave: handleMouseLeave,
  click: handleClick
};

const title = document.getElementsByTagName("h2")[0];

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function handleResize() {
  title.innerHTML = "Window is resizing";
  title.style.color = randomColor();
}

function handleMouseOver() {
  title.innerHTML = "Mouse is on me";
  title.style.color = randomColor();
}

function handleMouseLeave() {
  title.innerHTML = "Mouse is just leaved";
  title.style.color = randomColor();
}

function handleClick(event) {
  title.innerHTML = "Right click";
  title.style.color = randomColor();
}

function init() {
  window.addEventListener("resize", superEventHandler.resize);
  title.addEventListener("mouseover", superEventHandler.mouseover);
  title.addEventListener("mouseleave", superEventHandler.mouseleave);
  title.addEventListener("contextmenu", superEventHandler.click);
}

init();
