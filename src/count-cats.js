const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  if (typeof array === 'undefined') return 0;
  var count = 0;
  array.forEach(row => {
  	row.forEach(item => {
  		if (item === "^^") count += 1;
  	});
  });
  return count;
};