---
layout: page
title: Research
permalink: /research
---

My Research interests revolve around Machine Learning, Natural Language Processing and Fairness aspects of various AI Domains.

{% assign total_citations = 0 %}
{% for pub in site.data.publications %}{% assign total_citations = total_citations | plus: pub.citations %}{% endfor %}
<div class="pubs-header">
<h4><strong>Research Papers</strong></h4>
<a class="pubs-total" href="https://scholar.google.co.in/citations?user=P2DO4fsAAAAJ" title="Google Scholar, November 2026"><span class="pubs-total-num">{{ total_citations }}</span> citations · Google Scholar</a>
</div>

<ol class="pubs">
{% for pub in site.data.publications %}
<li class="pub">
<div class="pub-top">
<span class="pub-tag">{{ pub.tag }}</span>
<span class="pub-cites" title="Citations on Google Scholar">Cited by {{ pub.citations }}</span>
</div>
<a class="pub-title" href="{{ pub.url }}">{{ pub.title }}</a>
<div class="pub-authors">{% for a in pub.authors %}{% assign name = a | remove: "*" %}{% if name == "Rakesh Bal" %}<strong>{{ a }}</strong>{% else %}{{ a }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}</div>
<div class="pub-venue">{{ pub.venue }}</div>
</li>
{% endfor %}
</ol>
<p class="pubs-note">* equal contribution</p>

#### **Other Research Projects**

- Modelling Bahdanau Attention using RL and Election methods
  *(along with [Sayan Sinha](http://cse.iitkgp.ac.in/~sayan.sinha/) and [Sanskar Agarwal](https://scholar.google.co.in/citations?user=lgzPww0AAAAJ&hl=en))*
  **IIT Kharagpur** *(Aug. 2019 - Mar. 2020)*

- Incorporating Prior Domain Knowledge for Stock Prediction using Textual Data
  *(under guidance of [Annervaz K M](https://scholar.google.co.in/citations?user=JEauG5QAAAAJ&hl=en) and [Prof. Ambedkar Dukkipati](https://www.csa.iisc.ac.in/~ambedkar/))*
  **Accenture Tech. Labs, Bangalore** and **IISc, Bangalore** *(May 2019 - Aug. 2019)*

Also, you can have a look at my [CV]({{ '/assets/cv_short.pdf' | relative_url }}) for an overview of my other research projects.
