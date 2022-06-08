// 策略模式

let salayStrategy = {
	A: function (salay) {
		return salay * 2;
	},
    B: function (salay) {
		return salay * 1.5;
	},
    C: function (salay) {
		return salay * 1;
	},
};

const useSalayStrategy = (level,salay) => {
    return salayStrategy[level](salay)
}

console.log(useSalayStrategy('A',1000))
console.log(useSalayStrategy('B',1000))
console.log(useSalayStrategy('C',1000))

