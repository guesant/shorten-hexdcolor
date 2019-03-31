import sendError from './send-error';
import standardizeColor from '../standardize/standardize-color';

export default (originalHexColor) => {
  const hexColor = standardizeColor(originalHexColor || '');

  if(hexColor.length < 2) {
    sendError(`Please enter a valid color: "${hexColor}
Examples: "#125691" and "823428".`);

  }
};
