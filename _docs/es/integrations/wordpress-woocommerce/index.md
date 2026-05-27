---
description: Navi+ AI Menu Builder es el plugin oficial de WordPress para Navi+. Instálalo, crea menús dentro de WordPress y publícalos en todo el sitio o a través del shortcode [naviwp] — sin ediciones de código, sin inyectores de encabezado.
lang: es
layout: default
permalink: /es/docs/integrations/wordpress-woocommerce/
title: WordPress / WooCommerce — Navi+ AI Menu Builder
---
# WordPress / WooCommerce — Navi+ AI Menu Builder

Si tu sitio funciona con **WordPress** o **WooCommerce**, la forma recomendada de publicar menús de Navi+ es el plugin oficial **Navi+ AI Menu Builder** en WordPress.org. El nombre completo de la lista en WordPress.org es **Naviplus Menu Builder**.

> Página del plugin: <https://wordpress.org/plugins/naviplus-menu-builder/>
> Foro de soporte: <https://wordpress.org/support/plugin/naviplus-menu-builder/>

Esta página es el punto de entrada: instala el plugin, habilita menús en todo el sitio o incrusta menús por posición, y elige diseños que funcionen bien en móviles (Tab Bar, Slide / hamburguesa, FAB).

---

## 1. Requisitos

- **WordPress 5.8** o más reciente (se recomienda usar la última versión de WordPress que tu host soporte).
- Acceso de administrador — necesario para instalar plugins y editar **Apariencia**.
- Internet saliente — los menús se diseñan en el servicio de Navi+ y se renderizan a través de un script cargado desde `https://live.naviplus.app/start.js`. Consulta la sección [8. Servicios externos y privacidad](#8-external-services--privacy).

---

## 2. Instalar el plugin

Tres métodos de instalación se detallan en la página de instalación dedicada: **[Instalar el plugin Navi+ AI Menu Builder]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/install-plugin/)** — búsqueda de administrador (recomendada), carga de ZIP, o FTP / administrador de archivos.

Después de la activación, el plugin aparece bajo **Apariencia → Naviplus Menu Builder** en la barra lateral de administración.

---

## 3. Después de la activación

1. Ve a **Apariencia → Naviplus Menu Builder**.
2. Crea tu primer menú siguiendo el flujo en pantalla. El plugin **se conecta automáticamente** a tu sitio con Navi+ en el primer guardado — no necesitas crear una cuenta de Navi+ de antemano.
3. Diseña el layout en el **editor visual de Navi+ AI Menu Builder**, que se abre desde el panel de control de WordPress.

La estructura y los estilos del menú residen en el **servicio de Navi+**; WordPress solo almacena un **identificador de sitio** que permite a Navi+ reconocer tu instalación — esto **no** es tu contraseña de WordPress y no es un token que necesites gestionar.

Recorrido completo: **[Crea tu primer menú]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/get-started/)**.

---

## 4. Elegir un diseño para visitantes móviles

Navi+ soporta varios tipos de menús. Para sitios móviles, estos suelen funcionar mejor:

| Diseño | Cuándo usar |
| --- | --- |
| **Tab Bar** | Acceso rápido a 3–5 destinos principales, anclado cerca de la parte inferior de la ventana de visualización (o donde lo coloques en el editor). |
| **Slide Menu (hamburguesa)** | Muchos elementos o categorías profundas — ahorra espacio en pantallas pequeñas. |
| **Mega Menu** | Menús de contenido rico — genial en escritorio; en móvil, verifica los objetivos de toque y el comportamiento de desplazamiento en el editor. |
| **Grid Menu** | Accesos directos a categorías y páginas de hub. |
| **FAB (botón flotante)** | Acciones rápidas (soporte, contacto) que no deberían ocupar espacio en el encabezado. |

Después de ajustar el diseño, **siempre prueba en un dispositivo real** — o al menos en el modo responsivo del navegador.

Para instrucciones específicas de WordPress según el tipo de menú:

- **[Tab Bar — Publicar en WordPress]({{ site.baseurl }}/docs/usage/tabbar-bottom-navigation/publish-on-wordpress/)**
- **[Mega Menu (Escritorio) — Publicar en WordPress]({{ site.baseurl }}/docs/usage/mega-menu-desktop/publish-on-wordpress/)**
- **[Mega Menu (Móvil) — Publicar en WordPress]({{ site.baseurl }}/docs/usage/mega-menu-mobile/publish-on-wordpress/)**
- **[Slide Menu — Publicar en WordPress]({{ site.baseurl }}/docs/usage/slide-menu-hamburger-menu/publish-on-wordpress/)**
- **[FAB — Publicar en WordPress]({{ site.baseurl }}/docs/usage/fab-floating-menu-quick-access/publish-on-wordpress/)**
- **[Grid Menu — Publicar en WordPress]({{ site.baseurl }}/docs/usage/grid-menu/publish-on-wordpress/)**

Para una comparación completa, consulta **[Resumen: Elige el menú adecuado]({{ site.baseurl }}/docs/usage/explore-common-menus/)**.

---

## 5. Mostrar menús en todo el sitio

- En la administración del plugin, puedes **habilitar la incrustación en todo el sitio** (incrustación global). Cuando está activada, el runtime se inyecta en cada página y los menús fijos (Tab Bar, FAB, Slide) se renderizan automáticamente en todo el sitio.
- Si solo deseas menús en algunas páginas (por ejemplo, páginas de destino solo móviles), **desactiva la incrustación en todo el sitio** y usa el shortcode (sección 6).

La etiqueta y posición exactas del interruptor pueden variar según la versión del plugin — busca en la pantalla de configuración del plugin bajo **Apariencia → Naviplus Menu Builder**.

---

## 6. Incrustar un menú en una publicación, página o widget (shortcode)

Usa el shortcode:

```text
[naviwp embed_id="YOUR-EMBED-ID"]
```

Reemplaza `YOUR-EMBED-ID` con el **ID de Incrustación** de tu menú (mostrado en el editor en el panel de publicación del menú — se ve como `SF-123456789`).

**Gutenberg (editor de bloques):**

- Inserta un bloque de **Naviplus Menu Builder** y pega tu **ID de Incrustación** en la barra lateral del bloque, **o**
- Coloca un bloque genérico de **Shortcode** con `[naviwp embed_id="..."]`, **o**
- Pega `[naviwp embed_id="..."]` directamente dentro de un bloque de **Párrafo** — el plugin lo reconoce.

**Elementor / Divi / Bricks / otros constructores:**

- Usa el widget de **Shortcode** del constructor y pega `[naviwp embed_id="..."]`.

Más detalles y los tres métodos de Gutenberg: **[Publica tus menús]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/publish-menus/)**.

---

## 7. Desactivar o ocultar temporalmente menús

- **Desactiva el plugin** → el runtime deja de cargarse; no se renderizan menús de Navi+ en ninguna parte de tu sitio.
- **Desactiva la incrustación en todo el sitio** en la administración del plugin → los menús solo se renderizan en páginas que incluyan un shortcode `[naviwp]` o bloque.
- **Cambia un menú a Borrador** en el editor → ese menú específico ya no se publica, incluso si el runtime está cargado.
- **Elimina un shortcode** de una página o widget → el menú desaparece solo en ese lugar.

Tus menús en el servicio de Navi+ se preservan a través de todos estos. Reinstalar o reactivar el plugin y reutilizar los mismos IDs de incrustación los recupera sin necesidad de reconstrucción.

---

## 8. Servicios externos y privacidad

El plugin se conecta al servicio de Navi+ AI Menu Builder para crear y **renderizar** tus menús. Los datos intercambiados pueden incluir (sin limitación): tu **dominio del sitio**, tu **configuración de menú**, y datos mínimos de uso necesarios para la renderización.

- Política de privacidad: <https://naviplus.io/privacy>
- Cargador de script: `https://live.naviplus.app/start.js`

Si operas bajo un marco de privacidad que requiere divulgar servicios de terceros (por ejemplo, GDPR), enumera **Navi+** y la URL del cargador de script en el aviso de privacidad de tu sitio.

---

## 9. Enlaces útiles

| Recurso | URL |
| --- | --- |
| Página del plugin en WordPress.org | <https://wordpress.org/plugins/naviplus-menu-builder/> |
| Foro de soporte en WordPress.org | <https://wordpress.org/support/plugin/naviplus-menu-builder/> |
| Inicio de Naviplus | <https://naviplus.io> |
| Política de privacidad | <https://naviplus.io/privacy> |
| FAQ del plugin (este sitio) | [Navi+ AI Menu Builder FAQ]({{ site.baseurl }}/docs/integrations/wordpress-woocommerce/faq/) |

---

## 10. Resumen rápido

1. **Instala y activa** desde WordPress.org o una carga de ZIP.
2. Abre **Apariencia → Naviplus Menu Builder** → crea tu menú y diseñalo en el editor de Navi+.
3. Elige un diseño adecuado para móviles: **Tab Bar** / **hamburguesa** / **FAB**.
4. Elige la visualización **en todo el sitio** o `[naviwp embed_id="..."]` para páginas específicas.
5. **Prueba en un dispositivo real** antes de ir en vivo.

*Esta página puede actualizarse a medida que se envían nuevas versiones del plugin; la versión canónica y el registro de cambios se encuentran en la [página del plugin en WordPress.org](https://wordpress.org/plugins/naviplus-menu-builder/).*
