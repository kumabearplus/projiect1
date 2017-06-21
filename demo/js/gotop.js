define(['jquery'],function($){
  var GoTop = (function(){
    function _GoTop($ct){
      this.$ct = $ct
      this.timer = null
      this.target = $('<button class="btn">回到顶部</button>')
      this.target.css({
        position: 'fixed',
        right: '50px',
        bottom: '50px',
        display: 'none',
        padding: '10px 5px'
      })
      this.createNode()
      this.bindEvent()
    }
    _GoTop.prototype = {
      createNode: function(){
        this.$ct.append(this.target)
      },
      bindEvent: function(){
        var _this = this
        $(window).on('scroll',function(){
          if ($(window).scrollTop()>100) {
            _this.target.css('display','block')
          } else{
            _this.target.css('display','none')
          }
        })
        this.target.on('click',function(){
            var _this = this
            clearInterval(this.timer);
            // var now = $(window).scrollTop()
            this.timer = setInterval(function() {
                          var now = $(window).scrollTop();
                          var speed=(0-now)/10;
                          speed=speed>0?Math.ceil(speed):Math.floor(speed);
                          if(now<1){
                            clearInterval(_this.timer);
                          }
                          document.documentElement.scrollTop=now+speed;
                          document.body.scrollTop=now+speed;
                        }, 30)
          })
      }

    }
    return {
      init: function($ct){
        new _GoTop($ct)
      }
    }
  })()
  return GoTop
  // GoTop.init($('#footer'))
})