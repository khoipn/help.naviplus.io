---
description: 'Installa Navi+ su Shopify o su qualsiasi sito web e comprendi i tre modi in cui Navi+ distribuisce i menu: galleggiante, posizionato e attivato.'
lang: it
layout: default
permalink: /it/docs/how-to-install-navi/
title: Installa Navi+
---
# Installa Navi+

## Passo 1 — Installa

**Shopify:** Installa dal [Shopify App Store](https://apps.shopify.com/pronavi-navigation-design). L'app si apre automaticamente dopo l'installazione.

**Altre piattaforme** (WordPress, WooCommerce, Wix, Webflow, Squarespace o qualsiasi sito web):
1. Crea un account gratuito su [dash.naviplus.app](https://dash.naviplus.app)
2. Aggiungi il dominio del tuo sito web
3. Copia il tuo snippet di incorporamento — lo userai nel Passo 2

---

## Passo 2 — Comprendere come verrà distribuito il tuo menu

Navi+ utilizza **tre diversi metodi di distribuzione** a seconda del tipo di menu. Comprendere questo in anticipo fa risparmiare tempo durante la configurazione.

### 1. Menu galleggianti — Tab Bar & FAB

Tab Bar e FAB sono **menu appiccicosi** che galleggiano sopra la tua pagina in una posizione fissa. Non scorrono mai via.

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">📍</div>
    <strong>Posizione</strong><br>Parte superiore, inferiore, sinistra o destra dello schermo
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔼</div>
    <strong>Auto-nascondi durante lo scorrimento</strong><br>Si nasconde quando si scorre verso il basso, riappare quando si scorre di nuovo verso l'alto
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">👇</div>
    <strong>Mostra durante lo scorrimento verso il basso</strong><br>Nascosto per impostazione predefinita, appare solo quando l'utente scorre verso il basso — risparmia spazio sullo schermo
  </div>
</div>

**Un caso d'uso comune:** consolidare altri elementi galleggianti — WhatsApp, Crisp, Messenger, widget di chat dal vivo — in elementi di menu di Navi+. Questo libera spazio sullo schermo e rimuove il disordine di più icone galleggianti sovrapposte.

### 2. Menu posizionati — Mega Menu & Grid Menu

Mega Menu e Grid Menu devono essere **posizionati in un luogo specifico** sulla tua pagina. Ci sono diversi modi per farlo:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🎯</div>
    <strong>Selettore CSS</strong><br>Indica a Navi+ qualsiasi elemento sulla tua pagina. Inserisci prima, dopo o sostituiscilo completamente — questo è come Mega Menu può sostituire completamente la navigazione esistente del tuo tema.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🧩</div>
    <strong>Sezione Shopify</strong><br>Usa un App Block all'interno del Theme Customizer per inserire il menu in qualsiasi sezione del tuo layout — non è necessario alcun codice.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🖥️</div>
    <strong>Codice di incorporamento</strong><br>Incolla un breve snippet direttamente nell'HTML della tua pagina nel punto esatto in cui dovrebbe apparire il menu.
  </div>
</div>

> **Selettore CSS** è un modo per identificare qualsiasi punto su una pagina web — è così che i browser mirano a elementi specifici. Navi+ lo utilizza per sapere esattamente dove iniettare il tuo menu. Non è necessario scrivere CSS da solo; Navi+ ha un selettore visivo che trova il selettore per te.

### 3. Menu attivati — Slide Menu

Slide Menu **non appare da solo**. Rimane nascosto fino a quando qualcosa non lo attiva:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">☰</div>
    <strong>Elemento esistente</strong><br>Un utente clicca su qualcosa già presente sulla tua pagina — come l'icona hamburger del tuo tema
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">⚡</div>
    <strong>Attivatore personalizzato</strong><br>Qualsiasi elemento sulla tua pagina — designato dal suo Selettore CSS
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔗</div>
    <strong>Un altro menu Navi+</strong><br>Un elemento Tab Bar o FAB che apre il Slide Menu quando viene cliccato
  </div>
</div>

Questo rende Slide Menu flessibile — può sostituire la tua navigazione esistente senza aggiungere visivamente nulla di nuovo alla pagina.

---

## Passo 3 — Crea il tuo primo menu

Una volta installato, vai alla dashboard e crea il tuo primo menu. → [Il tuo primo menu (guida rapida di 5 minuti)](/docs/getting-started/your-first-menu/)
