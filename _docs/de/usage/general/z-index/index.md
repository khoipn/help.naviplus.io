---
description: Dies ist ein häufiges Problem, aber sehr einfach zu handhaben, wenn Sie Navi+ verwenden. Ihre Website kann viele schwebende Elemente haben – sehen Sie sich die Beispiele unten an, um sie zu erkennen.
lang: de
layout: default
permalink: /de/docs/usage/general/z-index/
title: Z-index
---
# Z-index

Dies ist ein häufiges Problem, aber sehr einfach zu handhaben, wenn Sie Navi+ verwenden. Ihre Website kann viele schwebende Elemente haben – sehen Sie sich die Beispiele unten an, um sie zu erkennen.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FL6naWQmaqD1bKTtzaALP%2FHelp.MenuTree.1.3.1b.png?alt=media&#x26;token=0e7dad3b-0395-4f66-9589-2562175e8800" alt=""><figcaption><p>Note: These are the current z-index setups on the Dawn theme (Shopify’s most popular free default theme) at this time.</p></figcaption></figure>

Diese schwebenden Elemente werden durch ihre eigenen **z-index-Werte** gesteuert. Je höher der z-index, desto mehr Priorität hat dieses Element, um über anderen angezeigt zu werden. Der knifflige Teil ist, dass es keine festen Regeln für z-index-Werte gibt. Sie können jede Zahl bis zu 2.147.483.647 zuweisen. Jedes Thema, das Sie verwenden, und jede App, die auf Ihrem Shopify-Shop läuft, kann ihren eigenen z-index für schwebende Komponenten zuweisen – normalerweise basierend auf den Vorlieben des Entwicklers. Wenn diese Elemente auf Ihrer Website interagieren, können sie sich auf unerwartete Weise überlappen.

{% comment %}hint style="info" {% endcomment %}
Lassen Sie uns ein wenig Spaß haben :joy:: Werfen Sie einen genaueren Blick auf den Screenshot oben und Sie werden sehen – ja, es ist ein Durcheinander, und es gibt absolut **keine Regeln**. Es gibt drei Entwickler hinter der Website, die Sie sich ansehen.

Der Entwickler, der das Dawn-Thema erstellt hat, wählte einen z-index von 3 für das Menüpanel und 1000 für das Warenkorb-Panel – völlig unabhängig, ohne klare Logik.

Dann gibt es den Entwickler der Rivo Loyalty Rewards-App – einem beliebten Treue-Tool – der einen z-index von 99999999999 gewählt hat, wahrscheinlich ohne zu zählen, wie viele Neunen sie eingegeben haben. Ihr einziges Ziel: sicherstellen, dass der schwebende „Rewards“-Button immer oben bleibt, egal was passiert, sogar über Ihrem Warenkorb-Panel.

In der Zwischenzeit wählte der Navi+-Entwickler bescheiden eine kleinere Zahl – nur 5 – weil wir nicht zu aggressiv oder aufdringlich sein wollten. Also, was sollten Sie tun?
{% comment %}endhint{% endcomment %}

**Schritt 1:** Finden Sie den richtigen z-index Ihres Navi+-Menüs

<details><summary><strong>Methode 1: Fragen Sie den Navi+-Support (</strong>Am einfachsten)</summary>
<p>Dies ist der beste und effektivste Weg. Wir können Ihnen Informationen über die z-index-Werte von wichtigen Schnittstellenelementen wie dem Menüpanel, dem Warenkorb-Panel und allen Drittanbieter-Apps, die Sie verwenden, bereitstellen und dann die beste z-index-Einstellung für Ihren Fall empfehlen.</p>
<p>Zögern Sie nicht, das Chat-Fenster in der unteren rechten Ecke des Bildschirms zu nutzen, um mit einem Navi+-Supporter zu sprechen. Navi+ wächst, und wir schätzen Ihr Feedback wirklich – Ihre Probleme helfen uns, ein besseres Produkt zu entwickeln.</p>
<p>Wir sind nicht 24/7 online – nur 14 Stunden am Tag, basierend auf der vietnamesischen Zeitzone. Sobald wir jedoch Ihre Nachricht sehen, werden wir sofort antworten.</p>
</details>

<details><summary><strong>Methode 2: Verwenden Sie den Inspektor-Modus Ihres Browsers</strong> (detailliert, erfordert jedoch technisches Wissen)</summary>
<p>Bisher gibt es keine bessere Methode, um dies selbst zu überprüfen, es sei denn, Sie verwenden den Inspektor-Modus. Dieses Entwickler-Tool ist in allen modernen Browsern wie Chrome, Firefox, Safari oder Edge verfügbar. Klicken Sie mit der rechten Maustaste irgendwo auf Ihrer Website und wählen Sie <strong>Untersuchen</strong>, um den Inspektor-Modus zu öffnen.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FswowawWsXN01MlvSqqjX%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=470cd65f-0ce8-416a-8749-b9a210f6f08f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOabxqNlZUroNKJQfTKsI%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=2b872306-63e3-4dcf-b89a-f16f162727b4" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FSbR8KCnlOK4nFHhxntTJ%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=64ec8298-196e-4999-99a7-f301e052b5dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FDkVp8u1XnJPTiSKksWAQ%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=641c59d0-9ecf-4ac2-9626-6a1a90cc151f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOgAwr2zm2dapUz9OSGJO%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=493df1eb-fa89-4bf6-806e-bec230ec8e82" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FZN3XAcWn9J8Ifn6AQSjW%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=8de191fd-4b39-4e4d-946b-07bedf55ee52" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcwtXWdRp5QaafcNjLGD5%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=beff473b-cd52-4a72-9657-b54687d99363" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FG7lIvYAGwNMcV4NRQUKI%2FHelp.MenuTree.1.4.10.png?alt=media&#x26;token=2a9db521-805c-4374-bc3b-303e97e8b990" alt=""><figcaption></figcaption></figure>
</details>

<details><summary><strong>Methode 3:</strong> Versuchen und testen Sie basierend auf unseren Vorschlägen (Persönliche Erfahrung)</summary>
<p>In den meisten Fällen sind z-index-Probleme selten, wenn Sie nicht zu viele Apps verwenden. Das Hauptproblem entsteht normalerweise durch Überlappungen zwischen Ihrem Menü und anderen Schnittstellenelementen wie dem Menüpanel oder dem Warenkorb-Panel.</p>
<ul>
<li>Für Navi+ Sticky-Menüs wie Tabbar oder FAB: Wir empfehlen, den z-index niedrig zu halten, etwa 2 oder 3. Diese Menüs nehmen Bildschirmplatz ein, und es wäre kaputt oder nervig, wenn sie funktionale Panels wie den Warenkorb überdecken.</li>
<li>Für Navi+ Abschnittsmenüs wie Mega-Menüs: Wenn sie oben (im Header) platziert sind, können Sie sicher einen sehr hohen z-index (z.B. 2000000000) festlegen, um sicherzustellen, dass das Dropdown-Submenü nicht hinter anderen Komponenten verborgen ist.</li>
<li>Für Navi+ Grid-Menüs: z-index hat keine Wirkung, da das Menü flach ist und keine geschichtete Tiefe hat.</li>
<li>Für Navi+ Slide-Menüs: z-index sollte sehr hoch (z.B. 2000000000) eingestellt werden, um zu vermeiden, dass sie hinter anderen Elementen verborgen sind.</li>
</ul>
</details>

**Schritt 2:** Aktualisieren Sie den z-index Ihres Navi+-Menüs

<details><summary>Wie aktualisiere ich den z-index des Navi+-Menüs?</summary>
<p>Wählen Sie das erweiterte Menü und scrollen Sie nach unten, um die Z-index-Karte zu finden, und aktualisieren Sie dann den z-index und vergessen Sie nicht, auf SPEICHERN zu klicken, um die Änderungen anzuwenden.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fh2SfwqpjqjNzZwmbs2yL%2Fz-index%201.1.png?alt=media&#x26;token=47b5f318-d0b3-4f2a-9668-f9e3ed7dab09" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F7np7UDMk5KFGnSvMr8HK%2Fz-index%201.2.png?alt=media&#x26;token=ae4aa403-fbd6-41c9-a16d-861e8cd032bc" alt=""><figcaption></figcaption></figure>
</details>
