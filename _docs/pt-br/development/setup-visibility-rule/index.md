---
description: "As regras de visibilidade se aplicam a menus e itens de menu — mostrar ou ocultar com base em dispositivo, conteúdo do carrinho, agendamento, mercado, tags de cliente e clientes B2B."
lang: pt-br
layout: default
permalink: /pt-br/docs/development/setup-visibility-rule/
title: Configurar regras de visibilidade
---
# Configurar regras de visibilidade

Regras de Visibilidade são um conjunto de condições que determinam se um **menu** ou um **item de menu** é exibido para um visitante específico — com base em dispositivo, conteúdo do carrinho, agendamento, mercado, tags de cliente ou clientes B2B — aplicando a ambos os níveis com exatamente um conjunto de regras.

---

## Onde configurá-las

- **Nível de item de menu**: abra **Edit item** → grupo **Visibility** → clique em **Setup the Visibility rules**. *(O grupo Visibility está dentro de um bloco contraído — se você não vê-lo imediatamente, clique em **See more** para expandi-lo.)*
- **Nível de menu**: abra o painel **Setting** do menu → cartão **Visibility Rules**.
- **Atalho pela lista de menus**: na página de lista de menus, a coluna **Visibility Rules** mostra **No rule** ou **Setup** para cada menu — clique em **Setup** para ir direto ao cartão Visibility Rules daquele menu.
- **Atalho pela árvore do menu**: um item que não é sempre visível mostra um ícone de olho ao lado do nome na árvore — passe o mouse para ver um resumo das condições ativas, ou clique para abrir diretamente as Visibility Rules desse item.

A partir daqui, todas as condições, sintaxe e como elas se combinam são **compartilhadas** para ambos os níveis — apenas a localização difere.

> Market / Customer tag / B2B se aplicam apenas a **Shopify** e são atualmente campos de texto livre (sem menu suspenso predefinido) — cada campo tem um link **"View your Markets"** / **"Manage customer tags"** / **"Manage B2B companies"** que o leva diretamente à página correspondente do Shopify Admin para verificar o valor exato antes de digitar.

---

## Condições suportadas

| Condição | Plano | Mostrar quando | Valor de entrada |
|---|---|---|---|
| **Device** | Business e superior | Corresponde ao dispositivo selecionado | `All devices` / `Mobile only` / `Desktop only` |
| **Page / URL** | Business e superior | Tipo de página correto ou URL contém/não contém palavra-chave | Marque tipos de página (Home/Products/Collections/Pages/Blogs/Others) + 2 campos de palavra-chave |
| **Cart contents** | Business e superior | Carrinho tem N ou mais produtos (ou menos que N, com a inversão "ocultar quando menor" ativada) | Número inteiro, ex. `1` |
| **Schedule** | Business e superior | Dentro do intervalo de data + hora definido | Data/hora de início → término, inseridas em **UTC** (converta do horário local antes de digitar), comparadas com o relógio do dispositivo do visitante |
| **Market / Country** | Elite | Visitante navegando sob o mercado selecionado | Handle do mercado, múltiplos valores separados por vírgula: `us, ca` |
| **Customer tag** | Elite | Visitante conectado tem a tag | Uma única tag, ex. `vip` |
| **B2B customer** | Elite | Visitante conectado usando uma conta B2B | Chave liga/desliga |

---

## Como as condições se combinam

Todas as condições ativadas devem **todas corresponder** para o menu/item ser exibido — apenas uma condição que falha o oculta imediatamente. Condições vazias são ignoradas e não contam.

Por exemplo, ativar tanto Device = Mobile only **quanto** Schedule = 01/09–15/09: mostra apenas para visitantes em telefones celulares, **e** apenas durante aquelas 2 semanas exatas.

<div align="center">

<svg viewBox="0 0 680 300" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="vrArrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#1a7a4f"/>
    </marker>
    <marker id="vrArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="150" y="10" width="180" height="30" rx="15" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="30" font-size="12.5" text-anchor="middle" fill="#1a1d21">Visitante chega na página</text>

  <line x1="240" y1="40" x2="240" y2="58" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="60" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="86" font-size="12.5" text-anchor="middle" fill="#1a1d21">Device — corresponde ao dispositivo selecionado?</text>

  <line x1="240" y1="104" x2="240" y2="122" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="124" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="150" font-size="12.5" text-anchor="middle" fill="#1a1d21">Page/URL, Cart, Schedule — condições atendidas?</text>

  <line x1="240" y1="168" x2="240" y2="186" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="188" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="214" font-size="12.5" text-anchor="middle" fill="#1a1d21">Market, Tag, B2B (plano Elite) — corresponde a este visitante?</text>

  <line x1="240" y1="232" x2="240" y2="250" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="150" y="252" width="180" height="34" rx="17" fill="#1a7a4f"/>
  <text x="240" y="274" font-size="13" font-weight="600" text-anchor="middle" fill="#fff">Mostrar</text>

  <rect x="470" y="55" width="160" height="182" rx="10" fill="#fef2f2" stroke="#fecaca"/>
  <text x="550" y="140" font-size="16" font-weight="700" text-anchor="middle" fill="#b91c1c">Ocultar</text>
  <text x="550" y="158" font-size="11" text-anchor="middle" fill="#b91c1c">imediatamente</text>

  <line x1="420" y1="82" x2="470" y2="82" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="76" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="146" x2="470" y2="146" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="140" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="210" x2="470" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="204" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>
</svg>

</div>

*Uma única condição ativada que falha (branch direito ✗) oculta o menu/item imediatamente — independentemente de outras condições passarem. Condições vazias (não ativadas) são ignoradas e omitidas.*

---

## 5 exemplos do mundo real

### 1. Atacado e varejo ao mesmo tempo, oculte preços atacadistas de clientes varejistas (nível de menu)

Sua loja vende atacado e varejo. Clientes atacadistas (com uma conta B2B aprovada pelo Shopify) compram a preços melhores e têm seu próprio grupo de produtos/coleção. Você quer um grupo de menu "Preços atacadistas", "Pedidos atacadistas rápidos", "Produtos atacadistas" — mostrando apenas para clientes atacadistas, enquanto visitantes varejistas não veem nenhum menu desse tipo (evitar confusão de preço e ocultar descontos).

**Como fazer:** Construa um menu separado (ou grupo de menu) contendo links atacadistas. Vá para **Setting → Visibility Rules**, ative **B2B customer**. Resultado: este menu inteiro é exibido apenas para visitantes conectados com contas B2B; clientes varejistas (mesmo se conectados) não verão este menu enquanto navegam.

### 2. Banner de promoção por tempo limitado, mostrar apenas durante compra (nível de item)

Você quer um banner "Frete grátis em pedidos acima de R$50" aparecendo apenas durante a venda e apenas para clientes que adicionaram pelo menos um produto ao carrinho (evitar distrair novos visitantes ao chegar).

**Como fazer:** No item banner, clique em **Setup the Visibility rules** → ative **Cart contents** = `1`, e **Schedule** = datas de início/término da venda.

### 3. Link de oferta exclusiva para clientes VIP (nível de item)

Você quer um item de menu "Ofertas VIP" visível apenas para clientes marcados como VIP, enquanto clientes normais nem sabem que existe.

**Como fazer:** Marque o grupo de clientes VIP via Shopify Flow/Customer Segment (Segment → Flow "Customer enters segment" → aplicar tag). No item, clique em **Setup the Visibility rules** → ative **Customer tag** = `vip`.

### 4. Tab Bar Premium para clientes VIP (nível de menu)

Sua loja quer que clientes VIP tenham uma experiência de navegação diferente — fundo escuro, efeitos brilhantes, sensação premium — em vez de compartilhar a interface padrão com todos os outros.

**Como fazer:** Construa uma Tab Bar separada com um template escuro premium, publique-a na mesma posição de Tab Bar que sua loja usa por padrão. Vá para **Setting → Visibility Rules**, ative **Customer tag** = `vip` (marque via Shopify Flow/Customer Segment como no exemplo 3). Resultado: clientes marcados como VIP veem a Tab Bar premium; clientes normais ainda veem sua Tab Bar padrão. *(Mobile Menu usa a mesma abordagem.)*

### 5. FAB solicita venda adicional quando cliente adiciona primeiro item (nível de menu)

Cliente acabou de adicionar seu primeiro produto ao carrinho — o momento crítico — e você quer que um botão flutuante (FAB) com infos de promoção apareça ("compre mais para desbloquear frete grátis", brinde grátis...) para empurrá-lo mais rápido para checkout, em vez do FAB sempre mostrando e desorganizando a vista desde o início.

**Como fazer:** Construa um FAB (Floating Button) com conteúdo promocional. Vá para **Setting → Visibility Rules**, ative **Cart contents** = `1` (mostrar apenas quando carrinho tem 1+ produtos). Resultado: o FAB permanece oculto até um cliente adicionar o primeiro produto ao seu carrinho. *Nota: a condição apenas verifica o NÚMERO de produtos no carrinho, não o valor do pedido — "R$50+ libera frete grátis" é o texto de marketing que você escreve dentro do FAB, não uma Visibility Rule que calcula por preço.*

---
