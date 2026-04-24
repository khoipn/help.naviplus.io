---
description: Navi+ proporciona varias opciones de configuración comunes para menús, en la **"Design"** tab, como fondo, tipografía (familia de fuentes, tamaño..), e íconos/imágenes...
lang: es
layout: default
permalink: /es/docs/frequently-asked-questions/customize-user-interface-ui/using-built-in-settings-or-custom-css/
title: ¿Usando configuraciones integradas o CSS personalizado?
---
# ¿Usando configuraciones integradas o CSS personalizado?

Navi+ proporciona varias opciones de configuración comunes para menús, en la **"Design"** tab, como fondo, tipografía (familia de fuentes, tamaño..), e íconos/imágenes (tamaño, espacio, curva...). Al usar estas configuraciones, tu menú generalmente puede ser estilizado para coincidir con el diseño y la marca general de tu sitio web.

Navi+ menus support up to 3 levels. In the **"Design"** tab, you can only configure the style for 2 levels, and there is no direct option to set font size or icon/image size for level 2 and level 3 menus. So how can you do that?

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEeUzjyXb0DDSzsPobpqC%2FCSS%201.0.png?alt=media&#x26;token=ab2b0265-e0cd-4777-964d-285e4d947c64" alt=""><figcaption></figcaption></figure>

#### Personalización profunda del menú con la herramienta CSS & Coding

Sin embargo, si tú o tu desarrollador web tienen un entendimiento básico de CSS (Hojas de Estilo), pueden personalizar todo el diseño del menú usando la herramienta integrada "**CSS & Coding"** en Navi+ sin editar directamente los archivos de tu tema. Esto ofrece varios beneficios:

* Puedes separar las configuraciones CSS para los menús de Navi+ de tu tema. Esto significa que actualizar o cambiar tu tema no afectará tus menús de Navi+.
* Navi+ utiliza un mecanismo de protección inteligente al agregar automáticamente un prefijo (como `#SF-123456789`) al inicio de cada regla CSS. Esto mantiene el CSS para diferentes menús de Navi+ aislado, minimizando el riesgo de conflictos de estilo.
* Si es necesario, aún puedes agregar CSS que afecte a todo el sitio web directamente dentro de Navi+, aunque esto debe usarse con moderación y solo cuando sea necesario.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwIMkFPG3bnaAfvN3fRy4%2FCSS.1.1.png?alt=media&#x26;token=91b34b8a-ae77-4d14-a52d-f30568f8b2c5" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRMPDJmuihVuXKunOmmAZ%2FCSS.1.2.png?alt=media&#x26;token=0ebcac44-dba7-4306-80aa-815323c027b3" alt=""><figcaption></figcaption></figure>

**Nota importante:** El **cuadro de texto de Hoja de Estilo Interna / CSS** agrega automáticamente un prefijo (por ejemplo, `#SF-123456789`) antes de cada regla CSS. Esto asegura que tu CSS solo se aplique al menú específico que se está personalizando y previene conflictos de estilo.

#### Algunos estudios de caso típicos de uso de CSS

1\) Para configurar la apariencia de todo el menú en el nivel más alto, puedes escribir un fragmento que no es CSS estándar pero muy simple. Por ejemplo, el fragmento a continuación cambia el fondo del menú a rojo. Agrega el siguiente código al cuadro de texto de Hoja de Estilo Interna / CSS:

```
{
    background: red;
}
```

2\) Configura tamaño, tipografía y colores para cada nivel de ítem del menú. Agrega el siguiente código al cuadro de texto de Hoja de Estilo Interna / CSS:

```
// Personaliza el estilo de texto de los ítems del menú de nivel 1
ul > li.item > .inner .name {
    font-size: 14px;
    color: red;
}

// Personaliza el estilo de texto de los ítems del menú de nivel 2
ul.children[menulevel="2"] > li.child > .inner .name{
     font-size: 16px; 
     color: blue;
}

// Personaliza el estilo de texto de los ítems del menú de nivel 3
ul.children[menulevel="3"] > li.child > .inner .name{
     font-size: 13px; 
     color: green;     
}
```

3\) Cambia el grosor de la fuente usando `font-weight.` Agrega el siguiente código al cuadro de texto de Hoja de Estilo Interna / CSS:

```
// Establece el grosor de la fuente del nombre
.name {
  font-weight: 700;
}

// Establece el grosor de la fuente de la descripción
.description {
  font-weight: 700;
}
```

4\) Ajusta el tamaño de la flecha. Agrega el siguiente código al cuadro de texto de Hoja de Estilo Interna / CSS:

```
ul > li.is-parent-top::after {
  font-size: 24px !important;
}
```
