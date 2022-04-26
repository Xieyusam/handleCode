function mock_fetch() {
	return new Promise((resolve, reject) => {
		let num = Math.random();
		// let num = 0.6
		if (num > 0.5) {
			resolve(num);
		} else {
			reject(num);
		}
	});
}

// async function start() {
// 	let res = await mock_fetch();
// 	return res;
// }

// for(let i = 0; i < 10 ; i ++){
//     console.log(start())
// }

Promise.all(
	new Array(10).fill(1).map(async item => {
        try {
            let res = await mock_fetch();
		    return res;
        } catch (error) {
            throw new Error('你错了')
        }
	})
).then(res =>{
    console.log(res)
}).catch(err =>{
    console.log(err)
})

