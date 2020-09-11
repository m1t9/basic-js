const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr, allDepth = [], currentDepth = 1) {

  	allDepth.push(currentDepth);

  	arr.forEach(item => {
    	if (Array.isArray(item))
    		this.calculateDepth(item, allDepth, currentDepth + 1);
    });

  	return Math.max.apply(Math, allDepth);
  };
};