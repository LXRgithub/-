exports.install = function (Vue, options) {
    
	// encrypt密码加密
	Vue.prototype.encrypt = function encryptPwd(word) {
		var keyStr = 'k;)*(+nmjdsf$#@d';
		var key = CryptoJS.enc.Utf8.parse(keyStr);
		var srcs = CryptoJS.enc.Utf8.parse(word);
		var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
		return encrypted.toString();
	}
	// encrypt密码加密
	Vue.prototype.encrypt = function encryptPwd(word) {
		var keyStr = 'k;)*(+nmjdsf$#@d';
		var key = CryptoJS.enc.Utf8.parse(keyStr);
		var srcs = CryptoJS.enc.Utf8.parse(word);
		var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
		return encrypted.toString();
	}
};
