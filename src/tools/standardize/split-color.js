import standardizeColor from './standardize-color';

export default (originalHexColor) => {
  const hexNumber = standardizeColor(originalHexColor);

  // Dividir a string em grupos de dois caractéres
  // Exemplo: 'DDEA2E' => ['DD', 'EA', '2E']
  return hexNumber.split(/(?=(?:..)*$)/);
}