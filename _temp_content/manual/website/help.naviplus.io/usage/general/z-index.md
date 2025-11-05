# Z-index

This is a common issue but very easy to handle when using Navi+. Your website may have many floating elements—see the examples below to recognize them.&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FL6naWQmaqD1bKTtzaALP%2FHelp.MenuTree.1.3.1b.png?alt=media&#x26;token=0e7dad3b-0395-4f66-9589-2562175e8800" alt=""><figcaption><p>Note: These are the current z-index setups on the Dawn theme (Shopify’s most popular free default theme) at this time.</p></figcaption></figure>

These floating elements are controlled by their own **z-index values**. The higher the z-index, the more priority that element has in being displayed above others. The tricky part is that there are no fixed rules for z-index values. You can assign any number up to 2,147,483,647. Each theme you use and every app running on your Shopify store can assign their own z-index to floating components—usually based on the developer’s preference. When these elements interact on your website, they may overlap in unintended ways.

{% hint style="info" %}
Let’s have a little fun :joy:: Take a closer look at the screenshot above and you’ll see—yes, it’s a mess, and there are absolutely **no rules**. There are three developers behind the website you're looking at.&#x20;

The developer who built the Dawn theme chose a z-index of 3 for the Menu Panel and 1000 for the Cart Panel—completely unrelated, with no clear logic.&#x20;

Then there’s the developer of the Rivo Loyalty Rewards app—a popular loyalty tool—who picked a z-index of 99999999999, probably without even counting how many nines they typed. Their only goal: make sure the floating “Rewards” button always stays on top, no matter what, even above your Cart Panel.&#x20;

Meanwhile, the Navi+ developer humbly picked a smaller number—just 5—because we didn’t want to be too aggressive or intrusive. So, what should you do?
{% endhint %}

**Step 1:** Find the correct z-index of your Navi+ menu

<details>

<summary><strong>Method 1: Ask Navi+ support (</strong>Simplest)</summary>

This is the best and most effective way. We can provide you with information about the z-index values of key interface elements such as the Menu Panel, Cart Panel, and any third-party apps you're using, then recommend the best z-index setting for your case.

Don’t hesitate to use the chat box in the bottom-right corner of the screen to talk to a Navi+ supporter. Navi+ is growing, and we truly value your feedback—your issues help guide us to build a better product.

We’re not online 24/7—only 14 hours a day, based on Vietnam time zone. However, as soon as we see your message, we’ll reply right away.

</details>

<details>

<summary><strong>Method 2: Use your browser’s Inspect mode</strong> (detailed, but requires some technical knowledge)</summary>

So far, there’s no better method for checking this yourself unless you use Inspect mode. This developer tool is available in all modern browsers like Chrome, Firefox, Safari, or Edge. Right-click anywhere on your website and select **Inspect** to open Inspect mode.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FswowawWsXN01MlvSqqjX%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=470cd65f-0ce8-416a-8749-b9a210f6f08f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOabxqNlZUroNKJQfTKsI%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=2b872306-63e3-4dcf-b89a-f16f162727b4" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FSbR8KCnlOK4nFHhxntTJ%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=64ec8298-196e-4999-99a7-f301e052b5dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FDkVp8u1XnJPTiSKksWAQ%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=641c59d0-9ecf-4ac2-9626-6a1a90cc151f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOgAwr2zm2dapUz9OSGJO%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=493df1eb-fa89-4bf6-806e-bec230ec8e82" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FZN3XAcWn9J8Ifn6AQSjW%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=8de191fd-4b39-4e4d-946b-07bedf55ee52" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcwtXWdRp5QaafcNjLGD5%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=beff473b-cd52-4a72-9657-b54687d99363" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FG7lIvYAGwNMcV4NRQUKI%2FHelp.MenuTree.1.4.10.png?alt=media&#x26;token=2a9db521-805c-4374-bc3b-303e97e8b990" alt=""><figcaption></figcaption></figure>

</details>

<details>

<summary><strong>Method 3:</strong> Try and test based on our suggestions (Personal experience)</summary>

In most cases, z-index problems are rare if you’re not using too many apps. The main issue usually comes from overlaps between your menu and other interface elements like the Menu Panel or Cart Panel.

* For Navi+ sticky menus like Tabbar or FAB: We recommend keeping the z-index low, around 2 or 3. These menus take up screen space, and it would feel broken or annoying if they covered functional panels like the cart.
* For Navi+ section menus like Mega menus: If placed at the top (in the header), you can safely set a very high z-index (e.g. 2000000000) to make sure the dropdown submenu isn’t hidden behind other components.
* For Navi+ Grid menus: z-index has no effect, as the menu is flat and doesn’t have layered depth.
* For Navi+ Slide menus: z-index should be set very high (e.g. 2000000000) to avoid being hidden behind other elements.

</details>

**Step 2:** Update the z-index of your Navi+ menu

<details>

<summary>How to update the z-index of the Navi+ menu?</summary>

Select the Advanced menu and scroll down to find the Z-index card then update the z-index and don’t forget to click SAVE to apply the changes.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fh2SfwqpjqjNzZwmbs2yL%2Fz-index%201.1.png?alt=media&#x26;token=47b5f318-d0b3-4f2a-9668-f9e3ed7dab09" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F7np7UDMk5KFGnSvMr8HK%2Fz-index%201.2.png?alt=media&#x26;token=ae4aa403-fbd6-41c9-a16d-861e8cd032bc" alt=""><figcaption></figcaption></figure>

</details>
