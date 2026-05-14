---
description: Come controllare quando e per chi un elemento di menu è visibile in Navi+ — stato pubblicato, condizioni di accesso e nascondere in base alla pagina.
lang: it
layout: default
permalink: /it/docs/menu-items/item-visibility/
title: Visibilità & Condizioni
---
# Visibilità & Condizioni

La sezione **Pubblica** nel pannello Modifica elemento ti consente di controllare chi vede un elemento, quando e su quali pagine.

---

## È Pubblicato

**Predefinito: attivo (l'elemento è visibile a tutti).**

Disattiva questa opzione per nascondere l'elemento dal menu live senza eliminarlo. L'elemento rimane nell'editor — puoi riattivarlo in qualsiasi momento.

**Usa quando:**
- Nascondere temporaneamente un link a una vendita stagionale.
- Preparare un elemento prima che venga pubblicato.
- Mantenere un elemento di backup senza eliminarlo.

---

## Nascondi quando sei connesso

Quando abilitato, l'elemento è **visibile solo ai visitatori che non sono connessi**.

**Usa per:**
- Un "Accedi" pulsante — i clienti già connessi non ne hanno bisogno.
- Un "Crea account" link.

---

## Mostra solo quando sei connesso

Quando abilitato, l'elemento è **visibile solo ai clienti connessi**.

**Usa per:**
- "Il mio account" link.
- Punti fedeltà, cronologia ordini.
- Funzionalità riservate ai membri.

---

## Nascondi su tipi di pagina specifici (hidepages)

Usa l'attributo `hidepages` in **Avanzato → Attributi** per nascondere un elemento su determinati tipi di pagina.

**Sintassi:**

```
hidepages=index
hidepages=index|products
hidepages=index|products|collections|pages|blogs|others
```

| Valore | Pagine nascoste su |
|---|---|
| `index` | Pagina principale |
| `products` | Pagine di dettaglio prodotto |
| `collections` | Pagine di collezione / categoria |
| `pages` | Pagine statiche (Chi siamo, Contatti…) |
| `blogs` | Pagine di elenco e post del blog |
| `others` | Qualsiasi pagina non nelle categorie sopra |

Separare più valori con `|`, senza spazi.

**Esempio:** Nascondere un "Acquista ora" pulsante sulla pagina principale e sulle pagine del blog:

```
hidepages=index|blogs
```

---

## Nascondi per dispositivo (Mobile / Desktop)

> **Importante:** Navi+ non ha un toggle mobile/desktop per elemento. Il targeting del dispositivo è controllato a livello di **menu**, non a livello di elemento.

**L'approccio corretto:**

- Vai alla scheda **Pubblica** del menu → attiva **Mobile** e **Desktop** per l'intero menu.
- Crea due menu separati — uno per mobile, uno per desktop — e imposta il toggle del dispositivo su ciascuno.

**Soluzione alternativa per elemento (se davvero necessario):**  
Usa **Avanzato → CSS** con una media query:

```css
/* Nascondi questo elemento solo su mobile */
@media (max-width: 767px) { display: none !important; }

/* Nascondi questo elemento solo su desktop */
@media (min-width: 768px) { display: none !important; }
```

---

## Riepilogo

| Condizione | Come impostare |
|---|---|
| Nascondi completamente | È Pubblicato → disattivato |
| Nascondi da utenti connessi | Nascondi quando sei connesso → attivato |
| Nascondi da ospiti | Mostra solo quando sei connesso → attivato |
| Nascondi sulla pagina principale | Attributi: `hidepages=index` |
| Nascondi su mobile | CSS: `@media (max-width: 767px) { display: none !important; }` |
| Nascondi su desktop | CSS: `@media (min-width: 768px) { display: none !important; }` |
