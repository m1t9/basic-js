const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
	let dreamTeam = '';
	if (!Array.isArray(arguments[0])) return false;
	arguments[0].forEach(item => {
	(typeof item === 'string' && !/[0-9]/.test(item) && item.length !== 0) ?
  		dreamTeam += item.replace(/\s/g, '').toUpperCase()[0] : false;
	});
	return dreamTeam.split('').sort().join('');
};