---
layout: post
title: 图床变更——和七牛说再见
description: 
permalink: /image-hosting-update/
categories: [Blog, 视・界]
tags: [图床, 七牛, AWS, S3, Github]
date: 2018-10-31 21:18:10 
---

# 　

　这个是月初的事情，不过最近真是忙得不行，到月底了补一刀，把坑填上。

## 七牛测试域名回收

　我之前的博客图床是七牛云储存。事情的起因是七牛七月份的时候突然给我发了个邮件，说要开始回收测试域名。当时我都没当回事，直接批量弄成了已读邮件。到了九月底的时候七牛跟我说测试域名马上就要回收了。这时我就开始慌了，开始研究怎么跳出这个坑。

![img]({{site.img-hosting}}/Pic4Post/image-hosting-update/qiniu-notice.png "七牛通知")

　中间我还发了个工单问能不能往后延一周，结果说不行。

　七牛提供的唯一解决方案是绑定 **已备案** 的个人域名。域名好弄，所以重点是要备案。现在回想，最大的失误就是那时候低估了备案的难度和恶心程度，导致我浪费了很多的时间。

## 尝试1：万网

　万网是阿里巴巴旗下的管域名管空间主机的。网上有若干案例说万网买域名顺便能搞定备案，于是我跃跃欲试。

　话了几十块钱买了个3年的域名，正准备去备案，结果跟我说……需要指向万网的主机才能备案，然后这破主机一年竟然要400多块钱。

　我又搜了不少帖子，发现当年买域名帮备案是初期推广时候的事情了。现在韭菜都割完了，我怎么坑会主动去投坑。

　又搜了一下，我发现备案的坑堪比天坑。我原来以为只需要传传身份证，填个表格就完事了。结果居然还要幕布拍照（网管站在写有站名的幕布前拍照）。PS肯定是不OK的。我看到了阮一峰的《[关于网站备案](http://www.ruanyifeng.com/blog/2009/09/about_chinese_website_licensing_system.html)》才对其有个透彻的认识：

> 现行的网站备案制度，其实是一种「双绑定」 制度，一方面将网站和它的所有人绑定在一起，另一方面将网站和它的接入商绑定在一起。一旦出事的话，政府不仅要找到网站的所有人，还要找到网站的接入商。为什么要找接入商呢？说穿了，就是为了第一时间把网线拔掉。

　呵呵。

　只能说被Github Page惯坏了，对备案系统没有基本了解。

　所以，国内的服务提供商基本就都排除了。话说，七牛要回收测试域名的原因也是「应有关部门的要求」。管得真是太严了。

## 尝试2：GitHub

　时间来到了10月4号，下一天七牛就要停了。我还没找到下家。于是开始打起了GitHub的主意。我觉得这个不是很好，毕竟GitHub主要是放代码的，用来做图床既占带宽又占硬盘，不是很道德。我决定只用来做暂时的缓存，找到下家就删掉。

　决定换的时候，新的Boss出现了：我的文章里面都是七牛的链接，如果要换图床的话，需要把所有的链接全部都更新一遍……

　这时候只能靠Python了，自己写了个替换文章图片链接的代码（其实就是搜索+替换）。输出的文章先放到另一个文件夹，以免和别的混淆。

```python
import os


def get_file_list(file_path):

    files = []
    for root, dirs, files in os.walk(file_path):
        print('# of files: {0}'.format(len(files)))
    file_list = files
    return file_list


def replace_link_in_blog_posts(input_dir, output_dir, org_text, new_text):

    filename_list = get_file_list(input_dir)

    for my_f in filename_list:
        with open(input_dir + my_f, 'r', encoding='utf-8') as f_read:
            replace_counter = 0
            with open(output_dir + my_f, 'w', encoding='utf-8') as f_write:

                for line in f_read:
                    if org_text in line:
                        replace_counter += 1
                        f_write.write(line.replace(org_text, new_text))
                    else:
                        f_write.write(line)
                print('Replaced {0} links in file \'{1}\'.'.format(replace_counter, my_f))
                f_write.flush()
                f_write.close()

            f_read.close()


replace_link_in_blog_posts('~/Github/lanternd.github.io/blog/_posts', './output/',
                           'http://lanternd.qiniudn.com', '{{site.img-hosting}}')
```

　事情就这样成了。另外，我把链接前缀换成了Liquid语言的变量，这样以后再换图床，只要相对目录结构不变就没问题了。

　于是把链接换成了GitHub的。

　Update：现在GitHub放图片的目录被我删掉了。

![img]({{site.img-hosting}}/Pic4Post/image-hosting-update/github-repo-deleted.png "GitHub删除")

## 尝试3：AWS

　最后我把目标瞄准了Amazon Cloud Service。节点又多，流量也便宜。

　具体的方案是：

-   用S3（Simple Storage Service）存图片，节点在东京，但是可以缓存到其他节点
-   用CloudFront指向S3，做域名重定向+HTTPS+CDN支持
-   用CloudFlare做子域名CNAME

　具体细节可以参考博文《[正确使用AWS S3的方式之打造自己的https图床](https://troyyang.com/2018/02/16/hosting-images-with-aws-s3/)》。一个要点就是，最后CNAME的域名要和S3的Bucket名保持一致。另外，S3有两套访问机制（Endpoint），一种是Web，一种是Restful还是啥。我目前的结论是，Web比较直接一些，符合习惯，并且找不到的时候404页面可以自定义，缺点是经常有爬虫爬，导致额外流量消耗。可以写个 `robot.txt` 防止爬。

　目前运行了三周左右，情况稳定良好。我现在Blog所有图片加起来大概400+M，每天输出流量大概100M，每个月花费不到0.3美元。按量收费还挺靠谱。

　以后有空（一个Flag）可以加入图片压缩功能，进一步减小流量（但是会增加服务器开销的钱）。

　其实七牛要收钱的话我还是愿意出一点的，每个月5块10块的。但是动不动就取消原来的服务，这种行为太另消费者伤心了。

## 综合看

-   七牛虽然好用，但是不厚道。
-   备案很坑。
-   万网碰都不要碰。
-   GitHub做图床挺好用，但是问心有愧。
-   AWS可以做图床，听闻有时候会被墙，目前暂时没发现。
-   其他数据需要长期观察才能得到，有待更新。
