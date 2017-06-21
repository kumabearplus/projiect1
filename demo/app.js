var $ = require('jquery')
var Carousel = require('./src/js/carousel')
var Exposure = require('./src/js/exposure')
var GoTop = require('./src/js/gotop')
var Barrels = require('./src/js/barrels')

Carousel.init($('.carousel'))

Exposure.init($('body'))

GoTop.init($('#footer'))

Barrels.init($('#fully-day .img-ct'),6)
$('#fully-day .btn').on('click',function(){
  Barrels.init($('#fully-day .img-ct'),6)
})