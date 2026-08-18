---
description: Dos ajustes impiden que tu Desktop Mega Menu se divida en dos líneas o cambie a dispositivo móvil demasiado pronto, y uno te permite mostrarlo como un Slide menu en dispositivos móviles.
lang: es
layout: default
permalink: /es/docs/usage/mega-menu-desktop/faq/
title: FAQ
---
# FAQ

#### Pregunta 1: ¿Cómo puedo evitar que mi Desktop Mega Menu se divida en dos líneas?

Hay dos situaciones que pueden romper el diseño de una barra de Desktop Mega Menu: demasiados elementos en el nivel superior, o que el sitio se vea en una ventana más estrecha que un escritorio estándar. Dos ajustes solucionan esto — no se requiere código.

<div align="center">

<svg viewBox="0 0 680 340" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="24" font-size="14" font-weight="600" fill="#1a1d21">Before — too many items wrap to a second line</text>
  <rect x="20" y="36" width="640" height="110" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="69" y="68" text-anchor="middle">Home</text>
    <rect x="112" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="147" y="68" text-anchor="middle">Shop</text>
    <rect x="190" y="50" width="110" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="245" y="68" text-anchor="middle">Categories</text>
    <rect x="308" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="343" y="68" text-anchor="middle">Sale</text>
    <rect x="386" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="421" y="68" text-anchor="middle">Blog</text>
    <rect x="464" y="50" width="82" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="505" y="68" text-anchor="middle">About</text>
    <rect x="554" y="50" width="42" height="28" rx="14" fill="#fff" stroke="#e6e8eb" stroke-dasharray="3 2"/>
  </g>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="92" width="42" height="28" rx="14" fill="#fff" stroke="#e6e8eb" stroke-dasharray="3 2"/>
    <rect x="84" y="92" width="94" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="131" y="110" text-anchor="middle">Contact</text>
    <rect x="186" y="92" width="94" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="233" y="110" text-anchor="middle">Support</text>
  </g>
  <text x="600" y="140" font-size="20" text-anchor="middle" fill="#dc2626">⚠</text>
  <text x="20" y="170" font-size="12" fill="#4b5563">The second row pushes page content down, and the header height changes unpredictably across screen sizes.</text>

  <text x="20" y="204" font-size="14" font-weight="600" fill="#1a1d21">After — "Menu overflow navigation" keeps it on one row</text>
  <rect x="20" y="216" width="640" height="50" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="228" width="70" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="69" y="245" text-anchor="middle">Home</text>
    <rect x="112" y="228" width="70" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="147" y="245" text-anchor="middle">Shop</text>
    <rect x="190" y="228" width="106" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="243" y="245" text-anchor="middle">Categories</text>
    <rect x="304" y="228" width="66" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="337" y="245" text-anchor="middle">Sale</text>
    <rect x="378" y="228" width="66" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="411" y="245" text-anchor="middle">Blog</text>
  </g>
  <rect x="600" y="228" width="40" height="26" rx="13" fill="#1a7a4f"/>
  <text x="620" y="246" font-size="14" text-anchor="middle" fill="#fff">›</text>
  <path d="M615 216 L625 216 L620 208 Z" fill="#fff" stroke="#e6e8eb"/>
  <rect x="520" y="150" width="140" height="66" rx="6" fill="#fff" stroke="#e6e8eb"/>
  <text x="590" y="170" font-size="12" text-anchor="middle" fill="#1a1d21">About</text>
  <text x="590" y="188" font-size="12" text-anchor="middle" fill="#1a1d21">Contact</text>
  <text x="590" y="206" font-size="12" text-anchor="middle" fill="#1a1d21">Support</text>
  <text x="20" y="298" font-size="12" fill="#4b5563">Items that don't fit (About, Contact, Support...) live behind the arrow button — click to reveal them, without wrapping.</text>
</svg>

</div>

**Menu overflow navigation** — ve a **Setting → Layout → Desktop** y activa **"Show navigation arrows when menu overflows"**. Cuando está habilitado, la barra de nivel superior siempre permanece en una fila; los elementos que no caben se guardan detrás de un botón de flecha `›` en lugar de envolverse. Dos campos adicionales te permiten personalizar el botón: **Button background color** y **Arrow icon color**.

**Mobile switch breakpoint** — por defecto, cualquier pantalla más estrecha que 768px cambia todo el menú al modo móvil/hamburguesa, incluso si aún hay espacio suficiente para un diseño de escritorio (común en tabletas o ventanas del navegador redimensionadas). En la misma área **Setting → Layout → Desktop**, reduce el campo **Breakpoint (px)** para mantener la barra de escritorio visible hasta un ancho más estrecho.

<div align="center">

<svg viewBox="0 0 640 210" width="100%" style="max-width:600px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="10" width="600" height="190" rx="10" fill="#fff" stroke="#e6e8eb"/>
  <text x="40" y="34" font-size="12" font-style="italic" fill="#4b5563">Setting → Layout → Desktop</text>
  <line x1="40" y1="44" x2="580" y2="44" stroke="#e6e8eb"/>
  <rect x="40" y="62" width="24" height="24" rx="6" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="52" y="79" font-size="13" text-anchor="middle" fill="#1a7a4f">↔</text>
  <text x="76" y="72" font-size="13" font-weight="600" fill="#1a1d21">Mobile switch breakpoint</text>
  <text x="76" y="90" font-size="11" fill="#6b7280">Screen width below which the menu switches to mobile</text>
  <rect x="480" y="60" width="80" height="26" rx="5" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="520" y="78" font-size="12" text-anchor="middle" fill="#1a1d21">768 px</text>
  <line x1="40" y1="114" x2="580" y2="114" stroke="#f0f2f4"/>
  <rect x="40" y="132" width="24" height="24" rx="6" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="52" y="149" font-size="13" text-anchor="middle" fill="#1a7a4f">›</text>
  <text x="76" y="142" font-size="13" font-weight="600" fill="#1a1d21">Menu overflow navigation</text>
  <text x="76" y="160" font-size="11" fill="#6b7280">Show navigation arrows when the menu overflows</text>
  <rect x="520" y="130" width="40" height="22" rx="11" fill="#1a7a4f"/>
  <circle cx="550" cy="141" r="9" fill="#fff"/>
  <text x="40" y="188" font-size="11" fill="#6b7280">Both cards only appear for a Desktop Mega Menu — not Tabbar, FAB, Slide, or Mobile Mega Menu.</text>
</svg>

</div>

<div align="center">

<svg viewBox="0 0 680 260" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="22" font-size="14" font-weight="600" fill="#1a1d21">Default — fixed at 768px</text>
  <rect x="40" y="34" width="384" height="34" fill="#e6e8eb"/>
  <text x="232" y="56" font-size="12" text-anchor="middle" fill="#4b5563">Mobile / Hamburger</text>
  <rect x="424" y="34" width="216" height="34" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="532" y="56" font-size="12" text-anchor="middle" fill="#0f5c3a">Desktop Mega Menu</text>
  <line x1="424" y1="26" x2="424" y2="76" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="424" y="90" font-size="11" text-anchor="middle" fill="#1a1d21">768px</text>

  <text x="20" y="140" font-size="14" font-weight="600" fill="#1a1d21">After setting Breakpoint = 600 (+ overflow navigation enabled)</text>
  <rect x="40" y="152" width="300" height="34" fill="#e6e8eb"/>
  <text x="190" y="174" font-size="12" text-anchor="middle" fill="#4b5563">Mobile / Hamburger</text>
  <rect x="340" y="152" width="84" height="34" fill="#e6f4ed" stroke="#1a7a4f" stroke-dasharray="4 2"/>
  <text x="382" y="169" font-size="10.5" text-anchor="middle" fill="#0f5c3a">Desktop</text>
  <text x="382" y="181" font-size="10.5" text-anchor="middle" fill="#0f5c3a">(new range)</text>
  <rect x="424" y="152" width="216" height="34" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="532" y="174" font-size="12" text-anchor="middle" fill="#0f5c3a">Desktop Mega Menu</text>
  <line x1="340" y1="144" x2="340" y2="194" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="340" y="208" font-size="11" text-anchor="middle" fill="#1a1d21">600px</text>
  <line x1="424" y1="144" x2="424" y2="194" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="424" y="208" font-size="11" text-anchor="middle" fill="#1a1d21">768px</text>
  <text x="20" y="238" font-size="12" fill="#4b5563">The 600–768px range used to be hidden as mobile — it now keeps the desktop layout.</text>
</svg>

</div>

> El nuevo rango que esto abre (entre tu punto de corte y 768px) es más estrecho que un escritorio estándar — activa **Menu overflow navigation** arriba para que los elementos de nivel superior no se dividan en ese rango.

**Ejemplo:** Breakpoint = `600` con Menu overflow navigation habilitado:

| Ancho de pantalla | Comportamiento |
|---|---|
| Menor a 600px | Menú móvil / hamburguesa |
| 600px – 768px | Desktop Mega Menu, botón de flecha mantiene los elementos en una fila |
| Mayor a 768px | Desktop Mega Menu, comportamiento estándar |

Estos dos ajustes son independientes — activar uno no activa el otro. Solo afectan al **Desktop Mega Menu**, no al Tabbar, FAB, Slide menu, o Mobile Mega Menu.

***

#### Pregunta 2: ¿Cómo puedo mostrar mi Desktop Mega Menu como un Slide menu en dispositivos móviles?

A veces quieres el enfoque responsive clásico: construir un único Desktop Mega Menu y dejar que se contraiga automáticamente en un Slide (Hamburger) menu en móvil, en lugar de construir un menú móvil separado desde cero.

**Fortaleza:** solo mantienes un menú — la versión de escritorio. La copia móvil lo sigue automáticamente, así que no hay un segundo árbol que mantener sincronizado.

**Debilidad crítica:** mobile-first es como debería diseñarse la navegación hoy — en la mayoría de tiendas, el móvil trae la mayoría de las visitas y a menudo también los mayores ingresos. Un árbol construido para una barra de escritorio ancha y luego comprimido es en realidad *desktop-first*: demasiados toques para llegar a un enlace, agrupaciones tipo desplegable que se leen mal como lista apilada, y sin espacio para atajos exclusivos de móvil. Para la navegación principal de una tienda, un menú pensado para móvil desde el inicio (un Slide, Grid o TabBar menu dedicado) suele valer el mantenimiento extra.

**Una opción intermedia:** usa **Smart responsive** de Navi+ para reflejar el Desktop Mega Menu en un Slide menu (pasos abajo), combinado con un elemento **TabBar** que abra ese Slide menu directamente. Configura el campo **Link To** del elemento TabBar como `open:NaviMenu(SF-xxxxxxxxxx)` *(Business / Elite)* — usando el embed ID del Slide menu — para que los visitantes móviles tengan un punto de entrada real en la barra inferior en lugar de depender de un icono de hamburguesa oculto. Esto mantiene la configuración casi en cero mientras mejora notablemente la experiencia móvil.

Abre tu Desktop Mega Menu → **Setting → Mobile** → tarjeta **"Smart responsive"** para incrustar una **referencia en vivo** de este menú en un Slide menu — solo editas el contenido aquí, y la versión móvil se actualiza automáticamente.

<div align="center">

<svg viewBox="0 0 640 300" width="100%" style="max-width:600px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="20" font-size="13" font-weight="600" fill="#1a1d21">Desktop Mega Menu — 3 columns</text>
  <rect x="20" y="30" width="270" height="230" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="35" y="50" font-size="11" font-weight="600" fill="#1a1d21">Collections</text>
  <line x1="20" y1="58" x2="290" y2="58" stroke="#e6e8eb"/>
  <line x1="110" y1="66" x2="110" y2="252" stroke="#e6e8eb"/>
  <line x1="200" y1="66" x2="200" y2="252" stroke="#e6e8eb"/>
  <text x="35" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Women</text>
  <text x="35" y="94" font-size="10.5" fill="#1a1d21">Dresses</text>
  <text x="35" y="112" font-size="10.5" fill="#1a1d21">Tops</text>
  <text x="125" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Men</text>
  <text x="125" y="94" font-size="10.5" fill="#1a1d21">New in</text>
  <text x="125" y="112" font-size="10.5" fill="#1a1d21">Sale</text>
  <text x="215" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Info</text>
  <text x="215" y="94" font-size="10.5" fill="#1a1d21">Size guide</text>
  <text x="215" y="112" font-size="10.5" fill="#1a1d21">Shipping</text>

  <text x="315" y="150" font-size="22" text-anchor="middle" fill="#1a7a4f">→</text>
  <text x="315" y="172" font-size="10" text-anchor="middle" fill="#6b7280">Smart</text>
  <text x="315" y="184" font-size="10" text-anchor="middle" fill="#6b7280">responsive</text>

  <text x="360" y="20" font-size="13" font-weight="600" fill="#1a1d21">Slide menu — flattened to 1 column</text>
  <rect x="360" y="30" width="130" height="250" rx="16" fill="#1a1d21"/>
  <rect x="368" y="42" width="114" height="226" rx="4" fill="#fff"/>
  <text x="425" y="60" font-size="10.5" font-weight="600" text-anchor="middle" fill="#1a1d21">Collections</text>
  <line x1="374" y1="68" x2="476" y2="68" stroke="#e6e8eb"/>
  <text x="380" y="86" font-size="9.5" fill="#1a1d21">Dresses</text>
  <text x="380" y="102" font-size="9.5" fill="#1a1d21">Tops</text>
  <line x1="374" y1="112" x2="476" y2="112" stroke="#f0f2f4"/>
  <text x="380" y="128" font-size="9.5" fill="#1a1d21">New in</text>
  <text x="380" y="144" font-size="9.5" fill="#1a1d21">Sale</text>
  <line x1="374" y1="154" x2="476" y2="154" stroke="#f0f2f4"/>
  <text x="380" y="170" font-size="9.5" fill="#1a1d21">Size guide</text>
  <text x="380" y="186" font-size="9.5" fill="#1a1d21">Shipping</text>
  <text x="425" y="250" font-size="8.5" text-anchor="middle" fill="#6b7280">one tap reaches every link</text>
</svg>

</div>

**Paso 1: Copia esta plantilla de elemento de menú** — haz clic en **Copy embed item**.

**Paso 2: Elige el Slide menu donde pegarlo** — pégalo en el **level 1** de un Slide menu existente (o crea uno nuevo primero si aún no tienes ninguno).

Los diseños de varias columnas se aplanan automáticamente: las columnas se convierten en una lista vertical, se eliminan los títulos de columna, y se inserta una línea divisoria donde antes había columnas separadas — así los visitantes llegan a cada enlace en un toque en lugar de dos.

Una vez incrustado, la tarjeta muestra **"This menu already shows on mobile"** con un enlace directo al Slide menu, para que puedas comprobarlo cuando quieras.

**Ajustes finos de la copia móvil:**

- **Ocultar elementos solo de escritorio** — algunas columnas o enlaces solo tienen sentido en ancho de escritorio. Abre el elemento en el Desktop Mega Menu → **Visibility** → activa **"Exclude when embedded"**. Se mantiene en el escritorio y solo desaparece de la copia móvil.
- **Añadir elementos exclusivos para móvil** — el Slide menu no está limitado a lo que trae la referencia. Añade elementos level-1 normales justo al lado del incrustado para cosas que la barra de escritorio no necesita: un botón de llamada/WhatsApp, horario de la tienda, un selector de idioma, o enlaces que normalmente viven en el header o footer del tema. Estos viven directamente en el Slide menu y no afectan en nada a la versión de escritorio.

