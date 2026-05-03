---
description: Come aggiungere icone integrate e immagini personalizzate agli elementi di menu in Navi+, e come stilizzarli.
layout: default
permalink: /it/docs/menu-items/item-icon-image/
title: Icone e immagini
---
# Icone e immagini

Ogni elemento può avere un elemento visivo — sia un'**icona integrata** che un'**immagine personalizzata**. Puoi usarne solo una alla volta, non entrambe.

---

## Icona integrata

Le icone sono simboli vettoriali dalla libreria **Remixicon** integrata. Sono nitide a qualsiasi dimensione e non richiedono upload di file.

### Come aggiungere

1. Nel pannello di modifica, clicca il pulsante **Icona**.
2. Si apre la casella di ricerca icone — digita una parola chiave (es. `home`, `cart`, `phone`, `search`).
3. Clicca un'icona per selezionarla — un'anteprima appare sull'elemento immediatamente.
4. Clicca **×** per rimuovere l'icona corrente.

### Quando usare le icone

- Elementi in una **barra delle schede** — le icone sono il modo standard per etichettare le schede.
- Quando vuoi un aspetto pulito e coerente.
- Quando non hai immagini personalizzate pronte.

---

## Immagine personalizzata

Usa la tua foto, logo o grafica al posto di un'icona dalla libreria.

> **Piano Starter:** Le immagini personalizzate non sono supportate — usa le icone integrate.

### Opzione A — Carica dalla galleria *(Business / Elite)*

1. Clicca il pulsante **Immagine** nel pannello di modifica.
2. Clicca **Galleria** → si apre la finestra di upload.
3. Seleziona o carica un'immagine (JPG, PNG, GIF).
4. Conferma — l'URL dell'immagine viene compilato automaticamente.

### Opzione B — Incolla un URL immagine *(Elite)*

1. Clicca il pulsante **Immagine**.
2. Incolla l'URL completo dell'immagine nel campo URL.
3. Clicca **Aggiorna**.

### Consigli sulle immagini

- Usa immagini **quadrate (1:1)** per le icone della barra delle schede.
- Usa immagini **orizzontali** per gli elementi Immagine grande.
- **PNG con sfondo trasparente** funziona meglio per loghi e simboli.
- Mantieni le dimensioni del file piccole — le immagini pesanti rallentano il menu su mobile.
- Elite converte automaticamente le immagini in WebP e normalizza le dimensioni.

---

## Layout di visualizzazione

Dopo aver aggiunto un'icona o immagine, scegli come icona/immagine e testo sono disposti in **Layout → Layout di visualizzazione**:

| Opzione | Layout |
|---|---|
| **Automatico** | Segue il valore predefinito del tipo di menu |
| **Su-Giù** | Icona/immagine in alto, testo in basso |
| **Sinistra-Destra** | Icona/immagine a sinistra, testo a destra |
| **Giù-Su** | Testo in alto, icona/immagine in basso |
| **Destra-Sinistra** | Testo a sinistra, icona/immagine a destra |
| **Solo Icona/Immagine** | Solo icona/immagine — testo nascosto |
| **Solo Testo** | Solo testo — icona/immagine nascosta |

---

## Stilizzare l'icona o immagine

Vai su **Interface → Stile icona / immagine** per affinare l'aspetto:

| Impostazione | Effetto |
|---|---|
| **Colore icona** | Cambia il colore vettoriale dell'icona (hex). Non si applica ai file immagine. |
| **Dimensione (px)** | Dimensione di visualizzazione dell'icona o immagine |
| **Contenitore** | Colore di sfondo del riquadro che circonda l'icona |
| **Padding (px)** | Spazio tra l'icona e il suo riquadro contenitore |
| **Curva (px)** | Raggio d'angolo del contenitore — `50` per un cerchio |

**Esempio — icona bianca in riquadro blu rotondo:**

```
Colore icona:  #FFFFFF
Contenitore:   #0066CC
Padding:       10
Curva:         50
```
