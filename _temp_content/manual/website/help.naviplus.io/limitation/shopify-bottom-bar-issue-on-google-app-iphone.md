# Shopify Bottom Bar issue on Google App (iPhone)

This is about the bottom padding issue under the Bottom Bar when a Shopify website using Navi+ is opened inside the Google App on iPhone.

When accessing a Shopify website that uses **Navi+** (or any application with a fixed bottom menu, floating buttons, etc.), users opening the website **inside the Google App on iPhone** may sometimes see an unusual white space appearing at the bottom of the screen.

This issue only occurs in the Google App and is **not caused by Navi+**. Below is a clear and simple explanation.

***

### 1. Where does the issue occur?

The issue only occurs when:

* The website is running on **Shopify**
* There is a **Bottom Bar** (Navi+ or any other app), or a **Floating Action Button (FAB)** such as chat widgets, loyalty buttons, etc.
* The user opens the website **via the Google App on iPhone** (usually by searching and tapping into the website)

The issue does **not** occur when opening the website using:

* Safari (iPhone’s default browser)
* Chrome
* Facebook Browser
* TikTok Browser
* …

This confirms that the issue comes from the Google App on iOS.

***

### 2. Why are Shopify websites using Navi+ more likely to experience this issue?

The Google App uses a special way of rendering websites (Apple’s WebView). This rendering engine has a long-standing issue when calculating the real height of the screen in websites that have:

* A fixed Bottom Bar
* HTML or UI generated dynamically by JavaScript
* Complex layouts like Shopify (multiple container layers & constantly changing sections)

When these conditions occur, Google App may miscalculate the actual viewport height and create a **fake bottom padding**.

➡️ This is why the issue appears more frequently on Shopify websites using Navi+ or other bottom bar/FAB apps.

***

### 3. Is this a Navi+ issue?

No.\
This is an inherent bug of the **Google App on iPhone**, and it has existed for many years.

Even if Navi+ is disabled, other Shopify apps that display bottom bars or FABs still experience the same issue inside the Google App.

***

### 4. Evidence that this issue cannot be fully fixed

* Many Shopify apps that include a bottom bar or FAB experience the exact same issue.
* Even some built-in Shopify features show similar behavior inside the Google App.
* This is a well-known problem in the developer community, but the Google App has not addressed it.
* The issue disappears as soon as the user **taps anywhere on the screen** → Google App forces a re-render and recalculates the correct height.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIJeUOw7iYKzsFXSLVQK3%2FEx-1.1.2.png?alt=media&#x26;token=c2c351d9-10fd-47ed-bbef-1e436ab3ac4f" alt=""><figcaption></figcaption></figure>

***

### 5. Navi+’s current solution

Navi+ has researched and tested multiple approaches, but because the issue originates from the Google App itself, it cannot be completely resolved.

However, Navi+ has implemented the **best possible mitigation**:

#### ✔️ The issue only appears the first time

It usually occurs when the user:

* opens the website inside the Google App
* and navigates or taps anywhere on the page

When this happens, Navi+ triggers a one-time correction mechanism. As soon as the user:

* lightly taps the screen
* scrolls a little
* or interacts in any small way

#### ✔️ The issue disappears automatically

The Google App will re-render the entire layout, and from that moment:

* The Bottom Bar displays in the correct position
* The issue will not appear again until the Google App is closed and reopened

#### ✔️ This mitigation also reduces similar errors from other bottom-positioned apps when used together with Navi+

***

### 6. Quick explanation for end users

This message is designed for non-technical users:

> “The Google App on iPhone has a display bug when opening Shopify websites that use a Bottom Bar like Navi+. This issue comes from the Google App and affects many apps, not just Navi+. It only happens once and will disappear after any tap or scroll on the screen. If you use Safari or Chrome instead, the issue will not occur.”

***

### 7. Conclusion

❌ Not a Navi+ issue\
❌ Not a Shopify issue

✔️ A display bug in the Google App on iPhone\
✔️ Navi+ minimizes the issue so it appears only once and then disappears\
✔️ Safari/Chrome are fully unaffected
