const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
  return arr.reduce((total, num) => total += num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total *= num);
};

const power = function(n1, n2) {
  return n1 ** n2;
};

const factorial = function(n) {
	if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return (n * factorial(n - 1));
  }
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
