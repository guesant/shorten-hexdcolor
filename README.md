# shorten-hexdcolor
The best package to simplify hexadecimal colors

**Looking for the source code of the website?** It's in the [website branch](https://github.com/gabrodbr/shorten-hexdcolor/tree/website).

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
import shortenHexdColor from 'shorten-hexdcolor';
// commonjs
// const shortenHexdColor = require('shorten-hexdcolor').default;
```
### Main method
Use the imported method above (called `shortenHexdColor`)
```javascript
const myColor1 = "#16597B";
const myColor2 = "A0165D";

const coolColor1 = shortenHexdColor(myColor1);
const coolColor2 = shortenHexdColor(myColor2);
```
#### Output
```js
console.log(coolColor1); // 115577
console.log(coolColor2); // 991155
```


### Build
#### Commands
- Use `dev:build` to generate common-js compatibility.
