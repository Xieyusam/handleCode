// var allData = Array.from(
// 	new Array(1000000).fill(1).map((item, index) => {
// 		return {
// 			id: index,
// 			name: '这是' + index
// 		};
// 	})
// );
// console.log(allData);

// function workerSelect(id,data){
//     const worker = new Worker('./worker.js'); 
//     worker.onmessage = function (messageEvent) {
//         console.log(messageEvent.data)
//     }
//     worker.onmessageerror = function (messageEvent) {
//         console.log(messageEvent)
//     }
//     worker.postMessage({ id,data });
// }

// function selectData(id) {
//     for(let i = 0 ; i < allData.length; i++ ){
//         if(allData[i].id == id ){
//             return allData[i]
//         }
//     }
// }

// function clickhandler_search() {
//     let selectValue = document.getElementById('input-line').value
//     // console.time('耗时');
//     // let data = selectData(selectValue)
// 	// console.timeEnd('耗时');
//     // console.log('找到了'+JSON.stringify(data) )
//     workerSelect(selectValue,allData)
// }

   // index.js
   if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register('./ServiceWorkerTest.js')
        .then(
          function (registration) {
            console.log(
              'ServiceWorker registration successful with scope: ',
              registration.scope
            );
          },
          function (err) {
            console.log('ServiceWorker registration failed: ', err);
          }
        );
    });
  }

let imgtest = new Image() 
imgtest.src = "./datapanl.json"