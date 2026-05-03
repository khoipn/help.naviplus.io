---
description: Como adicionar ícones integrados e imagens personalizadas a itens de menu no Navi+, e como estilizá-los.
layout: default
permalink: /pt-br/docs/menu-items/item-icon-image/
title: Ícones e imagens
---
# Ícones e imagens

Cada item pode ter um elemento visual — seja um **ícone integrado** ou uma **imagem personalizada**. Você só pode usar um de cada vez, não ambos.

---

## Ícone integrado

Os ícones são símbolos vetoriais da biblioteca **Remixicon** integrada. São nítidos em qualquer tamanho e não requerem upload de arquivo.

### Como adicionar

1. No painel de edição, clique no botão **Ícone**.
2. A caixa de pesquisa de ícones abre — digite uma palavra-chave (ex. `home`, `cart`, `phone`, `search`).
3. Clique em um ícone para selecioná-lo — uma prévia aparece no item imediatamente.
4. Clique em **×** para remover o ícone atual.

### Quando usar ícones

- Itens em uma **barra de abas** — ícones são a forma padrão de rotular abas.
- Quando você quer uma aparência limpa e consistente.
- Quando você não tem imagens personalizadas prontas.

---

## Imagem personalizada

Use sua própria foto, logo ou gráfico em vez de um ícone da biblioteca.

> **Plano Starter:** Imagens personalizadas não são suportadas — use ícones integrados.

### Opção A — Fazer upload da galeria *(Business / Elite)*

1. Clique no botão **Imagem** no painel de edição.
2. Clique em **Galeria** → o diálogo de upload abre.
3. Selecione ou faça upload de uma imagem (JPG, PNG, GIF).
4. Confirme — a URL da imagem é preenchida automaticamente.

### Opção B — Colar uma URL de imagem *(Elite)*

1. Clique no botão **Imagem**.
2. Cole a URL completa da imagem no campo URL.
3. Clique em **Atualizar**.

### Dicas sobre imagens

- Use imagens **quadradas (1:1)** para ícones de barra de abas.
- Use imagens **paisagem** para itens de imagem grande.
- **PNG com fundo transparente** funciona melhor para logos e símbolos.
- Mantenha o tamanho do arquivo pequeno — imagens pesadas deixam o menu lento no mobile.
- Elite converte automaticamente imagens para WebP e normaliza as dimensões.

---

## Layout de exibição

Após adicionar um ícone ou imagem, escolha como o ícone/imagem e o texto são dispostos em **Layout → Layout de exibição**:

| Opção | Layout |
|---|---|
| **Automático** | Segue o padrão do tipo de menu |
| **Cima-Baixo** | Ícone/imagem em cima, texto em baixo |
| **Esquerda-Direita** | Ícone/imagem à esquerda, texto à direita |
| **Baixo-Cima** | Texto em cima, ícone/imagem em baixo |
| **Direita-Esquerda** | Texto à esquerda, ícone/imagem à direita |
| **Apenas Ícone/Imagem** | Apenas ícone/imagem — texto oculto |
| **Apenas Texto** | Apenas texto — ícone/imagem oculto |

---

## Estilizar o ícone ou imagem

Vá para **Interface → Estilo de ícone / imagem** para ajustar a aparência:

| Configuração | Efeito |
|---|---|
| **Cor do ícone** | Alterar a cor vetorial do ícone (hex). Não se aplica a arquivos de imagem. |
| **Tamanho (px)** | Tamanho de exibição do ícone ou imagem |
| **Contêiner** | Cor de fundo da caixa ao redor do ícone |
| **Preenchimento (px)** | Espaço entre o ícone e sua caixa contêiner |
| **Curva (px)** | Raio de canto do contêiner — `50` para círculo |

**Exemplo — ícone branco em caixa azul redonda:**

```
Cor do ícone:  #FFFFFF
Contêiner:     #0066CC
Preenchimento: 10
Curva:         50
```
