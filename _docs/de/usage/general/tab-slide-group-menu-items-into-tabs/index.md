---
description: Anstatt alle Menüelemente auf einmal anzuzeigen, ermöglicht **Tab Slide** Ihnen, Ihr Menü in Gruppen zu organisieren und jede Gruppe unter einem separaten Tab zu platzieren. Besucher tippen einfach auf einen Tab, um zwischen Gruppen zu wechseln — was lange Menüs sauber, kompakt und einfach zu navigieren macht.
lang: de
layout: default
permalink: /de/docs/usage/general/tab-slide-group-menu-items-into-tabs/
title: Tab Slide — Gruppieren Sie Menüelemente in Tabs
---
# Tab Slide — Gruppieren Sie Menüelemente in Tabs

### Was ist Tab Slide?

Anstatt alle Menüelemente auf einmal anzuzeigen, ermöglicht **Tab Slide** Ihnen, Ihr Menü in Gruppen zu organisieren und jede Gruppe unter einem separaten Tab zu platzieren. Besucher tippen einfach auf einen Tab, um zwischen Gruppen zu wechseln — was lange Menüs sauber, kompakt und einfach zu navigieren macht.

**So sieht es aus:**

```
┌──────────────────────────────────┐
│  [Shop]  [Blog]  [Deals]         │  ← tabs
│ ──────                           │
│  • T-Shirts                      │
│  • Pants                         │  ← content of the "Shop" tab
│  • Accessories                   │
└──────────────────────────────────┘
```

Wenn ein Besucher auf "Blog" tippt, wechselt der Inhalt sofort zu den Blogartikeln — kein Seitenneuladen erforderlich.

***

### So richten Sie Tab Slide ein

#### Schritt 1 — Fügen Sie einen Tab-Marker hinzu

1. Klicken Sie im Menübaum auf **"Element hinzufügen"**
2. Wählen Sie den Elementtyp **Tab Slide** (das blaue Tab-Symbol)
3. Geben Sie einen **Tab-Namen** ein (z. B. "Shop", "Blog", "Deals")
4. Klicken Sie auf **Hinzufügen**

> Der Tab-Marker erscheint im Menübaum mit einem blauen **\[Tab\]**-Abzeichen.

#### Schritt 2 — Fügen Sie Inhalt zum Tab hinzu

Alle Menüelemente, die **direkt unter** einem Tab-Marker platziert sind, gehören zu diesem Tab.

```
[Tab] Shop           ← Tab marker (created in Step 1)
  T-Shirts           ← belongs to "Shop" tab
  Pants              ← belongs to "Shop" tab
  Accessories        ← belongs to "Shop" tab
[Tab] Blog           ← next Tab marker
  Latest News        ← belongs to "Blog" tab
  Style Guides       ← belongs to "Blog" tab
```

#### Schritt 3 — Fügen Sie weitere Tabs hinzu (optional)

Wiederholen Sie die Schritte 1–2 für jeden Tab, den Sie möchten. Es gibt keine Begrenzung für die Anzahl der Tabs.

***

### Beenden der Tab-Gruppe

Manchmal möchten Sie, dass bestimmte Elemente **immer sichtbar** sind — außerhalb eines Tabs — zum Beispiel ein "Kontakt" oder "Suche" Link am Ende.

Um dies zu tun:

1. Fügen Sie ein neues **Tab Slide**-Element hinzu
2. Aktivieren Sie im Bearbeitungsfeld **"Ende der Tab-Gruppe"**
3. Alle Elemente unter diesem Marker werden als reguläre Menüelemente angezeigt

```
[Tab] Shop
  T-Shirts, Pants...
[Tab] Blog
  News, Guides...
[End of Tab group]   ← marks the end of tabs
  Contact Us         ← always visible, not inside any tab
  About              ← always visible
```

***

### Anpassen jedes Tabs

Jeder Tab-Marker kann unabhängig gestaltet werden:

| Option         | Beschreibung                                                      |
| -------------- | ---------------------------------------------------------------- |
| **Tab-Name**   | Der Text, der auf der Tab-Schaltfläche angezeigt wird            |
| **Icon**       | Ein kleines Symbol neben dem Namen (aus der Symbolbibliothek)    |
| **Bild**       | Ein Bild anstelle eines Symbols                                   |
| **Layout**     | Symbol über/unter/links/rechts vom Namen, nur Symbol oder nur Text |
| **Textfarbe**  | Benutzerdefinierte Farbe für jedes Tab-Label                     |
| **Textgröße**  | Benutzerdefinierte Schriftgröße für jedes Tab-Label              |

**Tipp:** Das Layout als "Automatisch" zu belassen, funktioniert großartig für die meisten Menüs — der Tab passt sich an, um am besten auszusehen.

***

### Welche Menütpyen unterstützen Tab Slide?

Tab Slide funktioniert mit **allen Navi+ Menütypen**:

* ✅ Tab Bar
* ✅ Slide Menu
* ✅ Mega Menu
* ✅ FAB Menu
* ✅ Grid menu

Es funktioniert auch auf **jeder Menüebene** — nicht nur im Hauptmenü, sondern auch in Untermenüs (Ebene 2, Ebene 3).

***

### Häufig gestellte Fragen

**Wird der Tab-Marker als Menüelement angezeigt?** Nein. Tab-Marker sind für Besucher unsichtbar — sie erstellen nur die Tab-Schaltfläche. Ihre tatsächlichen Menüelemente sind das, was in jedem Tab angezeigt wird.

**Kann ich ein Symbol zu einem Tab hinzufügen?** Ja. Bearbeiten Sie den Tab-Marker wie jedes andere Element und wählen Sie ein Symbol aus der Bibliothek aus oder laden Sie ein benutzerdefiniertes Bild hoch.

**Welcher Tab wird zuerst angezeigt?** Der erste Tab ist immer standardmäßig ausgewählt, wenn das Menü geöffnet wird.

**Gibt es eine Begrenzung für die Anzahl der Tabs, die ich haben kann?** Es gibt keine feste Begrenzung, aber wir empfehlen, es auf 3–6 Tabs für die beste Erfahrung auf mobilen Bildschirmen zu beschränken.

**Kann ich Tab Slide in einem Untermenü verwenden?** Ja. Platzieren Sie Tab-Marker in jedem Untermenü, und das Tab-Verhalten funktioniert auf dieser Ebene.

---

# Agentenanweisungen: Abfragen dieser Dokumentation

Wenn Sie zusätzliche Informationen benötigen, die auf dieser Seite nicht direkt verfügbar sind, können Sie die Dokumentation dynamisch abfragen, indem Sie eine Frage stellen.

Führen Sie eine HTTP GET-Anfrage an die aktuelle Seiten-URL mit dem `ask` Abfrageparameter aus:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/usage/general/tab-slide-group-menu-items-into-tabs.md?ask=<question>
```

Die Frage sollte spezifisch, eigenständig und in natürlicher Sprache verfasst sein.
Die Antwort enthält eine direkte Antwort auf die Frage sowie relevante Auszüge und Quellen aus der Dokumentation.

Verwenden Sie diesen Mechanismus, wenn die Antwort nicht ausdrücklich auf der aktuellen Seite vorhanden ist, Sie Klarstellungen oder zusätzliche Kontexte benötigen oder Sie verwandte Dokumentationsabschnitte abrufen möchten.
