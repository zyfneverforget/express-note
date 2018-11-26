var $ = require('jquery')
var WaterFall = (function(){
  var $ct;
  var $items;

  function render($c){
    $ct = $c;
    $items = $ct.children();  //每个元素的子元素

    var nodeWidth = $items.outerWidth(true),  //ncludeMargin省略或者false，padding 和 border会被包含在计算中；如果true，margin也会被包含在计算中 
      colNum = parseInt($(window).width()/nodeWidth),
      colSumHeight = [];

    for(var i = 0; i<colNum;i++){
      colSumHeight.push(0);
    }

    $items.each(function(){
      var $cur = $(this);

      //colSumHeight = [100, 250, 80, 200]

      var idx = 0,
        minSumHeight = colSumHeight[0];

      for(var i=0;i<colSumHeight.length; i++){
        if(colSumHeight[i] < minSumHeight){
          idx = i;
          minSumHeight = colSumHeight[i];
        }
      }

      $cur.css({
        left: nodeWidth*idx,
        top: minSumHeight
      });
      colSumHeight[idx] = $cur.outerHeight(true) + colSumHeight[idx];
    });
  }


  $(window).on('resize', function(){
    render($ct);
  })


  return {
    init: render
  }
})();

module.exports = WaterFall

