---
description: Configura la posizione del menu, il padding, il margine, lo z-index e la larghezza del sottomenu in Navi+.
lang: it
layout: default
permalink: /it/docs/setting/setting-layout/
title: Impostazione layout — Posizione e spaziatura
---
# Impostazione Layout — Posizione e Spaziatura

Queste impostazioni controllano la **posizione** dell'intero menu sulla pagina, il suo **ordine di sovrapposizione** rispetto ad altri elementi e la **larghezza** dei sottomenu.

---

## Padding e Margine del Menu

Controlla lo spazio esterno e interno dell'**intero contenitore del menu** — diverso dal padding a livello di elemento nel Design.

| Campo | Descrizione |
|---|---|
| **Margine Superiore / Destro / Inferiore / Sinistro (px)** | Spazio tra il menu e il bordo dello schermo o gli elementi circostanti |
| **Padding Superiore / Destro / Inferiore / Sinistro (px)** | Spazio all'interno del contenitore del menu, prima che gli elementi vengano visualizzati |

**Quando utilizzare:**
- Spingere un Tabbar sopra la barra di navigazione del browser su iOS: `Margine Inferiore = 34`
- Aggiungere spazio tra un Mega Menu e l'intestazione: `Margine Superiore = 8`

---

## Z-Index

Ordine di sovrapposizione del menu rispetto ad altri elementi della pagina (intestazione, widget chat, popup, ecc.).

| Campo | Descrizione | Predefinito |
|---|---|---|
| **Z-Index** | Valore intero — più alto = sopra | Auto |

**Quando regolare:**
- Il menu è coperto da un'intestazione fissa → aumentare lo Z-Index sopra il valore dell'intestazione.
- Il menu copre un widget chat → diminuire lo Z-Index sotto il widget.

Valori di riferimento comuni: le intestazioni del tema sono solitamente `1000–9999`; i widget chat sono solitamente `9999–99999`.

---

## Larghezza del Sottomenu

Si applica ai sottomenu a discesa (Tabbar, Mega Menu a colonna singola).

| Campo | Descrizione | Predefinito |
|---|---|---|
| **Larghezza del Sottomenu (px)** | Larghezza dei pannelli del sottomenu a colonna singola | 360px |

---

## Desktop — Comportamento e Larghezza del Sottomenu

Si applica quando il menu è visualizzato su desktop.

| Campo | Descrizione |
|---|---|
| **Mostra sottomenu al passaggio del mouse** | Apri i sottomenu al passaggio del mouse senza cliccare |
| **Larghezza sottomenu completamente espansa (px)** | Larghezza dei sottomenu a più colonne (Desktop Mega Menu) |
| **Direzione del sottomenu** | Direzione in cui si aprono i sottomenu: destra / sinistra / sopra / sotto |

---

## Multi-Siti *(Elite)*

Incorpora il menu su più domini al di fuori del negozio principale di Shopify.

| Campo | Descrizione |
|---|---|
| **Multi-Siti** | Elenco di domini separati da virgole (ad es. `brand.com,shop.brand.com`) |
