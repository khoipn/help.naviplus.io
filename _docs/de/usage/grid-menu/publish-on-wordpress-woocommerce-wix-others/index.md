---
description: 'Wenn Sie Ihre Website auf Shopify bereitstellen, installieren Sie bitte die dedizierte Shopify-App hier: <https://apps.shopify.com/pronavi-navigation-design> - Es ist optimiert ...'
lang: de
layout: default
permalink: /de/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/
title: Veröffentlichen auf Wix / Squarespace / Andere
---
# Veröffentlichen auf Wix / Squarespace / Andere

> **Auf WordPress?** Verwenden Sie das dedizierte [Naviplus Menu Builder plugin]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress/) anstelle des manuellen Einbettens unten — keine Theme-Bearbeitungen, platzieren Sie das Grid über Shortcode oder Gutenberg-Block.

> **Auf Shopify?** Installieren Sie die dedizierte [Shopify app](https://apps.shopify.com/pronavi-navigation-design) — es ist optimiert für die Plattform mit integrierten Veröffentlichungsoptionen.

Diese Seite behandelt die **manuelle Skripteinbettung**-Methode, die der richtige Weg für [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento") und benutzerdefinierte Websites ist, die mit PHP, Node.js oder reinem HTML erstellt wurden. Sie haben die folgenden Implementierungsmethoden:

### 1. Navi+ auf Ihrer Website einbetten

Diese Implementierungsmethode eignet sich für alle Menütpyen, die Navi+ derzeit unterstützt, einschließlich: Tabbar, Mega menu, Slide menu, FAB und Grid menu. Dieser Code muss nur einmal für alle Menüs verwendet werden.

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
<p>Dies ist die feste URL von Navi+, die die Initialisierungslogik der Anwendung enthält. Das Skript ist leicht (ca. 4KB), sodass es schnell auf den meisten Geräten und Netzwerkbedingungen geladen werden kann. Es wird über Cloudflare und BunnyCDN bereitgestellt, um eine stabile globale Leistung und zuverlässige Kompatibilität mit modernen Browsern zu gewährleisten.</p>
<p>Die Verwendung der asynchronen Lade-Methode bedeutet auch, dass sie den Ladeprozess der Website nicht beeinflusst.</p>
</details>

<details><summary>Verlangsamt dieser Einbettungscode meine Website?</summary>
<p>Der folgende Code ist extrem leicht und kann in Ihre Website eingefügt werden, ohne die Geschwindigkeit zu beeinträchtigen (er benötigt nur etwa 100-200ms für den ersten Ladevorgang und 0ms für nachfolgende Ladevorgänge), die Benutzererfahrung oder die SEO-Werte.</p>
</details>

<details><summary>Was ist der beste Ort, um diesen Code-Schnipsel einzufügen?</summary>
<p>Im Kopfbereich (oder so früh wie möglich). Warum? Die Website lädt Ressourcen sequenziell, um die Benutzeroberfläche darzustellen. Wenn Sie Navi+ so früh wie möglich im HTML-Code platzieren, wird Ihr Menü bereit sein, so schnell wie möglich angezeigt zu werden, indem es wartet, bis die Bedingungen erfüllt sind, dann wird das Menü sofort erscheinen. Dies verbessert die Benutzererfahrung.</p>
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
- [Debug Mode](/docs/usage/debug-mode-find-css-selectors/) — Navi+'s integriertes Tool: fahren Sie mit der Maus über ein beliebiges Element auf Ihrer Seite und kopieren Sie sofort seinen Selektor
- [Browser DevTools](/docs/usage/general/find-css-selector/) — Eine manuelle Methode, die den integrierten Inspektor Ihres Browsers verwendet

#### I.2. Drei Veröffentlichungsoptionen

Schritt 1: Klicken Sie auf die Schaltfläche **Auf Website veröffentlichen** in der Navi+-App.

Schritt 2: Aktivieren Sie den Schalter "Menü durch Einfügen/Ersetzen veröffentlichen".

Schritt 3: Geben Sie Ihren CSS-Selector ein und wählen Sie eine der drei Veröffentlichungsoptionen unten aus.

<details><summary>Option 1: Vorher einfügen</summary>
<p>Fügt das Navi+-Menü sofort <strong>vor</strong> dem ausgewählten Element ein.</p>
<p><strong>Beispiel:</strong> CSS-Selector <code>main</code> → das Grid Menu erscheint über dem Hauptinhalt der Seite, dargestellt als voller Abschnitt.</p>
<p>Dies ist die häufigste Einrichtung für ein Grid Menu auf Nicht-Shopify-Plattformen.</p>
<p>Häufige CSS-Selektoren für diese Option:</p>
<ul>
<li><code>main</code> — funktioniert auf den meisten Plattformen (Webflow, Magento, benutzerdefinierte Seiten)</li>
<li><code>#main</code> — einige Plattformen und benutzerdefinierte Themen</li>
<li><code>.main-content</code> — verschiedene Plattformen</li>
</ul>
<p>Nicht in dieser Liste? Sie können mit einem Navi+-Supporter chatten, um sofortige Hilfe zu erhalten, oder <a href="/docs/usage/debug-mode-find-css-selectors/">Debug Mode</a> oder <a href="/docs/usage/general/find-css-selector/">Browser DevTools</a> verwenden, um es selbst zu finden.</p>
</details>

<details><summary>Option 2: Nachher einfügen</summary>
<p>Fügt das Navi+-Menü sofort <strong>nach</strong> dem ausgewählten Element ein.</p>
<p><strong>Beispiel:</strong> CSS-Selector <code>header</code> → das Grid Menu erscheint direkt unter dem Header.</p>
<p>Häufige CSS-Selektoren für diese Option:</p>
<ul>
<li><code>header</code> — funktioniert auf den meisten Plattformen</li>
<li><code>.header-wrapper</code> — einige Plattformen</li>
<li><code>.site-header</code> — verschiedene Plattformen</li>
</ul>
<p>Nicht in dieser Liste? Sie können mit einem Navi+-Supporter chatten, um sofortige Hilfe zu erhalten, oder <a href="/docs/usage/debug-mode-find-css-selectors/">Debug Mode</a> oder <a href="/docs/usage/general/find-css-selector/">Browser DevTools</a> verwenden, um es selbst zu finden.</p>
</details>

<details><summary>Option 3: Ersetzen</summary>
<p>Ersetzt das ausgewählte Element vollständig durch das Navi+-Menü. Das ursprüngliche Element wird ausgeblendet und Navi+ nimmt seinen Platz ein.</p>
<p>Die meisten Plattformen haben kein integriertes Grid Menu, daher ist der Ersetzen-Modus selten für diesen Menütyp anwendbar. Vorher einfügen <code>main</code> ist der empfohlene Ansatz.</p>
<p>Wenn Ihre Plattform jedoch ein grid-artiges Navigationselement hat, das Sie ersetzen möchten, verwenden Sie <a href="/docs/usage/debug-mode-find-css-selectors/">Debug Mode</a> oder <a href="/docs/usage/general/find-css-selector/">Browser DevTools</a>, um seinen CSS-Selector zu finden.</p>
</details>

#### I.3. Gerätespezifisches Targeting

Sie können steuern, ob der CSS-Selector auf Mobilgeräten, Desktop oder beiden angewendet wird, indem Sie ein Suffix zu Ihrem Selektor hinzufügen:

| Suffix | Gilt für |
|--------|----------|
| `(M)` | Nur Mobilgeräte |
| `(D)` | Nur Desktop |
| *(keins)* | Sowohl Mobilgeräte als auch Desktop |

**Beispiele:**
- `main(D)` — wird nur auf Desktop eingefügt
- `main(M)` — wird nur auf Mobilgeräten eingefügt
- `main` — wird auf beiden Plattformen eingefügt

Dies ist nützlich, wenn Sie möchten, dass das Grid Menu nur auf bestimmten Geräten angezeigt wird oder wenn Sie eine andere Platzierung auf Mobilgeräten im Vergleich zu Desktop benötigen.

***

### 3. Fügen Sie ein Navi+-Menü an beliebiger Stelle auf Ihrer Website ein

Der folgende Code kann mehrfach auf einer Website mit unterschiedlichen Einfügeinformationen (insbesondere der **Embeded ID**, wie SF-123456789) verwendet werden. Wenn die Website gerendert wird, wird das Menü an der Stelle bereitgestellt und angezeigt, an der der Code eingefügt wurde, wenn die Bedingungen erfüllt sind. Dieser Menütyp eignet sich für: Mega menu, Grid usw.

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
