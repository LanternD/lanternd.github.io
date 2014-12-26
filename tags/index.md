---
title: 标签云
layout: page
date: 2014-12-26 14:46:12 +0500
permalink: /tags/
id: tags
---

<center><i class="fa fa-tags fa-3x"></i></center>

<div id='tag_cloud' style="width:90%;margin:30px 0px 30px 5%;line-height:2em;">
  {% for tag in site.tags reversed%}
  <a href="#{{ tag[0] }}" title="{{ tag[0] }}" rel="{{ tag[1].size }}">{{ tag[0] }}</a>
  {% endfor %}
</div>

<ul class="listing" style="list-style-type:none;margin-left:7%;margin-top:20px;">
  {% for tag in site.tags reversed%}
    <li class="listing-seperator" style="list-style-type:none;" id="{{ tag[0] }}">{{ tag[0] }}</li>
      {% for post in tag[1] %}
        <li class="listing-item" style="list-style-type:none;">
        <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
        <a href="{{ post.url }}" title="{{ post.title }}" class="listing-item-a">{{ post.title }}</a>
        </li>
    {% endfor %}
  {% endfor %}
</ul>

<script src="/js/jquery-1.7.1.min.js" type="text/javascript" charset="utf-8"></script> 
<script src="/js/jquery.tagcloud.js" type="text/javascript" charset="utf-8"></script>

<script language="javascript">
    $.fn.tagcloud.defaults = {
        size: {start: 14, end: 42, unit: 'px'},
        color: {start: '#ACE6E6', end: '#226666'}
    };
    $(function () {
    var recentColor, recentSize;
        $('#tag_cloud a')
            .tagcloud()
            .mouseover(function(){
                var thiz = $(this);
                recentColor = thiz.css('color');
                //recentSize = thiz.css('font-size');
                thiz.css({'color': '#226666'});
            })
            .mouseout(function(){
                $(this).css({'color': recentColor});
            });
    });
</script>

<div class="back-top" title="返回顶部">
    <button class="btn btn-primary">
      <i class="fa fa-lg fa-chevron-up" style="color:#0e0e0e"></i>
    </button>
</div>

<script src="/js/post.js" type="text/javascript"></script>
