---
description: Slide (Context)-Menüs in Navi+ veröffentlichen — Schalter aktivieren, dann einen Trigger zum Öffnen des Menüs konfigurieren.
layout: default
permalink: /docs/publish/publish-slide/
title: Publish Slide — Context Slide Menü
---
# Publish Slide — Context Slide Menü

Gilt für: **Context Slide Menü**

Slide-Menüs sind **anders als Sticky**: Nach der Veröffentlichung erscheint das Menü **nicht automatisch** auf der Seite. Es öffnet sich nur, wenn es durch eine Aktion ausgelöst wird. Dies ist der wesentliche Unterschied zu Sticky-Menüs.

---

## Veröffentlichungsablauf

```
Schritt 1: Einbettungscode in Website einfügen
        ↓
Schritt 2: Schalter "Dieses Menü veröffentlichen" aktivieren
        ↓
Schritt 3: Trigger konfigurieren (wie das Menü geöffnet wird)
```

Nach Schritt 2 ist das Menü auf der Website geladen, aber **in einem versteckten Zustand**. Schritt 3 bestimmt, was es öffnet.

---

## Schritt 1: Einbettungscode

**Shopify:** Gehe zu **Theme Editor → App Embeds** → Navi+ aktivieren. Nur einmal erforderlich.

**Global:** In `<head>` einfügen:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## Schritt 2: Schalter aktivieren

Den Schalter **"Dieses Menü veröffentlichen"** im Publish-Modal aktivieren.

> Nach diesem Schritt **erscheint das Menü noch nicht** auf der Website. Das ist erwartetes Verhalten — Slide-Menüs benötigen einen Trigger zum Öffnen.

---

## Schritt 3: Trigger konfigurieren

Es gibt 4 Möglichkeiten, ein Slide-Menü zu öffnen:

---

### Methode 1: Aus einem Navi+ Menüelement öffnen

Verwende die Syntax `open:NaviMenu(embed_id)` im **Link**-Feld eines beliebigen Menüelements.

Beispiel: Eine Tabbar hat ein "Menü"-Element → Link = `open:NaviMenu(ABC123)` → Tippen auf dieses Element öffnet das Slide-Menü.

Die **embed_id** wird im Modal angezeigt und kann durch Klicken kopiert werden:
```
open:NaviMenu(ABC123)
```

Dies ist der häufigste Ansatz — Tabbar + Slide-Menü kombinieren, um den Navigationsbereich zu erweitern.

---

### Methode 2: Beim Klicken auf ein Element auf der Seite öffnen (CSS Selector)

Einen oder mehrere CSS-Selektoren eingeben, durch Kommas getrennt. Navi+ horcht auf Klick-/Tipp-Ereignisse auf übereinstimmenden Elementen und öffnet das Slide-Menü.

**Gerätespezifische Syntax:**

| Suffix | Gerät |
|---|---|
| `#element` | Mobil und Desktop |
| `#element(M)` | Nur Mobil |
| `#element(D)` | Nur Desktop |

**Beispiele für das Shopify Dawn-Theme:**

| Zweck | CSS Selector |
|---|---|
| Mobiles Hamburger-Menü ersetzen | `#Details-menu-drawer-container` |
| Verschiedene Selektoren pro Gerät | `#Details-menu-drawer-container(M), .desktop-menu-btn(D)` |

> Nach dem Konfigurieren eines CSS-Selector-Triggers sollte das ursprüngliche Element ausgeblendet werden, um Flash zu vermeiden — siehe [Publish Optimize](/docs/publish/publish-optimize/).

---

### Methode 3: Eine JavaScript-Funktion aufrufen

Diese Funktion von beliebiger Stelle im Seitencode aufrufen:

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Geeignet für die Integration des Slide-Menüs in eine benutzerdefinierte Benutzeroberfläche ohne festen Selektor.

---

### Methode 4: Feste Seitenleiste auf Desktop

Anstatt öffnen/schließen kann das Slide-Menü als permanente linke Seitenleiste auf dem Desktop angeheftet werden.

**Aktivierung:** Gehe zum Tab **Advance** → Richtung **"Links fixieren"** auswählen.

Kein Trigger nötig — das Menü ist auf dem Desktop immer sichtbar.

---

## Fehlerbehebung

**Schalter aktiviert, aber Menü erscheint nicht?**
→ Korrektes Verhalten. Slide-Menüs benötigen einen Trigger (Schritt 3). Prüfen ob mindestens eine Methode konfiguriert ist.

**CSS Selector funktioniert nicht?**
1. **Navi+ Debug-Modus** verwenden, um den genauen Selektor für das Element zu finden.
2. Prüfen ob das Element tatsächlich auf der Seite vorhanden ist (manche Themes blenden Elemente bei bestimmten Breakpoints aus).
3. Suffix `(M)` oder `(D)` hinzufügen, um nach Gerät zu trennen.

**Mehrere Slide-Menüs auf derselben Seite gewünscht?**
→ Separate Menüs erstellen, jedes mit einer anderen `embed_id`, mit verschiedenen Triggern.
