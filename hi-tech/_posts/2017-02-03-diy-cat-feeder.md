---
layout: post
title: 【DIY】花式喂猫器
description: 一个通过语音控制激活的喂猫机器（仍处于Demo阶段）。共13张图，总计约3.15MB。
permalink: /diy-cat-feeder/
categories: [HiTech]
tags: [DIY, 猫, 喂猫, 木头, 树莓派, Raspberry Pi, Amazon Echo, Alexa]
date: 2017-02-03 12:23:34
--- 

## 起源

　去年我和MS报名参加了2017年1月20-22号的[SpartaHack](https://17.spartahack.com/)（官网的UI很抽象，动画很华丽，但是没啥内容……）。这是一个MSU自己办的[Hackathon](https://en.wikipedia.org/wiki/Hackathon)活动。这个活动号称做什么东西都可以，只要和编程有关就行。

　然后就有了做个自动化喂猫机器（以下简称「机器」）的想法。然后就有了这篇日志。不想看长篇大论的直接拖到后面看Youtube视频即可……

## 目标

　这个东西的目的是能通过语音控制来触发机器工作，然后放出一定数量的猫粮，这样猫就不会因为狂吃而变胖了（平时人们一般会把猫粮盆装满，快没了再加一拨）。同时机器能够自动设定时钟，如果超过一天（86400秒）没有收到语音指令，那么就会自动喂一些猫粮以防猫饿死……

　编程部分对我来说那是相当简单（下面提到），所以功夫主要花在把这个机器做出来上。

## 思路

### 硬件

　通过电机旋转，带动主轴旋转，主轴上的凸轮机构把旋转运动变成直线进给运动，推动厚木块运动，把猫粮推机器，滑落到猫粮盆里面。我还录过一个SolidWorks的Motion Study动图发在Instagram上，[可以围观](https://www.instagram.com/p/BPEmZr6DiNM/)。

![SolidWorks](http://lanternd.qiniudn.com/Pic4Post/diy-cat-feeder/cat-feeder-9.jpg "Cat feeder cam view")

　当然，原理不是我想出来的，虽然以前机械学学过凸轮机构，但主要启发来自Youtube上的日本DIY大牛[Denha的视频](https://youtu.be/YbIbiyDKbAg)，另一个随便找的类似的视频可以围观[这里](https://youtu.be/sv-snt6LMGo)。

　和视频不一样的是，猫粮是消耗品，就不用做视频里面抬升钢珠的机构了。我只需要一个大的容器放在上面，利用重力的作用让猫粮下落到凸轮推进机构上即可。

　整个机构两边需要两块木板把固定住，然后还需要两块小木板支撑电机、轴承和主轴。大体上就是这样一个结构。我就不深入描述了，要是想象不出来直接往下看就行了，一图胜千言。

### 软件控制

　为了实现语音控制，我们第一个想到的就是[Amazon Echo](http://a.co/cFd4nuH)，亚马逊自己推出的语音音响，似乎目前只在北美和德国上市，可以想象成一个能连蓝牙和WiFi的音响加上了Siri语音助手类似物（叫「Alexa」）。注意，Echo是设备，Alexa是语音服务，就像苹果手机和Siri关系一样。

　正常来说要和Amazon Echo连起来也不是那么简单的事，首先开发者账号这些东西都得注册：

- [Amazon AWS](https://aws.amazon.com)
- [Amazon Developer](https://developer.amazon.com)

　然后又有两种Skills可以用：

- [Smart Home Skills](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/overviews/understanding-the-smart-home-skill-api)
- [Custom Skills](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/overviews/understanding-custom-skills)

　区别主要是：SHS能连接其他的云设备网络，控制设备（主要是家电）的启动、停止、温度调节，主打智能家居。而CS则主要用来和各种网页或者API交互，至于和什么交互，如何交互是开发者自己决定的。

　打个比方，CS可以用来Uber叫车，用来订Pizza，用来查天气等等，这些SHS都做不来。

　我个人感觉SHS是CS的子集，只是说SHS把常用的服务都集成好了，用来做智能家居方面开发比较便捷。Amazon Echo生成给用户的语音也是开发者自定义的，而SHS这方面会有限制，总体来说肯定是CS可玩性更高。

　说了这么多其实我采用了曲线救国的方式——**上面两个都没用**。我为了对付SpartaHack学习了上面两个东西的用法，所以po在这里希望可以给路过的提供一些信息。

　取而代之的是，我找到了一个Python库，叫做「[Fauxmo](https://pypi.python.org/pypi/fauxmo/0.3.6)」。运行这个程序的设备可以模拟成一个WeMo开关（一个做智能家居的牌子），并能够被Echo发现和控制。

　这个简直神器。有了它就可以把家里的设备变成「家庭物联网」模式，而不经过各种设备云（Device Cloud）。咖啡机、烤箱、灯等等这些东西都可以变成语音控制的。

　还是直接进入正题吧。

## 材料工具一览

### 材料

- 3 ft x 3.5 in x 1/4 in （长x宽x高，下同）薄木板一块
- 3 ft x 2.5 in x 1/4 in 薄木板一块
- 1 ft x 2.5 in x 3/4 in 厚木板一块
- 裱边用木条一根 
- 1/4 in 直径[木条](http://a.co/bx9sIfI)一根
- 1/4 x 3/4 x 9/32 in [滚珠轴承](http://a.co/235Dort)一只
- 3mm转5mm[联轴器](http://a.co/b8TrFt4)一只
- 6V 30RPM[减速电机](http://a.co/3Cpg4bh)一只
- 光耦隔离（隔离不是必须）[继电器模块](http://a.co/bNeHyTm)一只
- 导线若干
- Raspberry Pi Model 2 B（树莓派）

　（用一下英制单位以表面我对其的痛恨，1 inch = 2.54 mm，1 foot = 30.48 cm）

### 工具

- 电锯
- 锉刀
- 木工F夹3个
- 木材胶水
- 热熔胶枪
- 螺丝刀
- 电钻（手钻 + 台钻）
- 尺子（直尺 + 数显游标卡尺）

## 零部件切割

　由于板长宽高等等我都设计好了，所以只花了几个小时就把需要的材料都切割出来了。下图并不是全部，还有些零碎的。

![Materials](http://lanternd.qiniudn.com/Pic4Post/diy-cat-feeder/cat-feeder-1.jpg "Materials")

　最费劲的是装轴承的小板的切割。轴承的孔比较大，而小木板却不大，这就导致了开孔的时候特别容易断裂。总而言之费尽周折终于弄完了。

## 组装工的生活

　高级一点的木工当然不会像我这样用胶水把全部东西粘起来了，不但费时，而且拆卸成本太高，容错率低。但是我这处于初级阶段，很多木料的加工工具都没有，所以只能用这种原始的方式。

- 第一步先把上面说的「裱边用木条」切出来的1 cm宽的小木条固定到小木板两侧，然后上胶水。目的是让小木板处于竖直状态。只有孤零零一块板很容易前后倾。加了小木条就有一种直角尺的作用。胶水凝固需要大约1-2 h的时间。与此同时把电机固定到小木板上，上热熔胶（这小电机连个固定螺丝孔都没有，只好强制固定了）。

![Motor installation](http://lanternd.qiniudn.com/Pic4Post/diy-cat-feeder/cat-feeder-4.jpg "Motor installation")

- 第二步安装两块大木板。最好完全垂直，然后热熔胶固定底部。这一步完成以后就得到了最原始的绝对基准，其他的部件都要向这个东西看齐。要垫几张纸留够间隙，因为最关键的两块厚木块的宽度必须小于两木板的间距，否则就没法运动了。

![Side plates installation](http://lanternd.qiniudn.com/Pic4Post/diy-cat-feeder/cat-feeder-3.jpg "Side plates installation")

- 第三步把椭圆穿到木棒上，然后把距离分好，上热熔胶，让椭圆和木轴合为一体。

![Motion unit installation 1](http://lanternd.qiniudn.com/Pic4Post/diy-cat-feeder/cat-feeder-6.jpg "Motion unit installation 1")


- 第四，把上面得到的运动结构固定到底板上。由于木轴和轴承并没有固定死，所以只要大概合适的位置即可。到这里为止运动部件就安装完毕了。

![Motion unit installation 2](http://lanternd.qiniudn.com/Pic4Post/diy-cat-feeder/cat-feeder-5.jpg "Motion unit installation 2")

　连上电机看看好不好使。

![Motion unit installation 3](http://lanternd.qiniudn.com/Pic4Post/diy-cat-feeder/cat-feeder-7.jpg "Motion unit installation 3")

- 第五，安装滑块所在的木板，这个的组装精度要求最高（相对来说）。安装前的侧视图是下面这样的：

![Side view](http://lanternd.qiniudn.com/Pic4Post/diy-cat-feeder/cat-feeder-2.jpg "Side view")

　安装辅助板（上图薄的那几块），夹住滑块并形成导槽。这里花了我们最多时间。辅助板只需要热熔胶相对固定就好了，胶水粘死容易出问题，不好调整。最主要是要留出间隙，这样滑块才能运动。

- 第六，对接，把两个模块拼在一起，上胶水。把其他辅助导槽等等用热熔胶弄上。

![Combination](http://lanternd.qiniudn.com/Pic4Post/diy-cat-feeder/cat-feeder-8.jpg "Combination")

- 第七，把顶部猫粮容器弄上，然后各个部分微调。完工，可以加猫粮了。

![Finish 1](http://lanternd.qiniudn.com/Pic4Post/diy-cat-feeder/cat-feeder-10.jpg "Finish 1")

　底部细节图：

![Finish 2](http://lanternd.qiniudn.com/Pic4Post/diy-cat-feeder/cat-feeder-12.jpg "Finish 2")

　虽然能用，但是一点也不精致，哈哈。等我以后用亚克力板重做一个，一定会更有科技感……

## 控制部分

　继电器作为开关连到电机上电源为5V，这个比较简单就不说了。说说树莓派这边。

![Circuit part](http://lanternd.qiniudn.com/Pic4Post/diy-cat-feeder/cat-feeder-13.jpg "Circuit part")

　上面软件控制一节也已经说得比较清楚了。整个流程是：

- 首先树莓派运行Fauxmo服务器，用于和Echo互动。Fauxmo只是个库，需要一些代码把它实例化，设备名字，端口等等需要自己定义。

- 第二，对Echo喊「Alexa, discover devices」。注意需要树莓派和Echo连接到同一WiFi网络下，而且分配域名的前三字段必须一致，例如「192.168.10.XX」两个设备只能在「XX」上不一样。在家弄很容易实现当然没问题，但是SpartaHack的公用WiFi比较坑，后两位字段都不一样，这样Echo就没法发现树莓派了。纠结了三分钟后我们的解决方案是拿手机开热点，两个设备都连到手机。

- 第三，上面都没问题以后在手机里的Amazon Alexa App就可以发现可控制设备了。

- 第四，喊「Alexa, Turn on XXXX」，这时候Echo就会给XXXX发送一个Turn On请求，然后树莓派代码里面的某标志位就会变1。至于采取什么行动，在Python代码里面写就好了。比如触发继电器需要写一个树莓派GPIO控制的代码，让某个引脚变成高电平。这样继电器闭合，电路导通，电机开始转，整个机器运转起来，猫粮出来。

- 第五，微调。控制电机转的时间，以达到控制出猫粮的量的目的。设定好时间戳，如果一天（或者任何其他时间长度）没有来语音指令，则自动喂猫粮。

## 真·完工

　加上Alexa效果图若干：

![Finish 2](http://lanternd.qiniudn.com/Pic4Post/diy-cat-feeder/cat-feeder-11.jpg "Finish 2")

　效果最后就是对Echo喊「Alexa, turn on Candy Shower.」（演示的时候我们取了另一个名字），然后喂猫粮机器工作15秒，放出一杯左右的猫粮。中间也可以响应「Turn Off」命令，不过没什么必要。

【**Youtube视频[戳这里](https://youtu.be/yLxEWkYagMc)。**】

## 末尾补一丢丢

　为了一只猫可真是煞费苦心，虽然也「其乐融融」。SpartaHack真是累的不行，两天睡了也就8个小时（其他组的可能更少），导致我到现在还不想碰这个东西（还需要很多改进和优化）。所以这喂猫机器也没有在真正在家里使用。还有就是我发现树莓派可玩性略高，所以还在慢慢开发别的东西，摆在喂猫粮的地方那可就浪费了。

　下一步是尝试使用ZigBee建立家庭小规模物联网，这样可以实现在网站上控制家里的各种灯和电器。这个喂猫机器到时候将作为首批试点家电进行测试，啧啧，嗯嗯……说得好像不会烂尾一样。