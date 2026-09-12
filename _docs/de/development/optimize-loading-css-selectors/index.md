---
description: "CSS-Selector-Syntax für Skeleton-Menü-Trigger und Theme-Integration — Optimierung der Menüladezeit und UX mit geräte- und beschrifteten Selector-Formaten."
layout: default
permalink: /de/docs/development/optimize-loading-css-selectors/
title: Geschwindigkeit und UX-Optimierung — CSS-Selector-Syntax
---
# Geschwindigkeit und UX-Optimierung — CSS-Selector-Syntax

Im **Theme Editor → App embeds → Store Connector** finden Sie unter der Gruppe **Speed & UX optimization** 2 CSS-Selector-Felder, die Ihr Menü reibungslos laden lassen — kein Bedarf, benutzerdefiniertes CSS/JS wie früher zu schreiben. Diese Anleitung erklärt die Syntax für beide Felder.

---

## 2 Felder, 2 verschiedene Zwecke

| Feld | Verwendet für | Mechanismus |
|---|---|---|
| **Mobile Menu CSS Selector** | Menü-Trigger-Schaltfläche (Hamburger-Menü) bei Verwendung von CSS-Selector-Ereignisbindung | Klicken Sie auf die Schaltfläche, BEVOR Navi+ geladen ist → zeigt sofort ein Skeleton-Menü (sofortige Rückmeldung) statt stiller Wartezeit. Während Navi+ lädt, weicht das Skeleton dem echten Menü, wenn Inhalte ankommen. |
| **CSS Selector for Mega Menu Replacement** | Originales Theme-Menübereich, wenn Navi+ im Replacement-Modus läuft | Überlagert diesen Bereich mit einem Shimmer-Ladeeffekt während des Wartens auf das Laden von Navi+, um zu verhindern, dass der ursprüngliche Inhalt beim Ersetzen flackert. |

Beide Felder sind **optional** — lassen Sie sie leer und nichts ändert sich vom Standardverhalten.

---

## Allgemeine Syntax — mehrere durch Komma getrennte Selektoren

```
selector-1, selector-2, selector-3
```

Trennen Sie mehrere Selektoren in einem Feld durch Kommas `,` oder Semikolons `;`. Kommas/Semikolons innerhalb von Klammern `(...)`, Klammern `[...]` oder Zeichenketten `"..."` / `'...'` (wie in Attributselektoren `[data-value="a,b"]`) werden kontextabhängig erkannt und werden nicht mit Selector-Trennzeichen verwechselt.

---

## Legacy-Syntax — Suffixe `(M)` / `(D)`

Funktioniert in **beiden Feldern**. Fügen Sie einen Suffix unmittelbar nach dem Selector hinzu, um nach Gerät zu begrenzen:

```
.hamburger-mobile (M)
.hamburger-desktop (D)
.trigger-all-devices
```

| Suffix | Gilt für |
|---|---|
| `(M)` | Nur Mobile |
| `(D)` | Nur Desktop |
| *(kein Suffix)* | Alle Geräte |

---

## Beschriftete Syntax — nur Feld "Mobile Menu CSS Selector"

Das Feld **Mobile Menu CSS Selector** unterstützt eine erweiterte Syntax, um das Aussehen des Skeleton-Menüs anzupassen — das Feld **Mega Menu (Replacement mode)** unterstützt dies NICHT und akzeptiert nur `(M)` / `(D)`.

```
.hamburger (Device:M | Color:#1a1a1a | Direction:left | Width:85%)
```

Identifiziert durch Doppelpunkte `:` innerhalb von `(...)` — wenn Doppelpunkte vorhanden sind, ist es das Labeled-Format; wenn nicht, ist es Legacy (`(M)` / `(D)`). Parameter werden durch Pipes `|` getrennt:

| Parameter | Gültige Werte | Standard bei Weglassung/ungültig |
|---|---|---|
| `Device` | `M` oder `D` (Auflistung beider `M,D` = keine Geräteeinschränkung, wie weglassen) | Alle Geräte |
| `Color` | Hex CSS-Code: `#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa` | `#fff` |
| `Direction` | `left` oder `right` — Richtung des Skeleton-Slide-out | `left` |
| `Width` | Prozentangabe `NN%` oder Pixel `NNpx` (Ganzzahl oder Dezimalzahl) | `85%` |

**Beispiel:**
```
.hamburger (Device:M | Color:#1a1a1a | Width:320px)
```
→ Gilt nur auf Mobile, Skeleton-Hintergrund `#1a1a1a`, feste Breite `320px`.

### Fehlertoleranz pro Parameter

- Whitespace und Groß-/Kleinschreibung in Schlüsseln und Werten werden vor dem Vergleich normalisiert (`Color: #1A1A1A` und `color:#1a1a1a` sind identisch).
- Ein ungültiges Parameterformat (z. B. `Color:red` — nicht hex) oder unbekannter Schlüssel (Tippfehler, nicht existierender Name) wird **nur für diesen Parameter stillschweigend übersprungen**, wobei der Standardwert verwendet wird — dies bricht keine anderen Parameter oder andere Selektoren im gleichen Feld.

---

## Ungültige Selektoren (CSS-Syntaxfehler)

Wenn ein Selector im Feld **Mobile Menu CSS Selector** einen echten CSS-Syntaxfehler aufweist (anders als ungültige Labeled-Parameter — dies ist ein Selector, der nicht geparst werden kann), protokolliert Navi+ eine Warnung in der Browser-Konsole (F12 → Console), die direkt auf das Feld zeigt:

```
[Navi+] INVALID TRIGGER CSS SELECTOR — this one was skipped
selector      : <ungültiger Selector>
browser error : <Browser-Fehlermeldung>
Fix it in Theme Editor → App embeds → Store Connector →
Mobile Menu CSS Selector.
```

Der ungültige Selector wird allein übersprungen; andere gültige Selektoren im Feld funktionieren weiterhin normal.

---

## Praktische Beispiele

### 1. Standard-Hamburger-Menü schützen, keine Anpassung erforderlich

```
#Details-menu-drawer-container
```
Frühe Klicks erhalten immer noch sofort Rückmeldung (Standard-Skeleton), kein Bedarf, Device/Color/Direction/Width zu deklarieren.

### 2. Nur Mobile-Hamburger, Slide von rechts, Brand-Farbe

```
.hamburger-mobile (Device:M | Color:#0f172a | Direction:right | Width:90%)
```

### 3. Theme-Menü-Bereich auf beiden Geräten ersetzen

```
nav.header__inline-menu
```
(im Feld **CSS Selector for Mega Menu Replacement**, kein Suffix = gilt für alle Geräte)

### 4. Mehrere Selektoren kombinieren, geräteabhängige Einschränkungen

```
.mega-menu (D), .mobile-nav-wrapper (M)
```
