---
description: Come aggiungere icone integrate e immagini personalizzate agli elementi del menu in Navi+, e come stilizzarli.
lang: it
layout: default
permalink: /it/docs/menu-items/item-icon-image/
title: Icone e Immagini
---
# Icone e Immagini

Ogni elemento può avere un elemento visivo — o un **icona integrata** o un **immagine personalizzata**. Puoi usare solo uno alla volta, non entrambi.

---

## Icona integrata

Le icone sono simboli vettoriali dalla libreria integrata **Remixicon**. Sono nitide a qualsiasi dimensione e non richiedono caricamento di file.

### Come aggiungere

1. Nel pannello Modifica Elemento, clicca il pulsante **Icona**.
2. Si apre la casella di ricerca delle icone — digita una parola chiave (ad es. `home`, `cart`, `phone`, `search`).
3. Clicca su un'icona per selezionarla — un'anteprima appare immediatamente sull'elemento.
4. Clicca **×** per rimuovere l'icona attuale.

### Quando usare le icone

- Elementi in una **Tab Bar** — le icone sono il modo standard per etichettare le schede.
- Quando vuoi un aspetto pulito e coerente.
- Quando non hai immagini personalizzate pronte.

---

## Immagine personalizzata

Usa la tua foto, logo o grafica invece di un'icona della libreria.

> **Piano Starter:** Le immagini personalizzate non sono supportate — usa invece le icone integrate.

### Opzione A — Carica dalla galleria *(Business / Elite)*

1. Clicca il pulsante **Immagine** nel pannello Modifica Elemento.
2. Clicca **Galleria** → si apre la finestra di caricamento.
3. Seleziona o carica un'immagine (JPG, PNG, GIF).
4. Conferma — l'URL dell'immagine viene compilato automaticamente.

### Opzione B — Incolla un URL immagine *(Elite)*

1. Clicca il pulsante **Immagine**.
2. Incolla l'URL completo dell'immagine nel campo URL.
3. Clicca **Aggiorna**.

### Suggerimenti per le immagini

- Usa immagini **quadrate (1:1)** per le icone della Tab Bar.
- Usa immagini **in orizzontale** per gli elementi Big Image.
- **PNG con sfondo trasparente** funziona meglio per loghi e simboli.
- Mantieni la dimensione del file piccola — immagini pesanti rallentano il menu su mobile.
- Elite converte automaticamente le immagini in WebP e normalizza le dimensioni.

---

## Layout di visualizzazione

Dopo aver aggiunto un'icona o un'immagine, scegli come sono disposti l'icona/l'immagine e il testo in **Layout → Layout di Visualizzazione**:

| Opzione | Layout |
|---|---|
| **Automatico** | Segue il tipo di menu predefinito |
| **Dall'alto in basso** | Icona/imagine in alto, testo sotto |
| **Da sinistra a destra** | Icona/imagine a sinistra, testo a destra |
| **Dall'alto in basso** | Testo in alto, icona/imagine sotto |
| **Da destra a sinistra** | Testo a sinistra, icona/imagine a destra |
| **Solo Icona/Immagine** | Solo icona/imagine — testo nascosto |
| **Solo Testo** | Solo testo — icona/imagine nascosta |

---

## Stile l'icona o l'immagine

Vai a **Interfaccia → Stile Icona / Immagine** per affinare l'aspetto:

| Impostazione | Effetto |
|---|---|
| **Colore Icona** | Cambia il colore vettoriale dell'icona (esadecimale). Non si applica ai file immagine. |
| **Dimensione (px)** | Dimensione di visualizzazione dell'icona o dell'immagine |
| **Contenitore** | Colore di sfondo della casella che circonda l'icona |
| **Padding (px)** | Spazio tra l'icona e la sua casella contenitore |
| **Curva (px)** | Raggio degli angoli del contenitore — imposta `50` per un cerchio |

**Esempio — icona bianca in una casella blu rotonda:**

```
Colore Icona:  #FFFFFF
Contenitore:   #0066CC
Padding:     10
Curva:       50
```
