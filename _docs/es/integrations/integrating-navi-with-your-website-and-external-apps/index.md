---
description: Aquí encontrarás guías sobre cómo conectar Navi+ con otras aplicaciones (como herramientas de chat, lealtad, etc.). Puedes agregarlas como elementos de menú, abrir aplicaciones directamente desde Nav...
lang: es
layout: default
permalink: /es/docs/integrations/integrating-navi-with-your-website-and-external-apps/
title: Integrando Navi+ con tu sitio web y aplicaciones externas
---
# Integrando Navi+ con tu sitio web y aplicaciones externas

Aquí encontrarás guías sobre cómo conectar Navi+ con otras aplicaciones (como herramientas de chat, lealtad, etc.). Puedes agregarlas como elementos de menú, abrir aplicaciones directamente desde Navi+, y asegurarte de que todo funcione junto sin superponerse en tu sitio.

### 1. Integra otras aplicaciones fijas en un solo elemento de menú de Navi+

Navi+ consolida múltiples aplicaciones (Chat Box, Lealtad, Prueba Social, Barras Promocionales, etc.) en elementos de menú, manteniendo tu sitio web limpio y previniendo superposiciones—especialmente valioso en dispositivos móviles con espacio de pantalla limitado.\
Para lograr esto, sigue estos 2 pasos:

• Paso 1: Oculta los íconos de las aplicaciones fijas usando CSS. Ver detalle aquí\
• Paso 2: Usa JavaScript para los elementos de menú de modo que al hacer clic en ellos se abran los paneles de las respectivas aplicaciones.

Ve el ejemplo de integración de chat de Tidi. Esta es una configuración relativamente avanzada, así que por favor contacta al soporte de Navi+ para asistencia.

### 2. Disparadores de JavaScript – interactúa con aplicaciones externas

Navi+ permite ejecutar funciones de JavaScript desde los elementos de menú cuando son clicados por los usuarios (javascript:Function). Ve el ejemplo de integración de chat de Tidi para entender cómo usar dos funciones de JavaScript para integrar el chat de Tidio como un elemento de menú de Navi+:

1. Ocultar ícono de Tidio: Una función global que espera a que Tidio se renderice, luego lo oculta
2. openTidio(): Abre el panel de chat de Tidio cuando los usuarios hacen clic en el elemento de menú "Chat with us"

Navi+ también te permite definir las asignaciones de clase y atributo (incluso en forma de id="menu-item-1") para habilitar la interacción con otras aplicaciones o código JavaScript. Puedes usar funciones de JavaScript para acceder directamente a los elementos de menú a través de clase o atributo, por ejemplo: para crear un tutorial guiado.

### 3. Personalizando la interfaz de Navi+ con CSS externo

Cada menú de Navi+ está definido por un elemento div con id="SF-123456789" (id embebido). Ve la estructura de marco HTML/CSS de un menú de Navi+ aquí para escribir código CSS para personalizar la interfaz del menú.\
Por ejemplo, para cambiar el color de un elemento de menú de nivel 2, puedes escribir el siguiente CSS:

`#SF-123456789 ul li ul.children li .name { color: red; }`

Navi+ también te permite definir las asignaciones de clase y atributo (incluso en forma de id="menu-item-1") para habilitar la interacción con otras aplicaciones o código JavaScript. Puedes estilizar cada elemento de menú usando nombres de clase o atributos.

### 4. Comunicación entre menús de Navi+

Desde un elemento de menú de Navi+, puedes llamar para abrir otro menú deslizante de Navi+ usando la sintaxis: `open:NaviMenu.`\
Con esta sintaxis, puedes expandir infinitamente los niveles de menú haciendo que los menús deslizantes llamen a otros menús deslizantes.

### 5. Abre un menú deslizante desde cualquier lugar de tu sitio web

Con los menús deslizantes, además de abrirlos a través de elementos de menú de otros menús de Navi+, también puedes activar un menú deslizante de Navi+ llamando a la función de JavaScript: `naviman.openNaviMenu()`.\
Por ejemplo: Crea un botón flotante usando HTML y CSS, luego asigna su acción de clic para abrir un menú deslizante de Navi+ – tendrás instantáneamente un menú con aspecto profesional.

### 6. Simular acciones del usuario (clic, enfoque, desplazamiento, etc.)

Navi+ proporciona varias funciones (activadas cuando se hace clic en un elemento de menú):

* `open:clickTo` para simular un clic en un Selector CSS HTML. Esto es extremadamente útil para habilitar que el menú de Navi+ active menús hamburguesa predeterminados, herramientas de búsqueda, paneles de carrito, menús desplegables de idioma... o active herramientas de chat de otras aplicaciones.
* `open:focusTo` para simular el enfoque en un Selector CSS HTML. Esto es extremadamente útil para simular clics en herramientas de búsqueda o campos de suscripción por correo electrónico.
* `scroll:Top`, `scroll:Bottom`, `scroll:OnPage` para desplazar la página web a la zona deseada. Esto es extremadamente útil cuando deseas desplazarte a una sección objetivo en la página en lugar de navegar a una página diferente.

### 7. Para compartir y mejorar la participación en el sitio

Navi+ proporciona varias funciones (activadas cuando se hace clic en un elemento de menú):

* `open:ShareMe` para compartir el enlace del sitio web
* `share:CopyUrl` para copiar la URL actual al portapapeles del dispositivo
* `share:Facebook` para compartir la URL actual en Facebook
* `share:Tweet` para compartir la URL actual en Twitter (X)

### 8. Integración con otras aplicaciones de dispositivos (como Teléfono)

Navi+ proporciona varias funciones (activadas cuando se hace clic en un elemento de menú):

* `tel:+[Código de país][Teléfono]` para llamar al número
* `sms:+[Código de país][Teléfono]?body=[Texto]` para enviar un mensaje SMS al número con un contenido configurado (opcional)
* `mailto:[Dirección]` para enviar un correo electrónico
* `https://m.me/[TuNombre]` para chatear con tu Facebook Messenger
* `https://wa.me/[Teléfono]` para chatear con tu WhatsApp
* `https://lin.ee/[código de línea]` para chatear con tu Line
* `https://zalo.me/+[Código de país][Teléfono]` para chatear con tu Zalo

### 9. Solo para Shopify

Navi+ proporciona varias funciones (activadas cuando se hace clic en un elemento de menú):

* `open:ChangeLanguage` para cambiar el idioma si el sitio web usa Shopify
* Shopify Inbox: Oculta el ícono de Shopify Inbox e intégralo en el menú de Navi+ como un elemento de menú que abre el panel de chat al hacer clic. Ver detalle aquí
* Abre el menú hamburguesa o carrito, panel de búsqueda: Ver detalle aquí

### ¿No lo ves en la lista?

No dudes en enviarme tu solicitud de integración. Estoy encantado de ayudar, y también apoya el crecimiento de Navi+.
