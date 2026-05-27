---
description: Publish a Navi+ Mega Menu (Desktop) on WordPress with the Navi+ AI Menu Builder plugin. Place it in any post, page, widget, or page builder using the [naviwp embed_id="..."] shortcode or the Gutenberg block.
lang: de
layout: default
permalink: /de/docs/usage/mega-menu-desktop/publish-on-wordpress/
title: Mega Menu (Desktop) — Publish on WordPress
---
# Mega Menu (Desktop) — Publish on WordPress

A **Mega Menu (Desktop)** ist ein **Abschnittsmenü** — es verankert sich nicht an der Ansicht, sondern wird an der genauen Stelle auf der Seite gerendert, an der Sie es einfügen (typischerweise im Kopfbereich der Seite). Auf WordPress bettet das Navi+ AI Menu Builder-Plugin es über Shortcode oder Gutenberg-Block ein — Sie bearbeiten niemals die Theme-Dateien.

> Andere Plattformen (Wix, Squarespace, Webflow, benutzerdefinierte Seiten): siehe [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/).

---

## Schritte

1. **Installieren Sie das Plugin** — siehe [Install the Navi+ AI Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Erstellen Sie Ihr Mega Menu** in **Aussehen → Naviplus Menu Builder**. Siehe [Mega Menu (Desktop) — How to use]({{ site.baseurl }}/docs/usage/mega-menu-desktop/how-to-use/) für Designanleitungen.
3. **Kopieren Sie die Embed-ID** des Menüs (angezeigt im Veröffentlichungsbereich — sieht aus wie `SF-123456789`).
4. **Fügen Sie das Menü** dort ein, wo Sie es auf der Seite haben möchten (nächster Abschnitt).

---

## Fügen Sie das Menü ein — drei Optionen

### Option 1 — Shortcode (funktioniert überall)

Fügen Sie dies in jeden Beitrag, jede Seite oder shortcode-fähigen Widget ein:

```text
[naviwp embed_id="SF-123456789"]
```

Für ein Mega Menu, das im **Kopfbereich der Seite** auf jeder Seite erscheinen soll, ist der sauberste Platz ein Header-Widget-Bereich (wenn Ihr Theme einen bereitstellt). Wenn nicht, verwenden Sie einen globalen Header-Block / Template-Teil (Full Site Editing-Themes) oder greifen Sie auf Option 3 unten zurück.

### Option 2 — Gutenberg-Block

1. Klicken Sie im Block-Editor auf **+ → Naviplus Menu Builder**.
2. Fügen Sie die **Embed-ID** in die Block-Seitenleiste ein.

Sie können auch einen generischen **Shortcode**-Block mit `[naviwp embed_id="SF-..."]` einfügen.

### Option 3 — Page Builder (Elementor, Divi, Bricks, Oxygen)

Verwenden Sie das **Shortcode**-Widget des Builders und fügen Sie `[naviwp embed_id="SF-..."]` ein. Wenn Sie lieber rohes HTML verwenden möchten, fügen Sie das Embed-Div direkt ein:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

Das Plugin lädt bereits die Navi+ Laufzeit, sodass das Menü in diesem Container gerendert wird.

### Option 4 — CSS-Selektor (automatische Platzierung durch die Navi+ App)

Anstatt einen Shortcode manuell zu platzieren, können Sie Navi+ automatisch ein Element mithilfe eines CSS-Selektors einfügen oder ersetzen lassen — vollständig über die Navi+ App konfiguriert.

#### Verständnis des CSS-Selektors

Ein CSS-Selektor zielt auf ein bestimmtes HTML-Element auf Ihrer Seite ab. Navi+ verwendet ihn, um genau zu wissen, **wo** Ihr Menü platziert werden soll — vor einfügen, nach einfügen oder ein vorhandenes Element ersetzen.

Um den richtigen CSS-Selektor zu finden, verwenden Sie:
- [Debug Mode](/docs/usage/debug-mode-find-css-selectors/) — fahren Sie mit der Maus über ein beliebiges Element und kopieren Sie sofort seinen Selektor
- [Browser DevTools](/docs/usage/general/find-css-selector/) — manuelle Methode über den Browser-Inspektor

#### Drei Veröffentlichungsoptionen

In der Navi+ App: klicken Sie auf **Publish to website** → aktivieren Sie **"Publish menu by Insert/Replace method"** → geben Sie Ihren CSS-Selektor ein und wählen Sie eine Option:

<details><summary>Option A: Vorher einfügen</summary>
<p>Fügt das Menü sofort <strong>vor</strong> dem ausgewählten Element ein.</p>
<p><strong>Beispiel:</strong> <code>main</code> → Menü erscheint über dem Hauptinhalt.</p>
<p>Häufige Selektoren für WordPress-Themes:</p>
<ul>
<li><code>main</code> — die meisten Themes</li>
<li><code>#main</code> — Twenty Twenty, Astra, OceanWP</li>
<li><code>.site-main</code> — viele Themes</li>
</ul>
</details>

<details><summary>Option B: Nachher einfügen</summary>
<p>Fügt das Menü sofort <strong>nach</strong> dem ausgewählten Element ein.</p>
<p><strong>Beispiel:</strong> <code>header</code> → Menü erscheint direkt unter dem Header.</p>
<p>Dies ist die häufigste Einrichtung für ein Desktop-Mega-Menü.</p>
<p>Häufige Selektoren für WordPress-Themes:</p>
<ul>
<li><code>header</code> — die meisten Themes</li>
<li><code>.site-header</code> — OceanWP, Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One und Standard-WordPress-Themes</li>
<li><code>#header</code> — Divi</li>
</ul>
</details>

<details><summary>Option C: Ersetzen</summary>
<p>Ersetzt das ausgewählte Element vollständig durch das Navi+ Menü. Das ursprüngliche Element wird ausgeblendet und Navi+ nimmt seinen Platz ein.</p>
<p><strong>Beispiel:</strong> <code>.main-navigation</code> → die Standardnavigation des Themes wird ausgeblendet und durch Ihr Navi+ Mega Menu ersetzt.</p>
<p>Häufige Selektoren für WordPress-Themes:</p>
<ul>
<li><code>.main-navigation</code> — Twenty Twenty-One und viele Standard-WordPress-Themes</li>
<li><code>#site-navigation</code> — einige Standard-WordPress-Themes</li>
<li><code>.nav-primary</code> — verschiedene Themes</li>
</ul>
<p><strong>Hinweis:</strong> Ein kurzes Blitzen des ursprünglichen Menüs kann erscheinen, während Navi+ lädt. Verwenden Sie die integrierte UX-Optimierungsoption in den Veröffentlichungseinstellungen, um das ursprüngliche Element sofort auszublenden.</p>
</details>

#### Gerätespezifisches Targeting

Fügen Sie ein Suffix hinzu, um den Selektor nur auf einem bestimmten Gerät anzuwenden:

| Suffix | Gilt für |
|--------|----------|
| `(M)` | Nur mobil |
| `(D)` | Nur Desktop |
| *(keins)* | Beide |

Beispiel: `header(D)` — wird nur auf dem Desktop eingefügt.

---

## Mobile Überlegungen

Ein Desktop-Mega-Menü ist definitionsgemäß ein Desktop-first Layout. Auf kleinen Bildschirmen sollte es normalerweise überhaupt nicht gerendert werden — kombinieren Sie es mit einem [Mega Menu (Mobile)]({{ site.baseurl }}/docs/usage/mega-menu-mobile/) oder [Slide Menu]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/) und verwenden Sie Anzeige-Regeln, um jedes auf dem anderen Breakpoint auszublenden.

Öffnen Sie im Editor **Display rules → Device** und beschränken Sie das Mega Menu (Desktop) auf **nur Desktop**.

---

## Aktualisierung des Menüs später

Bearbeiten Sie das Menü im WordPress-Admin (oder in der Navi+ Web-App). Änderungen werden beim nächsten Frontend-Seitenaufruf angewendet — kein WordPress-Cache-Flush erforderlich, da Menüs zur Laufzeit vom Browser abgerufen werden.

---

## Verwandt

- [WordPress / WooCommerce — Übersicht]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publish your menus on WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Mega Menu (Desktop) — FAQ]({{ site.baseurl }}/docs/usage/mega-menu-desktop/faq/)
