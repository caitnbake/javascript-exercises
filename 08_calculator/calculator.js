const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arrayToSum) {
  let sum = 0;
  for (let item of arrayToSum) {
    sum += item;
  }
  return sum;
};

const multiply = function(arrayToMultiply) {
  let multiply = 1;
  for (let item of arrayToMultiply) {
    multiply *= item;
  }
  return multiply;
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(number) {
	let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
