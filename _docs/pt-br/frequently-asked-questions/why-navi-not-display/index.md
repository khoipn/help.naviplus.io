---
description: 'Para exibir o menu Navi+ no seu site, existem duas opções claras:'
lang: pt-br
layout: default
permalink: /pt-br/docs/frequently-asked-questions/why-navi-not-display/
title: Por que o menu Navi+ não é exibido no meu site?
---
# Por que o menu Navi+ não é exibido no meu site?

Para exibir o menu Navi+ no seu site, existem duas opções claras:

1. **Embed \[Navi+ On all page] no seu tema e ajustar a exibição no aplicativo Navi+**: Esta também é a maneira mais comum e fácil de fazer isso. No entanto, seus menus Navi+ podem apenas grudar na tela (na parte inferior, cabeçalho ou flutuante). Os ajustes são muito diversos, com três níveis diferentes para garantir que você possa navegar de acordo com suas necessidades.
   * Nível 1: Mostrar/ocultar o menu Navi+ e mostrar/ocultar em grupos específicos de páginas. No Shopify, existem alguns grupos comuns de páginas, como a página inicial, catálogo, produtos e página.
   * Nível 2: Mostrar/ocultar em dispositivos móveis ou desktop. Devido às experiências completamente diferentes entre móvel e desktop, muitos usuários criam menus separados para móvel e desktop.
   * Nível 3: Por palavra-chave: Você pode mostrar/ocultar quando a URL da página contém/não contém uma ou várias palavras-chave. Esta opção é muito útil e flexível, permitindo que você crie menus específicos para cada página ou cada produto.
2. **Session \[Navi+ On Session] é usado para embutir diretamente em cada página do tema Shopify**. Com esta opção, você pode ter uma escolha adicional de não grudar o menu (na parte inferior, cabeçalho ou flutuante), mas permitindo que ele flua com o conteúdo da página. Este efeito é útil quando você deseja criar menus do tipo grade ou menus do tipo barra que fluem à medida que você rola a tela.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FQuWJTBwcXPXlDJsJrA08%2F001.png?alt=media&#x26;token=09c8a23d-233d-440b-a108-8c0da62df58e" alt=""><figcaption><p>Enable [Navi+] All Page</p></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FPqPJwLCLMrGOMxMxR2UA%2F002.png?alt=media&#x26;token=f102dddc-b3bd-4bc2-89b0-7efeb9daed13" alt=""><figcaption><p>Enable [Navi+] All Page</p></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fbppbosfp50BLyZQcwvhU%2F003.png?alt=media&#x26;token=a930264c-1ef8-4b08-9e2b-d05b00d32f48" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FzWtZ0EvOjkFfwISYlqfv%2F004.png?alt=media&#x26;token=e3972db1-161f-4e82-af1e-cd284173b6e5" alt=""><figcaption><p>Publish on mobile/desktop</p></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Ff8mpogKCx9fpCRbGCKPp%2F005.png?alt=media&#x26;token=7180be60-03a6-4fc3-8edc-62aeae5af4f9" alt=""><figcaption><p>Publish on mobile/desktop</p></figcaption></figure>

<br>

---

# Instruções para o Agente: Consultando Esta Documentação

Se você precisar de informações adicionais que não estão diretamente disponíveis nesta página, pode consultar a documentação dinamicamente fazendo uma pergunta.

Realize uma solicitação HTTP GET na URL da página atual com o parâmetro de consulta `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/why-navi-not-display.md?ask=<question>
```

A pergunta deve ser específica, autossuficiente e escrita em linguagem natural.
A resposta conterá uma resposta direta à pergunta e trechos relevantes e fontes da documentação.

Use este mecanismo quando a resposta não estiver explicitamente presente na página atual, você precisar de esclarecimentos ou contexto adicional, ou quiser recuperar seções de documentação relacionadas.
