---
layout: post
title: 个性化文件夹图标
description: 来说说让文件夹图标变成自定义图片的方法。暂时只有Windows和Linux（Gnome）的。目前就用过这俩系统。 
permalink: /customized-folder-icon/
categories: [HiTech]
tags: [Windows, Linux, 文件夹, 图片, Logo]
date: 2018-03-18 20:34:56
---

# 　

　如果你已经知道如何操作那就不用看了。

## 为什么要个性化图标

-   人们通常花费很多时间在找东西上。用特别一点的Logo可以加深文件夹内容和图形的关联，这样要找东西时只需要找到响应的图片/图形即可。
-   好看呗。
-   有个性呗。
-   主要还是第一条。

## Windows下的个性化图标

　Windows下我知道的大概有三种方法，下面按难度由简到复杂的顺序来写吧。

### 方法一，使用系统自带图标

　比如现在创建一个文件夹叫「test」。右键，属性，个性化，就可以大概下图的窗口。

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/method1-1.png "Method 1-1")

　这里有几个自带选项，首先是「Optimize this folder for」，里面可以选文档、图片、音乐、视频。这种入门级的操作就不多说了，而且我们不能这么容易满足嘛。

　下面有个「Folder pictures」，可以选择图片。不过实际操作选出来的图是下面这样的：

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/err1.png "Error 1")

　显然不是我们想要的，忽略之。

　最下面的「Folder icons」才是我们这次的主角。点进去的时候默认路径是

> %SystemRoot%\System32\SHELL32.dll

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/method1-2.png "Method 2")

　这个动态链接库自带了很多系统图标。Windows 7之前的图标都巨丑（以前的经典款也还是可以在这里选的），最近扁平化了稍微好点。所以可以在这里挑一个。

### 方法二，使用程序自带图标

　还是用一样的方法打开选Folder icon界面。然后「Browse&#x2026;」（或者直接输入路径），找到自己喜欢的程序的可执行文件 `.exe` 点确定。之后可能还会有几个不同的图标可以选，这些都是包括在 `.exe` 中的。之后一路点「OK」。

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/method2.png "Method 2")

　最后 **刷新** 一下即可。

　这种方法适用于文件夹内容和该程序紧密结合的应用，比如PS、Lightroom、Github、SolidWorks等等，简单粗暴省事。具体例子参考下图。

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/overview.png "Overview")

　需要注意的是可能有的图标比较老旧，像素不高。

### 方法三，自己做Icon文件

　这个是本文的正题。

　首先，找好一个图片，最长边像素在512以上。这里就可以自由发挥想象力了，比如我们去找个《使命召唤：现代战争》中Ghost的头像。

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/method3-1.png "Method 3-1")

　最好是 **方的图** ，如果不是的话在PS里给图片上下加上（透明）白边。格式最好是 `.png` 。为了不太突兀，我把背景抠图删掉，变成透明的。

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/method3-2.png "Method 3-2")

　接着，去[ConvertIcon!](https://converticon.com/)网站，点「Get Started」，上传刚才的 `.png` 图片。然后点「Export」。

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/method3-3.png "Method 3-3")

　如果图片比512 x 512要小其实也可以选择「512 x 512」，大的也同理，过大的图片也没什么用。

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/method3-4.png "Method 3-4")

　把图标存到本地「ghost.icon」，后面步骤就和方法二一样了。

　最后刷新即可看到。

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/method3-5.png "Method 3-5")

　最后在补几张我的文件夹图。

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/overview1.png "Overview 1")

　第二排的三个文件夹分别是存放5D3、600D和手机拍的照片的，是不是一目了然了。

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/overview2.png "Overview 2")

　常用软件放在太极阴鱼文件夹，游戏则在太极阳鱼，这两者构成了我开电脑以后用掉的大部分时间。太极生两仪，两仪生四象，四象生八卦，啧啧啧……我可真闲。为了凸显Logo，文件夹命名一个是反引号「\`」，一个是单引号「'」，大概是我能找到的像素较少的文件夹名字了（不能用英文句号做名字，以及中文间隔符「·」需要切换输入法）。

　「我的电脑」的Logo需要第三方软件或者修改注册表实现，这里就不多说了。

　※注意：文件夹使用的 `.icon` 或者 `.exe` 文件需要保存好，如果删掉了的话文件夹会恢复为默认图标。

## Linux Ubuntu Gnome下的个性化图标

　Gnome对个性化图标似乎很宽容。对文件夹右键属性，然后直接选 `.png` 或者其他可用的图片即可。

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/linux1.png "Linux 1")

　效果图：

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/linux2.png "Linux 2")

![img]({{site.img-hosting}}/Pic4Post/customized-folder-icon/overview-linux.png "overview linux")

　这样就比较清爽了。不过在Linux都用命令行导航了，文件夹图标也难得一见……

## 一些建议

-   图要差异大，做到一目了然，在进到文件夹目录前就知道要找什么图片。
-   用高清图做Icon。不然强迫症该犯了。
-   注意透明度。带背景的图可以用羽化避免出现一些毛边之类的。
-   先精简文件夹数量，然后用 **最大图标** 显示，简直爽。

## 尾声

　这个方法大概是大一的时候自己发现的，后来一直坚持这个习惯。我觉得对提高效率有挺大的帮助。之前喜欢给文件夹取奇奇怪怪的名字，后来自己容易忘记。靠着图形化记忆，终于把这个事解决了。

　希望能帮到更多的人。
