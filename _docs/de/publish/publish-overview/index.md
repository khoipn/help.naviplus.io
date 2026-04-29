---
description: Übersicht über Navi+ Menütypen und ihre entsprechenden Bereitstellungsmethoden — Sticky, Slide und Section-Menüs.
layout: default
permalink: /de/docs/publish/publish-overview/
title: Publish overview — Menütypen & Bereitstellungsmethoden
---
# Publish Overview — Menütypen & Bereitstellungsmethoden

Navi+ Menüs sind in 3 Bereitstellungsgruppen unterteilt, die automatisch durch den Menütyp (`menu_kind`) bestimmt werden:

| Gruppe | Menütypen | Methode |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) oder `<head>`-Code (Global) → Aktivierungsschalter |
| **Slide** | Context Slide | App Embeds / `<head>` → Aktivierungsschalter → Trigger konfigurieren |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | Einfügen/Ersetzen (CSS Selector) und/oder App Block (Shopify) |

---

## Zwei Märkte: Shopify vs. Global

| Schritt | Shopify | Global (WordPress, Wix...) |
|---|---|---|
| Einbettungscode | In **App Embeds** aktivieren (Theme Editor) — kein Code-Einfügen nötig | `<script>` in Website-`<head>` einfügen |
| Token | Nicht benötigt — Shopify OAuth erledigt das | Erforderlich — `token: "NAVI123456"` im Skript |
| App Block | Verfügbar (nur Shopify) — Methode 2 für Section-Menüs | Nicht verfügbar |

---

## Allgemeiner Ablauf

```
1. Menü gestalten (Design + Setting)
        ↓
2. Publish-Modal öffnen
        ↓
3. Einbettungscode in Website einfügen (nur einmal)
   - Shopify: App Embeds im Theme Editor
   - Global: <script> in <head> einfügen
        ↓
4. Schalter "Dieses Menü veröffentlichen" aktivieren
        ↓
5. (Optional) Gerät, Seitenansicht, URL-Filter konfigurieren
        ↓
6. Speichern → Menü ist live
```

> Schritt 3 (Einbettungscode) muss nur **einmal pro Website** durchgeführt werden. Nachfolgende Menüs benötigen nur noch Schritt 4 und folgende.
