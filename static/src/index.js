// Copyright (c) 2017 Carver Harrison All Rights Reserved.

// Stylesheets
require('./less/main.less')

// CommonJS
global.jQuery = require('jquery')
global.bootstrap = require('bootstrap')
global.Random = require('random-js')
global.Modernizr = require('browsernizr')
global.TweenLite = require('gsap')

// Setup jQuery
global.$ = jQuery

// Setup random-js
var random = new Random(Random.engines.mt19937().seedWithArray([0x12345678, 0x90abcdef]));

// Debug info
window.onload = function() {
  $('.use-lightbox').each(function() {
    $(this).replaceWith(
      $(`<a href="${$(this).attr('src')}" data-lightbox="${random.uuid4()}" data-title="${$(this).attr('alt')}"></a>`)
        .append($(this).clone())
    )
  })
  $('#debuginfo-toggle').click(function() {
    $('#debuginfo-content').toggle()
  })

  // Import lightbox2
  var lightbox2 = require('lightbox2')
  global.lightbox2 = lightbox2
}
