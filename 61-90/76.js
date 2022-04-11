const _isUrl1 = url => {
	return /^((http|https):\/\/)?(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+([A-Za-z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(url);
};

const _isUrl = url => {
	return /^((http|https):\/\/)?(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+([A-Za-z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(url);
};

let test = 'https://www.nowcoder.com/exam/oj?tab=%E5%89%8D%E7%AB%AF%E7%AF%87&topicId=274&page=1';
let test2 = 'www.nowcoder.com/exam/oj?tab=%E5%89%8D%E7%AB%AF%E7%AF%87&topicId=274&page=1';

console.log(_isUrl(test));
console.log(_isUrl(test2));
