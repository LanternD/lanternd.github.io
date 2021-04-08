---
layout: post
title: macOS 中文、非中文字符混排自动美化的实现
description: 具体来说是在 macOS 上用 Quick Action 自动给文字适当添加空格，使整体更加和谐美观的一个脚本。
permalink: /auto-pangu-script-on-macos/
categories: [HiTech]
tags: [脚本, 苹果, 排版, 空格]
date: 2021-04-07 21:45:10
---

# 　

## 目的

　这个功能实现的是一键自动给中英文、数字、标点等混合编排文本中给相应字符前后加上空格。

　简单来说就是实现下面这个功能：

　原文：

> -   小明和Tom说他今天早上要参加一个Seminar，下午有个Presentation。
> -   电脑坏了可以按RESET键Reboot试试，过程需要15秒。

　（注：如果在浏览器里有自动加空格的扩展，则原文和输出效果没有区别。）

![img]({{site.img-hosting}}/Pic4Post/auto-pangu-script-on-macos/before-pangu.png "Before formatting")

　输出效果：

> -   小明和 Tom 说他今天早上要参加一个 Seminar，下午有个 Presentation。
> -   电脑坏了可以按 RESET 键 Reboot 试试，过程需要 15 秒。

![img]({{site.img-hosting}}/Pic4Post/auto-pangu-script-on-macos/after-pangu.png "Formatted")

　为什么要这么做呢？且听下一章节分解。

## 「盘古之白」——为什么要加个空格？

　GitHub 上有一个 JavaScript 项目，叫 [pangu.js](https://github.com/vinta/pangu.js)，实现的是在浏览器里自动给中英文混排的文章加上适当的空格，使得整体视觉效果上更加舒服（即实现本文的目的）。项目全称叫：「為什麼你們就是不能加個空格呢？」。里面提到了这样的解释：

> 　如果你跟我一樣，每次看到網頁上的中文字和英文、數字、符號擠在一塊，就會坐立難安，忍不住想在它們之間加個空格。這個外掛（支援 Chrome 和 Firefox）正是你在網路世界走跳所需要的東西，它會自動替你在網頁中所有的中文字和半形的英文、數字、符號之間插入空白。
> 
> 　漢學家稱這個空白字元為「盤古之白」，因為它劈開了全形字和半形字之間的混沌。

　这个说法很中二，不过也有一定的道理。一堆中英文数字标点放到一起确实有时候会很混乱，让人找不到重点。

　几年前的时候我对这种「可有可无」的东西还嗤之以鼻，觉得多此一举；接着我尝试在浏览器中加入了这个插件，发现确实效果很不错，然后逐渐形成依赖。所以过去几年这个加空格的插件一直是我浏览器里的必备。

　但是这其实是个偷懒的权宜之计，因为我自己写东西的时候是不会给文字加上空格的。这个插件只是在网页端显示的时候做了一下调整，原文还是不加空格的版本。初衷是把显示部分的控制权交给读者——他们喜欢读带空格的自然就会去找这个插件，无所谓的就按原文展示。但经过长时间的「真香」，最近我的思想发生了改变。我希望从源头上就把空格加上，让读者不再做选择，统一阅读（我认为的）更美观的版本。

　之前我为啥不加空格呢？无他，嫌麻烦尔。我们打字的时候是无法预估下一个是中文还是非中文的。如果下一个是英文或者数字，你需要提醒自己先写个空格，然后再写单词或者数字，结束的时候还得看情况要不要加上结尾空格——这会让写作思路被打断。另一个解决办法是写完全文后再挨个字符查找，把需要空格的地方加上。但是可想而知这个工作量极大，而且常常会有遗漏。如果深究的话，加不加空格的规则多如牛毛。比如中文逗号、句号、顿号、引号等与前后的非中文字符之间是不需要加的。而省略号和后面的中文字符之间是需要加空格的。

　总之没有普适的一条规则解决这个问题。 `Pangu.js` 的解决方案是定义很多正则替换表达式（规则），然后对输入的文字挨个处理。

　毫无疑问，这种简单枯燥的工作，应该使用一些自动化方式让电脑自己搞定。于是我就开始了探索之路。

## 实现方案

　这一节就直接说我的解决方案了。具体我是怎么发现这个方法的就不细说了。由于本文目的是尽量让所有人都能复现，所以会写得比较啰嗦，希望大家不要在意。

　以下步骤按顺序完成即可。这里假设你知道简单的命令行使用方法。

### Pangu CLI

　第一步当然是直接尝试使用 `Pangu.js` 的实现方案啦。因为它已经足够好用，所以我们不需要重复造轮子。可以用 `npm` 来安装，也可以用 Python。这个目的是能让我们在命令行里能够调用 `Pangu` 。不过我猜这两者的运行速度或许有细微差别。

　这里我选择用 Python 版本了。安装：

```shell
python3 -m pip install pangu
```

　官方测试代码：

```shell
python3 -m pangu "不能信任那些Terminal或Editor用白底的人"
```

　如果没问题的话就能看到命令行输出的格式化好的句子了。

　接着是去获取 `python3` 命令的对应位置：

```shell
which python3
```

　把这个的输出记着，后面会用到。我这里是 `/usr/local/bin/python3` 。

### Quick Action

　Quick Action 是苹果系统自带的一套易于上手的编程工具。有了它我们可以直接设计一套流程或者脚本，然后可以把一些东西自动化。比如在文件右键添加个 Copy Path 功能，一键获取文件的绝对路径；又或者可以给选中的文字添加双引号；还有把选中的英文全部变成大写等等。

　苹果自己写有一个教程教我们如何实现把单词变大写（[链接](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/MakeaSystem-WideService.html)在此，注意，里面的 Service 就是现在的 Quick Action）。

　这里我们需要创建一个 Quick Action，然后运行它就能调用 Shell Script 去跑上面的代码，把文字格式化。

　首先我们打开 Automator（macOS 自带的 App）。用 `File` -> `New` 创建一个新脚本，选 Quick Action（Logo 是个齿轮），扩展名是 `.workflow` 。 **如果是中文的 macOS 请自行翻译** 。

![img]({{site.img-hosting}}/Pic4Post/auto-pangu-script-on-macos/automator-icon.png "Automator")

　在左上角 Variables 里面输入「run」，可以筛选出带「run」的选项。然后双击「Run Shell Script」添加到工作流中。

![img]({{site.img-hosting}}/Pic4Post/auto-pangu-script-on-macos/automator-run.png "Automator Run menu")

　设置如下图所示：

![img]({{site.img-hosting}}/Pic4Post/auto-pangu-script-on-macos/quick-action-settings.png "Automator Run Settings")

　文字版描述如下：

-   Workflow receives current: text
-   in: any application
-   勾选「Output replaces selected text」
-   Image: Check（随意）
-   Color：随意
-   下方输入代码： `/usr/local/bin/python3 -m pangu $2` 。前面 Python 的路径记得要完整。 `$2` 代表被选中的字符串。
-   Pass input: to stdin
-   中间的「Get Specified Text」是我测试用的，可以忽略。实际运行时不需要激活。

　把整个 Workflow 保存。然后找一个文本输入框，选中一部分文字。接着我们应该就能在程序的菜单里的「Services」找到刚刚创建的项目了（我这取名叫「Pangu」，名字取什么都行）。

![img]({{site.img-hosting}}/Pic4Post/auto-pangu-script-on-macos/pangu-menu.png "Pangu in Services")

　后面其实就可以直接用了。找一个文本输入窗口，然后选中一段文字，然后从菜单里跑一下 Pangu，就可以看到格式化以后的文字了。

### 绑定快捷键

　这个是最后一步了。

　目前我们每一次想格式化文字都需要用鼠标去菜单里面选，效率非常低。所以我们需要用快捷键加速。

　打开 `System Preferences...` -> `Keyboard` -> `Shortcuts` 。找到 `Services` -> `Text` -> `Pangu` 。绑定快捷键即可。我这里绑定到 <kbd>Command+F8</kbd> 了。

　后面 <kbd>Command+A</kbd> 全选文字，然后 <kbd>Command+F8</kbd> 格式化。一气呵成，岂不快哉？

　而且这个修改是系统全局的。比如微信、短信聊天窗口， `Sublime Text` ， `Emacs` 之类的软件也都可以用。

## Demo

　这里是个效果展示：

![img]({{site.img-hosting}}/Pic4Post/auto-pangu-script-on-macos/demo-pangu.gif "Pangu in Action")

　上图显得有点慢似乎是 `mov` 转 `gif` 的时候帧率设定导致的。实际没有这么慢（点[这里](https://img-cdn.dlyang.me/Pic4Post/auto-pangu-script-on-macos/demo-pangu.mov)看 `mov` 版本），目测延迟在 0.3-0.5 秒左右，而且和文本量没有直接的关系，即一句话和一篇文章的处理时间相近。我猜测大部分时间都花在了加载 Python 之类的运行环境上面了。

　如果有人尝试了 `npm` 安装的 `pangu` 的话欢迎提供新的运行速度的信息。

## 已知问题

　和其他 Markup 语言，如 Markdown 等混用的时候会导致输出的格式紊乱。详见：[处理 markdown 内容时的问题 #91](https://github.com/vinta/pangu.js/issues/91)。

　建议有星号、波浪号、下划线等的文字不要用 Pangu 来格式化。当然，学有余力的同学可以自己写个格式化脚本把这个问题解决一下。

## 别的想法

　其实如果能用「Run Shell Script」那么大部分关于文字的自动化部分都可以用类似的方式去解决了。这个应该能创造出很多很有意思的脚本来。欢迎大家积极尝试。

## 结论

　希望对读者有所帮助。Lattespirit 对本方案亦有重大贡献。
