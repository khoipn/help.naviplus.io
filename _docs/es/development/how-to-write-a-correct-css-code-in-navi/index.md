---
description: 'CSS es la clave para cada problema cuando necesitas personalizar profundamente para Navi+. Casi todas las cosas de la interfaz en Navi+ se pueden resolver con código CSS. En Navi+, hay 2 niveles de CSS:'
lang: es
layout: default
permalink: /es/docs/development/how-to-write-a-correct-css-code-in-navi/
title: Cómo escribir un código CSS correcto en Navi+
---
# Cómo escribir un código CSS correcto en Navi+

CSS es la clave para cada problema cuando necesitas personalizar profundamente para Navi+. Casi todas las cosas de la interfaz en Navi+ se pueden resolver con código CSS. En Navi+, hay 2 niveles de CSS:

### Nivel 1: Hoja de estilo interna / CSS (#SF-123456789)

Este es el nivel recomendado para usar en la mayoría de los casos. Cuando escribes código en esta caja, el sistema agrega automáticamente un prefijo que es #SF-123456789 (ese es tu ID de menú) al principio de las etiquetas CSS. Esto asegurará que no haya conflicto con todos los demás componentes de la interfaz.

Ve el ejemplo antes y después de compilar CSS en esta caja a continuación

```css
// Tu código CSS
{
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   {
      margin-bottom: 164px;
   }
}
```

```css
// El código CSS después de ser compilado

#SF-123456789 {
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   #SF-123456789 {
      margin-bottom: 164px;
   }
}

```

### Nivel 2: Hoja de estilo global / CSS

A menos que tengas experiencia con CSS, evita abusar de esta caja porque todo se empujará directamente en la forma en que escribes el código CSS sin ninguna capa de protección contra conflictos.

---

# Instrucciones para el Agente: Consultando Esta Documentación

Si necesitas información adicional que no está directamente disponible en esta página, puedes consultar la documentación dinámicamente haciendo una pregunta.

Realiza una solicitud HTTP GET en la URL de la página actual con el `ask` parámetro de consulta:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/development/how-to-write-a-correct-css-code-in-navi+.md?ask=<pregunta>
```

La pregunta debe ser específica, autocontenida y escrita en lenguaje natural.
La respuesta contendrá una respuesta directa a la pregunta y extractos relevantes y fuentes de la documentación.

Usa este mecanismo cuando la respuesta no esté explícitamente presente en la página actual, necesites aclaraciones o contexto adicional, o quieras recuperar secciones de documentación relacionadas.
