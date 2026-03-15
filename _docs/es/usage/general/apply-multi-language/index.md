---
description: 'Navi+ admite completamente múltiples idiomas en dos partes:'
lang: es
layout: default
permalink: /es/docs/usage/general/apply-multi-language/
title: Aplicar múltiples idiomas
---
# Aplicar múltiples idiomas

Navi+ admite completamente múltiples idiomas en dos partes:

**1) Use la sintaxis para mostrar automáticamente el idioma correcto.**

Por ejemplo, imagina que tienes un Tabbar de Navi+ mostrado en tu sitio web con 3 idiomas: inglés (predeterminado), francés y vietnamita. El código corto para francés es `fr` y para vietnamita es `vi`.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F6k6V0wCgNOrg7o30S7PT%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=5eb3293f-9f55-4917-87e1-dacff684ca9e" alt=""><figcaption></figcaption></figure>

Para mostrar el elemento del menú **Home** en el idioma correcto, usa esta sintaxis:

```
Home <fr: Maison> <vi: Trang chủ>
```

Cuando tu Tabbar se muestre, Navi+ comprobará automáticamente el idioma actual.

* Si el predeterminado es inglés, muestra **Home**.
* Si se selecciona francés, muestra **Maison**.
* Si se selecciona vietnamita, muestra **Trang chủ**.

Esto funciona tanto para los campos **description** como **link-to**.

2) Crea un menú de cambio de idioma en Navi+

Navi+ admite una sintaxis especial que te permite cambiar de idioma directamente desde tus elementos de menú.

* **Paso 1:** (Opcional) Agrega íconos de bandera si lo deseas. Puedes descargar íconos de bandera de sitios web como [Flaticon](https://www.flaticon.com "Flaticon") (Por ejemplo: <https://www.flaticon.com/authors/flags/rectangular?author_id=1&type=standard>).
* **Paso 2:** Usa la siguiente sintaxis para cambiar de idioma:

```
open:ChangeLanguage(fr)
```

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FdTn5Nk2ETEUXO7unkIu9%2FHelp.MenuTree.1.1.2-1.png?alt=media&#x26;token=e1f13362-de09-4438-ad5a-a075a9750b7d" alt=""><figcaption></figcaption></figure>
