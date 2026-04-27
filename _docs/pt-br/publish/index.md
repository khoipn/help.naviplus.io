---
description: Publique seu menu Navi+ no seu site — ativar/desativar, escolher método de incorporação, configurar visibilidade por dispositivo e filtrar por URL.
layout: default
permalink: /pt-br/docs/publish/
title: Publicar (Publish)
---
# Publicar (Publish)

A seção **Publish** controla como seu menu aparece no seu site ao vivo: alternar o menu ligado/desligado, escolher o método de incorporação, configurar visibilidade por dispositivo e filtrar por URL. Este é o passo final após o design — sem salvar as configurações de Publish, o menu não aparecerá.

---

## Tópicos

| # | Tópico | |
|---|---|---|
| 1 | Visão geral dos tipos de menu e métodos de deploy | [Publish Overview](/pt-br/docs/publish/publish-overview/) |
| 2 | Sticky / FAB — App Embeds (Shopify) ou `<head>` (Global) | [Publish Sticky](/pt-br/docs/publish/publish-sticky/) |
| 3 | Menu Slide — ativação baseada em gatilho | [Publish Slide](/pt-br/docs/publish/publish-slide/) |
| 4 | Section / Mega / Grid — Insert/Replace e App Block | [Publish Section](/pt-br/docs/publish/publish-section/) |
| 5 | Filtrar por dispositivo e palavra-chave de URL | [Publish Filter](/pt-br/docs/publish/publish-filter/) |
| 6 | Otimizar velocidade e UX após publicar | [Publish Optimize](/pt-br/docs/publish/publish-optimize/) |

---

## Referência Rápida

```
Tipo de menu        Método principal
────────────────────────────────────────────────────
Sticky / TABBAR     App Embeds (Shopify) / <head> (Global) + toggle ativar
Sticky / FAB        App Embeds (Shopify) / <head> (Global) + toggle ativar
Slide (CONTEXT)     App Embeds / <head> + toggle ativar + configurar gatilho
Section (Mega/Grid) Insert/Replace (CSS Selector) ou App Block (Shopify)
```

**Regra:** Toggle ativado = menu está ao vivo. Toggle desativado = completamente oculto do site, sem necessidade de remover o código de incorporação.
