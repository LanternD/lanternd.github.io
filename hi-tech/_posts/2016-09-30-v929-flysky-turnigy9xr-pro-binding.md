---
layout: post
title: V929与带Flysky发射器的Turnigy 9XR Pro的对码过程
description: 好久没写这种Technical的文章了，写出来都觉得有点陌生。总之就是一个简单的把无人机和遥控器对接上的过程。
permalink: /v929-flysky-turnigy9xr-pro-binding/
categories: [HiTech]
tags: [四轴, 无人机, 航模, 对码, 遥控]
date: 2016-09-30 13:23:34
--- 

## 简单说0.5句

　写这个帖子可能也帮不到很多人，多半是为了给自己以后需要用的时候做个参考。最近在师兄的「煽动」下又重新走上了搞航模的日子，大概两年前了解过一些，也动手做过一个基本版，但是由于在毕业季，没钱又没时间的，虽然积累了一些经验，但最后就是烂尾了。现在不那么拮据了就算是条件再次成熟了吧。

　以大无畏的革命精神踊跃跳坑。

## 一些术语 & 模块

### Binding

　很奇怪航模圈里为什么用这个词，其实就是标题里的「对码」。我觉得用Connect就足够了，事实上也就是和「Connect to Wi-Fi」差不多性质的一个过程。连接配对好以后就可以正常通讯了。

　Binding是针对**发射器模块**（Tx, Transmitter）和**接收器模块**（Rx, Receiver）而言的。因为现在的航模遥控器（航模圈叫「Radio」）和发射模块是分离的，匹配主要还是看发射器而不是遥控器。据我所知市面上有不下十种不同厂商的若干种不同协议。功能是一样的但是数据结构和编码方式可能有所区别。总之用什么遥控器无所谓，主要看发射、接收模块是否兼容，兼容就可以Binding。

　理论上一个接收器只对应一个发射器模块，但是一个发射器模块可以对应多个接收器。所以如果一个玩家有七八台航模，只要在遥控器里选择一下就可以实现在这些航模中切换了，还是很方便的。但反过来如果一个航模能被两个遥控器控制那将是很可怕的事情。

### Flysky

　这个是国产的航模遥控器大厂。中文叫「[富斯](http://gb.flysky-cn.com/index.html)」。虽然一开始国产厂商都靠「山寨」起家，但是到目前也都走上了自主研发的道路。总体来说富斯还是很靠谱的。

![Flysky RM002](http://lanternd.qiniudn.com/Pic4Post/v929-flysky-turnigy9xr-pro-binding/flysky-rm002.jpg)
（图片来源：[Bandgood](http://www.banggood.com/Wholesale-FlySky-Upgrade-FS-TH9X-FS-TH9XB-2_4G-9CH-RC-Remote-Control-Transmitter-Mode-2-p-47904.html)）

　这次的发射器模块是来自Flysky的[FS-RM002](https://www.amazon.com/Flysky-FS-GT3-FS-RM002-FS-TH9X-Transmitter/dp/B01AOF6324)。不过这个是我师兄的，他暂时不用就借给我了。

### Turnigy 9XR Pro

　[Turnigy](http://www.turnigy.com/)是遥控器的牌子。但是似乎以前是做航模锂电池起家的。其实也是中国厂家，但是主页里面找不到任何和China相关的字眼……我也不知道中文名叫什么。

　他家就这么一款遥控器（以前有个叫9x的型号，但是出了新款以后就没消息了），但是还是很有名，因为便宜，还功能齐全，另外还可以刷第三方固件[OpenTx](http://www.open-tx.org/)，对遥控器进行细致的改造，发挥最大功能。其实市面上300￥到1500￥的遥控器都有，据我观察90%的功能都是一样的，贵的遥控器一般在硬件上会好一些，选料更精，手感操控更好，就像Canon 600D和5D Mark III的区别，虽说价格差了七八倍，但都可以「拍照」。

　Turnigy 9XR Pro是我在[Hobbyking](http://www.hobbyking.com/hobbyking/store/__51442__Turnigy_9XR_PRO_Radio_Transmitter_Mode_2_without_module_.html)买的，大约是全网最便宜的价格，60\$。然而这个是不带模块的，另外锂电池也不配，需要自己买。

![Turnigy 9XR Pro](http://lanternd.qiniudn.com/Pic4Post/v929-flysky-turnigy9xr-pro-binding/turnigy-9xr-pro-radio-transmitter.jpg)

（图片来源：[getfpv](http://www.getfpv.com/radios/radio-controllers/turnigy-9xr-pro-radio-transmitter-mode-2-without-module.html)）

### V929

　据说是[Amazon](https://www.amazon.com/WLtoys-V929-Quadcopter-Dexterous-Generic/dp/B008RL18SM/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1475255876&sr=1-1&keywords=V929)上最便宜的四轴无人机，依旧来自国内的厂家「伟力（WLtoys）」。而且Amazon上卖的是「RTF (Ready-To-Fly)」拿到就可以去用了。

　但是这个瓢虫的塑料罩实在是有碍观瞻，我到手以后就给扔一边了。电路板露出来才有点科技感（虽然也是廉价PCB板）。

![WLtoys](http://lanternd.qiniudn.com/Pic4Post/v929-flysky-turnigy9xr-pro-binding/wltoys-v929-mini-quadcopter.jpg)
（图片来源：[rcgroups](http://www.rcgroups.com/forums/attachment.php?attachmentid=6453506)）

　飞机的红色螺旋桨是机头方向，所有的操作指令都以这个为基准。

## Binding过程

　下面进入日志的主要部分，其实也不长。

### 默认遥控器

　刚才说过V929是RTF的，它的包装里面自带了一个[无比廉价的遥控器](https://www.amazon.com/Water-Controller-Transmitter-WLtoys-Quadcopter/dp/B00KU2GKIE/ref=sr_1_1?s=electronics&ie=UTF8&qid=1475257026&sr=8-1&keywords=V929%20E728)。

　V929插上电池以后上面的红色LED会狂闪，大概是校准陀螺仪和加速度计的过程。然后熄灭1~2秒钟，之后是以1秒钟为周期的LED慢速闪烁。大意是Loss signal，但是V929还是会监听整个无线频道，如果有匹配信号它还是会连接上的。

　在上面的状态下，把遥控器的油门拨到最低，直接打开廉价遥控器的开关，上面的喇叭Beep几下之后就能够连接上了。只要V929处于被控制状态，红色LED就会一直亮了。我感觉是原厂遥控器有特别的通道搜寻和Binding模式，所以整个过程比较快。

　Binding结束就可以控制了。开飞机去吧。

　实际情况是默认的遥控器特难用，偏差还很大，基本没法悬停（四轴会往某个方向一直偏移，把微调偏移量推到头了也不好使）。所以才需要用第三方的好一点的遥控器。

### Turnigy 9XR Pro + Flysky RM002的Binding

1. 先把V929通上电，然后进入上面说的红LED慢速闪烁状态。
2. 把遥控器的油门拨到最低，按住Flysky模块上面的开关（本文第一张图的黑色圆点），同时打开遥控器的电源开关。
3. 等待10~30秒，这个过程V929不会有任何变化，遥控器也是，但是**已经匹配完了**！（这个坑了我很久，直到最后发现规律）虽然匹配/对码完了，但遥控器还是没法控制V929。
4. 关闭Turnigy遥控器的电源，过几秒种开机，**不需要**按住Flysky模块上的黑键。
5. V929的灯变成红色常亮，这时候就算Binding完成了。
6. 以后就再也不用Binding了，只要V929通上电，遥控器通上电就可以使用了。

　我也不知道V929这台机的信息是存在遥控器还是存在发射器里面（更倾向于前者）。但据我所知，一旦遥控器或者发射器模块中的一个更换了的话都要重新进行对码过程。

## 后记

　之前不是说要入航模的坑，为啥会选择V929这种无人机呢？因为是用来练手的。新手没练习过的话玩大的四轴分分钟炸机。而大四轴的零件都蛮贵的， 到时候那就一个心疼啊。V929的材料都比较柔软，而且惯性小，摔地上不容易坏也不容易折。另一个就是小的四轴打到人不疼，自己也舒服一些。大四轴一不小心就把手划出血……

　新手飞的时候一般看情况不对了就会把遥控器的摇杆推到头，想挽回颓势，但这样却更容易导致飞机失控。所以V929的存在就是让玩家把油门和各种方向控制好了，什么时候要给多少力度，推多少行程，形成肌肉记忆。在不碰到障碍物的情况下按照预定的轨迹进行飞行。

　另外，我要自己做的是个大的三轴飞行器，而不是四轴，正在紧锣密鼓地筹划中。

　自从有了无人机，业余生活再也不用靠手游填补了……继续练习操控去了。