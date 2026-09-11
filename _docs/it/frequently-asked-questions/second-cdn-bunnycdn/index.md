---
description: "Come Navi+ consegna il tuo menu tramite due reti di distribuzione dei contenuti indipendenti perché resti online, e cosa fa l'opzione \"Use a second CDN (BunnyCDN)\" dell'app embed — anche quando i visitatori di alcune regioni non riescono a raggiungere Cloudflare."
lang: it
layout: default
permalink: /it/docs/frequently-asked-questions/second-cdn-bunnycdn/
title: "Come Navi+ mantiene online il tuo menu — l'opzione \"Use a second CDN (BunnyCDN)\""
---
# Come Navi+ mantiene online il tuo menu — l'opzione "Use a second CDN (BunnyCDN)"

Il tuo menu non è memorizzato nel tema. A ogni caricamento di pagina, il browser scarica alcuni piccoli file da Navi+: il motore del menu, i suoi stili e i dati del tuo menu. Da dove arrivano questi file decide se il menu compare, e quanto velocemente. Questa pagina spiega come funziona la consegna, come è protetta dalle interruzioni e cosa cambia la casella **Use a second CDN (BunnyCDN)** nell'app embed di Shopify.

---

## Due reti, un solo menu

Navi+ serve i file del menu tramite una rete di distribuzione dei contenuti (CDN): un insieme di server sparsi nel mondo che conservano copie degli stessi file, così ogni visitatore viene servito da una posizione vicina.

Per garantire che un problema su una rete non possa mai far sparire il tuo menu, gli stessi file sono conservati su **due reti indipendenti**, gestite da due fornitori diversi:

| Rete | Fornitore | Ruolo |
|---|---|---|
| Rete principale | Cloudflare | Serve tutti i negozi per impostazione predefinita. |
| Seconda rete | BunnyCDN | Conserva una copia identica, aggiornata a ogni rilascio di Navi+. Interviene quando la rete principale non riesce a consegnare. |

Ogni fornitore gestisce la propria infrastruttura globale con i propri impegni di disponibilità. Poiché le due reti non condividono server, un incidente da una parte lascia l'altra intatta: il menu non dipende mai dal fatto che una sola azienda resti operativa.

---

## Come funziona un caricamento di pagina per impostazione predefinita

<div align="center">

<svg viewBox="0 0 720 330" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="20" y="120" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="150" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Browser del visitatore</text>
  <text x="95" y="172" text-anchor="middle" font-size="12" fill="#4b5563">apre il tuo negozio</text>
  <text x="95" y="190" text-anchor="middle" font-size="12" fill="#4b5563">parte lo script di avvio Navi+</text>

  <rect x="290" y="40" width="200" height="100" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="390" y="66" text-anchor="middle" font-size="14" font-weight="600" fill="#9a3412">Rete principale</text>
  <text x="390" y="86" text-anchor="middle" font-size="12" fill="#7c2d12">Cloudflare</text>
  <text x="390" y="110" text-anchor="middle" font-size="11" fill="#7c2d12">motore del menu · stili · dati del menu</text>
  <text x="390" y="126" text-anchor="middle" font-size="11" fill="#7c2d12">serviti dalla posizione più vicina</text>

  <rect x="290" y="200" width="200" height="100" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="390" y="226" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Seconda rete</text>
  <text x="390" y="246" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN</text>
  <text x="390" y="270" text-anchor="middle" font-size="11" fill="#1e40af">copia identica di ogni file</text>
  <text x="390" y="286" text-anchor="middle" font-size="11" fill="#1e40af">aggiornata a ogni rilascio di Navi+</text>

  <rect x="560" y="120" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="152" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Il menu compare</text>
  <text x="630" y="174" text-anchor="middle" font-size="12" fill="#047857">sulla pagina</text>

  <path d="M170,150 C230,150 230,90 290,90" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="222" y="108" text-anchor="middle" font-size="11" fill="#374151">1. richiesta dei file</text>

  <path d="M490,90 C530,90 530,150 560,150" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="522" y="108" text-anchor="middle" font-size="11" fill="#374151">2. consegna</text>

  <path d="M170,180 C230,180 230,250 290,250" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>
  <text x="222" y="230" text-anchor="middle" font-size="11" fill="#dc2626">se un file fallisce →</text>
  <text x="222" y="244" text-anchor="middle" font-size="11" fill="#dc2626">nuovo tentativo automatico</text>

  <path d="M490,250 C530,250 530,180 560,180" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>

  <path d="M390,140 L390,200" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="404" y="174" font-size="10" fill="#6b7280">sincronizzate</text>
</svg>

</div>

1. L'app embed di Navi+ nel tuo tema esegue un piccolissimo script di avvio.
2. Lo script di avvio chiede alla **rete principale** il motore del menu, i suoi stili e i dati del tuo menu.
3. Il menu compare.

Se uno di questi file non arriva dalla rete principale — un'interruzione, un timeout, un problema regionale — lo script di avvio **riprova automaticamente lo stesso file da BunnyCDN**. Accade da solo, nel browser del visitatore, senza che tu debba configurare nulla. In pratica, una brutta giornata di una sola rete resta invisibile ai tuoi clienti.

---

## L'unico caso che il nuovo tentativo automatico non può coprire

Il nuovo tentativo automatico vive dentro lo script di avvio. Questo crea un punto cieco: se lo **script di avvio stesso** non arriva mai, non parte nulla, e non resta niente da ritentare.

Succede quando la connessione di un visitatore non riesce affatto a raggiungere la rete principale. Cloudflare è una delle reti più grandi di internet, ma non è raggiungibile ovunque:

- Alcuni paesi limitano o rallentano il traffico Cloudflare a livello nazionale.
- Alcune reti aziendali o scolastiche lo bloccano come parte del loro filtro web.
- Alcuni provider internet instradano male verso Cloudflare in certe regioni, e le richieste vanno in timeout.

Per un negozio i cui clienti sono per lo più in uno di questi luoghi, un menu che funziona perfettamente per te può mancare per loro — e il nuovo tentativo automatico non ha mai occasione di aiutare.

---

## Cosa fa "Use a second CDN (BunnyCDN)"

Attivare l'opzione inverte la priorità, così il menu non dipende più affatto dalla rete principale:

<div align="center">

<svg viewBox="0 0 720 300" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb"/>
    </marker>
  </defs>

  <rect x="20" y="105" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="135" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Browser del visitatore</text>
  <text x="95" y="157" text-anchor="middle" font-size="12" fill="#4b5563">apre il tuo negozio</text>
  <text x="95" y="175" text-anchor="middle" font-size="12" fill="#4b5563">script di avvio richiesto due volte</text>

  <rect x="290" y="30" width="200" height="80" rx="10" fill="#fafafa" stroke="#d1d5db" stroke-width="1.5"/>
  <text x="390" y="56" text-anchor="middle" font-size="14" font-weight="600" fill="#6b7280">Rete principale</text>
  <text x="390" y="76" text-anchor="middle" font-size="12" fill="#6b7280">Cloudflare</text>
  <text x="390" y="96" text-anchor="middle" font-size="11" fill="#6b7280">solo lo script di avvio</text>

  <rect x="290" y="150" width="200" height="120" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="390" y="176" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Seconda rete</text>
  <text x="390" y="196" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN — ora principale</text>
  <text x="390" y="220" text-anchor="middle" font-size="11" fill="#1e40af">script di avvio</text>
  <text x="390" y="236" text-anchor="middle" font-size="11" fill="#1e40af">motore del menu · stili · dati del menu</text>
  <text x="390" y="256" text-anchor="middle" font-size="11" fill="#1e40af">tutto ciò che segue l'avvio</text>

  <rect x="560" y="105" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="137" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Il menu compare</text>
  <text x="630" y="159" text-anchor="middle" font-size="12" fill="#047857">sulla pagina</text>

  <path d="M170,135 C230,135 230,70 290,70" fill="none" stroke="#9ca3af" stroke-width="1.5" marker-end="url(#cdnArrow2)"/>
  <text x="222" y="90" text-anchor="middle" font-size="11" fill="#6b7280">avvio (chi risponde</text>
  <text x="222" y="104" text-anchor="middle" font-size="11" fill="#6b7280">per primo)</text>

  <path d="M170,165 C230,165 230,210 290,210" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>

  <path d="M490,210 C530,210 530,150 560,150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>
  <text x="522" y="192" text-anchor="middle" font-size="11" fill="#2563eb">consegna</text>
</svg>

</div>

- Lo **script di avvio viene richiesto a entrambe le reti**, così il menu parte finché una delle due è raggiungibile da dove si trova il visitatore.
- **Tutto il resto** — il motore del menu, i suoi stili e i dati del tuo menu — viene caricato da **BunnyCDN** invece che da Cloudflare.

La rete principale resta in gioco solo come seconda possibilità per lo script di avvio; BunnyCDN diventa la fonte principale del menu vero e proprio.

---

## Quando dovresti attivarla?

Lasciala **disattivata**, a meno che non si verifichi uno di questi casi:

- **Il supporto Navi+ te l'ha chiesto.** Quando segnali un menu assente per alcuni visitatori, verifichiamo dove si trovano e quale rete riescono a raggiungere. Se il problema è la rete principale, ti chiederemo di attivare questa opzione.
- **Sai che i tuoi clienti si trovano in una regione dove Cloudflare è limitato o inaffidabile.** Se il tuo negozio serve principalmente una regione del genere, BunnyCDN è per te la scelta principale più sicura. Spunta l'opzione e faccelo sapere — saremo lieti di confermare che la modifica è corretta dal nostro lato.

Un segnale tipico: il menu compare per te e per la maggior parte dei visitatori, ma i clienti di un paese specifico o di una rete specifica segnalano che non appare mai.

---

## Perché è disattivata per impostazione predefinita

Entrambe le reti sono globali e veloci. Per la stragrande maggioranza dei negozi non c'è nulla da guadagnare cambiando, e il percorso predefinito è quello che monitoriamo più da vicino e su cui distribuiamo per prime le correzioni. L'opzione è uno strumento per i casi rari descritti sopra, non un'impostazione di prestazioni.

---

## Influisce sulla velocità della pagina?

Non è previsto alcun cambiamento percepibile. BunnyCDN serve gli stessi file dalle proprie sedi in tutto il mondo. Richiedere lo script di avvio a due reti aggiunge una piccola richiesta in più; il motore del menu e i dati del tuo menu vengono comunque caricati una sola volta, da un'unica fonte.

---

## Come attivarla o disattivarla

1. Nel pannello di amministrazione Shopify, apri **Negozio online → Temi → Personalizza**.
2. Fai clic sull'icona **Integrazioni app** nella barra laterale sinistra.
3. Trova **Navi+** ed espandilo.
4. Sotto **Advanced**, spunta o togli la spunta a **Use a second CDN (BunnyCDN)**.
5. Fai clic su **Salva**.

La modifica ha effetto al caricamento di pagina successivo. Non c'è nulla da configurare nell'app Navi+.

> Se il supporto ti ha chiesto di attivarla durante l'analisi di un problema, tienila attiva finché non confermano che il problema è risolto — poi potrai disattivarla di nuovo.
