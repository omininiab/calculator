let ab = [], op,
  answer;

function add(...x) {
  return x.reduce((a, b) => Number(a) + Number(b), 0);
}

function subtract(...x) {
  return x.reduce((a, b) => Number(a) - Number(b));
}

function multiply(x) {
  return x.reduce((a, b) => a * b);
}

function divide(x) {
  return x.reduce((a, b) => (b == 0 ? "error" : a / b));
}

function clearScreen() {
  let screen = document.querySelector("#screen");
  console.log(`screen: ${screen.value}`);
  screen.value = "";
  screen.focus()
}
let ac = document.querySelector("#ac");
ac.onclick = function () {
  clearScreen();
};

function compute(operator) {
  switch (operator) {
    case "+":
      return add(ab[0], ab[1]);
    case "-":
      return subtract(ab[0], ab[1]);
    case "*":
      return multiply(ab);
    case "/":
      return divide(ab);
    case "=":
      return answer;
  }
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.onclick = function () {
    let screen = document.querySelector("#screen");
    screen.value = screen.value+number.id
  }
})

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.onclick = function () {
    let screen = document.querySelector("#screen");
    ab.push(screen.value); // get value
    console.log(`${op}: ${ab}`)
    clearScreen(); // clear screen
    if (op && ab.length == 2) {
      answer = compute(op)
      console.log(answer)
      screen.value = answer
      ab = [];
    }
    op = operator.id // get new operator
  };
});