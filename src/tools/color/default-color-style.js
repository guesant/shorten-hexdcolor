export default color => color
  .toString()
  .toUpperCase()
  .replace(/[^A-F0-9]/g, '')
  .slice(0, 6);
