---
layout: post
title: LanternD 的 PCB 设计规范
description: 总结我自己画电路板时的一些附加规则，方便给自己以后参考。
permalink: /lanternds-pcb-design-guideline/
categories: [HiTech]
tags: [PCB, 设计, 规范, 电路]
date: 2021-03-26 18:30:08
---

# 　

　（如果不是硬件相关专业的朋友，这篇日志应该没有什么价值，可以忽略。）

## 为什么有这个日志？

　大部分硬件设计的公司内部都有自己的 PCB 设计规范，比如走线用多宽，阻抗怎么匹配，电源部分怎么布局等等。我觉得不同的指南都有自己的道理，也都值得参考。我这里写的是一些我自己在绘制电路板时候加入的一些个人口味的规则。如果拿网页开发进行类比的话，上面提到的的设计规范应该算是「HTML 开发指南」，而这篇日志更多属于 CSS 该是什么样的。

　我现在画电路板的频率不算高，所以有些想好的规则到了下一块板子的时候又不记得了。于是我要把它们都记录下来，以后可以随时回顾。为了表示和别人的不一致，我加上了我的大名——「LanternD 的 PCB 设计规范」。

## 原则

　我的核心原则有以下几点：

-   在完成功能的基础上，电路板越小越好。
-   要直接 **面向日常使用** ，而不是 **面向开发** 来设计。下面会解释。

## 细则

### 面向日常使用设计

　具体来说区别是：如果为了开发而设计，会导致板子上会有很多插针或者调试接口方便看波形、多余的器件等等。一般等最终调试好了我们可能才会重新绘制一个板子把多余的针脚去掉。

　而面向日常使用设计则会在一开始就考虑做一个带有完整功能的板子，一次成型，调试完可以直接使用。这里会细分出很多细则：

-   避免一些锋利尖锐的凸起或棱角（比如排针）。如果有，那么即使不焊接它们也不应影响日常使用。
-   板上不要用冗余的部件，比如一些部件焊上和不焊上是两种功能之类的。如果一定要切换功能，可以用拨码开关，不要让用户（我自己）在想切换功能的时候还要去找个电烙铁。
-   挑选元件的时候就考虑好人机交互的过程。比如按钮有很多种，有触感轻重、体积大小之分，应该根据使用频率用对应的器件。比如大部分电路板都有 RESET 按键，在开发时候可能会被经常用，但是日常时候几乎不会被按。那么按照这个原则，RESET 按钮就应该使用体积小且按压力度需要很大的按钮。这样日常使用的时候不易被触发。而摇杆或者「上 / 下 / 左 / 右 / 确定 / 返回」这类需要频繁按压的，应该用柔软舒适的按钮元件。
-   有些时候我们需要用跳线连接一些外部的模块。这个时候应该直接设计成不需要连线（开发的时候可以连），直接插上使用的封装——日常使用是怎么样就怎么样。

　要做到这些需要花额外的时间和钱，也很靠经验，但是我觉得这种追求极致的精神才能做出让自己和让别人都想用的电路板。

### 电源模块化

　这是我现在准备做的一件事。由于我现在做的东西都是低功耗设备，所以弄来弄去就那么几路电源，比如 3.7 V 升 5 V，或者 3.7-7.4 V 降 3.3 V，功耗都在 0.1-2.5 W 这样。我长远计划是把这些电源需求全部模块化。然后模块都用邮票孔设计，大小在小指甲盖这样。一方面是方便未来的集成——我再也不用每个板子画一次电源模块的原理图和 PCB 了；第二是方便单独调试和演进，可以对模块进行效率和功率上的优化，只要保持对外接口一致即可。不知道这个算不算是硬件上的「面向对象开发」？

　在我实现上面的需求之前，还是得每个板子单独画电源模块。目前的方针依旧是保持电源模块化。我会把电源输出和电路其他部分隔离开来，需要用跳帽短接（或者把焊点连接）一下才能开始工作。具体例子可以参考下图：

![img]({{site.img-hosting}}/Pic4Post/lanternds-pcb-design-guideline/power-module.png "Power Module")

　（大佬轻拍）

　类似的可以模块化的还有锂电池充电电路。

　对于模块化的部分，我会在丝印层加个框把它围起来，和其他区域隔开。

### 拒绝 2.54 mm 间距排针 / 排座

　玩电路的人很多都从洞洞板 / 面包板「起家」，自然也对最常见的排针——2.54 mm 间距的封装不陌生。它们很好用，我们可以很方便地用跳线和其他的电路相连。但它最大的问题就是占地方。为了实现上面说的电路板最小化核心原则，2.54 mm 的插孔我不能忍。除非万不得已，我不会在电路里加上它们。

　可以从下图看出它们是多么地浪费空间。理论上我只需要和导线宽度相近的插孔大小即可。

![img]({{site.img-hosting}}/Pic4Post/lanternds-pcb-design-guideline/2-54-visualization.png "2.54 Visualization")

　相应的我的解决方案有两种。第一种是用 1.27 mm 间距的排针和排座。它们原理上和 2.54 间距的是一样的，就是小了一倍，能腾出大量地方。在两个板子需要拼接到一起的时候我一般会用这种方案。第二种是 1.25 mm 的插座和插针，也叫「JST Style」。第一次见到这种接口是在无人机的一个开源飞控 Pixhawk 上面，如下图。

![img]({{site.img-hosting}}/Pic4Post/lanternds-pcb-design-guideline/pixhawk.jpg "Pixhawk")

　这种接口是固定针脚数的，购买的时候需要指定，于是也就没这么灵活。不过其实大部分外围电路也就是那么些接口，所以也还可以预测。比如 I2C 就是 `VCC` 、 `GND` 、 `SCL` 、 `SDA` 这四个腿，画板子的时候就安排一个 4 针的 JST 接口即可。

　还有个 Bonus 是 1.27 和 1.25 的封装是可以互换的。想用哪个就把哪个焊上去。

　1.25mm 的插头是这样的：

![img]({{site.img-hosting}}/Pic4Post/lanternds-pcb-design-guideline/1-25-connector.webp "JST 1.25 mm")

（图片来自[ AliExpress](https://www.aliexpress.com/item/1005002281125267.html?spm=a2g0o.productlist.0.0.5b2b609ayc8Fk1&algo_pvid=null&algo_expid=null&btsid=0bb0624416168157875456371e7f05&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_)，公头 / 插座可以自行搜索）

　当然用更小的封装也有一点代价。2.54 mm 间距的孔之间是可以走信号线的，顶层和底层都算上的话就是两根线了。如果用其他排座规格，电路走线没法从两个孔中间过去了。需要绕一下，有时候会让布线变凌乱。所以需要尽量都把插座放在电路板四周，避免线在孔之间绕来绕去。

### 拒绝直插封装

　做的电路多了这应该是自然而然的一个需求。抛弃 DIP 封装，抛弃直插电阻 / 电感 / 电容，生活会更美好。原因同上一条，浪费地方。而且直插封装会在板子上打很多孔，影响走线。焊好板子以后，直插封装会让电路板背面特别扎手（正面也是），让我很不爽。

　总而言之， **贴片封装值得拥有** 。电阻、电容、电感、二极管、三极管、开关、晶振、保险丝等等都有对应的贴片封装。

　对于基础元件，应该用多大的封装呢？答案也很简单：如果（不管是当下还是未来）要用厂家的 SMT 服务（比如存在不能手焊的元件），那就都用 0402 封装；如果需要自己手焊那就 0603。如果可以的话我还想试试 BGA 封装。目前暂时还没尝试。

　注：有些特殊的电路，比如强电的，可能直插元件必不可少。我这里只讨论我自己做的弱电板子。

### LED 要用更大电阻

　之前从别人那里听来的经验是：LED 一般需要 1.5-2.7k 的电阻来限流（控制亮度）。经过我反复确认，还是得用比这个大得多的电阻才合适。因为我需要的效果是指示工作状况，而不是亮瞎眼。2.7k 的电阻其实还是会很亮。5.1k 的电阻还算让我满意。板子的空载功耗也小了很多。减小 LED 功耗对于电池供电的设备来说还是有意义的。

### 编程、调试接口去插针化

　编程接口的演进经历了很长的过程。以前的是 JTAG，形态各异，针脚特多：

![img]({{site.img-hosting}}/Pic4Post/lanternds-pcb-design-guideline/jtag.png "JTAG")

　（图片来自：[SENRIO](https://blog.senr.io/blog/jtag-explained)）

　后来开始流行 STM32 系列，开始支持 SWD 接口。但是官方烧写器对应的针脚还是和 JTAG 复用。如下图：

![img]({{site.img-hosting}}/Pic4Post/lanternds-pcb-design-guideline/swd.png "SWD")

　（图片来自：[Keil](https://www.keil.com/support/man/docs/ulinkplus/ulinkplus_jtagswd_interface.htm)）

　整个接口的体积还是大得烦人。

　我最后发现，对于 STM32 的单片机只需要 `VCC` 、 `GND` 、 `SWD_CLK` 、 `SWD_IO` 这几个腿就够了。所以我把固件烧写的引脚精简到了 4-Pin 的 1.25mm 间距封装。当然，可能多出来的腿也有一些作用，如果需要更高阶的功能可以把它们加回来。

　但是我还是不满意，我觉得编程接口在调试完成、开始日常使用之后就几乎没用了，但是它还是占着地方。这不符合「面向日常使用」设计原则。我目前的想法是 **彻底把插针去掉** 。比如在电路侧可以用邮票孔设计，在烧写器侧把编程引脚弄成夹子一样的结构。编程的时候夹在板子边上，用完拿掉即可。

　随着单片机的功能不断发展，我觉得最后的形态应该都是 OTA 升级和烧写固件，即直接通过 Wi-Fi 或者蓝牙把固件传送到板子上，然后写进 Flash 里面，彻底摆脱编程接口。

### 拥抱 USB Type C

　有些应用不可避免会用 USB 接口。如果需要 USB 那就都直接上 USB Type C 接口。即使Type C 封装复杂，手焊难度高，但我仍义无反顾。

　原因很简单，Type C 接口是未来。我再也不想看见其他正反面不能互换的接口类型了，比如 Micro-B，Mini-B。

### 走线倒圆角

　我对圆角有莫名的喜爱。我喜欢在能看得到（没被元件覆盖）的部分把导线都倒个圆角。

　这个一般的 EDA 软件都支持，KiCad 的 Nightly build（截至2021.03.26）已经加入这个功能了。老一点的 KiCad 5.x 版本可以用第三方插件 [RF-tools-KiCAD](https://github.com/easyw/RF-tools-KiCAD) 实现。

　需要说明的是这个是很费劲的过程，但是看到最后的效果的时候觉得这辛苦还是值得的。

![img]({{site.img-hosting}}/Pic4Post/lanternds-pcb-design-guideline/trace-rounding.png "Trace Rounding")

（方框内不是看不到的，就没倒圆角）

![img]({{site.img-hosting}}/Pic4Post/lanternds-pcb-design-guideline/trace-rounding-2.png "Trace Rounding 2")

### 覆铜

　一般做板子最后一步是覆铜，把多余的地方填补一下。然而直接铺满又太没趣味了，所以我在 KiCad 里面用 Hatch 模式覆铜，参数如下：

-   Fill type: Hatch pattern
-   Orientation: 75 deg
-   Hatch width: 1.016 mm
-   Hatch gap: 1.524 mm
-   Smoothing effect: 3
-   Smooth value: 0.3

　这样出来的纹理十分有个人特色，不落俗套，深得我心。

![img]({{site.img-hosting}}/Pic4Post/lanternds-pcb-design-guideline/copper-fill.png "Cooper Fill")

### 去掉元器件标号

　我绝不会允许「R23」、「C15」这样的标号出现在板子的丝印层上。没别的原因，就是 **丑** 。加上以后板子就像半成品，不符合「面向日常使用」开发原则。如果元件另有功能，比如「MCU RST」之类的，我会用单独添加丝印来标明。

　不加会不会影响焊接？不会，可以把元件标号在 Fab 层添加（也需要认真排版），需要的话在EDA直接看这一层即可。或者可以打印出来。

　有些元件的 PCB 封装喜欢给元件——尤其是电阻电容，周围画一个白框。这个我也不能忍，真的很丑。因为电容电阻本该就是焊上去以后即可实现功能，作为「绿叶」式的存在。加了框就像给文章排版全文加粗了一样——没用。

　那么应该用啥样的呢？我觉得 KiCad 默认的封装就都还不错，无论是电容电阻还是二极管LED，都可以直接用。

### 埋彩蛋

　这也是我的一个个人习惯了。我喜欢在主要元器件（比如单片机）底下加上丝印层彩蛋。而且每个板子都会用不一样的图案。这样空板子会有很强的个人特色，但是把元件都焊上去以后又啥都看不见——可以将闷骚发扬到极致。

　哪一天别人用我的板子出了问题需要换元件的时候就会发现这个彩蛋，大概 Ta 也会感觉很惊喜吧。（虽然我不希望我的板子会坏。）

![img]({{site.img-hosting}}/Pic4Post/lanternds-pcb-design-guideline/egg.png "Egg")

### 外围倒圆角

　这个是我最看不惯很多别人设计的板子的一项，就是板子的四周不倒角，拿着扎手，十分不爽。只要是我做的板子，必须消灭所有板子边缘上的不可微函数。

　至于倒角半径是多少，就看具体的板子空间来决定了。我觉得电路板也不非得是长方形的，如果能有很奇形怪状的我也会很欣赏的。

### 不用绿色阻焊油墨

　绿色阻焊层是最常见最便宜的方案（据说有护眼的好处）——所以显得一点也不高端。加点钱（很多厂家已经不用加钱了）换个别的颜色的让自己的与众不同效果才好。到目前为止我最欣赏的还是 [OSH Park](https://oshpark.com/) 的紫色阻焊层，加上沉金工艺，看着就独树一帜，特别惊艳。他们家的丝印层质量也是几乎最好的，清晰而且几乎没有厚度。当然，代价就是贵一些。

## 结尾

　其实多看看别人的设计也能看到很多值得学习的，比如树莓派。这个方面真的是很深的坑，还是得靠长期经验积累才行。

　大概就是这些设计规范了。和其他人合作的时候还是不得不妥协，比如加上 2.54 的排针或者把贴片元件换直插元件。但是我做自己的板子，给自己用为主的话，一定会遵循上面的原则。

　还有些十分偏门的我就不介绍了，比如丝印层字体大小，元件封装绘制等等。以后想到新的会继续补充。