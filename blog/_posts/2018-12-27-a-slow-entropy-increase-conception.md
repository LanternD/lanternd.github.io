---
layout: post
title: 一种低熵增的家居模式构想
description: 想象一种方式让家居的节能减排做到极致。以便可以长时间作为一个独立的系统运转，对社会的依赖降到最低。
permalink: /a-slow-entropy-increase-conception/
categories: [Blog, 视・界]
tags: [熵, 自动化, 家庭, 生产]
date: 2018-12-27 15:38:56 
---

# 　

## 前言与目标

　这个是平时无聊时候的一个构想，并一直在不断完善。但是我一直致力于让它变得真实可信并具有可行性，那就是——一个低熵增的家居模式是什么样的？

　首先说一下我们平时听到的「熵增原理」，或者热力学第二定律的变体：孤立热力学系统的熵不减少，总是增大或者不变。一个孤立系统不可能朝低熵的状态发展即不会变得有序。

　这里有个比较重要的概念，那就是「系统」的划分。如果我们在空间中画出一个空气泡似的球状薄膜，把一栋房子包住，那这个薄膜内的系统是绝对不可能实现熵减小的。我们的目标不是让熵减小，而是尽量减少熵的增加，让这个房子的熵增比别的房子要低得多。用最直观的标准去衡量的话就是：如何把生活成本降到最低，把能量利用最大化。

　折腾这个是为了啥？一个是想象自给自足的可能性，另一个是为了哪天末日危机出现的时候还能有点办法独善其身。反正只是想象罢了。

　为了方便讨论，我们需要一些假设或者前提条件：

-   计算成本时不考虑前期投入，只考虑稳态运行时的样子。
-   需要一定未来科技的支持，但不能违反基本的物理规律。
-   在实现了的基础上，尽量使用少的占地面积。
-   人的干预要尽可能少。
-   模式有可持续性。

　这里不讲严肃的科普，重点是探讨如何节能减排。如果有常识性错误欢迎指出。

## 不是生物圈二号

　人类在上个世纪做过一项有趣的实验，建造一个封闭的环境，在里面模拟整个生物圈，[Biosphere 2](https://en.wikipedia.org/wiki/Biosphere_2)，[生物圈二号](https://zh.wikipedia.org/wiki/%25E7%2594%259F%25E7%2589%25A9%25E5%259C%2588%25E4%25BA%258C%25E5%258F%25B7)。

![img]({{site.img-hosting}}/Pic4Post/a-slow-entropy-increase-conception/biosphere-2.jpg "Biosphere 2")

(图片来源：维基百科)

　生物圈二号唯一的能量输入就是阳光，人类在里面生存，尝试不依赖任何外部的东西。他们实现了各种地貌和植被，甚至还有带浪的小湖。但之后由于各种原因，这个实验并没有成功。我的目标不是构想一个这样的封闭可自主运行的环境，而是降低生活成本，尽量减少熵的增加。因此不会种些不同的植物去平衡生态圈之类的。

## 第一部分：能量.io

　我们生活在一个家庭之中，有无数种方式让熵增加。开灯照明，烧水做饭，吸尘器工作，空调制冷等等。日复一日年复一年，但房子似乎并没有什么变化，电视机沙发还放在那里，床放在卧室，浴室还是一样的喷头，地板上也没有积累更多的灰尘，窗依旧明亮干净……看起来一切都没有变得更混乱，那是因为我们向这个系统中持续地输入了能量或做了功。最重要的输入就是电力了。有了电我们的家居生活几乎不需要任何化石燃料。

　发电毫无疑问会不可避免增加碳排放，所以为了摆脱对市电的依赖了。我们第一件要做的事情就是自主发电。在房子上和房子外一些不使用的地上铺设太阳能发电板。以我现在住的公寓为例，上个月的电费单是这样的：

![img]({{site.img-hosting}}/Pic4Post/a-slow-entropy-increase-conception/electricity-bill.png "Electricity bill")

　才用了311度电，好像还挺省的。红圈里面的「KW Max」就是日常用电的峰值功率了，4kW。可能就是几个锅同时做饭做菜的时候吧。其他时候没啥耗电的东西。

　为了能够自给自足，我觉得太阳能电池板的发电功率应该至少要40-60 kW。首先太阳不是什么时候都有，第二，后面会提到不少需要耗电的设备，也得给它们预留位置。

　白天一般人在外面，所以没什么耗电的东西，晚上反而有照明和其他电器的使用需求，但是那时候又没太阳，怎么办呢？这时候还是得需要电池组做缓存了。乐观估计需要300 kWH的容量。没错，这是我目前一个月的用电量。太阳能电池板+50kWH左右的供电系统虽然能提供日常的用电需求，但是我们还需要应对其他复杂的情况，比如半个月都是阴天之类的。

　300 kWH的电池组有多大？Tesla的车电池容量在80-100kWH之间，占一小张床的面积，但是不厚。所以300 kWH大概占一个普通书桌的面积，大约1米高。可能放在家里有些危险，可以单独建一个小房子装这个东西和其他变电设施。供电就靠逆变器实现了，争取效率达到80-90%。

　说实话这整套东西弄下来估计得10-15万美元。不过咱就是YY，可以不考虑钱的问题。把这些参数调一下，要求不这么苛刻的话，价格也能下降很多。

　如果电池空了，太阳也没出来的话，这时候就要靠市电了。鉴于电池满电的时候太阳能发电系统能卖电给电网，必要时候拿点电也不过分。

　太阳能对太阳的功率还是有所要求。所以家庭选址靠近赤道，阳光充足的话会比较好，冬天取暖用电也能少一点。

　一个选项是使用风力发电系统。这个的成本可就不低了（占地面积也大，那可是钱呢）。可以使用小型风机（10kW这样的大概3万RMB）但是最好离居所远一点，因为确实不太好看。需要说明的是，太阳能是必选项，风力发电只能作为辅助。

　这种独立供电系统初期成本很高，长期也难回本，但是就是看着很爽，很硬核。什么？你说制造太阳能电池板有污染和碳排放？我已经闭上眼堵住耳朵了，不知道那是啥。

## 第二部分：自带生产力——农产品

　我们除了玩电脑看电视睡觉，还得吃饭。通常我们从超市买入生鲜果蔬放在家里，这也是一种外界对家这个系统的输入。为了减少这一部分输入，我们不妨自己生产。我认为这个自己生产的过程对于一个低熵增的家居必不可少。

　原来我觉得这些太遥远，直到我看到知乎上的一个帖子《[有哪些「长期被忽视，但也很精彩」的世界第二？](https://www.zhihu.com/question/268364030/answer/337424120)》。里面提到了荷兰发达的农业科技。看到种一磅番茄只需要1.1加仑（大约4升）水的时候，我还是挺震惊的。

　首先我们应当有个相对固定的菜谱，有些东西是必须种的，比如土豆、青椒、黄瓜、西红柿、生菜等。此外有一些香料和少用量（葱姜蒜等）的东西可以作为辅助，小规模种植。为了实现这个，可能需要单独盖一个多层的温室。东西应该循环产出，即同时培养不同阶段的植物。不管什么时候都有可采摘的成熟果实。立体栽培，高精度灌溉，LED补光等等技能树都应该点齐。

　这套东西多少钱我也不知道，估摸着可能得20万美元。占地面积争取小于14×14 m（可以多建几层）。可以预期的是，这个生产模型会需要大量的电能，这也就是为什么上面太阳能发电要很高的功率了。立体栽培或者多层建筑的话，阳光只能照顾到顶上的部分，其他的植物多半是需要用灯补光的。这几个系统部件之间如何达到完美的平衡还需要「调参」。

　另外，如果气味散发可以控制得好的话倒是可以加个养鸡的模块，只用来生产鸡蛋，不用来吃肉。众所周知，生物链中只有10%-20%的能量能流入下一级。因此生产肉类是一件极其耗能的事情，因此还是交给系统外的生产者负责吧（……去超市买）。不过尽管没有肉，上面的生产环境可以提供淀粉、维生素和少量蛋白质了，应该运转起来以后人饿不死。

　五谷杂粮（大米小麦玉米等）这个可不好说，貌似没听过太多温室种植的案例。这个东西产出应该效率会比较低。希望未来转基因技术能提供更多解决方案。

　尽管设想中阳光是唯一的能量来源，但是有些东西也是必不可少的，比如化肥或者种子。只能说这个模式可以把去菜市买的东西最小化，达到节能减排的目的。如果不考虑阳光这个输入的话，这个系统的熵增应该足够低了。最后，这个环节预计会产生不少热量，任何多余的热量都可以用于屋子内的取暖，把能量利用最大化。

## 第三部分：自带生产力——轻工业

　这个其实没啥好说的，只有3D打印机这个选项了。生产的东西也会很有限，只有一些常见的塑料或者金属部件可以实现。这个部分主要是作为补充，在应急的时候使用。毕竟大量轻工业产品是不可能在自己家造出来的。此外3D打印还需要设计，因此这是一件比较费时费力的事情。

## 第四部分：水循环、废物循环

　水循环也是个有意思的部分。不过我对这部分内容所知甚少，只能大概讨论。如果不依赖市政供水系统的话，又不能打井取地下水的话，雨水几乎只能从天上来了。据我所知，有的地方私自收集雨水是违法行为，因为这个是「公有生产资料」，不能「私有化」。排除掉这个因素，雨水收集也有不少挑战。如果一个地方下雨多，那太阳能发电就压力颇大；如果下雨少，那就没水可用了；下雨多太阳又大，那估计会湿热得受不了；如果雨量季节变化大，那雨水收集和处理设施就会有长时间闲置；高纬度内陆又少雨太阳又少？赶紧搬家吧。

　具体分析的话，亚热带季风气候年降水量800-1500mm，如果能收集雨水的面积有100平米的话，大概就能有100方的水了。水的循环率够高的话应该是够用的；如果是地中海气候300-1000mm，可能勉强够用；温带季风气候冬天比较难受；温带海洋气候应该可行（毕竟荷兰就是这个）。

　雨水收集系统需要单独铺设，按日常经验来看估计都会比较难看，因此可以和其他的设施整合到一起，比如太阳能电池板，屋顶等等。集中到一个蓄水池以后经过过滤、净化消毒、软化，再抽到一个高处的蓄水池作为备用。出于健康考虑，这种收集来的水还是不用来饮用和烹饪比较好。我们可以用来浇花、种菜、冲厕所、洗澡、洗车。没那么讲究的话烧开或许可以饮用。否则还是不能完全避免对市政供水系统的依赖。如果科技够高的话，冲厕所的水兴许也可以再回收循环，就看心里能不能跨过那道坎……比如想象自己在国际空间站上。

　废物循环似乎一个家庭能做的很少。顶多就是加个化粪池+沼气模块。其他生活垃圾处理起来那可是太费劲了，几乎肯定是要增加大量碳排放的。如果含有塑料和玻璃那就无法自己解决了。极端情况下，只吃上面自己种的粮食，不吃零食少买东西的话，日常生活生产出来的垃圾会很少，一个月可能装不满一个大垃圾桶。这样可以自己运到垃圾处理站，还可以削减一笔上门收垃圾的服务费。

## 第五部分：自动化

　这个也是个重点部分，理想状态下，上面的各个模块都应该实现自动化。比如果蔬生产模块会自己播种、灌溉、收割。多余的食品还可以送到冷藏室储存。整个过程不需要人的干预。

　想象一下只需要站在厨房发出一个指令，一会就有刚摘的新鲜西红柿送到面前，这个感觉太好了。但也不能完全自动化，我觉得机器人炒出来的菜应该还是差点意思……

　此外还应该实现自动化加猫粮，铲猫屎，开猫罐头……嗯嗯。

　自动化系统还应该在各个环节帮助减少熵增。比如没有人的房间自动关灯，人外出时降低屋内温度。

　还有自动清洁和自动拉窗帘，自动监控各个地方，自动数据可视化，自动整理被弄乱的桌面，自动叠被子，自动冲咖啡泡茶等等。

　这样程度的自动化需要真正的万物互联（物联网）加上发达的机器人系统和AI控制系统，可谓任重道远。人类可以「懒死」在这样的建筑之中。如果啥都自动化了，人能干啥？人能做的事情太多了，画画弹琴看电影都行啊。自动化的目的是为了减少不必要的重复劳动。真正想要燃烧卡路里那应该去健身，而不是投身到家务活中。

　当然也可以不要这么自动化，保留一些人类活动的烟火气息。按人类发展的套路来看，如果这种模式真的能实现，不出两代人，这种全自动化的模式就要变得「不可逆」了。

## 第六部分：出行

　都到这个程度了，出行当然是电动车了，把零碳排放进行到底。每天回来都充个电。如果要出远门那就租车吧。

## 小结

　建造这样的系统保守估计要70-90万美元。占地约50 m × 30 m。其中主要的居住区占一半左右，高度大约三层楼。另外很多技术现在还没有实现，所以这部分的价格不算在其中。

　这样的系统可以最大程度减小对社会的依赖。这样下来每个月的花费将变成少量水费、少量食品费，常规的网费、宠物用品费、3D打印耗材等等，估摸着100美元/500 RMB差不多了。

　鉴于有农业生产这块，所以可以实现负碳排放。从熵的角度分析，这样的模式应该算低熵增的模式了吧？生命就是一个努力抵抗熵增的过程，是一种从无序中创造有序的形式。

## 抗灾害能力分析

　如果世界末日来了，人类突然消失了，这个系统靠着太阳应该还能撑个挺长时间，后面面临的问题可能是营养不均衡导致的慢性疾病。不过如果人类消失了，应该能打猎到一些野生动物吃？

　如果超级火山爆发或者小行星撞地球了，灰尘遮天蔽日，那就做好物种大灭绝的准备吧，这种情况只能靠地堡勉强维持了，就是把上面这套系统搬到地下。唯一能源是地面的风力发电，同时建一个超大的蓄水库，把水循环做到极致。兴许这样也能存活一段时间。如果风力发电年久失修挂掉了，那就Game Over了。

　如果这整套系统好使了，那火星移民可能就有戏了。人类必须至少在地球表面和地下若干米能做出这样一个系统，之后才好说。

![img]({{site.img-hosting}}/Pic4Post/a-slow-entropy-increase-conception/mars-colony.png "Mars Colony")

（图片来源：Elon Musk的火星移民PPT）

　再写下去就要变成《火星救援》了，我决定就此打住。以后可能还会时不时更新一些细节或者什么重要模块。剩下的就是期待人类科技的进一步发展了。希望20年以后我能用低成本实现这样一个系统。或者可控核聚变电站能够小型化，那样就可以少折腾很多东西了。