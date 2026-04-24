---
description: O modo de depuração é um conjunto de ferramentas leve incorporado na biblioteca Navi+ que ajuda você a trabalhar de forma mais eficaz com os menus Navi+.
lang: pt-br
layout: default
permalink: /pt-br/docs/usage/debug-mode-find-css-selectors/
title: Modo de depuração - Encontrar seletores CSS
---
# Modo de depuração - Encontrar seletores CSS

O modo de depuração é um conjunto de ferramentas leve incorporado na biblioteca Navi+ que ajuda você a trabalhar de forma mais eficaz com os menus Navi+.

### 1. Encontrar seletores CSS

Para habilitar o modo de depuração, use o seguinte formato de URL:
`yourdomain.com#navidebug-on`

Seu site mudará para o Modo de Depuração Navi+. Passe o mouse sobre diferentes áreas do site para visualizar seus seletores CSS correspondentes. Mova o cursor para localizar precisamente a área de destino desejada.

Por favor, preste atenção aos atalhos de teclado abaixo para trabalhar de forma mais eficiente.

**Atalho 1.** Copiando um seletor CSS

* Pressione **⌘+C** no MacOS ou **Ctrl+C** no Windows para copiar o seletor CSS selecionado.

Você pode então colá-lo nas configurações do **Menu de Publicação** para:

* Mega Menu / Grid Menu: para inserir o menu antes, depois ou substituir o seletor CSS de destino
* Slide Menu: para acionar o slide menu quando o seletor CSS de destino for clicado ou tocado

**Atalho 2.** Navegando entre níveis de seletores

* Pressione [↑/←], ou Backspace para mover para um seletor de nível pai
* Pressione [↓/→] para mover para um seletor de nível filho

**Dicas importantes:** Na maioria dos casos, você não encontrará o seletor CSS perfeito imediatamente. Com base na experiência, muitas vezes é mais fácil:

1. Começar selecionando um seletor de nível filho
2. Em seguida, subir 1–2 níveis pais (um destaque visual aparecerá em seu site)
3. Copiar o seletor usando ⌘+C (Ctrl+C)
4. Colá-lo na configuração do menu e testar

Às vezes, você pode precisar repetir esse processo várias vezes ao inserir, substituir ou vincular eventos de menu a seletores CSS para alcançar a experiência do usuário desejada.

#### 1.1. Encontrar o Seletor CSS no Desktop

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FlstMiQTp0fQqvJ89jXhD%2FFrame%20210.webp?alt=media&#x26;token=95d6a152-b58b-4894-9cdc-150200fae5e1" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fuc7fc7CicJcQ3XNvwDVA%2FFrame%20211.webp?alt=media&#x26;token=84a5c3ad-04bf-4b4e-9c8c-bc334f7f4646" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FuE3IlMcHedAfwQR98YhM%2FFrame%20212.webp?alt=media&#x26;token=e02c2aa2-0792-4811-8005-46a5b7b0b9fe" alt=""><figcaption></figcaption></figure>

#### 1.2. Encontrar Seletor CSS no Móvel

Para encontrar um seletor CSS no móvel, habilite o modo Móvel (Responsivo) em seu navegador.
Então clique com o botão direito em qualquer lugar da página e selecione:

* Chrome: Inspecionar
* Safari: Inspecionar Elemento
* Firefox: Inspecionar
* Edge: Inspecionar / Inspecionar Elemento

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FK7F58NVYCerBTqG9EWjB%2FFrame%20213.webp?alt=media&#x26;token=2f2c059a-1346-446d-a19f-e2998050791a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FsNvXhBMniymbZ1tD9c4p%2FFrame%20214.webp?alt=media&#x26;token=257f082d-ff6b-4ce0-8eaa-6160a697a67e" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FJAZm1dPEZrfeqtpNXA8O%2FFrame%20215.webp?alt=media&#x26;token=2847a4ef-e298-4986-9367-36a6abf914d8" alt=""><figcaption></figcaption></figure>
