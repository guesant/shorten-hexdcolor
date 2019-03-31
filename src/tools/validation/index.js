import validateHex from './validate-hex'

export default (hexColor) => {
  validateHex(hexColor);

  return true;
}