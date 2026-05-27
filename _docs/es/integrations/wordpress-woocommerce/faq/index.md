---
description: 'Preguntas frecuentes sobre el plugin de WordPress Navi+ AI Menu Builder: precios, rendimiento, WooCommerce, multisite, creadores de páginas, caché, privacidad y desinstalación.'
lang: es
layout: default
permalink: /es/docs/integrations/wordpress-woocommerce/faq/
title: Navi+ AI Menu Builder FAQ
---
# Navi+ AI Menu Builder FAQ

<details>
<summary>¿Es el plugin gratuito?</summary>
<p>Sí. El plugin en sí es gratuito en WordPress.org. Tu suscripción a Navi+ (Starter / Business / Elite) es lo que determina qué tipos de menús y cuotas están disponibles. Consulta <a href="{{ site.baseurl }}/docs/frequently-asked-questions/navi-plans-starter-business-and-elite/">Planes &amp; Precios</a>.</p>
</details>

<details>
<summary>¿Necesito una cuenta de Navi+ antes de instalar?</summary>
<p>No. Cuando guardas tu primer menú en <strong>Appearance → Naviplus Menu Builder</strong>, el plugin conecta automáticamente tu sitio al servicio de Navi+ — sin registro separado, sin token que pegar.</p>
</details>

<details>
<summary>¿El plugin ralentiza mi sitio?</summary>
<p>No hay impacto medible. El plugin solo agrega una única <code>&lt;script async&gt;</code> etiqueta en <code>&lt;head&gt;</code> que carga el runtime de Navi+ (~4&nbsp;KB) desde Cloudflare/BunnyCDN. El runtime es completamente asíncrono y no bloquea el renderizado de la página. La sobrecarga típica en la primera carga es de 100–200&nbsp;ms; las cargas posteriores son de 0&nbsp;ms debido a la caché HTTP.</p>
</details>

<details>
<summary>¿Funciona con WooCommerce?</summary>
<p>Sí. Las páginas de WooCommerce son páginas estándar de WordPress, por lo que los menús se renderizan en las páginas de tienda, producto, carrito y pago sin configuración adicional. Usa reglas de visualización en el editor (la URL contiene <code>/cart</code>, <code>/checkout</code>, etc.) para controlar dónde aparecen los menús.</p>
</details>

<details>
<summary>¿Funciona en WordPress Multisite?</summary>
<p>Sí. Activa el plugin por sitio (también se admite la activación en red) y configura los menús de cada sitio desde su propio <strong>Appearance → Naviplus Menu Builder</strong>. Cada sitio se conecta automáticamente a Navi+ de forma independiente cuando se guarda su primer menú.</p>
</details>

<details>
<summary>¿Entrará en conflicto con mi tema o creador de páginas (Elementor, Divi, Bricks, Oxygen)?</summary>
<p>No hay conflictos conocidos. Los menús se renderizan en sus propios contenedores y utilizan estilos aislados. Para insertar un menú de sección dentro de un creador de páginas, usa un widget de <strong>Shortcode</strong> con <code>[naviwp embed_id="SF-..."]</code> — o un widget de <strong>HTML</strong> con el div de inserción.</p>
</details>

<details>
<summary>¿Puedo usar el plugin y el script genérico de inserción al mismo tiempo?</summary>
<p>No — elige uno. El plugin ya inyecta el runtime de Navi+, por lo que una etiqueta de script manual lo cargaría dos veces. Si previamente insertaste el script en tu tema o a través de un inyector de encabezado, elimina ese fragmento antes de activar el plugin.</p>
</details>

<details>
<summary>Actualicé un menú pero no veo el cambio en mi sitio.</summary>
<p>Los menús se obtienen en tiempo de ejecución, por lo que no se requiere un vaciado de caché de WordPress. Si el cambio aún no aparece, haz una recarga forzada (Cmd/Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;R) para omitir la caché del navegador. Para menús fijos, también confirma que el menú esté configurado como <strong>Publicado</strong> (no borrador) y que sus reglas de visualización coincidan con la página.</p>
</details>

<details>
<summary>¿Cómo oculto temporalmente todos los menús de Navi+?</summary>
<p>Dos opciones:</p>
<ul>
<li><strong>A nivel de sitio:</strong> desactiva el interruptor "Inject site-wide" en la administración del plugin — el runtime deja de cargar excepto en las páginas con un <code>[naviwp]</code> shortcode/bloque.</li>
<li><strong>Por menú:</strong> cambia el menú a <strong>Borrador</strong> en el editor.</li>
</ul>
</details>

<details>
<summary>¿Cómo desinstalo el plugin?</summary>
<p>Desactívalo y elimínalo de <strong>Plugins → Plugins instalados</strong>. El plugin solo almacena el identificador del sitio y algunas opciones en <code>wp_options</code>; la desinstalación los elimina automáticamente. Tus menús en el servicio de Navi+ se preservan — si reinstalas más tarde, puedes seguir usando los mismos IDs de inserción.</p>
</details>

<h2 id="privacy">Privacidad &amp; servicios externos</h2>

<p>El plugin se conecta al servicio de Navi+ AI Menu Builder para crear y renderizar menús. Los datos intercambiados pueden incluir (pero no se limitan a): tu <strong>dominio del sitio</strong>, tu <strong>configuración de menú</strong>, y datos mínimos de uso necesarios para renderizar menús.</p>

<ul>
<li>Política de privacidad: <a href="https://naviplus.io/privacy">https://naviplus.io/privacy</a></li>
<li>Cargador de script: <code>https://live.naviplus.app/start.js</code></li>
</ul>

<details>
<summary>¿Dónde informo un error o solicito una función?</summary>
<p>Usa el foro de soporte oficial: <a href="https://wordpress.org/support/plugin/naviplus-menu-builder/">https://wordpress.org/support/plugin/naviplus-menu-builder/</a>. Para preguntas sobre cuentas o facturación, envía un correo a <a href="mailto:support@naviplus.io">support@naviplus.io</a>.</p>
</details>
