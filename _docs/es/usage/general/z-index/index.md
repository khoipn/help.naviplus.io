---
description: Este es un problema común pero muy fácil de manejar cuando se utiliza Navi+. Su sitio web puede tener muchos elementos flotantes; vea los ejemplos a continuación para reconocerlos.&
lang: es
layout: default
permalink: /es/docs/usage/general/z-index/
title: Z-index
---
# Z-index

Este es un problema común pero muy fácil de manejar cuando se utiliza Navi+. Su sitio web puede tener muchos elementos flotantes; vea los ejemplos a continuación para reconocerlos.&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FL6naWQmaqD1bKTtzaALP%2FHelp.MenuTree.1.3.1b.png?alt=media&#x26;token=0e7dad3b-0395-4f66-9589-2562175e8800" alt=""><figcaption><p>Nota: Estos son los ajustes actuales de z-index en el tema Dawn (el tema predeterminado gratuito más popular de Shopify) en este momento.</p></figcaption></figure>

Estos elementos flotantes son controlados por sus propios **valores de z-index**. Cuanto mayor sea el z-index, más prioridad tiene ese elemento para mostrarse por encima de otros. La parte complicada es que no hay reglas fijas para los valores de z-index. Puede asignar cualquier número hasta 2,147,483,647. Cada tema que utilice y cada aplicación que funcione en su tienda Shopify puede asignar su propio z-index a los componentes flotantes, generalmente basado en la preferencia del desarrollador. Cuando estos elementos interactúan en su sitio web, pueden superponerse de maneras no intencionadas.

{% comment %}hint style="info" {% endcomment %}
Divirtámonos un poco :joy:: Eche un vistazo más de cerca a la captura de pantalla anterior y verá: sí, es un desastre, y no hay **reglas** en absoluto. Hay tres desarrolladores detrás del sitio web que está viendo.&#x20;

El desarrollador que construyó el tema Dawn eligió un z-index de 3 para el Panel de Menú y 1000 para el Panel de Carrito, completamente no relacionados, sin una lógica clara.&#x20;

Luego está el desarrollador de la aplicación Rivo Loyalty Rewards, una herramienta de lealtad popular, que eligió un z-index de 99999999999, probablemente sin siquiera contar cuántos nueves escribió. Su único objetivo: asegurarse de que el botón flotante “Rewards” siempre esté en la parte superior, sin importar qué, incluso por encima de su Panel de Carrito.&#x20;

Mientras tanto, el desarrollador de Navi+ eligió humildemente un número más pequeño, solo 5, porque no queríamos ser demasiado agresivos o intrusivos. Entonces, ¿qué debería hacer?
{% comment %}endhint{% endcomment %}

**Paso 1:** Encuentra el z-index correcto de tu menú de Navi+

<details><summary><strong>Método 1: Pregunta al soporte de Navi+ (</strong>El más simple)</summary>
<p>Esta es la mejor y más efectiva manera. Podemos proporcionarle información sobre los valores de z-index de elementos clave de la interfaz, como el Panel de Menú, el Panel de Carrito y cualquier aplicación de terceros que esté utilizando, y luego recomendar el mejor ajuste de z-index para su caso.</p>
<p>No dude en utilizar el cuadro de chat en la esquina inferior derecha de la pantalla para hablar con un soporte de Navi+. Navi+ está creciendo y realmente valoramos sus comentarios; sus problemas nos ayudan a guiarnos para construir un mejor producto.</p>
<p>No estamos en línea 24/7, solo 14 horas al día, según la zona horaria de Vietnam. Sin embargo, tan pronto como veamos su mensaje, responderemos de inmediato.</p>
</details>

<details><summary><strong>Método 2: Usa el modo Inspeccionar de tu navegador</strong> (detallado, pero requiere algo de conocimiento técnico)</summary>
<p>Hasta ahora, no hay mejor método para verificar esto usted mismo a menos que use el modo Inspeccionar. Esta herramienta de desarrollador está disponible en todos los navegadores modernos como Chrome, Firefox, Safari o Edge. Haga clic derecho en cualquier parte de su sitio web y seleccione <strong>Inspeccionar</strong> para abrir el modo Inspeccionar.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FswowawWsXN01MlvSqqjX%2FHelp.MenuTree.1.4.1.png?alt=media&#x26;token=470cd65f-0ce8-416a-8749-b9a210f6f08f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOabxqNlZUroNKJQfTKsI%2FHelp.MenuTree.1.4.2.png?alt=media&#x26;token=2b872306-63e3-4dcf-b89a-f16f162727b4" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FSbR8KCnlOK4nFHhxntTJ%2FHelp.MenuTree.1.4.3.png?alt=media&#x26;token=64ec8298-196e-4999-99a7-f301e052b5dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FDkVp8u1XnJPTiSKksWAQ%2FHelp.MenuTree.1.4.4.png?alt=media&#x26;token=641c59d0-9ecf-4ac2-9626-6a1a90cc151f" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FOgAwr2zm2dapUz9OSGJO%2FHelp.MenuTree.1.4.6.png?alt=media&#x26;token=493df1eb-fa89-4bf6-806e-bec230ec8e82" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FZN3XAcWn9J8Ifn6AQSjW%2FHelp.MenuTree.1.4.7.png?alt=media&#x26;token=8de191fd-4b39-4e4d-946b-07bedf55ee52" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FcwtXWdRp5QaafcNjLGD5%2FHelp.MenuTree.1.4.9.png?alt=media&#x26;token=beff473b-cd52-4a72-9657-b54687d99363" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FG7lIvYAGwNMcV4NRQUKI%2FHelp.MenuTree.1.4.10.png?alt=media&#x26;token=2a9db521-805c-4374-bc3b-303e97e8b990" alt=""><figcaption></figcaption></figure>
</details>

<details><summary><strong>Método 3:</strong> Prueba y experimenta según nuestras sugerencias (Experiencia personal)</summary>
<p>En la mayoría de los casos, los problemas de z-index son raros si no está utilizando demasiadas aplicaciones. El problema principal generalmente proviene de superposiciones entre su menú y otros elementos de la interfaz, como el Panel de Menú o el Panel de Carrito.</p>
<ul>
<li>Para menús adhesivos de Navi+ como Tabbar o FAB: Recomendamos mantener el z-index bajo, alrededor de 2 o 3. Estos menús ocupan espacio en la pantalla, y se sentiría roto o molesto si cubrieran paneles funcionales como el carrito.</li>
<li>Para menús de sección de Navi+ como Mega menus: Si se colocan en la parte superior (en el encabezado), puede establecer de manera segura un z-index muy alto (por ejemplo, 2000000000) para asegurarse de que el submenú desplegable no esté oculto detrás de otros componentes.</li>
<li>Para menús de cuadrícula de Navi+: el z-index no tiene efecto, ya que el menú es plano y no tiene profundidad en capas.</li>
<li>Para menús deslizantes de Navi+: el z-index debe establecerse muy alto (por ejemplo, 2000000000) para evitar ser oculto detrás de otros elementos.</li>
</ul>
</details>

**Paso 2:** Actualiza el z-index de tu menú de Navi+

<details><summary>¿Cómo actualizar el z-index del menú de Navi+?</summary>
<p>Seleccione el menú Avanzado y desplácese hacia abajo para encontrar la tarjeta de Z-index, luego actualice el z-index y no olvide hacer clic en GUARDAR para aplicar los cambios.</p>
<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fh2SfwqpjqjNzZwmbs2yL%2Fz-index%201.1.png?alt=media&#x26;token=47b5f318-d0b3-4f2a-9668-f9e3ed7dab09" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F7np7UDMk5KFGnSvMr8HK%2Fz-index%201.2.png?alt=media&#x26;token=ae4aa403-fbd6-41c9-a16d-861e8cd032bc" alt=""><figcaption></figcaption></figure>
</details>
