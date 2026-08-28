---
description: "Las reglas de visibilidad se aplican a menús y elementos de menú — mostrar u ocultar según el dispositivo, contenido del carrito, horario, mercado, etiquetas de cliente y clientes B2B."
lang: es
layout: default
permalink: /es/docs/development/setup-visibility-rule/
title: Configurar reglas de visibilidad
---
# Configurar reglas de visibilidad

Las Visibility Rules son un conjunto de condiciones que determinan si un **menú** o un **elemento de menú** se muestra a un visitante específico — basado en dispositivo, contenido del carrito, horario, mercado, etiquetas de cliente o clientes B2B — aplicando a ambos niveles con exactamente un conjunto de reglas.

---

## Dónde configurarlas

- **Nivel de elemento de menú**: abre **Edit item** → grupo **Visibility** → haz clic en **Setup the Visibility rules**. *(El grupo Visibility está dentro de un bloque contraído — si no lo ves de inmediato, haz clic en **See more** para expandirlo.)*
- **Nivel de menú**: abre el panel **Setting** del menú → tarjeta **Visibility Rules**.

De aquí en adelante, todas las condiciones, sintaxis y cómo se combinan son **compartidas** para ambos niveles — solo la ubicación difiere.

> Market / Customer tag / B2B se aplican solo a **Shopify** y son actualmente campos de texto libre (sin menú desplegable predefinido) — cada campo tiene un enlace **"View your Markets"** / **"Manage customer tags"** / **"Manage B2B companies"** que te lleva directamente a la página correspondiente de Shopify Admin para verificar el valor exacto antes de escribir.

---

## Condiciones soportadas

| Condición | Plan | Mostrar cuando | Valor de entrada |
|---|---|---|---|
| **Device** | Business en adelante | Coincide con el dispositivo seleccionado | `All devices` / `Mobile only` / `Desktop only` |
| **Page / URL** | Business en adelante | Tipo de página correcto o URL contiene/no contiene palabra clave | Marca tipos de página (Home/Products/Collections/Pages/Blogs/Others) + 2 campos de palabra clave |
| **Cart contents** | Business en adelante | El carrito tiene N o más productos | Número entero, ej. `1` |
| **Schedule** | Business en adelante | Dentro de un rango de fechas establecido | Fecha de inicio → Fecha de fin (verificado según la hora del dispositivo del visitante) |
| **Referrer / campaign** | Business en adelante | URL de referencia contiene texto | Ej. `instagram.com` o `utm_campaign=summer` |
| **Market / Country** | Elite | El visitante está navegando en el mercado seleccionado | Identificador de mercado, múltiples valores separados por comas: `us, ca` |
| **Customer tag** | Elite | El visitante conectado tiene la etiqueta | Una etiqueta única, ej. `vip` |
| **B2B customer** | Elite | El visitante conectado utiliza una cuenta B2B | Interruptor activado/desactivado |

> ⚠️ Las condiciones a **nivel de menú** actualmente **no se aplican a Mobile Menu (Slide)** — si estableces Visibility Rules en un Mobile Menu, no tienen efecto cuando se muestra en la tienda. Las condiciones a **nivel de elemento** (dentro de Mobile Menu) funcionan normalmente. Estamos corrigiendo esta limitación.

---

## Cómo se combinan las condiciones

Todas las condiciones habilitadas deben **todas coincidir** para que el menú/elemento se muestre — solo una condición fallida lo oculta inmediatamente. Las condiciones vacías se omiten y no cuentan.

Por ejemplo, habilitar tanto Device = Mobile only **y** Schedule = 01/09–15/09: muestra solo a visitantes en teléfonos móviles, **y** solo durante esas 2 semanas exactas.

<div align="center">

<svg viewBox="0 0 680 300" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="vrArrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#1a7a4f"/>
    </marker>
    <marker id="vrArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="150" y="10" width="180" height="30" rx="15" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="30" font-size="12.5" text-anchor="middle" fill="#1a1d21">El visitante llega a la página</text>

  <line x1="240" y1="40" x2="240" y2="58" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="60" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="86" font-size="12.5" text-anchor="middle" fill="#1a1d21">Device — ¿coincide con el dispositivo seleccionado?</text>

  <line x1="240" y1="104" x2="240" y2="122" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="124" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="150" font-size="12.5" text-anchor="middle" fill="#1a1d21">Page/URL, Cart, Schedule, Referrer — ¿se cumplen las condiciones?</text>

  <line x1="240" y1="168" x2="240" y2="186" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="188" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="214" font-size="12.5" text-anchor="middle" fill="#1a1d21">Market, Tag, B2B (plan Elite) — ¿coincide con este visitante?</text>

  <line x1="240" y1="232" x2="240" y2="250" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="150" y="252" width="180" height="34" rx="17" fill="#1a7a4f"/>
  <text x="240" y="274" font-size="13" font-weight="600" text-anchor="middle" fill="#fff">Mostrar</text>

  <rect x="470" y="55" width="160" height="182" rx="10" fill="#fef2f2" stroke="#fecaca"/>
  <text x="550" y="140" font-size="16" font-weight="700" text-anchor="middle" fill="#b91c1c">Ocultar</text>
  <text x="550" y="158" font-size="11" text-anchor="middle" fill="#b91c1c">inmediatamente</text>

  <line x1="420" y1="82" x2="470" y2="82" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="76" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="146" x2="470" y2="146" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="140" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="210" x2="470" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="204" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>
</svg>

</div>

*Solo una condición habilitada que falla (rama derecha ✗) oculta el menú/elemento inmediatamente — independientemente de si otras condiciones pasan. Las condiciones vacías (no habilitadas) se omiten e ignoran.*

---

## 5 ejemplos del mundo real

### 1. Mayoreo y menudeo al mismo tiempo, oculta precios mayoristas de clientes minoristas (nivel de menú)

Tu tienda vende tanto mayoreo como menudeo. Los clientes mayoristas (con una cuenta B2B aprobada por Shopify) compran a mejores precios y tienen su propio grupo de producto/colección. Quieres un grupo de menú "Precios mayoristas", "Pedidos mayoristas rápidos", "Productos mayoristas" — mostrando solo a clientes mayoristas, mientras que los visitantes minoristas no ven ningún menú de este tipo (evitando confusiones de precio y ocultando descuentos).

**Cómo hacerlo:** Construye un menú separado (o grupo de menú) que contenga enlaces mayoristas. Ve a **Setting → Visibility Rules**, habilita **B2B customer**. Resultado: este menú completo se muestra solo a visitantes con cuentas B2B conectadas; los clientes minoristas (incluso si están conectados) no verán este menú mientras navegan.

### 2. Banner promocional por tiempo limitado, muestra solo mientras compra (nivel de elemento)

Quieres un banner "Envío gratis en pedidos de 50€+" mostrándose solo durante la venta, y solo para clientes que han añadido al menos un producto a su carrito (evita distraer nuevos visitantes al llegar).

**Cómo hacerlo:** En el elemento banner, haz clic en **Setup the Visibility rules** → habilita **Cart contents** = `1`, y **Schedule** = fechas de inicio/fin de la venta.

### 3. Enlace de oferta exclusiva para clientes VIP (nivel de elemento)

Quieres un elemento de menú "Ofertas VIP" visible solo para clientes etiquetados como VIP, mientras que los clientes regulares ni siquiera saben que existe.

**Cómo hacerlo:** Etiqueta el grupo de clientes VIP a través de Shopify Flow/Customer Segment (Segment → Flow "Customer enters segment" → aplicar etiqueta). En el elemento, haz clic en **Setup the Visibility rules** → habilita **Customer tag** = `vip`.

### 4. Tab Bar Premium para clientes VIP (nivel de menú)

Tu tienda quiere que los clientes VIP tengan una experiencia de navegación diferente — fondo oscuro, efectos brillantes, sensación premium — en lugar de compartir la interfaz estándar con todos los demás.

**Cómo hacerlo:** Construye una Tab Bar separada con una plantilla oscura premium, publícala en la misma posición de Tab Bar que tu tienda usa por defecto. Ve a **Setting → Visibility Rules**, habilita **Customer tag** = `vip` (etiqueta a través de Shopify Flow/Customer Segment como en el ejemplo 3). Resultado: los clientes etiquetados como VIP ven la Tab Bar premium; los clientes regulares aún ven tu Tab Bar estándar. *(Mobile Menu usa el mismo enfoque — pero primero revisa la nota sobre limitaciones de Mobile Menu (Slide) arriba.)*

### 5. FAB impulsa venta adicional justo cuando el cliente añade el primer artículo (nivel de menú)

El cliente acaba de añadir su primer producto al carrito — el momento decisivo — y quieres que aparezca un botón flotante (FAB) con información de promoción ("compra más para desbloquear envío gratis", regalo gratuito...) para empujarlo hacia el checkout más rápido, en lugar de que el FAB siempre se muestre y desordenar la vista desde el inicio.

**Cómo hacerlo:** Construye un FAB (Floating Button) con contenido promocional. Ve a **Setting → Visibility Rules**, habilita **Cart contents** = `1` (mostrar solo cuando el carrito tiene 1+ productos). Resultado: el FAB permanece oculto hasta que un cliente añade el primer producto a su carrito. *Nota: la condición solo verifica el NÚMERO de productos en el carrito, no el valor del pedido — "50€+ desbloquea envío gratis" es el texto de marketing que escribes dentro del FAB, no una Visibility Rule que calcule por precio.*

---
