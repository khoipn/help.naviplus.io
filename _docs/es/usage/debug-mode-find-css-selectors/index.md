---
description: El modo de depuración es un conjunto de herramientas ligero integrado en la biblioteca Navi+ que te ayuda a trabajar de manera más efectiva con los menús de Navi+.
lang: es
layout: default
permalink: /es/docs/usage/debug-mode-find-css-selectors/
title: Modo de depuración - Encontrar selectores CSS
---
# Modo de depuración - Encontrar selectores CSS

El modo de depuración es un conjunto de herramientas ligero integrado en la biblioteca Navi+ que te ayuda a trabajar de manera más efectiva con los menús de Navi+.

### 1. Encontrar selectores CSS

Para habilitar el modo de depuración, utiliza el siguiente formato de URL:
`yourdomain.com#navidebug-on`

Tu sitio web cambiará al Modo de Depuración de Navi+. Pasa el ratón sobre diferentes áreas del sitio web para ver sus correspondientes selectores CSS. Mueve el cursor para localizar con precisión el área objetivo deseada.

Por favor, presta atención a los atajos de teclado a continuación para trabajar de manera más eficiente.

**Atajo 1.** Copiar un selector CSS

* Presiona **⌘+C** en MacOS o **Ctrl+C** en Windows para copiar el selector CSS seleccionado.

Luego puedes pegarlo en la configuración del **Menú de Publicación** para:

* Mega Menu / Grid Menu: para insertar el menú antes, después o reemplazar el selector CSS objetivo
* Slide Menu: para activar el menú deslizante cuando se hace clic o se toca el selector CSS objetivo

**Atajo 2.** Navegar entre niveles de selectores

* Presiona [↑/←], o Retroceso para moverte a un selector de nivel padre
* Presiona [↓/→] para moverte a un selector de nivel hijo

**Consejos importantes:** En la mayoría de los casos, no encontrarás el selector CSS perfecto de inmediato. Basado en la experiencia, a menudo es más fácil:

1. Comenzar seleccionando un selector de nivel hijo
2. Luego subir 1–2 niveles padres (un resaltado visual aparecerá en tu sitio web)
3. Copiar el selector usando ⌘+C (Ctrl+C)
4. Pegar en la configuración del menú y probar

A veces, puede que necesites repetir este proceso varias veces al insertar, reemplazar o vincular eventos de menú a selectores CSS para lograr la experiencia de usuario deseada.

#### 1.1. Encontrar el selector CSS en Desktop

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FlstMiQTp0fQqvJ89jXhD%2FFrame%20210.webp?alt=media&#x26;token=95d6a152-b58b-4894-9cdc-150200fae5e1" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fuc7fc7CicJcQ3XNvwDVA%2FFrame%20211.webp?alt=media&#x26;token=84a5c3ad-04bf-4b4e-9c8c-bc334f7f4646" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FuE3IlMcHedAfwQR98YhM%2FFrame%20212.webp?alt=media&#x26;token=e02c2aa2-0792-4811-8005-46a5b7b0b9fe" alt=""><figcaption></figcaption></figure>

#### 1.2. Encontrar el selector CSS en Móvil

Para encontrar un selector CSS en móvil, habilita el modo Móvil (Responsivo) en tu navegador.
Luego haz clic derecho en cualquier parte de la página y selecciona:

* Chrome: Inspeccionar
* Safari: Inspeccionar Elemento
* Firefox: Inspeccionar
* Edge: Inspeccionar / Inspeccionar Elemento

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FK7F58NVYCerBTqG9EWjB%2FFrame%20213.webp?alt=media&#x26;token=2f2c059a-1346-446d-a19f-e2998050791a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FsNvXhBMniymbZ1tD9c4p%2FFrame%20214.webp?alt=media&#x26;token=257f082d-ff6b-4ce0-8eaa-6160a697a67e" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FJAZm1dPEZrfeqtpNXA8O%2FFrame%20215.webp?alt=media&#x26;token=2847a4ef-e298-4986-9367-36a6abf914d8" alt=""><figcaption></figcaption></figure>
