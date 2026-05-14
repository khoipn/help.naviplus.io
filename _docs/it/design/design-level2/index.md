---
description: Configura l'aspetto degli elementi del sottomenu in Navi+ — con eredità automatica dal Livello 1 per tutti i campi vuoti.
lang: it
layout: default
permalink: /it/docs/design/design-level2/
title: Design livello 2-3 — Elementi del sottomenu
---
# Design Livello 2-3 — Elementi del Sottomenu

Le impostazioni in **Design → Livello 2-3** si applicano agli elementi del sottomenu (menu a discesa che appaiono quando un elemento genitore è aperto). Qualsiasi campo lasciato vuoto **eredita automaticamente** il valore corrispondente dal Livello 1.

> **Regola:** Compila i campi qui solo quando vuoi che il sottomenu appaia **diverso** dal menu principale. Lascia vuoto = stesso del Livello 1.

---

## Stile del Testo

| Campo | Eredita dal Livello 1 quando vuoto |
|---|---|
| **Colore del Testo** | `textColor` |
| **Dimensione del Font (px)** | `textSize` |
| **Peso del Font** | `fontWeight` |
| **Trasformazione del Testo** | `textTransform` |
| **Famiglia del Font** | `fontFamily` |
| **Colore della Descrizione** | `descriptionColor` |
| **Dimensione della Descrizione (px)** | `descriptionTextSize` |

---

## Stile Icona / Immagine

| Campo | Eredita dal Livello 1 quando vuoto |
|---|---|
| **Colore dell'Icona** | `iconColor` |
| **Dimensione dell'Icona (px)** | `iconSize` |
| **Spazio Testo-Icona (px)** | `spaceTextIcon` |
| **Raggio dell'Immagine (px)** | `imageRadius` |

---

## Spaziatura

| Campo | Descrizione |
|---|---|
| **Padding dell'Elemento (px)** | Spaziatura interna per gli elementi del sottomenu. Non eredita — utilizza il valore predefinito del tema se vuoto |
| **Margine dell'Elemento (px)** | Spaziatura esterna per gli elementi del sottomenu |
| **Altezza Minima (px)** | Altezza minima per gli elementi del sottomenu |

---

## Sfondo & Cornice

| Campo | Descrizione |
|---|---|
| **Colore di Sfondo** | Colore di sfondo dell'area del sottomenu |
| **Raggio del Bordo (px)** | Arrotondamento degli angoli del contenitore del sottomenu |
| **Nascondi Sfondo** | Nascondi lo sfondo del sottomenu |
| **Ombra di Caduta** | Ombra di caduta per il contenitore del sottomenu |

---

## Visualizzazione

| Campo | Eredita dal Livello 1 quando vuoto |
|---|---|
| **Layout di Visualizzazione** | `displayLayout` |
| **Allinea** | `align` |

---

## Divider

| Campo | Eredita dal Livello 1 quando vuoto |
|---|---|
| **Colore del Divider** | `dividerColor` (da Design → Divider) |

---

## Esempio

**Obiettivo:** Il menu principale ha uno sfondo scuro e testo bianco. Il sottomenu dovrebbe avere uno sfondo bianco e testo scuro.

Compila solo questi due campi al Livello 2-3:
- Colore di Sfondo = `#FFFFFF`
- Colore del Testo = `#000000`

Tutti gli altri campi (dimensione del font, dimensione dell'icona, spaziatura, ecc.) ereditano automaticamente dal Livello 1.
