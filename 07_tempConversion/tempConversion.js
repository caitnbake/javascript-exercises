const convertToCelsius = function(temp) {
  let toCelsius = (temp - 32) * (5 / 9);
  return Math.round(toCelsius * 10) / 10;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
