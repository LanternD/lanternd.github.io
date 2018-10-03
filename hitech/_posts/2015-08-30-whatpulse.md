---
layout: post
title: What Pulse? WhatPulse.
description: 【较多图】来说个人们不常用的软件，WhatPulse。
permalink: /whatpulse/
categories: [HiTech]
tags: [软件, whatpulse, 键盘, 鼠标, 按键]
date: 2015-08-30 16:14:00
--- 

## 开门见

　WhatPulse是一个统计**鼠标点击，键盘按键，开机时间和网络访问量**的软件。用户可以自己选择启用哪个模块。

　WhatPulse官方网站：[whatpulse.org](http://whatpulse.org/)

　除了我自己的图片和数据以外，本文其他信息和数据来自其官方网站。

## 回首见

　第一次知道这个软件是在刷知乎日报，有个问题是「[在以拼音为汉字输入方式时，各字母的使用频率是怎样的？](http://daily.zhihu.com/story/4213946)」。

　我一开始以为说的会是找一篇文章，转换成拼音然后统计，原问题回答下[确实有人这么干](http://www.zhihu.com/question/23111438)。然而最高票回答竟然还真统计了，用的就是WhatPulse。

　后来我自己也在我的笔记本装了它，大概是2014年10月，后来没多久有了台式机，就继续在台式机上用了，今年年初的时候就想写个日志来着，但是想着拖久一点还能统计出更多数据，就一直没动笔。结果后来有一天WhatPulse告诉我数据库有问题，问我要不要重新配置……我以为把旧数据留着是天经地义的事，结果我还是Naive了。目前我只有最近三个月的数据了。台式机上累计按键15万左右。要知道以前我是有近200万的按键量的。

## 数据见

　虽然不幸只有最近三个月的数据，不过统计规律还是有的。更长的时间也仅会带来微小的变化。

![account-info]({{site.img-hosting}}/Pic4Post/whatpulse/account-info.jpg "账户信息")

　这个是总体的账户信息，是我使用WhatPulse以来生成的数据，由于我在三台电脑安装过，这个是三台电脑的统计总数，台式机占据了其中的较大比例。按键225万，鼠标点击82万。上传和下载功能在我用了一段时间以后关掉了，数据一直没涨。Uptime好像也是这样。

![key-heat-map]({{site.img-hosting}}/Pic4Post/whatpulse/key-heat-map.jpg "键盘区热图")

　这个是台式机现在记有的所有按键的总的热图。毫无疑问空格键一马当先。每个按键次数的具体数值在下方有另外的图表示。

![mouse-heatmap]({{site.img-hosting}}/Pic4Post/whatpulse/mouse-heatmap.jpg "鼠标点击热图")

　这个是鼠标在屏幕点击的热图，可以看出来我喜欢在屏幕中间的左侧操作。右下区域几乎是空白。由于我的进度条放在顶部，所以上面会有一些红点，另外就是浏览器有时候点击标签，导致上面那片区域宽度比较大。至于中间的红色区域我觉得还是浏览网页的时候点击造成的。写代码的时候还是用键盘多一些。

![key-count]({{site.img-hosting}}/Pic4Post/whatpulse/key-count.jpg "按键数Top 50")

　上面是按键频率Top 50的键，空格键16000次，大概占总的10%，元音里面用得最多的是「I」，而非元音里面用得最多的是「N」，这大概是由于拼音里面有很多的鼻音。

![letter-count]({{site.img-hosting}}/Pic4Post/whatpulse/letter-count.jpg "按字母顺序排列")

　上图是按字母表的顺序排列的按键频率。好像不是很直观，于是给它排序一下。

![letter-count-sort]({{site.img-hosting}}/Pic4Post/whatpulse/letter-count-sort.jpg "以按键次数排列")

　按键次数最少的是「Q」，这个可能有点出乎意料，但其实我也不知道该是哪个键合适。由于很少在台式机玩FPS和赛车游戏，「WASD」中的W按键频率偏低。如果经常打中文的话，不同的人一般排在前三的按键会是一样的，即「I」、「A」、「N」。

![key-combinations]({{site.img-hosting}}/Pic4Post/whatpulse/key-combinations.jpg "按键组合频率")

　快捷键分布则比较均衡，前八的按键差距都不是很大。用得最多的是「撤销」操作。ctrl+shift+F10这种扭曲的操作是Python编程的时候执行运行操作用的。

![num-count]({{site.img-hosting}}/Pic4Post/whatpulse/num-count.jpg "数字键频率")

　数字键好像也没有什么特别的规律。上图最右的「10」应为「0」。输入法如果是第一个候选词的话，按空格就能选到，所以好像「2」占了数字键的极大比例。个人不太常用省略号，所以「6」键的频率不高。

![button-usage]({{site.img-hosting}}/Pic4Post/whatpulse/button-usage.jpg "鼠标各键点击次数")

　鼠标操作也不难想象，必然还是左键用得多。滚轮操作不知道WhatPulse是如何统计的，我自己很少把中键按下去，这个979的数字我也不知道怎么来的。由于我的鼠标还有几个辅助按键，比如前进后退什么的，所以「Other」也在按键中占据一席之地。

![applications]({{site.img-hosting}}/Pic4Post/whatpulse/applications.jpg "不同应用的按键次数分布")

　最后来看看我在不同应用中的按键频率。Google Chrome一马当先，甩了第二名QQ不知几条街。至于用来干啥……可能写博客为主吧。QQ偶尔用用，其实打字已经不算很多了。之前数据库里第一第二名的差距不是很大的。往后几个都是写代码写文档的。Ori则是我的朋友在我电脑上玩的时候留下的。由于是个键盘操作的横版动作游戏，所以好像几乎不需要按鼠标。

　其他的应用就随便看吧，好像也没什么特别的。

## 宏观见

　WhatPulse虽然是个非盈利组织，不过好像也有会员制，会员能看到更多的统计信息。而由于世界上有N多人都在用WhatPulse，所以这些数据不利用起来岂不是浪费了？所以官网还有相应的[统计信息](http://whatpulse.org/stats/)。

　这里就捡两个有代表性的出来说说。

![stat-country]({{site.img-hosting}}/Pic4Post/whatpulse/stat-country.jpg "各国输入数据统计")

　由于Markdown做个表格太费劲，我就直接拿在[官网的截图](http://whatpulse.org/stats/countries/input/)凑数了。排在第一的是美国，其次是荷兰，德国，英国。美国的数据这么多当然也是因为用户多。欧洲这边不知道是因为这些地方电脑和网络比较普及还是那里的人喜欢装WhatPulse这类的统计软件。他们没有给出人均的数据，个人认为人均的更有代表性。中国排在32，按键数和鼠标点击数都只是第一名的零头。当然这个软件在中国不是很普及就是了。中国旁边又是熟悉的印度。

![stat-app]({{site.img-hosting}}/Pic4Post/whatpulse/stat-app.jpg "应用统计")

　这图是[各种程序的统计信息](http://whatpulse.org/stats/apps/)。默认是按照使用时间来排序的。Google Chrome不愧是最好用、普及最广的浏览器，单单是使用WhatPulse的用户就累计有3139年的时间在用它。排在前三的都有很强的互联网因素。往后就是各种游戏了。简单目测来看，鼠标按键最多的是League of Legends（英雄联盟），其次才是Chrome。

　需要说明的是，由于WhatPulse用户本身的偏差，**这些数据没法反映全球或者中国的用户的使用习惯，仅供参考**。

## 尾声见

　以上就是我用WhatPulse大半年来的一些见闻和总结。

　由于WhatPulse会一直监听键盘和鼠标操作，所以本身会占用一些资源，可能长期会有0.8%的CPU占用率和25M左右的内存占用。其实并不是很多，但是我知道很多人思维还停留在要用尽全力节约CPU和内存，能少运行东西就少运行东西的阶段。如果这样的话那我还是不建议安装的。

　另一个是隐私问题，我相信这个软件会有明确的条款和方法保护用户隐私。比如可以在选项中设置数据不公开不用于总的统计。用了这么久好像也没有账号被盗的情况，如果担心密码等信息泄露或者不放心的话就还是别玩了。

　除了上面两种情况，我觉得用一下WhatPulse还是利大于弊的，也是个了解自己的习惯的机会。

　大家统计愉快。
