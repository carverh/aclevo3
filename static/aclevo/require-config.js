console.log('Aclevo 3.0 Created By Carver Harrison <https://carver.ml>')
require.config({
	shim: {
		bootstrap: {
			deps: ["jquery"],
			exports: "bootstrap"
		},
		jquery: {
			exports: ["$", "jQuery"]
		},
		lightbox: {
			exports: "lightbox"
		}
	},
	paths: {
		'zepto': 'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js',
		'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/core.js',
		'bootstrap': 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js',
		'gsap': 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js',
		'random-js': 'https://cdnjs.cloudflare.com/ajax/libs/random-js/1.0.8/random.min.js',
		'app-loading': 'https://cdnjs.cloudflare.com/ajax/libs/app-loading/0.0.51/app-loading.min.js',
    		'lightbox2': 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.9.0/js/lightbox.min.js'
	}
});

require(['jquery', 'bootstrap', 'gsap', 'random-js', 'lightbox2'], function() {
	window.jQuery = window.$ = jQuery;
});
