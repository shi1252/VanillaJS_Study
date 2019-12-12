// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const clear = document.querySelector(".clear");
const result = document.querySelector(".js-result");

let numStack;
let opClicked = false;
let op;

function handleClear() {
  result.value = "";
  numStack = null;
  op = null;
}

function handleNumber(event) {
  if (opClicked) {
    if (op == "=") numStack = null;
    result.value = "";
    opClicked = false;
  }
  result.value += event.target.value;
}

function handleOperator(event) {
  switch (event.target.value) {
    case "=":
      if (op) {
        numStack = eval(`${numStack}${op}${result.value}`);
        result.value = numStack;
      }
      break;
    default:
      if (numStack) {
        numStack = eval(`${numStack}${op}${result.value}`);
        result.value = numStack;
      } else {
        numStack = parseInt(result.value, 10);
      }
      break;
  }
  op = event.target.value;
  opClicked = true;
}

function init() {
  numbers.forEach(function(number) {
    number.addEventListener("click", handleNumber);
  });
  operators.forEach(function(operator) {
    operator.addEventListener("click", handleOperator);
  });
  clear.addEventListener("click", handleClear);
}

init();
