(function($) {

  $.fn.tagcloud = function(options) {
    var opts = $.extend({}, $.fn.tagcloud.defaults, options);
    tagWeights = this.map(function(){
      return $(this).attr("rel");
    });
    tagWeights = jQuery.makeArray(tagWeights).sort(compareWeights);
    lowest = tagWeights[0];
    highest = tagWeights.pop();
    range = highest - lowest;
    if(range === 0) {range = 1;}
    // Sizes
    if (opts.size) {
      fontIncr = (opts.size.end - opts.size.start)/range;
    }
    // Colors
    if (opts.color) {
      colorIncr = colorIncrement (opts.color, range);
    }
    return this.each(function() {
      weighting = $(this).attr("rel") - lowest;
      if (opts.size) {
        $(this).css({"font-size": opts.size.start + (weighting * fontIncr) + opts.size.unit});
      }
      if (opts.color) {
        $(this).css({"color": tagColor(opts.color, colorIncr, weighting)});
      }
    });
  };

  $.fn.tagcloud.defaults = {
    size: {start: 14, end: 18, unit: "pt"}
  };

  // Converts hex to an RGB array
  function toRGB (code) {
    if (code.length == 4) {
      code = jQuery.map(/\w+/.exec(code), function(el) {return el + el; }).join("");
    }
    hex = /(\w{2})(\w{2})(\w{2})/.exec(code);
    return [parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];
  }

  // Converts an RGB array to hex
  function toHex (ary) {
    return "#" + jQuery.map(ary, function(i) {
      hex =  i.toString(16);
      hex = (hex.length == 1) ? "0" + hex : hex;
      return hex;
    }).join("");
  }

  function colorIncrement (color, range) {
    return jQuery.map(toRGB(color.end), function(n, i) {
      return (n - toRGB(color.start)[i])/range;
    });
  }

  function tagColor (color, increment, weighting) {
    rgb = jQuery.map(toRGB(color.start), function(n, i) {
      ref = Math.round(n + (increment[i] * weighting));
      if (ref > 255) {
        ref = 255;
      } else {
        if (ref < 0) {
          ref = 0;
        }
      }
      return ref;
    });
    return toHex(rgb);
  }

  function compareWeights(a, b)
  {
    return a - b;
  }

})(jQuery);

$( document ).ready(function() {

  function tag_get_post(tag_name){
    console.log(tag_name);
    $.ajax({
          url: '/tags.json',
          dataType: 'json',
      })
      .done(function(tag_post){
        wanted_post = tag_post.map(function(tag){
          let name = tag.name, post = tag.post;
          if (name == tag_name){
            var tmpl = '<h3>属于该Tag的文章</h3>';
            tmpl += '<ul class="listing" style="list-style-type:none;margin-left:7%;margin-top:20px;">';
            for (var i = 0; i < post.length; i++) {
              tmpl += '<li class="listing-item" style="list-style-type:none;"><time datetime="'+ post[i].date +'">' + post[i].date + '</time>';
              tmpl += '<a href="' + post[i].url + '" title="' + post[i].title + '" class="listing-item-a">' + post[i].title + '</a></li>';
            }
            result_container = '#tag-post-container';
            if ($(result_container).has('ul .listing')){
              $(result_container).empty();
            }

            $(result_container).append($(tmpl));
            var scroll_num = $(result_container).offset().top;
            $('body, html').animate({scrollTop: scroll_num - 25}, 400, 'swing');
          }        
      });
    });

  }

  $('#tag_cloud a').click(function(){
    var tag_name = this.title;
    tag_get_post(tag_name);
  });

  if(window.location.hash != ''){
    console.log("The path contains a tag, process it.");
    var tag_name = window.location.hash.slice(1);

    tag_get_post(tag_name);
  }else{
    console.log("it is a root path for the tag page, do nothing");
  }
});
