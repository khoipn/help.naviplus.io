---
description: Isso se refere ao problema de preenchimento inferior sob a Barra Inferior quando um site Shopify usando Navi+ é aberto dentro do Google App no iPhone.
lang: pt-br
layout: default
permalink: /pt-br/docs/limitation/shopify-bottom-bar-issue-on-google-app-iphone/
title: Problema da Barra Inferior do Shopify no Google App (iPhone)
---
# Problema da Barra Inferior do Shopify no Google App (iPhone)

Isso se refere ao problema de preenchimento inferior sob a Barra Inferior quando um site Shopify usando **Navi+** é aberto dentro do Google App no iPhone.

Ao acessar um site Shopify que usa **Navi+** (ou qualquer aplicativo com um menu inferior fixo, botões flutuantes, etc.), os usuários que abrem o site **dentro do Google App no iPhone** podem, às vezes, ver um espaço em branco incomum aparecendo na parte inferior da tela.

Esse problema ocorre apenas no Google App e **não é causado pelo Navi+**. Abaixo está uma explicação clara e simples.

***

### 1. Onde o problema ocorre?

O problema ocorre apenas quando:

* O site está rodando em **Shopify**
* Há uma **Barra Inferior** (Navi+ ou qualquer outro aplicativo), ou um **Botão de Ação Flutuante (FAB)** como widgets de chat, botões de fidelidade, etc.
* O usuário abre o site **via o Google App no iPhone** (geralmente pesquisando e tocando no site)

O problema **não** ocorre ao abrir o site usando:

* Safari (navegador padrão do iPhone)
* Chrome
* Facebook Browser
* TikTok Browser
* …

Isso confirma que o problema vem do Google App no iOS.

***

### 2. Por que os sites Shopify usando Navi+ são mais propensos a experimentar esse problema?

O Google App usa uma maneira especial de renderizar sites (WebView da Apple). Esse mecanismo de renderização tem um problema de longa data ao calcular a altura real da tela em sites que têm:

* Uma Barra Inferior fixa
* HTML ou UI gerados dinamicamente por JavaScript
* Layouts complexos como Shopify (múltiplas camadas de contêiner e seções em constante mudança)

Quando essas condições ocorrem, o Google App pode calcular incorretamente a altura real da viewport e criar um **preenchimento inferior falso**.

➡️ É por isso que o problema aparece com mais frequência em sites Shopify usando Navi+ ou outros aplicativos de barra inferior/FAB.

***

### 3. Isso é um problema do Navi+?

Não.
Isso é um bug inerente do **Google App no iPhone**, e existe há muitos anos.

Mesmo se o Navi+ estiver desativado, outros aplicativos Shopify que exibem barras inferiores ou FABs ainda experimentam o mesmo problema dentro do Google App.

***

### 4. Evidências de que esse problema não pode ser totalmente corrigido

* Muitos aplicativos Shopify que incluem uma barra inferior ou FAB experimentam o mesmo problema exato.
* Mesmo alguns recursos integrados do Shopify mostram comportamento semelhante dentro do Google App.
* Este é um problema bem conhecido na comunidade de desenvolvedores, mas o Google App não o abordou.
* O problema desaparece assim que o usuário **toca em qualquer lugar na tela** → o Google App força uma nova renderização e recalcula a altura correta.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIJeUOw7iYKzsFXSLVQK3%2FEx-1.1.2.png?alt=media&#x26;token=c2c351d9-10fd-47ed-bbef-1e436ab3ac4f" alt=""><figcaption></figcaption></figure>

***

### 5. A solução atual do Navi+

O Navi+ pesquisou e testou várias abordagens, mas como o problema se origina do próprio Google App, não pode ser completamente resolvido.

No entanto, o Navi+ implementou a **melhor mitigação possível**:

#### ✔️ O problema aparece apenas na primeira vez

Geralmente ocorre quando o usuário:

* abre o site dentro do Google App
* e navega ou toca em qualquer lugar na página

Quando isso acontece, o Navi+ aciona um mecanismo de correção única. Assim que o usuário:

* toca levemente na tela
* rola um pouco
* ou interage de qualquer maneira pequena

#### ✔️ O problema desaparece automaticamente

O Google App irá re-renderizar todo o layout, e a partir desse momento:

* A Barra Inferior é exibida na posição correta
* O problema não aparecerá novamente até que o Google App seja fechado e reaberto

#### ✔️ Essa mitigação também reduz erros semelhantes de outros aplicativos posicionados na parte inferior quando usados juntos com o Navi+

***

### 6. Explicação rápida para usuários finais

Esta mensagem é destinada a usuários não técnicos:

> “O Google App no iPhone tem um bug de exibição ao abrir sites Shopify que usam uma Barra Inferior como o Navi+. Esse problema vem do Google App e afeta muitos aplicativos, não apenas o Navi+. Acontece apenas uma vez e desaparecerá após qualquer toque ou rolagem na tela. Se você usar Safari ou Chrome em vez disso, o problema não ocorrerá.”

***

### 7. Conclusão

❌ Não é um problema do Navi+
❌ Não é um problema do Shopify

✔️ Um bug de exibição no Google App no iPhone
✔️ O Navi+ minimiza o problema para que apareça apenas uma vez e depois desapareça
✔️ Safari/Chrome estão totalmente isentos

---

# Instruções para o Agente: Consultando Esta Documentação

Se você precisar de informações adicionais que não estão diretamente disponíveis nesta página, pode consultar a documentação dinamicamente fazendo uma pergunta.

Realize uma solicitação HTTP GET na URL da página atual com o parâmetro de consulta `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/limitation/shopify-bottom-bar-issue-on-google-app-iphone.md?ask=<question>
```

A pergunta deve ser específica, autossuficiente e escrita em linguagem natural.
A resposta conterá uma resposta direta à pergunta e trechos e fontes relevantes da documentação.

Use esse mecanismo quando a resposta não estiver explicitamente presente na página atual, você precisar de esclarecimentos ou contexto adicional, ou quiser recuperar seções de documentação relacionadas.
