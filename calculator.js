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
