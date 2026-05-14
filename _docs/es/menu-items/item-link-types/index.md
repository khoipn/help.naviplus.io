---
description: Todos los tipos de enlaces soportados por Navi+ — páginas internas, URLs externas, anclas, paneles abiertos, teléfono/correo electrónico, aplicaciones de chat, compartir y JavaScript.
lang: es
layout: default
permalink: /es/docs/menu-items/item-link-types/
title: Tipos de enlaces
---
# Tipos de enlaces

El **Enlace a** campo en Información básica controla lo que sucede cuando un visitante toca o hace clic en un elemento. Navi+ soporta muchos tipos de enlaces más allá de una URL simple.

Cuando haces clic en el campo Enlace a, se abre automáticamente un popup de ayuda con ejemplos completos. También puedes escribir directamente en el campo.

---

## 1. Páginas internas de la tienda

Usa rutas cortas (sin dominio) para enlazar a páginas dentro de tu tienda Shopify.

| Destino | Ingresar |
|---|---|
| Página de inicio | *(dejar vacío)* |
| Todos los productos | `collections/all` |
| Una colección | `collections/collection-handle` |
| Una página de producto | `products/product-handle` |
| Una página estática (Acerca de, FAQ…) | `pages/page-handle` |
| Listado de blog | `blogs/news` |
| Una entrada de blog | `blogs/news/post-handle` |
| Carrito | `cart` |
| Búsqueda | `search` |
| Contacto | `pages/contact` |

**Consejo de Auto Limpieza:** Pega una URL completa (p. ej. `https://mystore.com/collections/sale`) → activa el interruptor de **Auto limpieza** → el sistema elimina el dominio y mantiene solo `collections/sale`.

---

## 2. URL completa (Enlace externo)

Enlaza a cualquier sitio web usando una URL completa.

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. Abrir en nueva pestaña

Agrega `@new` a cualquier enlace para abrirlo en una nueva pestaña.

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. Sin navegación (elemento padre)

Usa `#` cuando un elemento es un padre que contiene elementos hijos — tocarlo expande los hijos sin navegar a ningún lado.

```
#
```

---

## 5. Desplazarse (Ancla)

| Acción | Sintaxis |
|---|---|
| Desplazarse hacia arriba | `scroll:Top` |
| Desplazarse hacia arriba con un desplazamiento de 100px | `scroll:Top(100)` |
| Desplazarse hacia abajo | `scroll:Bottom` |
| Desplazarse a una sección por selector CSS | `scroll:OnPage(#section-id)` *(Business / Elite)* |

**Ejemplo:** Un "Volver arriba" botón → Enlace a es `scroll:Top`.

---

## 6. Abrir panel / popup *(Business / Elite)*

Abre componentes de UI del tema sin salir de la página.

| Acción | Sintaxis |
|---|---|
| Abrir un menú deslizante de Navi+ | `open:NaviMenu(SF-XXXXXXXXXX)` |
| Hacer clic en un elemento CSS | `open:clickTo(#cart-button)` |
| Enfocar un campo de entrada | `open:focusTo(.search-input)` |
| Abrir búsqueda del tema / cajón del carrito | Usa el popup de ayuda → *Abrir paneles* |
| Abrir chat de Shopify Inbox | Usa el popup de ayuda → *Abrir otras aplicaciones* |

`open:clickTo` y `open:focusTo` aceptan `Down` o `Up` para desplazarse antes de actuar:  
`open:clickTo(.footer-element, Down)`

---

## 7. Teléfono, SMS, Correo electrónico

| Acción | Sintaxis |
|---|---|
| Llamada telefónica | `tel:+12125550100` |
| SMS | `sms:+12125550100?body=Hello` |
| Correo electrónico | `mailto:hello@yourdomain.com` |

---

## 8. Aplicaciones de chat

| App | Sintaxis |
|---|---|
| WhatsApp | `https://wa.me/12125550100` *(sin prefijo +)* |
| Messenger | `https://m.me/YourPageName` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/your-line-code` |

---

## 9. Compartir

| Acción | Sintaxis |
|---|---|
| Compartir página actual (diálogo de compartir nativo) | `open:ShareMe` |
| Copiar URL al portapapeles | `share:CopyUrl` |
| Compartir en Facebook | `share:Facebook` |
| Compartir en Twitter / X | `share:Tweet` |

---

## 10. Llamar a JavaScript

Llama a cualquier función de JavaScript definida en la página.

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. Cambiar idioma

```
open:ChangeLanguage(fr)    ← cambiar a francés
open:ChangeLanguage(vi)    ← cambiar a vietnamita
open:ChangeLanguage()      ← restablecer al idioma predeterminado
```
