export default (string) => {
  return string.slice(0, string.length - !(string.length % 2 == 0));
};