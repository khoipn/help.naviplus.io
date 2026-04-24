---
description: Per impostazione predefinita, Navi+ controlla l'URL della pagina corrente per mostrare lo stato attivo nel menu (utilizzando uno sfondo grigio). Questo aiuta i tuoi clienti a navigare più facilmente.
lang: it
layout: default
permalink: /it/docs/frequently-asked-questions/customize-user-interface-ui/remove-menu-item-active-state/
title: Rimuovere lo stato attivo dell'elemento di menu?
---
# Rimuovere lo stato attivo dell'elemento di menu?

Per impostazione predefinita, Navi+ controlla l'URL della pagina corrente per mostrare lo stato attivo nel menu (utilizzando uno sfondo grigio). Questo aiuta i tuoi clienti a navigare più facilmente.

Tuttavia, lo stato attivo non è sempre necessario, specialmente su schermi desktop ampi dove ci sono altri modi per indicare "dove ti trovi," come i breadcrumb. A volte, potresti voler rimuovere lo stato attivo per rendere il menu più pulito.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FAQCfjosVopNC9mXDDbII%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=1167aaa9-c22e-4102-9eb9-6e5ee10dc14a" alt=""><figcaption></figcaption></figure>

Ecco come farlo:

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyaI6k6GmW3A5CGipYz1p%2FCSS.1.1.png?alt=media&#x26;token=1ddf87db-9f58-4109-9886-441efd8e8f24" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FXRcp2647QfYG9b0JyS1t%2FCSS.1.2.png?alt=media&#x26;token=742f4ac0-50c1-48ec-bf8f-ccc7d89818cc" alt=""><figcaption></figcaption></figure>

Metodo 1: Se vuoi applicarlo solo a questo menu, il codice CSS è il seguente (incollalo nella casella Foglio di stile interno / CSS):

```
ul li.navi-active {
  background: initial;
}
```

Spiegazione: Questo aggiunge una regola CSS come `#SF-123456789 ul li.navi-active { background: initial; }` alla pagina, applicandosi solo a questo menu (con embedID `SF-123456789`) e non influenzando altri menu.

Metodo 2: Se vuoi rimuovere tutti gli effetti attivi su tutti i menu Navi+, usa il seguente codice (incollalo nella casella Foglio di stile globale / CSS):

```
.naviItem ul li.navi-active {
  background: initial;
}
```

---

# Istruzioni per l'agente: Consultazione di questa documentazione

Se hai bisogno di ulteriori informazioni che non sono direttamente disponibili in questa pagina, puoi consultare la documentazione dinamicamente ponendo una domanda.

Esegui una richiesta HTTP GET sull'URL della pagina corrente con il parametro di query `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/customize-user-interface-ui/remove-menu-item-active-state.md?ask=<question>
```

La domanda dovrebbe essere specifica, autonoma e scritta in linguaggio naturale.
La risposta conterrà una risposta diretta alla domanda e estratti e fonti pertinenti dalla documentazione.

Utilizza questo meccanismo quando la risposta non è esplicitamente presente nella pagina corrente, hai bisogno di chiarimenti o contesto aggiuntivo, o vuoi recuperare sezioni di documentazione correlate.
