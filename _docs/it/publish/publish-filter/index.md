---
description: Filtra la visibilità del menu Navi+ per dispositivo, comportamento di scorrimento, tipi di pagina Shopify e parole chiave URL.
layout: default
permalink: /it/docs/publish/publish-filter/
title: Publish Filter — Regole Dispositivo & URL
---
# Publish Filter — Regole Dispositivo & URL

Dopo aver attivato l'interruttore di pubblicazione, puoi limitare quando appare il menu usando due livelli di filtro: **dispositivo** (mobile/desktop + comportamento di scorrimento) e **parole chiave URL** (mostra/nascondi in base al contenuto dell'URL).

---

## Filtra per dispositivo

### Attiva/disattiva per piattaforma

Due interruttori in cima al modal Publish:

| Impostazione | Predefinito | Note |
|---|---|---|
| **Mostra menu su mobile** | Attivato | Mostra menu sui dispositivi mobili |
| **Mostra menu su desktop** | Disattivato | Mostra menu sui dispositivi desktop |

Alcuni tipi di menu disabilitano uno di questi interruttori — ad esempio, Desktop Mega Menu disabilita l'interruttore mobile.

---

### Comportamento di scorrimento (solo menu Sticky)

Configurato separatamente per mobile e desktop.

#### Scorrimento mobile

| Impostazione | Comportamento |
|---|---|
| **Nascondi automaticamente allo scroll verso il basso** | Nascondi il menu quando l'utente scorre verso il **basso** |
| **Mostra automaticamente dopo lo scroll** | Mostra il menu solo dopo che l'utente ha scorso verso il basso (non mostrato al caricamento della pagina) |

#### Scorrimento desktop

| Impostazione | Comportamento |
|---|---|
| **Nascondi automaticamente allo scroll verso il basso** | Nascondi il menu durante lo scorrimento verso il basso su desktop |
| **Mostra automaticamente dopo lo scroll** | Mostra solo dopo lo scorrimento verso il basso su desktop |

> Nascondi automaticamente e Mostra automaticamente possono essere attivati insieme: il menu si nasconde durante lo scorrimento verso il basso, riappare durante lo scorrimento verso l'alto — un pattern comune per le tabbar inferiori.

---

### Posizione sullo schermo (solo Sticky / Tabbar)

Scegli una posizione da un selettore di pulsanti radio con illustrazioni visive.

**Mobile** — 6 posizioni preimpostate (in basso al centro, in basso a sinistra, in basso a destra, varianti in alto...)

**Desktop** — 12 posizioni preimpostate (barra superiore, barra inferiore, barra laterale sinistra/destra, posizioni angolari...)

---

### Gruppi di pagine (solo Shopify, menu Sticky)

Seleziona su quali tipi di pagina Shopify appare il menu. Predefinito: tutti.

| Gruppo | Pattern URL |
|---|---|
| Home | `/` |
| Dettaglio prodotto | `/products/*` |
| Categorie prodotti | `/collections/*` |
| Pagine | `/pages/*` |
| Blog | `/blogs/*` |
| Altro | Tutte le pagine rimanenti |

> Il mercato Global (WordPress, Wix, ecc.) non ha questa funzione. Usa invece il filtro per parole chiave URL.

---

## Filtra per parole chiave URL

La scheda **"Mostra il menu per parole chiave"** — si applica a tutti i tipi di menu tranne Context Slide.

### Due tipi di filtro

| Impostazione | Comportamento |
|---|---|
| **Contiene parola chiave** | Il menu **viene mostrato solo** quando l'URL **contiene** almeno una parola chiave |
| **Non contiene parola chiave** | Il menu **non viene mostrato** quando l'URL **contiene** una qualsiasi delle parole chiave |

Più parole chiave separate da virgole `,`.

### Esempi

**Mostra solo sulle pagine di prodotti snowboard:**
```
Contiene: snowboard
```
→ Il menu viene mostrato solo su URL come `yourdomain.com/products/the-collection-snowboard-hydrogen`

**Nascondi sulle pagine multi-location:**
```
Non contiene: multi-location
```
→ Il menu **non** viene mostrato su `yourdomain.com/products/the-multi-location-snowboard`

**Combinato:**
```
Contiene: collections
Non contiene: sale, outlet
```
→ Viene mostrato solo sulle pagine di collezioni, ma nascosto sulle collezioni "sale" e "outlet".

### Note

- Il filtro usa la **corrispondenza completa della stringa URL**, non regex.
- Le parole chiave sono **case-insensitive**.
- Lascia vuoto = nessun filtro (il menu viene mostrato su tutte le pagine).
- Entrambi i filtri sono collegati con AND — entrambe le condizioni devono essere soddisfatte.
