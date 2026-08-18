---
description: Duas configurações impedem que seu Menu Mega Desktop quebre em uma segunda linha ou mude para mobile muito cedo, e uma permite exibi-lo como um menu Slide no mobile.
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/mega-menu-desktop/faq/
title: FAQ
---
# FAQ

#### Pergunta 1: Como faço para impedir que meu Menu Mega Desktop quebre em uma segunda linha?

Existem duas situações que podem quebrar o layout de uma barra de Menu Mega desktop: muitos itens de nível superior ou o site visualizado em uma janela mais estreita que um desktop padrão. Duas configurações em `Setting → Layout → Desktop` resolvem isso — nenhum código necessário.

<div align="center">

<svg viewBox="0 0 680 340" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="24" font-size="14" font-weight="600" fill="#1a1d21">Before — too many items wrap to a second line</text>
  <rect x="20" y="36" width="640" height="110" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="69" y="68" text-anchor="middle">Home</text>
    <rect x="112" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="147" y="68" text-anchor="middle">Shop</text>
    <rect x="190" y="50" width="110" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="245" y="68" text-anchor="middle">Categories</text>
    <rect x="308" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="343" y="68" text-anchor="middle">Sale</text>
    <rect x="386" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="421" y="68" text-anchor="middle">Blog</text>
    <rect x="464" y="50" width="82" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="505" y="68" text-anchor="middle">About</text>
    <rect x="554" y="50" width="42" height="28" rx="14" fill="#fff" stroke="#e6e8eb" stroke-dasharray="3 2"/>
  </g>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="92" width="42" height="28" rx="14" fill="#fff" stroke="#e6e8eb" stroke-dasharray="3 2"/>
    <rect x="84" y="92" width="94" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="131" y="110" text-anchor="middle">Contact</text>
    <rect x="186" y="92" width="94" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="233" y="110" text-anchor="middle">Support</text>
  </g>
  <text x="600" y="140" font-size="20" text-anchor="middle" fill="#dc2626">⚠</text>
  <text x="20" y="170" font-size="12" fill="#4b5563">The second row pushes page content down, and the header height changes unpredictably across screen sizes.</text>

  <text x="20" y="204" font-size="14" font-weight="600" fill="#1a1d21">After — "Menu overflow navigation" keeps it on one row</text>
  <rect x="20" y="216" width="640" height="50" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="228" width="70" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="69" y="245" text-anchor="middle">Home</text>
    <rect x="112" y="228" width="70" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="147" y="245" text-anchor="middle">Shop</text>
    <rect x="190" y="228" width="106" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="243" y="245" text-anchor="middle">Categories</text>
    <rect x="304" y="228" width="66" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="337" y="245" text-anchor="middle">Sale</text>
    <rect x="378" y="228" width="66" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="411" y="245" text-anchor="middle">Blog</text>
  </g>
  <rect x="600" y="228" width="40" height="26" rx="13" fill="#1a7a4f"/>
  <text x="620" y="246" font-size="14" text-anchor="middle" fill="#fff">›</text>
  <path d="M615 216 L625 216 L620 208 Z" fill="#fff" stroke="#e6e8eb"/>
  <rect x="520" y="150" width="140" height="66" rx="6" fill="#fff" stroke="#e6e8eb"/>
  <text x="590" y="170" font-size="12" text-anchor="middle" fill="#1a1d21">About</text>
  <text x="590" y="188" font-size="12" text-anchor="middle" fill="#1a1d21">Contact</text>
  <text x="590" y="206" font-size="12" text-anchor="middle" fill="#1a1d21">Support</text>
  <text x="20" y="298" font-size="12" fill="#4b5563">Items that don't fit (About, Contact, Support...) live behind the arrow button — click to reveal them, without wrapping.</text>
</svg>

</div>

##### Navegação de overflow do menu

Ative `Show navigation arrows when menu overflows`. A barra de nível superior sempre permanece em uma linha; os itens que não se encaixam ficam atrás de um botão de seta `›` em vez de quebrarem para a próxima linha. Dois campos de cor, `Button background color` e `Arrow icon color`, permitem que você estilize o botão.

##### Ponto de quebra de alteração para mobile

Por padrão, qualquer tela mais estreita que 768px alterna todo o menu para modo mobile, mesmo que ainda haja espaço suficiente para um layout desktop — comum em tablets ou uma janela do navegador redimensionada. Reduza o campo `Breakpoint (px)` para manter a barra desktop visível até uma largura menor.

<div align="center">

<svg viewBox="0 0 640 210" width="100%" style="max-width:600px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="10" width="600" height="190" rx="10" fill="#fff" stroke="#e6e8eb"/>
  <text x="40" y="34" font-size="12" font-style="italic" fill="#4b5563">Setting → Layout → Desktop</text>
  <line x1="40" y1="44" x2="580" y2="44" stroke="#e6e8eb"/>
  <rect x="40" y="62" width="24" height="24" rx="6" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="52" y="79" font-size="13" text-anchor="middle" fill="#1a7a4f">↔</text>
  <text x="76" y="72" font-size="13" font-weight="600" fill="#1a1d21">Mobile switch breakpoint</text>
  <text x="76" y="90" font-size="11" fill="#6b7280">Screen width below which the menu switches to mobile</text>
  <rect x="480" y="60" width="80" height="26" rx="5" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="520" y="78" font-size="12" text-anchor="middle" fill="#1a1d21">768 px</text>
  <line x1="40" y1="114" x2="580" y2="114" stroke="#f0f2f4"/>
  <rect x="40" y="132" width="24" height="24" rx="6" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="52" y="149" font-size="13" text-anchor="middle" fill="#1a7a4f">›</text>
  <text x="76" y="142" font-size="13" font-weight="600" fill="#1a1d21">Menu overflow navigation</text>
  <text x="76" y="160" font-size="11" fill="#6b7280">Show navigation arrows when the menu overflows</text>
  <rect x="520" y="130" width="40" height="22" rx="11" fill="#1a7a4f"/>
  <circle cx="550" cy="141" r="9" fill="#fff"/>
  <text x="40" y="188" font-size="11" fill="#6b7280">Both cards only appear for a Desktop Mega Menu — not Tabbar, FAB, Slide, or Mobile Mega Menu.</text>
</svg>

</div>

<div align="center">

<svg viewBox="0 0 680 260" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="22" font-size="14" font-weight="600" fill="#1a1d21">Default — fixed at 768px</text>
  <rect x="40" y="34" width="384" height="34" fill="#e6e8eb"/>
  <text x="232" y="56" font-size="12" text-anchor="middle" fill="#4b5563">Mobile / Hamburger</text>
  <rect x="424" y="34" width="216" height="34" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="532" y="56" font-size="12" text-anchor="middle" fill="#0f5c3a">Desktop Mega Menu</text>
  <line x1="424" y1="26" x2="424" y2="76" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="424" y="90" font-size="11" text-anchor="middle" fill="#1a1d21">768px</text>

  <text x="20" y="140" font-size="14" font-weight="600" fill="#1a1d21">After setting Breakpoint = 600 (+ overflow navigation enabled)</text>
  <rect x="40" y="152" width="300" height="34" fill="#e6e8eb"/>
  <text x="190" y="174" font-size="12" text-anchor="middle" fill="#4b5563">Mobile / Hamburger</text>
  <rect x="340" y="152" width="84" height="34" fill="#e6f4ed" stroke="#1a7a4f" stroke-dasharray="4 2"/>
  <text x="382" y="169" font-size="10.5" text-anchor="middle" fill="#0f5c3a">Desktop</text>
  <text x="382" y="181" font-size="10.5" text-anchor="middle" fill="#0f5c3a">(new range)</text>
  <rect x="424" y="152" width="216" height="34" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="532" y="174" font-size="12" text-anchor="middle" fill="#0f5c3a">Desktop Mega Menu</text>
  <line x1="340" y1="144" x2="340" y2="194" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="340" y="208" font-size="11" text-anchor="middle" fill="#1a1d21">600px</text>
  <line x1="424" y1="144" x2="424" y2="194" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="424" y="208" font-size="11" text-anchor="middle" fill="#1a1d21">768px</text>
  <text x="20" y="238" font-size="12" fill="#4b5563">The 600–768px range used to be hidden as mobile — it now keeps the desktop layout.</text>
</svg>

</div>

> O novo intervalo que isso abre (entre seu ponto de quebra e 768px) é mais estreito que um desktop padrão — ative também a navegação de overflow do menu, para que os itens de nível superior não se quebrem nesse intervalo.

Exemplo: ponto de quebra = `600` com navegação de overflow do menu ativada:

| Largura da tela | Comportamento |
|---|---|
| Abaixo de 600px | Mobile / menu de hambúrguer |
| 600px – 768px | Menu Mega Desktop, botão de seta mantém os itens em uma linha |
| Acima de 768px | Menu Mega Desktop, comportamento padrão |

Essas duas configurações são independentes e afetam apenas o Menu Mega Desktop — não o Tabbar, FAB, menu Slide ou Mobile Mega Menu.

***

#### Pergunta 2: Como posso exibir meu Menu Mega Desktop como um menu Slide no mobile?

Às vezes você quer a abordagem responsiva clássica: construir um Menu Mega Desktop e deixá-lo se colapsar em um menu Slide (Hamburger) no mobile automaticamente, em vez de construir um menu mobile separado do zero.

<div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1.25rem 0;">
<div style="flex:1 1 260px;border-left:3px solid #1a7a4f;background:#e6f4ed;padding:0.85rem 1.1rem;border-radius:0 8px 8px 0;">
<span style="color:#0f5c3a;font-weight:600;">Ponto forte</span><br>
<span style="color:#374151;">Você mantém apenas um menu — a versão desktop. A cópia mobile acompanha automaticamente, sem uma segunda árvore para manter sincronizada.</span>
</div>
<div style="flex:1 1 260px;border-left:3px solid #dc2626;background:#fef2f2;padding:0.85rem 1.1rem;border-radius:0 8px 8px 0;">
<span style="color:#b91c1c;font-weight:600;">Ponto fraco</span><br>
<span style="color:#374151;">Mobile-first é como a navegação deve ser projetada hoje — celulares trazem a maioria das visitas e frequentemente a maioria da receita. Uma árvore espremida de uma barra desktop ampla é realmente desktop-first: muitos toques por link, grupos de estilo dropdown que leem mal como uma lista empilhada, sem espaço para atalhos apenas para mobile.</span>
</div>
</div>

Para a navegação principal de uma loja, um menu projetado para mobile desde o início — um menu Slide, Grid ou TabBar dedicado — geralmente vale a pena o esforço adicional de manutenção.

> Caminho do meio: espelhe o Menu Mega Desktop em um menu Slide com `Smart responsive` (etapas abaixo) e adicione um item TabBar que o abre diretamente. Defina o campo `Link To` do item como `open:NaviMenu(SF-xxxxxxxxxx)` (Business / Elite) — usando o ID de incorporação do menu Slide — para que os visitantes mobile recebam um ponto de entrada real na barra inferior em vez de um ícone de hambúrguer oculto.

##### Configurar responsivo inteligente

Abra seu Menu Mega Desktop → `Setting → Mobile` → card `Smart responsive`. Ele incorpora uma referência ativa deste menu em um menu Slide — você continua editando conteúdo apenas aqui, e a versão mobile se atualiza automaticamente.

<div align="center">

<svg viewBox="0 0 640 300" width="100%" style="max-width:600px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="20" font-size="13" font-weight="600" fill="#1a1d21">Desktop Mega Menu — 3 columns</text>
  <rect x="20" y="30" width="270" height="230" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="35" y="50" font-size="11" font-weight="600" fill="#1a1d21">Collections</text>
  <line x1="20" y1="58" x2="290" y2="58" stroke="#e6e8eb"/>
  <line x1="110" y1="66" x2="110" y2="252" stroke="#e6e8eb"/>
  <line x1="200" y1="66" x2="200" y2="252" stroke="#e6e8eb"/>
  <text x="35" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Women</text>
  <text x="35" y="94" font-size="10.5" fill="#1a1d21">Dresses</text>
  <text x="35" y="112" font-size="10.5" fill="#1a1d21">Tops</text>
  <text x="125" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Men</text>
  <text x="125" y="94" font-size="10.5" fill="#1a1d21">New in</text>
  <text x="125" y="112" font-size="10.5" fill="#1a1d21">Sale</text>
  <text x="215" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Info</text>
  <text x="215" y="94" font-size="10.5" fill="#1a1d21">Size guide</text>
  <text x="215" y="112" font-size="10.5" fill="#1a1d21">Shipping</text>

  <text x="315" y="150" font-size="22" text-anchor="middle" fill="#1a7a4f">→</text>
  <text x="315" y="172" font-size="10" text-anchor="middle" fill="#6b7280">Smart</text>
  <text x="315" y="184" font-size="10" text-anchor="middle" fill="#6b7280">responsive</text>

  <text x="360" y="20" font-size="13" font-weight="600" fill="#1a1d21">Slide menu — flattened to 1 column</text>
  <rect x="360" y="30" width="130" height="250" rx="16" fill="#1a1d21"/>
  <rect x="368" y="42" width="114" height="226" rx="4" fill="#fff"/>
  <text x="425" y="60" font-size="10.5" font-weight="600" text-anchor="middle" fill="#1a1d21">Collections</text>
  <line x1="374" y1="68" x2="476" y2="68" stroke="#e6e8eb"/>
  <text x="380" y="86" font-size="9.5" fill="#1a1d21">Dresses</text>
  <text x="380" y="102" font-size="9.5" fill="#1a1d21">Tops</text>
  <line x1="374" y1="112" x2="476" y2="112" stroke="#f0f2f4"/>
  <text x="380" y="128" font-size="9.5" fill="#1a1d21">New in</text>
  <text x="380" y="144" font-size="9.5" fill="#1a1d21">Sale</text>
  <line x1="374" y1="154" x2="476" y2="154" stroke="#f0f2f4"/>
  <text x="380" y="170" font-size="9.5" fill="#1a1d21">Size guide</text>
  <text x="380" y="186" font-size="9.5" fill="#1a1d21">Shipping</text>
  <text x="425" y="250" font-size="8.5" text-anchor="middle" fill="#6b7280">one tap reaches every link</text>
</svg>

</div>

1. Clique em `Copy embed item` para copiar este modelo de item de menu.
2. Cole-o em `level 1` de um menu Slide existente — ou crie um primeiro se você não tiver um ainda.

Os layouts multi-coluna são achatados automaticamente: as colunas se tornam uma lista vertical, os títulos das colunas são removidos e uma linha divisória é inserida onde as colunas separadas costumavam estar — para que os visitantes alcancem cada link em um toque em vez de dois.

Uma vez incorporado, o card mostra `This menu already shows on mobile` com um link direto para o menu Slide, para que você possa verificá-lo a qualquer momento.

##### Ajustar a cópia mobile

- **Ocultar itens apenas para desktop.** Abra o item no Menu Mega Desktop → `Visibility` → ative `Exclude when embedded`. Ele permanece no desktop e desaparece apenas da cópia mobile.
- **Adicionar itens apenas para mobile.** O menu Slide não se limita ao que a referência traz — adicione itens regulares de nível 1 ao lado do incorporado para coisas que a barra desktop não precisa: um botão de chamada/WhatsApp, horário da loja, um alternador de idioma ou links que normalmente vivem no cabeçalho ou rodapé do tema. Estes vivem diretamente no menu Slide e não tocam na versão desktop.
