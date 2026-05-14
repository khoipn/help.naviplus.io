---
description: Veröffentlichen Abschnitt Menüs (Mega-Menü, Raster) in Navi+ — Einfügen/Ersetzen mit CSS-Selektor oder App-Block auf Shopify.
lang: de
layout: default
permalink: /de/docs/publish/publish-section/
title: Veröffentlichen Abschnitt — Mega-Menü & Raster
---
# Veröffentlichen Abschnitt — Mega-Menü & Raster

Gilt für: **Mobile Mega-Menü**, **Mobile Raster**, **Desktop Mega-Menü**

Abschnittsmenüs sind **nicht schwebend** — sie werden an einer bestimmten Position im Seitenlayout eingefügt. Es gibt zwei Bereitstellungsmethoden, die zusammen verwendet werden können:

| | Methode 1: Einfügen/Ersetzen | Methode 2: App-Block |
|---|---|---|
| Plattform | Shopify + Global | Nur Shopify |
| Mechanismus | CSS-Selektor → Element vor/nach/ersetzen einfügen | App-Block "Navi+ on Section" im Theme-Editor |
| Flexibilität | Hoch — überall einbetten | Mittel — durch das Shopify-Abschnittsschema eingeschränkt |
| Einrichtung | Erfordert Kenntnisse über CSS-Selektor | Nur Embed-ID eingeben |

---

## Methode 1: Einfügen/Ersetzen mit CSS-Selektor

Die **empfohlene** Methode — funktioniert sowohl für Shopify als auch für Global.

### Schritt 1: Einbettungscode

**Shopify:** **Theme-Editor → App-Einbettungen** → Navi+ aktivieren. Einmalig.

**Global:** Fügen Sie in `<head>` ein:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

### Schritt 2: Aktivieren "Veröffentlichen Menü durch Einfügen/Ersetzen Methode"

Aktivieren Sie den Schalter, um den Konfigurationsbereich unten zu erweitern.

### Schritt 3: Geben Sie den CSS-Selektor ein

Geben Sie **einen** CSS-Selektor ein. Das Menü wird relativ zum übereinstimmenden Element platziert.

**Gerätespezifische Syntax:**

| Suffix | Gerät |
|---|---|
| `header` | Sowohl mobil als auch Desktop |
| `header(M)` | Nur mobil |
| `header(D)` | Nur Desktop |

**CSS-Selektor-Tipps für beliebte Shopify-Themen:**

| Menütyp | Zweck | Vorgeschlagener CSS-Selektor |
|---|---|---|
| Desktop Mega | Ersetzen der Desktop-Navigation | `nav.header__inline-menu ul.list-menu` |
| Desktop Mega | Unter dem Header einfügen | `header` |
| Mobile Mega | Unter dem mobilen Header einfügen | `header` |

### Schritt 4: Platzierung wählen (Einfügen/Ersetzen)

| Wert | Verhalten |
|---|---|
| **Ersetzen** | Das ursprüngliche Element vollständig durch das Navi+-Menü ersetzen |
| **Vor Einfügen** | Das Navi+-Menü vor dem Element einfügen |
| **Nach Einfügen** | Das Navi+-Menü nach dem Element einfügen |

> Nach der Auswahl von **Ersetzen** sollten Sie in Betracht ziehen, CSS hinzuzufügen, um das ursprüngliche Element auszublenden, während Navi+ lädt — siehe [Veröffentlichen Optimieren](/docs/publish/publish-optimize/).

---

## Methode 2: App-Block (nur Shopify)

### So richten Sie es ein

1. Kopieren Sie die **Embed-ID** des Menüs (im Modal angezeigt — klicken, um zu kopieren).
2. Gehen Sie zu **Shopify Theme Editor** → finden Sie den **"Navi+ on Section"** App-Block.
3. Fügen Sie die Embed-ID in das entsprechende Feld ein.
4. Theme speichern.

### "Fixiert oben beim Scrollen"

Schalter aktivieren, um das Abschnittsmenü oben auf der Seite beim Scrollen zu fixieren.

**Wann verwenden:** Wenn das Thema keinen integrierten Sticky-Header hat, aktivieren Sie dies, damit das Desktop Mega-Menü sichtbar bleibt, während die Benutzer nach unten scrollen.

---

## Können beide Methoden zusammen verwendet werden?

Ja. Shopify-Nutzer können beide aktivieren:
- App-Block für die Vorschau im Theme-Editor (stabiler, einfacher zu überprüfen).
- Einfügen/Ersetzen für eine genauere Platzierung im Frontend.

Typischerweise ist nur eine Methode erforderlich.

---

## Hinweise nach Menütyp

| Menü | Gerät | Hinweise |
|---|---|---|
| Mobile Mega-Menü | Desktop-Schalter deaktiviert | Nur mobil |
| Mobile Header | Desktop-Schalter deaktiviert | Nur mobil |
| Desktop Mega-Menü | Mobile-Schalter deaktiviert | Nur Desktop |
| Mobile Raster | Beide | Keine Einschränkungen |

---

## Fehlersuche

**Menü erscheint nicht nach der Konfiguration Einfügen/Ersetzen?**
1. Überprüfen Sie, ob der CSS-Selektor korrekt ist — verwenden Sie DevTools oder den Navi+ Debug-Modus.
2. Überprüfen Sie, ob der "Veröffentlichen Menü durch Einfügen/Ersetzen Methode" Schalter aktiviert ist.
3. Überprüfen Sie, ob App-Einbettungen / Einbettungscode vorhanden sind.

**Menü erscheint doppelt (dupliziert)?**
→ Sowohl App-Block als auch Einfügen/Ersetzen sind gleichzeitig aktiv. Deaktivieren Sie eines von beiden.
