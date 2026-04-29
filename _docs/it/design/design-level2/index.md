---
description: Configura l'aspetto dei sottomenu con ereditarietà automatica dal Livello 1 per tutti i campi vuoti.
layout: default
permalink: /it/docs/design/design-level2/
title: Design livello 2-3 — Elementi di sottomenu
---
# Design Livello 2-3 — Elementi di Sottomenu

Le impostazioni in **Design → Livello 2-3** si applicano ai sottomenu. Qualsiasi campo vuoto **eredita automaticamente** dal Livello 1.

> **Regola:** Compila i campi qui solo quando vuoi che il sottomenu abbia un aspetto **diverso** dal menu principale.

---

## Stile del testo

| Campo | Eredita dal Livello 1 quando vuoto |
|---|---|
| **Colore testo** | `textColor` |
| **Dimensione font (px)** | `textSize` |
| **Spessore font** | `fontWeight` |
| **Trasformazione testo** | `textTransform` |
| **Famiglia font** | `fontFamily` |
| **Colore descrizione** | `descriptionColor` |
| **Dimensione descrizione (px)** | `descriptionTextSize` |

---

## Stile icona / immagine

| Campo | Eredita dal Livello 1 quando vuoto |
|---|---|
| **Colore icona** | `iconColor` |
| **Dimensione icona (px)** | `iconSize` |
| **Spazio testo-icona (px)** | `spaceTextIcon` |
| **Raggio immagine (px)** | `imageRadius` |

---

## Spaziatura

| Campo | Descrizione |
|---|---|
| **Padding elemento (px)** | Non eredita — usa il valore predefinito del tema |
| **Margin elemento (px)** | Spaziatura esterna |
| **Altezza minima (px)** | Altezza minima |

---

## Sfondo e cornice

| Campo | Descrizione |
|---|---|
| **Colore sfondo** | Sfondo del sottomenu |
| **Raggio bordo (px)** | Arrotondamento angoli |
| **Nascondi sfondo** | Nasconde lo sfondo |
| **Ombra** | Ombra esterna |

---

## Visualizzazione

| Campo | Eredita dal Livello 1 quando vuoto |
|---|---|
| **Layout di visualizzazione** | `displayLayout` |
| **Allineamento** | `align` |

---

## Divisore

| Campo | Eredita dal Livello 1 quando vuoto |
|---|---|
| **Colore divisore** | `dividerColor` |

---

## Esempio

**Obiettivo:** Menu principale scuro con testo bianco. Sottomenu bianco con testo scuro.

Compila solo 2 campi al Livello 2-3:
- Colore sfondo = `#FFFFFF`
- Colore testo = `#000000`
