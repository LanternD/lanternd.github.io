---
layout: post
title: 挖错方向的地道
description: 来聊聊寒假期间科学上网的雷区。
permalink: /tunnel-in-the-wrong-way/
categories: [Blog, 视・界]
tags: [科学上网, 躺枪]
date: 2018-02-11 12:34:56
---

# 　

![img]({{site.img-hosting}}/Pic4Post/tunnel-in-the-wrong-way/2018.03.04.tunnel.png "Tunnel")

## 太长不看版

　我拿在美国家里的树莓派搭了一个SSR服务器，然后IP被GFW墙了。于是在美国就不能访问国内的很多网站了。所以以后别拿自己家的电脑挖地道……

## 换个表述

　我们通常说「翻墙」表示科学上网，但是除了从天上过去不还可以从地下通过嘛。所以下文就用「挖地道」表示「翻墙」了，以及「梯子」=「地道」，含义上没有任何区别……

## 数据需求

　Google和Dropbox之类的工具配合已经是家常便饭了，用不了可是要大大影响工作效率的。这次回国肉身翻回了墙内又只能使用局域网了。

　为了能够和真·互联网对接，我回国前捣腾了一下各种翻墙工具。VPN最近管的比较严，只好向久闻大名的ShadowsocksR（SSR）看齐了。然后我在搬瓦工（BandwagonHost，简称BWG）随便买了个5刀一个月的VPS，两分钟大约就部署成功了（教程略）。然后找国内的小伙伴测试了一下发现没有问题，于是就放心了。

　结果回国前的一天，我不知怎么的脑子一热，想着万一搬瓦工的被墙了，我不就前功尽弃了嘛，还是双保险的好。然后给 **家里** 的树莓派也装了个SSR，在路由器开了Port Forwarding，从此拉开了悲剧的序幕。

## 凑活的网速

　SSR在国内似乎也已经被运营商识别流量并限速了（尽管它号称能通过流量混淆防识别）。我实际用着的时候顶多50kB的速度。Google搜一下东西，看个网页啥的不成问题，但是视频基本就是最低画质卡卡顿顿了，Dropbox同步文件更是奢望。玩Ingress也是费尽九牛二虎之力。

　面对这种情况有啥方案呢？我发现某个地道刚连上的时候会稍微快一些，之后速度慢慢下降。所以我就频繁切换搬瓦工地道和树莓派地道，心情不好了就换一个。

## 降临

　「东窗事发」。

　我快要从中国回到美国的时候发现连树莓派上不去「广域网」了，当时也没多想，反正双保险嘛，接着用BWG的地道就好啦。

　回到美国，我发现各种听歌App都放不了歌了，而切换流量就可以。再后来发现豆瓣上不去，看自己博客发现没图片了（七牛的图床），CSDN，果壳等等全都上不去了（淘宝和知乎之类的可以）。我才意识到大概我是被墙了……

## Debug阶段

　第一步是先从家里Ping一下国内的服务器，丢包100%。第二步是远程桌面连国内家里的电脑，Ping我家IP，丢包100%。第三步从我家连上在加州的BWG，发现能上国内的网了。基本可以确信了。

　人算不如墙算，BWG的SSR用了这么久结果啥事没有，自己的树莓派玩了一下结果被GFW墙了……简直是不作死就不会死。而且墙是双向的，从国内访问不了国外，从国外也访问不了国内（大部分）。

　地道真是挖错了方向。

## 解决之

　很显然墙屏蔽的是IP，换个IP就搞定了。

　最先想到的是「重启试试」，于是重启了路由，未果。

　我在网上找了找相关信息，发现IP和MAC地址是对应的，要想换IP，要么很长时间断网再恢复，要么手动改MAC地址，再不行就是打电话给客服。

　用过Xfinity的朋友可能知道，他们租的路由是[Arris TG1682G](http://a.co/2zm7aH7)，一个黑色的方盒子。但是这款不支持修改MAC的操作。长时间断网也不现实，万一不好使岂不是浪费了很长的上网时间？还是找客服吧。

　我先去了Comcast Xfinity的服务中心，让他们给我换个IP，结果被告知他们没法进行这种操作，然后给我个电话号码让我咨询「技术专家」。我搜了一下号码，是Xfinity设备激活的客服。

　打过去问了一下，第一个印度口音的妹子A和我聊了一会，发现不知道怎么操作，把电话转给了另一个小哥B帮忙。小哥B说我给你的设备发个重启信号看看，待会打电话回去反馈一下。我告诉他我试过了没用，但是小哥B还是要坚持试试，然后Piaji一下网断了。设备恢复后，国内的网还是上不去，我又拨通了电话，小哥C接了电话。我跟他说我刚给你们打过电话，但是问题没解决，让他帮我转接电话给小哥B。结果小哥C觉得自己挺行，说我先给你看看。我跟他说我能上大部分的网站，但是上不了中国的网站，觉得是我的IP被墙了。小哥C愣了5秒钟，似乎他从来没听过中国还有Firewall这种东西……但是他听到了Firewall这个关键词，以为是我家路由器的问题，让我去修改路由器防火墙配置（坑爹）。按他说的改完了以后还是上不去。他说你别挂电话，我再给你找找解决方案。于是进入了等待铃声阶段……十几分钟后（我还真有耐心）他们自己把电话挂了。

　So far so bad.

　看着电话客服一点也不靠谱，抱着试一试的心态，我决定开始进入网络聊天模式。我也不跟他们扯「我能上网但是上不了中国的网」这些细节了，直接说我想换IP，你们帮我找个办法。客服妹子D瞬间Get到了点，让我长按Reset恢复路由出厂设置。

　十分钟后网恢复了，我发现IPv6变了，IPv4没变。似乎GFW只认IPv4，所以各种网站还是上不去。

　我和妹子D说IPv6换了，但不是我想要的。妹子说那我也没办法啦，然后开始给我推销新的优惠套餐……然后我发现套餐网速和现在一样，但是加了电视和HBO，价格还少了20块钱。于是我不争气地同意更换套餐了……

## 终极方案

　之前我换过一次网络套餐，他们顺便把路由也给我换了一个。我记得非常清楚，那一次的IPv4是换掉了的，为此我还重新设置了好多东西。所以，换个路由不就搞定了吗。

　Xfinity这个垃圾路由每个月租金11刀，一两年就能买个新的又比这个好的了。所以咬咬牙，买了[ASUS CM-32](http://a.co/8y37Pjj)。

　于是，故事在这里告一段落。

　旧的路由退回去了，每个月少了11块钱。

　国内的网站又可以开心地上了。

## 教训

　教训就是挖地道的时候用VPS就行了，别挖到自己家，后果很严重。

　顺带鄙视GFW。
