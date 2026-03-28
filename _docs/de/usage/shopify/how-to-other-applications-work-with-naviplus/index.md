---
description: In vielen Fällen müssen Sie mehrere Anwendungen, die auf Ihrer Website eingebettet sind, verwenden. Dies kann ein übliches Usability-Problem verursachen, da sich Schnittstellenelemente überlappen (s...
lang: de
layout: default
permalink: /de/docs/usage/shopify/how-to-other-applications-work-with-naviplus/
title: Verhindern Sie, dass Navi+ Menüs andere Apps überlappen
---
# Verhindern Sie, dass Navi+ Menüs andere Apps überlappen

### Warum wird dies ein Problem sein?

In vielen Fällen müssen Sie mehrere Anwendungen, die auf Ihrer Website eingebettet sind, verwenden. Dies kann ein übliches Usability-Problem verursachen, da sich Schnittstellenelemente überlappen (siehe das Bild unten). Ein einfaches Beispiel ist, wenn Sie häufig eine Chat-Anwendung wie [Shopify Inbox ](https://www.shopify.com/vn/inbox "Shopify Inbox ") oder WhatsApp verwenden. Typischerweise nehmen diese Chat-Apps eine prominente Position in der unteren rechten Ecke des Telefonbildschirms ein. Wenn Sie sich entscheiden, Navi+ zu verwenden, um die Navigation auf Ihrer Website erheblich zu verbessern, tritt dieses Problem auf. Hier sind einige Möglichkeiten, um dieses Problem zu lösen.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fdccbwi5aXf4XvOxYGIvU%2FFrame%201.png?alt=media&#x26;token=c953f4d5-442c-486d-9493-90490ffd309f" alt=""><figcaption></figcaption></figure>

### Lösung 1: Passen Sie die Position der schwebenden Schaltflächen an (Demo mit Shopify Inbox)

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F13ShtYFy9yreGicTmiOm%2FFrame%202.png?alt=media&#x26;token=13a96b69-4907-4ad5-88b5-b41dcc95c35d" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FmYVravYrInpp21SPJuKm%2FFrame%203.png?alt=media&#x26;token=9d4c2fa0-2806-4b19-8dce-c403fc582315" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Feuh272YZES4OjBSMok8s%2FFrame%204.png?alt=media&#x26;token=d6b6f9f8-aa4e-4539-a29c-6ae39cbcd344" alt=""><figcaption></figcaption></figure>

### Lösung 2: Richten Sie das Padding des Navi+ Menüs ein, um Überlappungen mit Anwendungen zu vermeiden.

Padding und Margin sind weit verbreitete und leistungsstarke Werkzeuge in der Technologie, insbesondere in HTML5/CSS. Durch das Festlegen des Paddings entsprechend der Position dieses Bereichs können Sie Überlappungen von Anwendungen vermeiden. Sie können auch den Abstand vom Navi+ Menü zu den Rändern einstellen, indem Sie das Margin anpassen.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fo0hlCj8BSJLa9WBqrLo8%2FFrame%205.png?alt=media&#x26;token=dfe6c2d9-ea6c-4b97-bd55-8ec33ef7d729" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fkj87WVMtDYGKHxPBAK91%2FFrame%206.png?alt=media&#x26;token=ced78c24-1797-422a-9662-45094a5cee12" alt=""><figcaption></figcaption></figure>

### Lösung 3: Ersetzen Sie untere Leisten durch obere Leisten/Unterstützungsleisten oder schwebende Aktionsschaltflächen

Obwohl die untere Leiste das effektivste Werkzeug ist, um Benutzer zu führen, das von fast allen mobilen nativen Apps oder mobilen Web (langsamer) verwendet wird, möchten Sie manchmal Ihr Navi+ Menü an einer anderen Position platzieren, z. B. oben (obere Leiste), rechts/links (Unterstützungsleiste), schwebend über der Schnittstelle (schwebende Aktionsschaltfläche). Oder Sie können sie kombinieren, um die beste Navigationseffizienz zu erzielen. Überprüfen Sie die folgenden Optionen von Navi+, um zu verstehen, wie Sie es tun können; manchmal dauert es nur 1 Sekunde, und Sie lösen Ihr Problem.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FiCuFsYdJSucFduHw9zJO%2FFrame%207.png?alt=media&#x26;token=1be98c44-27c3-489d-9e6d-87e1a95fafb7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FbE4JHbm6ZYI6C3uF0X9j%2FFrame%208.png?alt=media&#x26;token=5c85d3bd-5023-4851-82aa-9288f9294d1c" alt=""><figcaption></figcaption></figure>

### Z-Index - Priorisierung der Anzeige-Reihenfolge von "schwebenden Anwendungen"

Die Z-Index-Eigenschaft gibt die Stapelreihenfolge eines Elements an. Ein Element mit einer höheren Stapelreihenfolge befindet sich immer vor einem Element mit einer niedrigeren Stapelreihenfolge. Siehe das Bild unten, um mehr zu verstehen.&#x20;

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FyMHcqutHWOUtEEYqMDn6%2Fz-index1.png?alt=media&#x26;token=fb6a0100-e337-4115-9212-a8c8d32888ef" alt=""><figcaption></figcaption></figure>

Der Standard-Z-Index für das Navi+ Menü ist auf 50 für alle eingestellt, da wir 'uns nicht wichtiger als andere Apps betrachten', aber 50 ist auch die Zahl, die ausreicht, um gut auf allen Shopify-Themen angezeigt zu werden. Manchmal müssen Sie den Z-Index Ihres Navi+ Menüs in den folgenden Fällen anpassen:&#x20;

1. Wenn Sie mehrere Navi+ Menüs auf einer Seite verwenden und möchten, dass sie sich überlappen, aber ein Menü über den anderen erscheint.&#x20;
2. Wenn andere Objekte/Apps Ihr Navi+ Menü überlappen, in diesem Fall wird der Z-Index alles lösen.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fg93TvrzCEEKdFZvdmdbh%2Fz-index2.png?alt=media&#x26;token=1289e3a7-6ea1-44ec-a284-8964ac4b6f35" alt=""><figcaption></figcaption></figure>

Es gibt eine herausfordernde Frage: Welchen Z-Index sollten Sie für Ihr Navi+ Menü festlegen, um Überlappungen wie gewünscht zu vermeiden? Wenn Sie mehrere Navi+ Menüs haben, können Sie sie nach Ihren Vorlieben anordnen, ohne sich Sorgen machen zu müssen – deshalb bauen wir Navi+ so vielseitig wie möglich für aktuelle 'schwebende Anwendungen' auf Shopify.&#x20;

Wenn Sie den Z-Index für Ihr Navi+ Menü einrichten müssen, um Konflikte mit anderen Apps zu lösen, können Sie Ihren Z-Index von einem Minimum von 0 bis zu einem Maximum von 2.147.483.647 suchen. Dies mag etwas schwierig erscheinen, aber es ist der einfachste und beste Weg, da der Z-Index Ihre Schnittstellendarstellung nicht beeinflusst, abgesehen von dem Problem, mit dem Sie konfrontiert sind. Wenn Sie Erfahrung mit CSS und HTML-Debugging haben – ist das einfach, schalten Sie einfach den Inspektionsmodus ein, um zu sehen, welchen Z-Index die konfliktierende App hat. Oder, der einfachste Weg, klicken Sie einfach auf das Crisp-Chat-Symbol, um mit einem Navi+-Berater zu chatten; wir helfen Ihnen gerne bei diesem Problem.
