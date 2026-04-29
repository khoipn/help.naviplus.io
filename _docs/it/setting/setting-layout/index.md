---
description: Configura la posizione del menu, il padding, il margin, lo z-index e la larghezza del sottomenu in Navi+.
layout: default
permalink: /it/docs/setting/setting-layout/
title: Setting layout — Posizione e spaziatura
---
# Setting Layout — Posizione e Spaziatura

Controlla la **posizione** dell'intero menu, l'**ordine di sovrapposizione** e la **larghezza del sottomenu**.

---

## Padding e Margin del menu

Controlla la spaziatura esterna e interna del **contenitore dell'intero menu** — diverso dal padding a livello di elemento nel Design.

| Campo | Descrizione |
|---|---|
| **Margin superiore / destro / inferiore / sinistro (px)** | Spazio dal menu al bordo dello schermo |
| **Padding superiore / destro / inferiore / sinistro (px)** | Spazio all'interno del contenitore del menu |

**Quando usare:**
- Spingere la Tabbar sopra la barra di navigazione del browser iOS: `Margin inferiore = 34`
- Spazio sopra il Mega Menu: `Margin superiore = 8`

---

## Z-Index

| Campo | Descrizione | Predefinito |
|---|---|---|
| **Z-Index** | Più alto = sopra | Auto |

- Menu coperto da sticky header → aumentare lo Z-Index.
- Menu che copre il widget di chat → diminuire lo Z-Index.

Tipico: header del tema = `1000–9999`; widget di chat = `9999–99999`.

---

## Larghezza sottomenu

| Campo | Descrizione | Predefinito |
|---|---|---|
| **Larghezza sottomenu (px)** | Larghezza del pannello sottomenu a colonna singola | 360px |

---

## Desktop

| Campo | Descrizione |
|---|---|
| **Mostra sottomenu al hover** | Apre i sottomenu al passaggio del mouse |
| **Larghezza sottomenu a espansione completa (px)** | Larghezza del sottomenu multi-colonna |
| **Direzione sottomenu** | Direzione in cui si aprono i sottomenu |

---

## Multi-Sites *(Elite)*

| Campo | Descrizione |
|---|---|
| **Multi-Sites** | Elenco di domini separati da virgola (es. `brand.com,shop.brand.com`) |
