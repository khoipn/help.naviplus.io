---
description: 'Navi+ supporta completamente il multi-lingua in due parti:'
lang: it
layout: default
permalink: /it/docs/usage/general/apply-multi-language/
title: Applica multi-lingua
---
# Applica multi-lingua

Navi+ supporta completamente il multi-lingua in due parti:

**1) Usa la sintassi per visualizzare automaticamente la lingua corretta.**

Per esempio, immagina di avere un Tabbar di Navi+ mostrato sul tuo sito web con 3 lingue: English (predefinito), French e Vietnamese. Il codice breve per il francese è `fr` e per il vietnamita è `vi`.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F6k6V0wCgNOrg7o30S7PT%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=5eb3293f-9f55-4917-87e1-dacff684ca9e" alt=""><figcaption></figcaption></figure>

Per visualizzare l'elemento di menu **Home** nella lingua giusta, usa questa sintassi:

```
Home <fr: Maison> <vi: Trang chủ>
```

Quando il tuo Tabbar è visualizzato, Navi+ controllerà automaticamente la lingua corrente.

* Se il predefinito è l'inglese, mostra **Home**.
* Se è selezionato il francese, mostra **Maison**.
* Se è selezionato il vietnamita, mostra **Trang chủ**.

Questo funziona sia per i campi **description** che **link-to**.

2\) Crea un menu di selezione della lingua in Navi+

Navi+ supporta una sintassi speciale che ti consente di cambiare lingua direttamente dai tuoi elementi di menu.

* **Passo 1:** (Opzionale) Aggiungi icone di bandiera se lo desideri. Puoi scaricare icone di bandiera da siti web come [Flaticon](https://www.flaticon.com "Flaticon") (Per esempio: <https://www.flaticon.com/authors/flags/rectangular?author_id=1&type=standard>).
* **Passo 2:** Usa la seguente sintassi per cambiare lingua:

```
open:ChangeLanguage(fr)
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FdTn5Nk2ETEUXO7unkIu9%2FHelp.MenuTree.1.1.2-1.png?alt=media&#x26;token=e1f13362-de09-4438-ad5a-a075a9750b7d" alt=""><figcaption></figcaption></figure>

---

# Istruzioni per l'agente: Consultazione di questa documentazione

Se hai bisogno di ulteriori informazioni che non sono direttamente disponibili in questa pagina, puoi consultare la documentazione dinamicamente ponendo una domanda.

Esegui una richiesta HTTP GET sull'URL della pagina corrente con il parametro di query `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/usage/general/apply-multi-language.md?ask=<question>
```

La domanda dovrebbe essere specifica, autonoma e scritta in linguaggio naturale.
La risposta conterrà una risposta diretta alla domanda e estratti e fonti pertinenti dalla documentazione.

Usa questo meccanismo quando la risposta non è esplicitamente presente nella pagina corrente, hai bisogno di chiarimenti o contesto aggiuntivo, o vuoi recuperare sezioni di documentazione correlate.
