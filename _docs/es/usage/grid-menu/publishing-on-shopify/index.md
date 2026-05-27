---
description: 'Paso 1: Haz clic en Tienda en línea, luego haz clic en Temas. Consejos: Haz clic derecho en Tienda en línea y selecciona "Abrir enlace en una nueva pestaña" para ahorrar tiempo.'
lang: es
layout: default
permalink: /es/docs/usage/grid-menu/publishing-on-shopify/
title: Publicación en Shopify
---
# Publicación en Shopify

### Paso 2: (Shopify) Publica el menú en tu sitio web.

#### **I) MÉTODO 1: INSERTE (ANTES O DESPUÉS) ESTE MENÚ EN UNA UBICACIÓN ESPECÍFICA EN SU SITIO WEB, O REEMPLACE UN MENÚ EXISTENTE, UTILIZANDO UN SELECTOR CSS. (**&#x52;ECOMENDADO)

#### I.1. Activa Navi+ en Integraciones de aplicaciones

Paso 1: Haz clic en Tienda en línea, luego haz clic en Temas. Consejos: Haz clic derecho en Tienda en línea y selecciona "Abrir enlace en una nueva pestaña" para ahorrar tiempo.

Paso 2: Selecciona el tema donde deseas publicar el menú. Haz clic: **Personalizar**

* Si tu sitio web es nuevo y aún no tiene usuarios, siéntete libre de publicar el menú sin preocupaciones; puedes activarlo o desactivarlo fácilmente en cualquier momento sin afectar a los visitantes.
* Si tu sitio web ya tiene tráfico regular, ten más cuidado. La mejor práctica es crear un **Tema duplicado** y probar Navi+ en esa versión primero.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

Paso 3: Ve a Integraciones de aplicaciones, encuentra "Navi+ en todas las páginas", y actívalo.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

Paso 4: No olvides hacer clic en "Guardar" para aplicar los cambios.

Después de estos 4 pasos, Navi+ se ha instalado en tu sitio web y está listo para mostrarse. Sin embargo, el proceso aún no está completo. Regresa a la pestaña de la aplicación Navi+ para activar realmente **Publicar menú**.

#### I.2. Entendiendo el Selector CSS

Un Selector CSS es una forma de apuntar a un elemento HTML específico en tu página web. Navi+ lo utiliza para saber exactamente **dónde** colocar tu menú, ya sea para insertarlo antes o después de un elemento, o para reemplazar uno existente por completo.

Para encontrar el Selector CSS correcto para tu sitio web, puedes usar:
- [Modo de depuración](/docs/usage/debug-mode-find-css-selectors/) — herramienta integrada de Navi+: pasa el cursor sobre cualquier elemento y copia instantáneamente su selector
- [Herramientas de desarrollo del navegador](/docs/usage/general/find-css-selector/) — método manual utilizando el inspector de tu navegador

<details><summary><strong>Cómo encontrar el selector CSS usando las herramientas de desarrollo del navegador</strong></summary>
<p>Puedes chatear con un soporte de Navi+ para obtener ayuda instantánea en lugar de hacerlo tú mismo. Sin embargo, si deseas hacerlo por tu cuenta, sigue las capturas de pantalla a continuación.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

#### I.3. Tres opciones de publicación

Paso 1: Haz clic en el botón **Publicar en el sitio web**.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

Paso 2: Activa el interruptor "Publicar menú por método de Insertar/Reemplazar".

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMKj8nfrhd9jdA3bXSFio%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=dd78fff1-36fb-4ce9-93e5-24d3076c170d" alt=""><figcaption></figcaption></figure>

Paso 3: Ingresa tu Selector CSS y elige una de las tres opciones de publicación a continuación.

<details><summary>Opción 1: Insertar Antes (más común para Menú de cuadrícula)</summary>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FFdsoRiQZP0I26RofqljL%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=51fec431-31e7-4bce-8c22-50a84664ee65" alt=""><figcaption></figcaption></figure>
<p>Inserta el menú de Navi+ inmediatamente <strong>antes</strong> del elemento seleccionado.</p>
<p><strong>Ejemplo:</strong> Selector CSS <code>main</code> → el Menú de cuadrícula aparece sobre el área de contenido principal de la página.</p>
<p>Selectores CSS comunes para temas de Shopify (Dawn, Sense, Savor, Horizon):</p>
<ul>
<li><code>main</code> — la mayoría de los temas de Shopify</li>
<li><code>#MainContent</code> — tema Shopify Dawn</li>
</ul>
<p¿No está en esta lista? Chatea con un soporte de Navi+, o usa <a href="/docs/usage/debug-mode-find-css-selectors/">Modo de depuración</a> o <a href="/docs/usage/general/find-css-selector/">Herramientas de desarrollo del navegador</a>.</p>
</details>

<details><summary>Opción 2: Insertar Después</summary>
<p>Inserta el menú de Navi+ inmediatamente <strong>después</strong> del elemento seleccionado.</p>
<p><strong>Ejemplo:</strong> Selector CSS <code>header</code> → el Menú de cuadrícula aparece justo debajo del encabezado.</p>
<p>Selectores CSS comunes para temas de Shopify (Dawn, Sense, Savor, Horizon):</p>
<ul>
<li><code>header</code> — la mayoría de los temas de Shopify</li>
<li><code>.header-wrapper</code> — algunos temas</li>
</ul>
<p¿No está en esta lista? Chatea con un soporte de Navi+, o usa <a href="/docs/usage/debug-mode-find-css-selectors/">Modo de depuración</a> o <a href="/docs/usage/general/find-css-selector/">Herramientas de desarrollo del navegador</a>.</p>
</details>

<details><summary>Opción 3: Reemplazar</summary>
<p>En la mayoría de las tiendas de Shopify, no hay un elemento de Menú de cuadrícula incorporado para reemplazar. Insertar Antes <code>main</code> es el enfoque recomendado.</p>
<p>Si tu tema tiene un elemento de estilo cuadrícula que deseas reemplazar, usa <a href="/docs/usage/debug-mode-find-css-selectors/">Modo de depuración</a> o <a href="/docs/usage/general/find-css-selector/">Herramientas de desarrollo del navegador</a> para encontrar su selector.</p>
</details>

#### I.4. Apuntando a dispositivos específicos

Puedes controlar si el Selector CSS se aplica en móvil, escritorio, o ambos añadiendo un sufijo:

| Sufijo | Se aplica a |
|--------|------------|
| `(M)` | Solo móvil |
| `(D)` | Solo escritorio |
| *(ninguno)* | Tanto móvil como escritorio |

**Ejemplos:** `main(D)` — solo escritorio · `main(M)` — solo móvil · `main` — ambas plataformas.


#### **II) MÉTODO 2: AÑADIR ESTE MENÚ COMO UNA SECCIÓN/BLOQUE EN EL TEMA DE SHOPIFY**

Este método inserta el menú añadiendo un Bloque/Sección en tu tema de Shopify. Es un enfoque tradicional, así que no lo describiré en detalle. Con este método, ni siquiera necesitas **"Activar Navi+ en Integraciones de aplicaciones"** como se requiere en el Paso 1 del Método 1.

Copia el ID de inserción de este menú, luego insértalo en el bloque llamado "Navi+ en Sección" en Secciones del tema. Puedes añadir un título, configurar el ancho completo y ajustar el margen para esta sección después de añadirla.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FO2uavUwCekKwBVqvtJrt%2FMargin-padding%201.1.png?alt=media&#x26;token=35261670-ad9b-445f-9730-b10be40e406e" alt=""><figcaption></figcaption></figure>

<details><summary>Guía para añadir este menú como una sección/bloque en el tema de Shopify</summary>
<p>A continuación se presenta una guía detallada sobre cómo insertar un menú de Navi+ como una sección/bloque en tu tema de Shopify. Este método te permite añadir el menú de una manera estándar, compatible con Shopify, aunque no es tan flexible como los otros métodos proporcionados por Navi+.</p>
<p>Este método se aplica a <strong>Menús Mega</strong> y <strong>Menús de Cuadrícula</strong>. <strong>NO SE APLICA</strong> a <strong>Tabbar</strong>, <strong>FAB</strong>, o <strong>Menús Deslizantes</strong>.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcdnKqInMqe14B9NBOTqr%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=dcac5183-9433-4a11-bf2e-6508101ab089" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FF5RAjnmtKv4kXRhIMxaV%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=8eb3748c-16c6-4508-aebe-781d00c2a8d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F1ss5KONiPDSu0AphvToH%2FHelp.MenuTree.1.1.9.png.png?alt=media&#x26;token=395e460a-f275-4642-9a86-41f996ea87f5" alt=""><figcaption></figcaption></figure>
</details>
