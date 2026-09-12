---
description: "Sintaxe de seletor CSS para acionadores de menu esqueleto e integração de tema — otimização do tempo de carregamento do menu e UX com formatos de seletor específicos do dispositivo e etiquetados."
layout: default
permalink: /pt-br/docs/development/optimize-loading-css-selectors/
title: Otimização de velocidade e UX — sintaxe de seletor CSS
---
# Otimização de velocidade e UX — sintaxe de seletor CSS

No **Theme Editor → App embeds → Store Connector**, sob o grupo **Speed & UX optimization**, você encontrará 2 campos de seletor CSS que ajudam seu menu a ser carregado de forma suave — sem necessidade de escrever CSS/JS personalizado como antes. Este guia explica a sintaxe para ambos os campos.

---

## 2 campos, 2 objetivos diferentes

| Campo | Usado para | Mecanismo |
|---|---|---|
| **Mobile Menu CSS Selector** | Botão de disparo de menu (hamburger) ao usar vinculação de eventos de seletor CSS | Clique no botão ANTES de Navi+ carregar → mostra um menu esqueleto imediatamente (feedback instantâneo) em vez de espera silenciosa. Conforme Navi+ carrega, o esqueleto cede lugar ao menu real conforme o conteúdo chega. |
| **CSS Selector for Mega Menu Replacement** | Área de menu do tema original, quando Navi+ é executado em modo Replacement | Cobre essa área com um efeito de carregamento shimmer enquanto aguarda Navi+ carregar, evitando que o conteúdo original pisque quando substituído. |

Ambos os campos são **opcionais** — deixe-os em branco e nada mudará do comportamento padrão.

---

## Sintaxe comum — múltiplos seletores separados por vírgula

```
selector-1, selector-2, selector-3
```

Separe múltiplos seletores em um único campo usando vírgulas `,` ou ponto-e-vírgulas `;`. Vírgulas/ponto-e-vírgulas dentro de parênteses `(...)`, colchetes `[...]` ou strings entre aspas `"..."` / `'...'` (como em seletores de atributo `[data-value="a,b"]`) são reconhecidos em contexto e não serão confundidos com delimitadores de seletores.

---

## Sintaxe Legacy — sufixos `(M)` / `(D)`

Funciona em **ambos os campos**. Adicione um sufixo imediatamente após o seletor para limitar por dispositivo:

```
.hamburger-mobile (M)
.hamburger-desktop (D)
.trigger-all-devices
```

| Sufixo | Aplica-se a |
|---|---|
| `(M)` | Apenas Mobile |
| `(D)` | Apenas Desktop |
| *(sem sufixo)* | Todos os dispositivos |

---

## Sintaxe Labeled — apenas campo "Mobile Menu CSS Selector"

O campo **Mobile Menu CSS Selector** suporta uma sintaxe avançada para personalizar a aparência do menu esqueleto — o campo **Mega Menu (Replacement mode)** NÃO suporta isso, aceitando apenas `(M)` / `(D)`.

```
.hamburger (Device:M | Color:#1a1a1a | Direction:left | Width:85%)
```

Identificado por dois-pontos `:` dentro de `(...)` — se houver dois-pontos, é formato Labeled; caso contrário, é Legacy (`(M)` / `(D)`). Os parâmetros são separados por barras `|`:

| Parâmetro | Valores válidos | Padrão quando omitido/inválido |
|---|---|---|
| `Device` | `M` ou `D` (listando ambos `M,D` = sem restrição de dispositivo, igual a omitir) | Todos os dispositivos |
| `Color` | Código CSS hexadecimal: `#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa` | `#fff` |
| `Direction` | `left` ou `right` — direção do slide-out do esqueleto | `left` |
| `Width` | Percentual `NN%` ou pixels `NNpx` (inteiro ou decimal) | `85%` |

**Exemplo:**
```
.hamburger (Device:M | Color:#1a1a1a | Width:320px)
```
→ Aplica-se apenas em Mobile, fundo do esqueleto `#1a1a1a`, largura fixa `320px`.

### Tolerância a falhas por parâmetro

- Espaçamento em branco e maiúsculas/minúsculas em chaves e valores são normalizados antes da comparação (`Color: #1A1A1A` e `color:#1a1a1a` são idênticos).
- Um formato de parâmetro inválido (p. ex., `Color:red` — não hexadecimal) ou chave desconhecida (erro de digitação, nome inexistente) é **silenciosamente ignorado apenas para esse parâmetro**, usando o valor padrão — não quebrará outros parâmetros ou outros seletores no mesmo campo.

---

## Seletores inválidos (erros de sintaxe CSS)

Se um seletor no campo **Mobile Menu CSS Selector** tiver um erro de sintaxe CSS real (diferente de parâmetros Labeled inválidos — esse é um seletor que não pode ser analisado), Navi+ registra um aviso no console do navegador (F12 → Console), apontando diretamente para o campo:

```
[Navi+] INVALID TRIGGER CSS SELECTOR — this one was skipped
selector      : <seletor inválido>
browser error : <mensagem de erro do navegador>
Fix it in Theme Editor → App embeds → Store Connector →
Mobile Menu CSS Selector.
```

O seletor inválido é ignorado sozinho; outros seletores válidos no campo continuam funcionando normalmente.

---

## Exemplos práticos

### 1. Proteger o hamburger padrão, nenhuma personalização necessária

```
#Details-menu-drawer-container
```
Cliques antecipados ainda recebem feedback instantâneo (esqueleto padrão), sem necessidade de declarar Device/Color/Direction/Width.

### 2. Apenas hamburger Mobile, desliza da direita, cor da marca

```
.hamburger-mobile (Device:M | Color:#0f172a | Direction:right | Width:90%)
```

### 3. Substituir a área de menu original do tema em ambos os dispositivos

```
nav.header__inline-menu
```
(no campo **CSS Selector for Mega Menu Replacement**, sem sufixo = aplica-se a todos os dispositivos)

### 4. Combinar múltiplos seletores, limites específicos do dispositivo

```
.mega-menu (D), .mobile-nav-wrapper (M)
```
