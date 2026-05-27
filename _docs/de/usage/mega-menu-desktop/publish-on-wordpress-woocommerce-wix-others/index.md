---
description: 'Wenn Sie Ihre Website auf Shopify bereitstellen, installieren Sie bitte die dedizierte Shopify-App hier: <https://apps.shopify.com/pronavi-navigation-design> - Sie ist optimiert ...'
lang: de
layout: default
permalink: /de/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/
title: Veröffentlichen auf Wix / Squarespace / Andere
---
# Veröffentlichen auf Wix / Squarespace / Andere

> **Auf WordPress?** Verwenden Sie das dedizierte [Naviplus Menu Builder-Plugin]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/) anstelle des manuellen Einbettens unten — keine Theme-Änderungen, platzieren Sie das Mega Menu über Shortcode oder Gutenberg-Block.

> **Auf Shopify?** Installieren Sie die dedizierte [Shopify-App](https://apps.shopify.com/pronavi-navigation-design) — sie ist für die Plattform mit integrierten Veröffentlichungsoptionen optimiert.

Diese Seite behandelt die **manuelle Skripteinbettung**-Methode, die der richtige Weg für [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento") und benutzerdefinierte Websites, die mit PHP, Node.js oder reinem HTML erstellt wurden, ist. Sie haben die folgenden Implementierungsmethoden:

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
<p>Dies ist die feste URL von Navi+, die die Initialisierungslogik der Anwendung enthält. Das Skript ist leichtgewichtig (ca. 4KB), sodass es schnell auf den meisten Geräten und Netzwerkbedingungen geladen werden kann. Es wird über Cloudflare und BunnyCDN bereitgestellt, um eine stabile globale Leistung und zuverlässige Kompatibilität mit modernen Browsern zu gewährleisten.</p>
<p>Die Verwendung der asynchronen Lade-Methode bedeutet auch, dass sie den Ladeprozess der Website nicht beeinträchtigt.</p>
</details>

<details><summary>Verlangsamt dieser Einbettungscode meine Website?</summary>
<p>Der folgende Code ist extrem leichtgewichtig und kann in Ihre Website eingefügt werden, ohne die Geschwindigkeit zu beeinträchtigen (er benötigt nur etwa 100-200 ms für den ersten Ladevorgang und 0 ms für nachfolgende Ladevorgänge), die Benutzererfahrung oder die SEO-Werte.</p>
</details>

<details><summary>Was ist der beste Ort, um diesen Code-Schnipsel einzufügen?</summary>
<p>Im Kopfbereich (oder so früh wie möglich). Warum? Die Website lädt Ressourcen sequenziell, um die Benutzeroberfläche darzustellen. Wenn Sie Navi+ so früh wie möglich im HTML-Code platzieren, wird Ihr Menü bereit sein, so schnell wie möglich angezeigt zu werden, indem es wartet, bis die Bedingungen erfüllt sind, und dann wird das Menü sofort erscheinen. Dies verbessert die Benutzererfahrung.</p>
</details>

<details><summary>Wie kann ich feststellen, ob dieser Code erfolgreich in meine Website eingebettet wurde?</summary>
<p>Es gibt zwei Möglichkeiten:</p>
<p><strong>Methode 1 (für alle):</strong></p>
<p>Öffnen Sie Ihre Website mit dem Suffix #navidebug-on, zum Beispiel: <a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>. Wenn die Website in den Debug-Modus wechselt, funktioniert die Einbettung korrekt. Der Debug-Modus hilft Ihnen, CSS-Selektoren leicht zu identifizieren. Verwenden Sie #navidebug-off, um ihn auszuschalten.</p>
<p><strong>Methode 2 (für Entwickler):</strong></p>
<p>Öffnen Sie die Inspektor-Tools Ihres Browsers, gehen Sie zum Tab Konsole und suchen Sie nach einer grünen Nachricht: „Using Navi+..“. Diese Nachricht zeigt an, dass der Code erfolgreich eingebettet wurde.</p>
</details>

***

### 2. Menü mit CSS-Selektor veröffentlichen (empfohlen)

Nachdem Sie das obige Skript eingebettet haben, gehen Sie zur Navi+-App, um zu konfigurieren, wo und wie Ihr Menü auf der Seite erscheint.

#### I.1. Verständnis des CSS-Selectors

Ein CSS-Selector ist eine Möglichkeit, ein bestimmtes HTML-Element auf Ihrer Webseite anzusprechen. Navi+ verwendet ihn, um genau zu wissen, **wo** Ihr Menü platziert werden soll — ob es vor oder nach einem Element eingefügt oder ein vorhandenes vollständig ersetzt werden soll.

Sie müssen kein Entwickler sein, um dies zu verwenden. Navi+ bietet ein einfaches Eingabefeld, in das Sie den Selektor eingeben, und es kümmert sich um den Rest.

Um den richtigen CSS-Selector für Ihre Website zu finden, können Sie verwenden:
- [Debug-Modus](/docs/usage/debug-mode-find-css-selectors/) — Navi+'s integriertes Tool: Fahren Sie mit der Maus über ein beliebiges Element auf Ihrer Seite und kopieren Sie sofort seinen Selektor
- [Browser-Entwicklertools](/docs/usage/general/find-css-selector/) — Eine manuelle Methode, die den integrierten Inspektor Ihres Browsers verwendet

#### I.2. Drei Veröffentlichungsoptionen

Schritt 1: Klicken Sie auf die Schaltfläche **Auf Website veröffentlichen** in der Navi+-App.

Schritt 2: Aktivieren Sie den Schalter "Menü mit Einfügen/Ersetzen-Methode veröffentlichen".

Schritt 3: Geben Sie Ihren CSS-Selector ein und wählen Sie eine der drei Veröffentlichungsoptionen unten aus.

<details><summary>Option 1: Vorher einfügen</summary>
<p>Fügt das Navi+-Menü sofort <strong>vor</strong> dem ausgewählten Element ein.</p>
<p><strong>Beispiel:</strong> CSS-Selector <code>main</code> → das Menü erscheint über dem Hauptinhalt der Seite.</p>
<p>Häufige CSS-Selektoren für diese Option:</p>
<ul>
<li><code>main</code> — funktioniert auf den meisten Plattformen (Webflow, Magento, benutzerdefinierte Seiten)</li>
<li><code>#main</code> — einige Plattformen und benutzerdefinierte Themes</li>
<li><code>.main-content</code> — verschiedene Plattformen</li>
</ul>
<p>Nicht in dieser Liste? Sie können mit einem Navi+-Supporter chatten, um sofortige Hilfe zu erhalten, oder <a href="/docs/usage/debug-mode-find-css-selectors/">Debug-Modus</a> oder <a href="/docs/usage/general/find-css-selector/">Browser-Entwicklertools</a> verwenden, um ihn selbst zu finden.</p>
</details>

<details><summary>Option 2: Nachher einfügen</summary>
<p>Fügt das Navi+-Menü sofort <strong>nach</strong> dem ausgewählten Element ein.</p>
<p><strong>Beispiel:</strong> CSS-Selector <code>header</code> → das Menü erscheint direkt unter dem Header.</p>
<p>Dies ist die häufigste Einrichtung für ein Desktop-Mega-Menü.</p>
<p>Häufige CSS-Selektoren für diese Option:</p>
<ul>
<li><code>header</code> — funktioniert auf den meisten Plattformen</li>
<li><code>.header-wrapper</code> — einige Plattformen</li>
<li><code>.site-header</code> — verschiedene Plattformen</li>
</ul>
<p>Nicht in dieser Liste? Sie können mit einem Navi+-Supporter chatten, um sofortige Hilfe zu erhalten, oder <a href="/docs/usage/debug-mode-find-css-selectors/">Debug-Modus</a> oder <a href="/docs/usage/general/find-css-selector/">Browser-Entwicklertools</a> verwenden, um ihn selbst zu finden.</p>
</details>

<details><summary>Option 3: Ersetzen</summary>
<p>Ersetzt das ausgewählte Element vollständig durch das Navi+-Menü. Das ursprüngliche Element wird ausgeblendet und Navi+ nimmt seinen Platz ein.</p>
<p><strong>Beispiel:</strong> CSS-Selector <code>.main-nav</code> → die Standardnavigation der Website wird ausgeblendet und durch Ihr Navi+-Mega-Menü ersetzt.</p>
<p>Häufige CSS-Selektoren für diese Option:</p>
<ul>
<li><code>nav</code> — generisches Navigationselement</li>
<li><code>.main-nav</code> — verschiedene Plattformen</li>
<li><code>.site-navigation</code> — verschiedene Plattformen</li>
</ul>
<p><strong>Hinweis:</strong> Bei Verwendung des Ersetzen-Modus kann es zu einem kurzen Flackern des ursprünglichen Menüs kommen, während Navi+ lädt. Siehe I.4 unten, um dies zu verhindern.</p>
<p>Nicht in dieser Liste? Sie können mit einem Navi+-Supporter chatten, um sofortige Hilfe zu erhalten, oder <a href="/docs/usage/debug-mode-find-css-selectors/">Debug-Modus</a> oder <a href="/docs/usage/general/find-css-selector/">Browser-Entwicklertools</a> verwenden, um ihn selbst zu finden.</p>
</details>

#### I.3. Gerätespezifisches Targeting

Sie können steuern, ob der CSS-Selector auf Mobilgeräten, Desktops oder beiden angewendet wird, indem Sie ein Suffix zu Ihrem Selektor hinzufügen:

| Suffix | Gilt für |
|--------|------------|
| `(M)` | Nur mobil |
| `(D)` | Nur Desktop |
| *(keins)* | Sowohl mobil als auch Desktop |

**Beispiele:**
- `header(D)` — wird nur auf Desktop eingefügt oder ersetzt
- `header(M)` — wird nur auf Mobilgeräten eingefügt oder ersetzt
- `header` — wird auf beiden Plattformen eingefügt oder ersetzt

**I.4. Wichtig! Optimieren Sie die Geschwindigkeit des Mega Menüs und die Benutzererfahrung (Ersetzen-Modus)**

Wenn Sie ein Menü durch ein anderes ersetzen, wartet Navi+, bis das alte Menü angezeigt wird, und tauscht es dann sofort gegen das neue aus. Obwohl dies fast sofort geschieht, gibt es immer noch einen kurzen Moment, in dem das alte Menü erscheint, was die Benutzer verwirren kann.

Mit diesem Schritt können Sie das alte Menü vollständig ausblenden und stattdessen einen Ladeeffekt anzeigen. Dies lässt die Website schneller erscheinen und verbessert die Benutzererfahrung. Navi+ bietet eine einfache integrierte Option dafür in den Veröffentlichungseinstellungen — aktivieren Sie sie und konfigurieren Sie den CSS-Selector des Elements, das ausgeblendet werden soll, mit einem optionalen `(M)` oder `(D)` Suffix für gerätespezifische Steuerung.

***

### 3. Fügen Sie ein Navi+-Menü an beliebiger Stelle auf Ihrer Website ein

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
