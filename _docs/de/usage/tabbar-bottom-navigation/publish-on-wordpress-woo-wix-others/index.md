---
description: 'Wenn Sie Ihre Website auf Shopify bereitgestellt haben, installieren Sie bitte die dedizierte Shopify-App hier: <https://apps.shopify.com/pronavi-navigation-design> - Sie ist optimiert ...'
layout: default
permalink: /de/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/
title: Veröffentlichen auf Wix / Squarespace / Sonstiges
---
# Veröffentlichen auf Wix / Squarespace / Sonstiges

> **Auf WordPress?** Verwenden Sie stattdessen das dedizierte [Naviplus Menu Builder Plugin]({{ site.baseurl }}/de/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/) — keine Theme-Änderungen, kein Shortcode für die Tab Bar erforderlich.

> **Auf Shopify?** Installieren Sie die dedizierte [Shopify-App](https://apps.shopify.com/pronavi-navigation-design) — sie ist für die Plattform optimiert und verfügt über integrierte Veröffentlichungsoptionen.

> **Auf Wix?** Wenn Sie die Navi+ App aus dem Wix App Market installiert haben, wird Navi+ automatisch in Ihre Website eingebettet — Sie können **die folgenden Schritte überspringen**. Wenn Sie die Wix App nicht installiert haben, können Sie Navi+ auf Wix dennoch verwenden, indem Sie die manuelle Einbettung unten befolgen.

Diese Seite behandelt die **manuelle Script-Einbettung**, die der richtige Weg für [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento") und benutzerdefinierte Websites, die mit PHP, Node.js oder reinem HTML erstellt wurden, ist. Sie haben die folgenden Implementierungsmethoden:

### 1. Navi+ auf Ihrer Website einbetten

Diese Implementierungsmethode eignet sich für alle Menütypen, die Navi+ derzeit unterstützt, einschließlich: Tabbar, Mega Menu, Slide Menu, FAB und Grid Menu. Dieser Code muss nur einmal für alle Menüs verwendet werden.

```html
<!-- Fügen Sie diesen Code in den <head> Ihrer Website ein. (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Fügen Sie diesen Code in den <head> Ihrer Website ein -->
```

### Häufig gestellte Fragen

<details><summary>Was ist ein Token?</summary>
<p>Jedem Navi+ Konto wird ein eindeutiger Token zugewiesen. Sie können diesen Token direkt aus dem Kopfbereich der Anwendung anzeigen und kopieren. Der Token wird verwendet, um Ihr Menü sicher zu veröffentlichen.</p>
</details>

<details><summary>Was ist https://live.naviplus.app/start.js?</summary>
<p>Dies ist die feste URL von Navi+, die die Initialisierungslogik der Anwendung enthält. Das Script ist leicht (etwa 4 KB) und ermöglicht eine schnelle Ladung auf den meisten Geräten und Netzwerkbedingungen. Es wird über Cloudflare und BunnyCDN bereitgestellt, um stabile globale Leistung und zuverlässige Kompatibilität mit modernen Browsern zu bieten.</p>
<p>Die Verwendung der asynchronen Ladefunktion bedeutet auch, dass sich dies nicht auf den Website-Ladeprozess auswirkt.</p>
</details>

<details><summary>Verlangsamt dieser Einbettungscode meine Website?</summary>
<p>Der Code unten ist äußerst leicht und kann in Ihre Website eingefügt werden, ohne die Geschwindigkeit zu beeinflussen (nur etwa 100-200 ms für das erste Laden und 0 ms für nachfolgende Lade), Kundenerlebnis oder SEO-Bewertungen</p>
</details>

<details><summary>Was ist der beste Ort, um diesen Code-Snippet einzufügen?</summary>
<p>Im Head-Bereich (oder so früh wie möglich). Warum? Die Website lädt Ressourcen nacheinander, um die Schnittstelle zu rendern. Das Platzieren von Navi+ am Anfang des HTML-Codes hilft Ihrem Menü, so schnell wie möglich angezeigt zu werden, indem es wartet, bis die Bedingungen erfüllt sind. Anschließend wird das Menü sofort angezeigt. Dies verbessert das Benutzererlebnis.</p>
</details>

<details><summary>Wie kann ich überprüfen, ob dieser Code erfolgreich in meine Website eingebettet wurde?</summary>
<p>Es gibt zwei Möglichkeiten:</p>
<p><strong>Methode 1 (für alle):</strong></p>
<p>Öffnen Sie Ihre Website mit dem Suffix #navidebug-on, zum Beispiel: <a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>. Wenn die Website in den Debug-Modus wechselt, ist die Einbettung korrekt. Der Debug-Modus hilft Ihnen, CSS-Selektoren leicht zu identifizieren. Verwenden Sie #navidebug-off, um ihn auszuschalten.</p>
<p><strong>Methode 2 (für Entwickler):</strong></p>
<p>Öffnen Sie die Inspektionswerkzeuge Ihres Browsers, gehen Sie zur Konsolen-Registerkarte und suchen Sie nach einer grünen Nachricht: "Using Navi+..". Diese Nachricht zeigt an, dass der Code erfolgreich eingebettet wurde.</p>
</details>

***

### 2. Navi+ Menü an einer beliebigen Stelle auf Ihrer Website einfügen

Der Code unten kann mehrfach auf einer Website mit unterschiedlichen Eingabeinformationen verwendet werden (besonders die **Embedded ID**, wie SF-123456789). Wenn die Website gerendert wird, wird das Menü an der Position bereitgestellt und angezeigt, an der der Code eingefügt wird. Dieser Menütyp ist geeignet für: Mega Menu, Grid usw.

```html
<!-- Fügen Sie den Code dort ein, wo das Menü SF-123456789 angezeigt wird. (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Fügen Sie den Code dort ein, wo das Menü SF-123456789 angezeigt wird -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">Wichtig</mark>**:** Der obige Code verwendet den Beispiel-Einbettungscode <mark style="color:orange;">SF-123456789</mark>. Stellen Sie sicher, dass Sie ihn durch Ihren tatsächlichen Menü-Einbettungscode ersetzen.
{% comment %}endhint{% endcomment %}
