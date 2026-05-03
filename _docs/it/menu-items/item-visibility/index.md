---
description: Come controllare quando e per chi un elemento di menu è visibile in Navi+ — stato di pubblicazione, condizioni di accesso e nascondere per pagina.
layout: default
permalink: /it/docs/menu-items/item-visibility/
title: Visibilità e condizioni
---
# Visibilità e condizioni

La sezione **Pubblica** nel pannello di modifica ti permette di controllare chi vede un elemento, quando e su quali pagine.

---

## Pubblicato

**Default: attivo (elemento visibile a tutti).**

Disattiva per nascondere l'elemento dal menu live senza eliminarlo.

**Usare quando:**
- Nascondere temporaneamente un link per una vendita stagionale.
- Preparare un elemento prima che vada in produzione.
- Mantenere un elemento di backup senza eliminarlo.

---

## Nascondi quando connesso

Attivo: elemento **visibile solo ai visitatori non connessi**.

**Usare per:** pulsante "Accedi", link "Crea account".

---

## Mostra solo quando connesso

Attivo: elemento **visibile solo ai clienti connessi**.

**Usare per:** "Il mio account", punti fedeltà, cronologia ordini.

---

## Nascondi su tipi di pagina specifici (hidepages)

Usa l'attributo `hidepages` in **Avanzato → Attributi**.

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| Valore | Nascosto su |
|---|---|
| `index` | Homepage |
| `products` | Pagine prodotto |
| `collections` | Pagine collezione |
| `pages` | Pagine statiche |
| `blogs` | Blog |
| `others` | Altre pagine |

**Esempio:** `hidepages=index|blogs`

---

## Nascondi per dispositivo

> Navi+ controlla i dispositivi a **livello di menu**. Crea due menu separati o usa CSS.

```css
/* Solo mobile */
@media (max-width: 767px) { display: none !important; }

/* Solo desktop */
@media (min-width: 768px) { display: none !important; }
```

---

## Riepilogo

| Condizione | Come configurare |
|---|---|
| Nascondi completamente | Pubblicato → disattivato |
| Nascondi agli utenti connessi | Nascondi quando connesso → attivo |
| Nascondi agli ospiti | Mostra solo quando connesso → attivo |
| Nascondi in homepage | `hidepages=index` |
| Nascondi su mobile | CSS `@media (max-width: 767px)` |
| Nascondi su desktop | CSS `@media (min-width: 768px)` |
