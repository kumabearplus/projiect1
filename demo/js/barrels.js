define(['jquery'],function($){
  var Barrels = (function(){
    function _Barrels($ct,num){
      this.$ct = $ct
      this.num = num
      this.rowList = []        
      this.loadImg()
    }

    _Barrels.prototype = {
      loadImg: function(){
        var num = this.num
        var imgsUrl = this.getImgUrls(num)
        // console.log(imgsUrl)
        // imgs.push(this.getImgUrls(10))
        var _this = this

        for (var i = 0; i < imgsUrl.length; i++) {
          !function(){
            var img = new Image()
            img.src = imgsUrl[i]
            
            img.onload = function(){
              var imgInfo = {
                target: this,
                height: 200,
                width: 200*(this.width/this.height)
              }
              console.log(this)
              // this.height = 200
              // img.width = 200*(img.width/img.height)
              // console.log(img.width)
              _this.render(imgInfo)
              // console.log(imgInfo)

            }
          }()
        }
      },
      getImgUrls: function(num){
        var urls = [];
        for (var i = 0; i<num ;i++){
          src = 'https://unsplash.it/'+parseInt(Math.random()*100+400)+'/'+parseInt(Math.random()*100+200)+'/?random'
          urls.push(src)
        }
        return urls;
        // var width,height,urls = []
        // for (var i = 0; i < num; i++) {
        //   width = Math.floor(Math.random()*100+200)
        //   height = Math.floor(Math.random()*100+100)
        //   urls.push('https://unsplash.it/'+ width+'/'+height+'/?random')
        // }
        // return urls
      },
      render: function(imgInfo){
        // console.log(imgInfo)
        var clientWidth = this.$ct.width()
        console.log(clientWidth)
        var rowWidth = 0
        var rowHeight = 0
        // var lastImgInfo = imgInfo
        this.rowList.push(imgInfo)

        for (var i = 0; i < this.rowList.length; i++) {
          rowWidth = rowWidth+this.rowList[i].width
          clientWidth -=10
        }
        // console.log(this.rowList)
        if (rowWidth>clientWidth) {
          clientWidth +=10
          rowWidth -= imgInfo.width
          this.rowList.pop()
          var newRowHeight = 200*(clientWidth/rowWidth)
          this.layOut(newRowHeight)
          this.rowList = []
          this.rowList.push(imgInfo)
          // rowWidth = lastImgInfo.width
        }
        
      },
      layOut: function(newRowHeight){
        // var $imgCt = $('<div class="img-ct"></div>')
        var $imgArr = $('<div class="img-arr"></div>')
        $.each(this.rowList,function(idx,imgInfo){
          
          var $img = $(imgInfo.target)
          $img.height(newRowHeight)

          // this.height = newRowHeight
          console.log(this)
          $imgArr.append($img)
          
          console.log('-------')
          // console.log($img)
          // $imgCt.append($imgArr)

        })
        // $imgCt.append($imgArr)
        this.$ct.append($imgArr)
        console.log(this.$ct)

      }
    }
    return {
      init: function($ct,num){
        new _Barrels($ct,num)
      }
    }
  })()

  return Barrels
  // Barrels.init($('#fully-day .img-ct'),6)
  // $('.btn').on('click',function(){
  //   Barrels.init($('#fully-day .img-ct'),6)
  // })
})

