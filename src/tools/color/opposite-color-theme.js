export default (hexC) => {
  const hex = hexC.toUpperCase().replace(/[^A-F0-9]/g, '');

  const rgb = [0, 2, 4].map(pos => parseInt(hex.slice(pos, pos + 2), 16));

  const ehCorClara = () => {
    const red = rgb[0] * 0.299;
    const green = rgb[1] * 0.587;
    const blue = rgb[2] * 0.114;

    return red + green + blue > 186;
  };

  if (ehCorClara() || hex.length < 2) {
    return 'dark';
  }
  return 'light';
};
