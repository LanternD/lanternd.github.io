---
layout: home
---

<div class="index-content col2">
    <div class="section">
        <ul class="artical-cate">
            <li><a href="/"><span>视·界</span></a></li>
            <li class="on"><a href="/hitech"><span>Hi-Tech</span></a></li>
            <li><a href="/viewfinder"><span>取景器</span></a></li>
            <li><a href="/cuisine"><span>料理时</span></a></li>
            <li><a href="/archive"><span>时间线</span></a></li>
        </ul>

        <div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
        {% for post in site.categories.HiTech %}
            <li>
                <h2 class="post-title">
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
