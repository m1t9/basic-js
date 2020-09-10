// const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
	if (typeof arguments[0] !== 'string' || /[a-zA-Z]/.test(arguments[0]) || 
		arguments[0] <= 0 || arguments[0] > MODERN_ACTIVITY
		) return false;

	// t = (ln(N0 / N) / k)
	let k = 0.693 / HALF_LIFE_PERIOD;
	let t = Math.log(MODERN_ACTIVITY / parseFloat(arguments[0])) / k;

	return Math.ceil(t);
};