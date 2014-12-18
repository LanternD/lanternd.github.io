---
layout: home
---

<div class="index-content col1">
    <div class="section">
        <ul class="artical-cate">
            <li class="on"><a href="/"><span>视·界</span></a></li>
            <li style="text-align:center"><a href="/viewfinder"><span>Hi-Tech</span></a></li>
            <li style="text-align:center"><a href="/hi-tech"><span>取景器</span></a></li>
            <li style="text-align:center"><a href="/cuisine"><span>料理时</span></a></li>
            <li style="text-align:right"><a href="/archive.html"><span>时间线</span></a></li>
        </ul>

        <div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
        {% for post in site.categories.视·界 %}
            <li>
                <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
                <div class="title-desc">{{ post.description }}</div>
            </li>
        {% endfor %}
        </ul>
    </div>
    <div class="aside">
    </div>
</div>