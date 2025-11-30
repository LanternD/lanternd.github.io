---
layout: post
title: 【DIY】3D 打印・桌下电线收纳
description: 利用 3D 打印的部件做了两个桌下电线收纳的解决方案。本文有很多 3D 模型和图片，请留意流量消耗。
permalink: /3d-printing-under-desk-cable-management-system/
categories: [HiTech]
tags: [3D 打印, 收纳, DIY, 设计]
date: 2022-08-05 22:16:26
---

# 　

<script src="../js/ltd3dViewer/three.min.js" type="text/javascript" charset="utf-8"></script>
<script src="../js/ltd3dViewer/STLLoader.js" type="text/javascript" charset="utf-8"></script>
<script src="../js/ltd3dViewer/OrbitControls.js" type="text/javascript" charset="utf-8"></script>
<script src="../js/ltd3dViewer/ltdSTLViewer.js" type="text/javascript" charset="utf-8"></script>

## 题记

　在上一篇日志《[3D 打印・启航篇](../3d-printing-hello-world)》里面我介绍过我买了个 3D 打印机并且打了一些其他人设计的物件。但只是打一些别人打过的东西并不是我买 3D 打印机的初衷。用来设计非标准化的东西提高生活的品质才是我的目标。

　这篇日志拖更甚久，实际上这篇文章里提到的两样东西分别是去年（2021）9 月份和 2022 年 6 月份做的。

　这个日志包含多个 3D 打印部件，不过都是为了服务同一个目标，所以放到一篇日志里介绍了。

　为了这篇日志我还去网上找了个用 Three.js 实现的 STL 文件预览模块，这样就能在日志里看到可以动的部件了。

　本文介绍的是我想了很久的但又很朴素的一个需求：让桌面附近的电线排布得整齐一些。

　我为两个桌子，两个插排（也叫「排插」？不同地方叫法不一）分别做了两套简易束线收纳系统。这里就分两大部分分别叙述。

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/dy-studio-layout.png)
*我的「工作室」大概布局*

　上图我目前工作区间的布局俯视图。需要收纳的地方我也标出来了（「收纳 #1」、「收纳 #2」）。

## 升降桌下电线收纳

　升降桌当然是需要久坐的玩家必备的「外设」了。久坐之后最需要的就是站着继续干活。升降桌最麻烦的地方在于桌面离地面的距离不是定值。如果每个不同的用电器都单独连到地上或者墙上的插排，当桌子上升的时候就会发现所有的线开始从地上爬起，慢慢站直，然后僵直，最后还把插排吊起来…… 画面太美。

　**解决方案** 当然也很直接了当 —— 让插排和桌面相对静止，桌面上升的时候只有插排自己的线会和地面、墙面相对移动。这样就优雅了很多。

　然而如果把插排就直接放在桌面上也不是个好办法。插排最大的特点就是乱：一个长方体，上面长满了各种凸起，还连着很多线 —— 有「三国杀」里面周泰的即视感了。如果放在桌面上熵会极高，影响心情，还会占用不少的面积。

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sgs-zhou-tai.png)
*图片来源：[Fandom - 周泰](https://sanguosha.fandom.com/zh/wiki/ 周泰)*

　所以需求进阶为： **插排要放在桌子下面，吊着就行** 。眼不见为净。

　实现这个需求网上有很多的束线装置可供选择，去 Amazon 搜索「Under desk cable management」即可（[例子](https://www.amazon.com/Management-Xpatee-Upgraded-Computer-Office/dp/B09VL4FB9Z/)）。这些方案都还不错，不过就是用不上我新买的 3D 打印机了哈哈。

　正好我手边有个从 Target 买的白色篮子，本来是我用来装洗过的袜子之类的，但是我发现它是个不错的放插排的容器，于是就准备围绕它把这套收纳系统整出来了。

　最后，明确一下电源需求：

-   电源插排和篮子固定成一体，作为一个整体挪动。
-   插孔要够多，这样才能满足桌面上的一大堆东西的供电。
-   伸出来的线要足够短，不要有过多缠绕折叠。
-   方便拆卸，多插个适配器或者拔掉什么东西的时候要比较方便。

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/cable-organizer-diagram.png)
*电源系统的示意图*

### 部件 1 —— 篮子挂钩

　这个是我最纠结的地方。我为了不在升降桌底下钻孔，选了一个奇葩的钩子线路。 简单来说，先用一个「C 字型」的挂钩作为一个整体的钩子挂在桌子的边缘，再在 C 字挂钩底部嵌进去另一个挂钩，负责勾住白色篮子的两个耳。C 字型的中间高度就是我的升降桌的桌面厚度，所以能正好卡进去。

　我对这个设计并不满意，但是作为新手，就当练手了。

<div class="STLContainer" id="sol1-hanger-v2-hook">
</div>
<div class="STLCaption"><em> 小挂钩 </em></div>
<script type="text/javascript">
STLViewer("{{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol1-hanger-v2-hook.stl", "sol1-hanger-v2-hook");
</script>

　注：文章中所有的 STL 模型理论上都可以互动，如缩放（滚轮），旋转（单击拖拽），平移（鼠标右键）。移动端未知，可以自己尝试一下。

<div class="STLContainer" id="sol1-hanger-v2-main">
</div>
  <div class="STLCaption"><em> 大挂钩 </em></div>
<script type="text/javascript">
STLViewer("{{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol1-hanger-v2-main.stl", "sol1-hanger-v2-main");
</script>

　最后的组合怪就是一个大勾拖两个小勾的模式。然后一共需要两组，因为篮子有两个耳。

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol1-basket-hook-aseemble.jpeg)
*缝合怪的诞生*

　它们究竟如何发挥作用呢？真的就只是个勾子而已：

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol1-hook-assembly-in-application.jpeg)
*用起来的样子*

可以看到在重力的作用下 C 型大挂钩直接弯了…… 这是缺乏经验的我一开始没想到的。不过暂时还不影响使用。

### 部件 2 —— USB 充电器拓展挂件

　我有一个 Anker 的 USB 充电器 Hub，简单说就是 110V 电源输入，然后有 5 路 USB-A 口的输出。这些出口分别接了 USB-A-to-TypeC 线、USB-A-to-Lightning 线、USB-A-to-MicroUSB 线（总还有些老古董用得上）等。这样我可以在桌子右侧快速抽出一根线来给设备充电。

　那么这个 Hub 就需要一个办法固定在桌子的下面不会乱动。所以我就给它设计了一个笼子，一边用强力双面胶粘在桌子底部，另一边把 Hub 塞进去就可以了。设计的时候多加了一些镂空花纹，这样可以省打印材料，还稍微好看点（虽然平时也看不到）。

<div class="STLContainer" id="sol1-under-desk-charger-holder">
</div>
  <div class="STLCaption"><em>Anker 适配器的「笼子」</em></div>
<script type="text/javascript">
STLViewer ("{{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol1-under-desk-charger-holder.stl", "sol1-under-desk-charger-holder");
</script>

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol1-adapter-cage-and-cable-management.jpeg)
*「天高几许问真笼」（上面还放了个东西，是下面要提到的束线器）*

### 部件 3 —— 桌下束线器

　这个东西对走线美观影响也很大。Amazon 也有 [东西](https://www.amazon.com/Organizer-Charger-Management-Organizing-Adhesive/dp/B089XXZ88X/) 供参考。

　当然，为了对得起本文的篇幅，这个东西当然也是自己设计打印的了。看下面这个：

<div class="STLContainer" id="sol1-under-desk-cable-organizer">
</div>
  <div class="STLCaption"><em> 不知道算什么设计的束线器 </em></div>
<script type="text/javascript">
STLViewer ("{{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol1-under-desk-cable-organizer.stl", "sol1-under-desk-cable-organizer");
</script>

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol1-cable-management.jpeg)
*新鲜出炉的束线器*

　同样，这个东西也是用双面胶粘在升降桌的底部。

### 部件 4 —— 显示器电源适配器封印

　我的 LG 显示器有个硕大的电源适配器。我在想，什么时候 Anker 做点 ToBusiness 服务，给这些不会做电源的公司缩小一下适配器尺寸。

　为了把适配器跟篮子融为一体，我又打印了两个小配件，可以把大黑盒子固定到篮子的壁上。

<div class="STLContainer" id="sol1-lg-adapter-holder">
</div>
  <div class="STLCaption"><em> 这个结构简单，量了尺寸一下就能建模好 </em></div>
<script type="text/javascript">
STLViewer ("{{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol1-lg-adapter-holder.stl", "sol1-lg-adapter-holder");
</script>

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol1-power-adapter-holder.jpeg)
*刚打印好新鲜出炉的*

### 最后效果

　简单放个图展示一下最后的效果吧。篮子里面看起来还是挺乱的，但是至少只是在一个小范围内乱了。外面还是很干净靠谱的。况且平时看不到，看不到就是「不乱」的意思。

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol1-final.jpeg)
*最终效果*

　（注：这个是我在旧家拍的图片，和上面的「工作室示意图」并不符合）

　第一次尝试用 3D 打印机弄比较完整的 Project，效果还比较粗糙，但是迈出步子比空想更靠谱。这次尝试也给下次迭代提供了不少思路。

　其实最大的瓶颈是我不想给桌子钻孔。下一个设计我一定把孔钻了。毕竟桌子用了两年多了，现在不那么纠结。

## 工作台桌下电线收纳

　有了上面的东西做参考，这个解释起来就没这么费劲了。其实这个电线收纳比上一个要晚一段时间。它和上一个有一点点区别：它是给我桌面上的很多电器服务的，插拔频率会高很多。所以我打算用一个开放式的设计，即周围没有围栏。

### 材料

-   一个带把手的托盘，Target 买的，其实是个厨房用品。
-   一个 Anker 的插排
-   四个直角弯五金件

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol2-tray-and-outlet.jpeg)
*托盘和插排。托盘本该倒过来用，作为一个架子*

### 勾子

　这张桌子比较廉价，所以我就舍得在它上面钻孔了。在设计之前就去五金店买了几个直角弯件。于是乎设计了一个简单的挂钩，一边连我的底板，一边连那个直角弯件。

<div class="STLContainer" id="sol2-power-tray-outlet-mount">
</div>
  <div class="STLCaption"><em>弧形钩子</em></div>
<script type="text/javascript">
STLViewer("{{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol2-power-tray-outlet-mount.stl", "sol2-power-tray-outlet-mount");
</script>

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol2-hook-assembly.jpeg)
*打印好的勾子并且和直角弯连接件组装好了*

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol2-hook-installed.jpeg)
*安装到了桌子底下*

### 连接板

　插排底下是平的，但是这个比较风格化的托盘实在是没有好办法让插排和它固定起来。于是打印了两个大平片作为转接，一边固定在托盘上，一边用双面胶和插排固定。为了让平片有点不同，设计了一些弧线造型。

<div class="STLContainer" id="sol2-anker-outlet-mounting-plate">
</div>
  <div class="STLCaption"><em>转接板</em></div>
<script type="text/javascript">
STLViewer("{{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol2-anker-outlet-mounting-plate.stl", "sol2-anker-outlet-mounting-plate");
</script>

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol2-outlet-mounting-adapter.jpeg)
*刚打印完的连接板*

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol2-mounting-adapter-assembly.jpeg)
*安装上托盘的连接板*

### 组装

　最后呈现效果就大概是下面这样了。

![img]({{site.img-hosting}}/Pic4Post/3d-printing-under-desk-cable-management-system/sol2-final-assembly.jpeg)
*把插排用双面胶和连接板粘一起就能用了*

　在重力作用下，勾子并不会轻易脱开，而且有需要的时候也可以轻松把整个托盘拿下来，整体还算简单实用。不过这张桌子最后也是要被我抛弃的，所以到时候还得重新设计一个新的电线收纳。那就是后话了。

　可以发现我在第二个收纳里只打印了很少的部件。这也是我学到的经验，那就是 3D 打印并不能代替所有的东西。但只要在关键步骤上解决了问题，那它就实现了价值。

## 后记

　这就是我平时会用 3D 打印弄的东西了。真是其乐无穷。建模的过程会发现同一种东西总是有很多不同的设计思路，多条大路通罗马。这种创造的乐趣真是妙啊。

　这篇文章写成前后也做了很多其他 3D 打印的东西。实在是太多了我以后可能就不详细描写制作的流程了，尤其是那些一眼就能看出来是什么的东西。
