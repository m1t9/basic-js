const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainRing : [],

  getLength() {
    return this.chainRing.length;
  },

  addLink(value) {
    this.chainRing.push(value);
    return this;
  },

  removeLink(position) {
    if ((position - 1 >= 0 && position - 1 <= this.chainRing.length - 1)
      && position !== '' && this.chainRing[position] !== undefined && !isNaN(position)
      ) {
      this.chainRing.splice(position - 1, 1)
    } else {
      this.chainRing = [];
      throw new Error();
    }
    return this;
  },

  reverseChain() {
    this.chainRing.reverse();
    return this;
  },

  finishChain() {
    let result = '';

    this.chainRing.slice(0, this.chainRing.length - 1).map((item, index) => {
      result += '( ' + item + ' )~~'
    });
    result += '( ' + this.chainRing[this.chainRing.length - 1] + ' )';

    this.chainRing = [];
    return result;
  }
};

module.exports = chainMaker;