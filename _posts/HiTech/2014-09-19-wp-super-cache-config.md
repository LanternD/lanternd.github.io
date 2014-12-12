---
layout: post
title: WordPress多站点模式下WP Super Cache无法正确配置的问题
permalink: /wp-super-cache-config
categories: [HiTech]
tags: [WP Super Cache, 配置]
date: 2014-09-19
--- 

　在启用了多站点模式，并新建好了子站点以后，我突然发现WP Super Cache插件不能正常工作了。这是怎么回事该怎么解决呢？
—

　在网上搜索了一圈，没发现有人和我有相似的问题，找不到什么解决方案。同时WP插件不停地提示我系统已经将缓存禁止，让我去设置里打开。


　可是在WP Super Cache的设置界面，更新按钮居然点不下去。无独有偶，其他设置项也无法启用，像下面图示的一样。郁闷了我好久。卸载了再重装WP Super Cache也不好使。

![1](http://lanternd.qiniudn.com/Pic4Post/wp-super-cache-config/wpsupercache-1.jpg)

　各种按钮无法启用……

![2](http://lanternd.qiniudn.com/Pic4Post/wp-super-cache-config/wpsupercache-2.jpg)

　各种无法改设置

![3](http://lanternd.qiniudn.com/Pic4Post/wp-super-cache-config/wpsupercache-3.jpg)

 　以及

![4](http://lanternd.qiniudn.com/Pic4Post/wp-super-cache-config/wpsupercache-4.jpg)


　在弹尽粮绝，都快要放弃WP Super Cache的时候。我意识到，这个不应该是Super Cache的问题，而是系统设置的问题，导致整个插件全局受到影响。坑人的是，我去到站点管理界面，发现“已缓存”已经启用了。像下图这样。这个是我建站的时候一不小心给开启的。当时WP Super Cache插件让我去改设置的时候我还在纳闷，明明我都点了“启用”了怎么还不行呢。

　后来一瞬间灵光一现………………是不是因为这个和WP Super Cache不是一个东西，是系统自带的缓存程序，导致和WP Super Cache发生冲突了。于是我就把“已缓存”改成“禁用”了。

![5](http://lanternd.qiniudn.com/Pic4Post/wp-super-cache-config/wpsupercache-5.jpg)


　修改后如下图所示。

![6](http://lanternd.qiniudn.com/Pic4Post/wp-super-cache-config/wpsupercache-6.jpg)

　结果……嗯哼，果然好使了。WP Super Cache的功能突然全都正常了。就是这个原因。

　结论就是，如果你出现了和我一样的问题，尝试把站点的缓存功能关掉吧。相信WP Super Cache的功能要比系统自带的缓存软件要好的。