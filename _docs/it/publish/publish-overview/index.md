---
description: Panoramica dei tipi di menu Navi+ e dei loro metodi di distribuzione corrispondenti — menu Sticky, Slide e Section.
layout: default
permalink: /it/docs/publish/publish-overview/
title: Publish overview — Tipi di menu & metodi di distribuzione
---
# Publish Overview — Tipi di Menu & Metodi di Distribuzione

I menu Navi+ sono divisi in 3 gruppi di distribuzione, determinati automaticamente dal tipo di menu (`menu_kind`):

| Gruppo | Tipi di menu | Metodo |
|---|---|---|
| **Sticky** | Tabbar, Mobile Header, FAB | App Embeds (Shopify) o codice `<head>` (Global) → interruttore di attivazione |
| **Slide** | Context Slide | App Embeds / `<head>` → interruttore di attivazione → configura trigger |
| **Section** | Mobile Mega Menu, Mobile Grid, Desktop Mega Menu | Inserisci/Sostituisci (CSS Selector) e/o App Block (Shopify) |

---

## Due mercati: Shopify vs. Global

| Passaggio | Shopify | Global (WordPress, Wix...) |
|---|---|---|
| Codice di incorporamento | Attiva in **App Embeds** (Theme Editor) — non è necessario incollare codice | Incolla `<script>` nel `<head>` del sito web |
| Token | Non necessario — Shopify OAuth lo gestisce | Richiesto — `token: "NAVI123456"` nello script |
| App Block | Disponibile (solo Shopify) — Metodo 2 per i menu Section | Non disponibile |

---

## Flusso generale

```
1. Progettare il menu (Design + Setting)
        ↓
2. Aprire il modal Publish
        ↓
3. Incorporare il codice nel sito web (solo una volta)
   - Shopify: App Embeds nel Theme Editor
   - Global: incollare <script> nel <head>
        ↓
4. Attivare l'interruttore "Pubblica questo menu"
        ↓
5. (Opzionale) Configurare dispositivo, visualizzazione pagina, filtro URL
        ↓
6. Salva → menu live
```

> Il passaggio 3 (incorporamento del codice) deve essere eseguito solo **una volta per sito web**. I menu successivi necessitano solo dei passaggi 4 in poi.
