---
description: Todos los tipos de enlaces soportados por Navi+ — páginas internas, URLs externas, anclas, abrir paneles, teléfono/email, apps de chat, compartir y JavaScript.
layout: default
permalink: /es/docs/menu-items/item-link-types/
title: Tipos de enlace
---
# Tipos de enlace

El campo **Enlace a** en la información básica controla lo que sucede cuando un visitante toca o hace clic en un elemento. Navi+ soporta muchos tipos de enlaces más allá de una URL simple.

Cuando haces clic en el campo Enlace a, se abre automáticamente un popup de ayuda con ejemplos completos. También puedes escribir directamente en el campo.

---

## 1. Páginas internas de la tienda

| Destino | Ingresa |
|---|---|
| Página de inicio | *(dejar vacío)* |
| Todos los productos | `collections/all` |
| Una colección | `collections/collection-handle` |
| Una página de producto | `products/product-handle` |
| Página estática | `pages/page-handle` |
| Blog | `blogs/news` |
| Entrada del blog | `blogs/news/post-handle` |
| Carrito | `cart` |
| Búsqueda | `search` |
| Contacto | `pages/contact` |

**Consejo Auto Clean:** Pega una URL completa → activa **Auto clean** → el sistema elimina el dominio.

---

## 2. URL completa (externo)

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. Abrir en nueva pestaña

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. Sin navegación (padre)

```
#
```

---

## 5. Desplazamiento (ancla)

| Acción | Sintaxis |
|---|---|
| Subir | `scroll:Top` |
| Subir con 100px | `scroll:Top(100)` |
| Bajar | `scroll:Bottom` |
| A sección CSS | `scroll:OnPage(#section-id)` *(Business / Elite)* |

---

## 6. Abrir panel / popup *(Business / Elite)*

| Acción | Sintaxis |
|---|---|
| Abrir menú Slide Navi+ | `open:NaviMenu(SF-XXXXXXXXXX)` |
| Hacer clic en elemento CSS | `open:clickTo(#cart-button)` |
| Enfocar campo | `open:focusTo(.search-input)` |
| Búsqueda / carrito del tema | Popup ayuda → *Abrir paneles* |
| Shopify Inbox | Popup ayuda → *Abrir otras apps* |

---

## 7. Teléfono, SMS, Email

| Acción | Sintaxis |
|---|---|
| Llamada | `tel:+34912345678` |
| SMS | `sms:+34912345678?body=Hola` |
| Email | `mailto:hola@tudominio.es` |

---

## 8. Apps de chat

| App | Sintaxis |
|---|---|
| WhatsApp | `https://wa.me/34912345678` |
| Messenger | `https://m.me/TuPágina` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/tu-código` |

---

## 9. Compartir

| Acción | Sintaxis |
|---|---|
| Compartir página | `open:ShareMe` |
| Copiar URL | `share:CopyUrl` |
| Facebook | `share:Facebook` |
| Twitter / X | `share:Tweet` |

---

## 10. JavaScript

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. Cambiar idioma

```
open:ChangeLanguage(es)
open:ChangeLanguage(en)
open:ChangeLanguage()
```
