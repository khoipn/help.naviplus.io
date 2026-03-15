---
description: 'Paso 1: Haz clic en Tienda en línea, luego haz clic en Temas. Consejos: Haz clic derecho en Tienda en línea y selecciona “Abrir enlace en nueva pestaña” para ahorrar tiempo.&'
lang: es
layout: default
permalink: /es/docs/usage/slide-menu-hamburger-menu/publishing-on-shopify/
title: Publicación en Shopify
---
# Publicación en Shopify

### Paso 2: (Shopify) Publica el menú en tu sitio web.

#### 2.1. Activa Navi+ en Integraciones de aplicaciones

Paso 1: Haz clic en Tienda en línea, luego haz clic en Temas. Consejos: Haz clic derecho en Tienda en línea y selecciona “Abrir enlace en nueva pestaña” para ahorrar tiempo.&#x20;

Paso 2: Selecciona el tema donde deseas publicar el menú.  Haz clic: **Personalizar**

* Si tu sitio web es nuevo y aún no tiene usuarios, siéntete libre de publicar el menú sin preocupaciones; puedes activarlo o desactivarlo en cualquier momento sin afectar a los visitantes.
* Si tu sitio web ya tiene tráfico regular, ten más cuidado. La mejor práctica es crear un **Tema duplicado** y probar Navi+ en esa versión primero.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg4GrkjBaBpEggTxDhmZ1%2FHelp.MenuTree.1.1.7.png?alt=media&#x26;token=891a8bf8-5e42-4ff7-8f69-dc965a699f3a" alt=""><figcaption></figcaption></figure>

Paso 3: Ve a Integraciones de aplicaciones, encuentra “Navi+ en todas las páginas” y actívalo.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE4ekiVTzuxR9yxDM5Tcq%2FHelp.MenuTree.1.1.8.png?alt=media&#x26;token=40b62a4c-070a-479e-a883-c11b3f74bd19" alt=""><figcaption></figcaption></figure>

Paso 4: No olvides hacer clic en “Guardar” para aplicar los cambios.

Después de estos 4 pasos, Navi+ se ha instalado en tu sitio web y está listo para mostrarse. Sin embargo, el proceso aún no está completo. Regresa a la pestaña de la aplicación Navi+ para activar realmente **Publicar menú**.

#### 2.2. Selecciona la configuración de visualización y publica el menú.

Paso 1: Haz clic en el botón **Publicar en el sitio web**.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FarvGXK52tZ1jWEUE6hEu%2FHelp.MenuTree.1.2.1.png?alt=media&#x26;token=1be77446-44da-40e9-9bf7-f040d4238cfc" alt=""><figcaption></figcaption></figure>

Paso 2: Activa el interruptor "Publicar menú (visible solo cuando lo abra el usuario)".&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FhSDziWrg4Jxr9bZ9jB4j%2FHelp.MenuTree.1.2.2.png?alt=media&#x26;token=3c39339c-fe75-4653-86e7-411318cf506d" alt=""><figcaption></figcaption></figure>

Paso 3: Selecciona el método de visualización&#x20;

**Método 1: Abre este menú desde otro elemento del menú Navi+ usando la sintaxis open:NaviMenu**

Este método te permite abrir un menú deslizante cuando el usuario hace clic o toca un elemento del menú de otro menú Navi+ (por ejemplo: en una barra de pestañas, un FAB en la esquina inferior de la pantalla, o un mega menú). Los principales propósitos de este método:

<details><summary>Propósito 1: Mejora de la visibilidad y la experiencia del usuario al mostrar el mapa del sitio completo en el menú deslizante mientras se mantiene fácil de acceder.</summary>
<p>El menú deslizante es ideal para mostrar tu mapa del sitio completo gracias a su gran espacio y diseño flexible, lo que lo hace perfecto para mostrar todo el catálogo de productos, enlaces a páginas clave, blogs, herramientas de soporte, etc. Sin embargo, el menú deslizante a menudo es menos visible por defecto. Para mejorar la descubribilidad, puedes usar otro menú Navi+ (como una barra de pestañas) para presentar tus enlaces más importantes y reconocibles, y colocar un elemento de menú destacado que active el menú deslizante. Esto asegura una mejor visibilidad y compromiso del usuario para el menú deslizante.</p>
</details>

<details><summary>Propósito 2: <strong>Profundidad de menú ilimitada con una estructura de menú grande y flexible (Solo Navi+)</strong></summary>
<p>En lugar de mostrar un popup con espacio limitado cuando se hace clic en un elemento del menú, puedes abrir otro menú deslizante con tres niveles y múltiples formas de presentar información. Esto se puede repetir para otros elementos del menú, o incluso para el mismo menú deslizante, permitiéndote crear una profundidad prácticamente ilimitada para tus menús Navi+.</p>
</details>

**Método 2: Cuando se hace clic o se toca un elemento de la interfaz de usuario (definido por un selector CSS como #id_of_element o .class_name), se mostrará este menú.**

Este es, sin duda, el mejor y más comúnmente utilizado método con el Menú Deslizante.\
En esta guía, nos centraremos en reemplazar el menú hamburguesa predeterminado del sitio web en dispositivos móviles.\
También puedes aplicar este método de manera creativa encontrando y utilizando otros selectores CSS para activar el menú.

<details><summary>¿Cómo reemplazar el menú hamburguesa predeterminado de tu sitio web con el Menú Deslizante de Navi+ (<strong>Guía popular)?</strong></summary>
<p>En la mayoría de los sitios web de Shopify, el menú hamburguesa predeterminado se genera a partir de la versión de escritorio a través del diseño responsivo. Como resultado, suele ser muy simple, tiene poca profundidad y carece de soporte para íconos, imágenes o diseños avanzados. Reemplazarlo con un Menú Deslizante de Navi+ es una opción común y práctica para aprovechar las características avanzadas de Navi+.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FIB9UqVXh9bL1z4AuHAQj%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=1bef8174-8a59-4765-b2ea-e669c1d12fd6" alt=""><figcaption></figcaption></figure>

<p>Para hacer esto, simplemente identifica el selector CSS del ícono del menú hamburguesa de tu sitio web e ingrésalo en el cuadro de texto. Ya hemos encontrado los selectores CSS para algunos de los temas más populares para ti, que se enumeran a continuación.</p>
<ol>
<li>Selectores CSS para algunos temas populares y gratuitos.. de Shopify como Dawn, Sense, Savor, Horizon..</li>
</ol>
<pre class="codehilite"><code>#Details-menu-drawer-container 
</code></pre>

<ol>
<li>Si no está en esta lista, no te preocupes</li>
</ol>
<pre class="codehilite"><code>- Puedes chatear con un soporte de Navi+ para obtener ayuda instantánea; esto solo toma unos minutos para encontrar el selector CSS.

- O, puedes seguir la guía de autoayuda en los siguientes temas (justo después de este tema).
</code></pre>
</details>

<details><summary><strong>¿Cómo encontrar el selector CSS en tu sitio web?</strong></summary>
<p>Puedes chatear con un soporte de Navi+ para obtener ayuda instantánea en lugar de hacerlo tú mismo.\
Sin embargo, (1) esto te ayudará a entender la idea principal, y (2) si deseas hacerlo por tu cuenta, sigue las instrucciones a continuación.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLnnFLMtydcePyiqPSiBL%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=36d3640e-7225-4733-b129-6f2abff1815a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTwlnQPebgKvJC1CNLkOG%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=fdba7b83-2372-469e-a00f-fc54e7f03931" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F955EzmFE24Jusqk5AGdx%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=17e5795c-3b2a-416a-877b-63d99d931e74" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FTna1I28ss21P5aVQW0lB%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=feed527e-2504-4609-941c-2b61885cbaab" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwwbgyipKDVFeCcnTgk7z%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=6d806208-cff1-4a5b-b40e-031df20120d0" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FtSRUcDl65hpc3xQ1ON8k%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=a63979b3-b38f-44bc-92f0-f39b15c79804" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgyuiAWUvBOm50wfSJ6Jh%2FHelp.MenuTree.1.4.8.png?alt=media&#x26;token=0cc58c3a-7060-4cb7-a78e-669d6fa20ddc" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FLRuBf54qvUapZFUBiB6Z%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=c885d99d-6566-4eb2-a780-6c75be5853b4" alt=""><figcaption></figcaption></figure>
</details>

#### 2.3. ¡Importante! Optimiza la velocidad del menú deslizante, agrega un efecto de carga y previene menús duplicados

No es algo que necesites arreglar de inmediato, pero a largo plazo es importante para la experiencia del menú deslizante creada por Navi+. Antes de que Navi+ reemplace completamente el antiguo menú deslizante, el menú original del tema sigue activo. Por un breve momento—alrededor de medio segundo—si un usuario carga el menú y toca rápidamente el botón de hamburguesa (un caso raro, pero aún posible), el antiguo menú del tema puede aparecer y causar un error visual.

<details><summary>Navi+ proporciona una solución simple para optimizar la experiencia del usuario y la velocidad como sigue pasos</summary>
<h4>¿Por qué necesitas hacer esto? ¿No es Navi+ ya rápido?</h4>
<p>Navi+ es muy rápido. Está completamente desplegado en una CDN líder con muy baja latencia (alrededor de 100ms) y puede atender a millones de clientes sin desacelerarse.</p>
<p>Sin embargo, Navi+ aún funciona dentro del ecosistema de Shopify. Shopify tiene sus propias reglas de carga:</p>
<ol>
<li>Shopify prioriza la carga de sus propios recursos primero.</li>
<li>Luego Shopify carga el contenido del tema.</li>
<li>Finalmente, Shopify carga el contenido de la aplicación, pero no en ningún orden específico.</li>
</ol>
<p>Esto significa que si estás utilizando múltiples aplicaciones, Navi+ puede a veces cargarse más tarde de lo esperado. Por eso puede sentirse más lento en ciertos casos.</p>
<hr />
<h3>¿Cuál es mi solución?</h3>
<p>Actualmente, Navi+ tiene alta prioridad al cargarse en sitios web de Shopify. Sin embargo, todavía hay un cierto retraso. Abordaremos estos problemas uno por uno aquí:</p>
<h4>Menú Deslizante: Agrega un efecto de carga y bloquea el selector de activación</h4>
<p>Muy simple: solo ingresa el selector CSS que usas para el Menú Deslizante en la sección de integración de la aplicación Navi+ (ver imagen a continuación).</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

<p>Nota:</p>
<ul>
<li>Agrega el sufijo <strong>(M)</strong> si deseas que se aplique solo en móviles.</li>
<li>Agrega el sufijo <strong>(D)</strong> si deseas que se aplique solo en escritorio.</li>
<li>No dejes sufijo si deseas que se aplique en ambas plataformas.</li>
</ul>
</details>
