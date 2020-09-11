const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
	var repeat;
	var separator;
	
	var additionStr = '';
	if (options['addition'] !== undefined) {
		repeat = (options['additionRepeatTimes'] !== undefined) ? options['additionRepeatTimes'] : 1;
		separator = (options['additionSeparator'] !== undefined) ? options['additionSeparator'] : '|';
		for (let repeatLocal = 1; repeatLocal <= repeat; repeatLocal++)
			(repeatLocal !== repeat) ? (additionStr += options['addition'] + separator) : (additionStr += options['addition']);
	}

	var mainStr = '';
	repeat = (options['repeatTimes'] !== undefined) ? options['repeatTimes'] : 1;
	separator = (options['separator'] !== undefined) ? options['separator'] : '+';
	for (let repeatLocal = 1; repeatLocal <= repeat; repeatLocal++)
		(repeatLocal !== repeat) ? (mainStr += str + additionStr + separator) : (mainStr += str + additionStr);
	
	return mainStr;
};