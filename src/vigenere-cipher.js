const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

	constructor(idDirect) {
		this.idDirect = idDirect;
	}

	encrypt(message, key) {

    if (!message || !key) throw new Error();

		if (message.match(/[a-zA-Z]+/g) === null || key === null) return (this.idDirect === false) ? 
      message.split('').reverse().join('') : message;
	
		var keyWordEnc = getKeyWord(message, key);

		var encryptStr = '';
		var keyCount = 0;
		for (let i = 0; i < message.length; i++) {
			(message[i].match(/^[A-Za-z]$/)) ? 
				(encryptStr += String.fromCharCode(getCodeEnc(message[i], keyWordEnc[keyCount++]))) : 
				(encryptStr += (message[i]));
		}

		return (this.idDirect === false) ? encryptStr.split('').reverse().join('') : encryptStr;
	}

	decrypt(encryptedMessage, key) {

    if (!encryptedMessage || !key) throw new Error();

		if (encryptedMessage.match(/[a-zA-Z]+/g) === null || key === null) return (this.idDirect === false) ? 
      encryptedMessage.split('').reverse().join('') : encryptedMessage;

		var keyWordDec = getKeyWord(encryptedMessage, key);

		var decryptStr = '';
		var keyCount = 0;
		for (let i = 0; i < encryptedMessage.length; i++) {
			(encryptedMessage[i].match(/^[A-Za-z]$/)) ? 
				(decryptStr += String.fromCharCode(getCodeDec(encryptedMessage[i], keyWordDec[keyCount++])) ) : 
				(decryptStr += (encryptedMessage[i]));
		}

		return (this.idDirect === false) ? decryptStr.split('').reverse().join('') : decryptStr;
	}

}

function getKeyWord(message, key) {
	let keyWord = '';
	while (keyWord.length < message.match(/[a-zA-Z]+/g).join('').length) keyWord += key.toUpperCase();
	keyWord = keyWord.substring(0, message.match(/[a-zA-Z]+/g).join('').length);
	return keyWord;
}

function getCodeEnc(charA, charB) {
	var code = charA.toUpperCase().charCodeAt(0) + (charB.toUpperCase().charCodeAt(0) - 65)
	return (code > 90) ? code - (90 - 64) : code;
}

function getCodeDec(charA, charB) {
	return (charB.charCodeAt(0) - charA.charCodeAt(0) <= 0)
		? charA.charCodeAt(0) - charB.charCodeAt(0) + 65
		: 91 - (charB.charCodeAt(0) - charA.charCodeAt(0));
}

module.exports = VigenereCipheringMachine;