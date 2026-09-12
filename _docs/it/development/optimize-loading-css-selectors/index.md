---
description: "Sintassi dei selettori CSS per i trigger di menù scheletro e l'integrazione di tema — ottimizzazione del tempo di caricamento del menù e dell'UX con formati di selettore specifici del dispositivo e etichettati."
layout: default
permalink: /it/docs/development/optimize-loading-css-selectors/
title: Ottimizzazione della velocità e UX — sintassi dei selettori CSS
---
# Ottimizzazione della velocità e UX — sintassi dei selettori CSS

In **Theme Editor → App embeds → Store Connector**, sotto il gruppo **Speed & UX optimization**, troverai 2 campi di selettore CSS che aiutano il tuo menù a caricarsi in modo fluido — nessuna necessità di scrivere CSS/JS personalizzato come prima. Questa guida spiega la sintassi per entrambi i campi.

---

## 2 campi, 2 scopi diversi

| Campo | Utilizzato per | Meccanismo |
|---|---|---|
| **Mobile Menu CSS Selector** | Pulsante di attivazione del menù (hamburger) quando si utilizza il binding degli eventi di selettore CSS | Fare clic sul pulsante PRIMA che Navi+ si carichi → mostra un menù scheletro immediatamente (feedback istantaneo) invece di un'attesa silenziosa. Man mano che Navi+ si carica, lo scheletro cede il passo al menù reale quando arrivano i contenuti. |
| **CSS Selector for Mega Menu Replacement** | Area menù del tema originale, quando Navi+ viene eseguito in modalità Replacement | Copre quell'area con un effetto di caricamento shimmer mentre si aspetta che Navi+ si carichi, prevenendo il contenuto originale dal sfarfallare quando sostituito. |

Entrambi i campi sono **facoltativi** — lasciali vuoti e nulla cambia dal comportamento predefinito.

---

## Sintassi comune — selettori multipli separati da virgola

```
selector-1, selector-2, selector-3
```

Separa più selettori in un singolo campo usando virgole `,` o punti e virgola `;`. Le virgole/punti e virgola all'interno di parentesi `(...)`, parentesi quadre `[...]` o stringhe quotate `"..."` / `'...'` (come nei selettori di attributo `[data-value="a,b"]`) vengono riconosciute nel contesto e non verranno confuse con i delimitatori di selettori.

---

## Sintassi Legacy — suffissi `(M)` / `(D)`

Funziona in **entrambi i campi**. Aggiungi un suffisso subito dopo il selettore per limitare per dispositivo:

```
.hamburger-mobile (M)
.hamburger-desktop (D)
.trigger-all-devices
```

| Suffisso | Si applica a |
|---|---|
| `(M)` | Solo Mobile |
| `(D)` | Solo Desktop |
| *(nessun suffisso)* | Tutti i dispositivi |

---

## Sintassi Labeled — solo campo "Mobile Menu CSS Selector"

Il campo **Mobile Menu CSS Selector** supporta una sintassi avanzata per personalizzare l'aspetto del menù scheletro — il campo **Mega Menu (Replacement mode)** NON supporta questo, accettando solo `(M)` / `(D)`.

```
.hamburger (Device:M | Color:#1a1a1a | Direction:left | Width:85%)
```

Identificato dai due punti `:` all'interno di `(...)` — se sono presenti due punti, è il formato Labeled; altrimenti, è Legacy (`(M)` / `(D)`). I parametri sono separati da pipe `|`:

| Parametro | Valori validi | Predefinito quando omesso/non valido |
|---|---|---|
| `Device` | `M` o `D` (elencare entrambi `M,D` = nessuna restrizione dispositivo, come omettere) | Tutti i dispositivi |
| `Color` | Codice CSS esadecimale: `#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa` | `#fff` |
| `Direction` | `left` o `right` — direzione dello slide-out dello scheletro | `left` |
| `Width` | Percentuale `NN%` o pixel `NNpx` (intero o decimale) | `85%` |

**Esempio:**
```
.hamburger (Device:M | Color:#1a1a1a | Width:320px)
```
→ Si applica solo su Mobile, sfondo scheletro `#1a1a1a`, larghezza fissa `320px`.

### Tolleranza ai guasti per parametro

- Lo spazio bianco e le maiuscole/minuscole nelle chiavi e nei valori vengono normalizzati prima del confronto (`Color: #1A1A1A` e `color:#1a1a1a` sono identici).
- Un formato parametro non valido (ad es., `Color:red` — non esadecimale) o chiave sconosciuta (errore di battitura, nome inesistente) viene **silenziosamente ignorato solo per quel parametro**, utilizzando il valore predefinito — non romperà altri parametri o altri selettori nello stesso campo.

---

## Selettori non validi (errori di sintassi CSS)

Se un selettore nel campo **Mobile Menu CSS Selector** ha un vero errore di sintassi CSS (diverso dai parametri Labeled non validi — questo è un selettore che non può essere analizzato), Navi+ registra un avviso nella console del browser (F12 → Console), puntando direttamente al campo:

```
[Navi+] INVALID TRIGGER CSS SELECTOR — this one was skipped
selector      : <selettore non valido>
browser error : <messaggio di errore del browser>
Fix it in Theme Editor → App embeds → Store Connector →
Mobile Menu CSS Selector.
```

Il selettore non valido viene ignorato da solo; gli altri selettori validi nel campo continuano a funzionare normalmente.

---

## Esempi pratici

### 1. Proteggi l'hamburger predefinito, nessuna personalizzazione necessaria

```
#Details-menu-drawer-container
```
I clic precoci ottengono comunque feedback istantaneo (scheletro predefinito), nessuna necessità di dichiarare Device/Color/Direction/Width.

### 2. Solo hamburger Mobile, scorrimento da destra, colore del brand

```
.hamburger-mobile (Device:M | Color:#0f172a | Direction:right | Width:90%)
```

### 3. Sostituisci l'area menù originale del tema su entrambi i dispositivi

```
nav.header__inline-menu
```
(nel campo **CSS Selector for Mega Menu Replacement**, nessun suffisso = si applica a tutti i dispositivi)

### 4. Combina più selettori, limiti specifici del dispositivo

```
.mega-menu (D), .mobile-nav-wrapper (M)
```
