# Optimize & UX

### Optimize speed and improve the user experience (UX).

<details>

<summary>How can I prevent my images from being compressed when uploading with the Navi+ tool?</summary>

#### I. Why smaller image sizes are better for SEO and user experience?

Using smaller image sizes helps your website load faster. Search engines like Google consider page speed an important ranking factor, so optimized images can improve your SEO.

Faster loading also makes the website smoother and more enjoyable for visitors, especially on mobile devices or slower connections. This means users are more likely to stay on your site and continue exploring your products.

#### II. How does Navi+ process your images?

Navi+ first uploads your image in its original size. Then it compresses the image with an optimized algorithm and reduces the display size. This size is carefully chosen by Navi+ to be ideal for both user experience and SEO, since images in menus are usually thumbnails or icons that need to be small and load quickly.

**Note:** For small images like logos or icons, Navi+ does not compress them to preserve sharpness.

After that, Navi+ stores your image on BunnyCDN — a powerful content delivery network (CDN) for images, JavaScript, CSS, and more. BunnyCDN provides extremely fast loading speeds through its global server network. This ensures your website can handle millions of visits without slowing down or causing delays.

#### III. What should I do if I want to keep my images at their original quality?

In some special cases, you may want Navi+ not to modify your image quality—otherwise, the compression could reduce the quality you expect, for example, some important product images. In this case, you need to upload the image directly to Shopify and provide the link to Navi+ to keep the original quality.

**Step 1: Prepare your image (manual process)**\
Prepare your image as desired and rename it for SEO optimization. (Navi+ will only rename images for SEO if uploaded through the Navi+ tool.)\
You should also compress the image to a reasonable size—ideally a few hundred KB. You can use Shopify’s Image Resizer here: <https://www.shopify.com/tools/image-resizer>.

**Step 2: Upload to Shopify**\
Right-click on the menu **Content**, select **Open link in new Tab**, then go to **Files**. Drag and drop the image prepared in Step 1. Once uploaded, find your file in the list and click the link icon to copy its URL. This URL will be used in Navi+ for uploading the image.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F35kK3wzf4jQ6lgRuPIK6%2F1.2.png?alt=media&#x26;token=1b45a6ad-32fb-4988-bda2-9de4aaa7db53" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRKyGXqaCHjUzEEI12woQ%2F1.3.png?alt=media&#x26;token=dbdc467c-13b0-4eb7-9786-558c5d1704d2" alt=""><figcaption></figcaption></figure>

**Step 3: Use the image URL in Navi+**\
Paste the URL obtained from Step 2 into Navi+ using the **Upload Image** tool.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FPy9nqxsNKCo4RMjo1cTP%2F1.4.png?alt=media&#x26;token=a0a4897c-5e1c-47d8-951c-52028b705e1e" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary>Optimize the loading speed of Navi+ menus (Especially for Slide menus and Mega menus)</summary>

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

</details>
