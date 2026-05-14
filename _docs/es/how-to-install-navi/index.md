---
description: 'Instala Navi+ en Shopify o en cualquier sitio web, y comprende las tres formas en que Navi+ despliega menús: flotante, posicionado y activado.'
lang: es
layout: default
permalink: /es/docs/how-to-install-navi/
title: Instalar Navi+
---
# Instalar Navi+

## Paso 1 — Instalar

**Shopify:** Instala desde la [Shopify App Store](https://apps.shopify.com/pronavi-navigation-design). La aplicación se abre automáticamente después de la instalación.

**Otras plataformas** (WordPress, WooCommerce, Wix, Webflow, Squarespace, o cualquier sitio web):
1. Crea una cuenta gratuita en [dash.naviplus.app](https://dash.naviplus.app)
2. Agrega el dominio de tu sitio web
3. Copia tu fragmento de inserción — lo usarás en el Paso 2

---

## Paso 2 — Comprender cómo se desplegará tu menú

Navi+ utiliza **tres métodos de despliegue diferentes** dependiendo del tipo de menú. Comprender esto de antemano ahorra tiempo durante la configuración.

### 1. Menús flotantes — Tab Bar & FAB

Tab Bar y FAB son **menús adhesivos** que flotan en la parte superior de tu página en una posición fija. Nunca se desplazan.

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">📍</div>
    <strong>Posición</strong><br>Parte superior, inferior, izquierda o derecha de la pantalla
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔼</div>
    <strong>Ocultar automáticamente al desplazarse</strong><br>Se oculta al desplazarse hacia abajo, reaparece al desplazarse hacia arriba
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">👇</div>
    <strong>Mostrar al desplazarse hacia abajo</strong><br>Oculto por defecto, aparece solo cuando el usuario se desplaza hacia abajo — ahorra espacio en la pantalla
  </div>
</div>

**Un caso de uso común:** consolidar otros elementos flotantes — WhatsApp, Crisp, Messenger, widgets de chat en vivo — en elementos de menú de Navi+. Esto libera espacio en la pantalla y elimina el desorden de múltiples íconos flotantes apilados unos sobre otros.

### 2. Menús posicionados — Mega Menu & Grid Menu

Mega Menu y Grid Menu necesitan ser **colocados en una ubicación específica** en tu página. Hay varias formas de hacerlo:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🎯</div>
    <strong>Selector CSS</strong><br>Apunta a Navi+ a cualquier elemento en tu página. Inserta antes, después o reemplázalo completamente — así es como Mega Menu puede reemplazar completamente la navegación existente de tu tema.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🧩</div>
    <strong>Sección de Shopify</strong><br>Usa un Bloque de Aplicación dentro del Personalizador de Temas para colocar el menú en cualquier sección de tu diseño — no se necesita código.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🖥️</div>
    <strong>Código de inserción</strong><br>Pega un fragmento corto directamente en el HTML de tu página en el lugar exacto donde debería aparecer el menú.
  </div>
</div>

> **Selector CSS** es una forma de identificar cualquier punto en una página web — es cómo los navegadores apuntan a elementos específicos. Navi+ lo utiliza para saber exactamente dónde inyectar tu menú. No necesitas escribir CSS tú mismo; Navi+ tiene un selector visual que encuentra el selector por ti.

### 3. Menús activados — Slide Menu

Slide Menu **no aparece por sí solo**. Se mantiene oculto hasta que algo lo activa:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">☰</div>
    <strong>Elemento existente</strong><br>Un usuario hace clic en algo que ya está en tu página — como el ícono de hamburguesa de tu tema
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">⚡</div>
    <strong>Disparador personalizado</strong><br>Cualquier elemento en tu página — designado por su Selector CSS
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔗</div>
    <strong>Otro menú de Navi+</strong><br>Un elemento de Tab Bar o FAB que abre el Slide Menu al hacer clic
  </div>
</div>

Esto hace que Slide Menu sea flexible — puede reemplazar tu navegación existente sin agregar visualmente nada nuevo a la página.

---

## Paso 3 — Crea tu primer menú

Una vez instalado, dirígete al panel y crea tu primer menú. → [Tu primer menú (inicio rápido de 5 minutos)](/docs/getting-started/your-first-menu/)
