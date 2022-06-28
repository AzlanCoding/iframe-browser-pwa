"use strict";

var SW_VER = 'SW0003';

self.oninstall = event => {
	console.log(SW_VER + ': oninstall');
	event.waitUntil(caches.open(SW_VER)
		.then(cache => {
				return cache.addAll([
					'index.html',
					'index.js',
					'sw.js',
				]);
		})
	);
}

self.onactivate = event => {
	console.log(SW_VER + ': onactivate');
	event.waitUntil(caches.keys()
		.then(keys => {
			return Promise.all(keys.map(key => {
				if (key != SW_VER) return caches.delete(key);
			}));
		})
		.then(() => {
			return self.clients.claim();
		})
	);
}

self.onfetch = event => {
	console.log(SW_VER + ': onfetch = ' + event.request.url);
	event.respondWith(caches.match(event.request)
		.then(cached => cached || fetch(event.request))
	);
}

self.onmessage = event => {
	console.log(SW_VER + ': onmessage = ' + event.data);
	if (event.data === 'skip-waiting') return skipWaiting();
	if (event.data === 'get-version') return event.ports[0].postMessage(SW_VER);
}

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('Deleting cache : ' + keyList[i] );
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
var GHPATH = '/iframe-browser-pwa';
var APP_PREFIX = 'iframebrowser_';
var VERSION = 'version_007';
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/css/styles.css`,
  `${GHPATH}/img/icon.png`,
  `${GHPATH}/js/app.js`
]

var CACHE_NAME = APP_PREFIX + VERSION
self.addEventListener('fetch', function (e) {
  console.log('Fetch request : ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { 
        console.log('Responding with cache : ' + e.request.url);
        return request
      } else {       
        console.log('File is not cached, fetching : ' + e.request.url);
        return fetch(e.request)
      }
    })
  )
})

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Installing cache : ' + CACHE_NAME);
      return cache.addAll(URLS)
    })
  )
})
