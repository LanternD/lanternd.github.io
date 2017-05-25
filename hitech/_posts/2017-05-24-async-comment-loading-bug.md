---
layout: post
title: 关于Disqus等评论系统异步加载时评论无法正常显示的Bug
description: 最近更新Blog时候遇上的问题。如果网址中带有Post或者Get请求时，评论无法正常加载，大概是由于JavaScript变量作用域不同导致。
permalink: /async-comment-loading-bug/
categories: [HiTech]
tags: [disqus, 评论, 异步加载, bug]
date: 2017-05-24 12:33:44
---

　本文均以Disqus为例，其他评论系统类似。另，本文提及的链接可能有时效性，以后不见得还管用。

## 问题重现

　鉴于我现在已经把这个Bug修复了，这个Bug在我这不太好重现。我先描述一下吧。

如果使用正常网址，比如

> https://dlyang.me/my-new-chromebook/

　进入一篇博文的时候，会发现评论的数量和评论本身加载都没有问题。然而一旦网址带有请求的时候，比如

> https://dlyang.me/my-new-chromebook/?foo=bar

　这时候评论就无法显示了，因为Disqus后台认为这是一篇新的文章，id是「/my-new-chromebook/?foo=bar」而不是「/my-new-chromebook/」。

　奇特的是，这种现象只有**异步加载**的时候才会产生。

　如前面所述，我的Blog暂时没法重现这个Bug，鉴于我Blog的主题是从BeiYuu.com继承来的，我决定拿他的站点来重现（他的主题换了，不过评论框还是一样）。

　比如访问：

> [http://beiyuu.com/carriage-return-line-feed-new-line-end-file](http://beiyuu.com/carriage-return-line-feed-new-line-end-file)

　这时候评论加载是没有问题的。

　换成

> [http://beiyuu.com/carriage-return-line-feed-new-line-end-file?foo=bar](http://beiyuu.com/carriage-return-line-feed-new-line-end-file?foo=bar)

　这时候就不行了，没有评论显示。

　也不难想象……如果你在带有「?foo=bar」的链接下评论了，下次再加载「?foo=bar」页面还能看到你的评论，而在**没有**「?foo=bar」的页面下却看不到。

　在自己Blog页面内跳转一般不会出现这种Get请求，而它一般在**从外部跳转进Blog的时候会出现**，比如从微信里点开链接，其实出现的频率不低。

## 异步加载的流程

　如上所述，这个Bug只会在异步加载的时候出现，所以需要分析一下流程。

　第一步当然是点击「加载XX评论」。

　这时候JS代码里面会把页面的URL和ID赋值给Disqus会调用的变量。所以问题出在给的URL和ID有问题。

　接着页面的JS会去加载你专属的embed.js，去加载评论框并展示。

- BeiYuu出问题的代码长大概下面这个[样子](https://github.com/beiyuu/Github-Pages-Example/blob/master/js/post.js)：

```js
window.disqus_shortname = 'your_short_name'; 
$('#disqus_container .comment').on('click',function(){
   $(this).html('加载中...');
   var that = this;
   $.getScript('http://' + disqus_shortname + '.disqus.com/embed.js',function(){$(that).remove()});
});
```

　出错的一个问题在于，他没有指定本页面的Disqus的Url和ID。

- 官方的代码长下面这个样子：

```html
<div id="disqus_thread"></div>
<script>
var disqus_config = function () {
  this.page.url = PAGE_URL;
  this.page.identifier = PAGE_IDENTIFIER; 
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
  s.src = 'https://EXAMPLE.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
</script>

```

- 我之前出错的代码是这样的：

```html
<div id="disqus_container">
  <div style="margin-bottom:20px" class="right"></div>
    <a href="#comment-disqus" class="comment" onclick="toggleDisqusComments('#disqus_container');"> 
      查看<strong>Disqus</strong>评论
    </a><span class="comment-count">（<a href="{{ site.url }}{{ page.id | remove:'/' }}/#disqus_thread" style="font-size:18px;">0</a>）</span>
<div id="disqus_thread"></div>
  
<script type="text/javascript">
  
function toggleDisqusComments(container){
  if(jQuery(container).has("iframe").length>0){
    var iframe_id = $(container+" iframe").attr("id");
    jQuery(container+" iframe#"+iframe_id).toggle();
    return;
  }
  var disqus_config = function () {
    this.page.url = '{{ site.url }}{{ page.id | remove:'/' }}/'; 
    this.page.identifier = '{{page.id | remove:'/' }}'; 
  };
  (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://lanternd.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
}
</script>
```

　基本上我的代码就是在官方代码外面套了一层壳而已。我既定义了变量`page.url`，又给了`page.identifier`结果还是不行。

## 失败的尝试

　中间尝试了不少方案，主要围绕Url的处理展开，比如

```html
<a href="{{ site.url }}{{ page.id }}/#comment-disqus" class="comment" onclick="toggleDisqusComments('#disqus_container');"> 
      查看<strong>Disqus</strong>评论
    </a><span class="comment-count">
```

　我把href强制指到了没有「?foo=bar」的链接去。但是这样点击以后加载的页面会回到窗口的顶端，用户体验很不好。

　后来还试了在JS代码里面把Url手动更新，修改`window.location.href`之类的全局变量。也还是会回到页面顶端。

## 解决问题

　我解决这个Bug纯属误打误撞，解决了以后才发现原因。

　其实是

```js
var disqus_config = function () {
  this.page.url = '{{ site.url }}{{ page.id | remove:'/' }}/'; 
  this.page.identifier = '{{page.id | remove:'/' }}'; 
};
```

　这段代码中，this的作用范围导致的。

　这段代码放在`toggleDisqusComments()`函数中的时候，`this`指代`toggleDisqusComments`这个函数，而放在外面的时候，指代的是`window`或者`Document`之类的。而`disqus_config `也沦为了局部变量而不是全局变量。

　换句话说，错误代码里面压根没有给Disqus提供该页面的正确Url和ID。

　更新以后（当时抱着试一试的心态而已）变成了：

```html
<script type="text/javascript">

var disqus_config = function () {
  this.page.url = '{{ site.url }}{{ page.id | remove:'/' }}/'; 
  this.page.identifier = '{{page.id | remove:'/' }}'; 
};

function toggleDisqusComments(container){
  if(jQuery(container).has("iframe").length>0){
    var iframe_id = $(container+" iframe").attr("id");
    jQuery(container+" iframe#"+iframe_id).toggle();
    return;
  }

  (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://your_disqus_id.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
}
</script>
```

　Bug修复后，即使在本地运行Jekyll，也就是在`127.0.0.1:4000`中访问页面评论的时候也可以加载原站点(https://dlyang.me)的Disqus评论了。

　我猜测如果`disqus_config `放在`toggleDisqusComments`里，把`this`改成`window`也可行。但没有尝试过。

## 最后

　我对前端并不是很了解，纯属瞎折腾玩的，学习也不系统。所以写出来的代码特别丑，还多Bug。另外，上面这几段关于`this`话的描述可能也是错的，不过代码是好使的。我现在现在都是做出一个控件，然后就在它下面加一段JavaScript代码，结构零散杂乱。最近了解到了Browserify、Webpack之类的前端坑。总有一天我会把各种JS、CSS集成到一两个文件里，不过不会是最近。我得休息一下了。

　最后的最后，还得感谢Lattesprit在过程中提供的帮助。

## 参考源

>  
> [1] [`this` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
> 
> [2] [Disqus universal installation code](https://lanternd.disqus.com/admin/universalcode/)
> 
> [3] 另一个可以复现Bug的地方，也是BeiYuu的主题：[有评论](http://alfred-sun.github.io/blog/2015/06/18/daemon-implementation/) vs [无评论](http://alfred-sun.github.io/blog/2015/06/18/daemon-implementation/?foo=bar)。