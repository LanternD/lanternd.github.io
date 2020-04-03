---
layout: post
title: 把LiveRe评论迁移到Disqus
description: 作为更换评论系统的第一步。
permalink: /migrate-comments-from-livere-to-disqus/
categories: [HiTech]
tags: [LiveRe, Disqus, 评论, 迁移]
date: 2020-03-31 22:25:30
---

# 　

## 标记

　这是Blog历史上距离上一篇时间间隔最大的日志。因为整个二月三月都在赶Deadline，连写个日志的心思都没有了。这两个月也发生了很多事情，可以说是每天都很混乱，总有海量的信息涌进来。

　目前状况一切还好，天天宅在家里，基本需求都能满足，没有症状。从3月12号开始到现在，面对面见过的人应该不超过5个。关于疫情的Topic有点沉重，之后再写个帖子记录一下这段时间的感受。

　本文的重点是评论迁移。是的，我早就看之前的LiveRe评论系统不顺眼了，现在终于有机会将其拿下。这里是介绍怎么迁移评论的，作为更换评论系统的第一步。

　注：本文于2020年4月3日测试有效，但不保证未来依然生效。

## 第一步

　首先我们要把评论弄到本地。由于LiveRe没有导出功能，所以我们只能手动导出数据了。理论上这一步爬虫也能做，但是我这评论不多，再去写一个爬虫不划算。而且我的程序其实是有爬虫的部分的，于是就直接开始吧。

　去到LiveRe的后台（Insight），修改查询的起止时间，囊括完所有的评论。下图顶部区域有个开始使用LiveRe的时间。把起始时间设到它之前。

![img]({{site.img-hosting}}/Pic4Post/migrate-comments-from-livere-to-disqus/livere-admin.png "LiveRe Admin")

　之后我们就得到了一个列表，每页有10条评论。

## 第二步

　去把我写的代码弄下来：[comment-migration-from-livere-to-disqus - Github](https://github.com/LanternD/comment-migration-from-livere-to-disqus)，Clone或者下载Zip。

## 第三步

　接下来就是把这所有的评论扒下来了。如果对爬虫熟悉的话可能可以写个脚本批量弄下来，但是我这方面经验不多，主要是评论也不多，所以就手动搞定了。

　在Chrome里面（别的浏览器看情况）在Table上面右键，选Inspect，打开DevTools。

![img]({{site.img-hosting}}/Pic4Post/migrate-comments-from-livere-to-disqus/save-table.jpg "Save table")

　在Table元素上面右键，Copy Element。

　去到代码对应的文件，里面有一个「html\_table」文件夹（里面有个示例「table\_1.html」）。新建一个HTML文件，把复制的Element粘进去。注意，每个块都是 =<table>=开始， `</table>` 结束。

　重复上述过程下载完所有的Table。可以每10条评论一个文件，也可以所有评论放到一个文件里面。

## 第四步

　打开 `migration_main.py` ，把最下面的 `function_switch` 改成1。

```sh
python migration_main.py
```

　里面有个简单的状态机处理HTML文件，把关键的field提取出来，然后存到一个 `.json` 文件里面。每条评论对应json的一个Element。

　弄完以后打开 `livere_comments.json` 检查里面有没有问题，粗略看看就好了。

## 第五步

　把 `migration_main.py` 的 `function_switch` 改成2。

　再跑一次就可以得到用于导入的XML文件了 `disqus_import.xml` 。打开文件检查一下。目录里有个 `disqus_official_example.xml` ，可以对比一下整体有没有异常。

　我在每条评论前面都加上了标记「【LiveRe】」，不喜欢的话可以在[这一行](https://github.com/LanternD/comment-migration-from-livere-to-disqus/blob/6f855b9274de613de00d36150e3846e73d30343f/migration_main.py#L202)删掉。

## 第六步

　去Disqus后台（[https://disqus.com/admin/](https://disqus.com/admin/)）-=> Moderate Comments -=> （左侧）Import。建议先建一个Dev站点用来测试，无误后再导入主站点。

![img]({{site.img-hosting}}/Pic4Post/migrate-comments-from-livere-to-disqus/disqus-import.png "Import comments in Disqus")

　选WordPress那个，上传生成的 `disqus_import.xml` 就好了。

## 已知问题

-   目前程序没法记录评论树，也就是A回复了B，但是A/B各自是独立的评论。这个也没办法，因为LiveRe的输出里就不包含这个。想手动添加的话可以在 `<wp:comment_parent></wp:comment_parent>` 这行添加父评论的 `comment_id` 。
-   目前没法添加头像，我的理解是下面这个field需要ID和头像链接同时完整，对应Disqus内部的用户账号才行。目前我就懒得去测试行不行了。
    
    ```xml
    <dsq:remote>
      <!-- unique internal identifier; username, user id, etc. -->
      <dsq:id>user id</dsq:id>
      <!-- avatar -->
      <dsq:avatar>http://url.to/avatar.png</dsq:avatar>
    </dsq:remote>
    ```
-   邮箱是留空的（Disqus在导入的时候会分配一个）。
-   IP地址都改成「127.0.0.2」了，因为LiveRe也不提供这个。对，啥也没有，这个评论系统坑很大。

## End

　以上就是我弄的导出LiveRe导入Disqus的流程了。可能也是个小众需求，希望有帮助。如果不好使或者有问题欢迎留言。
