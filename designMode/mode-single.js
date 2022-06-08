class LoginBox {
	constructor() {
		this.isLogin = false;
	}
	doLogin() {
		console.log(this.isLogin ? '已经登录' : '登录成功');
		this.isLogin = true
	}
}
// 利用闭包
LoginBox.getInstance = (function () {
	let Instance = null;
	return function () {
		return Instance || (Instance = new LoginBox());
	};
})();

let loginInstance1 = LoginBox.getInstance();
let loginInstance2 = LoginBox.getInstance();

loginInstance1.doLogin();
loginInstance2.doLogin();
console.log(loginInstance1 === loginInstance2)