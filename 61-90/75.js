// 渲染几万条数据不卡住页面

// 渲染大数据时，合理使用createDocumentFragment和requestAnimationFrame，
// 将操作切分为一小段一小段执行。

// 利用宏任务异步渲染
setTimeout(() => {
	// 插入十万条数据
	const total = 100000;
	// 一次插入的数据
	const once = 20;
	// 插入数据需要的次数
	const loopCount = Math.ceil(total / once);
	let countOfRender = 0;
	const ul = document.querySelector('ul');
	function add() {
		// 文档片段
		const fragment = document.createDocumentFragment();
		// 插入数据
		for (let i = 0; i < once; i++) {
			const li = document.createElement('li');
			li.innerText = Math.floor(Math.random() * total);
			fragment.appendChild(li);
		}
		ul.appendChild(fragment);
		countOfRender += 1;
		loop();
	}
	function loop() {
		if (countOfRender < loopCount) {
			window.requestAnimationFrame(add);
		}
	}
	loop();
}, 0);
