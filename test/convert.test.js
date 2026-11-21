'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { celsiusToFahrenheit } = require('../src/convert');

test('converts freezing and boiling points', () => {
  assert.equal(celsiusToFahrenheit(0), 32);
  assert.equal(celsiusToFahrenheit(100), 212);
});

test('converts negative temperatures', () => {
  assert.equal(celsiusToFahrenheit(-40), -40);
});

test('rejects non-numeric input', () => {
  assert.throws(() => celsiusToFahrenheit('20'), TypeError);
});
