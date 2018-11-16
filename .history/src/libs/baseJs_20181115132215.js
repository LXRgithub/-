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
	Vue.prototype.tableIndex = function tableIndex(tableData, fieldName) {
		$.each(tableData, (a, b) =>{      
            //添加序号，切换页面序号连增(注意函数采用ES6写法，否则this指向报错)
            this.$set(tableData[a], 'indexID', (this.currentPage - 1) * this.pageItem + a + 1)//序号计算(当前页码-1)*当页条数+变化的i值+1
        })
	}
};
