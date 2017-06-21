define(['jquery'],function($){
  var Exposure = (function(){
    function _Exposure($ct){
      this.$ct = $ct
      this.init()
      this.bind()
    }
    _Exposure.prototype = {
      init: function(){
        var $picCt = this.$picCt = this.$ct.children('div').not('#navbar,#footer')
        var $active = this.$active = this.$ct.children('div').first().find('li')
      },
      bind: function(){
        var _this = this
        // this.$picCt.each(function(){
          
        //   console.log(this)
        //   if (_this.isVisible($(this))) {
        //     var index = $(this).index()
        //     _this.$active.eq(index).add('active')
        //   }
        // })

        $(window).on('scroll',function(){
          _this.$picCt.each(function(){
            // $(this).siblings().removeClass('active')
            // $(this).addClass('active')


            if (_this.isVisible($(this))) {
              var index = $(this).index()-1
              
              // console.log(this)

              _this.$active.removeClass('active')
              _this.$active.eq(index).addClass('active')
            }
          })

        })
      },

      isVisible: function($node){
        var windowHeight = $(window).height()
        var offsetTop = $node.offset().top
        var scrollTop = $(window).scrollTop()
        var nodeHeight = $node.outerHeight(true)
        if (scrollTop<offsetTop+nodeHeight&&scrollTop>offsetTop-windowHeight) {
          return true
        } else {
          return false
        }
      }

    }
    return {
      init: function($ct){
        new _Exposure($ct)
      }
    }
  })()
  return Exposure
  // Exposure.init($('body'))
})