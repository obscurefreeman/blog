---
layout: splash
permalink: /
hidden: true
feature_row:
  - image_path: /assets/images/mm-customizable-feature.png
    alt: "customizable"
    title: "Super customizable"
    excerpt: "Everything from the menus, sidebars, comments, and more can be configured or set with YAML Front Matter."
    url: "/docs/configuration/"
    btn_class: "btn--primary"
    btn_label: "Learn more"
  - image_path: /assets/images/mm-responsive-feature.png
    alt: "fully responsive"
    title: "Responsive layouts"
    excerpt: "Built with HTML5 + CSS3. All layouts are fully responsive with helpers to augment your content."
    url: "/docs/layouts/"
    btn_class: "btn--primary"
    btn_label: "Learn more"
  - image_path: /assets/images/mm-free-feature.png
    alt: "100% free"
    title: "100% free"
    excerpt: "Free to use however you want under the MIT License. Clone it, fork it, customize it... whatever!"
    url: "/docs/license/"
    btn_class: "btn--primary"
    btn_label: "Learn more"      
---
<body>
<!-- <div>
<canvas class="zdog-canvas" width="600" height="600"></canvas>
</div>
<script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js"></script>
<script src="assets/js/obsfm/largelambdalogo.js"></script> -->
<div class="container">
<canvas class="zdog-canvas" width="60" height="60"></canvas>
<div class="text" id="randomText"></div>
</div>
<script src="assets/js/obsfm/randomtext.js"></script>
<script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js"></script>
<script src="assets/js/obsfm/lambdalogo.js"></script>
</body>


{% include feature_row %}


<body>
<div class="wrapper">

<h2><strong>最喜欢的游戏</strong></h2>

<div class="cards">

<figure class="card">

<img src="https://steamcdn-a.akamaihd.net/steam/apps/1583720/library_600x900_2x.jpg" />

<figcaption>熵：零 2</figcaption>

</figure>

<figure class="card">

<img src="https://steamcdn-a.akamaihd.net/steam/apps/362890/library_600x900_2x.jpg" />

<figcaption>黑山：起源</figcaption>

</figure>

</div>

<h2><strong>新闻</strong></h2>

<div class="news">

<figure class="article">

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/posts/Screenshot-20231125211946.png" />

<figcaption>

<h3>新物品推出</h3>

<p>

在今天的活动中，我们推出了新的物品，包括新的武器，新的枪械，新的配饰，新的饰品，新的皮肤，新的徽章。

</p>

</figcaption>
</figure>

</div>

</div>
</body>

