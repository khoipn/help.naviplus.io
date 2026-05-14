---
description: Instale o Navi+ no Shopify ou em qualquer site e entenda as três maneiras como o Navi+ implementa menus — flutuante, posicionado e acionado.
lang: pt-br
layout: default
permalink: /pt-br/docs/how-to-install-navi/
title: Instale o Navi+
---
# Instale o Navi+

## Passo 1 — Instalar

**Shopify:** Instale a partir da [Shopify App Store](https://apps.shopify.com/pronavi-navigation-design). O aplicativo abre automaticamente após a instalação.

**Outras plataformas** (WordPress, WooCommerce, Wix, Webflow, Squarespace ou qualquer site):
1. Crie uma conta gratuita em [dash.naviplus.app](https://dash.naviplus.app)
2. Adicione o domínio do seu site
3. Copie seu snippet de incorporação — você usará isso no Passo 2

---

## Passo 2 — Entenda como seu menu será implementado

O Navi+ usa **três métodos de implementação diferentes** dependendo do tipo de menu. Entender isso antecipadamente economiza tempo durante a configuração.

### 1. Menus flutuantes — Tab Bar & FAB

Tab Bar e FAB são **menus fixos** que flutuam no topo da sua página em uma posição fixa. Eles nunca rolam para fora.

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">📍</div>
    <strong>Posição</strong><br>Parte superior, inferior, esquerda ou direita da tela
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔼</div>
    <strong>Ocultar automaticamente ao rolar</strong><br>Oculta ao rolar para baixo, reaparece ao rolar para cima
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">👇</div>
    <strong>Mostrar ao rolar para baixo</strong><br>Oculto por padrão, aparece apenas quando o usuário rola para baixo — economiza espaço na tela
  </div>
</div>

**Um caso de uso comum:** consolidar outros elementos flutuantes — WhatsApp, Crisp, Messenger, widgets de chat ao vivo — em itens de menu do Navi+. Isso libera espaço na tela e remove a desordem de vários ícones flutuantes empilhados uns sobre os outros.

### 2. Menus posicionados — Mega Menu & Grid Menu

Mega Menu e Grid Menu precisam ser **colocados em um local específico** na sua página. Existem várias maneiras de fazer isso:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🎯</div>
    <strong>CSS Selector</strong><br>Apontar o Navi+ para qualquer elemento na sua página. Inserir antes, depois ou substituir completamente — é assim que o Mega Menu pode substituir totalmente a navegação existente do seu tema.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🧩</div>
    <strong>Seção do Shopify</strong><br>Use um App Block dentro do Theme Customizer para colocar o menu em qualquer seção do seu layout — sem necessidade de código.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🖥️</div>
    <strong>Código de incorporação</strong><br>Cole um snippet curto diretamente no HTML da sua página no exato local onde o menu deve aparecer.
  </div>
</div>

> **CSS Selector** é uma maneira de identificar qualquer ponto em uma página da web — é assim que os navegadores direcionam elementos específicos. O Navi+ o usa para saber exatamente onde injetar seu menu. Você não precisa escrever CSS você mesmo; o Navi+ tem um seletor visual que encontra o seletor para você.

### 3. Menus acionados — Slide Menu

Slide Menu **não aparece por conta própria**. Ele permanece oculto até que algo o acione:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">☰</div>
    <strong>Elemento existente</strong><br>Um usuário clica em algo que já está na sua página — como o ícone de hambúrguer do seu tema
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">⚡</div>
    <strong>Gatilho personalizado</strong><br>Qualquer elemento na sua página — designado pelo seu CSS Selector
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔗</div>
    <strong>Outro menu Navi+</strong><br>Um item da Tab Bar ou FAB que abre o Slide Menu quando clicado
  </div>
</div>

Isso torna o Slide Menu flexível — ele pode substituir sua navegação existente sem adicionar visualmente nada novo à página.

---

## Passo 3 — Crie seu primeiro menu

Uma vez instalado, vá para o painel e crie seu primeiro menu. → [Seu primeiro menu (início rápido de 5 minutos)](/docs/getting-started/your-first-menu/)
