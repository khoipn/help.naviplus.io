---
description: Usa ChatGPT, Claude o Gemini para rediseñar tu menú de Navi+ — Navi+ genera la indicación, tú pegas el resultado JSON de vuelta.
lang: es
layout: default
permalink: /es/docs/ai/auto-design-your-ai/
title: Diseño automático con tu app de IA
---
# Diseño automático con tu app de IA

Rediseña tu menú con una herramienta de IA que ya conoces — ChatGPT, Claude o Gemini. Navi+ prepara los datos y la indicación; tú solo la ejecutas en la IA y traes el resultado de vuelta. Esta función es **gratis**.

Abrir: el botón **AI** → tarjeta **Diseño automático con tu app de IA**.

---

## Antes de empezar — haz una copia de seguridad de tu menú

> **⋮ Más → Copia de seguridad / Restaurar** — guarda tu menú actual como archivo o en la nube antes de hacer cambios. No te saltes este paso.

---

## Paso 1 — Entrena tu IA

Necesitas una herramienta de IA basada en web. Modelos recomendados de gran contexto:

| Herramienta | Modelo sugerido |
|---|---|
| Claude | Opus 4.7 |
| ChatGPT | GPT-5 |
| Gemini | Pro 1.5 |

Haz clic en **Abrir documentos de entrenamiento**, copia todo y pégalo en tu chat de IA. Esto le enseña a la IA cómo están estructurados los menús de Navi+.

---

## Paso 2 — Envía tu menú actual (JSON) a la IA

Una vez que la IA entienda la estructura del Paso 1, envíale tu menú actual:

- **Copia el menú actual al portapapeles** y pégalo en el chat, o
- **Descarga el archivo JSON** y adjúntalo al chat.

---

## Paso 3 — Da instrucciones de diseño

Escribe tu solicitud en lenguaje natural, por ejemplo:

- Agrega 2 elementos más al menú
- Cambia el color primario a azul
- Agrupa los elementos de producto bajo una sección con título

Tienes control total sobre el diseño. La IA devuelve un nuevo menú como JSON.

---

## Paso 4 — Pega el resultado y aplícalo

Copia el JSON que devuelve la IA, luego aplícalo a Navi+ de una de dos maneras:

- **Opción 1:** Pega el JSON en el cuadro de entrada y haz clic en **Aplicar**.
- **Opción 2:** Haz clic en **Subir archivo JSON** y elige tu archivo `.json`.

Repite los pasos 3–4 hasta que el menú se vea bien, luego haz clic en **Guardar**.

> Consejo: La IA solo cambia la estructura y el contenido del JSON. Los campos que configuraste pero no mencionaste se conservan — pero aun así revisa el menú después de aplicar.

---

## Instrucciones de ejemplo (Paso 3)

- Agrega 2 elementos: Blog y Empleo.
- Cambia el color primario a azul `#1a73e8`.
- Reduce a 4 elementos principales, mueve el resto bajo un elemento Más.
- Agrega un ícono adecuado a cada elemento y pon en negrita el elemento Promociones.
- Traduce todos los nombres de los elementos al inglés.

---

## Caso de estudio — ordenar una tab bar con Claude

**Contexto:** Una tienda tiene una tab bar desordenada de 8 elementos y quiere reducirla a 5 elementos y agregar íconos, conservando todos los enlaces existentes.

1. **Copia de seguridad:** ⋮ Más → Copia de seguridad / Restaurar → guarda una copia.
2. **Paso 1 — Entrena la IA:** Abre Claude (Opus 4.7), haz clic en **Abrir documentos de entrenamiento** en Navi+, copia todo y pégalo en Claude.
3. **Paso 2 — Envía el menú:** Haz clic en **Copiar el menú actual al portapapeles** y pega el JSON en Claude.
4. **Paso 3 — Instruye:** Dile a Claude:

   ```
   Fusiona estos 8 elementos en 5 elementos principales: Inicio, Productos,
   Promociones, Blog, Cuenta. Mueve los elementos sobrantes a subgrupos
   adecuados. Agrega un ícono a cada elemento de nivel 1. Mantén todos los
   enlaces existentes sin cambios.
   ```

5. **Paso 4 — Aplica:** Claude devuelve un nuevo JSON. Cópialo, pégalo en el cuadro **Aplicar** de Navi+ → haz clic en **Aplicar**.
6. Comprueba: 5 elementos, íconos completos, enlaces originales intactos. ¿Necesitas más ajustes? Repite los pasos 3–4. ¿Conforme? Haz clic en **Guardar**.

**Resultado:** Una tab bar limpia de 5 elementos con íconos, todos los enlaces conservados — sin editar cada elemento a mano.
