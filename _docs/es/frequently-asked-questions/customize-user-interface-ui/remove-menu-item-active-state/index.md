---
description: Por defecto, Navi+ verifica la URL de la página actual para mostrar el estado activo en el menú (usando un fondo gris). Esto ayuda a sus clientes a navegar más fácilmente.
lang: es
layout: default
permalink: /es/docs/frequently-asked-questions/customize-user-interface-ui/remove-menu-item-active-state/
title: ¿Eliminar el estado activo del elemento del menú?
---
# ¿Eliminar el estado activo del elemento del menú?

Por defecto, Navi+ verifica la URL de la página actual para mostrar el estado activo en el menú (usando un fondo gris). Esto ayuda a sus clientes a navegar más fácilmente.

Sin embargo, el estado activo no siempre es necesario, especialmente en pantallas de escritorio amplias donde hay otras formas de indicar "dónde estás," como migas de pan. A veces, puede que desee eliminar el estado activo para que el menú se vea más limpio.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FAQCfjosVopNC9mXDDbII%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=1167aaa9-c22e-4102-9eb9-6e5ee10dc14a" alt=""><figcaption></figcaption></figure>

Aquí está cómo hacerlo:

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyaI6k6GmW3A5CGipYz1p%2FCSS.1.1.png?alt=media&#x26;token=1ddf87db-9f58-4109-9886-441efd8e8f24" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FXRcp2647QfYG9b0JyS1t%2FCSS.1.2.png?alt=media&#x26;token=742f4ac0-50c1-48ec-bf8f-ccc7d89818cc" alt=""><figcaption></figcaption></figure>

Método 1: Si desea aplicarlo solo a este menú, el código CSS es el siguiente (pégalo en el cuadro de Hoja de Estilo Interna / CSS):

```
ul li.navi-active {
  background: initial;
}
```

Explicación: Esto agrega una regla CSS como `#SF-123456789 ul li.navi-active { background: initial; }` a la página, aplicándose solo a este menú (con embedID `SF-123456789`) y no afectando a otros menús.

Método 2: Si desea eliminar todos los efectos activos en todos los menús de Navi+, use el siguiente código (pégalo en el cuadro de Hoja de Estilo Global / CSS):

```
.naviItem ul li.navi-active {
  background: initial;
}
```
