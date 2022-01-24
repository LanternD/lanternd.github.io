---
layout: post
title: 3D 打印 · 启航篇
description: 开始 3D 打印之旅。本文介绍 3D 打印的基本流程以及我从网上下载并打印的几个模型。
permalink: /3d-printing-hello-world/
categories: [HiTech]
tags: [3D 打印, DI机械设计, 家居]
date: 2022-01-19 15:19:45
---

# 　

## 3D 打印之旅

　工作之后有了一些业余时间，于是我就开始盘算着弄一台 3D 打印机来实现我的一些想法。其实我觊觎 3D 打印机已经多年，但是我愿意为之花钱的心理账户一直钱不够。同时也没有必须要买的理由（生活不会有显著变化）于是它就在 Wishlist 徘徊了多年。

　2021 年 9 月 11 日的时候我终于下决心买了一台，型号是 Prusa Research 的 [Original Prusa MINI+](https://www.prusa3d.com/category/original-prusa-mini/) （为啥有个「Original」呢？因为他们把硬件软件都开源了，其他人可以有自己的版本，所以用这个词以示区别）。看各种测评的时候 Derek 的文章给了我不少启发，广告一下：《[11 款最好的 3D 打印机推荐](https://gonglue.us/3d-printers)》。之前这篇文章上面是有 Prusa MINI+ 的，但是好像最近删掉了。还有另一篇介绍 Pursa Research MINI + 的文章：《[Original Prusa Mini+ Review: Mega Mini - All3DP](https://all3dp.com/1/original-prusa-mini-plus-review-3d-printer-specs/)》，仅供参考。

　咱普通人用的 3D 打印机大概就两种原理：

-   一种是材料 - 熔化 - 堆叠（FDM），这种比较传统，符合大部分人对 3D 打印机的想象。便宜，好用，可打材料种类多。缺点是精度（相对）差一些，时间也长。
-   另一种是光固化，原理是一种特殊液体树脂在特定波长光照下会变硬。这种打印克服了上面的缺点。额外的缺点是味道大，清洁费事。

　我买的是第一种，原因是我对打各种 ACG 里的模型、雕像等等精细模型不太感兴趣，所以也就不需要太高的精度。我更喜欢做一些机械结构方面的设计和加工，用 3D 打印出来的东西提高生活的效率，同时会尽量兼顾美观，FDM 型的已经完全能够满足我的要求。总之我在挑选这两个大类面前没有太费心思。但是选择具体型号确实用了些功夫，在 [Prusa i3 MK3S+](https://www.prusa3d.com/product/original-prusa-i3-mk3s-3d-printer-3/) 和 Prusa MINI+ 之间徘徊了很久。本着新手不用太高级的想法（以前经验教训太多了），就还是选了便宜的。

　货不到一周就从捷克 FedEx 送到了我这。然后我大概组装了一两个小时，接着就开始了我的打印之旅。

## 打印的流程

　第一次玩 3D 打印会觉得有些复杂，总统来说要经过四大步骤：

1.  在 3D 建模软件里面设计模型，既可以是艺术向的游戏、电影等 3D CG 建模，也可以是机械设计里的非标数模设计。
2.  将模型三角形栅格化（Point-cloud triangulation），导出成 STL 或者类似的模型。STL 模型是业界最通用的文件格式。放在软件领域，它相当于可执行文件，放在办公软件领域，它就像 PDF。
3.  切割：用 PrusaSlicer 或者类似的软件对 STL 模型进行切割，分成很多很薄的层，然后生成出 3D 打印头运动轨迹的 G-code（工科的朋友们应该对这个熟悉）。此外，一些形状奇怪的结构，比如悬浮在空中的，需要加支撑结构，通常也是在这一步完成。
4.  打印。有了这个 G-code，我们就可以加载进打印机里开始作业了。这一步也能体现出不同的打印机的区别。不同人对「区别」会有不同的感知，这就不细说了。

　上面这四步中，第一和第三步很大程度决定了出来模型的好坏。门槛最高的是第一步 —— 设计。我对 CG 建模不是很了解，但是对机械相关的设计还是有些经验（本科玩科创学的）。正是这部分知识给了我会频繁使用并能够驾驭 3D 打印的信心。

　下面是个简单的例子来显示出不同的步骤：

![img]({{site.img-hosting}}/Pic4Post/3d-printing-hello-world/demo-1-freecad.png)
*第一步，在建模软件里设计出样子*

![img]({{site.img-hosting}}/Pic4Post/3d-printing-hello-world/demo-2-stl.png)
*第二步，导出成 STL 文件*

![img]({{site.img-hosting}}/Pic4Post/3d-printing-hello-world/demo-3-slicing.png)
*第三步，在 Slicer 里面分层，生成 G-Code*

　这个软件右边有个滚动条，拖动它可以预览不同的层的样子。从最低拖到最高就能看到整个部件从无到有的过程了，很有意思。这个软件还会告诉你打这件东西需要多少米的耗材、等效的美金是多少、需要多长时间等等。可谓还没开始打就已经胸有成竹了。似乎很高级很智能，但原理上和打印纸张前的预览非常接近。

　（第四步打印可以在下面的图片找到）

　上面的每一项 B 站或者 YouTube 都有很多教程可以学，我就不班门弄斧了。但其实除了第一步费时间以外，其他的操作时间都是几分钟搞定。如果我们去网上找别人的作品，可以直接跳过前两步，省很多时间，缺点就是没了乐趣，也不太可能实现自定义。我建议还是得至少学一些建模知识，不然只依赖其他人的设计，3D 打印机很可能最后会沦为吸灰工具。

---

## Hello 3D Printer

　正如编程语言学习中的第一段代码是打印「Hello World!」一样，3D 打印也有自己的 Hello World，那就是 [Benchy](https://en.wikipedia.org/wiki/3DBenchy)，一只小船。它在 3D 打印社区里它地位如此之高，以致于有大量与之相关的周边甚至有 Geek 按真实世界的比例做了一艘。

　我打印的第一个作品当然就是 Benchy 了。尽管我已经看过太多 3D 打印的视频了，但实际看着打印材料（PLA）从喷头中被挤出，在面板中逐渐成型的样子，像是变魔术一样无中生有，令人着迷。打印这样一个东西需要 2 小时，似乎很长对吧，但是一旦开始打印了就不用管了，到点回来确认即可。尽管如此，作为第一件作品，我还是盯着它看了至少一个小时。

　打完以后我拿在手里把玩了许久。摸了摸 3D 打印特有的分层纹理，感觉其实要比我想象中更加光滑。3D 打印技术这些年确实有了长足的进步，要知道这种打印精度在四五年前那都是 2000 美元以上的 3D 打印机才能实现的。

![img]({{site.img-hosting}}/Pic4Post/3d-printing-hello-world/3dp-bench-1.jpg)
*Benchy 成型中，封顶大吉*

![img]({{site.img-hosting}}/Pic4Post/3d-printing-hello-world/3dp-bench-2.jpg)
*第一件打印品 —— Benchy 大功告成*

　分层打印最大的问题（之一）是斜面结构只能用不同层去近似，导致成品会有明显的锯齿结构（👆 小船边沿部分）。解决方法要么是换光固化打印机，要么是后期砂纸磨平。我的解决方案是，不去解决它。

　打印完 Benchy 以后，连着好几天晚上我都在网上找其他人设计的模型来打印。

　那么，去哪里找模型呢？[All3DP 这个网页](https://all3dp.com/1/free-3d-models-download-best-sites-3d-archive-3d/) 总结了很多可以找到模型的地方，可以参考。我逛得最多的是 [Thingiverse](https://www.thingiverse.com/)。逛这种社区最大的感受就是世界之大无奇不有。人类作为整体的想象力和动手能力真的很强。

## 第二件作品 —— Apple Watch Dock

　Thingiverse 社区里确实有很多我想打印的东西，不过最终决定我要不要打印的是这件物品的实用性，而不是美观、有趣程度。很快我就定位到了下一件我想打的东西：一个比较酷的苹果手表充电座。

　链接：[Apple Watch Charging Dock - Classic Mac](https://www.thingiverse.com/thing:1216409)

　这个东西我在知乎上看到有人也打过。👆 上面网站里也有原作者自己拍的图，效果更好。这里我就放一下我自己打印出来的效果图吧。

![img]({{site.img-hosting}}/Pic4Post/3d-printing-hello-world/3dp-aw-dock-1.jpg)
*打印完其中一件了（一共有两个零件）*

　诚然原始设计的象牙白色更接近我心中它应该有的样子，但我手头也没有相应颜色的线材。我也是通过打这一个作品才知道，原来 3D 打印机切换线材不影响最后成品。而且两种颜色合在一起的效果也挺酷 🆒 的。

　它充着电的时候的样子真的很像一台老式苹果台式机。

![img]({{site.img-hosting}}/Pic4Post/3d-printing-hello-world/3dp-aw-dock-2.jpg)
*实际使用效果图*

　这个东西我用了很长一段时间，但最近我换了第七代 Apple Watch。表盘比较大，不太合适塞进去。目前它正在徘徊在被打入冷宫的边缘。

## 第三件作品 —— AirPods 底座

　第三件 3D 打印作品也是别人设计的，一个放第一代 AirPods 的座。类似的功能的底座有很多种设计，一搜一大堆。我选中这件只是比较欣赏它和桌面相连接部分的圆弧倒角。我想找一个酒杯 🍷 那样的高脚杯设计，但是没找到。

　链接：[Charging Dock for AirPods](https://www.thingiverse.com/thing:2832173)

　它其实有个孔可以把 Lightening 接口在底下连接，这样可以把 AirPods 壳往上面一放就充电。我自己对这个功能没什么需求，所以从来没把线放进去过。有时候线的弹力会让整个底座（很轻）翘起来在桌面上，显得很不优雅。

　打印这一件的时候，红色的线材（灰的、红的都是附送的，很短）也耗尽了，于是后半段我换成了一大卷「[星空黑](https://www.prusa3d.com/product/prusament-pla-prusa-galaxy-black-1kg/)」（黑色的里面掺杂了一些银色颗粒提升质感）颜色的线材。最后打出来的效果也很赞。

![img]({{site.img-hosting}}/Pic4Post/3d-printing-hello-world/3dp-airpods-dock-1.jpg)
*第一层，像是用笔在涂颜色*

![img]({{site.img-hosting}}/Pic4Post/3d-printing-hello-world/3dp-airpods-dock-2.jpg)
*双色无缝切换*

![img]({{site.img-hosting}}/Pic4Post/3d-printing-hello-world/3dp-airpods-dock-3.jpg)
*实际使用效果图*

　放上 AirPods 以后效果没有我想象中那么好。因为它的内部太浅了，导致 AirPods 有三分之二露出在外。另外我期待的是 Dock 的内壁能和 AirPods 紧密贴合，但是事实上也有很大的缝隙。用手摸的时候 AirPods 会来回晃动。不过瑕不掩瑜，它总体令我满意。如果我有时间的话一定会重新设计一个符合我想象的模型。

　现在回头看，我初期打印的东西都属于桌面上的小摆件。确实，有了这些东西以后我的桌面慢慢显得不一样了。我东西用完以后就会放到特定的壳或者座里，而不是像以前一样，用过的东西随手一放，让桌面变得凌乱。不过话说回来，上面这两件东西的色调还是太深了，尤其是这个正红色，过于抓人眼球。我比较喜欢在桌面上放点浅色的东西。我下一卷线材买的是象牙白色，但是还没有开始启用。毕竟一公斤线材能打好多好多的东西。

## 第四件作品 —— 桌子护角

　这个是我躺床上看到旁边 IKEA 床头柜的尖角突然想到的东西。我开始幻想半夜如果我起床没有灯光，不小心头一下磕到床头柜的样子…… 我感觉我需要给柜子加点防护。于是我就又去 Thingiverse 搜到了这个东西：

　链接：[Corner Guard](https://www.thingiverse.com/thing:2394937)

　这件物品有着特别的表面设计，即使是现在的我也没法 100% 设计出它的样子。这件原始大小大约是边长 2cm，对我来说有点大，我就缩减了一些。在 Slicer 里面可以随意调节物体的大小，十分方便。最后我调节到了直角边长 1.5cm，打出来正好。像图中这种带悬空的结构就得上支撑了。Slicer 里面也有自己生成支撑结构的算法，不想管的话就直接按默认的就好了。

　3D 打印产生的分层纹理在两个侧球面上很正常，是一堆弧线叠在一起。而在第三面则能看到一圈圈的等高线。

![img]({{site.img-hosting}}/Pic4Post/3d-printing-hello-world/3dp-corner-guard-1.jpg)
*打印好了，第一次尝试加支撑结构。支撑还需要后期手动抠掉*

　对了，在 Slicer 里面可以排列多个同一件物品，这样可以一份 G-Code 打印好多东西。上面就是一次做了四份。

　后来我想根据实际应用场景来涂上相同的颜色，于是就去买了点 [Mont Marte](https://www.amazon.com/gp/product/B07BPPGYB1/) 亚克力漆和 [Tamiya Primer](https://www.amazon.com/gp/product/B0000WS01E/)（模型补土喷漆）。然后把这个桌子护角上了个色，所以现在就是带颜色的版本了。

![img]({{site.img-hosting}}/Pic4Post/3d-printing-hello-world/3dp-corner-guard-2.jpg)
*改头换面后的样子。调色好费劲 😂*

---

　以上的东西都是我从网上找来打印的。一方面作为 3D 打印新手仍需要一个学习过程，另一方面，机械设计相关的东西我也忘了好多了，还得从头学习一下，尤其是现在没有 SolidWorks 了（以前学校有 License），得自学一下 FreeCAD。

　之后我就开始了我自己的 DIY 之旅。我自己设计的东西，以及关于 3D 打印的知识点、Tips 等等就放到后面的日志再介绍吧。
