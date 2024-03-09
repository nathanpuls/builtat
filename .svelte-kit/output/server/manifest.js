export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","built-logo.jpeg","favicon/android-chrome-192x192.png","favicon/android-chrome-512x512.png","favicon/apple-touch-icon.png","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon.ico","favicon/site.webmanifest","favicon-old.ico","favicon-old.png","favicon-white-bg.png"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.ECJb3Z8h.js","app":"_app/immutable/entry/app.qEv3qXLi.js","imports":["_app/immutable/entry/start.ECJb3Z8h.js","_app/immutable/chunks/entry.1H7hEwv-.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/paths.pKCLgvaU.js","_app/immutable/entry/app.qEv3qXLi.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.JshZZgqg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
