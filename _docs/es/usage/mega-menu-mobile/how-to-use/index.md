---
description: '**Los Mega Menús Móviles** no son tan comunes en móviles como el Tabbar o los Menús deslizantes, porque el área de toque de un Mega Menú a menudo es demasiado pequeña para los dedos de los usuarios. Sin embargo...'
lang: es
layout: default
permalink: /es/docs/usage/mega-menu-mobile/how-to-use/
title: ¿Cómo usar?
---
# ¿Cómo usar?

**Los Mega Menús Móviles** no son tan comunes en móviles como el Tabbar o los Menús deslizantes, porque el área de toque de un Mega Menú a menudo es demasiado pequeña para los dedos de los usuarios. Sin embargo, a veces puede que desee mantener una experiencia consistente entre escritorio y móvil utilizando un Mega Menú en ambas plataformas.

Los Mega Menús Móviles también tienen ventajas: son compactos, se posicionan debajo del encabezado y no ocupan espacio en la pantalla ya que flotan en la pantalla. Como un menú de sección, se desplazan junto con la página.

**Beneficios Clave:**

* Funciona sin problemas tanto en móvil como en escritorio para una experiencia consistente
* Ahorra espacio y se desplaza con la página.
* Ofrece múltiples estilos de presentación con **imágenes**, **rejillas** y **diseños de múltiples niveles** para una experiencia rica y profesional

**FAQ:**

<details><summary><strong>1. No he decidido si usar la versión gratuita o de pago. ¿Puedo probar las plantillas de menú profesional?</strong></summary>
<p>¡Absolutamente! Los grupos de menú son principalmente para ayudar a los principiantes a evitar sentirse abrumados por las características avanzadas en Navi+ 😄. La mejor manera es probar los menús profesionales para explorar todas las características y opciones de diseño. Más tarde, simplemente puede eliminar cualquier menú que no necesite o que considere inadecuado.</p>
</details>

<details><summary><strong>2. ¿Crear un menú aquí hace que aparezca en mi sitio web de inmediato?</strong></summary>
<p>Aún no. Necesitarás <strong>publicar</strong> el menú correcto para que aparezca en tu sitio web. ¡No te preocupes, es fácil!</p>
</details>

<details><summary><strong>3. ¿Qué pasa si elijo la plantilla incorrecta o cometo un error?</strong></summary>
<p>No hay problema en absoluto. Puedes eliminarlo y crear uno nuevo en cualquier momento. Si estás probando un menú y quieres intentar otra plantilla, puedes <strong>guardar</strong> el actual como un archivo de respaldo y volver a abrirlo más tarde. Incluso puedes <strong>copiar y pegar</strong> partes entre menús (abriendo dos pestañas del navegador) para mantener tu trabajo anterior. ¡Siéntete libre de experimentar!</p>
</details>

<details><summary><strong>4. ¿Debería crear solo un menú o múltiples?</strong></summary>
<p>Deberías crear <strong>múltiples menús</strong>. Solo el menú <strong>activo</strong> se mostrará en tu sitio, pero puedes preparar muchas versiones, seleccionando diferentes plantillas o clonando menús. Los menús pueden configurarse para mostrar/ocultar según el tipo de página (inicio, producto, colección...), dispositivo (móvil o escritorio) o palabras clave de URL. ¡Así que adelante y construye menús que se adapten a cada situación!</p>
</details>

### Paso 1: Editar el árbol de menú

#### 1.1. Entendiendo el Árbol de Menú

El **árbol de menú** es la parte más importante de cualquier menú: define la estructura.

Aquí hay un ejemplo de un árbol de menú de mega menú móvil:

```
Menú
Inicio  
Catálogo 
- Todo Montaña  
   - Crucero Flex  
   - Equilibrio Ride
- Freestyle  
   - Tablero de Parque  
   - Tablero Jib  
- Freeride  
Blogs
Soporte  
Más 
```

Este es un árbol de menú de 3 niveles. El nivel-1 incluye **Menú, Inicio**, **Catálogo**, **Soporte, Blogs** y **Más**. **Todo-Montaña** es un elemento de menú de nivel-2, con algunos elementos secundarios: **Crucero Flex** y **Equilibrio Ride**.

Pasarás la mayor parte de tu tiempo construyendo este árbol de menú para tu sitio web, ayudando a los clientes a encontrar el contenido que están buscando.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FosZUYAtOckjPUD5T8F5q%2FHelp.MenuTree.1.1.0.png?alt=media&#x26;token=c1eec6d7-a0b6-45f5-aea5-6678540a884a" alt="Catalog: A level 1 menu item, displayed as a tab on the tab bar. All-Mountain: Level 2 menu item that appears when you tap on Catalog."><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fh6AHpLQvuPq0AadY0TOH%2FHelp.MenuTree.1.1.1.png?alt=media&#x26;token=06a10cb0-ab20-44be-a734-a221597a4ea9" alt="Cruise Flex, Balance Ride: Level 3 menu item that appears when you tap on All-Mountain."><figcaption></figcaption></figure>

#### 1.2. Interacciones Básicas con el Árbol de Menú

Puedes arrastrar y soltar elementos del menú hacia arriba y hacia abajo o hacia la izquierda y hacia la derecha para cambiar su posición y relaciones padre-hijo en el árbol de menú.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FMAz90izqLq6bJcZst2rw%2FHelp.MenuTree.1.1.2.png?alt=media&#x26;token=27b190ca-50eb-4272-9ba9-30741e95d33a" alt=""><figcaption></figcaption></figure>

Cuando pasas el cursor sobre cualquier elemento del menú, verás opciones adicionales: editar los detalles del elemento, eliminarlo del árbol de menú o copiar y pegarlo en otro lugar.

{% comment %}hint style="info" {% endcomment %}
**Consejo:** Puedes copiar un elemento de menú de un menú a otro abriendo la aplicación Navi+ en dos pestañas del navegador.
{% comment %}endhint{% endcomment %}

#### 1.3. ¡IMPORTANTE! Elimina los elementos de menú de muestra y mantén solo la estructura que deseas.

Esta es una situación común al crear un menú con Navi+. Cuando creas un nuevo menú, incluimos un ejemplo completo con elementos de menú populares para mostrar ideas de diseño y permitirte copiar/pegar según sea necesario. Sin embargo, si eres nuevo en Navi+ y usas el plan Starter, verás muchas advertencias rojas (i) para características que no están disponibles, como subir imágenes o usar interacciones avanzadas.

Si te gustan estas características avanzadas, considera actualizar a un plan Business o Elite. Pero si deseas continuar con el plan Starter, por favor encuentra y elimina los elementos de menú con advertencias rojas (i).

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FE7iIBanCUi5x1wUBoySS%2FHelp.MenuTree.1.1.3.png?alt=media&#x26;token=04573f08-79ed-494b-91a6-f744a5f4779c" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fpstdwu2GBy4wymYsInJe%2FHelp.MenuTree.1.1.3b.png?alt=media&#x26;token=8a2ebfc9-2cbc-4efb-a1b4-fec1fd621ec8" alt=""><figcaption></figcaption></figure>

{% comment %}hint style="info" {% endcomment %}
**Consejo Importante:** Cuando aparezca la confirmación de eliminación, activa “No preguntar de nuevo la próxima vez” para eliminar más rápido.
{% comment %}endhint{% endcomment %}

#### 1.4. Agregar elementos de menú al Árbol de Menú

Para agregar un elemento de menú, tienes dos opciones:

**Opción 1&#x20;**<mark style="background-color:$warning;">**(No recomendado si eres nuevo en Navi+)**</mark>**:** Haz clic en “Agregar menú” para insertar un elemento de menú en blanco al final del árbol de menú. Este método requiere un buen entendimiento de la configuración de los elementos del menú, que cubriremos a continuación. Puede parecer abrumador al principio, así que puedes explorar esto más tarde.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FP8GKAiPpBlFdnzEM0TiI%2FHelp.MenuTree.1.1.4.png?alt=media&#x26;token=5b87d791-686b-4768-b7dd-d17ff95841c4" alt=""><figcaption></figcaption></figure>

**Opción 2 (Recomendada):** Ya hemos preparado muchas plantillas de elementos de menú bien diseñadas para ti. Simplemente cópialas y pégalas en el lugar correcto. Después de terminar tu árbol de menú, simplemente elimina las plantillas no utilizadas.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FjBJUHMA8dTOONOJoOt8S%2FHelp.MenuTree.1.1.5.png?alt=media&#x26;token=e6316df1-e99a-4259-8370-5fc3afaf331a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FChui5Q4pxEpW1cDVoE3E%2FHelp.MenuTree.1.1.5b.png?alt=media&#x26;token=9e29309f-3177-4d89-ac38-d319bba7a541" alt=""><figcaption></figcaption></figure>
