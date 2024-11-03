const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arrayToSum) {
  return arrayToSum.reduce((all, current) => all + current, 0);
};

const multiply = function(arrayToMultiply) {
  return arrayToMultiply.reduce((all, current) => all * current);
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
