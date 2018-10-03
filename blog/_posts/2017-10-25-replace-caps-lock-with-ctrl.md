---
layout: post
title: 用Ctrl键代替Caps Lock键
description: 最近在折腾Emacs，「众」所周知，Emacs非常依赖键盘左下角的Ctrl。Emacs许多教程的入门建议其中一条就是把Cap Locks键当做Ctrl用。我怎么就没有早点想到呢。
permalink: /replace-caps-lock-with-ctrl/
categories: [Blog, 视·界]
tags: [键盘, 按键, 快捷键, Emacs]
date: 2017-10-25 22:34:56
---


# 　


## 前言

　折腾Emacs除了为了提高编程效率以外还为了实现文字编辑工作的大一统。纯文本、Markdown、LaTeX，这些都是我平时会用到的文本输出修饰（Markup）语言，除了格式外我还在各种平台书写东西：Evernote，Google Docs和StackEdit等等，本地有Sublime Text负责日常文本小修改。

　事实上我用了很多时去间学习和使用各种工具，用不同的软件处理不同的文件，如TeXStudio写LaTeX等等。那么到底有没有必要把他们统一起来呢？哪个更好我没法下结论，但是首先来尝试一下不同的可能性再说。

　Emacs有个神奇的Org mode（大概是Organization的意思吧），基本可以实现了对文字编辑工作的统一工作，还可以日程管理和GTD（Get things done），用过的人都赞口不绝。上面提到的各种Markup语言都可以用Org-mode编辑，最后轻松导出成其他格式。这篇文章是我第一次尝试用Org-mode写中文的Markdown文本。之前则是在英文Markdown模式通过不断改进代码和修复小问题，最终输出了合乎期望的 `.md` 文件。

　然而Emacs的上手难度复杂，学习曲线奇异，在中文Blog不太想写太技术性的东西，所以这里没打算介绍我的学习历程。感兴趣可以看看[英文Blog](https://en.dlyang.me)。


## 后言舞池

　主要想说说长期以来被我忽视的Caps Lock键。Caps Lock在角落偏安一隅。对我来说，他就像一座孤岛，被一群高频按键所围绕。

![img]({{site.img-hosting}}/Pic4Post/replace-caps-lock-with-ctrl/what-pulse-caps-lock.png "WhatPulse!截图")

　之前[日志](file:///d:/whatpulse/)提到过，我在用WhatPulse这个软件统计按键使用情况。之前数据库出了点问题，导致之前的统计数据没了，本来我应该有773万次按键统计，可是目前只保留了80万左右（见上图右上角）。

　那么这80万次按键之中，有多少次按到了Caps Lock呢？仅有64次！而旁边的 `a` 则超过了38k次，而Tab也有2.8k次。所以，Caps Lock存在的意义何在？

　如果打字熟练的话，用 `Shift` 按 `SUNDAY` 这样的纯大写词语也不是难事，而这种词半年都打不出一个。除非有什么奇怪的打字习惯（我认识一朋友，每次打大写字母先要按Caps Lock切换成大写输入，打完再按一次切回去，从来不按 `Shift` ……），那么基本上是没有按Caps Lock的必要的。

　下一步，可以感受一下我们常用的复制粘贴剪切的快捷键： `Ctrl+c` 、 `Ctrl+v` 、 `Ctrl+x` 。有没有觉得手腕得扭一下才能按得到？但是如果用Caps Lock代替了Ctrl键呢？有没有觉得特别符合人体工学？！

　所以我才有了一种想见恨晚的感觉， **为什么从来没有想过用Caps Lock代替了Ctrl键呢？**


## 更换方法

　这种事前人早就总结好了，可参考文章[EmacsWiki: Moving The Ctrl Key](https://www.emacswiki.org/emacs/MovingTheCtrlKey#toc14)。我已经直接用锚点跳到Windows如何设置了。因为对于用Linux的朋友来说，这好像不是什么难事，而OS X可以在设置里直接改。

　当然Windows下也有很多不同的方法：

-   Ctrl2cap
-   AutoHotkey
-   注册表
-   KeyMapper
-   SharpKeys

　对比了一下我觉得还是第一种简单粗暴。我们可以在[这里](https://docs.microsoft.com/en-us/sysinternals/downloads/ctrl2cap)下载到这个软件，可以看到这个软件已经有11年的历史了。原理和改注册表类似。用 `PowerShell` 或者 `cmd` 直接执行就可以（双击似乎没法传递参数）。注意需要重启才能生效。

　大概就是这些东西。即使不用Emacs，我觉得做这样一项调整也是值得的，会让小指舒服不少。

---

　WhatPulse还能帮忙记录按 **快捷键** 的数据，我当年的快捷键那是各种组合肆意变换，现在只剩下Ctrl开头的为主了……这周的统计数据如下：

![img]({{site.img-hosting}}/Pic4Post/replace-caps-lock-with-ctrl/what-pulse-key-combo.png "WhatPulse!截图 - 快捷键")

　最后再安利一下Org-mode，上手可能需要一些时间，但是一旦适应了那么编辑起来就是行云流水了。不是程序员也可以用，被虐过之后也可以成小半个程序员了。可以看下面的链接继续被安利……

-   [心内求法 - org-mode: 最好的文档编辑利器](http://www.cnblogs.com/holbrook/archive/2012/04/12/2444992.html#sec-1-2-3)
-   [神器中的神器org-mode之入门篇](https://my.oschina.net/klauszl/blog/261701)

　写完之后按一组快捷键就会自动把org-mode对应的 `.md` 文件输出到我Github的目录里，然后Commit一下一篇新的文章就搞定了。整个过程都不用碰鼠标甚至小键盘区。真爽。

　下一步是抛弃StackEdit，再下一步就可以忽略Evernote了（不用Evernote做笔记，但是会用来剪切收藏网页）。再下一步就是借用当年大师兄的图片了：

![img]({{site.img-hosting}}/Pic4Post/replace-caps-lock-with-ctrl/emacs-hand.jpg "Emacs重度用户的未来")

　(别当真哈哈哈。)
