---
description: Navi+ es muy rápido. Está completamente desplegado en una CDN líder con muy baja latencia (alrededor de 100ms) y puede atender a millones de clientes sin desacelerarse.
lang: es
layout: default
permalink: /es/docs/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-speed-and-improve-the-user-experience-ux/
title: Optimizar la velocidad y mejorar la experiencia del usuario (UX).
---
# Optimizar la velocidad y mejorar la experiencia del usuario (UX).

#### ¿Por qué necesitas hacer esto? ¿No es ya Navi+ rápido?

Navi+ es muy rápido. Está completamente desplegado en una CDN líder con muy baja latencia (alrededor de 100ms) y puede atender a millones de clientes sin desacelerarse.

Sin embargo, Navi+ aún funciona dentro del ecosistema de Shopify. Shopify tiene sus propias reglas de carga:

1. Shopify prioriza la carga de sus propios recursos primero.
2. Luego Shopify carga el contenido del tema.
3. Finalmente, Shopify carga el contenido de la aplicación, pero no en ningún orden específico.

Esto significa que si estás utilizando múltiples aplicaciones, Navi+ puede a veces cargarse más tarde de lo esperado. Por eso puede parecer más lento en ciertos casos.

***

### ¿Cuál es mi solución?

Actualmente, Navi+ tiene alta prioridad al cargarse en sitios web de Shopify. Sin embargo, todavía hay un cierto retraso. Abordaremos estos problemas uno por uno aquí:

#### Slide Menu: Agregar un efecto de carga y bloquear el selector del disparador

Muy simple: solo ingresa el selector CSS que usas para el Slide Menu en la sección de incrustación de la aplicación Navi+ (ver imagen abajo).

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

#### Mega Menu (modo de reemplazo): Agregar un efecto de carga y bloquear el selector del disparador

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fk4HYuop9Aq2GRnk4OEWT%2F2.1.png?alt=media&#x26;token=ddeb17b5-23d7-4870-b9ac-fb95b6e250b7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F3CWBvH8fNoj0AHJJ68so%2F2.2.png?alt=media&#x26;token=8282df62-c2c4-4fba-a087-2eb6ea4e50dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fqu827HEiR3F515aSXcH1%2F2.3.png?alt=media&#x26;token=0873fe1c-31a6-45a9-8700-f09dc39f9c52" alt=""><figcaption></figcaption></figure>

Nota:

* Agrega el sufijo **(M)** si deseas que se aplique solo en móvil.
* Agrega el sufijo **(D)** si deseas que se aplique solo en escritorio.
* No dejes sufijo si deseas que se aplique en ambas plataformas.
