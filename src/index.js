import shortColor from './shorten/shorten-hexdcolor';
import colorValidation from './tools/validation';

export default (hexColor) => {
  if(colorValidation(hexColor)) {
    return shortColor(hexColor);
  }
};