---
description: Pubblica i menu Navi+ su WordPress utilizzando il plugin Navi+ AI Menu Builder — i menu sticky vengono visualizzati automaticamente su tutto il sito, mentre i menu di sezione vengono posizionati tramite il shortcode [naviwp] o il blocco Gutenberg.
lang: it
layout: default
permalink: /it/docs/integrations/wordpress-woocommerce/publish-menus/
title: Pubblica i tuoi menu su WordPress
---
# Pubblica i tuoi menu su WordPress

Navi+ ha due modalità di pubblicazione — **sticky** e **section** — e il plugin WordPress supporta entrambe. La modalità applicabile dipende dal tipo di menu.

| Tipo di menu | Modalità | Dove appare |
| --- | --- | --- |
| Tab Bar | Sticky | Ancorato alla viewport, su tutto il sito |
| FAB | Sticky | Pulsante flottante, su tutto il sito |
| Slide Menu | Sticky / contestuale | Attivato toccando qualsiasi elemento |
| Mega Menu (Desktop) | Section | Nella posizione in cui lo incorpori |
| Mega Menu (Mobile) | Section | Nella posizione in cui lo incorpori |
| Grid Menu | Section | Nella posizione in cui lo incorpori |

Vedi [Pubblica panoramica]({{ site.baseurl }}/docs/publish/publish-overview/) per il confronto completo sticky-vs-section.

---

## Menu sticky — Tab Bar, FAB, Slide

Con il plugin installato e il tuo primo menu salvato, i menu sticky contrassegnati come **Pubblicati** nell'editor vengono visualizzati automaticamente su ogni pagina del tuo sito.

Non è necessario inserire nulla. Le regole di visualizzazione (dispositivo, modello URL, stato di accesso) vengono valutate dal runtime di Navi+ nel browser.

### Attivazione dell'incorporamento su tutto il sito

L'amministratore del plugin include un interruttore per l'incorporamento su tutto il sito:

- **On (predefinito):** il runtime viene iniettato in `<head>` di ogni pagina; i menu sticky vengono visualizzati su tutto il sito.
- **Off:** il runtime viene caricato solo su pagine che includono un `[naviwp]` shortcode o blocco. Usa questa opzione se desideri che i menu appaiano su un piccolo insieme di pagine (ad es. pagine di atterraggio solo per mobile).

Se un menu sticky non appare, controlla:

- Il menu è **Pubblicato** nell'editor (non in bozza).
- Le regole di visualizzazione corrispondono alla pagina che stai testando.
- Il runtime è caricato — vedi la [sezione di verifica]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/#4-verify-the-connection).

---

## Menu di sezione — Mega Menu, Grid

I menu di sezione devono essere posizionati in un punto specifico in una pagina. Il plugin offre tre modi.

### Metodo 1 — Shortcode (raccomandato)

In qualsiasi post, pagina o widget compatibile con shortcode:

```text
[naviwp embed_id="SF-123456789"]
```

Sostituisci `SF-123456789` con l'**ID di incorporamento** del tuo menu (mostrato nell'editor nel pannello di pubblicazione del menu).

### Metodo 2 — Blocco Gutenberg

Nell'editor a blocchi:

1. Clicca **+** per inserire un nuovo blocco.
2. Cerca **Naviplus Menu Builder**.
3. Inserisci il blocco e incolla l'**ID di incorporamento** del tuo menu nella barra laterale del blocco.

Il blocco visualizza un segnaposto vuoto nell'editor e viene sostituito dal menu live sul front end. Puoi anche inserire un blocco **Shortcode** e incollare `[naviwp embed_id="..."]` — funziona in modo identico.

### Metodo 3 — All'interno di un blocco Paragrafo

Il plugin riconosce `[naviwp ...]` shortcode incollati direttamente in un blocco Paragrafo; non è necessario passare prima a un blocco Shortcode.

### Metodo 4 — Costruttori di pagine (Elementor, Divi, Bricks, Oxygen)

Usa il widget **Shortcode** del costruttore e incolla `[naviwp embed_id="..."]`. Se un costruttore non ha un widget Shortcode, un widget **HTML** con il div di incorporamento funziona ugualmente:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

Il plugin carica già il runtime di Navi+, quindi il menu viene visualizzato all'interno di quel contenitore.

---

## Un token, molti menu

Il plugin carica il runtime una volta per pagina e recupera ogni menu — sticky o section — dallo stesso servizio Navi+. Per smettere di pubblicare un menu, passalo a **Bozza** nell'editor; non è richiesta alcuna modifica a WordPress.

---

## Plugin di caching (WP Rocket, W3 Total Cache, LiteSpeed Cache)

Il runtime di Navi+ viene fornito da un CDN ed è amichevole con la cache. Non è necessario escluderlo dalla cache delle pagine. Dopo aver aggiornato i menu nell'editor, le modifiche appaiono al successivo caricamento della pagina — non è necessario svuotare la cache di WordPress, poiché i menu vengono recuperati in tempo reale dal browser, non incorporati nell'HTML.

Se vedi output obsoleto, di solito è la cache del browser. Un hard reload (Cmd/Ctrl + Shift + R) la cancella.
