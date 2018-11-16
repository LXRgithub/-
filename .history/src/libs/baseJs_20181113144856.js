exports.install = function (Vue, options) {
    
	// 验证码
	Vue.prototype.createCode = function createCode(varCode, idDom){ 
        varCode = "";  
        var codeLength = 4;//验证码的长度  
        var checkCode = document.getElementById(idDom);  
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
        'S','T','U','V','W','X','Y','Z');//随机数  
        for(var i = 0; i < codeLength; i++) {//循环操作  
         var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
         varCode += random[index];//根据索引取得随机数加到code上  
       }  
       console.log('checkCode',idDom,checkCode)
       checkCode.value = varCode;//把code值赋给验证码  
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
