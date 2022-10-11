self.onmessage = messageEvent => {
	const { id, data } = messageEvent.data;
	const result = selectData(id, data);
	// ....,通过一系列处理之后，把最终的结果发送给主线程
	this.postMessage(result);
};

function selectData(id, allData) {
	for (let i = 0; i < allData.length; i++) {
		if (allData[i].id == id) {
			return allData[i];
		}
	}
}
