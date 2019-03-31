# shorten-hexdcolor
The best package to simplify hexadecimal colors

## Install
  With NPM:
  ```sh
  npm install shorten-hexdcolor
  ```

  Or Yarn:
  ```sh
  yarn add shorten-hexdcolor
  ```

## Usage
### Import
```js
import shortenHedxColor from 'shorten-hexdcolor';
// commonjs
// const shortenHedxColor = require('shorten-hexdcolor').default;
```
### Main method
Use the imported method above (called `shortenHedxColor`)
```javascript
const myColor1 = "#16597B";
const myColor2 = "A0165D";

const coolColor1 = shortenHedxColor(myColor1);
const coolColor2 = shortenHedxColor(myColor2);
```
#### Output
```js
console.log(coolColor1); // 115577
console.log(coolColor2); // 991155
```


### Build
#### Commands
- Use `dev:build` to generate common-js compatibility.
