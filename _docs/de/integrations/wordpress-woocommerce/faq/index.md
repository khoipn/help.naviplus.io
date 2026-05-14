---
description: Häufig gestellte Fragen zum Navi+ Menü Builder WordPress-Plugin — Preisgestaltung, Leistung, WooCommerce, Multisite, Page Builder, Caching, Datenschutz und Deinstallation.
lang: de
layout: default
permalink: /de/docs/integrations/wordpress-woocommerce/faq/
title: Navi+ Menü Builder FAQ
---
# Navi+ Menü Builder FAQ

<details>
<summary>Ist das Plugin kostenlos?</summary>
<p>Ja. Das Plugin selbst ist kostenlos auf WordPress.org. Ihr Navi+ Abonnement (Starter / Business / Elite) bestimmt, welche Menütypen und Quoten verfügbar sind. Siehe <a href="{{ site.baseurl }}/docs/frequently-asked-questions/navi-plans-starter-business-and-elite/">Pläne &amp; Preise</a>.</p>
</details>

<details>
<summary>Benötige ich ein Navi+ Konto vor der Installation?</summary>
<p>Nein. Wenn Sie Ihr erstes Menü in <strong>Design → Naviplus Menü Builder</strong> speichern, verbindet das Plugin Ihre Seite automatisch mit dem Navi+ Dienst — keine separate Anmeldung, kein Token zum Einfügen.</p>
</details>

<details>
<summary>Verlangsamt das Plugin meine Seite?</summary>
<p>Keine messbare Auswirkung. Das Plugin fügt nur ein einziges <code>&lt;script async&gt;</code> Tag in <code>&lt;head&gt;</code> ein, das die Navi+ Laufzeit (~4&nbsp;KB) von Cloudflare/BunnyCDN lädt. Die Laufzeit ist vollständig asynchron und blockiert nicht das Rendern der Seite. Typische Ladeverzögerung beim ersten Laden beträgt 100–200&nbsp;ms; nachfolgende Ladevorgänge sind 0&nbsp;ms aufgrund von HTTP-Caching.</p>
</details>

<details>
<summary>Funktioniert es mit WooCommerce?</summary>
<p>Ja. WooCommerce-Seiten sind Standard-WordPress-Seiten, sodass Menüs auf Shop-, Produkt-, Warenkorb- und Checkout-Seiten ohne zusätzliche Konfiguration gerendert werden. Verwenden Sie Anzeige-Regeln im Editor (URL enthält <code>/cart</code>, <code>/checkout</code>, usw.), um zu steuern, wo Menüs erscheinen.</p>
</details>

<details>
<summary>Funktioniert es auf WordPress Multisite?</summary>
<p>Ja. Aktivieren Sie das Plugin pro Seite (Netzwerkaktivierung wird ebenfalls unterstützt) und konfigurieren Sie die Menüs jeder Seite über ihren eigenen <strong>Design → Naviplus Menü Builder</strong>. Jede Seite verbindet sich automatisch unabhängig mit Navi+, wenn ihr erstes Menü gespeichert wird.</p>
</details>

<details>
<summary>Gibt es Konflikte mit meinem Theme oder Page Builder (Elementor, Divi, Bricks, Oxygen)?</summary>
<p>Keine bekannten Konflikte. Menüs werden in eigenen Containern gerendert und verwenden isolierte Stile. Um ein Abschnittsmenü innerhalb eines Page Builders einzufügen, verwenden Sie ein <strong>Shortcode</strong> Widget mit <code>[naviwp embed_id="SF-..."]</code> — oder ein <strong>HTML</strong> Widget mit dem Embed-Div.</p>
</details>

<details>
<summary>Kann ich das Plugin und das generische Skript-Embed gleichzeitig verwenden?</summary>
<p>Nein — wählen Sie eines. Das Plugin injiziert bereits die Navi+ Laufzeit, sodass ein manuelles Skript-Tag es zweimal laden würde. Wenn Sie das Skript zuvor in Ihrem Theme oder über einen Header-Injektor eingebettet haben, entfernen Sie diesen Snippet, bevor Sie das Plugin aktivieren.</p>
</details>

<details>
<summary>Ich habe ein Menü aktualisiert, sehe aber die Änderung nicht auf meiner Seite.</summary>
<p>Menüs werden zur Laufzeit abgerufen, sodass ein WordPress-Cache-Flush nicht erforderlich ist. Wenn die Änderung immer noch nicht erscheint, führen Sie ein hartes Neuladen (Cmd/Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;R) durch, um den Browser-Cache zu umgehen. Für Sticky-Menüs bestätigen Sie auch, dass das Menü auf <strong>Veröffentlicht</strong> (nicht Entwurf) gesetzt ist und dass die Anzeige-Regeln mit der Seite übereinstimmen.</p>
</details>

<details>
<summary>Wie verstecke ich vorübergehend alle Navi+ Menüs?</summary>
<p>Zwei Optionen:</p>
<ul>
<li><strong>Seitenweit:</strong> Schalten Sie den "Inject site-wide" Schalter im Plugin-Admin aus — die Laufzeit hört auf zu laden, außer auf Seiten mit einem <code>[naviwp]</code> Shortcode/Block.</li>
<li><strong>Pro Menü:</strong> Schalten Sie das Menü im Editor auf <strong>Entwurf</strong>.</li>
</ul>
</details>

<details>
<summary>Wie deinstalliere ich das Plugin?</summary>
<p>Deaktivieren und löschen Sie es aus <strong>Plugins → Installierte Plugins</strong>. Das Plugin speichert nur die Seitenkennung und einige Optionen in <code>wp_options</code>; die Deinstallation entfernt sie automatisch. Ihre Menüs im Navi+ Dienst bleiben erhalten — wenn Sie später neu installieren, können Sie die gleichen Embed-IDs weiterverwenden.</p>
</details>

<h2 id="privacy">Datenschutz &amp; externe Dienste</h2>

<p>Das Plugin verbindet sich mit dem Navi+ Menü Builder-Dienst, um Menüs zu erstellen und darzustellen. Die ausgetauschten Daten können (aber sind nicht beschränkt auf): Ihre <strong>Seiten-Domain</strong>, Ihre <strong>Menü-Konfiguration</strong> und minimale Nutzungsdaten, die benötigt werden, um Menüs darzustellen.</p>

<ul>
<li>Datenschutzrichtlinie: <a href="https://naviplus.io/privacy">https://naviplus.io/privacy</a></li>
<li>Skript-Lader: <code>https://live.naviplus.app/start.js</code></li>
</ul>

<details>
<summary>Wo melde ich einen Fehler oder fordere ein Feature an?</summary>
<p>Verwenden Sie das offizielle Support-Forum: <a href="https://wordpress.org/support/plugin/naviplus-menu-builder/">https://wordpress.org/support/plugin/naviplus-menu-builder/</a>. Bei Fragen zu Konto oder Abrechnung senden Sie eine E-Mail an <a href="mailto:support@naviplus.io">support@naviplus.io</a>.</p>
</details>
