---
description: Navi+ ist sehr schnell. Es ist vollständig auf einem führenden CDN mit sehr niedriger Latenz (ca. 100 ms) bereitgestellt und kann Millionen von Kunden bedienen, ohne langsamer zu werden.
lang: de
layout: default
permalink: /de/docs/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-speed-and-improve-the-user-experience-ux/
title: Geschwindigkeit optimieren und das Benutzererlebnis (UX) verbessern.
---
# Geschwindigkeit optimieren und das Benutzererlebnis (UX) verbessern.

#### Warum müssen Sie das tun? Ist Navi+ nicht bereits schnell?

Navi+ ist sehr schnell. Es ist vollständig auf einem führenden CDN mit sehr niedriger Latenz (ca. 100 ms) bereitgestellt und kann Millionen von Kunden bedienen, ohne langsamer zu werden.

Allerdings läuft Navi+ immer noch innerhalb des Shopify-Ökosystems. Shopify hat seine eigenen Lade-Regeln:

1. Shopify priorisiert das Laden seiner eigenen Ressourcen zuerst.
2. Dann lädt Shopify den Inhalt des Themas.
3. Schließlich lädt Shopify den App-Inhalt, jedoch nicht in einer bestimmten Reihenfolge.

Das bedeutet, wenn Sie mehrere Apps verwenden, kann es sein, dass Navi+ manchmal später als erwartet geladen wird. Deshalb kann es in bestimmten Fällen langsamer erscheinen.

***

### Was ist meine Lösung?

Derzeit hat Navi+ eine hohe Priorität beim Laden auf Shopify-Websites. Es gibt jedoch immer noch eine gewisse Verzögerung. Wir werden diese Probleme hier nacheinander angehen:

#### Slide Menu: Fügen Sie einen Ladeeffekt hinzu und sperren Sie den Trigger-Selektor

Sehr einfach: Geben Sie einfach den CSS-Selektor ein, den Sie für das Slide Menu im Einbettungsbereich der Navi+-App verwenden (siehe Bild unten).

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FYlq4CLWLSuRLKnmYmBHj%2F1.1.png?alt=media&#x26;token=c806da22-bcf7-4bfe-b88c-b5e17d95803b" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEIocXFLDBcobQR68F7QI%2F1.2.png?alt=media&#x26;token=f7fc10da-d538-4e33-aa46-55b40223f417" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FgvnasnKF0IHLNHJUnl8n%2F1.3.png?alt=media&#x26;token=47ae5ab0-eb82-4fa7-99ae-264869a09059" alt=""><figcaption></figcaption></figure>

#### Mega Menu (Ersatzmodus): Fügen Sie einen Ladeeffekt hinzu und sperren Sie den Trigger-Selektor

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fk4HYuop9Aq2GRnk4OEWT%2F2.1.png?alt=media&#x26;token=ddeb17b5-23d7-4870-b9ac-fb95b6e250b7" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F3CWBvH8fNoj0AHJJ68so%2F2.2.png?alt=media&#x26;token=8282df62-c2c4-4fba-a087-2eb6ea4e50dd" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fqu827HEiR3F515aSXcH1%2F2.3.png?alt=media&#x26;token=0873fe1c-31a6-45a9-8700-f09dc39f9c52" alt=""><figcaption></figcaption></figure>

Hinweis:

* Fügen Sie das Suffix **(M)** hinzu, wenn Sie möchten, dass es nur auf Mobilgeräten angewendet wird.
* Fügen Sie das Suffix **(D)** hinzu, wenn Sie möchten, dass es nur auf Desktop angewendet wird.
* Lassen Sie kein Suffix, wenn Sie möchten, dass es auf beiden Plattformen angewendet wird.

---

# Agenten-Anweisungen: Abfragen dieser Dokumentation

Wenn Sie zusätzliche Informationen benötigen, die auf dieser Seite nicht direkt verfügbar sind, können Sie die Dokumentation dynamisch abfragen, indem Sie eine Frage stellen.

Führen Sie eine HTTP GET-Anfrage an die aktuelle Seiten-URL mit dem `ask` Abfrageparameter aus:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/optimize-speeds-images-and-ux/optimize-speed-and-improve-the-user-experience-ux-..md?ask=<question>
```

Die Frage sollte spezifisch, eigenständig und in natürlicher Sprache verfasst sein.
Die Antwort enthält eine direkte Antwort auf die Frage sowie relevante Auszüge und Quellen aus der Dokumentation.

Verwenden Sie diesen Mechanismus, wenn die Antwort nicht ausdrücklich auf der aktuellen Seite vorhanden ist, Sie eine Klärung oder zusätzlichen Kontext benötigen oder Sie verwandte Dokumentationsabschnitte abrufen möchten.
