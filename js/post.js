$(document).ready(function(){

  $('pre').addClass('prettyprint linenums'); //添加Google code Hight需要的class

  // Add a small icon to all the external hyperlinks.
  $('.entry a').each(function(index,element){
    var href = $(this).attr('href');
    if(href){
      if(href.indexOf('#') == 0){
      }else if ( href.indexOf('/') == 0 || href.toLowerCase().indexOf('dlyang.me')>-1 ){
      }else if ($(element).has('img').length){
      }else{
        $(this).attr('target','_blank');
        $(this).addClass('external');
      }
    }
  });

  $.getScript('/js/prettify/prettify.js',function(){
    prettyPrint();
  });


  if(/css3-animation/.test(location.href)){
    $("head").append("<link rel='stylesheet' type='text/css' href='/css/css3-ani.css'/>");
    $.getScript('/js/css3-ani.js',function(){});
  }
  return 0;
  
});


