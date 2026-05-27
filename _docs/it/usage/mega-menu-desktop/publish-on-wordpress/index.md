---
description: Pubblica un Navi+ Mega Menu (Desktop) su WordPress con il plugin Navi+ AI Menu Builder. Posizionalo in qualsiasi post, pagina, widget o page builder utilizzando il shortcode [naviwp embed_id="..."] o il blocco Gutenberg.
lang: it
layout: default
permalink: /it/docs/usage/mega-menu-desktop/publish-on-wordpress/
title: Mega Menu (Desktop) — Pubblica su WordPress
---
# Mega Menu (Desktop) — Pubblica su WordPress

A **Mega Menu (Desktop)** è un **menu di sezione** — non si ancorano alla viewport, si rendono esattamente nel punto della pagina in cui lo incorpori (tipicamente l'intestazione del sito). Su WordPress, il plugin Navi+ AI Menu Builder lo incorpora tramite shortcode o blocco Gutenberg — non modifichi mai i file del tema.

> Altre piattaforme (Wix, Squarespace, Webflow, siti personalizzati): vedi [Pubblica su Wix / Squarespace / Altri]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress-woocommerce-wix-others/).

---

## Passi

1. **Installa il plugin** — vedi [Installa il plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/).
2. **Crea il tuo Mega Menu** in **Aspetto → Naviplus Menu Builder**. Vedi [Mega Menu (Desktop) — Come usare]({{ site.baseurl }}/docs/usage/mega-menu-desktop/how-to-use/) per indicazioni sul design.
3. **Copia l'ID di incorporamento** del menu (mostrato nel pannello di pubblicazione — appare come `SF-123456789`).
4. **Inserisci il menu** dove vuoi nella pagina (sezione successiva).

---

## Inserisci il menu — tre opzioni

### Opzione 1 — Shortcode (funziona ovunque)

Incolla questo in qualsiasi post, pagina o widget compatibile con shortcode:

```text
[naviwp embed_id="SF-123456789"]
```

Per un Mega Menu che dovrebbe apparire nell'**intestazione del sito** su ogni pagina, il posto più pulito è un'area widget dell'intestazione (se il tuo tema ne fornisce una). Se no, usa un blocco / parte del template dell'intestazione globale (temi di Full Site Editing), o torna all'Opzione 3 qui sotto.

### Opzione 2 — Blocco Gutenberg

1. Nell'editor dei blocchi clicca **+ → Naviplus Menu Builder**.
2. Incolla l'**ID di incorporamento** nella barra laterale del blocco.

Puoi anche inserire un blocco **Shortcode** generico con `[naviwp embed_id="SF-..."]`.

### Opzione 3 — Page builders (Elementor, Divi, Bricks, Oxygen)

Usa il widget **Shortcode** del builder e incolla `[naviwp embed_id="SF-..."]`. Se preferisci usare HTML grezzo, inserisci direttamente il div di incorporamento:

```html
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
```

Il plugin carica già il runtime di Navi+, quindi il menu si rende all'interno di quel contenitore.

### Opzione 4 — Selettore CSS (posizionamento automatico dall'app Navi+)

Invece di posizionare manualmente uno shortcode, puoi lasciare che Navi+ inserisca o sostituisca automaticamente un elemento utilizzando un Selettore CSS — configurato interamente dall'app Navi+.

#### Comprendere il Selettore CSS

Un Selettore CSS mira a un elemento HTML specifico sulla tua pagina. Navi+ lo utilizza per sapere esattamente **dove** posizionare il tuo menu — inserire prima, inserire dopo o sostituire un elemento esistente.

Per trovare il giusto Selettore CSS, usa:
- [Modalità Debug](/docs/usage/debug-mode-find-css-selectors/) — passa il mouse su qualsiasi elemento e copia istantaneamente il suo selettore
- [Browser DevTools](/docs/usage/general/find-css-selector/) — metodo manuale tramite l'ispezione del browser

#### Tre opzioni di pubblicazione

Nell'app Navi+: clicca **Pubblica sul sito web** → attiva **"Pubblica menu tramite metodo Inserisci/Sostituisci"** → inserisci il tuo Selettore CSS e scegli un'opzione:

<details><summary>Opzione A: Inserisci Prima</summary>
<p>Inserisce il menu immediatamente <strong>prima</strong> dell'elemento selezionato.</p>
<p><strong>Esempio:</strong> <code>main</code> → il menu appare sopra l'area del contenuto principale.</p>
<p>Selettori comuni per i temi WordPress:</p>
<ul>
<li><code>main</code> — la maggior parte dei temi</li>
<li><code>#main</code> — Twenty Twenty, Astra, OceanWP</li>
<li><code>.site-main</code> — molti temi</li>
</ul>
</details>

<details><summary>Opzione B: Inserisci Dopo</summary>
<p>Inserisce il menu immediatamente <strong>dopo</strong> l'elemento selezionato.</p>
<p><strong>Esempio:</strong> <code>header</code> → il menu appare appena sotto l'intestazione.</p>
<p>Questa è la configurazione più comune per un Mega Menu desktop.</p>
<p>Selettori comuni per i temi WordPress:</p>
<ul>
<li><code>header</code> — la maggior parte dei temi</li>
<li><code>.site-header</code> — OceanWP, Astra</li>
<li><code>#masthead</code> — Twenty Twenty-One e temi WordPress predefiniti</li>
<li><code>#header</code> — Divi</li>
</ul>
</details>

<details><summary>Opzione C: Sostituisci</summary>
<p>Sostituisce completamente l'elemento selezionato con il menu Navi+. L'elemento originale è nascosto e Navi+ prende il suo posto.</p>
<p><strong>Esempio:</strong> <code>.main-navigation</code> → la navigazione predefinita del tema è nascosta e sostituita dal tuo Mega Menu Navi+.</p>
<p>Selettori comuni per i temi WordPress:</p>
<ul>
<li><code>.main-navigation</code> — Twenty Twenty-One e molti temi WordPress predefiniti</li>
<li><code>#site-navigation</code> — alcuni temi WordPress predefiniti</li>
<li><code>.nav-primary</code> — vari temi</li>
</ul>
<p><strong>Nota:</strong> Un breve lampeggio del menu originale potrebbe apparire mentre Navi+ si carica. Usa l'opzione di ottimizzazione UX integrata nelle impostazioni di pubblicazione per nascondere immediatamente l'elemento originale.</p>
</details>

#### Targeting specifico per dispositivo

Aggiungi un suffisso per applicare il selettore solo su un dispositivo specifico:

| Suffisso | Si applica a |
|----------|--------------|
| `(M)` | Solo mobile |
| `(D)` | Solo desktop |
| *(nessuno)* | Entrambi |

Esempio: `header(D)` — inserisce solo su desktop.

---

## Considerazioni per dispositivi mobili

Un Mega Menu desktop è, per definizione, un layout desktop-first. Su schermi piccoli di solito non dovrebbe rendere affatto — abbinalo a un [Mega Menu (Mobile)]({{ site.baseurl }}/docs/usage/mega-menu-mobile/) o [Slide Menu]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/) e usa regole di visualizzazione per nascondere ciascuno sull'altro breakpoint.

Nell'editor apri **Regole di visualizzazione → Dispositivo** e limita il Mega Menu (Desktop) a **solo desktop**.

---

## Aggiornare il menu in seguito

Modifica il menu nell'amministrazione di WordPress (o nell'app web di Navi+). Le modifiche si applicano al successivo caricamento della pagina front-end — non è necessario svuotare la cache di WordPress, poiché i menu vengono recuperati in tempo reale dal browser.

---

## Correlati

- [WordPress / WooCommerce — panoramica]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/)
- [Pubblica i tuoi menu su WordPress]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)
- [Mega Menu (Desktop) — FAQ]({{ site.baseurl }}/docs/usage/mega-menu-desktop/faq/)
