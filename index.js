function addNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Це не число!";
  }
  return a + b;
}
function subNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Це не число!";
  }
  return a - b;
}
function multiplyNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Це не число!";
  }
  return a * b;
}
function divideNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Це не число!";
  }
  if (b === 0) {
    return "На нуль ділити не можна!";
  }
  return a / b;
}

const sum = addNumbers(2, 45);
const sub = subNumbers(2, null);
const multiply = multiplyNumbers(2, undefined);
const division = addNumbers(2, "Laba");
console.log(
  `сума: ${sum}\nрізниця: ${sub}\nдобуток: ${multiply}\nчастка: ${division}`
);

function getMinNumber(arr) {
  let minNumber = Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNumber && typeof arr[i] === "number") {
      minNumber = arr[i];
    }
  }
  return minNumber;
}

function getMaxNumber(arr) {
  let maxNumber = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber && typeof arr[i] === "number") {
      maxNumber = arr[i];
    }
  }
  return maxNumber;
}

let arr = [
  "robot",
  undefined,
  45,
  2,
  9,
  3,
  "Laba",
  2,
  23,
  false,
  46,
  79,
  " ",
  null,
  15,
];
const min = getMinNumber(arr);
const max = getMaxNumber(arr);
console.log(
  `мінімальне значення масиву: ${min}  максимальне значення масиву: ${max}`
);
