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

| Schritt | Shopify | Global (WordPress, Wix...) |
|---|---|---|
| Einbettungscode | Aktivieren in **App Embeds** (Theme Editor) — kein Code einfügen nötig | `<script>` in die Website `<head>` einfügen |
| Token | Nicht benötigt — Shopify OAuth kümmert sich darum | Erforderlich — `token:
