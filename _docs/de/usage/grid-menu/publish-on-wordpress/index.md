---
description: Publish a Navi+ Grid Menu on WordPress with the Navi+ AI Menu Builder plugin. Insert it where it should appear using the [naviwp embed_id="..."] shortcode or Gutenberg block.
lang: de
layout: default
permalink: /de/docs/usage/grid-menu/publish-on-wordpress/
title: Grid Menu — Publish on WordPress
---
# Grid Menu — Publish on WordPress

Ein **Grid Menu** ist ein **Abschnitts**-Menü — es wird an der Stelle auf der Seite angezeigt, an der Sie es einfügen. Es eignet sich hervorragend für Kategorienverknüpfungen, Hub-Seiten und "was möchten Sie tun?" Panels. Auf WordPress platziert das Navi+ AI Menu Builder-Plugin es über Shortcode oder Gutenberg-Block; Sie bearbeiten niemals die Theme-Dateien.

> Andere Plattformen (Wix, Squarespace, Webflow, benutzerdefinierte Seiten): siehe [Publish on Wix / Squarespace / Others]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/).

---

## Schritte

1. **Installieren Sie das Plugin** — siehe [Install the Navi+ AI Menu Builder plugin]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Erstellen Sie Ihr Grid Menu** in **Aussehen → Naviplus Menu Builder**. Siehe [Grid Menu — How to use]({{ site.baseurl }}/docs/usage/grid-menu/how-to-use/) und [Responsive Grid Menu]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/).
3. **Kopieren Sie die Embed-ID** (z. B. `SF-123456789`).
4. **Fügen Sie es ein** mit einer der Methoden unten.

---

## Menü einfügen

### Option 1 — Shortcode (empfohlen)

```text
[naviwp embed_id="SF-123456789"]
```

Fügen Sie dies in jeden Beitrag, jede Seite oder ein shortcode-fähiges Widget ein.

Typische Stellen:

- Ein Hero-Bereich auf der Startseite mit Kategorietiles.
- Eine Landingpage über der Falz.
- Der leere Zustand eines Kategoriearchivs.

### Option 2 — Gutenberg-Block

Im Block-Editor, **+ → Naviplus Menu Builder**, dann die Embed-ID in die Block-Seitenleiste einfügen. Ein einfacher **Shortcode**-Block mit `[naviwp embed_id="SF-..."]` ist gleichwertig.

### Option 3 — Page Builder (Elementor, Divi, Bricks, Oxygen)

Verwenden Sie ein **Shortcode**-Widget mit `[naviwp embed_id="SF-..."]`. Wenn ein Builder kein Shortcode-Widget hat, funktioniert ein **HTML**-Widget mit dem Embed-Div:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

### Option 4 — CSS-Selektor (automatische Platzierung aus der Navi+ App)

Anstatt einen Shortcode manuell zu platzieren, können Sie Navi+ automatisch einfügen oder ein Element mithilfe eines CSS-Selektors ersetzen — vollständig aus der Navi+ App konfiguriert.

#### Verständnis des CSS-Selektors

Ein CSS-Selektor zielt auf ein bestimmtes HTML-Element auf Ihrer Seite ab. Navi+ verwendet ihn, um genau zu wissen, **wo** Ihr Menü platziert werden soll — vor einfügen, nach einfügen oder ein vorhandenes Element ersetzen.

Um den richtigen CSS-Selektor zu finden, verwenden Sie:
- [Debug Mode](/docs/usage/debug-mode-find-css-selectors/) — über ein beliebiges Element fahren und sofort seinen Selektor kopieren
- [Browser DevTools](/docs/usage/general/find-css-selector/) — manuelle Methode über den Browser-Inspektor

#### Drei Veröffentlichungsoptionen

In der Navi+ App: klicken Sie auf **Publish to website** → aktivieren Sie **"Publish menu by Insert/Replace method"** → geben Sie Ihren CSS-Selektor ein und wählen Sie eine Option:

<details><summary>Option A: Vorher einfügen</summary>
<p>Fügt das Grid Menu sofort <strong>vor</strong> dem ausgewählten Element ein, angezeigt als voller Abschnitt.</p>
<p><strong>Beispiel:</strong> <code>main</code> → das Grid Menu erscheint über dem Hauptinhalt.</p>
<p>Dies ist die häufigste Einrichtung für ein Grid Menu auf WordPress.</p>
<p>Häufige Selektoren für WordPress-Themes:</p>
<ul>
<li><code>main</code> — die meisten Themes</li>
<li><code>#main</code> — Twenty Twenty, Astra, OceanWP</li>
<li><code>.site-main</code> — viele Themes</li>
<li><code>#content</code> — Divi, einige Standard-Themes</li>
</ul>
</details>

<details><summary>Option B: Nachher einfügen</summary>
<p>Fügt das Grid Menu sofort <strong>nach</strong> dem ausgewählten Element ein.</p>
<p><strong>Beispiel:</strong> <code>header</code> → das Grid Menu erscheint direkt unter dem Header.</p>
<p>Häufige Selektoren für WordPress-Themes:</p>
<ul>
<li><code>header</code> — die meisten Themes</li>
<li><code>.site-header</code> — OceanWP, Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One und Standard-WordPress-Themes</li>
</ul>
</details>

<details><summary>Option C: Ersetzen</summary>
<p>Die meisten WordPress-Seiten haben kein eingebautes Grid Menu-Element zum Ersetzen. Vorher einfügen <code>main</code> ist der empfohlene Ansatz.</p>
<p>Wenn Ihr Theme jedoch ein gitterartiges Element hat, das Sie ersetzen möchten, verwenden Sie <a href="/docs/usage/debug-mode-find-css-selectors/">Debug Mode</a> oder <a href="/docs/usage/general/find-css-selector/">Browser DevTools</a>, um seinen Selektor zu finden.</p>
</details>

#### Gerätespezifisches Targeting

Fügen Sie ein Suffix hinzu, um den Selektor nur auf einem bestimmten Gerät anzuwenden:

| Suffix | Gilt für |
|--------|------------|
| `(M)` | Nur mobil |
| `(D)` | Nur Desktop |
| *(keins)* | Beide |

Beispiel: `main(D)` — fügt das Grid Menu nur auf dem Desktop ein.

---

## Mobile Tipps

- Verwenden Sie **[Responsive Grid Menu]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)**, um die Spaltenanzahl pro Breakpoint zu wechseln — z. B. 4 Spalten auf dem Desktop, 2 auf dem Mobilgerät.
- Halten Sie den Inhalt der Kacheln kurz — ein Symbol, ein ein- oder zweisilbiges Label, optional eine kleine Beschreibung. Lange Labels umbrechen unvorhersehbar.
- Streben Sie nach Tippzielen von mindestens 44 × 44 px einschließlich Padding.

---

## Aktualisierung des Menüs später

Änderungen im Editor werden beim nächsten Frontend-Seitenaufruf angewendet — kein WordPress-Cache-Flush erforderlich.

---

## Verwandt

- [WordPress / WooCommerce — Übersicht]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Publish your menus on WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Responsive Grid Menu]({{ site.baseurl }}/docs/usage/grid-menu/responsive-grid-menu/)
