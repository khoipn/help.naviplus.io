---
description: Instale o plugin Navi+ AI Menu Builder no seu site WordPress ou WooCommerce — a partir do diretório WordPress.org, um upload ZIP, FTP ou WP-CLI.
lang: pt-br
layout: default
permalink: /pt-br/docs/integrations/wordpress-woocommerce/install-plugin/
title: Instale o plugin Navi+ AI Menu Builder
---
# Instale o plugin Navi+ AI Menu Builder

> O nome completo do plugin no WordPress.org é **Naviplus Menu Builder**. No restante deste documento, ele é referido como **Navi+ AI Menu Builder** (ou apenas **Navi+**).

O plugin está publicado no diretório oficial de plugins do WordPress.org, então ele é instalado da mesma forma que qualquer outro plugin do WordPress — sem ZIP de terceiros, sem chave de licença.

> Diretório: <https://wordpress.org/plugins/naviplus-menu-builder/>

---

## Opção A — Instalar a partir do admin do WordPress (recomendado)

1. Faça login no seu admin do WordPress (`/wp-admin/`).
2. Vá para **Plugins → Adicionar Novo**.
3. Pesquise por **Naviplus Menu Builder** (ou apenas **Navi+**).
4. Clique em **Instalar Agora**, depois **Ativar**.

Após a ativação, o plugin estará disponível em **Aparência → Naviplus Menu Builder** na barra lateral do admin.

---

## Opção B — Fazer upload de um ZIP

Use isso se seu host bloquear instalações do diretório.

1. Na [página do plugin WordPress.org](https://wordpress.org/plugins/naviplus-menu-builder/), clique em **Baixar** para obter o arquivo `.zip`.
2. No seu admin, vá para **Plugins → Adicionar Novo → Fazer Upload do Plugin**.
3. Escolha o ZIP, clique em **Instalar Agora**, depois **Ativar Plugin**.

---

## Opção C — FTP / gerenciador de arquivos

1. Extraia o ZIP do plugin. A pasta raiz dentro do arquivo é `naviplus-menu-builder/`.
2. Faça upload dessa pasta para `wp-content/plugins/` no seu servidor.
3. Em **Plugins → Plugins Instalados**, clique em **Ativar** em **Naviplus Menu Builder**.

---

## Opção D — WP-CLI

```bash
wp plugin install naviplus-menu-builder --activate
```

---

## Requisitos

- WordPress **5.8** ou mais recente — é recomendado usar a versão estável mais recente do WordPress que seu host suporta.
- Capacidade de administrador — necessária para instalar plugins e editar **Aparência**.

---

## Após a ativação

O plugin está instalado, mas ainda não está renderizando nada — isso acontece depois que você cria seu primeiro menu no editor, momento em que o plugin conecta automaticamente seu site ao Navi+.

Continue com **[Crie seu primeiro menu]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**.
