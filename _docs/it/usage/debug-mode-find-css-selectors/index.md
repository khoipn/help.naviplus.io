---
description: La modalità debug è un insieme di strumenti leggeri integrati nella libreria Navi+ che ti aiuta a lavorare in modo più efficace con i menu Navi+.
lang: it
layout: default
permalink: /it/docs/usage/debug-mode-find-css-selectors/
title: Modalità debug - Trova selettori CSS
---
# Modalità debug - Trova selettori CSS

La modalità debug è un insieme di strumenti leggeri integrati nella libreria Navi+ che ti aiuta a lavorare in modo più efficace con i menu Navi+.

### 1. Trova selettori CSS

Per abilitare la modalità debug, utilizza il seguente formato URL:
`yourdomain.com#navidebug-on`

Il tuo sito web passerà alla Modalità Debug di Navi+. Passa il mouse su diverse aree del sito web per visualizzare i loro corrispondenti selettori CSS. Muovi il cursore per localizzare con precisione l'area target desiderata.

Si prega di prestare attenzione alle scorciatoie da tastiera qui sotto per lavorare in modo più efficiente.

**Scorciatoia 1.** Copiare un selettore CSS

* Premi **⌘+C** su MacOS o **Ctrl+C** su Windows per copiare il selettore CSS selezionato.

Puoi quindi incollarlo nelle impostazioni del **Publish Menu** per:

* Mega Menu / Grid Menu: per inserire il menu prima, dopo o sostituire il selettore CSS target
* Slide Menu: per attivare il menu a scorrimento quando il selettore CSS target viene cliccato o toccato

**Scorciatoia 2.** Navigare tra i livelli di selettore

* Premi [↑/←], o Backspace per passare a un selettore di livello genitore
* Premi [↓/→] per passare a un selettore di livello figlio

**Suggerimenti importanti:** Nella maggior parte dei casi, non troverai immediatamente il selettore CSS perfetto. Basandosi sull'esperienza, è spesso più facile:

1. Iniziare selezionando un selettore di livello figlio
2. Poi salire di 1–2 livelli genitori (un evidenziatore visivo apparirà sul tuo sito web)
3. Copiare il selettore usando ⌘+C (Ctrl+C)
4. Incollarlo nella configurazione del menu e testare

A volte, potrebbe essere necessario ripetere questo processo più volte quando si inseriscono, sostituiscono o collegano eventi di menu ai selettori CSS per ottenere l'esperienza utente desiderata.

#### 1.1. Trova il selettore CSS su Desktop

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FlstMiQTp0fQqvJ89jXhD%2FFrame%20210.webp?alt=media&#x26;token=95d6a152-b58b-4894-9cdc-150200fae5e1" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fuc7fc7CicJcQ3XNvwDVA%2FFrame%20211.webp?alt=media&#x26;token=84a5c3ad-04bf-4b4e-9c8c-bc334f7f4646" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FuE3IlMcHedAfwQR98YhM%2FFrame%20212.webp?alt=media&#x26;token=e02c2aa2-0792-4811-8005-46a5b7b0b9fe" alt=""><figcaption></figcaption></figure>

#### 1.2. Trova il selettore CSS su Mobile

Per trovare un selettore CSS su mobile, abilita la modalità Mobile (Responsive) nel tuo browser.
Poi fai clic destro in qualsiasi punto della pagina e seleziona:

* Chrome: Ispeziona
* Safari: Ispeziona elemento
* Firefox: Ispeziona
* Edge: Ispeziona / Ispeziona elemento

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FK7F58NVYCerBTqG9EWjB%2FFrame%20213.webp?alt=media&#x26;token=2f2c059a-1346-446d-a19f-e2998050791a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FsNvXhBMniymbZ1tD9c4p%2FFrame%20214.webp?alt=media&#x26;token=257f082d-ff6b-4ce0-8eaa-6160a697a67e" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FJAZm1dPEZrfeqtpNXA8O%2FFrame%20215.webp?alt=media&#x26;token=2847a4ef-e298-4986-9367-36a6abf914d8" alt=""><figcaption></figcaption></figure>
