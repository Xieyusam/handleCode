   // serviceWorker.js
   const CACHE_NAME = 'cache-v1';
   // 需要缓存的文件
   const urlsToCache = [
     './test.css',
     './ServiceWorkerTest.js',
     './datapanl.json'
   ];
   self.oninstall = (event) => {
     event.waitUntil(
       caches
         .open(CACHE_NAME) // 这返回的是promise
         .then(function (cache) {
           return cache.addAll(urlsToCache); // 这返回的是promise
         })
     );
   };

   self.onfetch = (event) => {
    event.respondWith(
      caches
        .match(event.request) // 此方法从服务工作线程所创建的任何缓存中查找缓存的结果
        .then(function (response) {
          // response为匹配到的缓存资源，如果没有匹配到则返回undefined，需要fetch资源
          if (response) {
            return response;
          }
          return fetch(event.request);
        })
    );
  };