---
description: Navi+ is very fast. It is fully deployed on a leading CDN with very low
  latency (around 100ms) and can serve millions of customers without slowing down.
layout: default
permalink: /docs/usage/shopify/optimize-loading-speed-slide-and-mega-menus/
title: Optimize loading speed (Slide & Mega menus)
---
# Optimize loading speed (Slide & Mega menus)

#### Why do you need to do this? Isn’t Navi+ already fast?

Navi+ is very fast. It is fully deployed on a leading CDN with very low latency (around 100ms) and can serve millions of customers without slowing down.

However, Navi+ still runs within the Shopify ecosystem. Shopify has its own loading rules:

1. Shopify prioritizes loading its own resources first.
2. Then Shopify loads the theme content.
3. Finally, Shopify loads app content, but not in any specific order.

This means if you are using multiple apps, Navi+ may sometimes be loaded later than expected. That’s why it can feel slower in certain cases.

***

### What is my solution?

Currently, Navi+ has high priority when loading on Shopify websites. However, there is still a certain delay. We will address these issues one by one here:

#### Slide Menu: Add a loading effect and lock the trigger selector

Very simple: just enter the CSS selector you use for the Slide Menu into the embed section of the Navi+ app (see image below).

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

#### Mega Menu (Replacement mode): Add a loading effect and lock the trigger selector

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fk4HYuop9Aq2GRnk4OEWT%2F2.1.png?alt=media&#x26;token=ddeb17b5-23d7-4870-b9ac-fb95b6e250b7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F3CWBvH8fNoj0AHJJ68so%2F2.2.png?alt=media&#x26;token=8282df62-c2c4-4fba-a087-2eb6ea4e50dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fqu827HEiR3F515aSXcH1%2F2.3.png?alt=media&#x26;token=0873fe1c-31a6-45a9-8700-f09dc39f9c52" alt=""><figcaption></figcaption></figure>

Note:

* Add the suffix **(M)** if you want it to apply only on mobile.
* Add the suffix **(D)** if you want it to apply only on desktop.
* Leave no suffix if you want it to apply on both platforms.
