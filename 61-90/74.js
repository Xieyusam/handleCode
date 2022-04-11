// 滚动加载
// 原理就是监听页面滚动事件，
// 分析clientHeight、scrollTop、scrollHeight三者的属性关系。

// scrollHeight
// 的值等于该元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度。
// 没有垂直滚动条的情况下，scrollHeight值与元素视图填充所有内容所需要的最小值clientHeight相同。
// 包括元素的padding，但不包括元素的border和margin。

// clientHeight
// 这个属性是只读属性，对于没有定义CSS或者内联布局盒子的元素为0，
// 否则，它是元素内部的高度(单位像素)，包含内边距，但不包括水平滚动条、边框和外边距。
// clientHeight 可以通过 CSS height + CSS padding - 水平滚动条高度 (如果存在)来计算.

// scrollTop
// Element.scrollTop 属性可以获取或设置一个元素的内容垂直滚动的像素数。
// 一个元素的 scrollTop 值是这个元素的内容顶部（卷起来的）到它的视口可见内容（的顶部）的距离的度量。
// 当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。

window.addEventListener(
	'scroll',
	function () {
		let clientHeight = document.documentElement.clientHeight;
		let scrollTop = document.documentElement.scrollTop;
		let scrollHeight = document.documentElement.scrollHeight;
		if (clientHeight + scrollTop >= scrollHeight) {
			// do something
		}
	},
	false
);
