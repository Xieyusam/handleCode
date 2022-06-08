class Question {
	constructor(index, name) {
		this.index = index;
		this.name = name;
	}
	show() {
		console.log(`${this.index}.${this.name}`);
	}
}
// 简答
function createInputQuestion(index) {
	return new Question(index, '简答题');
}
// 多选
function createMultipleQuestion(index) {
	return new Question(index, '多选题');
}

// 单选
function createSingleQuestion(index) {
	return new Question(index, '单选题');
}

let q1 = createInputQuestion(1)
let q2 = createMultipleQuestion(2)
let q3 = createSingleQuestion(3)
q1.show()
q2.show()
q3.show()


