// 使用Promise封装AJAX请求

function getJson(url) {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onreadystatechange = () => {
			if (this.readyState !== 4) {
				return;
			}
			if (this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		};
		// 设置请求失败时的监听函数
		xhr.onerror = function () {
			reject(new Error(this.statusText));
		};
		// 设置响应的数据类型
		xhr.responseType = 'json';
		// 设置请求头信息
		xhr.setRequestHeader('Accept', 'application/json');
		// 发送 http 请求
		xhr.send(null);
	});
}
