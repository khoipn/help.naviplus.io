---
description: Panoramica dei tipi di menu di Navi+ e dei loro corrispondenti metodi di distribuzione — Sticky, Slide e Section menus.
lang: it
layout: default
permalink: /it/docs/publish/publish-overview/
title: Panoramica della pubblicazione — Tipi di menu e metodi di distribuzione
---
# Panoramica della pubblicazione — Tipi di menu e metodi di distribuzione

I menu di Navi+ sono divisi in 3 gruppi di distribuzione, determinati automaticamente dal tipo di menu (`menu_kind`):

| Gruppo | Tipi di menu | Metodo |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) o `<head>` codice (Globale) → attiva toggle |
| **Slide** | Context Slide | App Embeds / `<head>` → attiva toggle → configura trigger |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | Inserisci/Sostituisci (CSS Selector) e/o App Block (Shopify) |

---

## Due mercati: Shopify vs. Globale

| Passo | Shopify | Globale (WordPress, Wix...) |
|---|---|---|
| Codice di incorporamento | Abilita in **App Embeds** (Theme Editor) — nessun codice da incollare necessario | Incolla `<script>` nel sito web `<head>` |
| Token | Non necessario — Shopify OAuth gestisce | Richiesto — `token:
