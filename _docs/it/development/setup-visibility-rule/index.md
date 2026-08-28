---
description: "Le regole di visibilità si applicano a menu e elementi di menu — visualizzazione o nascondimento in base a dispositivo, contenuto del carrello, programma, mercato, tag cliente e clienti B2B."
lang: it
layout: default
permalink: /it/docs/development/setup-visibility-rule/
title: Configurare le regole di visibilità
---
# Configurare le regole di visibilità

Le Visibility Rules sono un insieme di condizioni che determinano se un **menu** o un **elemento di menu** viene visualizzato a un visitatore specifico — in base a dispositivo, contenuto del carrello, programma, mercato, tag cliente o clienti B2B — applicando a entrambi i livelli con esattamente un insieme di regole.

---

## Dove configurarle

- **Livello elemento di menu**: apri **Edit item** → gruppo **Visibility** → fai clic su **Setup the Visibility rules**. *(Il gruppo Visibility si trova in un blocco compresso — se non lo vedi immediatamente, fai clic su **See more** per espanderlo.)*
- **Livello menu**: apri il pannello **Setting** del menu → carta **Visibility Rules**.

Da qui in poi, tutte le condizioni, sintassi e il modo in cui si combinano sono **condivise** per entrambi i livelli — solo la posizione differisce.

> Market / Customer tag / B2B si applicano solo a **Shopify** e sono attualmente campi di testo libero (nessun menu a discesa predefinito) — ogni campo ha un link **"View your Markets"** / **"Manage customer tags"** / **"Manage B2B companies"** che ti porta direttamente alla pagina corrispondente di Shopify Admin per verificare il valore esatto prima di digitare.

---

## Condizioni supportate

| Condizione | Piano | Mostra quando | Valore di input |
|---|---|---|---|
| **Device** | Business e superiore | Corrisponde al dispositivo selezionato | `All devices` / `Mobile only` / `Desktop only` |
| **Page / URL** | Business e superiore | Tipo di pagina corretto o URL contiene/non contiene parola chiave | Seleziona tipi di pagina (Home/Products/Collections/Pages/Blogs/Others) + 2 campi parola chiave |
| **Cart contents** | Business e superiore | Il carrello ha N o più prodotti | Numero intero, ad es. `1` |
| **Schedule** | Business e superiore | Entro un intervallo di date impostato | Data di inizio → Data di fine (verificato secondo l''ora del dispositivo del visitatore) |
| **Referrer / campaign** | Business e superiore | URL di provenienza contiene testo | Ad es. `instagram.com` o `utm_campaign=summer` |
| **Market / Country** | Elite | Il visitatore sta navigando nel mercato selezionato | Handle del mercato, più valori separati da virgole: `us, ca` |
| **Customer tag** | Elite | Il visitatore connesso ha il tag | Un singolo tag, ad es. `vip` |
| **B2B customer** | Elite | Il visitatore connesso utilizza un account B2B | Interruttore acceso/spento |

> ⚠️ Le condizioni a **livello menu** attualmente **non si applicano a Mobile Menu (Slide)** — se imposti le Visibility Rules su un Mobile Menu, non hanno effetto quando si visualizzano in vetrina. Le condizioni a **livello elemento** (all''interno di Mobile Menu) funzionano normalmente. Stiamo correggendo questa limitazione.

---

## Come si combinano le condizioni

Tutte le condizioni abilitate devono **tutte corrispondere** perché il menu/elemento venga visualizzato — basta che una condizione fallisca per nasconderlo immediatamente. Le condizioni vuote vengono ignorate e non contano.

Ad esempio, abilitando sia Device = Mobile only **che** Schedule = 01/09–15/09: mostra solo ai visitatori su telefoni cellulari, **e** solo durante quelle 2 settimane esatte.

<div align="center">

<svg viewBox="0 0 680 300" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="vrArrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#1a7a4f"/>
    </marker>
    <marker id="vrArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="150" y="10" width="180" height="30" rx="15" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="30" font-size="12.5" text-anchor="middle" fill="#1a1d21">Il visitatore arriva sulla pagina</text>

  <line x1="240" y1="40" x2="240" y2="58" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="60" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="86" font-size="12.5" text-anchor="middle" fill="#1a1d21">Device — corrisponde al dispositivo selezionato?</text>

  <line x1="240" y1="104" x2="240" y2="122" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="124" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="150" font-size="12.5" text-anchor="middle" fill="#1a1d21">Page/URL, Cart, Schedule, Referrer — condizioni soddisfatte?</text>

  <line x1="240" y1="168" x2="240" y2="186" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="188" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="214" font-size="12.5" text-anchor="middle" fill="#1a1d21">Market, Tag, B2B (piano Elite) — corrisponde a questo visitatore?</text>

  <line x1="240" y1="232" x2="240" y2="250" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="150" y="252" width="180" height="34" rx="17" fill="#1a7a4f"/>
  <text x="240" y="274" font-size="13" font-weight="600" text-anchor="middle" fill="#fff">Mostra</text>

  <rect x="470" y="55" width="160" height="182" rx="10" fill="#fef2f2" stroke="#fecaca"/>
  <text x="550" y="140" font-size="16" font-weight="700" text-anchor="middle" fill="#b91c1c">Nascondi</text>
  <text x="550" y="158" font-size="11" text-anchor="middle" fill="#b91c1c">immediatamente</text>

  <line x1="420" y1="82" x2="470" y2="82" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="76" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="146" x2="470" y2="146" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="140" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="210" x2="470" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="204" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>
</svg>

</div>

*Una sola condizione abilitata che fallisce (ramo destro ✗) nasconde immediatamente il menu/elemento — indipendentemente dal fatto che altre condizioni passino. Le condizioni vuote (non abilitate) vengono ignorate e omesse.*

---

## 5 esempi reali

### 1. Vendita all''ingrosso e al dettaglio contemporaneamente, nascondi i prezzi all''ingrosso ai clienti al dettaglio (livello menu)

Il tuo negozio vende sia all''ingrosso che al dettaglio. I clienti all''ingrosso (con un account B2B approvato da Shopify) acquistano a prezzi migliori e hanno il loro gruppo di prodotto/collezione. Vuoi un gruppo di menu "Prezzi all''ingrosso", "Ordini all''ingrosso veloci", "Prodotti all''ingrosso" — visualizzazione solo ai clienti all''ingrosso, mentre i visitatori al dettaglio non vedono alcun menu di questo tipo (evitando confusione sui prezzi e nascondendo gli sconti).

**Come fare:** Crea un menu separato (o gruppo di menu) contenente link all''ingrosso. Vai a **Setting → Visibility Rules**, abilita **B2B customer**. Risultato: questo menu intero viene visualizzato solo ai visitatori collegati con account B2B; i clienti al dettaglio (anche se collegati) non vedranno questo menu mentre navigano.

### 2. Banner promozionale a tempo limitato, mostra solo durante l''acquisto (livello elemento)

Vuoi un banner "Spedizione gratuita su ordini da 50€+" che si visualizzi solo durante la vendita e solo per i clienti che hanno aggiunto almeno un prodotto al carrello (evita di distrarre i nuovi visitatori all''arrivo).

**Come fare:** Sull''elemento banner, fai clic su **Setup the Visibility rules** → abilita **Cart contents** = `1`, e **Schedule** = date di inizio/fine della vendita.

### 3. Link di offerta esclusiva per clienti VIP (livello elemento)

Vuoi un elemento di menu "Offerte VIP" visibile solo ai clienti contrassegnati come VIP, mentre i clienti normali non sanno nemmeno che esista.

**Come fare:** Contrassegna il gruppo di clienti VIP tramite Shopify Flow/Customer Segment (Segment → Flow "Customer enters segment" → applica tag). Sull''elemento, fai clic su **Setup the Visibility rules** → abilita **Customer tag** = `vip`.

### 4. Tab Bar Premium per clienti VIP (livello menu)

Il tuo negozio vuole che i clienti VIP abbiano un''esperienza di navigazione diversa — sfondo scuro, effetti brillanti, sensazione premium — invece di condividere l''interfaccia standard con tutti gli altri.

**Come fare:** Crea una Tab Bar separata con un modello scuro premium, pubblicala nella stessa posizione di Tab Bar che il tuo negozio utilizza per impostazione predefinita. Vai a **Setting → Visibility Rules**, abilita **Customer tag** = `vip` (contrassegna tramite Shopify Flow/Customer Segment come nell''esempio 3). Risultato: i clienti contrassegnati VIP vedono la Tab Bar premium; i clienti normali vedono ancora la tua Tab Bar standard. *(Mobile Menu utilizza lo stesso approccio — ma controlla prima il limite di Mobile Menu (Slide) sopra.)*

### 5. FAB spinge la vendita aggiuntiva proprio quando il cliente aggiunge il primo articolo (livello menu)

Il cliente ha appena aggiunto il suo primo prodotto al carrello — il momento decisivo — e vuoi che un pulsante mobile (FAB) con informazioni promozionali compaia ("acquista di più per sbloccare la spedizione gratuita", regalo gratuito...) per spingerlo più velocemente verso il checkout, invece che il FAB si visualizzi sempre e confonda la vista dall''inizio.

**Come fare:** Crea un FAB (Floating Button) con contenuto promozionale. Vai a **Setting → Visibility Rules**, abilita **Cart contents** = `1` (mostra solo quando il carrello ha 1+ prodotti). Risultato: il FAB rimane nascosto finché un cliente non aggiunge il primo prodotto al suo carrello. *Nota: la condizione controlla solo il NUMERO di prodotti nel carrello, non il valore dell''ordine — "50€+ sblocca la spedizione gratuita" è il testo di marketing che scrivi all''interno del FAB stesso, non una Visibility Rule che calcola in base al prezzo.*

---
