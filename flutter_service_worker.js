'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "eb05387f089529cb04d36a41b0ad0767",
".git/config": "b5d0283db009a18b93b53876edcde403",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "088aa9df1ce7dc68fa68d7d1d070f109",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "81005745454846bb79cc3c7c0c57658d",
".git/hooks/prepare-commit-msg.sample": "7dfe15854212a30f346da5255c1d794b",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "de9bc765ea34bac05b31a8025e232b83",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "86006ed9cc9cf373d0abc0e2a6a2a08c",
".git/logs/refs/heads/master": "86006ed9cc9cf373d0abc0e2a6a2a08c",
".git/logs/refs/remotes/origin/master": "5e55a069f9f59f20bab7ad0a2ddc1bff",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0c/04045338d2a21e08a920924b3d18ee203c8ba0": "81b264fc8093cf5d600703246b772082",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/7221f043bef06ac1679be1a5343d2fbc35671f": "2cc650e205609750084e012a93f4df16",
".git/objects/28/0714645d1887bff1f61a96e9a241626bbd2e7a": "79a726fecabe41ec07dfbcf1bab7def8",
".git/objects/45/e36d21e6896ef8e2a8aa723f49f04854857fec": "03251451c3c9639bb2e2ef5e478eb37f",
".git/objects/4f/a807388aa9955ea2ad4b88130f5e3f0090a130": "3bdc91eb20d0cf1afd3cd3f061a53ac2",
".git/objects/53/285cb47762c6777d4a7bf72933707858da54cb": "1565ef76fb543f805b467fe998770d17",
".git/objects/53/c00724e6f4a6864976caf56c318deed54011b5": "e31577b6779227d5447de4b33441b2a2",
".git/objects/74/c58578956dde60ef9e8ec20a408c658cb24040": "6098683c797d7d34423b8c65d144f3bb",
".git/objects/7d/2b87e2c9534c43254412c53af96b626010a59f": "a633cacf0a517d6992180d94bac48a19",
".git/objects/7e/157bc65655ab89542dbb4f6bd1601863db32b5": "9d580ca1728d576d60e355e413346227",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/4997d983ef0a956b8317e2174a71f4373ce28d": "b6b5261096e6bb4d2985db4094f36b20",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/815bbba5a4bba8f7c3ac7cb8efa3e18362e4b2": "a41bb0471b7ef4c247936be3608a0e20",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/afabb70f90029381791013af58aa2851ac7012": "f70221ef5234b02d25e5bd8046332b16",
".git/objects/8f/d3b136c33953871e64c2fbfbec5ab720cd2371": "a96279f4274cbbbe259d436f7fa5ff86",
".git/objects/91/b024ddaa0cd7430a02b48e59a2786cabf7367e": "c3b3b78b5e98df18ce10deb57c84ec34",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/97/829973fe12566010f1d19b418e5fad924a9ec0": "5db7937eed380209ebaa79461944716f",
".git/objects/98/ca351238e9bedab8bf5164f0f8a26240092646": "7bc2f379ce4cde54d46fa92ad9446aeb",
".git/objects/a5/82956673bc7618a0470f8f18f545bba1550178": "f8eac47c1e01c15716fd6558401f1495",
".git/objects/a6/efaf724aa963db0e97a6a99e4c736a4dff8593": "42107ec46f55bb3c3e336c87b08ed8cb",
".git/objects/ab/71fc05697639e9ace7d59dfb028f0f733175a3": "afdb67f1b7bdae4985365685eb719e46",
".git/objects/ac/4dc4f43e6ff8634b4156ce910964b973664ab0": "730a57dc3644e3cdb6465834abc4810a",
".git/objects/b1/27d068510531cb3edbc56bf985fb6e98e9464c": "fdc183207ef5551dd9912a0244e1c51c",
".git/objects/b3/0a4d45d687deb80bca6b06f892e2c5c459da19": "aa26c7c838de6a2de9ebbbe3a932a04f",
".git/objects/b5/ad8fb17d1a1961188ba111e3a9f418bde7e2fa": "8cc1a0dedff0573ce4dde2666bc232bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/3e4edf5520c672bd3c23e77b610177ff0cbb3a": "3d4cfd53522da4504edacd55c921de43",
".git/objects/c2/3ede44d9031ddf2f1a2661f2685ab3e921e2b8": "ed2e84f1446a1424131bee84635a970e",
".git/objects/d0/a5912947ceb27505c2661b95b18352688a4b73": "5c7526ce1c2c2423ec7c6459cc90b530",
".git/objects/d6/b1b02419122fe218bd25b39ad79cdfbe85afbc": "e7e5ded3439a11a6476b4132534416bf",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/f0/988d6e3f59548a1a51fb7c5ff275f88e69466b": "3fff983d453643a117449a8777870ac6",
".git/objects/fa/c9c61c4f252d5c31f6644288373c0515b4fb90": "18008f06a7821d9b6039ce2a0ed409d0",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "9b7a35cc05807838c72be94cf97ffe0d",
".git/refs/remotes/origin/master": "9b7a35cc05807838c72be94cf97ffe0d",
"assets/AssetManifest.json": "55660001be04c5fcba1e20846d8a89b1",
"assets/assets/fonts/Signatra.ttf": "7b67035b3b8dab514ecf09763597a947",
"assets/assets/images/activity_feed.svg": "6acda1cfe2383d587fed639acdb115f1",
"assets/assets/images/google_signin_button.png": "f3967439c8015d0ff28b5bc3d542e793",
"assets/assets/images/no_content.svg": "cbc8724a992b15ec4f477b412ec14120",
"assets/assets/images/search.svg": "4c2ea409128ab6a08075ddc6305dfa63",
"assets/assets/images/upload.svg": "546e50f50a81fbd16e384b8deafe11c7",
"assets/FontManifest.json": "6d4b40b1e17bcfc5147c6fc3f86bd017",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "12bea36c70720e891bc17c24e279cebf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "327ca73bb95b3a87b5a23bd52cb239c1",
"/": "327ca73bb95b3a87b5a23bd52cb239c1",
"main.dart.js": "035b113d013ab3ad8ce46bd8ec561d49",
"manifest.json": "215e910776441de6ac55619a1f172841"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
