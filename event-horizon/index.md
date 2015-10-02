---
layout: home
---

<div class="index-content col5">
    <div class="section">
        <ul class="artical-cate">
            <li class="on"><a href="/event-horizon"><span>事件视界</span></a></li>
            <li><a href="/hi-tech"><span>Hi-Tech</span></a></li>
            <li><a href="/viewfinder"><span>取景器</span></a></li>
            <li><a href="/cuisine"><span>料理时</span></a></li>
            <li><a href="/archive"><span>时间线</span></a></li>
        </ul>

        <div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
        <br>
        <h4>这里是<a href="https://zh.wikipedia.org/wiki/%E4%BA%8B%E4%BB%B6%E8%A6%96%E7%95%8C">事件视界</a>，外面的观察者无法观察到其内部，通常可以通过站内的虫洞到达。</h4>
        <br>
        {% for post in site.categories.blog %}
            <li>
                <h2>
                    <a href="{{ post.url }}">{{ post.title }}</a>
                </h2>
                <div class="title-desc">{{ post.description }}</div>
            </li>
        {% endfor %}
        </ul>
    </div>
    <div class="aside">
    </div>
</div>
