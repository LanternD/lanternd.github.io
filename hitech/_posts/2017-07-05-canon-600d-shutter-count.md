---
layout: post
title: Canon 600D 如何查看快门次数
description: 从2011年起这个问题就困扰着我，虽然我已经在几年前就找到了答案，但是一直没有写下来。现在终于记起来要写写了，其实记录的内容已经相对过时了。
permalink: /canon-600d-shutter-count/
categories: [HiTech]
tags: [相机, 快门, 600d, Magic Lantern, 固件]
date: 2017-07-05 17:16:00
--- 



## 提需求

　佳能600D虽然不是我的第一台相机，但是是我的第一台单反。购买于2011年暑假。目前快门数51579+1680。待会再解释第二个数字的意思。那么，是怎么看的这么精确的数据呢，这就开始来聊聊。

### 为什么要看快门次数？

　这是个重要的问题。快门数大概能反映以下功能：

  - 了解一台新机器是不是真的「新」，比如是不是接近0快门；
  - 了解一台旧机器到底有多旧，用于估价，这个就像买二手车看里程数一样；
  - 看看是不是快门寿命要到了，该换就得换了；
  - 仅仅是看看自己在摄影的不归路上走了多远……

　我通常是因为最后一条。

### 操作难度

　佳能的单反有很多的控制芯片，600D用的是[DIGIC 4](https://en.wikipedia.org/wiki/DIGIC#DIGIC_4)。似乎可以通过连接电脑看到的参数并不多。所以查到快门次数比其他的型号难度要稍微大一点。

## 不靠谱的方法

### 看Exif

　到网上搜各种方法，会发现好多人说用各种各样的软件看拍出来的照片的Exif（元数据信息）来确定快门数。经过我若干次尝试，表示这种方法没啥用，至少对600D而言如此。

### 连接EOScount网站看

　这也是不少帖子推荐的。[http://eoscount.com/](http://eoscount.com/)是一个专门查佳能快门次数的网站。

　然而，第一步你得装一个控件：

![eoscount]({{site.img-hosting}}/Pic4Post/canon-600d-shutter-count/activeX.png)

　相机连上电脑以后网站会有反应，然后告诉你……

![eoscount-payment]({{site.img-hosting}}/Pic4Post/canon-600d-shutter-count/activeX-payment-blur.png)

　「掏钱我就告诉你快门数！」

　再见。

### EOSinfo

　[EOSinfo](http://astrojargon.net/eosinfo.aspx)是一个从40DShutterCount升级而来的软件。长下面这样：

![eoscount-payment]({{site.img-hosting}}/Pic4Post/canon-600d-shutter-count/eosinfo.png)

　我这里连上相机以后没有反应，按左下角刷新键也没用。于是这个也放弃了。据说这个软件没法查用DIGIC 4芯片的相机。

　而且鉴于这个软件从2009年开始就再也没更新过，显然不是什么靠谱的选项。

### 右键-属性

　有人说可以把拍过的照片都放到一个文件夹，然后右键->属性，看有多少个文件就是多少次快门了。

　Seriously?

　这样的方法误差相当大，不用考虑了。

## 正确的打开方式

　所以我们需要寻找不花钱，准确，可重复操作的查快门方法。然后我用的是**Magic Lantern**，中文叫「魔灯」。

　[Magic Lantern](http://www.magiclantern.fm/)是一款开源的佳能相机固件，是一堆爱好者自己弄的第三方加强固件，约等于开放了相机的操作系统权限。

　看到这样的介绍估计很多人会望而却步，开始担心用了之后相机会不会成砖，会不会被黑客黑……其实不用有太多顾虑，用简单的话来说：它很好用，它很安全，它很靠谱，它是合法的，它只是一个附加工具。不过，请一定按照正确的步骤去安装。

　下载和安装说明可以点官方的Wiki：[传送门](http://wiki.magiclantern.fm/install)。一定要按步骤操作。

　下面假设已经安装好了Magic Lantern固件。

　然后步骤就很简单啦。

　第一步，在常规状态下按一下删除键。右下角会显示出储存卡大小。（有时候只用按一次就进入Magic Lantern界面了，那么可以忽略第二步）

![ml-delete]({{site.img-hosting}}/Pic4Post/canon-600d-shutter-count/ml-delete.png)

　（让我古老的600D上个镜。）

　第二步，再按一次删除键，进到Magic Lantern界面。

![ml-menu]({{site.img-hosting}}/Pic4Post/canon-600d-shutter-count/ml-menu.png)

　第三步，用左右导航挪到倒数第三项，带有「01」图标的那一项（[Debug页面](http://wiki.magiclantern.fm/userguide#debug)），倒数第二行就是快门数了。

![ml-debug]({{site.img-hosting}}/Pic4Post/canon-600d-shutter-count/ml-debug.png)

　就是这么Easy。说白了相机一直存着这个数，只不过一般读取不到而已。

　看完快门就可以去玩其他的东西了。我还用过的功能有陷阱对焦、自动拍照（固定间隔，设定B门时间。这样就不需要快门线了）、回放突出暗部两部、黄金分割构图指示线等等，更多的功能还得自己探索，可以参考他们的[UserGuide](http://wiki.magiclantern.fm/userguide)。

### 两个数值

　图片里面的两个数，一个是51579，一个是1680。第一个是真正的拍照的快门数，第二个是反光板抬升，打开快门用电子取景器构图时候的快门数（实时取景或者录视频）。

　第一个数比较有参考价值。

　5万张图片，一张5 MB算的话那可就是250 GB了，然而实际可能有500-600 GB，因为有录像、RAW之类的。

## 后记

　其实我的Magic Lantern也有三年没有更新过了，或许也到了更新的时间了。

　另外根据我长期的观察看，Magic Lantern固件更新的速度赶不上Canon出新相机的速度。所以未来还能不能用这种方法看快门还有待观察，至少600D这种老相机是可行的。

　最后声明：小心尝试，如果相机出现任何不良反应后果自负。