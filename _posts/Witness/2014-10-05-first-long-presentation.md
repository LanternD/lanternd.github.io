---
layout: post
title: 我的第一个长Presentation
permalink: /first-long-presentation/
categories: [视·界]
tags: [Presentation]
date: 2014-10-05
--- 

<pre>“BodyBeat @ 09/30/2014 15:00-16:15” 
刚来美国不到2个月，面临的竟然是长达50min的英文Presentation，这该如何是好……</pre>

## 前言
　虽然是准PhD学生，但是我选的课并不多，这学期两门，其中一门是Advanced Computer Network and Communication。这门课给出了十五六篇论文的Reading List，要求每个人写8篇400字以上的论文总结(Summary)，还有一个项目(Project)，同时，还有一个“最让我头疼”的，以那堆论文中的一篇作为主题的Presentation。为什么打上双引号呢，因为那是我做Presentation之前的感受。

## 关于Presentation
　Presentation，翻译是“描述，陈述，介绍”等等。实际上是给观众展示幻灯片　(通常这里不叫ppt，叫slides)，然后介绍里面的内容，就像毕业设计答辩一样，可能比口头演讲要轻松一些因为有ppt提示。而Presentation是允许并鼓励听众提问题的，毕竟你的陈述并不一定能让观众明白，或者观众对内容有疑问。观众可以随时打断你的演说并提问，所以还需要一定的反应能力。可见Presentation不但需要对课题很了解，也需要对相关的背景、技术要求、实现方法等等一些底层的，基础的东西有深入的了解，才能应付Presentation过程中可能出现的问题。所以称之为又一次毕设答辩也不为过，和毕设答辩不同的是：东西不一定是自己做的，听众是学生，不会特别深究里面的技术方法之类，气氛稍好等。

　于是问题来了(不是挖掘技术哪家强)，如果是Project的开题/中期/结题，估计顶多15分钟也就ok了(本科毕设只给了5分钟念PPT简直要命)，但是我们的要求是：50 min Presentation + 20 min Question&Answering环节！Q&A环节一般问题不会太多，所以通常Presentation的长度可以控制在50-70分钟内，毕竟不同的论文内容篇幅等不太一样。而我……连中文的Presentation都从来没做过50分钟的，现在突然来个50分钟的英文，简直是个极限运动！

## 读Paper
　没办法，每个人的Presentation时间节点都已经在开学时候给出来了。轮到我了只好开始看论文了。论文题目叫 *BodyBeat: A Mobile System for Sensing Non-speech Body Sounds* (《BodyBeat：检测非语言人体声音的移动式系统》，翻译成中文感觉好奇怪)。大概的研究内容是作者发现，过去人声语音识别已经研究的很透彻了，但是很少有人研究非语言的声音，如呼吸，咳嗽，咀嚼，笑声等等。即使有研究者尝试研究这一方面的课题，用的也是传统的麦克风，专门为语音所在的频段设计的电容型麦克风。于是作者从这出发，自己造了一个压电型的麦克风，专门为检测和采集非语言声音　(频带比语言要低)　而优化的，另外还自己研究了一套非语言识别/分类算法，把采集到的声音按上面说到的分好类。论文就阐述了麦克风和模式识别算法的设计中遇到的问题和解决方法。最后作者还设计了一个原型，用嵌入式系统和Android应用结合，实现了相应的功能，包括检测和分类等等。

　这已经很简略描述了，实际的要比这复杂很多，总之隔行如隔山，我看这论文反正就是在翻山越岭。Presentation在9月30号，周二，而我从26号，周五就开始看论文了，几乎每个单词都挨个看过，重点部分高亮，关键步骤部分画线画框，技术细节部分反复读…读完整篇论文已经周六晚上了。对的，看了整整两天…当然做饭吃饭也占用不少时间，起床也有点晚，不过毕竟是大块时间都用上了。论文有12页，可能你觉得不是特别多，但是一旦需要理解里面的概念和内容，并且加上背景扩展的话，内容还是不少的。

## Slides
　搞定了paper就万事大吉了？别忘了还有ppt。通常做Presentation的时候，会找这篇论文的作者直接要slides，因为他们的论文通常已经在某些学术会议上发表了，会议上他们也需要Presentation来介绍他们的成果。但是，我给该作者发邮件没有收到任何的回复，无奈之下只好重操旧业，从零做起。连模板也懒得找了，直接用了PowerPoint自带的。先把Outline做出来，指明本文需要介绍哪些内容。

![Outline](http://lanternd.qiniudn.com/Pic4Post/first-long-presentation/presentation-1.png "Outline")

　之后好像就是按照这个框架往里面塞东西了。这也是最困难的部分，因为，这么上万单词的论文，不可能每句话都放到ppt里面的，必须经过筛选，必要时候还得自己用另外一句话总结。或者只摘录某一段文字的中心句，这样就得好长时间了。大家也可以看到，我的ppt是宽屏的，为了适配教室里面的电脑和投影仪妥协一下。宽屏也没什么不好，这是我做的第一个宽屏的ppt，但是我发现思路和眼界开阔了很多，右侧有大块的位置可以到处放东西，图片表格啥的，毫无压力，再给图片加上阴影，这样就不受那些绿色的块块影响了。

![2](http://lanternd.qiniudn.com/Pic4Post/first-long-presentation/presentation-2.png "Design")

　自己对最后的效果感觉挺满意，但是我也付出了沉重的代价。这ppt我从28号，周日早上开始做，一直做到周一中午。高中和本科期间被各种ppt蹂躏过的我现在无压力蹂躏ppt了。格式排版动画什么的都不是难事。其实本可以降低要求的，其他同学的ppt大部分就直接粘一段话上去，七成照着念，剩下三成自己发挥。但是毕竟是第一次长Presentation，还是对自己严格一些吧。在这次ppt里估计只有四五成可以照着念的，剩下的靠临场发挥了。

　整个ppt一共有51页。有点震惊？你可以看到其实我每页ppt内容并不多，把要点写出来就OK了，有的ppt大半页都是图片，旁边附上几个单词用来引导思路。细节靠描述的话，能让人感到更有说服力。说句实话，一大段文字放在那里，看不到重点的话，用户体验会相当差的，保护环境，从我做起…

![3](http://lanternd.qiniudn.com/Pic4Post/first-long-presentation/presentation-3.png "Graphic")

## 排演
　周一中午做完ppt的时候已经脖子都酸了。吃完饭休息一会马上进入排练状态，而我并不是从ppt开始直接练的。我去把论文给读了一次 (什么，又读一次？)。呃，这个读不是阅读，而是朗读。其实这也是个不自信的表现，这我得承认，但是朗读的作用还是很明显的，有些专业名词，你不念的话上台了就等着卡住吧，另外有些文中的关键词，出现频率极高，读多了直接形成肌肉记忆，到时候脱口而出，像“non-speech body sounds”，“classification algorithm”这样的高频词，到时候不费脑子就能念出来。我从Introduction开始念，念了3节以后已经开始口干舌燥。台上放着一杯水，时不时喝两口。我还把整个过程录了音，几乎刚好100分钟，其中我又温习了论文里面的许多设计方法思路，把一开始还有的疑问一一解决，收获蛮大的。于是你可以发现，60分钟内介绍完这么一堆东西，还是有可能的。该删减的删减，该省略省略，能直观看出结论的就不需要多用废话介绍。

　朗读完就改轮到参照ppt进行练习了。根据朗读的收获，我几乎很快就上手了，毕竟ppt自己做的，很多东西已经提前思考过了，这样的话，周一晚上9点左右我就几乎每页都练了两遍了，还对ppt进行了很多细微的调整。感觉第二天应该挂不了，终于悬着的心落地了。而课程其实是周二下午三点，于是我还有半天处理各种小事：把论文打印好，重点部分圈出来，可以到时候快速参考；把ppt另存为pdf格式，以防出现意外；把和本文相关的论文pdf也放到同一个文件夹下，需要的时候可以快速打开；把完工的ppt放到u盘，同时上传到Google Drive，以防意外；还在身边找到了一些道具，用来在课上演示研究中DIY的麦克风的结构。就这样，我放心地躺下去又睡了半小时午觉。

## 上台

　上课和Presentation之前，我又在黑板上画了很多相关的图像，可以方便到时候快速讲解，个别重要的关键字我也放到了黑板上，有需要的话不用翻ppt，直接指着黑板说就可以了。

　开始讲的时候，基本心情比较平静，但是手却有些不受控制哈，有时候感觉自己的手势都挺奇怪的。进入状态以后，各种在ppt提示以外要说的话我也基本上都能想起来。比较自信的演讲者会在放ppt的时候在讲台附近到处走，边走边讲。我离这水平还有十万八千里，就主要在电脑前黑板前活动。课上有两个同学问了我问题，大概都是已经知道的问题，阐述不太明白的地方，老师也帮着补充信息，于是我在这一环节也没遭遇什么大问题。

　整个Presentation从3点持续到4点15分，后期已经完全适应了，所以表现还算可以。但我也存在很多不足。由于没人反馈给我，只能和老师讨论讨论了。结束的时候收到了惯例都有的掌声，对我来说也是个挺大的鼓励。最后，有个老外背着书包往外走的时候还说了句“You did a great job.”，感觉几天来的付出都是值得的啦。

![4](http://lanternd.qiniudn.com/Pic4Post/first-long-presentation/presentation-4.png "Thank you")

## 尾声
　一定程度上，**有压力才有动力**这句话还是很对的。我感觉我完成了许多以前觉得不可能或者很难的事情。前面花了很大篇幅介绍我的准备过程，而实际上台的时候并没有太多可说的，现实就是这样，台上一分钟台下十年功。我这里台上也就一个多小时，花了三天半近四天的时间去完成。Presentation完事之后，我觉得这个过程也不是这么可怕的，甚至站在台上也是有种特别的成就感的。以后估计每学期都有两次这样的Presentation，希望我也能在未来更加游刃有余。如果这日志里有什么能够让你学到的东西的话我也还是很高兴的，流水账也该发挥一些功能嘛。

　还有个不得不吐的槽：为什么老有人看到我在朋友圈、说说发一些状态，展示我吃了啥玩了啥，就觉得留学的生活一片美好，天天像放假一样。你们呐，Tu young tu sen po。

　也罢，继续苦逼读论文去了。