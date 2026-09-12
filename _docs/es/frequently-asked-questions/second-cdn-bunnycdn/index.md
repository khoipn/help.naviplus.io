---
description: "Cómo Navi+ entrega tu menú a través de dos redes de distribución de contenido independientes para que siga en línea, y qué hace la opción \"Use a Secondary CDN (BunnyCDN)\" del app embed — incluso cuando visitantes de algunas regiones no pueden llegar a Cloudflare."
lang: es
layout: default
permalink: /es/docs/frequently-asked-questions/second-cdn-bunnycdn/
title: "Cómo Navi+ mantiene tu menú en línea — la opción \"Use a Secondary CDN (BunnyCDN)\""
---
# Cómo Navi+ mantiene tu menú en línea — la opción "Use a Secondary CDN (BunnyCDN)"

Tu menú no se guarda dentro de tu tema. Cada vez que se carga una página, el navegador descarga unos pocos archivos pequeños de Navi+: el motor del menú, sus estilos y los datos de tu menú. De dónde vienen esos archivos decide si el menú aparece, y con qué rapidez. Esta página explica cómo funciona esa entrega, cómo está protegida frente a caídas y qué cambia la casilla **Use a Secondary CDN (BunnyCDN)** del app embed de Shopify.

---

## Dos redes, un menú

Navi+ sirve los archivos del menú a través de una red de distribución de contenido (CDN): un conjunto de servidores repartidos por el mundo que guardan copias de los mismos archivos, de modo que cada visitante recibe los archivos desde una ubicación cercana.

Para asegurar que un problema en una red nunca pueda tumbar tu menú, los mismos archivos se mantienen en **dos redes independientes**, operadas por dos proveedores distintos:

| Red | Proveedor | Función |
|---|---|---|
| Red principal | Cloudflare | Sirve a todas las tiendas por defecto. |
| Segunda red | BunnyCDN | Guarda una copia idéntica, actualizada en cada versión de Navi+. Entra en acción cuando la red principal no puede entregar. |

Cada proveedor opera su propia infraestructura global con sus propios compromisos de disponibilidad. Como las dos no comparten servidores, un incidente en un lado deja al otro intacto: el menú nunca depende de que una sola empresa siga en pie.

---

## Cómo funciona una carga de página por defecto

<div align="center">

<svg viewBox="0 0 720 330" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="20" y="120" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="150" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Navegador del visitante</text>
  <text x="95" y="172" text-anchor="middle" font-size="12" fill="#4b5563">abre tu tienda</text>
  <text x="95" y="190" text-anchor="middle" font-size="12" fill="#4b5563">se ejecuta el script de inicio de Navi+</text>

  <rect x="290" y="40" width="200" height="100" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="390" y="66" text-anchor="middle" font-size="14" font-weight="600" fill="#9a3412">Red principal</text>
  <text x="390" y="86" text-anchor="middle" font-size="12" fill="#7c2d12">Cloudflare</text>
  <text x="390" y="110" text-anchor="middle" font-size="11" fill="#7c2d12">motor del menú · estilos · datos del menú</text>
  <text x="390" y="126" text-anchor="middle" font-size="11" fill="#7c2d12">servidos desde la ubicación más cercana</text>

  <rect x="290" y="200" width="200" height="100" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="390" y="226" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Segunda red</text>
  <text x="390" y="246" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN</text>
  <text x="390" y="270" text-anchor="middle" font-size="11" fill="#1e40af">copia idéntica de cada archivo</text>
  <text x="390" y="286" text-anchor="middle" font-size="11" fill="#1e40af">actualizada en cada versión de Navi+</text>

  <rect x="560" y="120" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="152" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">El menú aparece</text>
  <text x="630" y="174" text-anchor="middle" font-size="12" fill="#047857">en la página</text>

  <path d="M170,150 C230,150 230,90 290,90" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="222" y="108" text-anchor="middle" font-size="11" fill="#374151">1. pedir archivos</text>

  <path d="M490,90 C530,90 530,150 560,150" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="522" y="108" text-anchor="middle" font-size="11" fill="#374151">2. entregar</text>

  <path d="M170,180 C230,180 230,250 290,250" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>
  <text x="222" y="230" text-anchor="middle" font-size="11" fill="#dc2626">si un archivo falla →</text>
  <text x="222" y="244" text-anchor="middle" font-size="11" fill="#dc2626">reintento automático</text>

  <path d="M490,250 C530,250 530,180 560,180" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>

  <path d="M390,140 L390,200" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="404" y="174" font-size="10" fill="#6b7280">sincronizadas</text>
</svg>

</div>

1. El app embed de Navi+ en tu tema ejecuta un pequeño script de inicio.
2. El script de inicio pide a la **red principal** el motor del menú, sus estilos y los datos de tu menú.
3. El menú aparece.

Si alguno de esos archivos no llega desde la red principal — una caída, un tiempo de espera agotado, un problema regional — el script de inicio **reintenta automáticamente el mismo archivo desde BunnyCDN**. Esto ocurre por sí solo, en el navegador del visitante, sin que tengas que configurar nada. En la práctica, un mal día de una sola red es invisible para tus clientes.

---

## El único caso que el reintento automático no puede cubrir

El reintento automático vive dentro del script de inicio. Eso crea un punto ciego: si el **propio script de inicio** nunca llega, nada se ejecuta y no queda nada que reintentar.

Esto sucede cuando la conexión de un visitante no puede llegar en absoluto a la red principal. Cloudflare es una de las redes más grandes de internet, pero no es accesible desde todas partes:

- Algunos países restringen o limitan el tráfico de Cloudflare a nivel nacional.
- Algunas redes corporativas o escolares lo bloquean como parte de su filtrado web.
- Algunos proveedores de internet enrutan mal hacia Cloudflare en ciertas regiones, y las peticiones agotan el tiempo de espera.

Para una tienda cuyos clientes están mayoritariamente en uno de esos lugares, un menú que funciona perfectamente para ti puede faltar para ellos — y el reintento automático nunca tiene la oportunidad de ayudar.

---

## Qué hace "Use a Secondary CDN (BunnyCDN)"

Activar la opción invierte la prioridad para que el menú deje de depender por completo de la red principal:

<div align="center">

<svg viewBox="0 0 720 300" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb"/>
    </marker>
  </defs>

  <rect x="20" y="105" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="135" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Navegador del visitante</text>
  <text x="95" y="157" text-anchor="middle" font-size="12" fill="#4b5563">abre tu tienda</text>
  <text x="95" y="175" text-anchor="middle" font-size="12" fill="#4b5563">script de inicio pedido dos veces</text>

  <rect x="290" y="30" width="200" height="80" rx="10" fill="#fafafa" stroke="#d1d5db" stroke-width="1.5"/>
  <text x="390" y="56" text-anchor="middle" font-size="14" font-weight="600" fill="#6b7280">Red principal</text>
  <text x="390" y="76" text-anchor="middle" font-size="12" fill="#6b7280">Cloudflare</text>
  <text x="390" y="96" text-anchor="middle" font-size="11" fill="#6b7280">solo el script de inicio</text>

  <rect x="290" y="150" width="200" height="120" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="390" y="176" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Segunda red</text>
  <text x="390" y="196" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN — ahora principal</text>
  <text x="390" y="220" text-anchor="middle" font-size="11" fill="#1e40af">script de inicio</text>
  <text x="390" y="236" text-anchor="middle" font-size="11" fill="#1e40af">motor del menú · estilos · datos del menú</text>
  <text x="390" y="256" text-anchor="middle" font-size="11" fill="#1e40af">todo lo que sigue al inicio</text>

  <rect x="560" y="105" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="137" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">El menú aparece</text>
  <text x="630" y="159" text-anchor="middle" font-size="12" fill="#047857">en la página</text>

  <path d="M170,135 C230,135 230,70 290,70" fill="none" stroke="#9ca3af" stroke-width="1.5" marker-end="url(#cdnArrow2)"/>
  <text x="222" y="90" text-anchor="middle" font-size="11" fill="#6b7280">inicio (la que</text>
  <text x="222" y="104" text-anchor="middle" font-size="11" fill="#6b7280">responda primero)</text>

  <path d="M170,165 C230,165 230,210 290,210" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>

  <path d="M490,210 C530,210 530,150 560,150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>
  <text x="522" y="192" text-anchor="middle" font-size="11" fill="#2563eb">entregar</text>
</svg>

</div>

- El **script de inicio se pide a ambas redes**, así que el menú arranca mientras cualquiera de las dos sea accesible desde donde está el visitante.
- **Todo lo demás** — el motor del menú, sus estilos y los datos de tu menú — se carga desde **BunnyCDN** en lugar de Cloudflare.

La red principal solo queda como segunda oportunidad para el script de inicio; BunnyCDN pasa a ser la fuente principal del menú en sí.

---

## ¿Cuándo deberías activarla?

Déjala **desactivada** salvo que se dé uno de estos casos:

- **El soporte de Navi+ te lo ha pedido.** Cuando reportas que el menú falta para algunos visitantes, comprobamos dónde están esos visitantes y a qué red pueden llegar. Si el problema es la red principal, te pediremos que actives esta opción.
- **Sabes que tus clientes están en una región donde Cloudflare está restringido o es poco fiable.** Si tu tienda atiende principalmente a una región así, BunnyCDN es la opción principal más segura para ti. Marca la casilla y avísanos — con gusto confirmaremos que el cambio se ve bien desde nuestro lado.

Una señal típica: el menú se muestra para ti y para la mayoría de visitantes, pero clientes de un país concreto o de una red concreta informan de que nunca aparece.

---

## Por qué está desactivada por defecto

Ambas redes son globales y rápidas. Para la gran mayoría de tiendas no hay nada que ganar cambiando, y la ruta por defecto es la que vigilamos más de cerca y donde desplegamos primero las correcciones. La opción es una herramienta para los casos poco comunes de arriba, no un ajuste de rendimiento.

---

## ¿Afecta a la velocidad de la página?

No se espera ningún cambio apreciable. BunnyCDN sirve los mismos archivos desde sus propias ubicaciones en todo el mundo. Pedir el script de inicio a dos redes añade una pequeña petición extra; el motor del menú y los datos de tu menú se siguen cargando una sola vez, desde una única fuente.

---

## Cómo activarla o desactivarla

1. En tu administrador de Shopify, abre **Tienda online → Temas → Personalizar**.
2. Haz clic en el icono **Integraciones de apps** de la barra lateral izquierda.
3. Busca **Navi+** y despliégalo.
4. Marca o desmarca **Use a Secondary CDN (BunnyCDN)**.
5. Haz clic en **Guardar**.

El cambio se aplica en la siguiente carga de página. No hay nada que configurar dentro de la app Navi+.

> Si el soporte te pidió activarla mientras investigaba un problema, mantenla activada hasta que confirmen que el problema está resuelto — después puedes volver a desactivarla.
