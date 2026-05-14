---
description: Como adicionar ícones integrados e imagens personalizadas aos itens do menu no Navi+, e como estilizar esses elementos.
lang: pt-br
layout: default
permalink: /pt-br/docs/menu-items/item-icon-image/
title: Ícones & Imagens
---
# Ícones & Imagens

Cada item pode ter um elemento visual — seja um **ícone integrado** ou uma **imagem personalizada**. Você pode usar apenas um de cada vez, não ambos.

---

## Ícone integrado

Os ícones são símbolos vetoriais da biblioteca integrada **Remixicon**. Eles são nítidos em qualquer tamanho e não requerem upload de arquivo.

### Como adicionar

1. No painel Editar Item, clique no botão **Ícone**.
2. A caixa de pesquisa de ícones se abre — digite uma palavra-chave (por exemplo, `home`, `cart`, `phone`, `search`).
3. Clique em um ícone para selecioná-lo — uma prévia aparece no item imediatamente.
4. Clique em **×** para remover o ícone atual.

### Quando usar ícones

- Itens em uma **Tab Bar** — ícones são a maneira padrão de rotular abas.
- Quando você quer uma aparência limpa e consistente.
- Quando você não tem imagens personalizadas prontas.

---

## Imagem personalizada

Use sua própria foto, logotipo ou gráfico em vez de um ícone da biblioteca.

> **Gói Starter:** Imagens personalizadas não são suportadas — use ícones integrados em vez disso.

### Opção A — Fazer upload da galeria *(Business / Elite)*

1. Clique no botão **Imagem** no painel Editar Item.
2. Clique em **Galeria** → a caixa de diálogo de upload se abre.
3. Selecione ou faça upload de uma imagem (JPG, PNG, GIF).
4. Confirme — a URL da imagem é preenchida automaticamente.

### Opção B — Colar uma URL de imagem *(Elite)*

1. Clique no botão **Imagem**.
2. Cole a URL completa da imagem no campo de URL.
3. Clique em **Atualizar**.

### Dicas de imagem

- Use imagens **quadradas (1:1)** para ícones da Tab Bar.
- Use imagens **paisagem** para itens de Imagem Grande.
- **PNG com fundo transparente** funciona melhor para logotipos e símbolos.
- Mantenha o tamanho do arquivo pequeno — imagens pesadas desaceleram o menu em dispositivos móveis.
- Elite converte automaticamente imagens para WebP e normaliza dimensões.

---

## Layout de exibição

Após adicionar um ícone ou imagem, escolha como o ícone/imagem e o texto são dispostos em **Layout → Layout de Exibição**:

| Opção | Layout |
|---|---|
| **Automático** | Segue o padrão do tipo de menu |
| **De Cima para Baixo** | Ícone/imagem em cima, texto abaixo |
| **Esquerda-Direita** | Ícone/imagem à esquerda, texto à direita |
| **De Baixo para Cima** | Texto em cima, ícone/imagem abaixo |
| **Direita-Esquerda** | Texto à esquerda, ícone/imagem à direita |
| **Somente Ícone/Imagem** | Somente ícone/imagem — texto oculto |
| **Somente Texto** | Somente texto — ícone/imagem oculto |

---

## Estilizar o ícone ou imagem

Vá para **Interface → Estilo de Ícone / Imagem** para ajustar a aparência:

| Configuração | Efeito |
|---|---|
| **Cor do Ícone** | Muda a cor vetorial do ícone (hex). Não se aplica a arquivos de imagem. |
| **Tamanho (px)** | Tamanho de exibição do ícone ou imagem |
| **Container** | Cor de fundo da caixa que envolve o ícone |
| **Padding (px)** | Espaço entre o ícone e sua caixa de contêiner |
| **Curve (px)** | Raio do canto do contêiner — defina `50` para um círculo |

**Exemplo — ícone branco em uma caixa azul redonda:**

```
Cor do Ícone:  #FFFFFF
Container:   #0066CC
Padding:     10
Curve:       50
```
