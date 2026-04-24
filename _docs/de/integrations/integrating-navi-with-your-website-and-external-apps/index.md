---
description: Hier finden Sie Anleitungen, wie Sie Navi+ mit anderen Apps (wie Chat-Tools, Loyalty usw.) verbinden können. Sie können sie als Menüpunkte hinzufügen, Apps direkt von Nav... öffnen.
lang: de
layout: default
permalink: /de/docs/integrations/integrating-navi-with-your-website-and-external-apps/
title: Integration von Navi+ mit Ihrer Website und externen Apps
---
# Integration von Navi+ mit Ihrer Website und externen Apps

Hier finden Sie Anleitungen, wie Sie Navi+ mit anderen Apps (wie Chat-Tools, Loyalty usw.) verbinden können. Sie können sie als Menüpunkte hinzufügen, Apps direkt von Navi+ öffnen und sicherstellen, dass alles reibungslos zusammenarbeitet, ohne sich auf Ihrer Website zu überschneiden.

### 1. Integrieren Sie andere Sticky-Apps in einen einzigen Navi+-Menüpunkt

Navi+ konsolidiert mehrere Apps (Chat Box, Loyalty, Social Proof, Promo-Bars usw.) in Menüpunkte, um Ihre Website sauber zu halten und Überschneidungen zu vermeiden – besonders wertvoll auf mobilen Geräten mit begrenztem Bildschirmplatz.\Um dies zu erreichen, befolgen Sie diese 2 Schritte:

• Schritt 1: Verstecken Sie die Symbole der Sticky-Apps mit CSS. Siehe Details hier\
• Schritt 2: Verwenden Sie JavaScript für Menüpunkte, damit beim Klicken die jeweiligen App-Panels geöffnet werden.

Siehe das Beispiel der Tidi-Chat-Integration. Dies ist eine relativ fortgeschrittene Einrichtung, daher wenden Sie sich bitte an den Navi+-Support, um Unterstützung zu erhalten.

### 2. JavaScript-Trigger – Interagieren Sie mit externen Apps

Navi+ ermöglicht das Ausführen von JavaScript-Funktionen aus Menüpunkten, wenn sie von Benutzern angeklickt werden (javascript:Function). Siehe das Beispiel der Tidi-Chat-Integration, um zu verstehen, wie Sie zwei JavaScript-Funktionen verwenden, um den Tidio-Chat als Navi+-Menüpunkt zu integrieren:

1. Tidio-Symbol verstecken: Eine globale Funktion, die darauf wartet, dass Tidio gerendert wird, und es dann versteckt
2. openTidio(): Öffnet das Chat-Panel von Tidio, wenn Benutzer auf den "Chat with us" Menüpunkt klicken

Navi+ unterstützt Sie auch dabei, die Klassen- und Attributzuweisungen zu definieren (sogar in Form von id="menu-item-1"), um die Interaktion mit anderen Anwendungen oder JavaScript-Code zu ermöglichen. Sie können JavaScript-Funktionen verwenden, um direkt auf Menüpunkte über Klassen oder Attribute zuzugreifen, zum Beispiel: um ein Walkthrough-Tutorial zu erstellen.

### 3. Anpassen der Navi+-Schnittstelle mit externem CSS

Jedes Navi+-Menü wird durch ein div-Element mit id="SF-123456789" (eingebettete ID) definiert. Sehen Sie sich die HTML/CSS-Struktur eines Navi+-Menüs hier an, um CSS-Code für die Anpassung der Menüoberfläche zu schreiben.\
Zum Beispiel, um die Farbe eines Menüpunktes der Stufe 2 zu ändern, können Sie den folgenden CSS-Code schreiben:

`#SF-123456789 ul li ul.children li .name { color: red; }`

Navi+ unterstützt Sie auch dabei, die Klassen- und Attributzuweisungen zu definieren (sogar in Form von id="menu-item-1"), um die Interaktion mit anderen Anwendungen oder JavaScript-Code zu ermöglichen. Sie können jeden Menüpunkt mit Klassennamen oder Attributen gestalten.

### 4. Kommunikation zwischen Navi+-Menüs

Von einem Navi+-Menüpunkt aus können Sie einen anderen Navi+-Slide-Menü mit der Syntax aufrufen: `open:NaviMenu.`\
Mit dieser Syntax können Sie die Menüebenen unendlich erweitern, indem Sie Slide-Menüs andere Slide-Menüs aufrufen lassen.

### 5. Öffnen eines Slide-Menüs von überall auf Ihrer Website

Mit Slide-Menüs können Sie zusätzlich zu deren Öffnung über Menüpunkte aus anderen Navi+-Menüs auch ein Navi+-Slide-Menü auslösen, indem Sie die JavaScript-Funktion aufrufen: `naviman.openNaviMenu()`.\
Zum Beispiel: Erstellen Sie eine schwebende Schaltfläche mit HTML und CSS und weisen Sie ihrer Klickaktion zu, ein Navi+-Slide-Menü zu öffnen – Sie haben sofort ein professionell aussehendes Menü.

### 6. Benutzeraktionen simulieren (Klick, Fokus, Scrollen usw.)

Navi+ bietet mehrere Funktionen (ausgelöst, wenn ein Menüpunkt angeklickt wird):

* `open:clickTo` um einen Klick auf einen HTML-CSS-Selektor zu simulieren. Dies ist äußerst hilfreich, um das Navi+-Menü dazu zu bringen, Standard-Hamburger-Menüs, Suchwerkzeuge, Warenkorb-Panels, Sprachdropdowns... oder Chat-Tools von anderen Apps zu aktivieren.
* `open:focusTo` um den Fokus auf einen HTML-CSS-Selektor zu simulieren. Dies ist äußerst nützlich, um Klicks auf Suchwerkzeuge oder E-Mail-Abonnementfelder zu simulieren.
* `scroll:Top`, `scroll:Bottom`, `scroll:OnPage` um die Webseite zum gewünschten Bereich zu scrollen. Dies ist äußerst nützlich, wenn Sie zu einem Zielbereich auf der Seite scrollen möchten, anstatt zu einer anderen Seite zu navigieren.

### 7. Zum Teilen und zur Verbesserung des Engagements auf der Website

Navi+ bietet mehrere Funktionen (ausgelöst, wenn ein Menüpunkt angeklickt wird):

* `open:ShareMe` um den Link zur Website zu teilen
* `share:CopyUrl` um die aktuelle URL in die Zwischenablage des Geräts zu kopieren
* `share:Facebook` um die aktuelle URL auf Facebook zu teilen
* `share:Tweet` um die aktuelle URL auf Twitter (X) zu teilen

### 8. Integration mit anderen Geräte-Apps (wie Telefon)

Navi+ bietet mehrere Funktionen (ausgelöst, wenn ein Menüpunkt angeklickt wird):

* `tel:+[Ländervorwahl][Telefon]` um die Nummer anzurufen
* `sms:+[Ländervorwahl][Telefon]?body=[Text]` um eine SMS-Nachricht an die Nummer mit einem festgelegten Inhalt (optional) zu senden
* `mailto:[Adresse]` um eine E-Mail zu senden
* `https://m.me/[IhrName]` um mit Ihrem Facebook Messenger zu chatten
* `https://wa.me/[Telefon]` um mit Ihrem WhatsApp zu chatten
* `https://lin.ee/[line-code]` um mit Ihrem Line zu chatten
* `https://zalo.me/+[Ländervorwahl][Telefon]` um mit Ihrem Zalo zu chatten

### 9. Nur für Shopify

Navi+ bietet mehrere Funktionen (ausgelöst, wenn ein Menüpunkt angeklickt wird):

* `open:ChangeLanguage` um die Sprache zu ändern, wenn die Website Shopify verwendet
* Shopify Inbox: Verstecken Sie das Shopify Inbox-Symbol und integrieren Sie es in das Navi+-Menü als Menüpunkt, der das Chat-Panel beim Klicken öffnet. Siehe Details hier
* Öffnen Sie das Hamburger-Menü oder den Warenkorb, das Suchfeld: Siehe Details hier

### Sehen Sie es nicht in der Liste?

Fühlen Sie sich frei, mir Ihre Integrationsanfrage zu senden. Ich helfe Ihnen gerne, und es unterstützt auch das Wachstum von Navi+.

---

# Agentenanweisungen: Abfragen dieser Dokumentation

Wenn Sie zusätzliche Informationen benötigen, die auf dieser Seite nicht direkt verfügbar sind, können Sie die Dokumentation dynamisch abfragen, indem Sie eine Frage stellen.

Führen Sie eine HTTP GET-Anfrage an der aktuellen Seiten-URL mit dem `ask` Abfrageparameter aus:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/integrations/integrating-navi+-with-your-website-and-external-apps.md?ask=<Frage>
```

Die Frage sollte spezifisch, eigenständig und in natürlicher Sprache verfasst sein.
Die Antwort enthält eine direkte Antwort auf die Frage sowie relevante Auszüge und Quellen aus der Dokumentation.

Verwenden Sie diesen Mechanismus, wenn die Antwort nicht ausdrücklich auf der aktuellen Seite vorhanden ist, Sie eine Klärung oder zusätzlichen Kontext benötigen oder Sie verwandte Dokumentationsabschnitte abrufen möchten.
