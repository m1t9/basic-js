const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

	if (!Array.isArray(arr)) throw new Error();

	let result = arr.reduce((total, next, index) => {
		
  		if (next === '--discard-next' ||
  			next === '--discard-prev' ||
  			next === '--double-prev' ||
  			next === '--double-next'
  			) return total;

		if (arr[index - 1] === '--discard-next') return total;

		(arr[index - 1] === '--double-next') ? total.push(next, next) : total.push(next);

		if (arr[index + 1] === '--double-prev') total.push(next);

		if(arr[index + 1] === '--discard-prev') total.splice(total.length - 1, 1);

		return total;

	}, []);

	return result;
};