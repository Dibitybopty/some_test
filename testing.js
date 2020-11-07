# https://github.com/uBlockOrigin/uAssets/pull/3517
twitch-videoad.js application/javascript
(function() {
	if ( /(^|\.)twitch\.tv$/.test(document.location.hostname) === false ) { return; }
	var realFetch = window.fetch;
	window.fetch = function(input, init) {
		if ( arguments.length >= 2 && typeof input === 'string' && input.includes('/access_token') ) {
			console.log('found token')
			console.log(arguments)
			var url = new URL(arguments[0]);
                        url.searchParams.forEach(function(value, key) {
							console.log(value, key)
							console.log(url.searchParams)
							console.log(arguments[0])
							console.log(arguments)
                            //url.searchParams.delete(key);
                        });
			arguments[0] = url.href;
		}
		return realFetch.apply(this, arguments);
	};
})();
