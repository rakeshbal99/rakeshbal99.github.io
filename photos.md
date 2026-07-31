---
layout: page
title: Photos
permalink: /photos
description: A collection of personal photography.
---

**Photography:** To do justice to my Japan Trip in 2026, I gifted myself a camera and boy did I fall in love with it! I loved it so much I bought a second lens to cover more zoom range. The whole process of framing, composition, chasing lights, shadows and editing made me look at the world with a new lens 📷 quite literally. Added a few snippets into my photo journey so far and grateful for every frame I and my friends have captured so far!! 

Special Mentions: [Shivam](https://www.instagram.com/_shivam_kp_/), [Sayan](https://www.instagram.com/_americast_/), [Dibya](https://www.instagram.com/das.siddharth07/), [Sangeet](https://www.instagram.com/sangeetmishra_/), [Anurag](https://www.instagram.com/_anewraag_/), [Siddharth](https://www.instagram.com/das.siddharth07/)

Special Thanks: [Sravya](https://www.instagram.com/sravyamukkavilli/), [Bilal](https://www.instagram.com/get_bilal/), [Ramni](https://www.instagram.com/rkisboring/), Rohan, [Tanvi](https://www.instagram.com/tanvi_bhandarkar/), [Gandharv](https://www.instagram.com/gandharvwadhwa19/), [Akanksh](https://www.instagram.com/akanksh__7/)

**Gear:** Sony A6700 · Sigma 18-50mm f/2.8 · Sony 70-350mm f/4.7-6.3 · SmallRig Tripod · K&F Concept Polarizer

{% assign last_trip = nil %}
{% for photo in site.data.photos %}
{% if photo.trip != last_trip %}
{% unless forloop.first %}
</div>
{% endunless %}
<h2>{{ photo.trip }}</h2>
<div class="photo-grid">
{% assign last_trip = photo.trip %}
{% endif %}
<a class="photo-frame" href="{{ photo.full | relative_url }}">
<img src="{{ photo.thumb | relative_url }}" alt="{{ photo.alt }}" loading="lazy" width="{{ photo.width }}" height="{{ photo.height }}" style="object-position: {{ photo.focus | default: 'center' }};">
</a>
{% endfor %}
</div>
