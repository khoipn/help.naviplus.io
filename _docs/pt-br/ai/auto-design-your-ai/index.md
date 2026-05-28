---
description: Use ChatGPT, Claude ou Gemini para redesenhar seu menu Navi+ — o Navi+ gera o prompt, você cola o resultado em JSON de volta.
lang: pt-br
layout: default
permalink: /pt-br/docs/ai/auto-design-your-ai/
title: Design automático com seu app de IA
---
# Design automático com seu app de IA

Redesenhe seu menu com uma ferramenta de IA que você já conhece — ChatGPT, Claude ou Gemini. O Navi+ prepara os dados e o prompt; você apenas executa na IA e traz o resultado de volta. Este recurso é **gratuito**.

Abra: o botão **AI** → cartão **Design automático com seu app de IA**.

---

## Antes de começar — faça backup do seu menu

> **⋮ Mais → Backup / Restaurar** — salve seu menu atual como arquivo ou na nuvem antes de fazer alterações. Não pule esta etapa.

---

<div class="install-step" markdown="1">
### 1 — Treine sua IA

Você precisa de uma ferramenta de IA baseada na web. Modelos de grande contexto recomendados: **Claude Opus 4.7**, **ChatGPT GPT-5** ou **Gemini Pro 1.5**.

Clique em **Abrir documentos de treinamento**, copie tudo e cole no seu chat de IA. Isso ensina à IA como os menus do Navi+ são estruturados.
</div>

<div class="install-step" markdown="1">
### 2 — Envie seu menu atual (JSON) para a IA

Depois que a IA entender a estrutura da Etapa 1, envie seu menu atual:

- **Copie o menu atual para a área de transferência** e cole no chat, ou
- **Baixe o arquivo JSON** e anexe-o ao chat.
</div>

<div class="install-step" markdown="1">
### 3 — Dê instruções de design

Digite sua solicitação em linguagem natural, por exemplo:

- Adicione mais 2 itens ao menu
- Mude a cor primária para azul
- Agrupe os itens de produto sob uma seção com título

Você tem controle total sobre o design. A IA retorna um novo menu em JSON.

- Adicione 2 itens: Blog e Carreiras.
- Mude a cor primária para azul `#1a73e8`.
- Reduza para 4 itens principais, mova o restante para um item Mais.
- Adicione um ícone apropriado a cada item e deixe o item Promoções em negrito.
- Traduza todos os nomes dos itens para o inglês.
</div>

<div class="install-step" markdown="1">
### 4 — Cole o resultado e aplique

Copie o JSON que a IA retorna e aplique-o ao Navi+ de uma das duas maneiras:

- **Opção 1:** Cole o JSON na caixa de entrada e clique em **Aplicar**.
- **Opção 2:** Clique em **Enviar arquivo JSON** e escolha seu arquivo `.json`.

Repita as Etapas 3–4 até o menu ficar do jeito certo, depois clique em **Salvar**.
</div>

> Dica: A IA altera apenas a estrutura e o conteúdo no JSON. Campos que você configurou mas não mencionou são mantidos — mas ainda assim revise o menu após aplicar.

---

## Estudo de caso — organize uma tab bar com o Claude

**Contexto:** Uma loja tem uma tab bar bagunçada com 8 itens e quer reduzir para 5 itens e adicionar ícones, mantendo todos os links existentes.

1. **Backup:** ⋮ Mais → Backup / Restaurar → salve uma cópia.
2. **Etapa 1 — Treine a IA:** Abra o Claude (Opus 4.7), clique em **Abrir documentos de treinamento** no Navi+, copie tudo e cole no Claude.
3. **Etapa 2 — Envie o menu:** Clique em **Copiar o menu atual para a área de transferência** e cole o JSON no Claude.
4. **Etapa 3 — Instrua:** Diga ao Claude:

   ```
   Combine estes 8 itens em 5 itens principais: Início, Produtos, Promoções,
   Blog, Conta. Mova os itens restantes para subgrupos adequados.
   Adicione um ícone a cada item de nível 1. Mantenha todos os links existentes inalterados.
   ```

5. **Etapa 4 — Aplique:** O Claude retorna um novo JSON. Copie-o, cole na caixa **Aplicar** no Navi+ → clique em **Aplicar**.
6. Verifique: 5 itens, ícones completos, links originais intactos. Precisa de mais ajustes? Repita as Etapas 3–4. Satisfeito? Clique em **Salvar**.

**Resultado:** Uma tab bar limpa com 5 itens e ícones, todos os links preservados — sem editar cada item manualmente.
