# cao-lab-target

A tiny Node.js example project that converts temperatures from Celsius to Fahrenheit. It has no external dependencies.

## Usage

```js
const { celsiusToFahrenheit } = require('./src/convert');

celsiusToFahrenheit(100); // 212
```

## Testing

Tests use the built-in `node:test` runner. Run them with:

```sh
npm run test:unit
```
