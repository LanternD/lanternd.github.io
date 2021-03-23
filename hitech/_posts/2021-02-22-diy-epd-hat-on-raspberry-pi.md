---
layout: post
title: 【DIY】简易树莓派扩展电纸屏
description: 买了一个 2.7 寸的树莓派扩展电子墨屏幕，并简单写了几个应用。放在桌子上当一块附加屏幕也是不错的。
permalink: /diy-epd-hat-on-raspberry-pi/
categories: [HiTech]
tags: [DIY, 电子, 屏股票, 玩具]
date: 2021-02-22 21:56:08
---

# 　

## 序曲

　其实有一段时间没有写 DIY 系列了。上一次有计划的 DIY 文章是《如何制作一个成功的水泥花盆》。但是草稿写到一半就忘了。过后想写完的时候发现有些细节记不清了，但是又很关键。此时手边又没有合适的工具做水泥花盆，所以只好继续搁浅，以后再做一拨的时候给补上。

　这次要写的是一个树莓派（Raspberry Pi，以下简称 RPi）的扩展屏幕。它能做到即插即用，非常方便。编程部分也很简单，很适合业余玩耍。

## 屏幕购买

　关于电子墨水屏（以下简称「电纸屏」）：一类独特的屏幕，刷新屏幕以后图案可以近乎永久停留在屏幕上，不需要电力去维持。通常电纸屏被用在非常低频率刷新的内容展示上，比如 Kindle 或者广告牌、价格标签等等。

　号外：打个广告。我的师兄在做 NFC 能量采集相关的创业，也用到了电纸屏。大家感兴趣可以去体验一下不需要电池的显示屏幕：[立显通科技](<http://www.nfcshow.com/>)。

　我的屏幕在 [Amazon](<https://www.amazon.com/gp/product/B075FQKSZ9/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1>) 上买的，2.7 英寸，264 x 176 像素。它自带了点对点匹配的 RPi 针脚。以下简称「HAT」（备注：一般能通过排针插到另一块电路板上的设备我们可以叫 HAT，「帽子」的意思）。这个屏幕要 20+ 美元，我觉得算是蛮贵的，因为成本可能不到 10 美元。

　它还自带四个按键，用起来还算方便的。

　这个 HAT 的缺点：响应速度慢，刷新一次要 4-6 秒。灰度等级好像只有 2 级，即黑和白。渐变的图案显示不了。

## 开发

　这里假设你用过 Python 也用过 Linux，知道基本的命令行操作。

-   这个 HAT 有自己还算完善的文档：[2.7inch e-Paper HAT (B)](<https://www.waveshare.com/wiki/2.7inch_e-Paper_HAT_(B)>)。基本跟着教程弄就搞定了。
-   它也有自己的 [GitHub Repo](<https://github.com/waveshare/e-Paper>)。跑这个[例程代码](<https://github.com/waveshare/e-Paper/blob/master/RaspberryPi_JetsonNano/python/examples/epd_2in7b_V2_test.py>)就能看到屏幕变化了。
-   其他：[相关 Datasheet](<https://www.waveshare.com/w/upload/3/32/2.7inch-e-paper-hat-b-user-manual-en.pdf>)。

### 一些细节

　需要通过 `sudo raspi-config` 来启用 SPI 接口。

　在 RPi 上需要安装 Python 的一些库：

-   `pillow`
-   `RPi.GPIO`

　其中，安装 `pillow` 需要先安装这两个库：

```shell
sudo apt-get install libjpeg-dev zlib1g-dev
python -m pip install pillow
```

### 绘图原理

　它的例程代码十分直白，一看就懂，我就不详细展开了。大致原理如下：

-   创建一个空白的 `pillow image` 实例。
-   创建对应的 `ImageDraw` 实例。
-   调用具体的绘图函数（文字同理）。
-   调用 `epd.display()` 把 `pillow image` 写到屏幕里。

## 应用

　目前我用这 HAT 做了三个小应用，列举如下。它们可以用按钮来切换。

### 显示股票价格

　这里调用了 Yahoo Finance 的 API，可以获取给定股票的卖盘买盘行情。然后根据这个可以算出当前的股价。

　⬇️ 获取股票价格中：

![img]({{site.img-hosting}}/Pic4Post/diy-epd-hat-on-raspberry-pi/stock-app-1.jpg "Stock App 1")

　⬇️ 显示股票价格：

![img]({{site.img-hosting}}/Pic4Post/diy-epd-hat-on-raspberry-pi/stock-app-2.jpg "Stock App 2")

　（注：图中的股票不代表我买了）

　目前设定了只有股票开市的时段才会去调用 API 查询股价。比如周末和晚上它都不会工作，避免频繁更新。我设定每隔4分钟才会更新一次股价，因为我就是偶尔看看，不打算短线交易。

### 坐姿提醒

　为了防止在电脑前久坐，我设定了一个每隔 5 分钟就出现一次的提示标语「UP! RIGHT」，每次显示 5 秒钟。目前和上面的股票应用配合使用，两者交替显示。

![img]({{site.img-hosting}}/Pic4Post/diy-epd-hat-on-raspberry-pi/posture-app.jpg "Posture App")

　因为屏幕刷新的时候会先变全黑再变全白，最后才会显示出对应的图案。所以这个变化过程会成功吸引我的注意，也就能更醒目地提醒我的坐姿了。

### 时钟

　应该算是个默认功能了吧。用小屏幕显示时钟应该算是第一个会出现在脑海里的想法了。我的程序的特别之处在于我每隔 3 分钟才会更新一次时间。因为我只需要知道大概的时间而已，不需要精确时间。如果需要的话，电脑屏幕上的时钟绰绰有余。

![img]({{site.img-hosting}}/Pic4Post/diy-epd-hat-on-raspberry-pi/clock-app.jpg "Clock App")

## 未来规划

　理论上只要 RPi 连了网，就可以通过 API 或者爬虫，抓取互联网上的任何信息。只要做格式化处理就能显示在屏幕上。比如可以抓取自己 YouTube / B 站 / 微博 / Instagram 的粉丝数，抓取关心的内容是否有更新，显示某些画或者艺术品等等。既可以天马行空，又可以万变不离其宗。

　我目前想的下一步是做一个家庭信息显示系统。首先这个系统会有个中枢，其他的节点就是通过消息传递的方法「智能」地更新自己的显示信息。

　每个节点屏幕可以显示基本信息，如时间日期、待办、菜谱、购物列表、提醒、温湿度等，还可以显示不同的事件：比如猫进到了某个房间，有人按门铃、物业有包裹待领取等等。

　然后这些节点遍布各个位置，覆盖全屋。这样一切状况就尽收眼底了。

　目前还在想象阶段，具体细节还有待设计和实现。

## 尾声

　大概就是这么一个东西吧。当明白了原理（也很简单）之后剩下的都是体力活，比如打磨细节、处理异常等等，边际效用递减迅速，很快热情就消失了。

　我写的代码可以去这里找：<https://github.com/LanternD/tps-epd-node>
