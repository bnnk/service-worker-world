self.addEventListener("install", (event) => {
  // The promise that skipWaiting() returns can be safely ignored.
  self.skipWaiting();
  // Perform any other actions required for your
  // service worker to install, potentially inside
  // of event.waitUntil();
});
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js"
);

workbox.routing.registerRoute(
  new RegExp("/local/(.*)"),
  ({ url, request, event, params }) => {
    console.log(request);
    return new Response("<h1></h1>", {
      headers: {
        "Content-Type": "text/html"
      }
    });
  }
);
