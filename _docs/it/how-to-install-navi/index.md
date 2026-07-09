---
description: Installa Navi+ su Shopify o qualsiasi sito web, e comprendi i tre modi in cui Navi+ distribuisce i menu — mobile, posizionato e attivato.
layout: default
permalink: /it/docs/how-to-install-navi/
title: Installa Navi+
---
# Installa Navi+

## Passaggio 1 — Installa

**Shopify:** Installa da [Shopify App Store](https://apps.shopify.com/pronavi-navigation-design). L'app si apre automaticamente dopo l'installazione.

**Wix:** Installa Navi+ da [Wix App Market](https://www.wix.com/app-market). Si apre nella tua dashboard Wix e si incorpora automaticamente sul tuo sito live — nessun codice da copiare, nessuno snippet di incorporamento. Autenticazione e fatturazione vengono gestite tramite Wix.

**Altre piattaforme** (WordPress, WooCommerce, Webflow, Squarespace o qualsiasi sito web):
1. Crea un account gratuito su [dash.naviplus.app](https://dash.naviplus.app)
2. Aggiungi il tuo dominio del sito web
3. Copia il tuo snippet di incorporamento — lo userai nel Passaggio 2

---

## Passaggio 2 — Comprendi come verrà distribuito il tuo menu

Navi+ utilizza **tre diversi metodi di distribuzione** a seconda del tipo di menu. Comprenderlo in anticipo fa risparmiare tempo durante la configurazione.

### 1. Menu mobile — Tab Bar & FAB

Tab Bar e FAB sono **menu sticky** che galleggiano in cima alla tua pagina in una posizione fissa. Non si scorrono mai via.

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">📍</div>
    <strong>Posizione</strong><br>Bordo superiore, inferiore, sinistro o destro dello schermo
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔼</div>
    <strong>Nascondi automaticamente allo scorrimento</strong><br>Si nasconde durante lo scorrimento verso il basso, riappare quando si scorre verso l'alto
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">👇</div>
    <strong>Mostra durante lo scorrimento verso il basso</strong><br>Nascosto per impostazione predefinita, appare solo quando l'utente scorre verso il basso — risparmi spazio sullo schermo
  </div>
</div>

**Un caso d'uso comune:** consolida altri elementi mobile — WhatsApp, Crisp, Messenger, widget di chat dal vivo — in elementi di menu Navi+. Questo libera spazio sullo schermo e rimuove il disordine di più icone mobile che si sovrappongono l'una sull'altra.

### 2. Menu posizionati — Mega Menu & Grid Menu

Mega Menu e Grid Menu devono essere **posizionati in una posizione specifica** sulla tua pagina. Esistono diversi modi per farlo:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🎯</div>
    <strong>Selettore CSS</strong><br>Indica Navi+ a qualsiasi elemento sulla tua pagina. Inserisci prima, dopo o sostituisci completamente — è così che Mega Menu può sostituire completamente la navigazione del tuo tema.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🧩</div>
    <strong>Sezione Shopify</strong><br>Usa un App Block all'interno del Theme Customizer per rilasciare il menu in qualsiasi sezione del tuo layout — nessun codice necessario.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🖥️</div>
    <strong>Codice di incorporamento</strong><br>Incolla uno snippet breve direttamente nell'HTML della tua pagina nel punto esatto in cui il menu dovrebbe apparire.
  </div>
</div>

> **Selettore CSS** è un modo per identificare qualsiasi punto su una pagina web — è come i browser indirizzano elementi specifici. Navi+ lo utilizza per sapere esattamente dove iniettare il tuo menu. Non hai bisogno di scrivere CSS da solo; Navi+ ha un selettore visivo che trova il selettore per te.

### 3. Menu attivati — Slide Menu

Slide Menu **non appare da solo**. Rimane nascosto finché non viene attivato:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">☰</div>
    <strong>Elemento esistente</strong><br>Un utente fa clic su qualcosa che è già sulla tua pagina — come l'icona hamburger del tuo tema
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">⚡</div>
    <strong>Trigger personalizzato</strong><br>Qualsiasi elemento sulla tua pagina — designato dal suo selettore CSS
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔗</div>
    <strong>Un altro menu Navi+</strong><br>Un elemento Tab Bar o FAB che apre lo Slide Menu quando viene cliccato
  </div>
</div>

Questo rende lo Slide Menu flessibile — può sostituire la tua navigazione esistente senza aggiungere visivamente nulla di nuovo alla pagina.

---

## Passaggio 3 — Crea il tuo primo menu

Una volta installato, vai al dashboard e crea il tuo primo menu. → [Il tuo primo menu (guida rapida di 5 minuti)](/it/docs/getting-started/your-first-menu/)
