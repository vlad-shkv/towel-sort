
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let i = 0;
  let res = [];
  if (arguments.length === 0) {
    return [];
  }
  for (let step of matrix) {
    i += 1;
    if ((i % 2) === 0) {
      res.push(...step.sort((a, b) => b - a))
    } else {
      res.push(...step);
    }
  };
  return res;
}
