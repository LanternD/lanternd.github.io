### 我的博客

地址：[http://dlyang.me](http://dlyang.me)

目前风格为黑白灰，比较耐看。

----

####修改自[BeiYuu的Blog](http://beiyuu.com)的主题，在此表示感谢。

###移植后的一些改动：

* 细微改变了界面颜色；
* 在_config.yml添加了若干配置项，便于管理；
* 增加了**统计**功能，使用Google Analytics ( 原来主题没有 )；
* 修改了**水平线**的样式；
* 将主题各部分模块化，放置在“/_includes”文件夹，包括：header、footer、Google Analytics、pagination、home-menu、comment等；
* 增加**多说**第三方评论工具，和**Disqus**一起共有两种评论方式，由点击按键加载；
* 把浏览文章时右侧的“更多文章”由原来的**所有文章**改成了**当前文章所在分类**的其他文章，数目限制为15篇；
* 增加了“归档/时间线”功能 ( 页面 )；
* 修改了Home-menu的图标，使用[Font Awesome](http://fortawesome.github.io/Font-Awesome/icons/)的图标；
* 增加了**留言板**和**关于**页面 ( 替换了Home-menu中的豆瓣和微博 )；
* 增加了Page layout的格式，和post layout趋于一致；
* 修改了**滚动条**样式 ( 详见default.css )；
* 增加了“上一篇”，“下一篇”的**导航功能**，并修改了样式；
* 加入了**搜索**功能，使用第三方插件Swiftype；
* 更换了首页左侧的背景图片；

* to be updated

----

###已知Bug：

* 在移动端：
	* 在Pad浏览时无法显示左右的边距，不太和谐。( 已修复。将default.css中“@media (max-width: 1020px)”改为“@media (max-width: 1025px)” )

* 在PC上：
	* 暂无。