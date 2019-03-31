const hexNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const rotateHex = (number, add) => {
  return hexNumbers[(hexNumbers.indexOf(number) + add) % hexNumbers.length];
}
const validateOverflow = (number, mode) => {
  return mode == 'next' ? hexNumbers.indexOf(number) < 14 : hexNumbers.indexOf(number) > 1
};

export default ({ mode, number }) => {
  // Sendo number = 'F' => RETURN = 'F'
  // Sendo number = 'E' => RETURN = 'F'
  return validateOverflow(number, mode) ? rotateHex(number, mode) : number;
}