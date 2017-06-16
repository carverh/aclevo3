console.log('Aclevo 3.0 Created By Carver Harrison <https://carver.ml>')
require.config({
	shim: {
		bootstrap: {
			deps: ["jquery", "tether"],
			exports: "bootstrap"
		},
		jquery: {
			exports: ["$", "jQuery"]
		},
		lightbox: {
			exports: "lightbox"
		},
		tether: {
			exports: "Tether"
		},
		'random-js': {
			exports: 'Random'
		}
	},
	paths: {
		'zepto': 'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min',
		'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min',
		'bootstrap': 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min',
		'gsap': 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min',
		'random-js': 'https://cdnjs.cloudflare.com/ajax/libs/random-js/1.0.8/random.min',
		'app-loading': 'https://cdnjs.cloudflare.com/ajax/libs/app-loading/0.0.51/app-loading.min',
    		'lightbox2': 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.9.0/js/lightbox.min',
		'tether': 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min'
	}
});

require(['jquery', 'tether'], function(Tether) {
	window.Tether = Tether;
});

require(['bootstrap', 'gsap', 'random-js', 'lightbox2'], function(Random, $) {
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.use-lightbox').forEach(function(el) {
    var e = el;
    el.replaceWith(`<a href="${el.attributes.src}" data-lightbox="${el.attributes.alt}" data-title="${el.attributes.alt}"></a>`);
    el.innerHtml += e;
  });
  require('lightbox2');
});
