const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, num)=>sum+num,0)
};

const multiply = function(arr) {
  return arr.reduce((mul, num)=>mul*num,1)
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(a) {
	let fact = 1;
  for (let i = a; i > 1; i--) {
    fact *= i;
  }
  return fact;
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
