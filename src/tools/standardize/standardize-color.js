import evenLength from './even-length';

export default (originalHexColor) => {
  // Transformar em string e deixar em caixa-alta
  let stringHexColor = originalHexColor.toString().toUpperCase();

  // Manter apenas os caractéres hexadecimais
  let onlyHexNumbers = stringHexColor.replace(/[^A-F0-9]/g, '');

  // Caso o tamanho seja ímpar, remova o último caractere
  let hexNumber = evenLength(onlyHexNumbers);

  return hexNumber.length > 1 ? hexNumber : '';
};