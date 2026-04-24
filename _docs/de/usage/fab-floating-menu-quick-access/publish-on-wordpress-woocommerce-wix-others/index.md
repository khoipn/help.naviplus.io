---
description: 'Wenn Sie Ihre Website auf Shopify bereitstellen, installieren Sie bitte die dedizierte Shopify-App hier: <https://apps.shopify.com/pronavi-navigation-design> - Sie ist optimiert ...'
lang: de
layout: default
permalink: /de/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress-woocommerce-wix-others/
title: Veröffentlichen auf WordPress / WooCommerce / Wix / Andere
---
# Veröffentlichen auf WordPress / WooCommerce / Wix / Andere

Wenn Sie Ihre Website auf Shopify bereitstellen, installieren Sie bitte die dedizierte [Shopify](https://www.shopify.com/ "Shopify")-App hier: <https://apps.shopify.com/pronavi-navigation-design> - Sie ist für diese Plattform optimiert und ermöglicht eine stabile Bereitstellung mit vielen nützlichen integrierten Optionen.

Wenn Sie Ihre Website auf anderen Plattformen (wie [WordPress](https://wordpress.org/ "WordPress"), [WooCommerce](https://woocommerce.com/ "WooCommerce"), [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento") und benutzerdefinierten Websites, die mit PHP, Node.js oder reinem HTML erstellt wurden...), haben Sie die folgenden Implementierungsmethoden:

### 1. Navi+ auf Ihrer Website einbetten

Diese Implementierungsmethode eignet sich für alle Menütypen, die Navi+ derzeit unterstützt, einschließlich: Tabbar, Mega menu, Slide menu, FAB und Grid menu. Dieser Code muss nur einmal für alle Menüs verwendet werden.

```html
<!-- Fügen Sie diesen Code in den <head> der Website ein. (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Fügen Sie diesen Code in den <head> der Website ein -->
```

### FAQ (Häufig gestellte Fragen)

<details><summary>Was ist ein Token?</summary>
<p>Jedes Navi+-Konto erhält ein einzigartiges Token. Sie können dieses Token direkt aus dem Anwendungsheader anzeigen und kopieren. Das Token wird verwendet, um Ihr Menü sicher zu veröffentlichen.</p>
</details>

<details><summary>Was ist https://live.naviplus.app/start.js?</summary>
<p>Dies ist die feste URL von Navi+, die die Initialisierungslogik der Anwendung enthält. Das Skript ist leichtgewichtig (ca. 4KB), sodass es schnell auf den meisten Geräten und unter verschiedenen Netzwerkbedingungen geladen werden kann. Es wird über Cloudflare und BunnyCDN bereitgestellt, um eine stabile globale Leistung und zuverlässige Kompatibilität mit modernen Browsern zu gewährleisten.</p>
<p>Die Verwendung der asynchronen Lade-Methode bedeutet auch, dass sie den Ladeprozess der Website nicht beeinträchtigt.</p>
</details>

<details><summary>Verlangsamt dieser Einbettungscode meine Website?</summary>
<p>Der folgende Code ist extrem leichtgewichtig und kann in Ihre Website eingefügt werden, ohne die Geschwindigkeit (nur etwa 100-200ms für den ersten Ladevorgang und 0ms für nachfolgende Ladevorgänge), die Benutzererfahrung oder die SEO-Werte zu beeinträchtigen.</p>
</details>

<details><summary>Was ist der beste Ort, um diesen Code-Schnipsel einzufügen?</summary>
<p>Im Kopfbereich (oder so früh wie möglich). Warum? Die Website lädt die Ressourcen sequenziell, um die Benutzeroberfläche darzustellen. Wenn Sie Navi+ so früh wie möglich im HTML-Code platzieren, wird Ihr Menü bereit sein, so schnell wie möglich angezeigt zu werden, indem es wartet, bis die Bedingungen erfüllt sind, und dann wird das Menü sofort erscheinen. Dies verbessert die Benutzererfahrung.</p>
</details>

<details><summary>Wie kann ich feststellen, ob dieser Code erfolgreich in meine Website eingebettet wurde?</summary>
<p>Es gibt zwei Möglichkeiten:</p>
<p><strong>Methode 1 (für alle):</strong></p>
<p>Öffnen Sie Ihre Website mit dem Suffix #navidebug-on, zum Beispiel: <a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>. Wenn die Website in den Debug-Modus wechselt, funktioniert die Einbettung korrekt. Der Debug-Modus hilft Ihnen, CSS-Selektoren leicht zu identifizieren. Verwenden Sie #navidebug-off, um ihn auszuschalten.</p>
<p><strong>Methode 2 (für Entwickler):</strong></p>
<p>Öffnen Sie die Inspektor-Tools Ihres Browsers, gehen Sie zum Tab Konsole und suchen Sie nach einer grünen Nachricht: „Using Navi+..“. Diese Nachricht zeigt an, dass der Code erfolgreich eingebettet wurde.</p>
</details>

***

### 2. Fügen Sie ein Navi+-Menü an beliebiger Stelle auf Ihrer Website ein

Der folgende Code kann mehrfach auf einer Website mit unterschiedlichen Einfügeinformationen (insbesondere der **Embeded ID**, wie SF-123456789) verwendet werden. Wenn die Website gerendert wird, wird das Menü an der Stelle bereitgestellt und angezeigt, an der der Code eingefügt wurde, wenn die Bedingungen erfüllt sind. Dieser Menütetyp eignet sich für: Mega menu, Grid usw.

```html
<!-- Fügen Sie den Code dort ein, wo das Menü SF-123456789 erscheint. (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Fügen Sie den Code dort ein, wo das Menü SF-123456789 erscheint -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">Wichtig</mark>**:** Der obige Code verwendet den Beispiel-Einbettungscode <mark style="color:orange;">SF-123456789</mark>. Stellen Sie sicher, dass Sie ihn durch Ihren tatsächlichen Menü-Einbettungscode ersetzen.
{% comment %}endhint{% endcomment %}
