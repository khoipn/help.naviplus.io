---
description: Geschwindigkeit und UX nach dem Veröffentlichen von Navi+ Menüs optimieren — Flash des ursprünglichen Inhalts beim Verwenden von Einfügen/Ersetzen oder CSS-Selector-Triggern verhindern.
layout: default
permalink: /de/docs/publish/publish-optimize/
title: Publish optimize — Geschwindigkeit & UX
---
# Publish Optimize — Geschwindigkeit & UX

Bei Verwendung von **Einfügen/Ersetzen** (Section-Menü) oder **CSS-Selector-Trigger** (Slide-Menü) benötigt die Website einen kurzen Moment zum Laden von Navi+. In dieser Zeit ist das ursprüngliche Element (das alte Theme-Menü) noch sichtbar — was einen **Flash** oder Layoutversatz verursacht.

---

## Wann ist eine Optimierung nötig?

| Methode | Optimierung nötig? |
|---|---|
| Sticky / FAB (App Embeds / `<head>`) | Nein — Menü wird dem DOM hinzugefügt, nichts ersetzt |
| Slide-Menü — Methode 1 (aus Navi+ Element öffnen) | Nein — Trigger-Schaltfläche ist ein Navi+ Element |
| **Slide-Menü — Methode 2 (CSS-Selector-Trigger)** | **Ja** — ursprüngliches Trigger-Element bleibt sichtbar bis Navi+ lädt |
| **Section — Ersetzen** | **Ja** — ursprüngliches Menü wird zuerst angezeigt, dann durch Navi+ ersetzt |
| Section — Vor/Nach einfügen | Nicht erforderlich — zwei Menüs erscheinen nebeneinander |

---

## Technik: Ursprüngliches Element per CSS ausblenden

### Funktionsweise

1. CSS verwenden, um das ursprüngliche Element sofort auszublenden (bevor Navi+ lädt).
2. Optional einen Lade-Platzhalter anzeigen, um Layoutversatz zu verhindern.
3. Navi+ entfernt oder ersetzt das Element automatisch wenn bereit — Layout stabilisiert sich.

### Implementierung

**CSS hinzufügen, um das ursprüngliche Element auszublenden** (in Theme Custom CSS oder `<head>` einfügen):

```css
/* Ursprüngliches Menü ausblenden während Navi+ lädt */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* Platz reservieren um Layoutversatz zu verhindern */
}
```

Sobald Navi+ das Element ersetzt, hat dieses CSS keine Wirkung mehr — das Element wird aus dem DOM entfernt.

**Mit Lade-Platzhalter** (fortgeschritten):
```css
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  position: relative;
}
nav.header__inline-menu ul.list-menu::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #f5f5f5;
  border-radius: 4px;
}
```

---

## Sonderfall: Slide-Menü mit CSS-Selector-Trigger

Wenn ein Slide-Menü einen CSS-Selector-Trigger (Methode 2) verwendet, ist das ursprüngliche Trigger-Element (z. B. der Hamburger-Button des Themes) weiterhin sichtbar und **funktioniert noch** (öffnet das Slide-Panel des Themes), bis Navi+ lädt und das Ereignis übernimmt.

### Lösung A: Ursprüngliches Element ausblenden, stattdessen Navi+ Element als Trigger verwenden

```css
/* Theme-Hamburger-Button ausblenden */
#Details-menu-drawer-container {
  display: none !important;
}
```

Dann **Methode 1** (aus Navi+ Element öffnen) statt Methode 2 verwenden — sauberer, kein Flash-Problem.

### Lösung B: Ursprüngliches Element ausblenden

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

JS hinzufügen: wenn Navi+ bereit ist (`naviReady`-Ereignis), den Ausblende-Stil entfernen, um die Sichtbarkeit des ursprünglichen Elements wiederherzustellen.

---

## Allgemeine Geschwindigkeitshinweise

- `start.js` lädt mit `async` — blockiert nicht das Seitenrendering.
- Menü-JSON-Konfiguration wird im Cloudflare CDN gecacht — schnelles Laden vom nächsten Edge-Knoten.
- Kein serverseitiges Rendering für Besucher — alles Menü-Rendering erfolgt clientseitig aus statischem JSON.

Zum Vorladen des Skripts für maximale Geschwindigkeit:
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
