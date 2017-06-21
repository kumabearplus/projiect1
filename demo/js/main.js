// define(['jquery','carousel','gotop','exposure','barrels'],function($,Carousel,GoTop,Exposure,Barrels){
//   Carousel.init($('.carousel'))
//   Exposure.init($('body'))
//   GoTop.init($('#footer'))
//   Barrels.init($('#fully-day .img-ct'),6)
//   $('#fully-day .btn').on('click',function(){
//     Barrels.init($('#fully-day .img-ct'),6)
//   })
// })

define(function(require,exports,module){
  var $ = require('jquery')
  var Carousel = require('carousel')
  Carousel.init($('.carousel'))
  var Exposure = require('exposure')
  Exposure.init($('body'))
  var GoTop = require('gotop')
  GoTop.init($('#footer'))
  var Barrels = require('barrels')
  Barrels.init($('#fully-day .img-ct'),6)
  $('#fully-day .btn').on('click',function(){
    Barrels.init($('#fully-day .img-ct'),6)
  })
})

