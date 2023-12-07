---
layout: splash
permalink: /
hidden: true
feature_row:
  - image_path: /assets/images/mm-customizable-feature.png
    alt: "博客文章"
    title: "博客文章"
    excerpt: "Everything from the menus, sidebars, comments, and more can be configured or set with YAML Front Matter."
    url: "/posts/"
    btn_class: "btn--primary"
    btn_label: "了解更多"
  - image_path: /assets/images/mm-responsive-feature.png
    alt: "插件"
    title: "插件"
    excerpt: "Built with HTML5 + CSS3. All layouts are fully responsive with helpers to augment your content."
    url: "/addons/"
    btn_class: "btn--primary"
    btn_label: "了解更多"
  - image_path: /assets/images/mm-free-feature.png
    alt: "足迹"
    title: "足迹"
    excerpt: "Free to use however you want under the MIT License. Clone it, fork it, customize it... whatever!"
    url: "/memory/"
    btn_class: "btn--primary"
    btn_label: "了解更多"      
---

<div class="container">
<canvas class="zdog-canvas" width="60" height="60"></canvas>
<div class="text" id="randomText"></div>
</div>



<h2><strong>新闻</strong></h2>

<div class="news">

<figure class="article">

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/posts/Screenshot-20231125211946.png" />

<figcaption>

<h3>新物品推出</h3>

<p>

在今天的活动中，我们推出了新的物品，包括新的武器，新的枪械，新的配饰。

</p>

</figcaption>
</figure>

</div>


{% include feature_row %}

<div class="wrapper">
<h2><strong>游戏</strong></h2>

<div class="cards">

<figure class="card">

<img src="https://steamcdn-a.akamaihd.net/steam/apps/1583720/library_600x900_2x.jpg" />

<figcaption>熵：零 2</figcaption>

</figure>

<figure class="card">

<img src="https://steamcdn-a.akamaihd.net/steam/apps/362890/library_600x900_2x.jpg" />

<figcaption>黑山：起源</figcaption>

</figure>



<div id="app" class="container">
  <card data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
    <h1 slot="header">Canyons</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </card>
  <card data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
    <h1 slot="header">Beaches</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </card>
  <card data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
    <h1 slot="header">Trees</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </card>
  <card data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=">
    <h1 slot="header">Lakes</h1>
    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </card>
</div>

