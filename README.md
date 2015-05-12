## 我的博客

地址：[http://dlyang.me](http://dlyang.me)

目前风格为黑白灰，比较耐看。

### 修改自[BeiYuu的Blog](http://beiyuu.com)的主题，在此表示感谢。

------

## 移植后的一些改动

* 细微改变了界面颜色；
* 在_config.yml添加了若干配置项，便于管理；
* 增加了**统计**功能，使用Google Analytics ( 原来主题没有 )；
* 修改了**水平线**的样式，稍微减弱了对视觉的影响；
* 将主题各部分模块化，放置在“/_includes”文件夹，包括：header、footer、Google Analytics、pagination、home-menu、comment等；
* 增加**多说**第三方评论工具，和**Disqus**一起共有两种评论方式，由点击按键异步加载；
* 把浏览文章时右侧的“更多文章”由原来的**所有文章**改成了**当前文章所在分类**的其他文章，数目限制为15篇；
* 增加了**“归档/时间线”**功能 ( 页面 )；
* 修改了Home-menu的图标，使用[Font Awesome](http://fortawesome.github.io/Font-Awesome/icons/)的图标；
* 增加了**留言板**和**关于**页面 ( 替换了Home-menu中的豆瓣和微博 )；
* 增加了Page layout的格式，和post layout趋于一致；
* 修改了**滚动条**样式 ( 详见default.css )；
* 增加了“上一篇”，“下一篇”的**导航功能**，并调节了样式；
* 加入了**搜索**功能，使用第三方插件Swiftype；
* 更换了首页左侧的背景图片；
* 添加了**返回顶部**按钮；
* 增加了**Tags标签云**功能，js、md代码来自[骆林佳的Blog](http://ideex.name/cn/tags/)，在此表示感谢。一点改变是，把旧的标签放在了列表后面，较新的标签位于前面；
* 把**选择文本时的背景颜色**从蓝色改成了浅灰色，比较适应主题；
* 修改了**404 Page Not Found**的样式；

* To be continued & updated.

------

### 新增加的项目

* 2015-02-27 增加了「料理时间线」系列，并简单设计了样式；
* 2015-04-02 增加了[RSS](http://dlyang.me/rss.xml)订阅功能。

------

### 已知Bug/小问题

* 在移动端：
	* 在Pad浏览时无法显示左右的边距，不太和谐。( 已修复。将default.css中“@media (max-width: 1020px)”改为“@media (max-width: 1025px)”。iPad的浏览器宽度为1024px，即使像素是2048 x 1536 )

* 在PC上：
	* 暂无。

* 其他：
	* Swiftype搜索的结果不够高亮，有时也不够精准。不知能否修改，等文章量大以后再进一步测试，不好用的话换成其他插件或者去掉**搜索**功能。