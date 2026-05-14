---
description: Optimieren Sie die Geschwindigkeit und UX nach der Veröffentlichung von Navi+ Menüs — verhindern Sie das Aufblitzen des ursprünglichen Inhalts bei Verwendung von Insert/Replace oder CSS-Selector-Triggern.
lang: de
layout: default
permalink: /de/docs/publish/publish-optimize/
title: Veröffentlichen optimieren — Geschwindigkeit & UX
---
# Veröffentlichen optimieren — Geschwindigkeit & UX

Wenn Sie **Insert/Replace** (Abschnittsmenü) oder **CSS-Selector-Trigger** (Slide-Menü) verwenden, benötigt die Website einen kurzen Moment, um Navi+ zu laden. Während dieser Zeit ist das ursprüngliche Element (das alte Menü des Themas) weiterhin sichtbar — was zu einem **Aufblitzen** oder Layoutverschiebung führt.

---

## Wann ist eine Optimierung erforderlich?

| Methode | Benötigt Optimierung? |
|---|---|
| Sticky / FAB (App-Embeds / `<head>`) | Nein — Menü wird zum DOM hinzugefügt, nichts ersetzt |
| Slide-Menü — Methode 1 (von Navi+ Element öffnen) | Nein — Trigger-Button ist ein Navi+ Element |
| **Slide-Menü — Methode 2 (CSS-Selector-Trigger)** | **Ja** — ursprüngliches Trigger-Element bleibt sichtbar, bis Navi+ lädt |
| **Abschnitt — Ersetzen** | **Ja** — ursprüngliches Menü wird zuerst angezeigt, dann durch Navi+ ersetzt |
| Abschnitt — Vor/Nach Einfügen | Nicht erforderlich — zwei Menüs erscheinen nebeneinander |

---

## Technik: Ursprüngliches Element über CSS ausblenden

### So funktioniert es

1. Verwenden Sie CSS, um das ursprüngliche Element sofort auszublenden (bevor Navi+ lädt).
2. Optional ein Ladeplatzhalter anzeigen, um Layoutverschiebungen zu verhindern.
3. Navi+ entfernt oder ersetzt das Element automatisch, wenn es bereit ist — Layout stabilisiert sich.

### Implementierung

**Fügen Sie CSS hinzu, um das ursprüngliche Element auszublenden** (in das benutzerdefinierte CSS des Themas oder `<head>` einfügen):

```css
/* Ursprüngliches Menü ausblenden, während Navi+ lädt */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* Platz reservieren, um Layoutverschiebungen zu verhindern */
}
```

Sobald Navi+ das Element ersetzt, hat dieses CSS keine Wirkung mehr — das Element wird aus dem DOM entfernt.

**Mit Ladeplatzhalter** (fortgeschritten):
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

Wenn ein Slide-Menü einen CSS-Selector-Trigger verwendet (Methode 2), bleibt das ursprüngliche Trigger-Element (z. B. der Hamburger-Button des Themas) sichtbar und **funktioniert weiterhin** (öffnet das Slide-Panel des Themas), bis Navi+ lädt und das Ereignis überschreibt.

### Lösung A: Ursprüngliches Element ausblenden, Navi+ Element stattdessen als Trigger verwenden

```css
/* Hamburger-Button des Themas ausblenden */
#Details-menu-drawer-container {
  display: none !important;
}
```

Verwenden Sie dann **Methode 1** (von Navi+ Element öffnen) anstelle von Methode 2 — sauberer, kein Aufblitzen, um sich Sorgen zu machen.

### Lösung B: Ursprüngliches Element ausblenden

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

Fügen Sie JS hinzu: Wenn Navi+ bereit ist (`naviReady` Ereignis), entfernen Sie den Ausblendestil, um die Sichtbarkeit des ursprünglichen Elements wiederherzustellen.

---

## Allgemeine Geschwindigkeitsnotizen

- `start.js` wird mit `async` geladen — blockiert nicht das Rendern der Seite.
- Menü-JSON-Konfiguration wird im Cloudflare CDN zwischengespeichert — schneller Ladevorgang vom nächstgelegenen Edge-Knoten.
- Kein serverseitiges Rendering für Besucher — alle Menü-Renderings erfolgen clientseitig aus statischem JSON.

Um das Skript für maximale Geschwindigkeit vorzuladen:
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
