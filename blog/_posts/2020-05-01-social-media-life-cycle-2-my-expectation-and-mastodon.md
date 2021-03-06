---
layout: post
title: 社交网络的谢幕登场循环（下）——走向以人为本的去中心化
description: 谈谈我需要什么样的社交网络形态，以及部署Mastodon之后的感想。它是一个号称「去中心化」的微博平台，已经接近我想要的形态了。
permalink: /social-media-life-cycle-2-my-expectation-and-mastodon/
categories: [Blog, 视・界]
tags: [社交网络, Mastodon, 理想, 乌托邦]
date: 2020-05-01 23:14:31
---

# 　

## 关于上篇

　上篇《[社交网络的谢幕登场循环（上）——断舍离](../social-media-life-cycle-1-afk/)》介绍了我用过的一些社交网络、使用感想以及他们让我不满意的地方。然后这篇就是说说我期望的社交网络形态和我部署Mastodon的感想。

## 背景知识

　什么是[Mastodon](https://github.com/tootsuite/mastodon)：《[拿以前的文章凑数，再次推广一下 mastodon - Nachtzug](https://nachtzug.xyz/2018/08/16/an-old-intro-of-mastodon/)》

　简单来说，它是一套开源、可部署的平台，每个站点叫做一个 **实例** 。每个实例都可以当成一个独立的「Twitter/微博」站。和以前那些平台不一样的是，这些实例之间可以通过一套协议互相沟通。这样就可以实现各自管理各自的站点，但是又不至于成为一个孤岛，像博客一样自说自话。这样就实现了一种「联邦制」的「去中心化」。

　与之相对的是「中心化」，比如Twitter、微博、Facebook等等。大家用一个号登录，然后访问到整个平台上的几乎所有人或者所有信息。

## 我（们）需要什么样的社交网络？

　我期望中的平台还不存在，所以以下是我的想象和理想。

### 以人为本

　社交网络应该聚焦到人本身。首先，每个人应该有一个自己的空间（这里说的不是QQ空间）。人们可以自由地记载此时此刻的想法，不管是幼稚的还是成熟的、知识技能或是个人情感、中文的或者英文的、晒娃晒旅游照、爱国的或不爱国的，甚至黄赌毒、反党反革命、血腥暴力……都没问题。然后用技术手段确保这一切默认情况下都是 **仅自己可见** 。里面没有广告，所有状态都按时间顺序排列，一切都非常有组织。我们可以随时获取一份完整的属于自己的状态流。

　同时，每条状态都会有相应的标签标记出类别，比如「短文字」、「文字+图片」、「长文字（文章）」、「短视频」、「长视频」等等。针对某种大类可以有不同的操作。当然，针对某一条状态也可以有具体的操作。

　每个空间应该都有一种储存介质和人用一种方式绑定在一起，比如一个运行在某个可穿戴设备上的服务器，或者科幻一点的——大脑植入的芯片，但也不一定需要是物理上实体的绑定，现阶段可能是一个租用的服务器。这个介质完全受其拥有者控制，逻辑层面上不属于某个公司、某个城市、某个党派，也不属于某个国家。拥有者可以选择不用它，可以销毁它，也可以有办法长期（或永久）保留它。而且技术上， **别人在任何时候无法窃取里面的内容** 。这个东西应当可以相伴一生，甚至可以用遗书确定死后要不要公开等等。

　或者换句话说，这个就是你大脑或者意识的投影，只不过是用文字或者其他媒体在一个地方记录下来的罢了。

### 去中心化

　其次，这个网络应该去中心化，即没有一个中心节点储存有 **所有人或者注册用户** 的信息、状态、留言、点赞等等。

　但是在外部可以存在一些中心化节点可以抓取个人空间里面的信息。个人空间也应该提供权限和接口，让外部的平台读取到这里面的信息。而空间的主人有完全的自主权决定外部可以获取到什么东西。

　外部的中心化平台可以根据自己的喜好，抓取不同用户关于某一类话题的内容，并做成一个信息流可供人浏览。广告投放什么的也随意。所有流量都可以在这些外部平台上交换。甚至用户可以把自己的隐私交给广告公司或者大数据公司来赚钱。

　举个例子，这个场景下的「知乎」应该改造成：用户A可以在自己的空间发布一个问题，并提醒知乎去抓取。知乎抓取到以后放到一个公共的地方，让所有人能够查看。用户B想要回答问题的话就在自己空间创建一个这个问题的Copy，并在下面写下自己的回答，然后通知知乎去抓取，并且可以选择是否匿名（需要技术上实现真正的匿名，知乎也不知道是谁提供了这个回答）。知乎可以自由决定是否要抓取（通常会抓取，毕竟信息多一点是一点）。回答会被加到问题的下方，给所有人浏览。

　这个听起来和现在的模式相似，区别就在于，所有的回答都至少存在两个Copy，一个属于提问者/回答者，一份属于外部的中心化平台。属于用户的那份Copy完全由用户掌控，外部中心化的那份则可以由外部平台按照某种版权方式进行发布。具体方式应该由平台和用户协商实现。

　有一天知乎想封掉一个号，那没关系，直接把相关的回答删掉即可。但该用户发送的信息还是存在于他/她自己的空间。另一个网站「不知乎」喜欢的话也可以和答主协商，抓取这些回答用来展示。

　或许这样也更容易找到圈子。比如某个平台只接入汉服的爱好者，大家就可以选择在这个地方交流这部分信息；又比如某个平台专门用来分享猫图和养猫经验。每个圈子都可以有自己的规则，有的重视文字分享、有的只关注图片等等。用户根据自己的爱好、 **用不同的昵称** （可选） 、加入不同的圈子即可，终于不再需要给每个平台注册新的账号了。这有点像现在的社交登陆，区别是这个登陆令牌就和一个实体直接挂钩了，不需要中间多一层数据交换。

　相应的，如果某个人的空间公开出来的信息违反了当地法律，那么执法机构可以依法处理这个人；如果是某个平台抓取的方式有问题，那么执法机构应该处理平台。

### 社交网络化

　每个人都可以关注其他的人的空间，可以点赞/踩，可以评论，可以转发（到自己空间）。状态的浏览权限也相应地扩展到「仅自己可见」，「仅关注者可见」、「仅互相关注者可见」、「分组可见」等等。每个节点都应该维护自己的一份好友列表和关注列表。所有点赞、评论等可以通过网络中的处理节点完成，但不会在这些中继节点上留下记录（除非用户允许这样）。

　这个有点像朋友圈的权限下放到了每个社交网络的独立空间中。总之还是为了保护隐私以及确保用户对自己数据的掌控。

### 实现难点

　上面介绍了我心目中的社交网络的形态，但是实现它充满了难点。

　首先上面说的很多「技术上」在目前都比较难看到可行性。有印象高晓松提到过区块链可以成为一个载体，但是分布式的数据的存储和加密还是很费劲的，很难不依赖更多的中心化服务器。之前有看到过个平台叫Steemit就是这样，文字记在分布式账本上，但是图片视频却在AWS上。（就我有限的知识看）区块链还有个记账属性，写好的东西就永久存在链上了，不太符合我的想法。

　其次，这种东西从用户角度会有技术门槛。除非经过技术的发展，一切操作都傻瓜化。不然现阶段看我们还是得靠自己的技术来实现这样的功能，比如Mastodon就需要买域名、租用服务器、部署程序、自己设置权限等等，没有计算机背景还是有点难弄的。

　最后，这样的平台动了现有社交网络的蛋糕，可能没人愿意真的弄。况且这样高的用户自主权和隐私保护反而让很多做社交网络平台的商家变得很被动。有很多盈利模式都得重新定义，甚至可能赚不到钱。

　我短期内不期待这样的社交网络能真的实现，但是我还是找到了接近我期望的东西——Mastodon。

## Mastodon，一个接近想象的乌托邦

　如上面文章简介所述，我折腾完了Mastodon，建立起了一个自己的实例（[https://dlyang.tk](https://dlyang.tk)），并已经稳定运行了30天。这个应该不是我折腾的终点，却可以作为一个大的Checkpoint或者说里程碑。

　我给这个站点取名DY-Talk，只是因为 `.tk` 域名不要钱，正好它又是Talk的缩写。

![img]({{site.img-hosting}}/Pic4Post/social-media-life-cycle-2-my-expectation-and-mastodon/mastodon-ui-2.png "Mastodon")

### 精简的社交网络

　Mastodon项目是一个德国小哥发起的，所以整个来看长得像是Twitter、Facebook还有Tumblr的合体。中文界面因为翻译原因，也都有点生硬。不过我无所谓，它现在对我来说真正重要的作用是我可以自由地发状态。当我回头看我自己的实例，我可以精确地知道我在某时对某事的确切想法。

　我有很多的东西想记录，大部分东西也不够有趣，如果每一条都发朋友圈，无疑会打扰到很多人。况且真的有人回复了，我还得响应。Mastodon就给了我一层很好的隔离：如果真正对我的三言两语感兴趣的人，便不会吝惜多点一次链接跳转到我的[DY-Talk](https://dlyang.tk)上。我可以很好地避开大部分人的无效关注，既不需要他们点赞评论，也不影响别人的时间线。我现在需要做的只是把[公开状态流的链接](https://dlyang.tk/public)贴到个人简介里，感兴趣的人自然就来看了。

　正如有了博客我就不需要再试图维护Medium、简书、CSDN、知乎、Quora、Tumblr等等（仅举例，很多我都没用过），有了Mastodon，我就可以不用在Twitter、Facebook、朋友圈、微博发任何东西，（此处有Flag）更不会在未来新出现的任何社交媒体上发东西了。我需要维护的东西就只剩下博客、DY-Talk和Instagram而已了。而Instagram上面发的图我也可以借助[IFTTT](https://ifttt.com/)，推送到Mastodon上面作为备份（ `~尚未实现~` 2020.05.15 Update: 已实现）。 **如此一来我的长文字思考、短文字日常状态、图片都有了安放之处** 。如果未来我拥抱视频制作，那么我就再添加上唯一选择YouTube。

　除了Ins属于Facebook，在一定程度上还是有所局限，其他站点我都可以对站点的内容和样式有100%的主权，这让我感到舒畅。

　题外话：有个应用叫[PixelFed](https://pixelfed.org/)，可以说是Mastodon版本的Instagram。可以用它搭建一个自己的照片流平台。不过我目前还没有行动的计划。

### 本站与跨站

　毫无疑问我拥有DY-Talk这个实例的控制权，实现了「以人为本」。但同时Mastodon提供了一个很不错的机制，即[ActivityPub协议](https://www.w3.org/TR/activitypub/)，来和其他Mastodon实例去进行交互。由于Mastodon只是一个程序，任何人都可以用它来创建实例。这样网络上存在着大量实例，而有意思的是这些实例里面的用户可以不注册其他实例却能够对很多状态的浏览和点赞评论等。这是它的新颖之处。

　需要注意的是在别的实例发东西需要遵守当地实例的规矩。

### 状态可见范围的控制

　我可以精确地控制我发的状态的可见范围：完全公开、站内公开、仅关注者可见、仅某人可见、可仅自己可见。这基本符合我上文提到的想象，只是层级没有这么多而已。至少这个在技术上没有什么难点。

### 外部获取

　目前应该没有上文提到的「外部平台」去调取我的说说的空间。但理论上可行，跨站数据流是可以随意访问的。当然我的大部分状态也都没有价值就是了。只是想说Mastodon本身在这个方面是可以实现我的社交网络愿景的。

### 未实现

　Mastodon在较大程度上实现了我想要的效果，但它仍存在问题，与我想象中的社交网络仍有差距。

　首先是拥有者对界面的样式和功能的控制有限。我们可以改CSS实现简单的样式修改。但是要改动更多东西，实现更多功能等等，对个人用户来说门槛挺高的。结果就是大家的界面长得都差不多，有点单调。不过如果它的定位只是「忠实记录用户想法」的话，这个小缺点就完全不是问题。样式化、多样化完全可以由外部平台实现。

　其次，Mastodon本质上还是给发短博客用的，默认每条最大长度为500字。它不是CMS（Content Management System，内容管理系统），无法承载复杂的页面，比如图文混排等等。所以它可以支持的媒体类型有限。目前方案是博客负责长文字，在Mastodon里放一个链接。

　再者，Mastodon没有真正提供接口给外部实例获取实例内部的资料，这样的话也就没有外部平台愿意干这个事情了。虽然上面说到技术上可行，但毕竟依赖爬虫的话是很低效的。

　最后，Mastodon期望的是每个实例自成一体，大家可以按照话题自己组圈子（在[这链接](https://joinmastodon.org/)下方能搜到一些），自己定内部规则。即用户注册了之后就常驻了，而不是每个实例严格只有一个用户。这种情况下最后形成的是一个个小型的中心化节点。不同实例人数不一样，可以类比为大城市、卫星城市、村庄、家庭等组织形式。但由于技术门槛的存在，大部分人还是选择「借一块地」用，而不是「自己盖个楼」。按照现有模式，作为一个大的实例的站长，他们很可能找不到盈利的方式，却又不得不面对庞大的服务器开支，最后前途也就不明朗了。

　总结就是，Mastodon本身想法挺不错的，但是不是为我的想法设计的，所以从根本上无法达到我想要的效果。

## 尾声

　关于社交网络的话题我觉得这两篇应该足够了。这大概是我的互联网生涯的又一个里程碑，有什么需要补充的话我就在下一个里程碑出现时再一并阐述了。
