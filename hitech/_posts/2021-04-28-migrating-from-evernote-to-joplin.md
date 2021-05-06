---
layout: post
title: 笔记软件的改朝换代 —— 从 Evernote 到 Joplin
description: 终于放弃用了 8 年的笔记软件。Evernote 也叫「印象笔记」，是老牌的笔记软件了。Joplin 则是一个开源的新兴的笔记本软件。它们各有特点。
permalink: /migrating-from-evernote-to-joplin/
categories: [HiTech]
tags: [Evernote, Joplin, 笔记, 软件, 迁移]
date: 2021-04-28 11:43:12
---

# 　

## 换门之旅

　大概4月初的时候第一次听到 Joplin。去 [GitHub](https://github.com/laurent22/joplin) 一看，竟然已经 2 万多星了。看来它已经获得了社区的认可，贡献者很多，而且还在积极更新中。在我还没尝试的时候就觉得它已经是我笔记软件的未来了。终于前天（4 月 26 日）我把 Joplin 装上了。

　总体来说，Evernote 是侧重于云端储存笔记，客户端主要负责显示和交互（它的网页版做得还是相当不错）。Joplin 是笔记以本地为主，和软件本身自成一体，而云端备份和同步是由用户自己定义的。

　废话不多说，我就直接放上分点列举的优缺点吧。需要注意的是：

-   **下面的体会都是针对两者当前的版本的** 。以后它们都会变，而我不会长期跟踪它们的变化。换言之，此文有「时代局限性」。
-   所有都是我自己的观点。优缺点这种东西见仁见智，欢迎有不同意见。

## Evernote 和 Joplin 都有的特点

-   支持剪藏（保存网页的内容到笔记）
-   支持笔记内附件
-   支持笔记本嵌套
-   支持 Todo
-   多平台支持
-   可以预览 PDF 等附件
-   支持内部笔记链接，可以方便跳转

　可以说两个都能满足我的笔记需求，但是各个小的方面加起来就是巨大的差别，最终导致了我不得不换软件。

## 离开 Evernote

### Evernote 的缺点

-   收费，而且不便宜。免费功能受限，只支持 2 台设备同步。而我至少需要 3 个设备。
    
    　我开过一年 Evernote 的会员，除了能同步多台设备以外，别的功能并没有体现出什么价值。

-   收费版竟然还会提示让你继续升级到更高级版，真的烦人（Dropbox 也是这样）。最近似乎收敛了一些了。
-   打开（越来越）慢，逐渐臃肿。里面有很多我不需要的功能，下面会列举。
-   新版（10+）在 macOS 上有 Bug。
    
    　具体表现是，休眠之后开机，然后点任意一个别的笔记跳转，经常打不开对应的笔记，提示需要 Relaunch 才能正常工作。

-   新版本之后，频繁提示需要更新。没有调试好就上线的后果。
    
    ![img]({{site.img-hosting}}/Pic4Post/migrating-from-evernote-to-joplin/evernote-update-notice.png "Frequent Update Notice")

-   不支持 Markdown
    
    　难以想象过了 8 年了他都没有支持。应该会有产品层面上的考虑，但我只能说，是时候放手了。我始终认为，笔记的最适合格式是 Markdown（或其他轻量级 Markup 语言）。

-   没有 Linux 上的客户端。
    
    　需要用网页版代替。如果要在第三台设备上用的话，也只能用网页版。

-   新版（10+）去掉了很多「设置」。
    
    　现在基本上没有可以用户自己定义的内容了。很多小地方想按自己的需求弄一下都无法实现。

-   免费版每个月只能上传 60 MB 的笔记数据，有时候不够用。
-   新版本奇怪的交互逻辑。
    
    　现在的左侧是个侧边栏。鼠标悬停的时候会滑出一个菜单。但是实际使用发现有图标（星标、笔记本、标签）会滑出菜单而其他的不会。这就挺奇怪的。单击以后反应也各不相同，有的是滑出一个新的侧边栏，有的打开一个新的页面。

-   曾经 Evernote 是可以在多个 Tab 里面打开不同的笔记的，新版竟然不行了 —— 我想留下的没留下，鸡肋功能又没去掉。

### Evernote 的鸡肋功能

　列举一些我用不上，也觉得没必要的功能。

-   新版本出了个 Home 的页面，十分鸡肋。不符合奥卡姆剃刀原则：「如无必要，勿增实体」。
    
    　Evernote 推出这个功能其实还是为了赚钱，因为高级版可以定制这个页面。请问新的产品经理是从 QQ 空间那边挖来的吗？

-   Evernote 里面有和合作者的即时聊天功能，也是个鸡肋。或许只有 0.1%-1% 的用户需要这个吧？
-   新建笔记里面有很多模板，但是 99% 利用率都超低。或许有人会喜欢吧。

## 加入 Joplin

### Joplin 相对于 Evernote 的特有功能

　吐槽完 Evernote，下面开始进入正题。

-   开源，社区支持很好。
-   支持 Markdown！
    
    　我发现不需要特殊格式的时候用 Markdown 保存。如果有细节调整，比如图片缩放等等操作，它会自动帮你转化成 HTML，十分方便。

-   可以把笔记同步到 Dropbox、NextCloud 等等，以及支持 WebDAV 协议。当然也可以只在本地跑。
-   可以选择在 **所见即所得** 文本编辑器或者 Markdown 编辑器里面写笔记。
-   可以用外部编辑器编辑笔记。
    
    　可以在设置里面修改用哪个外部程序，我这默认是 Emacs。

-   支持 [命令行](https://github.com/laurent22/joplin/blob/dev/readme/terminal.md#commands) 写笔记。
-   支持笔记历史记录（默认是 90 天）。这个是 Evernote 的收费功能。
-   可以自定义 CSS，显示想要的效果。比如加粗字体可以用蓝色等等。
-   支持通过插件扩展功能，拥有无限的可能性。
-   可选的端到端加密。我还没试过，不知道具体是什么样的。

### Joplin 桌面版缺点 / 小问题

　目前我只在 macOS 上面测试过。Linux 和 Windows 还没试，但我觉得不会有很大差异。

-   不会显示笔记最后更新时间（可能我还没找到这个设置）。
-   **国内不能用 Dropbox** ，也就不能同步笔记了。这里需要梯子。或者可以使用另一种国内可访问的同步方式。
-   字体不够 Evernote 的好看。整体的 UI 不够协调，设计感不强。
-   同步的时候会把所有内容都下载下来。
    
    　所以如果笔记库很大的话，会占用很多地方（主要是多媒体）。桌面版我倒不太介意。不过关于在容量上的影响，手机端可能更加明显。

-   同步锁在 Dropbox 会有删除提醒（详见 [这里](https://discourse.joplinapp.org/t/joplin-i-love-you-but-this-is-driving-me-nuts-dropbox/10842/3)），有时候有点烦人。
    
    ![img]({{site.img-hosting}}/Pic4Post/migrating-from-evernote-to-joplin/joplin-dropbox-delete-notice.png "Dropbox Delete Notice")
    
    　解决方案是修改一下 Dropbox 的 Selective Sync，把两个目录排除掉。

-   导入完 Evernote 的时候同步时间比较长。
    
    　它要索引和生成对应的内容，放到特定的地方。不过这属于一次性投入。

-   不支持一次导入多个 Evernote notebook（ `enex` 格式）
    
    　所以得一个个处理。可能有解决方案，我还没去找。

-   不支持 Filter 笔记的功能。
    
    　类似按最后更新、创建笔记的年月日筛之类的。Evernote 这个做得还不错。下图是 Evernote 的筛选功能：
    
    ![img]({{site.img-hosting}}/Pic4Post/migrating-from-evernote-to-joplin/evernote-filtering.png "Evernote Filtering")

-   更改布局选项有限，只有笔记本列表、笔记列表、笔记内容这几块。不过我对目前的布局还算满意。
-   不支持 Shortcut，也就是给笔记加星标的功能。可以用 Tag 功能代替。
-   一条笔记如果在所见即所得编辑器和 Markdown 编辑器之间切换可能会导致样式丢失。
    
    　目前发现在有字体、格式等属性的时候，或者编辑表格的时候会出这个问题。比如 HTML 的表格是可以没有表头的，而 Markdown 里必须有。所以 Joplin 在你切换到 Markdown 编辑器的时候就会给你加上一个空的表头，导致样式出现不统一。
    
    　在所见即所得创建一个表格：
    
    ![img]({{site.img-hosting}}/Pic4Post/migrating-from-evernote-to-joplin/joplin-wysiwyg-table.png "Joplin Editor Switch 1")
    
    　切换到 Markdown 编辑器再切回来：
    
    ![img]({{site.img-hosting}}/Pic4Post/migrating-from-evernote-to-joplin/joplin-table-from-html-to-md.png "Joplin Editor Switch 2")

-   笔记分享不太友好。
    
    　似乎 NextCloud 支持分享操作，如果用 Dropbox 同步的话不能分享：
    
    ![img]({{site.img-hosting}}/Pic4Post/migrating-from-evernote-to-joplin/joplin-share-note.png "Joplin Share Note")
    
    　好在我不怎么分享笔记，也不太需要多人协作。Evernote 的多人协作是同一时刻只能有一个人编写笔记，其他人无权修改 —— 和 Google Docs 还差个十万八千里呢。

### Joplin iOS 版的小问题 / 缺的功能

-   界面有些简单。没有显示笔记本的笔记数量等。
-   词条或者笔记编辑面下，从屏幕左边缘右划不会返回，必须点左上角的返回键。很不符合直觉也很不方便。
-   同步的时候会把所有的词条都下载下来放到本地，然后再显示。虽然笔记可用性会很高，但笔记空间占用会越来越大。
    
    　作为对比，Evernote 手机版本是点哪条笔记再实时从云端加载。缺点是网络不好的时候加载就不太靠谱。

-   编辑笔记的时候只能用 Markdown 格式（没得选）。插入图片等操作也稍显复杂。

### 剪藏插件的问题

-   剪藏有 **代码** 的网页的时候效果不佳。
-   剪网页的时候最能保留原样的是 HTML 格式，但是也会让笔记变得很复杂。

　下图是剪 [这个网页](https://www.cnblogs.com/linxiyue/p/3667418.html) HTML 的成果：

![img]({{site.img-hosting}}/Pic4Post/migrating-from-evernote-to-joplin/joplin-clipper-html.png "HTML Clipper")

　如果用 Simplified 来剪，则会把代码块变成更奇怪的表格：

![img]({{site.img-hosting}}/Pic4Post/migrating-from-evernote-to-joplin/joplin-clipper-simplified.png "Markdown Clipper")

　不过这两者都不是我期望的结果，我希望得到 Markdown 格式的代码块。希望他们未来能支持这个功能。

### 我希望 Joplin 可以添加的功能

　这里只是说说，如果想要某个 Feature 可以去它们的 [论坛](https://discourse.joplinapp.org/c/features/7) 发帖。

-   剪藏的时候识别代码块，并使用对应的 Markdown 格式。
-   显示整条笔记或者笔记附加资源的大小，方便用户做必要的清理。
-   选择性加载。像 Dropbox 一样，可以在某些设备里面选择不同步某一些笔记本。这样比较节省空间和资源。
-   笔记本内实现笔记置顶。
    
    　我的笔记里面大概 60-80% 是网上剪藏来的，其他的是我自己写的。我希望我自己写的部分能在靠上一些的位置。

-   对 Tag 取反。是上一条的延伸，我希望筛选出不是某个 Tag 的内容。
-   支持 Tab 功能，像浏览器里切换不同的标签页一样显示不同的笔记。

## Evernote 相对于 Joplin 的优点或特点

　上面说了 Evernote 的不好和 Joplin 的基本功能。但还是需要客观一点，说说 Evernote 做得好的地方。Evernote 毕竟还是老牌的，有很多细节打磨得更好。不过倒是没有哪条是杀手级的功能让我不得不用的。

-   表格编辑舒服，可以控制表格宽度且固定。
-   富文本支持更好，比如单独修改某些字的大小和颜色等等。
    
    　Joplin 则需要手写 HTML tag 来定义局部文字的样式。我觉得未来它会加入对应的功能。

-   递归显示子笔记本的内容。
    
    　比如一个叫「CS」的笔记本集合里面有「Python」和「Backend」这两个子笔记本。假设子笔记本里面各有 10 条和 25 条笔记。那么点「CS」笔记本的时候应当显示出 35 条内容。但是在 Joplin 里面「CS」会是一个单独的笔记本，点进去默认是空的。[据说](https://discourse.joplinapp.org/t/can-joplin-do-stacks-like-evernote/14288/6) 这个可以用 Note Overview 插件解决。

-   可以在新窗口里面编辑笔记。
    
    　Joplin 里面类似的是在另一个编辑器里打开。两者用起来有些不一样。

-   分享笔记或笔记本比较方便，可以多人协作。
-   支持笔记内的信息加密。不过这个需求不是很大，就是想用的时候用一下也挺好。

## 结尾

　后面就是要频繁导入了。工程量也不小。如果使用 Joplin 一段时间后没有不爽的地方就可以卸载 Evernote 了。

　其实我也在探索笔记管理的最优方式。比如一种方案是可以用笔记本嵌套次级笔记本实现大类里面细分小类；另一种方案是所有的大类都放在一个笔记本里，然后用 Tag 区分它们。这都是需要更多实践经验才能摸索出来的。

　如果有什么好的想法，欢迎留言讨论。
