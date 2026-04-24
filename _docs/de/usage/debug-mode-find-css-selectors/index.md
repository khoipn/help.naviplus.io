---
description: Der Debug-Modus ist ein leichtgewichtiges Toolset, das in die Navi+ Bibliothek integriert ist und Ihnen hilft, effektiver mit Navi+ Menüs zu arbeiten.
lang: de
layout: default
permalink: /de/docs/usage/debug-mode-find-css-selectors/
title: Debug-Modus - CSS-Selektoren finden
---
# Debug-Modus - CSS-Selektoren finden

Der Debug-Modus ist ein leichtgewichtiges Toolset, das in die Navi+ Bibliothek integriert ist und Ihnen hilft, effektiver mit Navi+ Menüs zu arbeiten.

### 1. CSS-Selektoren finden

Um den Debug-Modus zu aktivieren, verwenden Sie das folgende URL-Format:
`yourdomain.com#navidebug-on`

Ihre Website wechselt in den Navi+ Debug-Modus. Bewegen Sie die Maus über verschiedene Bereiche der Website, um die entsprechenden CSS-Selektoren anzuzeigen. Bewegen Sie den Cursor, um den gewünschten Zielbereich genau zu lokalisieren.

Bitte beachten Sie die folgenden Tastenkombinationen, um effizienter zu arbeiten.

**Tastenkombination 1.** Kopieren eines CSS-Selektors

* Drücken Sie **⌘+C** auf MacOS oder **Ctrl+C** auf Windows, um den ausgewählten CSS-Selektor zu kopieren.

Sie können ihn dann in die Einstellungen des **Publish Menu** für:

* Mega Menu / Grid Menu: um das Menü vor, nach oder anstelle des Ziel-CSS-Selektors einzufügen
* Slide Menu: um das Slide Menu auszulösen, wenn der Ziel-CSS-Selektor angeklickt oder angetippt wird

**Tastenkombination 2.** Navigieren zwischen Selektor-Ebenen

* Drücken Sie 
[↑/←], oder Backspace, um zu einem übergeordneten Selektor zu wechseln
* Drücken Sie 
[↓/→], um zu einem untergeordneten Selektor zu wechseln

**Wichtige Tipps:** In den meisten Fällen werden Sie nicht sofort den perfekten CSS-Selektor finden. Basierend auf Erfahrung ist es oft einfacher:

1. Beginnen Sie mit der Auswahl eines untergeordneten Selektors
2. Bewegen Sie sich dann 1–2 Ebenen nach oben (ein visuelles Highlight erscheint auf Ihrer Website)
3. Kopieren Sie den Selektor mit ⌘+C (Ctrl+C)
4. Fügen Sie ihn in die Menükonfiguration ein und testen Sie

Manchmal müssen Sie diesen Prozess mehrmals wiederholen, wenn Sie Menüereignisse an CSS-Selektoren einfügen, ersetzen oder binden, um die gewünschte Benutzererfahrung zu erreichen.

#### 1.1. CSS-Selektor auf Desktop finden

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FlstMiQTp0fQqvJ89jXhD%2FFrame%20210.webp?alt=media&#x26;token=95d6a152-b58b-4894-9cdc-150200fae5e1" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fuc7fc7CicJcQ3XNvwDVA%2FFrame%20211.webp?alt=media&#x26;token=84a5c3ad-04bf-4b4e-9c8c-bc334f7f4646" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FuE3IlMcHedAfwQR98YhM%2FFrame%20212.webp?alt=media&#x26;token=e02c2aa2-0792-4811-8005-46a5b7b0b9fe" alt=""><figcaption></figcaption></figure>

#### 1.2. CSS-Selektor auf Mobilgeräten finden

Um einen CSS-Selektor auf Mobilgeräten zu finden, aktivieren Sie den mobilen (responsive) Modus in Ihrem Browser.
Dann klicken Sie mit der rechten Maustaste irgendwo auf der Seite und wählen Sie:

* Chrome: Untersuchen
* Safari: Element untersuchen
* Firefox: Untersuchen
* Edge: Untersuchen / Element untersuchen

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FK7F58NVYCerBTqG9EWjB%2FFrame%20213.webp?alt=media&#x26;token=2f2c059a-1346-446d-a19f-e2998050791a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FsNvXhBMniymbZ1tD9c4p%2FFrame%20214.webp?alt=media&#x26;token=257f082d-ff6b-4ce0-8eaa-6160a697a67e" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FJAZm1dPEZrfeqtpNXA8O%2FFrame%20215.webp?alt=media&#x26;token=2847a4ef-e298-4986-9367-36a6abf914d8" alt=""><figcaption></figcaption></figure>


---

# Agenten-Anweisungen: Abfragen dieser Dokumentation

Wenn Sie zusätzliche Informationen benötigen, die auf dieser Seite nicht direkt verfügbar sind, können Sie die Dokumentation dynamisch abfragen, indem Sie eine Frage stellen.

Führen Sie eine HTTP GET-Anfrage an die aktuelle Seiten-URL mit dem `ask` Abfrageparameter aus:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/usage/debug-mode-find-css-selectors.md?ask=<question>
```

Die Frage sollte spezifisch, eigenständig und in natürlicher Sprache verfasst sein.
Die Antwort enthält eine direkte Antwort auf die Frage sowie relevante Auszüge und Quellen aus der Dokumentation.

Verwenden Sie diesen Mechanismus, wenn die Antwort nicht explizit auf der aktuellen Seite vorhanden ist, Sie eine Klärung oder zusätzlichen Kontext benötigen oder Sie verwandte Dokumentationsabschnitte abrufen möchten.
