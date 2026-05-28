---
description: Usa ChatGPT, Claude o Gemini per ridisegnare il tuo menu Navi+ — Navi+ genera il prompt, tu incolli il risultato JSON.
lang: it
layout: default
permalink: /it/docs/ai/auto-design-your-ai/
title: Design automatico con la tua app IA
---
# Design automatico con la tua app IA

Ridisegna il tuo menu con uno strumento IA che già conosci — ChatGPT, Claude o Gemini. Navi+ prepara i dati e il prompt; tu devi solo passarli all'IA e riportare il risultato. Questa funzionalità è **gratuita**.

Apri: il pulsante **AI** → scheda **Design automatico con la tua app IA**.

---

## Prima di iniziare — esegui il backup del tuo menu

> **⋮ Altro → Backup / Ripristino** — salva il tuo menu attuale come file o nel cloud prima di apportare modifiche. Non saltare questo passaggio.

---

## Passo 1 — Addestra la tua IA

Hai bisogno di uno strumento IA basato sul web. Modelli a grande contesto consigliati:

| Strumento | Modello suggerito |
|---|---|
| Claude | Opus 4.7 |
| ChatGPT | GPT-5 |
| Gemini | Pro 1.5 |

Clicca **Apri documenti di addestramento**, copia tutto e incollalo nella chat della tua IA. Questo insegna all'IA come sono strutturati i menu Navi+.

---

## Passo 2 — Invia il tuo menu attuale (JSON) all'IA

Una volta che l'IA ha compreso la struttura dal Passo 1, inviale il tuo menu attuale:

- **Copia il menu attuale negli appunti** e incollalo nella chat, oppure
- **Scarica il file JSON** e allegalo alla chat.

---

## Passo 3 — Fornisci le istruzioni di design

Scrivi la tua richiesta in linguaggio naturale, per esempio:

- Aggiungi altri 2 elementi al menu
- Cambia il colore principale in blu
- Raggruppa gli elementi prodotto sotto un'unica sezione con titolo

Hai pieno controllo sul design. L'IA restituisce un nuovo menu in formato JSON.

---

## Passo 4 — Incolla il risultato e applica

Copia il JSON che l'IA restituisce, poi applicalo a Navi+ in uno dei due modi:

- **Opzione 1:** Incolla il JSON nella casella di input e clicca **Applica**.
- **Opzione 2:** Clicca **Carica file JSON** e scegli il tuo file `.json`.

Ripeti i Passi 3–4 finché il menu non ti sembra giusto, poi clicca **Salva**.

> Suggerimento: L'IA modifica solo la struttura e il contenuto nel JSON. I campi che hai configurato ma non hai menzionato vengono mantenuti — ma controlla comunque il menu dopo aver applicato.

---

## Esempi di istruzioni (Passo 3)

- Aggiungi 2 elementi: Blog e Lavora con noi.
- Cambia il colore principale in blu `#1a73e8`.
- Riduci a 4 elementi principali, sposta il resto sotto un elemento Altro.
- Aggiungi un'icona adatta a ogni elemento e metti in grassetto l'elemento Promozioni.
- Traduci tutti i nomi degli elementi in inglese.

---

## Caso di studio — riordinare una tab bar con Claude

**Contesto:** Un negozio ha una tab bar disordinata di 8 elementi e vuole ridurla a 5 elementi e aggiungere icone, mantenendo tutti i link esistenti.

1. **Backup:** ⋮ Altro → Backup / Ripristino → salva una copia.
2. **Passo 1 — Addestra l'IA:** Apri Claude (Opus 4.7), clicca **Apri documenti di addestramento** in Navi+, copia tutto e incollalo in Claude.
3. **Passo 2 — Invia il menu:** Clicca **Copia il menu attuale negli appunti** e incolla il JSON in Claude.
4. **Passo 3 — Istruisci:** Di' a Claude:

   ```
   Unisci questi 8 elementi in 5 elementi principali: Home, Prodotti, Promozioni,
   Blog, Account. Sposta gli elementi rimanenti in sottogruppi adatti.
   Aggiungi un'icona a ogni elemento di livello 1. Mantieni invariati tutti i link esistenti.
   ```

5. **Passo 4 — Applica:** Claude restituisce un nuovo JSON. Copialo, incollalo nella casella **Applica** in Navi+ → clicca **Applica**.
6. Controlla: 5 elementi, icone complete, link originali intatti. Servono altre modifiche? Ripeti i Passi 3–4. Soddisfatto? Clicca **Salva**.

**Risultato:** Una tab bar pulita di 5 elementi con icone, tutti i link conservati — senza modificare ogni elemento a mano.
