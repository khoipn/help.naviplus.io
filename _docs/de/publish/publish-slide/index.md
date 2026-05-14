---
description: Veröffentlichen Sie Folien (Kontext) Menüs in Navi+ — aktivieren Sie den Schalter und konfigurieren Sie dann einen Auslöser, um das Menü zu öffnen.
lang: de
layout: default
permalink: /de/docs/publish/publish-slide/
title: Veröffentlichen Sie die Folie — Kontext-Folienmenü
---
# Veröffentlichen Sie die Folie — Kontext-Folienmenü

Gilt für: **Kontext-Folienmenü**

Folienmenüs sind **anders als Sticky**: Nach der Veröffentlichung erscheint das Menü **nicht automatisch** auf der Seite. Es öffnet sich nur, wenn es durch eine Aktion ausgelöst wird. Dies ist der entscheidende Unterschied zu Sticky-Menüs.

---

## Veröffentlichungsablauf

```
Schritt 1: Code in die Website einfügen
        ↓
Schritt 2: Schalter "Dieses Menü veröffentlichen" aktivieren
        ↓
Schritt 3: Auslöser konfigurieren (wie man das Menü öffnet)
```

Nach Schritt 2 ist das Menü auf der Website geladen, aber **in einem versteckten Zustand**. Schritt 3 entscheidet, was es öffnet.

---

## Schritt 1: Code einfügen

**Shopify:** Gehen Sie zu **Theme Editor → App Embeds** → aktivieren Sie Navi+. Dies einmalig tun.

**Global:** Fügen Sie in `<head>` ein:
```html
<script>(window._navi_setting ||= []).push({
  token: "YOUR_NAVI_TOKEN"
});</script>
<script src="https://live.naviplus.app/start.js" async></script>
```

---

## Schritt 2: Schalter aktivieren

Aktivieren Sie den **"Dieses Menü veröffentlichen"** Schalter im Veröffentlichungsmodal.

> Nach diesem Schritt wird das Menü **noch nicht auf der Website angezeigt**. Dies ist zu erwarten — Folienmenüs benötigen einen Auslöser, um sich zu öffnen.

---

## Schritt 3: Auslöser konfigurieren

Die Auslöser-Benutzeroberfläche ist in zwei Registerkarten unterteilt: **Mobile Einrichtung** und **Desktop Einrichtung**. Methoden können frei kombiniert werden. Eine **Für Entwickler**-Zone befindet sich außerhalb der Registerkarten.

---

### Methode 1: Aus einem Navi+ Menüelement öffnen

Verwenden Sie die Syntax `open:NaviMenu(embed_id)` im **Link**-Feld eines beliebigen Menüelements. Die embed_id wird im Modal angezeigt und kann angeklickt werden, um sie zu kopieren:

```
open:NaviMenu(ABC123)
```

Erfordert **Business-Plan oder höher** (benötigt 2+ Menüs).

**Mobile — häufige Anwendungsfälle:**
- Eine Tabbar mit einem ersten Element wie "☰ Menü", das das Folienmenü öffnet — **die häufigste Einrichtung**
- Ein FAB & Support-Menü mit einem einzelnen Element, das das Folienmenü öffnet
- Ein mobiles Mega-Menü mit einem "☰ Menü" Element unter der Kopfzeile

**Desktop — häufige Anwendungsfälle:**
- Ein Desktop-Mega-Menü mit einem "☰ Menü" Element — sorgt für ein konsistentes Erlebnis mit mobil
- Ein Desktop-Mega-Menü mit einem einzelnen "☰" Element, das vor dem Logo platziert ist — spiegelt das mobile Hamburger-Menü auf dem Desktop wider (benötigt etwas CSS; [kontaktieren Sie uns](mailto:support@naviplus.io), wenn Sie Hilfe benötigen)
- Ein FAB & Support-Menü mit einem einzelnen Element, das das Folienmenü öffnet
- Eine Tabbar mit einem "☰ Menü" Element

---

### Methode 2: Öffnen beim Klicken auf ein Element (CSS-Selektor)

Geben Sie einen oder mehrere CSS-Selektoren ein, getrennt durch Kommas (`,`).

**Gerätespezifische Syntax:**

| Suffix | Gerät |
|---|---|
| `#element` | Sowohl mobil als auch Desktop |
| `#element(M)` | Nur mobil |
| `#element(D)` | Nur Desktop |

**Schritt 1 — Finden Sie Ihren Selektor:**

*Auf Shopify (Dawn, Craft, Spotlight...):*
Versuchen Sie `#Details-menu-drawer-container` für das mobile Hamburger-Menü. Für andere Themen verwenden Sie **Navi+ Debug-Modus**: besuchen Sie `yoursite.com/#navidebug-on`, fahren Sie mit der Maus über das Element, drücken Sie `Cmd/Ctrl+C`, um seinen Selektor zu kopieren.

*Auf dem Desktop:*
Es gibt normalerweise kein Hamburger-Symbol — Sie müssen einen klickbaren Auslöser erstellen:
- Fügen Sie ein "☰ Menü" Element zu Ihrem bestehenden Mega-Menü hinzu
- Oder platzieren Sie ein ☰-Symbol vor dem Logo mit HTML/CSS ([kontaktieren Sie uns](mailto:support@naviplus.io), wenn Sie Hilfe benötigen)

**Schritt 2 — UX optimieren:**
Sobald eingerichtet, fügen Sie einen Ladeindikator zum ersetzten Element hinzu, um Layout-Blitze zu vermeiden — siehe [Veröffentlichen optimieren](/docs/publish/publish-optimize/).

---

### Erweitert (Desktop): Feststehende Seitenleiste

Anstelle von Öffnen/Schließen kann das Folienmenü als immer sichtbare Seitenleiste auf dem Desktop angezeigt werden.

**So aktivieren Sie es:** Gehen Sie zu **Erweitert** → **Slide-in-Richtung** → wählen Sie die Option Feststehende Seitenleiste → aktivieren Sie "Ein festes Menü auf dem Desktop anzeigen".

Kein Auslöser erforderlich — das Menü ist immer auf dem Desktop sichtbar.

---

### Für Entwickler: JavaScript-Funktion

Rufen Sie diese Funktion von überall im Seiten-Code auf:

```javascript
naviman.openNaviMenu('EMBED_ID')
```

Geeignet für die Integration des Folienmenüs in benutzerdefinierte UI ohne festen Selektor.

---

## Fehlersuche

**Schalter aktiviert, aber Menü erscheint nicht?**
→ Korrektes Verhalten. Folienmenüs benötigen einen Auslöser (Schritt 3). Überprüfen Sie, ob mindestens eine Methode konfiguriert ist.

**CSS-Selektor funktioniert nicht?**
1. Verwenden Sie **Navi+ Debug-Modus**, um den genauen Selektor für das Element zu finden.
2. Überprüfen Sie, ob das Element tatsächlich auf der Seite vorhanden ist (einige Themen blenden Elemente bei bestimmten Breakpoints aus oder entfernen sie).
3. Versuchen Sie, `(M)` oder `(D)` Suffix hinzuzufügen, um nach Gerät zu trennen.

**Möchten Sie mehrere Folienmenüs auf derselben Seite?**
→ Erstellen Sie separate Menüs, jedes mit einer anderen `embed_id`, unter Verwendung unterschiedlicher Auslöser.
