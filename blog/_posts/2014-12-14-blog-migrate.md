---
layout: post
title: 博客搬迁完毕与一些小心得
description: 好不容易迎来了假期，想着就把博客迁移一下，大概12月8号开工，到12月14号基本完事了，改动了不少东西，花了一些些时间，并导入了文章。写个文章mark一下这一时刻，同时记录一些心得体会。
permalink: /blog-migrate/
categories: [blog, 视·界]
tags: [博客, wordpress, github, jekyll]
date: 2014-12-14
--- 

## 念之起

### SAE慢
　之前的Blog放在**SAE** ( Sina App Engine )上，用**Wordpress**驱动。距离终究产生了时间，结果是我在**国外访问感觉挺慢**的，各种操作都得等一阵才有反应，比如增删改查，感觉不少时间浪费在了无谓的等待上。比我当初用的空间主机慢得多。事物就是这么矛盾，香港/美国/韩国/日本/国内主机无一不是在提高了一部分人的网速的前提下牺牲了另一部分人的体验。没钱搞CDN之类的东西，望梅也不止渴了。于是就想试试其他的方案。
　
PS：现在SAE上的也[能访问](http://dlyang.sinaapp.com)，但是停止更新了，同时换了网址以后找不到主题了，导致页面显示有问题，改了数据库也没弄回来，但是我也不想管了。先荒废着吧。

### Wordpress慢

　慢也不是SAE的问题，但是估计也要承担50%的责任吧，**另一部分就是Wordpress的**。原来的站点确实添加了不少东西，加了一些插件。那些插件都是我思前想后，最后决定要留下来的，但是仍然数量不少。比如想用LaTeX就得装个wp-latex插件，想用Markdown得装wp-markdown，有的功能或东西用别的blog平台可以轻松实现，但是wp基本就靠插件。同时SAE是不支持本地的io写入操作的，所以WP Super Cache就用不了了。每次都得从头开始加载，最后还是不给力。可能国内加载速度也还可以，但是没条件测试。

　综合以上两条观点，我还是决定**换个平台**。

### 出路

　我刚开始使用WP的时候是9月初，那时候就听Jeffrey说过**Github和Jekyll**，以及「静态化」等高级词汇，我那时候对各种网站相关的东西处于零基础状态，连Google都不知道从哪个词开始，不知道他们背后的工作原理。断断续续折腾了三个月，感觉入坑也挺深了，接触了好多新的名词，技术也有较大进步。这期间我找JY咨询过很多问题 ( 有大腿抱就是好啊 )，同是看过好多好多人的技术Blog，确实感觉山外有山人外有人。

　我在保持主站是wp的情况下，拿原来的空间主机和英文站域名进行了**若干平台的测试**，typecho，dropplets之类，同时还侧面了解了一些其他的，但是没上手尝试的，如结合印象笔记生成博客的，结合dropbox生成博客的，等等。最后看了一圈，各有特点，但是也总有不如人意的地方。

　后来我给自己Blog确立的**路线**是：
　
	1. 尽量不用数据库；
	2. 能用Markdown写东西；
	3. 网页体积要小；
	4. 全球各地访问速度都要较快，且不会被墙；
	5. 支持域名绑定；
	6. 方便各种修改，后台操作尽量简单；
	7. 移动端体验要好；
	8. 最好有搜索功能。

　数据库确实功能强一些，但是又多了一些我需要学习的东西，导致上手时间增加。移动端这点我比较关注，方便我之后的微信平台开发等等。满足这些条件的平台貌似也有几个，看来看去还是比较多人用的**Github + Jekyll**合我心意，还有大牛可以咨询，于是就确定为解决方案了。Github可能会有被墙，这是有前科的，总之也不可能十全十美了。

## 平台建立

　我只算是个**伪程序员**，本科专业只学C，自学过一点Java，什么Python，Ruby，Php，Javascript都处于围观状态。好在程序的许多逻辑上是相同的，了解了语法之后虽然不好写， 但是也能读懂个大概意思。扯远了，只是想说明我这里就不写什么技术细节班门弄斧了，把链接放上来如有兴趣可以自己点来看啦。

### 认识Git

　Git是版本控制程序，Github是基于Git建立的版本控制平台。由于分布式的版本控制，使得用户可以方便地提交代码的修改等等，同时Github后台自带了Jekyll程序，能够把特定的文件夹、文件处理并生成一个静态的网页/网站( 也就是只有html，css，和静态的js代码，不知道我理解的对不对 )。静态化的好处就是**加载快**，不占CPU资源啥的。Github引入这个的初衷大概是方便用户来发布简单的网站来介绍自己的开源代码，貌似最开始还是鼓励大家用这个特点来建设自己的个人Blog的，现在似乎是不鼓励也不反对。

　要用Github首先得了解Git。JY告诉了我个网站来学习，我个人感觉还不错，比官方的教程能够浅显易懂很多：

* [Git教程 - 廖雪峰](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

　这个教程能让你了解Git，**变成Github用户**，但是不会变成Github专家。但如果只是想用Github来建博客来说**已经足够了**。

### Jekyll本地安装

　我没有Mac和Linux，在PC用的是windows，可以看看这个网站：

* [Run Jekyll on Windows](http://jekyll-windows.juthilo.com/)

　大概要装的东西有：

* [Github for Windows](https://windows.github.com/)
* [Ruby DevKit](http://rubyinstaller.org/downloads/) ——记得添加ruby到path环境变量
* [Ruby ( 和上面一个网站 )](http://rubyinstaller.org/downloads/)

　装完这三个就打开命令行工具，用 `gem install jekyll` 来安装Jekyll就行了，同时还得安装个Markdown代码解析器，其他的具体的就参考下面的文章吧：

* [告别wordpress，拥抱jekyll0 - 阳志平](http://www.yangzhiping.com/tech/wordpress-to-jekyll.html)

　好多东西我也不是很熟练，就不「误导」别人了哈。建立本地的Jekyll主要是为了调试一些效果，不然就得修改一点东西就commit一次，也挺费劲的。

### 建站

　其实我想说**理论上**把博客托管在Github上完全不需要建立本地环境：下载一个[Github for windows](https://windows.github.com/)， 然后先在Github网站上注册用户，建立一个Repository，名叫「xxxxx.github.io」或者「xxxxx.github.com」 ( 记住只能变xxxxx这段，其他的别动 )，然后点击Repos界面右侧的Clone in Desktop，就会在Github for windows里面出现了。指定了文件夹以后就会在本地生成了。

　这时只要去别人的Github打包下载整个Repository解压到自己文件夹，修改后再上传到自己Repository就可以了，也可以fork到自己的Github里，然后改名字。

　最常用的几个命令： `git status`，`git add .`，`git commit -m "Say something"`，`git push`。没多复杂，很容易就记住了。

　——其实建站也没比装Wordpress复杂多少，至于后期调整的折腾程度，我觉得**两者也差不多**。

　貌似没啥可说的了，如果有什么问题也可以留言，我会尽我所能回答的。

### 主题选择

　期间看过很多人的Blog，各有风格，也有不少喜欢的。知乎有个帖子是关于Jekyll的模板的：

* [有推荐的简洁明快的jekyll模板吗？](http://www.zhihu.com/question/20223939)

　其实Jekyll官方页面也有很多，但是实在是太多了，筛选起来有点困难，要是有预览功能就好了：

* [Jekyll Sites](https://github.com/jekyll/jekyll/wiki/sites)

　里面见过不少，自己也找了一些觉得好看的：

* [yansu](http://yansu.org)
* [PainterLin](http://painterlin.com)
* [Urbain](http://urururbain.github.io/)
* [Peiwen Lu](http://peiwen.lu/)
* [Monika Ratan](http://monikaratan.in/)
* [Linjia Luo](http://ideex.name/)
* [Lanyon](http://lanyon.getpoole.com/)
* [Tabletop Whale](http://tabletopwhale.com/index.html)
* [Code Inventory](http://codeinventory.com/)
* [BeiYuu](http://beiyuu.com/)
* ……

　还有好多啦，最后和PainterLin一样，选用了yansu的，三栏式布局感觉索引更快，更有层次感。Clone以后进行了修改。在此**对他们表示感谢**。

　选主题的时候记得找那些_config.yml里面的**可配置项目比较全**的，少了的话自己都不知道哪些地方漏改了，最后显示出来效果还不给力。

### 细微调整

　Clone以后进行了一些调整：

* 改变了界面颜色
* 把评论插件从**Disqus**改变为**多说**，单击按钮显示评论
* 把文章左上角的**目录导航**改为在右侧的按钮
* 添加了**回到顶部**按钮
* 修改了左下角**图标的大小**，并增加了链接页面
* 修改了**滚动条样式**

### 2014.12.18 Update

之前的总有细节调整不太方便，决定换成BeiYuu的了。

## 迁移后的变化

### 没有管理员？

　虽然没有**线上**的管理员，但是网站依然还是自己管，在**线下修改**完后再上传来实现管理，算是Jekyll的一个特点吧。我挺喜欢这种感觉的。在StackEdit写完文章了还可以一键发布到Github上，非常过瘾。修改也十分方便，有时候甚至修改完都不需要马上提交，积累多几次以后一起提交就OK，挺方便的。

　貌似现在不能记录管理员的cookie啥的，于是自己上自己的网站也会在Google  Analytics上留下IP记录，把数据污染了，以前的WP是可以避开的。于是我只好在GA界面里添加了个排除自己IP的过滤器。

　现在基本上我对整个站点的代码都有比较清楚的认识，不会像面对WP那个文件那样这么无助，也算有点成就感吧。

### 速度快！

　没得话说，无论是访问速度，还是修改后生效的速度。不知道文章多了以后渲染的时间会不会变长，但是至少现在是相当快。毕竟模板就几个html，几个css和js。这样的话以后基本影响因素只有文章数量了。

　顺带测了一下速度，效果还是不错的，有个概念就ok，测试结果仅供参考。

* [Pingdom](http://tools.pingdom.com/fpt/#!/RYiIZ/dlyang.me)

　这是现在的分数

![Score1](http://lanternd.qiniudn.com/Pic4Post/blog-migrate/blogtest-1.jpg "Test Score1")

　这是和以前的对比：

![Score2](http://lanternd.qiniudn.com/Pic4Post/blog-migrate/blogtest-2.jpg "Test Score2")

　——所以说体积上就小了个数量级，不可同日而语，我也搞不清楚原来为什么这么大……

* [Web Page Test](http://www.webpagetest.org/result/141215_EC_XH7/)

![Score3](http://lanternd.qiniudn.com/Pic4Post/blog-migrate/blogtest-3.jpg?imageView/0/w/900/ "Test Score3")

　总之基本上大概就是秒开啦，用户体验还可以。

### 墓碑

　这里贴个图，纪念以前Wordpress的博客的样子，缅怀一下，继往开来。

![WP_OLD](http://lanternd.qiniudn.com/Pic4Post/blog-migrate/blogtest-4.jpg?imageView/0/w/900/ "Former Blog UI")

## 一些小心得

* 　Markdown写文章的时候，段首空格用**全角的空格**比较好。例如，这是半角空格「 」，这是全角空格「　」。全角空格会被当做一个正常的字来识别，占用的位置也是一整个，**显示效果更好**，更重要的是**不会受各种因素的制约**，比如排版，渲染器等等。例如有时候按了四个空格就变成pre标签了，要么影响到下一段的排列。现在把全文写完了，shift + space，挨个段落打上空格就完事，如画龙点睛一般，哈哈。

* 　如果想在文章里插入公式和数学符号，可以在文章开头加入以下代码：
```
<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});</script>
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
```
　——这个用的是Mathjax渲染，效果也蛮不错的。在文章[必须吐槽的美国单位制](http://dlyang.me/usa-unit/)和[AT&T的话费计算与iPhone 6的价格](http://dlyang.me/att-iphone-6/)中，我就用了这个渲染器，可以点这里看看具体的源代码：[usa-unit](https://raw.githubusercontent.com/LanternD/lanternd.github.io/master/_posts/Witness/2014-10-22-usa-unit.md) | [at-t](https://raw.githubusercontent.com/LanternD/lanternd.github.io/master/_posts/Witness/2014-09-22-att-iphone-6.md)。不但可以实现行内公式， 也可以实现分段的。只要把要渲染的东西放在两个「\$\$」之间就行了，行开头打上**空格**以后就可以**居中**了。具体的语法就得自己查了，网上特别多。我个人感觉**不用放到模板文件里**，毕竟不是什么文章都要写公式的，加载还要时间呢。具体就看个人需要了。

* 　在实践中发现的问题，其实也是我没把Github的官方说明当回事造成的：如果Repository的名字叫：「xxxx.github.io」或「xxxx.github.com」的话，站点的文件放在**master分支**就可以了，如果Repository的名字是**其他的**或者自己乱取的，应该得放在**gh-pages分支**，这样Github才会用Jekyll去渲染它。否则就长期**404**了。[仅仅是我自己no zuo no die发现的规律，可能样本不够多，不知道是不是准确的]

* 　网上Github和Jekyll的教程特别多，还是以搜索到的为主吧，我这里**有不及而无过之**。

* 　Github + Jekyll + Markdown一定要**做好前期的配置工作**，并最好确定一下自己的路线，且**不要动摇**。这里的路线是指：用什么渲染器 ( Markdown的，数学公式的和代码高亮的，etc. )，CSS类，等等。这些确定以后可以确保未来的代码、md文件等等都按这个格式来书写，否则哪天心血来潮换了个Markdown渲染器就发现文章里有各种东西要改，最后可能还是默默换回原来的了。当然，如果写的东西不是很复杂，只用到基础功能的话，哪个渲染器去处理效果应该都相似。

* 　至今不知道**表格**有什么好的方式来实现，Markdown自带的不是很给力，目前MD文件里的表格都是先在别的地方弄好，然后直接的粘贴html的代码，感觉不是很高效。哪天还需要增加一下表格的css让它好看点。

## 后记

　有个感受是爱写Blog的好多都是程序员，尤其是用Github托管的blog，同时他们写的技术文章总是占据博客里压倒性的比例…而好多我专业内使用的技术在网上却处于稀缺的状态，我感觉我未来也得适当贡献一些知识了。**生活Blog**的话，形式各异，用Github的貌似还不太多。

　博客几经变迁，但是我写博客的出发点是不变的。参考：[为什么写博客/建网站？](http://dlyang.me/y-blog/)。短期内暂时不折腾，好好写点东西吧。

　建设blog确实占用了我一些时间，不知道**我的Boss**会不会看到这个文章，希望他不要怪我哈……上个学期的科研进度基本还是跟上了的。下学期我会花更多时间在科研上，赶紧步入正轨。

参考源：

> [Git教程 - 廖雪峰](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
> 
> [Run Jekyll on Windows](http://jekyll-windows.juthilo.com/)
> 
> [告别wordpress，拥抱jekyll0 - 阳志平](http://www.yangzhiping.com/tech/wordpress-to-jekyll.html)

----------
