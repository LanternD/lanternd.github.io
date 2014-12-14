/* 控制导航按钮动作 */
function nav_click(is_show) {
  if (is_show) {
    /* 显示左侧aside */
    $('.aside')
      .addClass('visible-md visible-lg')
      .removeClass('hidden-md hidden-lg')
    /* 调整右侧内容 */
    $('.aside3')
      .removeClass('col-md-12 col-lg-12')
      .addClass('col-md-8 col-lg-8');
    /* 调整文字内容格式 */
    $('.aside3-content')
      .removeClass('col-md-10 col-lg-8 col-md-offset-1 col-lg-offset-2')
      .addClass('col-md-12');
  } else {
    /* 隐藏左侧aside */
    $('.aside')
      .removeClass('visible-md visible-lg')
      .addClass('hidden-md hidden-lg');
    /* 右侧内容最大化 */
    $('.aside3')
      .removeClass('col-md-8 col-lg-8')
      .addClass('col-md-12 col-lg-12');
    /* 修改文字排版 */
    $('.aside3-content')
      .removeClass('col-md-12')
      .addClass('col-md-10 col-lg-8 col-md-offset-1 col-lg-offset-2');
  }
}
/* 控制文章章节列表按钮 */
function content_click(is_show){
  if (is_show) {
    $('#content_table').show();
    $('#content_btn i').removeClass('fa-plus').addClass('fa-minus');
  } else {
    $('#content_table').hide();
    $('#content_btn i').removeClass('fa-minus').addClass('fa-plus');
  }
}

function content_effects() {
  //remove the asidebar
  $('.row-offcanvas').removeClass('active');
  if ($("#nav").length > 0) {
    $("#content > h2,#content > h3,#content > h4,#content > h5,#content > h6").each(function(i) {
      var current = $(this);
      current.attr("id", "title" + i);
      tag = current.prop('tagName').substr(-1);
      $("#nav").append("<div style='margin-left:" + 15 * (tag - 1) + "px'><a id='link" + i + "' href='#title" + i + "'>" + current.html() + "</a></div>");
    });
    $("pre").addClass("prettyprint");
    prettyPrint();
    $('#content img').addClass('img-thumbnail').parent('p').addClass('center');
    $('#content_btn').show();
  } else {
    $('#content_btn').hide();
  }
}

$(document).ready(function() {
  /* 控制左侧 aside 的动作 */
  $("#nav_btn").on('click', function() {
    isClicked = $(this).data('clicked');
    nav_click(isClicked);
    $(this).data('clicked', !isClicked);
  });

  $('body').on('click', '#content_btn' , function() {
    isClicked = $(this).data('clicked');
    content_click(!isClicked);
    $(this).data('clicked', !isClicked);
  });

  $(document).pjax('.pjaxlink', '#pjax', {
    fragment: "#pjax",
    timeout: 10000
  });

  $(document).on("pjax:end", function() {
    if ($("body").find('.container').width() < 992)
      $('#nav_btn').click();
    $('.aside3').scrollTop(0);
    content_effects();
  });

  $(".ds-thread").hide();

  $("#comment-toggle a").click(function(){
      $(".ds-thread").toggle();
  }); 

  $("#back-top").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
       $('#back-top').fadeIn();
    } else {
        $('#back-top').fadeOut();
      }
    });
    $('#back-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

  content_effects();
});

$(function(){ 
  var frame_w = $("#flickr-frame").width();//容器宽度 
  $("#flickr-frame").each(function(){//如果有很多图片，我们可以使用each()遍历 
  var frame_h = w / 1.5; //高度等比缩放 
  $(this).css({"width":w,"height": frame_h});//设置缩放后的宽度和高度 
  }); 
}); 

  //  $('body').on('click', '.show-commend', function() {
//    var ds_loaded = false;
//    var duoshuoQuery = {short_name:"dlyang"};
//    (function() {
//      var ds = document.createElement('script');
//      ds.type = 'text/javascript';ds.async = true;
//      ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
//      ds.charset = 'UTF-8';
//      (document.getElementsByTagName('head')[0] 
//       || document.getElementsByTagName('body')[0]).appendChild(ds);
//    })();
//  });