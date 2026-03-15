---
description: 'Si despliega su sitio web en Shopify, por favor instale la aplicación dedicada de Shopify aquí: <https://apps.shopify.com/pronavi-navigation-design> - Está optimizada ...'
lang: es
layout: default
permalink: /es/docs/usage/tabbar-bottom-navigation/publish-on-wordpress-woo-wix-others/
title: Publicar en WordPress / Woo / Wix / Otros
---
# Publicar en WordPress / Woo / Wix / Otros

Si despliega su sitio web en Shopify, por favor instale la dedicada [Shopify](https://www.shopify.com/ "Shopify") aplicación aquí: <https://apps.shopify.com/pronavi-navigation-design> - Está optimizada para esta plataforma, permitiendo un despliegue estable con muchas opciones útiles integradas.

Si despliega su sitio web en otras plataformas (como [WordPress](https://wordpress.org/ "WordPress"), [WooCommerce](https://woocommerce.com/ "WooCommerce"), [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), y sitios web personalizados construidos con PHP, Node.js, o HTML puro..), tiene los siguientes métodos de implementación:

### 1. Incrustar Navi+ en Su Sitio Web

Este método de implementación es adecuado para todos los tipos de menú que Navi+ actualmente soporta, incluyendo: Tabbar, Mega menu, Slide menu, FAB, y Grid menu. Este código solo necesita ser utilizado una vez para todos los menús.

```html
<!-- Inserte este código en el <head> del sitio web. (c) naviplus.io -->
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Inserte este código en el <head> del sitio web -->
```

### FAQ (Preguntas Frecuentes)

<details><summary>¿Qué es un token?</summary>
<p>Cada cuenta de Navi+ se asigna un token único. Puede ver y copiar este token directamente desde el encabezado de la aplicación. El token se utiliza para publicar su menú de forma segura.</p>
</details>

<details><summary>¿Qué es https://live.naviplus.app/start.js?</summary>
<p>Esta es la URL fija de Navi+ que contiene la lógica de inicialización de la aplicación. El script es ligero (alrededor de 4KB), lo que permite que se cargue rápidamente en la mayoría de los dispositivos y condiciones de red. Se entrega a través de Cloudflare y BunnyCDN para proporcionar un rendimiento global estable y una compatibilidad confiable con navegadores modernos.</p>
<p>Usar el método de carga asíncrona también significa que no afecta el proceso de carga del sitio web.</p>
</details>

<details><summary>¿Este código de incrustación ralentiza mi sitio web?</summary>
<p>El código a continuación es extremadamente ligero y se puede insertar en su sitio web sin afectar la velocidad (solo toma alrededor de 100-200ms para la primera carga y 0ms para cargas posteriores), la experiencia del cliente, o las puntuaciones de SEO</p>
</details>

<details><summary>¿Cuál es el mejor lugar para insertar este fragmento de código?</summary>
<p>En la sección del head (o tan pronto como sea posible). ¿Por qué? El sitio web cargará secuencialmente los recursos para renderizar la interfaz. Colocar Navi+ lo más temprano posible en el código HTML ayudará a que su menú esté listo para mostrarse tan pronto como sea posible al esperar hasta que se cumplan las condiciones, luego el menú aparecerá inmediatamente. Esto mejora la experiencia del usuario.</p>
</details>

<details><summary>¿Cómo puedo saber si este código se ha incrustado correctamente en mi sitio web?</summary>
<p>Hay dos maneras:</p>
<p><strong>Método 1 (para todos):</strong></p>
<p>Abra su sitio web con el sufijo #navidebug-on, por ejemplo: <a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>. Si el sitio web cambia a modo Debug, la incrustación está funcionando correctamente. El modo Debug le ayuda a identificar fácilmente los selectores CSS. Use #navidebug-off para desactivarlo.</p>
<p><strong>Método 2 (para desarrolladores):</strong></p>
<p>Abra las herramientas de inspección de su navegador, vaya a la pestaña de Consola, y busque un mensaje verde: “Usando Navi+..”. Este mensaje indica que el código se ha incrustado con éxito.</p>
</details>

***

### 2. Insertar un Menú Navi+ en Cualquier Punto de Su Sitio Web

El código a continuación se puede usar múltiples veces en un sitio web con diferentes información de inserción (especialmente el **ID Embebido**, como SF-123456789). Cuando el sitio web se renderiza, el menú se desplegará y mostrará en la posición donde se inserta el código cuando se cumplan las condiciones. Este tipo de menú es adecuado para: Mega menu, Grid, etc.

```html
<!-- Inserte el código donde aparece el menú SF-123456789. (c) naviplus.io -->
<div class="naviman_app section_naviman_app" id="SF-123456789-container"></div>
<script>(window._navi_setting ||= []).push({
   token: "NAVI123456",
   embed_id: "SF-123456789"
});</script>
&lt;script src="https://live.naviplus.app/start.js" async&gt;&lt;/script&gt;
<!-- Inserte el código donde aparece el menú SF-123456789 -->
```

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">Importante</mark>**:** El código anterior utiliza el código de incrustación de muestra <mark style="color:orange;">SF-123456789</mark>. Asegúrese de reemplazarlo con su código de menú de incrustación real.
{% comment %}endhint{% endcomment %}
