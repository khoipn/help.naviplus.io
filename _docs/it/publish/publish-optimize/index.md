---
description: Ottimizza la velocità e l'UX dopo la pubblicazione dei menu Navi+ — previeni il flash del contenuto originale quando utilizzi i trigger Insert/Replace o CSS Selector.
lang: it
layout: default
permalink: /it/docs/publish/publish-optimize/
title: Pubblica ottimizzazione — Velocità & UX
---
# Pubblica Ottimizzazione — Velocità & UX

Quando utilizzi **Insert/Replace** (menu Sezione) o **CSS Selector trigger** (Slide menu), il sito web ha bisogno di un breve momento per caricare Navi+. Durante quel tempo, l'elemento originale (il vecchio menu del tema) è ancora visibile — causando un **flash** o uno spostamento del layout.

---

## Quando è necessaria l'ottimizzazione?

| Metodo | Necessita di ottimizzazione? |
|---|---|
| Sticky / FAB (App Embeds / `<head>`) | No — menu aggiunto al DOM, nulla sostituito |
| Slide menu — Metodo 1 (apri dall'elemento Navi+) | No — il pulsante di attivazione è un elemento Navi+ |
| **Slide menu — Metodo 2 (CSS Selector trigger)** | **Sì** — l'elemento di attivazione originale rimane visibile fino a quando Navi+ non si carica |
| **Sezione — Sostituisci** | **Sì** — il menu originale viene mostrato per primo, poi viene sostituito da Navi+ |
| Sezione — Inserisci Prima/Dopo | Non richiesto — due menu appaiono affiancati |

---

## Tecnica: Nascondere l'elemento originale tramite CSS

### Come funziona

1. Usa CSS per nascondere immediatamente l'elemento originale (prima che Navi+ si carichi).
2. Facoltativamente mostra un segnaposto di caricamento per prevenire lo spostamento del layout.
3. Navi+ rimuove o sostituisce automaticamente l'elemento quando è pronto — il layout si stabilizza.

### Implementazione

**Aggiungi CSS per nascondere l'elemento originale** (incolla nel CSS personalizzato del tema o `<head>`):

```css
/* Nascondi il menu originale mentre Navi+ si carica */
nav.header__inline-menu ul.list-menu {
  visibility: hidden;
  min-height: 44px; /* riserva spazio per prevenire lo spostamento del layout */
}
```

Una volta che Navi+ sostituisce l'elemento, questo CSS non ha effetto — l'elemento viene rimosso dal DOM.

**Con segnaposto di caricamento** (avanzato):
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

## Caso speciale: Slide menu con CSS Selector trigger

Quando un Slide menu utilizza un CSS Selector trigger (Metodo 2), l'elemento di attivazione originale (ad es. il pulsante hamburger del tema) è ancora visibile e **funziona ancora** (apre il pannello laterale del tema) fino a quando Navi+ non si carica e sovrascrive l'evento.

### Soluzione A: Nascondere l'elemento originale, utilizzare l'elemento Navi+ come attivazione invece

```css
/* Nascondi il pulsante hamburger del tema */
#Details-menu-drawer-container {
  display: none !important;
}
```

Poi usa **Metodo 1** (apri dall'elemento Navi+) invece del Metodo 2 — più pulito, nessun flash di cui preoccuparsi.

### Soluzione B: Fai svanire l'elemento originale

```css
#Details-menu-drawer-container {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
```

Aggiungi JS: quando Navi+ è pronto (`naviReady` evento), rimuovi lo stile di nascondimento per ripristinare la visibilità dell'elemento originale.

---

## Note generali sulla velocità

- `start.js` si carica con `async` — non blocca il rendering della pagina.
- La configurazione JSON del menu è memorizzata nella cache su Cloudflare CDN — caricamento veloce dal nodo edge più vicino.
- Nessun rendering lato server per i visitatori — tutto il rendering del menu è lato client da JSON statico.

Per pre-caricare lo script per la massima velocità:
```html
<link rel="preload" href="https://live.naviplus.app/start.js" as="script">
```
