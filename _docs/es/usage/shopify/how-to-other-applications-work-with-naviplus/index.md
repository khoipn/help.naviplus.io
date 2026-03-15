---
description: En muchos casos, necesitarás usar múltiples aplicaciones integradas en tu sitio web. Esto puede generar un problema de usabilidad habitual, ya que los elementos de la interfaz pueden superponerse (s...
lang: es
layout: default
permalink: /es/docs/usage/shopify/how-to-other-applications-work-with-naviplus/
title: Evitar que los menús de Navi+ se superpongan a otras aplicaciones
---
# Evitar que los menús de Navi+ se superpongan a otras aplicaciones

### ¿Por qué será un problema?

En muchos casos, necesitarás usar múltiples aplicaciones integradas en tu sitio web. Esto puede generar un problema de usabilidad habitual, ya que los elementos de la interfaz pueden superponerse (ver la imagen a continuación). Un ejemplo simple es cuando usas frecuentemente una aplicación de chat como [Shopify Inbox ](https://www.shopify.com/vn/inbox "Shopify Inbox ")o WhatsApp. Típicamente, estas aplicaciones de chat ocupan una posición prominente en la esquina inferior derecha de la pantalla del teléfono. Cuando decides usar Navi+ para mejorar significativamente la navegación en tu sitio web, surge este problema. Aquí hay algunas formas de abordar este problema.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fdccbwi5aXf4XvOxYGIvU%2FFrame%201.png?alt=media&#x26;token=c953f4d5-442c-486d-9493-90490ffd309f" alt=""><figcaption></figcaption></figure>

### Solución 1: Ajustar la posición de los botones flotantes (Demostración con Shopify Inbox)

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F13ShtYFy9yreGicTmiOm%2FFrame%202.png?alt=media&#x26;token=13a96b69-4907-4ad5-88b5-b41dcc95c35d" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FmYVravYrInpp21SPJuKm%2FFrame%203.png?alt=media&#x26;token=9d4c2fa0-2806-4b19-8dce-c403fc582315" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Feuh272YZES4OjBSMok8s%2FFrame%204.png?alt=media&#x26;token=d6b6f9f8-aa4e-4539-a29c-6ae39cbcd344" alt=""><figcaption></figcaption></figure>

### Solución 2: Configurar el padding del menú de Navi+ para evitar superposiciones con aplicaciones.

El padding y el margen son herramientas ampliamente utilizadas y poderosas en tecnología, especialmente en HTML5/CSS. Al establecer el padding de acuerdo con la posición de esa área, puedes evitar la superposición de aplicaciones. También puedes establecer la distancia del menú de Navi+ a los bordes ajustando el margen.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fo0hlCj8BSJLa9WBqrLo8%2FFrame%205.png?alt=media&#x26;token=dfe6c2d9-ea6c-4b97-bd55-8ec33ef7d729" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fkj87WVMtDYGKHxPBAK91%2FFrame%206.png?alt=media&#x26;token=ced78c24-1797-422a-9662-45094a5cee12" alt=""><figcaption></figcaption></figure>

### Solución 3: Reemplazar las barras inferiores por barras superiores/barras de soporte o botones de acción flotantes

Aunque la barra inferior es la herramienta más efectiva para guiar a los usuarios, utilizada por casi todas las aplicaciones nativas móviles, o web móvil (más lentas), a veces puedes querer colocar tu menú de Navi+ en una posición diferente, como en la parte superior (barra superior), derecha/izquierda (barra de soporte), flotando sobre la interfaz (botón de acción flotante). O puedes combinarlas para la mejor eficiencia de navegación. Consulta las siguientes opciones de Navi+ para entender cómo hacerlo, a veces solo toma 1 segundo, y resolverás tu problema.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FiCuFsYdJSucFduHw9zJO%2FFrame%207.png?alt=media&#x26;token=1be98c44-27c3-489d-9e6d-87e1a95fafb7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FbE4JHbm6ZYI6C3uF0X9j%2FFrame%208.png?alt=media&#x26;token=5c85d3bd-5023-4851-82aa-9288f9294d1c" alt=""><figcaption></figcaption></figure>

### Z-index - priorizando el orden de visualización de "aplicaciones flotantes"

La propiedad z-index especifica el orden de apilamiento de un elemento. Un elemento con un mayor orden de apilamiento siempre está delante de un elemento con un menor orden de apilamiento. Ver la imagen a continuación para entender más.&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyMHcqutHWOUtEEYqMDn6%2Fz-index1.png?alt=media&#x26;token=fb6a0100-e337-4115-9212-a8c8d32888ef" alt=""><figcaption></figcaption></figure>

El z-index predeterminado para el menú de Navi+ está configurado en 50 para todos, ya que 'no nos consideramos más importantes que otras aplicaciones', pero 50 también es el número suficiente para mostrarse bien en todos los temas de Shopify. A veces, es posible que necesites ajustar el z-index de tu menú de Navi+ en los siguientes casos:&#x20;

1. Cuando usas múltiples menús de Navi+ en una página y deseas que se superpongan, pero un menú aparece por encima de los otros.&#x20;
2. Cuando hay otros objetos/aplicaciones superponiéndose a tu menú de Navi+, en cuyo caso, el z-index resolverá todo.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg93TvrzCEEKdFZvdmdbh%2Fz-index2.png?alt=media&#x26;token=1289e3a7-6ea1-44ec-a284-8964ac4b6f35" alt=""><figcaption></figcaption></figure>

Hay una pregunta desafiante: ¿qué z-index deberías configurar para tu menú de Navi+ para evitar superposiciones como deseas? Si tienes múltiples menús de Navi+, puedes organizarlos según tus preferencias sin preocuparte, por eso estamos construyendo Navi+ para que sea lo más versátil posible para las actuales 'aplicaciones flotantes' en Shopify.&#x20;

Si necesitas configurar el z-index para tu menú de Navi+ para manejar conflictos con otras aplicaciones, puedes buscar tu z-index desde un mínimo de 0 hasta un máximo de 2,147,483,647. Esto puede parecer un poco difícil, pero es la forma más fácil y mejor porque el z-index no afectará la visualización de tu interfaz más allá del problema que estás enfrentando. Si tienes experiencia con la depuración de CSS y HTML, esto es fácil, solo activa el modo de inspección para ver qué z-index tiene la aplicación en conflicto. O, la forma más fácil, simplemente haz clic en el ícono de chat de Crisp para chatear con un asesor de Navi+; estaremos encantados de ayudarte con este problema.
