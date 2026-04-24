---
description: Es geht um das Problem mit dem unteren Padding unter der Bottom Bar, wenn eine Shopify-Website, die Navi+ verwendet, in der Google App auf dem iPhone geöffnet wird.
lang: de
layout: default
permalink: /de/docs/limitation/shopify-bottom-bar-issue-on-google-app-iphone/
title: Shopify Bottom Bar-Problem in der Google App (iPhone)
---
# Shopify Bottom Bar-Problem in der Google App (iPhone)

Es geht um das Problem mit dem unteren Padding unter der Bottom Bar, wenn eine Shopify-Website, die Navi+ verwendet, in der Google App auf dem iPhone geöffnet wird.

Wenn Benutzer eine Shopify-Website, die **Navi+** verwendet (oder eine Anwendung mit einem festen unteren Menü, schwebenden Schaltflächen usw.), **in der Google App auf dem iPhone** öffnen, kann es manchmal zu einem ungewöhnlichen weißen Raum am unteren Bildschirmrand kommen.

Dieses Problem tritt nur in der Google App auf und wird **nicht durch Navi+** verursacht. Im Folgenden finden Sie eine klare und einfache Erklärung.

***

### 1. Wo tritt das Problem auf?

Das Problem tritt nur auf, wenn:

* Die Website auf **Shopify** läuft
* Es eine **Bottom Bar** (Navi+ oder eine andere App) oder eine **Floating Action Button (FAB)** wie Chat-Widgets, Treue-Buttons usw. gibt.
* Der Benutzer die Website **über die Google App auf dem iPhone** öffnet (normalerweise durch Suchen und Antippen der Website)

Das Problem tritt **nicht** auf, wenn die Website mit:

* Safari (iPhones Standardbrowser)
* Chrome
* Facebook-Browser
* TikTok-Browser
* …

Dies bestätigt, dass das Problem von der Google App auf iOS stammt.

***

### 2. Warum haben Shopify-Websites, die Navi+ verwenden, eher mit diesem Problem zu kämpfen?

Die Google App verwendet eine spezielle Methode zur Darstellung von Websites (Apples WebView). Diese Rendering-Engine hat ein langjähriges Problem bei der Berechnung der tatsächlichen Höhe des Bildschirms in Websites, die:

* Eine feste Bottom Bar haben
* HTML oder UI, die dynamisch von JavaScript generiert wird
* Komplexe Layouts wie Shopify (mehrere Container-Schichten & ständig wechselnde Abschnitte)

Wenn diese Bedingungen auftreten, kann die Google App die tatsächliche Viewport-Höhe falsch berechnen und ein **falsches unteres Padding** erzeugen.

➡️ Deshalb tritt das Problem häufiger auf Shopify-Websites, die Navi+ oder andere Bottom Bar/FAB-Apps verwenden.

***

### 3. Ist dies ein Navi+-Problem?

Nein.\
Dies ist ein inhärenter Fehler der **Google App auf iPhone**, und er besteht seit vielen Jahren.

Selbst wenn Navi+ deaktiviert ist, haben andere Shopify-Apps, die Bottom Bars oder FABs anzeigen, immer noch dasselbe Problem in der Google App.

***

### 4. Beweise, dass dieses Problem nicht vollständig behoben werden kann

* Viele Shopify-Apps, die eine Bottom Bar oder FAB enthalten, haben genau dasselbe Problem.
* Selbst einige integrierte Shopify-Funktionen zeigen ein ähnliches Verhalten in der Google App.
* Dies ist ein bekanntes Problem in der Entwicklergemeinschaft, aber die Google App hat es nicht angesprochen.
* Das Problem verschwindet, sobald der Benutzer **irgendwo auf den Bildschirm tippt** → Die Google App zwingt zu einem Neurendering und berechnet die korrekte Höhe neu.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIJeUOw7iYKzsFXSLVQK3%2FEx-1.1.2.png?alt=media&#x26;token=c2c351d9-10fd-47ed-bbef-1e436ab3ac4f" alt=""><figcaption></figcaption></figure>

***

### 5. Aktuelle Lösung von Navi+

Navi+ hat mehrere Ansätze erforscht und getestet, aber da das Problem von der Google App selbst ausgeht, kann es nicht vollständig gelöst werden.

Navi+ hat jedoch die **bestmögliche Minderung** implementiert:

#### ✔️ Das Problem tritt nur beim ersten Mal auf

Es tritt normalerweise auf, wenn der Benutzer:

* die Website in der Google App öffnet
* und irgendwo auf der Seite navigiert oder tippt

Wenn dies geschieht, löst Navi+ einen einmaligen Korrekturmechanismus aus. Sobald der Benutzer:

* leicht auf den Bildschirm tippt
* ein wenig scrollt
* oder auf irgendeine kleine Weise interagiert

#### ✔️ Das Problem verschwindet automatisch

Die Google App wird das gesamte Layout neu rendern, und von diesem Moment an:

* Die Bottom Bar wird an der richtigen Position angezeigt
* Das Problem tritt nicht wieder auf, bis die Google App geschlossen und erneut geöffnet wird

#### ✔️ Diese Minderung reduziert auch ähnliche Fehler von anderen unten positionierten Apps, wenn sie zusammen mit Navi+ verwendet werden

***

### 6. Kurze Erklärung für Endbenutzer

Diese Nachricht ist für nicht-technische Benutzer gedacht:

> "Die Google App auf dem iPhone hat einen Anzeige-Bug beim Öffnen von Shopify-Websites, die eine Bottom Bar wie Navi+ verwenden. Dieses Problem stammt von der Google App und betrifft viele Apps, nicht nur Navi+. Es tritt nur einmal auf und verschwindet nach jedem Tipp oder Scrollen auf dem Bildschirm. Wenn Sie stattdessen Safari oder Chrome verwenden, tritt das Problem nicht auf."

***

### 7. Fazit

❌ Kein Navi+-Problem\
❌ Kein Shopify-Problem

✔️ Ein Anzeige-Bug in der Google App auf iPhone\
✔️ Navi+ minimiert das Problem, sodass es nur einmal auftritt und dann verschwindet\
✔️ Safari/Chrome sind vollständig unbeeinflusst
