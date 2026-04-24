---
description: CSS é a chave para cada problema quando você precisa personalizar profundamente para o Navi+. Quase todas as coisas da interface no Navi+ podem ser resolvidas com código CSS. No Navi+, ther...
lang: pt-br
layout: default
permalink: /pt-br/docs/development/how-to-write-a-correct-css-code-in-navi/
title: Como escrever um código CSS correto no Navi+
---
# Como escrever um código CSS correto no Navi+

CSS é a chave para cada problema quando você precisa personalizar profundamente para o Navi+. Quase todas as coisas da interface no Navi+ podem ser resolvidas com código CSS. No Navi+, existem 2 níveis de CSS:

### Nível 1: Folha de Estilo Interna / CSS (#SF-123456789)

Este é o nível recomendado para usar na maioria dos casos. Quando você escreve código nesta caixa, o sistema adiciona automaticamente um prefixo que é #SF-123456789 (que é o seu ID de menu) ao início das tags CSS. Isso garantirá que não haja conflito com todos os outros componentes da interface.

Veja o exemplo antes e depois de compilar o CSS nesta caixa abaixo

```css
// Seu código CSS
{
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   {
      margin-bottom: 164px;
   }
}
```

```css
// O código CSS após ser compilado

#SF-123456789 {
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   #SF-123456789 {
      margin-bottom: 164px;
   }
}

```

### Nível 2: Folha de Estilo Global / CSS

A menos que você tenha experiência com CSS, evite abusar desta caixa porque tudo será empurrado diretamente na forma como você escreve o código CSS sem nenhuma camada de proteção contra conflitos.

---

# Instruções para o Agente: Consultando Esta Documentação

Se você precisar de informações adicionais que não estão diretamente disponíveis nesta página, você pode consultar a documentação dinamicamente fazendo uma pergunta.

Realize uma solicitação HTTP GET na URL da página atual com o parâmetro de consulta `ask`:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/development/how-to-write-a-correct-css-code-in-navi+.md?ask=<question>
```

A pergunta deve ser específica, autossuficiente e escrita em linguagem natural.
A resposta conterá uma resposta direta à pergunta e trechos relevantes e fontes da documentação.

Use este mecanismo quando a resposta não estiver explicitamente presente na página atual, você precisar de esclarecimentos ou contexto adicional, ou quiser recuperar seções de documentação relacionadas.
