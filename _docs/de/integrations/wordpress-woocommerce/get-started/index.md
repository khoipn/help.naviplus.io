---
description: Nachdem Sie das Navi+ Menu Builder-Plugin aktiviert haben, öffnen Sie Design → Naviplus Menu Builder, erstellen Sie Ihr erstes Menü im visuellen Editor und lassen Sie das Plugin Ihre WordPress-Website automatisch mit Navi+ verbinden.
lang: de
layout: default
permalink: /de/docs/integrations/wordpress-woocommerce/get-started/
title: Erstellen Sie Ihr erstes Menü
---
# Erstellen Sie Ihr erstes Menü

Sobald das Plugin aktiviert ist, erstellen Sie Menüs innerhalb von WordPress — keine separate Anmeldung, kein Token zum Einfügen.

---

## 1. Öffnen Sie den Menü-Builder

Im WordPress-Admin-Bereich gehen Sie zu:

> **Design → Naviplus Menu Builder**

Dies öffnet den visuellen Editor von Navi+ in Ihrem WordPress-Dashboard.

---

## 2. Erstellen Sie Ihr erstes Menü

Befolgen Sie den Bildschirmfluss, um ein Menü zu erstellen. Wenn Sie das erste Menü speichern, **verbindet** das Plugin Ihre Website automatisch mit Navi+:

- Es registriert eine **Website-ID**, die es dem Navi+-Dienst ermöglicht, Ihre WordPress-Installation zu erkennen.
- Es speichert diese ID in WordPress, sodass nachfolgende Menüänderungen an die richtige Website weitergeleitet werden.

> Die Website-ID ist **nicht** Ihr WordPress-Passwort und **nicht** ein Navi+-Token, das Sie verwalten müssen. Es ist ein undurchsichtiger Wert, den das Plugin für Sie verwaltet.

Sie müssen **kein** Navi+-Konto erstellen, bevor Sie das Plugin installieren — das Speichern des ersten Menüs übernimmt die Verbindung.

---

## 3. Gestalten Sie das Layout

Wählen Sie im Editor einen Menütyp (Tab Bar, Slide / Hamburger, Mega Menu, Grid, FAB) und gestalten Sie dann das Layout. Editor-Dokumente:

- [Übersicht der Menütypen]({{ site.baseurl }}/docs/usage/explore-common-menus/)
- [Menüelemente — Elemente, Links, Icons, Abzeichen]({{ site.baseurl }}/docs/menu-items/item-overview/)
- [Übersicht des Designs]({{ site.baseurl }}/docs/design/design-overview/)

Die Menüstruktur und -stile werden im Navi+-Dienst gespeichert; WordPress speichert nur die Website-ID.

---

## 4. Überprüfen Sie die Verbindung

Öffnen Sie das Frontend Ihrer Website. Sticky-Menüs (Tab Bar, FAB), die Sie im Editor als **Veröffentlicht** markieren, erscheinen automatisch auf der gesamten Website.

Um zu bestätigen, dass die Laufzeit geladen wird, verwenden Sie entweder:

- **Debug-Modus (für alle):** Fügen Sie `#navidebug-on` an jede URL an — z. B. `https://your-site.com/#navidebug-on`. Die Seite wechselt in den Navi+ Debug-Modus, wenn das Plugin verbunden ist. Verwenden Sie `#navidebug-off`, um es auszuschalten.
- **Konsole (für Entwickler):** Öffnen Sie DevTools → Konsole; Sie sollten eine grüne `Using Navi+..` Nachricht sehen.

---

## Nächster Schritt

Für Mega Menu und Grid Menu — die an bestimmten Stellen auf einer Seite platziert sind — siehe **[Veröffentlichen Sie Ihre Menüs]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)** für den `[naviwp]` Shortcode und Gutenberg-Block.
