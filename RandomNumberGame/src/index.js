// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const range = document.querySelector(".js-range");
const guess = document.querySelector(".js-guess");
const btn = document.querySelector(".js-button");
const minmax = document.querySelector("h2");
const result = document.querySelector(".js-result");

function handleInput(event) {
  minmax.innerText = `Generate a number between 0 and ${range.value}`;
}

function RandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function handleBtn(event) {
  const pc = guess.value;
  if (pc !== "") {
    const ai = RandomInt(0, range.value);
    result.innerHTML = `You Chose: ${pc}, the machine chose: ${ai}<br>You ${
      pc == ai ? "Won!" : "Lose!"
    }`;
  }
}

function init() {
  range.addEventListener("input", handleInput);
  btn.addEventListener("click", handleBtn);
}

init();
