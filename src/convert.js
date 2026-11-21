'use strict';

function celsiusToFahrenheit(celsius) {
  if (typeof celsius !== 'number' || Number.isNaN(celsius)) {
    throw new TypeError('celsius must be a number');
  }
  return (celsius * 9) / 5 + 32;
}

module.exports = { celsiusToFahrenheit };
