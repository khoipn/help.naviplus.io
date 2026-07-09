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

| Passo | Shopify | Globale (WordPress, Squarespace, Webflow...) |
|---|---|---|
| Codice di incorporamento | Abilita in **App Embeds** (Theme Editor) — nessun codice da incollare necessario | Incolla `<script>` nel sito web `<head>` |
| Token | Non necessario — Shopify OAuth gestisce | Richiesto — `token: "NAVI123456"` nello script |
| App Block | Disponibile (solo Shopify) — Metodo 2 per menu Section | Non disponibile |

> **Wix:** Se hai installato l'app Navi+ dal Wix App Market, l'incorporamento è automatico — Navi+ inietta `start.js` per te attraverso lo script incorporato Wix, quindi **non incollare alcun codice**. L'autenticazione e la fatturazione sono gestite tramite Wix. Solo le piattaforme auto-gestite (WordPress, Squarespace, Webflow, Magento, siti personalizzati) hanno bisogno dell'incollaggio manuale `<script>` sopra.

---

## Flusso generale

```
1. Progetta il menu (Design + Setting)
        ↓
2. Apri il modale Pubblica
        ↓
3. Incorpora il codice nel sito web (una sola volta)
   - Shopify: App Embeds in Theme Editor
   - Global: incolla <script> in <head>
        ↓
4. Abilita l'interruttore "Pubblica questo menu"
        ↓
5. (Opzionale) Configura dispositivo, visualizzazione pagina, filtro URL
        ↓
6. Salva → il menu è attivo
```

> Il passaggio 3 (incorporamento del codice) deve essere eseguito **una sola volta per sito web**. I menu successivi hanno solo bisogno dei passaggi 4 in poi.
