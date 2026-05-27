---
description: 'Schritt 1: Klicken Sie auf Online-Shop, dann auf Themes. Tipps: Klicken Sie mit der rechten Maustaste auf Online-Shop und wählen Sie "Link in neuem Tab öffnen", um Zeit zu sparen.'
lang: de
layout: default
permalink: /de/docs/usage/grid-menu/publishing-on-shopify/
title: Veröffentlichung auf Shopify
---
# Veröffentlichung auf Shopify

### Schritt 2: (Shopify) Veröffentlichen Sie das Menü auf Ihrer Website.

#### **I) METHODE 1: FÜGEN SIE (VOR ODER NACH) DIESEM MENÜ AN EINER BESTIMMTEN STELLE AUF IHRER WEBSITE EIN, ODER ERSETZEN SIE EIN BESTEHENDES MENÜ, MIT EINEM CSS-SELECTOR. (**&#x52;ECOMMENDED)

#### I.1. Aktivieren Sie Navi+ in App-Embeds

Schritt 1: Klicken Sie auf Online-Shop, dann auf Themes. Tipps: Klicken Sie mit der rechten Maustaste auf Online-Shop und wählen Sie "Link in neuem Tab öffnen", um Zeit zu sparen.

Schritt 2: Wählen Sie das Theme aus, in dem Sie das Menü veröffentlichen möchten. Klicken Sie auf: **Anpassen**

* Wenn Ihre Website neu ist und noch keine Benutzer hat, können Sie das Menü ohne Bedenken veröffentlichen – Sie können es jederzeit einfach ein- oder ausschalten, ohne die Besucher zu beeinträchtigen.
* Wenn Ihre Website bereits regelmäßigen Verkehr hat, seien Sie vorsichtiger. Die beste Praxis ist, ein **Duplikat-Theme** zu erstellen und Navi+ zuerst in dieser Version zu testen.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

Schritt 3: Gehen Sie zu App-Embeds, finden Sie "Navi+ auf allen Seiten" und aktivieren Sie es.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

Schritt 4: Vergessen Sie nicht, auf "Speichern" zu klicken, um die Änderungen anzuwenden.

Nach diesen 4 Schritten wurde Navi+ auf Ihrer Website installiert und ist bereit zur Anzeige. Der Prozess ist jedoch noch nicht abgeschlossen. Gehen Sie zurück zum Navi+-App-Tab, um **Menü veröffentlichen** tatsächlich zu aktivieren.

#### I.2. Verständnis des CSS-Selectors

Ein CSS-Selector ist eine Möglichkeit, ein bestimmtes HTML-Element auf Ihrer Webseite anzusprechen. Navi+ verwendet ihn, um genau zu wissen, **wo** Ihr Menü platziert werden soll – ob es vor oder nach einem Element eingefügt oder ein bestehendes vollständig ersetzt werden soll.

Um den richtigen CSS-Selector für Ihre Website zu finden, können Sie verwenden:
- [Debug-Modus](/docs/usage/debug-mode-find-css-selectors/) – Navi+'s integriertes Tool: Fahren Sie mit der Maus über ein beliebiges Element und kopieren Sie sofort seinen Selector
- [Browser-Entwicklertools](/docs/usage/general/find-css-selector/) – Manuelle Methode mit dem Inspektor Ihres Browsers

<details><summary><strong>So finden Sie den CSS-Selector mit den Browser-Entwicklertools</strong></summary>
<p>Sie können mit einem Navi+-Supporter chatten, um sofortige Hilfe zu erhalten, anstatt es selbst zu tun. Wenn Sie es jedoch selbst machen möchten, folgen Sie den Screenshots unten.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

#### I.3. Drei Veröffentlichungsoptionen

Schritt 1: Klicken Sie auf die Schaltfläche **Auf Website veröffentlichen**.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

Schritt 2: Aktivieren Sie den Schalter "Menü veröffentlichen durch Einfügen/Ersetzen-Methode".

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMKj8nfrhd9jdA3bXSFio%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=dd78fff1-36fb-4ce9-93e5-24d3076c170d" alt=""><figcaption></figcaption></figure>

Schritt 3: Geben Sie Ihren CSS-Selector ein und wählen Sie eine der drei Veröffentlichungsoptionen unten aus.

<details><summary>Option 1: Vorher einfügen (am häufigsten für Grid-Menü)</summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FFdsoRiQZP0I26RofqljL%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=51fec431-31e7-4bce-8c22-50a84664ee65" alt=""><figcaption></figcaption></figure>
<p>Fügt das Navi+-Menü sofort <strong>vor</strong> dem ausgewählten Element ein.</p>
<p><strong>Beispiel:</strong> CSS-Selector <code>main</code> → das Grid-Menü erscheint über dem Hauptinhalt der Seite.</p>
<p>Häufige CSS-Selectoren für Shopify-Themes (Dawn, Sense, Savor, Horizon):</p>
<ul>
<li><code>main</code> — die meisten Shopify-Themes</li>
<li><code>#MainContent</code> — Shopify Dawn-Theme</li>
</ul>
<p>Nicht in dieser Liste? Chatten Sie mit einem Navi+-Supporter oder verwenden Sie <a href="/docs/usage/debug-mode-find-css-selectors/">Debug-Modus</a> oder <a href="/docs/usage/general/find-css-selector/">Browser-Entwicklertools</a>.</p>
</details>

<details><summary>Option 2: Nachher einfügen</summary>
<p>Fügt das Navi+-Menü sofort <strong>nach</strong> dem ausgewählten Element ein.</p>
<p><strong>Beispiel:</strong> CSS-Selector <code>header</code> → das Grid-Menü erscheint direkt unter dem Header.</p>
<p>Häufige CSS-Selectoren für Shopify-Themes (Dawn, Sense, Savor, Horizon):</p>
<ul>
<li><code>header</code> — die meisten Shopify-Themes</li>
<li><code>.header-wrapper</code> — einige Themes</li>
</ul>
<p>Nicht in dieser Liste? Chatten Sie mit einem Navi+-Supporter oder verwenden Sie <a href="/docs/usage/debug-mode-find-css-selectors/">Debug-Modus</a> oder <a href="/docs/usage/general/find-css-selector/">Browser-Entwicklertools</a>.</p>
</details>

<details><summary>Option 3: Ersetzen</summary>
<p>In den meisten Shopify-Stores gibt es kein integriertes Grid-Menü-Element, das ersetzt werden kann. Vorher einfügen <code>main</code> ist der empfohlene Ansatz.</p>
<p>Wenn Ihr Theme jedoch ein gitterartiges Element hat, das Sie ersetzen möchten, verwenden Sie <a href="/docs/usage/debug-mode-find-css-selectors/">Debug-Modus</a> oder <a href="/docs/usage/general/find-css-selector/">Browser-Entwicklertools</a>, um seinen Selector zu finden.</p>
</details>

#### I.4. Gerätespezifisches Targeting

Sie können steuern, ob der CSS-Selector auf Mobilgeräten, Desktop oder beiden angewendet wird, indem Sie ein Suffix hinzufügen:

| Suffix | Gilt für |
|--------|----------|
| `(M)` | Nur Mobilgerät |
| `(D)` | Nur Desktop |
| *(keins)* | Sowohl Mobilgerät als auch Desktop |

**Beispiele:** `main(D)` — nur Desktop · `main(M)` — nur Mobilgerät · `main` — beide Plattformen.


#### **II) METHODE 2: FÜGEN SIE DIESES MENÜ ALS ABSCHNITT/BLOCK IM SHOPIFY-THEME HINZU**

Diese Methode fügt das Menü hinzu, indem ein Block/Abschnitt in Ihrem Shopify-Theme hinzugefügt wird. Es ist ein traditioneller Ansatz, daher werde ich es nicht im Detail beschreiben. Mit dieser Methode müssen Sie nicht einmal **"Navi+ in App-Embeds aktivieren"**, wie in Schritt 1 der Methode 1 erforderlich.

Kopieren Sie die Einbettungs-ID dieses Menüs und fügen Sie sie dann in den Block mit dem Namen "Navi+ auf Abschnitt" in den Theme-Abschnitten ein. Sie können einen Titel hinzufügen, die volle Breite einstellen und den Rand für diesen Abschnitt nach dem Hinzufügen anpassen.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FO2uavUwCekKwBVqvtJrt%2FMargin-padding%201.1.png?alt=media&#x26;token=35261670-ad9b-445f-9730-b10be40e406e" alt=""><figcaption></figcaption></figure>

<details><summary>Leitfaden zum Hinzufügen dieses Menüs als Abschnitt/Block im Shopify-Theme</summary>
<p>Unten finden Sie einen detaillierten Leitfaden zum Einfügen eines Navi+-Menüs als Abschnitt/Block in Ihr Shopify-Theme. Diese Methode ermöglicht es Ihnen, das Menü auf eine standardmäßige, von Shopify unterstützte Weise hinzuzufügen, obwohl sie nicht so flexibel ist wie die anderen von Navi+ bereitgestellten Methoden.</p>
<p>Diese Methode gilt für <strong>Mega Menüs</strong> und <strong>Grid Menüs</strong>. Sie <strong>GILT NICHT</strong> für <strong>Tabbar</strong>, <strong>FAB</strong> oder <strong>Slide Menüs</strong>.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcdnKqInMqe14B9NBOTqr%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=dcac5183-9433-4a11-bf2e-6508101ab089" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FF5RAjnmtKv4kXRhIMxaV%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=8eb3748c-16c6-4508-aebe-781d00c2a8d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F1ss5KONiPDSu0AphvToH%2FHelp.MenuTree.1.1.9.png.png?alt=media&#x26;token=395e460a-f275-4642-9a86-41f996ea87f5" alt=""><figcaption></figcaption></figure>
</details>
