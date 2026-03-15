---
description: Esto se trata del problema de relleno inferior bajo la barra inferior cuando se abre un sitio web de Shopify que utiliza Navi+ dentro de la aplicación de Google en iPhone.
lang: es
layout: default
permalink: /es/docs/limitation/shopify-bottom-bar-issue-on-google-app-iphone/
title: Problema de la barra inferior de Shopify en la aplicación de Google (iPhone)
---
# Problema de la barra inferior de Shopify en la aplicación de Google (iPhone)

Esto se trata del problema de relleno inferior bajo la barra inferior cuando se abre un sitio web de Shopify que utiliza **Navi+** dentro de la aplicación de Google en iPhone.

Cuando se accede a un sitio web de Shopify que utiliza **Navi+** (o cualquier aplicación con un menú inferior fijo, botones flotantes, etc.), los usuarios que abren el sitio web **dentro de la aplicación de Google en iPhone** pueden ver a veces un espacio en blanco inusual que aparece en la parte inferior de la pantalla.

Este problema solo ocurre en la aplicación de Google y **no es causado por Navi+**. A continuación se presenta una explicación clara y sencilla.

***

### 1. ¿Dónde ocurre el problema?

El problema solo ocurre cuando:

* El sitio web está funcionando en **Shopify**
* Hay una **barra inferior** (Navi+ o cualquier otra aplicación), o un **botón de acción flotante (FAB)** como widgets de chat, botones de lealtad, etc.
* El usuario abre el sitio web **a través de la aplicación de Google en iPhone** (generalmente buscando y tocando el sitio web)

El problema **no** ocurre al abrir el sitio web usando:

* Safari (el navegador predeterminado de iPhone)
* Chrome
* Navegador de Facebook
* Navegador de TikTok
* …

Esto confirma que el problema proviene de la aplicación de Google en iOS.

***

### 2. ¿Por qué los sitios web de Shopify que utilizan Navi+ son más propensos a experimentar este problema?

La aplicación de Google utiliza una forma especial de renderizar sitios web (WebView de Apple). Este motor de renderizado tiene un problema de larga data al calcular la altura real de la pantalla en sitios web que tienen:

* Una barra inferior fija
* HTML o UI generados dinámicamente por JavaScript
* Diseños complejos como Shopify (múltiples capas de contenedores y secciones que cambian constantemente)

Cuando ocurren estas condiciones, la aplicación de Google puede calcular incorrectamente la altura real del viewport y crear un **relleno inferior falso**.

➡️ Esta es la razón por la que el problema aparece con más frecuencia en sitios web de Shopify que utilizan Navi+ o otras aplicaciones de barra inferior/FAB.

***

### 3. ¿Es este un problema de Navi+?

No.
Este es un error inherente de la **aplicación de Google en iPhone**, y ha existido durante muchos años.

Incluso si Navi+ está deshabilitado, otras aplicaciones de Shopify que muestran barras inferiores o FABs aún experimentan el mismo problema dentro de la aplicación de Google.

***

### 4. Evidencia de que este problema no puede ser completamente solucionado

* Muchas aplicaciones de Shopify que incluyen una barra inferior o FAB experimentan el mismo problema exacto.
* Incluso algunas funciones integradas de Shopify muestran un comportamiento similar dentro de la aplicación de Google.
* Este es un problema bien conocido en la comunidad de desarrolladores, pero la aplicación de Google no lo ha abordado.
* El problema desaparece tan pronto como el usuario **toca en cualquier parte de la pantalla** → la aplicación de Google fuerza un re-render y recalcula la altura correcta.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIJeUOw7iYKzsFXSLVQK3%2FEx-1.1.2.png?alt=media&#x26;token=c2c351d9-10fd-47ed-bbef-1e436ab3ac4f" alt=""><figcaption></figcaption></figure>

***

### 5. Solución actual de Navi+

Navi+ ha investigado y probado múltiples enfoques, pero dado que el problema se origina en la propia aplicación de Google, no puede ser completamente resuelto.

Sin embargo, Navi+ ha implementado la **mejor mitigación posible**:

#### ✔️ El problema solo aparece la primera vez

Generalmente ocurre cuando el usuario:

* abre el sitio web dentro de la aplicación de Google
* y navega o toca en cualquier parte de la página

Cuando esto sucede, Navi+ activa un mecanismo de corrección único. Tan pronto como el usuario:

* toca ligeramente la pantalla
* desplaza un poco
* o interactúa de cualquier manera pequeña

#### ✔️ El problema desaparece automáticamente

La aplicación de Google volverá a renderizar todo el diseño, y a partir de ese momento:

* La barra inferior se muestra en la posición correcta
* El problema no volverá a aparecer hasta que la aplicación de Google se cierre y se vuelva a abrir

#### ✔️ Esta mitigación también reduce errores similares de otras aplicaciones posicionadas en la parte inferior cuando se utilizan junto con Navi+

***

### 6. Explicación rápida para usuarios finales

Este mensaje está diseñado para usuarios no técnicos:

> “La aplicación de Google en iPhone tiene un error de visualización al abrir sitios web de Shopify que utilizan una barra inferior como Navi+. Este problema proviene de la aplicación de Google y afecta a muchas aplicaciones, no solo a Navi+. Solo ocurre una vez y desaparecerá después de cualquier toque o desplazamiento en la pantalla. Si usas Safari o Chrome en su lugar, el problema no ocurrirá.”

***

### 7. Conclusión

❌ No es un problema de Navi+
❌ No es un problema de Shopify

✔️ Un error de visualización en la aplicación de Google en iPhone
✔️ Navi+ minimiza el problema para que aparezca solo una vez y luego desaparezca
✔️ Safari/Chrome no se ven afectados en absoluto
