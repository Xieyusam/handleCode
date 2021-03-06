// 写版本号排序的方法
// 题目描述:
// 有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。
// 现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']

let arr = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'];

arr.sort((a, b) => {
	let arr1 = a.split('.');
	let arr2 = b.split('.');
	while (arr1.length || arr2.length) {
		if (!arr1.length) {
			return false;
		}
		if (!arr2.length) {
			return true;
		}

		let head1 = arr1.shift();
		let head2 = arr2.shift();
		if (head1 !== head2) {
			return head2 - head1;
		}
	}
});

// arr.sort((a, b) => {
//     let i = 0;
//     const arr1 = a.split(".");
//     const arr2 = b.split(".");
  
//     while (true) {
//       const s1 = arr1[i];
//       const s2 = arr2[i];
//       i++;
//       if (s1 === undefined || s2 === undefined) {
//         return arr2.length - arr1.length;
//       }
  
//       if (s1 === s2) continue;
  
//       return s2 - s1;
//     }
//   });


console.log(arr);
// ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']
