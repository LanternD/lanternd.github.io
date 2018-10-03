---
layout: post
title: Mark一个导出全部微博的方法
description: 准备停用新浪微博，目前完成了导出，最后生成的是PDF格式。代码是在别人的基础上改进了一下，现在记录在这里。
permalink: /weibo-export/
categories: [HiTech]
tags: [数据, 微博, 导出, 代码]
date: 2017-08-15 22:27:34
--- 

<!--「{{site.img-hosting}}/Pic4Post/」-->

![title pic]({{site.img-hosting}}/Pic4Post/weibo-export/2017-08-15-weibo.png)

## 一退保平安

　我不是「原教旨反微博玩家」。但我也不是特别喜欢微博，主要原因：

- 不能注销，坑爹的产品设计；
- 我不追星；
- 长期以来没有特别想关注的账号；
- 瀑布流似的信息令人不悦，虽然有意思但是无积极作用（碎片化阅读）；
- 生态封闭；
- 主流的氛围并不很合我的口味；
- ……

　我偶尔也会狂刷大半个小时微博打发时间，但是我退出微博完全是因为懒得打理，让生活简单点（目测下一个目标是减少朋友圈使用频率）。

　大二大三的时候发微博比较频繁，读研以后就懒了，直接发Instagram的时候勾选「发送到Weibo」，导致最近的几百条都是Ins上的图。初衷是给墙内的小伙伴们看墙外的Ins，但后来看看图片也没几个人看，粉丝也没有增加。正好我也不怎么用微博App看东西，于是今天（2017年8月15日）决定从此和当年废弃**人人**一样废弃微博。

　关于导出的方法。读取API之类的方法还得研究文档，麻烦；至于很多网上搜到的现成的「工具」或者「网站」，我试了几个以后没一个靠谱的就放弃了。

　最后在知乎看到了能用的一个方法，也是本文的重点部分。

## 搬运工

　原代码来自[@梁爱丽](https://www.zhihu.com/people/liang-ai-li)在[知乎的回答](https://www.zhihu.com/question/20339936/answer/195823664)。

　直接看就好了，不过为了省事，大概说一下流程：

1. 如果是500条微博以下，在桌面端直接去[移动端的微博网页版](https://m.weibo.cn/)，登陆后一直按End键刷到底，然后打印整个网页；
2. 如果是500条以上，按F12打开网页开发工具，点进Network选项卡，然后刷新页面，拖到最底下，自动加载新的10条微博，此时会出现 `getIndex` 开头的一串网址，访问即可得到服务器返回的新加载微博的 `.json` 文件（记得看下面的「【注意！】」一行）；
3. 在Shell里面利用For循环遍历全部Page和用curl命令下载完全部的 `.json` 存到本地（每个Page会有10条新微博）；
4. 利用Python格式化 `.json` 文件，得到想要的输出。

## 贴代码

　上面提到的答主在回答里有代码，我细化一下贴在这里，仅供参考。一共有3个文件： `download_json.sh` 、 `json2html.py` 和 `default.css` 。

- `download_json.sh`

　这个是下载 `.json` 文件的脚本。

　【注意！】上面第二步提到的按F12的方法现在已经看不到正常的 `getIndex` 网址了，直接在下面代码的基础上改动，「type=uid&value=23XXXXXXXX」这串Value变成想导出的人的数字ID即可。看起来 `containerid` 这个值并不重要。

``` bash 
#!/bin/bash

url='https://m.weibo.cn/api/container/getIndex?type=uid&value=23XXXXXXXX&containerid=2304132384538187&page='
for((i=1;i<74;i++))
do
    sleep $[ $RANDOM % 3 + 2 ].$[ ( $RANDOM % 10 ) ]s
    curl "$url$i" > result/$i.json
done
```

　（**2018.03.05 Update**： 评论区中**D.D.**提到`containerid`也是有用的，以及在Firefox浏览器用F12还是可以看到相关信息，总之优先尝试F12这种方法吧。）

　保存好以后记得在同级文件夹下建个名叫「result」的子文件夹，用来存放下载的结果。

　在（Windows的）PowerShell里面 `cd` 到脚本所在目录，然后执行即可。

![execute sh]({{site.img-hosting}}/Pic4Post/weibo-export/execute.png)

　我有723条微博，大概用了3-4分钟下完。然后result会有73个 `.json` 文件（微博数除以10再向上取整）。

![downloading]({{site.img-hosting}}/Pic4Post/weibo-export/downloading.png)

　第一阶段结束。

- `json2html.py`

　至于说到Python的代码似乎就有点魔性了，因为中文编码让我比较头疼。总之我下面的代码好使，但可能有更简洁的办法。

　原答主贴的代码是Python 2.7的，而且都是 `print` 函数，我在这里用的是Python 3.5，直接把格式化后的 `json` 写到 `.html` 文件里，然后就可以直接看了。当然，Print出来再粘到 `.html` 文件里会省去不少在编码上出现问题的麻烦。

``` python 
#!/usr/bin/python
# coding=utf-8

import json

with open('example.html', 'wb') as f_html:
    f_html.write('<html><head><title>Somebody\'s Weibo Archive</title></head><body>'
                 '<div">\n'
                 '<link type="text/css" rel="stylesheet" charset="utf-8" href="default.css" />'.encode('utf-8'))
    f_html.write('<h1>XXX的微博存档</h1><hr>'.encode('utf-8'))

    for i in range(1, 74):
        content = open('result/%d.json' % i).read()
        items = json.loads(content)
        write_msg = '\n<!-- json #' + str(i) +'-->\n'
        if 'cards' not in items:
            break

        for card in items['cards']:
            if 'mblog' not in card:
                continue

            name = json.dumps(card['mblog']['user']['screen_name'], ensure_ascii=False)  # 因为都是重复的同样的ID，所以没有写进文件里。
            time = json.dumps(card['mblog']['created_at'], ensure_ascii=False)
            mfrom = json.dumps(card['mblog']['source'], ensure_ascii=False)
            text = json.dumps(card['mblog']['text'], ensure_ascii=False)
            text = str(text)
            text = text.replace('\\', '')  # escape字符也是很恶心的东西，删掉。
            text = text.replace('//h5.sinaimg', '\"https://h5.sinaimg')  # 处理某些图片的URL问题
            # print(text)
            f_html.write('<div>'.encode('utf-8'))

            write_msg += '<p>Date: ' + time + '</p>\n' + '<p>Source: ' + mfrom + '</p>\n' + '<p>' + text + '</p>\n'

            if 'original_pic' in card['mblog']:  # 这两行建议一开始别加进去，文本调试OK以后再加，不然HTML页面会加载很久，尤其是图多or网速不好的时候。
                write_msg += '<img class="orig" src=' + json.dumps(card['mblog']['original_pic'], ensure_ascii=False) + '>\n'
            write_msg += '</div><hr>\n\n'
            f_html.write(write_msg.encode('utf-8'))
            write_msg = ''
    f_html.write('</div></body></html>'.encode('utf-8'))
    f_html.flush()
    print('Task finished.')
    f_html.close()
```

　（**2018.03.05 Update**： 评论区**Zhang Garry**表示上面Python代码中，`items = json.loads(content)`需要修改为`items = json.loads(content).get('data')`才可以正常提取`json`数据。我之后没试过了，大家可以尝试一下。）

- `default.css`

　样式文件，很简单，就下面几行，自己酌情修改。

``` css
h1 {font-size:26px;}

div {font-size: 12px;}

img.orig{
	max-width: 500px;
	margin-left: 15%;
	height: auto;
	max-height: 500px;
}
```

　最后出来的 `.html` 文件在**浏览器中打开**，然后保存网页或者打印成PDF格式即可。因为我大都是Instagram的图，最后出来的PDF有70MB之多。把PDF收好就OK，任务完成。

## 缺点

　这个方法有以下缺点：

- 发布时间不精确，时分秒的信息是丢失的，只有日期，而且最近发的微博会显示成「X分钟前」、「X小时前」等等；
- 转发、评论和赞数只有数字，没有详情。

　这些缺点对我来说都不是事，数字我不是特别关心，只要把说过的话记下来就行。

## 后记

　学那位答主来个**注**：2017年8月15日测试有效，不排除之后新浪更新产品逻辑，使这个方法失效。

　贴个[微博链接](http://weibo.com/2384538187/)作为存档，暂时没有删除微博的计划。但我会取关所有人，然后不再过问它。