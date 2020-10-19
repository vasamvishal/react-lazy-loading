// // // // Set this to true for production
// // // var doCache = false;
// // // // Name our cache
// var CACHE_NAME = 'my-pwa-cache-v1';
// self.addEventListener("activate", event => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys()
//       .then(keyList =>
//         Promise.all(keyList.map(key => {
//           if (!cacheWhitelist.includes(key)) {
//             console.log('Deleting cache: ' + key)
//             return caches.delete(key);
//           }
//         }))
//       )
//   );
// });

// // // The first time the user starts up the PWA, 'install' is triggered.
// self.addEventListener('install', function (event) {
//   // if (doCache) {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function (cache) {

//         // console.log("updates",cache);
//         const urlsToCache = [
//           "/",
//           "/home",
//           "./static/js/main.chunk.js",
//           "./static/js/bundle.js",
//           "./static/js/0.chunk.js",
//           "./static/js/0.chunk.js.map",
//           "./static/js/1.chunk.js",
//           "./static/js/5.chunk.js",
//           "./static/js/7.chunk.js",
//           "./static/js/5.chunk.js.map",
//           "./static/js/2.chunk.js",
//           "./static/js/3.chunk.js",
//           "./static/js/6.chunk.js",
//           "./static/js/4.chunk.js",
//           "./index.html",
//           "./static/media/empty-cart.fda6454a.png",
//           "./static/media/pexels-photo-1591447.6f3e0e72.jpeg",
//           "/login",
//           "/buyPrice/:id",
//           "/cart",
//           "manifest.json",
//           "src/images/download.png",
//           "./static/static/icons/icon-144x144.png",
//           "asset-manifest.json",
//           "http://localhost:8080/getAll",
//           // "main.919b8f8ef25f7ba5bea6.hot-update.js"
//           // "http://books.google.com/books/content?id=IqPW7mqq6GIC&printsec=frontcover&img=1&zoom=5%27",
//           // "http://books.google.com/books/content?id=GHt_uwEACAAJ&printsec=frontcover&img=1&zoom=5%27",
//           // http://books.google.com/books/content?id=4oFoDwAAQBAJ&printsec=frontcover&img=1&zoom=5%27"
//         ]
//         // console.log('cached');
//         // console.log(urlsToCache)
//         return cache.addAll(urlsToCache)
//       })
//   )
//   // };
// });

// // // When the webpage goes to fetch files, we intercept that request and serve up the matching files
// // // if we have them
// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//     caches.match(event.request).then(function (response) {
//       if (response) {
//           // console.log("response",response);
//           // console.log('I am a request with url: ',
//           event.request.clone().url
//         return response || fetch(event.request,{
//           mode:"cors",
//           headers:{
//             'Access-Control-Allow-Origin':'*'
//         },
//         });
//       }
//     })
//    );
// });

// // document.querySelector('.card').addEventListener('click', function(event) {
// //   console.log("dddddddd");
// // })


