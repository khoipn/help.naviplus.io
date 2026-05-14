---
description: Filtra la visibilità del menu Navi+ in base al dispositivo, al comportamento di scorrimento, ai tipi di pagina Shopify e alle parole chiave URL.
lang: it
layout: default
permalink: /it/docs/publish/publish-filter/
title: Pubblica filtro — Regole dispositivo e URL
---
# Pubblica Filtro — Regole Dispositivo e URL

Dopo aver abilitato l'interruttore di pubblicazione, puoi restringere quando appare il menu utilizzando due livelli di filtro: **dispositivo** (mobile/desktop + comportamento di scorrimento) e **parole chiave URL** (mostra/nascondi in base al contenuto dell'URL).

---

## Filtra per Dispositivo

### Abilita/disabilita per piattaforma

Due interruttori nella parte superiore della finestra modale di Pubblicazione:

| Impostazione | Predefinito | Note |
|---|---|---|
| **Mostra menu su mobile** | On | Mostra menu sui dispositivi mobili |
| **Mostra menu su desktop** | Off | Mostra menu sui dispositivi desktop |

Alcuni tipi di menu disabilitano uno di questi interruttori — ad esempio, il Mega Menu Desktop disabilita l'interruttore mobile.

---

### Comportamento di scorrimento (Solo menu Sticky)

Configurato separatamente per mobile e desktop.

#### Scorrimento mobile

| Impostazione | Comportamento |
|---|---|
| **Nascondi automaticamente durante lo scorrimento verso il basso** | Nascondi menu quando l'utente scorre **verso il basso** |
| **Mostra automaticamente dopo lo scorrimento** | Mostra menu solo dopo che l'utente ha scorrimento verso il basso (non mostrato al caricamento della pagina) |

#### Scorrimento desktop

| Impostazione | Comportamento |
|---|---|
| **Nascondi automaticamente durante lo scorrimento verso il basso** | Nascondi menu quando si scorre verso il basso su desktop |
| **Mostra automaticamente dopo lo scorrimento** | Mostra solo dopo aver scorrimento verso il basso su desktop |

> Nascondi automaticamente e Mostra automaticamente possono essere abilitati insieme: il menu si nasconde durante lo scorrimento verso il basso, riappare durante lo scorrimento verso l'alto — un modello comune per le tabbar inferiori.

---

### Posizione dello schermo (Solo Sticky / Tabbar)

Scegli una posizione da un selettore a pulsante radio con illustrazioni visive.

**Mobile** — 6 posizioni preimpostate (centro in basso, sinistra in basso, destra in basso, varianti superiori...)

**Desktop** — 12 posizioni preimpostate (barra superiore, barra inferiore, barra laterale sinistra/destra, posizioni angolari...)

---

### Gruppi di pagine (Solo Shopify, menu Sticky)

Seleziona su quali tipi di pagina Shopify appare il menu. Predefinito: tutti.

| Gruppo | Modello URL |
|---|---|
| Home | `/` |
| Dettaglio Prodotto | `/products/*` |
| Categorie Prodotto | `/collections/*` |
| Pagine | `/pages/*` |
| Blog | `/blogs/*` |
| Altri | Tutte le pagine rimanenti |

> Il mercato globale (WordPress, Wix, ecc.) non ha questa funzionalità. Usa invece il filtro delle parole chiave URL.

---

## Filtra per Parole Chiave URL

La **"Mostra il menu per parole chiave"** scheda — si applica a tutti i tipi di menu tranne il Context Slide.

### Due tipi di filtro

| Impostazione | Comportamento |
|---|---|
| **Contiene Parola Chiave** | Il menu **mostra solo** quando l'URL **contiene** almeno una parola chiave |
| **Non Contiene Parola Chiave** | Il menu **non mostra** quando l'URL **contiene** una delle parole chiave |

Parole chiave multiple separate da virgole `,`.

### Esempi

**Mostra solo sulle pagine prodotto snowboard:**
```
Contiene: snowboard
```
→ Il menu mostra solo su URL come `yourdomain.com/products/the-collection-snowboard-hydrogen`

**Nascondi sulle pagine multi-locazione:**
```
Non contiene: multi-location
```
→ Il menu **non** mostra su `yourdomain.com/products/the-multi-location-snowboard`

**Combinato:**
```
Contiene: collections
Non contiene: sale, outlet
```
→ Mostra solo sulle pagine di collezione, ma nascosto su "sale" e "outlet" collezioni.

### Note

- Il filtro utilizza **corrispondenza di stringa URL completa**, non regex.
- Le parole chiave sono **case-insensitive**.
- Lascia vuoto = nessun filtro (il menu mostra su tutte le pagine).
- Entrambi i filtri sono combinati con AND — entrambe le condizioni devono essere soddisfatte.
