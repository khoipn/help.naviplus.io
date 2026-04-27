---
description: Ottimizza velocità e UX dopo la pubblicazione dei menu Navi+ — previeni il flash del contenuto originale quando si usa Inserisci/Sostituisci o trigger CSS Selector.
layout: default
permalink: /docs/publish/publish-optimize/
title: Publish Optimize — Velocità & UX
---
# Publish Optimize — Velocità & UX

Quando si usa **Inserisci/Sostituisci** (menu Section) o un **trigger CSS Selector** (menu Slide), il sito web ha bisogno di un breve momento per caricare Navi+. Durante quel tempo, l'elemento originale (il vecchio menu del tema) è ancora visibile — causando un **flash** o uno spostamento del layout.

---

## Quando è necessaria l'ottimizzazione?

| Metodo | Ottimizzazione necessaria? |
|---|---|
| Sticky / FAB (App Embeds / `<head>`) | No — il menu viene aggiunto al DOM, nulla viene sostituito |
| Menu Slide — Metodo 1 (apri da elemento Navi+) | No — il pulsante trigger è un elemento Navi+ |
| **Menu Slide — Metodo 2 (trigger CSS Selector)** | **Sì** — l'elemento trigger originale rimane visibile fino al caricamento di Navi+ |
| **Section — Sostituisci** | **Sì** — il menu originale viene mostrato prima, poi sostituito da Navi+ |
| Section — Inserisci prima/dopo | Non necessario — due menu appaiono fianco a fianco |

---

## Tecnica: Nascondere l'elemento originale tramite CSS

### Come funziona

1. Usare CSS per nascondere l'elemento originale immediatamente (prima che Navi+ si carichi).
2. Opzionalmente mostrare un placeholder di caricamento per evitare lo spostamento del layout.
3. Navi+ rimuove o sostituisce automaticamente l'elemento quando è pronto — il layout si stabilizza.

### Implementazione

**Aggiungere CSS per nascondere l'elemento originale** (incollare nel CSS personalizzato del tema o `<head>`):

```css
/* Nascondi menu originale mentre Navi+ si carica */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* riserva spazio per evitare lo spostamento del layout */
}
```

Una volta che Navi+ sostituisce l'elemento, questo CSS non ha più effetto — l'elemento viene rimosso dal DOM.

**Con placeholder di caricamento** (avanzato):
```css
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  position: relative;
}
nav.header__inline-menu ul.list-menu::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #f5f5f5;
  border-radius: 4px;
}
```

---

## Caso speciale: Menu Slide con trigger CSS Selector

Quando un menu Slide usa un trigger CSS Selector (Metodo 2), l'elemento trigger originale (ad esempio il pulsante hamburger del tema) è ancora visibile e **funziona ancora** (apre il pannello slide del tema) fino a quando Navi+ si carica e sovrascrive l'evento.

### Soluzione A: Nascondere l'elemento originale, usare l'elemento Navi+ come trigger

```css
/* Nascondi il pulsante hamburger del tema */
#Details-menu-drawer-container {
  display: none !important;
}
```

Poi usa il **Metodo 1** (apri da elemento Navi+) invece del Metodo 2 — più pulito, nessun flash di cui preoccuparsi.

### Soluzione B: Dissolvere l'elemento originale

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

Aggiungi JS: quando Navi+ è pronto (evento `naviReady`), rimuovi lo stile di nascondimento per ripristinare la visibilità dell'elemento originale.

---

## Note generali sulla velocità

- `start.js` si carica con `async` — non blocca il rendering della pagina.
- La configurazione JSON del menu è in cache su Cloudflare CDN — caricamento rapido dal nodo edge più vicino.
- Nessun rendering lato server per i visitatori — tutto il rendering del menu è lato client da JSON statico.

Per precaricare lo script per la massima velocità:
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
