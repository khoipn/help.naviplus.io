---
description: Übersicht über Navi+ Menütpyen und ihre entsprechenden Bereitstellungsmethoden — Sticky, Slide und Section Menüs.
lang: de
layout: default
permalink: /de/docs/publish/publish-overview/
title: Veröffentlichungsübersicht — Menütpyen & Bereitstellungsmethoden
---
# Veröffentlichungsübersicht — Menütpyen & Bereitstellungsmethoden

Navi+ Menüs sind in 3 Bereitstellungsgruppen unterteilt, die automatisch durch den Menütyp (`menu_kind`) bestimmt werden:

| Gruppe | Menütpyen | Methode |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) oder `<head>` Code (Global) → Toggle aktivieren |
| **Slide** | Context Slide | App Embeds / `<head>` → Toggle aktivieren → Trigger konfigurieren |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | Einfügen/Ersetzen (CSS-Selektor) und/oder App Block (Shopify) |

---

## Zwei Märkte: Shopify vs. Global

| Schritt | Shopify | Global (WordPress, Squarespace, Webflow...) |
|---|---|---|
| Einbettungscode | Aktivieren in **App Embeds** (Theme Editor) — kein Code einfügen nötig | `<script>` in die Website `<head>` einfügen |
| Token | Nicht benötigt — Shopify OAuth kümmert sich darum | Erforderlich — `token: "NAVI123456"` in Script |
| App Block | Verfügbar (Shopify nur) — Methode 2 für Section Menüs | Nicht verfügbar |

> **Wix:** Wenn Sie die Navi+ App aus dem Wix App Market installiert haben, ist die Einbettung automatisch — Navi+ injiziert `start.js` für Sie über das Wix Embedded Script, daher **müssen Sie keinen Code einfügen**. Authentifizierung und Abrechnung werden über Wix abgewickelt. Nur selbstverwaltete Plattformen (WordPress, Squarespace, Webflow, Magento, benutzerdefinierte Websites) benötigen das oben beschriebene manuelle `<script>`-Einfügen.

---

## Allgemeiner Ablauf

```
1. Menü entwerfen (Design + Einstellung)
        ↓
2. Veröffentlichungsmodal öffnen
        ↓
3. Code in Website einbetten (nur einmal)
   - Shopify: App Embeds im Theme Editor
   - Global: `<script>` in `<head>` einfügen
        ↓
4. Toggle "Dieses Menü veröffentlichen" aktivieren
        ↓
5. (Optional) Gerät, Seitenanzeige, URL-Filter konfigurieren
        ↓
6. Speichern → Menü ist live
```

> Schritt 3 (Code-Einbettung) muss nur **einmal pro Website** durchgeführt werden. Nachfolgende Menüs benötigen nur Schritte 4 und weiter.
