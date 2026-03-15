---
description: 'Schritt 1: Klicken Sie auf Online-Shop, dann auf Themes. Tipps: Klicken Sie mit der rechten Maustaste auf Online-Shop und wählen Sie „Link in neuem Tab öffnen“, um Zeit zu sparen.&'
lang: de
layout: default
permalink: /de/docs/usage/slide-menu-hamburger-menu/publishing-on-shopify/
title: Veröffentlichung auf Shopify
---
# Veröffentlichung auf Shopify

### Schritt 2: (Shopify) Veröffentlichen Sie das Menü auf Ihrer Website.

#### 2.1. Aktivieren Sie Navi+ in App-Integrationen

Schritt 1: Klicken Sie auf Online-Shop, dann auf Themes. Tipps: Klicken Sie mit der rechten Maustaste auf Online-Shop und wählen Sie „Link in neuem Tab öffnen“, um Zeit zu sparen.&#x20;

Schritt 2: Wählen Sie das Theme aus, in dem Sie das Menü veröffentlichen möchten.  Klicken Sie auf: **Anpassen**

* Wenn Ihre Website neu ist und noch keine Benutzer hat, können Sie das Menü ohne Bedenken veröffentlichen – Sie können es jederzeit einfach ein- oder ausschalten, ohne die Besucher zu beeinträchtigen.
* Wenn Ihre Website bereits regelmäßigen Verkehr hat, seien Sie vorsichtiger. Die beste Praxis ist, ein **Duplikat-Theme** zu erstellen und Navi+ zuerst in dieser Version zu testen.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

Schritt 3: Gehen Sie zu App-Integrationen, suchen Sie „Navi+ auf allen Seiten“ und aktivieren Sie es.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

Schritt 4: Vergessen Sie nicht, auf „Speichern“ zu klicken, um die Änderungen anzuwenden.

Nach diesen 4 Schritten wurde Navi+ auf Ihrer Website installiert und ist bereit zur Anzeige. Der Prozess ist jedoch noch nicht abgeschlossen. Gehen Sie zurück zum Navi+-App-Tab, um tatsächlich **Menü veröffentlichen** zu aktivieren.

#### 2.2. Wählen Sie die Anzeigeeinstellungen und veröffentlichen Sie das Menü.

Schritt 1: Klicken Sie auf die Schaltfläche **Auf Website veröffentlichen**.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

Schritt 2: Aktivieren Sie den Schalter "Menü veröffentlichen (sichtbar nur wenn vom Benutzer geöffnet)".&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FhSDziWrg4Jxr9bZ9jB4j%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=3c39339c-fe75-4653-86e7-411318cf506d" alt=""><figcaption></figcaption></figure>

Schritt 3: Wählen Sie die Anzeigemethode&#x20;

**Methode 1: Öffnen Sie dieses Menü von einem anderen Navi+-Menüelement mit der Syntax open:NaviMenu**

Diese Methode ermöglicht es Ihnen, ein Slide-Menü zu öffnen, wenn der Benutzer auf ein Menüelement aus einem anderen Navi+-Menü klickt oder tippt (zum Beispiel: auf einer Tabbar, einem FAB in der unteren Ecke des Bildschirms oder einem Mega-Menü). Hauptziele dieser Methode:

<details><summary>Zweck 1: Verbesserte Sichtbarkeit und Benutzererfahrung, indem die gesamte Sitemap im Slide-Menü angezeigt wird, während sie leicht zugänglich bleibt.</summary>
<p>Das Slide-Menü eignet sich ideal zur Anzeige Ihrer gesamten Sitemap dank seines großen Raums und flexiblen Layouts, was es perfekt macht, um den gesamten Produktkatalog, Links zu wichtigen Seiten, Blogs, Support-Tools usw. anzuzeigen. Das Slide-Menü ist jedoch standardmäßig oft weniger sichtbar. Um die Auffindbarkeit zu verbessern, können Sie ein anderes Navi+-Menü (wie eine Tabbar) verwenden, um Ihre wichtigsten und erkennbaren Links zu präsentieren, und ein hervorgehobenes Menüelement platzieren, das das Slide-Menü auslöst. Dies sorgt für bessere Sichtbarkeit und Benutzerengagement für das Slide-Menü.</p>
</details>

<details><summary>Zweck 2: <strong>Unbegrenzte Menütiefe mit einer großen, flexiblen Menüstruktur (Nur Navi+)</strong></summary>
<p>Anstatt ein Popup mit begrenztem Platz anzuzeigen, wenn auf ein Menüelement geklickt wird, können Sie ein anderes Slide-Menü mit drei Ebenen und mehreren Möglichkeiten zur Präsentation von Informationen öffnen. Dies kann für andere Menüelemente oder sogar für dasselbe Slide-Menü wiederholt werden, sodass Sie praktisch unbegrenzte Tiefe für Ihre Navi+-Menüs erstellen können.</p>
</details>

**Methode 2: Wenn ein UI-Element (definiert durch einen CSS-Selektor wie #id_of_element oder .class_name) angeklickt oder angetippt wird, wird dieses Menü angezeigt.**

Dies ist arguably die beste und am häufigsten verwendete Methode mit dem Slide-Menü.\
In diesem Leitfaden konzentrieren wir uns darauf, das Standard-Hamburger-Menü der Website auf Mobilgeräten zu ersetzen.\
Sie können diese Methode auch kreativ anwenden, indem Sie andere CSS-Selektoren finden und verwenden, um das Menü auszulösen.

<details><summary>Wie man das Standard-Hamburger-Menü Ihrer Website mit dem Navi+ Slide-Menü ersetzt (<strong>Beliebter Leitfaden)?</strong></summary>
<p>Auf den meisten Shopify-Websites wird das Standard-Hamburger-Menü aus der Desktop-Version über responsives Design generiert. Daher ist es normalerweise sehr einfach, hat eine flache Tiefe und unterstützt keine Icons, Bilder oder fortgeschrittene Layouts. Es durch ein Navi+ Slide-Menü zu ersetzen, ist eine gängige und praktische Wahl, um die fortschrittlichen Funktionen von Navi+ zu nutzen.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIB9UqVXh9bL1z4AuHAQj%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=1bef8174-8a59-4765-b2ea-e669c1d12fd6" alt=""><figcaption></figcaption></figure>

<p>Um dies zu tun, identifizieren Sie einfach den CSS-Selektor Ihres Hamburger-Menü-Icons auf Ihrer Website und geben Sie ihn in das Textfeld ein. Wir haben bereits die CSS-Selektoren für einige der beliebtesten Themes für Sie gefunden, die unten aufgeführt sind.</p>
<ol>
<li>CSS-Selektoren für einige beliebte, kostenlose Themes.. von Shopify wie Dawn, Sense, Savor, Horizon..</li>
</ol>
<pre class="codehilite"><code>#Details-menu-drawer-container 
</code></pre>

<ol>
<li>Nicht in dieser Liste, keine Sorge</li>
</ol>
<pre class="codehilite"><code>- Sie können mit einem Navi+-Supporter chatten, um sofortige Hilfe zu erhalten – dies dauert nur ein paar Minuten, um den CSS-Selektor zu finden.

- Oder Sie können dem Selbsthilfe-Leitfaden in den nächsten Themen folgen (Direkt nach diesem Thema).
</code></pre>
</details>

<details><summary><strong>Wie finde ich den CSS-Selektor auf meiner Website?</strong></summary>
<p>Sie können mit einem Navi+-Supporter chatten, um sofortige Hilfe zu erhalten, anstatt es selbst zu tun.\
Allerdings wird (1) dies Ihnen helfen, die Kernidee zu verstehen, und (2) wenn Sie es selbst tun möchten, folgen Sie den Anweisungen unten.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

#### 2.3. Wichtig! Optimieren Sie die Geschwindigkeit des Slide-Menüs, fügen Sie einen Ladeeffekt hinzu und verhindern Sie doppelte Menüs

Es ist nichts, was Sie sofort beheben müssen, aber auf lange Sicht ist es wichtig für die Benutzererfahrung des Slide-Menüs, das von Navi+ erstellt wurde. Bevor Navi+ das alte Slide-Menü vollständig ersetzt, ist das ursprüngliche Menü des Themas weiterhin aktiv. Für einen kurzen Moment – etwa eine halbe Sekunde – kann es vorkommen, dass, wenn ein Benutzer das Menü lädt und schnell auf die Hamburger-Schaltfläche tippt (ein seltener Fall, aber dennoch möglich), das alte Themenmenü erscheint und einen visuellen Fehler verursacht.

<details><summary>Navi+ bietet eine einfache Lösung zur Optimierung der Benutzererfahrung und Geschwindigkeit wie folgt Schritte</summary>
<h4>Warum müssen Sie das tun? Ist Navi+ nicht bereits schnell?</h4>
<p>Navi+ ist sehr schnell. Es wird vollständig auf einem führenden CDN mit sehr niedriger Latenz (ca. 100 ms) bereitgestellt und kann Millionen von Kunden bedienen, ohne langsamer zu werden.</p>
<p>Allerdings läuft Navi+ weiterhin innerhalb des Shopify-Ökosystems. Shopify hat seine eigenen Lade-Regeln:</p>
<ol>
<li>Shopify priorisiert das Laden seiner eigenen Ressourcen zuerst.</li>
<li>Dann lädt Shopify den Inhalt des Themas.</li>
<li>Schließlich lädt Shopify den App-Inhalt, jedoch nicht in einer bestimmten Reihenfolge.</li>
</ol>
<p>Das bedeutet, dass, wenn Sie mehrere Apps verwenden, Navi+ manchmal später als erwartet geladen werden kann. Deshalb kann es in bestimmten Fällen langsamer erscheinen.</p>
<hr />
<h3>Was ist meine Lösung?</h3>
<p>Derzeit hat Navi+ eine hohe Priorität beim Laden auf Shopify-Websites. Es gibt jedoch immer noch eine gewisse Verzögerung. Wir werden diese Probleme hier nacheinander angehen:</p>
<h4>Slide-Menü: Fügen Sie einen Ladeeffekt hinzu und sperren Sie den Auslöser-Selektor</h4>
<p>Sehr einfach: Geben Sie einfach den CSS-Selektor ein, den Sie für das Slide-Menü verwenden, in den Einbettungsbereich der Navi+-App (siehe Bild unten).</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

<p>Hinweis:</p>
<ul>
<li>Fügen Sie das Suffix <strong>(M)</strong> hinzu, wenn Sie möchten, dass es nur auf Mobilgeräten angewendet wird.</li>
<li>Fügen Sie das Suffix <strong>(D)</strong> hinzu, wenn Sie möchten, dass es nur auf Desktop angewendet wird.</li>
<li>Fügen Sie kein Suffix hinzu, wenn Sie möchten, dass es auf beiden Plattformen angewendet wird.</li>
</ul>
</details>
