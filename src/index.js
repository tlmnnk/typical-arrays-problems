
exports.min = function min (array) {

  if(!array || !array.length) return 0;

  return Math.min(...array);
};

exports.max = function max (array) {

  if(!array || !array.length) return 0;

  return Math.max(...array);
};

exports.avg = function avg (array) {

  if(!array || !array.length) return 0;

  return array.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0) / array.length;
};
