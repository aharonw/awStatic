(function($) {
  $.fn.extend({
    
    awStatic: function(options) {
      
      var defaults = {
        strokewidth: 20,
        strokeopacity: .2,
        evenColor: '#EEEEEE',
        oddColor: '#999999'
      }
      
      var options = $.extend(defaults, options);
      
      return this.each(function() {
        var o = options;
        var obj = $(this);
        var objId = obj.attr('id');
        var bl = parseInt(obj.css("border-left-width"), 10);
        var bt = parseInt(obj.css("border-top-width"), 10);
        var br = parseInt(obj.css("border-radius"), 10);
        var w = obj.width() - bl - bl;
        var h = obj.height() - bt - bt;
        
        var buildStatic = function () {
          var paper = new Raphael(document.getElementById(objId, w, h));
          
          var swipeLine = function () {
            paper.clear();
            var oneLine = paper.path("M 0 " + h + " l " + w + " 0").attr({'stroke-width': o.strokewidth,'stroke-opacity': o.strokeopacity,'stroke': '#000000'});
            oneLine.animate({path:"M 0 0" + " l " + w + " 0"}, 1000, swipeLine);
          }
          swipeLine();
        }
        
        buildStatic();
                
      });
      
    }
    
  });
}) (jQuery);