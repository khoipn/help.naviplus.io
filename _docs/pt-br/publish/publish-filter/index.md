---
description: Filtre a visibilidade do menu Navi+ por dispositivo, comportamento de rolagem, tipos de página do Shopify e palavras-chave de URL.
layout: default
permalink: /pt-br/docs/publish/publish-filter/
title: Publish filter — Regras de dispositivo e URL
---
# Publish Filter — Regras de Dispositivo e URL

Após ativar o toggle de publicação, você pode refinar quando o menu aparece usando duas camadas de filtro: **dispositivo** (mobile/desktop + comportamento de rolagem) e **palavras-chave de URL** (mostrar/ocultar com base no conteúdo da URL).

---

## Filtrar por Dispositivo

### Ativar/desativar por plataforma

Dois toggles no topo do modal Publish:

| Configuração | Padrão | Observações |
|---|---|---|
| **Mostrar menu no mobile** | Ativado | Mostrar menu em dispositivos mobile |
| **Mostrar menu no desktop** | Desativado | Mostrar menu em dispositivos desktop |

Alguns tipos de menu desativam um desses toggles — por exemplo, o Desktop Mega Menu desativa o toggle de mobile.

---

### Comportamento de rolagem (apenas menus Sticky)

Configurado separadamente para mobile e desktop.

#### Rolagem mobile

| Configuração | Comportamento |
|---|---|
| **Auto Hide on scroll down** | Ocultar menu quando o usuário rolar **para baixo** |
| **Auto Show after scroll** | Mostrar menu somente após o usuário rolar para baixo (não mostrado ao carregar a página) |

#### Rolagem desktop

| Configuração | Comportamento |
|---|---|
| **Auto Hide on scroll down** | Ocultar menu ao rolar para baixo no desktop |
| **Auto Show after scroll** | Mostrar apenas após rolar para baixo no desktop |

> Auto Hide e Auto Show podem ser ativados juntos: menu oculta ao rolar para baixo, reaparece ao rolar para cima — padrão comum para tabbars inferiores.

---

### Posição na tela (apenas Sticky / Tabbar)

Escolha uma posição em um seletor de botão de rádio com ilustrações visuais.

**Mobile** — 6 posições predefinidas (centro inferior, esquerda inferior, direita inferior, variantes superiores...)

**Desktop** — 12 posições predefinidas (barra superior, barra inferior, barra lateral esquerda/direita, posições de canto...)

---

### Grupos de página (apenas Shopify, menus Sticky)

Selecione em quais tipos de página do Shopify o menu aparece. Padrão: todos.

| Grupo | Padrão de URL |
|---|---|
| Início | `/` |
| Detalhe do Produto | `/products/*` |
| Categorias de Produto | `/collections/*` |
| Páginas | `/pages/*` |
| Blogs | `/blogs/*` |
| Outros | Todas as páginas restantes |

> O mercado Global (WordPress, Wix, etc.) não tem esse recurso. Use o filtro de palavra-chave de URL em vez disso.

---

## Filtrar por Palavras-chave de URL

O cartão **"Exibir menu por palavras-chave"** — aplica-se a todos os tipos de menu exceto Context Slide.

### Dois tipos de filtro

| Configuração | Comportamento |
|---|---|
| **Contain Keyword** | Menu **só aparece** quando a URL **contém** pelo menos uma palavra-chave |
| **Don't Contain Keyword** | Menu **não aparece** quando a URL **contém** alguma das palavras-chave |

Múltiplas palavras-chave separadas por vírgulas `,`.

### Exemplos

**Mostrar apenas nas páginas de produtos de snowboard:**
```
Contain: snowboard
```
→ Menu só aparece em URLs como `yourdomain.com/products/the-collection-snowboard-hydrogen`

**Ocultar em páginas multi-localização:**
```
Don't contain: multi-location
```
→ Menu **não aparece** em `yourdomain.com/products/the-multi-location-snowboard`

**Combinado:**
```
Contain: collections
Don't contain: sale, outlet
```
→ Aparece apenas em páginas de coleções, mas oculto nas coleções "sale" e "outlet".

### Observações

- O filtro usa **correspondência completa de string de URL**, não regex.
- As palavras-chave **não diferenciam maiúsculas de minúsculas**.
- Deixar vazio = sem filtro (menu aparece em todas as páginas).
- Ambos os filtros são combinados com AND — ambas as condições devem ser satisfeitas.
