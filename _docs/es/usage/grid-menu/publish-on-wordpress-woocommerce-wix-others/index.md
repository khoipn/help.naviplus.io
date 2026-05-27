---
description: 'Si despliega su sitio web en Shopify, instale la aplicación dedicada de Shopify aquí: <https://apps.shopify.com/pronavi-navigation-design> - Está optimizada ...'
lang: es
layout: default
permalink: /es/docs/usage/grid-menu/publish-on-wordpress-woocommerce-wix-others/
title: Publicar en Wix / Squarespace / Otros
---
# Publicar en Wix / Squarespace / Otros

> **¿En WordPress?** Use el plugin dedicado [Naviplus Menu Builder]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress/) en lugar de la inserción manual a continuación — sin ediciones de tema, coloque el Grid a través de shortcode o bloque de Gutenberg.

> **¿En Shopify?** Instale la [aplicación de Shopify](https://apps.shopify.com/pronavi-navigation-design) dedicada — está optimizada para la plataforma con opciones de publicación integradas.

Esta página cubre el **método de inserción de script manual**, que es el camino correcto para [Wix](https://wix.com/ "Wix"), [Squarespace](https://www.squarespace.com/ "Squarespace"), [Webflow](https://webflow.com/ "Webflow"), [Magento](https://magento-opensource.com/ "Magento"), y sitios web personalizados construidos con PHP, Node.js, o HTML puro. Tiene los siguientes métodos de implementación:

### 1. Insertar Navi+ en Su Sitio Web

Este método de implementación es adecuado para todos los tipos de menú que Navi+ actualmente soporta, incluyendo: Tabbar, Mega menu, Slide menu, FAB, y Grid menu. Este código solo necesita ser usado una vez para todos los menús.

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

<details><summary>¿Este código de inserción ralentiza mi sitio web?</summary>
<p>El código a continuación es extremadamente ligero y se puede insertar en su sitio web sin afectar la velocidad (solo toma alrededor de 100-200ms para la primera carga y 0ms para cargas posteriores), la experiencia del cliente, o las puntuaciones de SEO</p>
</details>

<details><summary>¿Cuál es el mejor lugar para insertar este fragmento de código?</summary>
<p>En la sección del head (o tan pronto como sea posible). ¿Por qué? El sitio web cargará secuencialmente los recursos para renderizar la interfaz. Colocar Navi+ lo más temprano posible en el código HTML ayudará a que su menú esté listo para mostrarse tan pronto como sea posible al esperar hasta que se cumplan las condiciones, luego el menú aparecerá de inmediato. Esto mejora la experiencia del usuario.</p>
</details>

<details><summary>¿Cómo puedo saber si este código se ha insertado correctamente en mi sitio web?</summary>
<p>Hay dos maneras:</p>
<p><strong>Método 1 (para todos):</strong></p>
<p>Abra su sitio web con el sufijo #navidebug-on, por ejemplo: <a href="https://domain.com#navidebug-on">https://domain.com#navidebug-on</a>. Si el sitio web cambia a modo Debug, la inserción está funcionando correctamente. El modo Debug le ayuda a identificar fácilmente los selectores CSS. Use #navidebug-off para apagarlo.</p>
<p><strong>Método 2 (para desarrolladores):</strong></p>
<p>Abra las herramientas de inspección de su navegador, vaya a la pestaña de Consola, y busque un mensaje verde: “Usando Navi+..”. Este mensaje indica que el código se ha insertado correctamente.</p>
</details>

***

### 2. Publicar el menú usando Selector CSS (recomendado)

Después de insertar el script anterior, vaya a la aplicación Navi+ para configurar dónde y cómo aparece su menú en la página.

#### I.1. Entendiendo el Selector CSS

Un Selector CSS es una forma de apuntar a un elemento HTML específico en su página web. Navi+ lo utiliza para saber exactamente **dónde** colocar su menú — ya sea para insertarlo antes o después de un elemento, o para reemplazar uno existente por completo.

No necesita ser un desarrollador para usar esto. Navi+ proporciona un campo de entrada simple donde ingresa el selector, y se encarga del resto.

Para encontrar el Selector CSS correcto para su sitio web, puede usar:
- [Modo Debug](/docs/usage/debug-mode-find-css-selectors/) — la herramienta integrada de Navi+: pase el mouse sobre cualquier elemento en su página y copie instantáneamente su selector
- [Browser DevTools](/docs/usage/general/find-css-selector/) — un método manual usando el inspector integrado de su navegador

#### I.2. Tres opciones de publicación

Paso 1: Haga clic en el botón **Publicar en el sitio web** en la aplicación Navi+.

Paso 2: Active el interruptor "Publicar menú por método Insertar/Reemplazar".

Paso 3: Ingrese su Selector CSS y elija una de las tres opciones de publicación a continuación.

<details><summary>Opción 1: Insertar Antes</summary>
<p>Inserta el menú de Navi+ inmediatamente <strong>antes</strong> del elemento seleccionado.</p>
<p><strong>Ejemplo:</strong> Selector CSS <code>main</code> → el Menú Grid aparece sobre el área de contenido principal de la página, mostrado como una sección completa.</p>
<p>Esta es la configuración más común para un Menú Grid en plataformas que no son Shopify.</p>
<p>Selectores CSS comunes para esta opción:</p>
<ul>
<li><code>main</code> — funciona en la mayoría de las plataformas (Webflow, Magento, sitios personalizados)</li>
<li><code>#main</code> — algunas plataformas y temas personalizados</li>
<li><code>.main-content</code> — varias plataformas</li>
</ul>
<p>¿No está en esta lista? Puede chatear con un soporte de Navi+ para obtener ayuda instantánea, o usar <a href="/docs/usage/debug-mode-find-css-selectors/">Modo Debug</a> o <a href="/docs/usage/general/find-css-selector/">Browser DevTools</a> para encontrarlo usted mismo.</p>
</details>

<details><summary>Opción 2: Insertar Después</summary>
<p>Inserta el menú de Navi+ inmediatamente <strong>después</strong> del elemento seleccionado.</p>
<p><strong>Ejemplo:</strong> Selector CSS <code>header</code> → el Menú Grid aparece justo debajo del encabezado.</p>
<p>Selectores CSS comunes para esta opción:</p>
<ul>
<li><code>header</code> — funciona en la mayoría de las plataformas</li>
<li><code>.header-wrapper</code> — algunas plataformas</li>
<li><code>.site-header</code> — varias plataformas</li>
</ul>
<p>¿No está en esta lista? Puede chatear con un soporte de Navi+ para obtener ayuda instantánea, o usar <a href="/docs/usage/debug-mode-find-css-selectors/">Modo Debug</a> o <a href="/docs/usage/general/find-css-selector/">Browser DevTools</a> para encontrarlo usted mismo.</p>
</details>

<details><summary>Opción 3: Reemplazar</summary>
<p>Reemplaza el elemento seleccionado por completo con el menú de Navi+. El elemento original se oculta y Navi+ toma su lugar.</p>
<p>La mayoría de las plataformas no tienen un Menú Grid integrado, por lo que el modo Reemplazar rara vez es aplicable para este tipo de menú. Insertar Antes <code>main</code> es el enfoque recomendado.</p>
<p>Si su plataforma tiene un elemento de navegación estilo grid que desea reemplazar, use <a href="/docs/usage/debug-mode-find-css-selectors/">Modo Debug</a> o <a href="/docs/usage/general/find-css-selector/">Browser DevTools</a> para encontrar su Selector CSS.</p>
</details>

#### I.3. Apuntando a dispositivos específicos

Puede controlar si el Selector CSS se aplica en móvil, escritorio, o ambos añadiendo un sufijo a su selector:

| Sufijo | Aplica a |
|--------|------------|
| `(M)` | Solo móvil |
| `(D)` | Solo escritorio |
| *(ninguno)* | Tanto móvil como escritorio |

**Ejemplos:**
- `main(D)` — inserta solo en escritorio
- `main(M)` — inserta solo en móvil
- `main` — inserta en ambas plataformas

Esto es útil cuando desea que el Menú Grid aparezca solo en ciertos dispositivos, o cuando necesita una colocación diferente en móvil frente a escritorio.

***

### 3. Insertar un Menú Navi+ en Cualquier Punto de Su Sitio Web

El código a continuación se puede usar múltiples veces en un sitio web con diferentes información de inserción (especialmente el **ID de Inserción**, como SF-123456789). Cuando se renderiza el sitio web, el menú se desplegará y mostrará en la posición donde se inserta el código cuando se cumplan las condiciones. Este tipo de menú es adecuado para: Mega menu, Grid, etc.

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

{% comment %}hint style="info" {% endcomment %} <mark style="color:orange;">Importante</mark>**:** El código anterior utiliza el código de inserción de muestra <mark style="color:orange;">SF-123456789</mark>. Asegúrese de reemplazarlo con su código de inserción de menú real.
{% comment %}endhint{% endcomment %}
