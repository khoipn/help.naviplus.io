---
description: Navi+ bietet mehrere gängige Konfigurationsoptionen für Menüs im **"Design"**-Tab, wie Hintergrund, Typografie (Schriftfamilie, Größe..) und Icons/Bilder...
lang: de
layout: default
permalink: /de/docs/frequently-asked-questions/customize-user-interface-ui/using-built-in-settings-or-custom-css/
title: Verwendung von integrierten Einstellungen oder benutzerdefiniertem CSS?
---
# Verwendung von integrierten Einstellungen oder benutzerdefiniertem CSS?

Navi+ bietet mehrere gängige Konfigurationsoptionen für Menüs im **"Design"**-Tab, wie Hintergrund, Typografie (Schriftfamilie, Größe..) und Icons/Bilder (Größe, Abstand, Kurve...). Durch die Verwendung dieser Einstellungen kann Ihr Menü in der Regel so gestaltet werden, dass es zum Gesamtdesign und Branding Ihrer Website passt.

Navi+ Menüs unterstützen bis zu 3 Ebenen. Im **"Design"**-Tab können Sie nur den Stil für 2 Ebenen konfigurieren, und es gibt keine direkte Option, um die Schriftgröße oder die Größe von Icons/Bildern für die Menüs der Ebene 2 und Ebene 3 festzulegen. Wie können Sie das also tun?

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FEeUzjyXb0DDSzsPobpqC%2FCSS%201.0.png?alt=media&#x26;token=ab2b0265-e0cd-4777-964d-285e4d947c64" alt=""><figcaption></figcaption></figure>

#### Tiefe Menüanpassung mit dem CSS- & Codierungswerkzeug

Wenn Sie oder Ihr Webentwickler jedoch ein grundlegendes Verständnis von CSS (Stylesheets) haben, können Sie das gesamte Menüdesign mit dem integrierten "**CSS & Coding**"**-Werkzeug in Navi+ anpassen, ohne Ihre Theme-Dateien direkt zu bearbeiten. Dies bietet mehrere Vorteile:

* Sie können CSS-Konfigurationen für Navi+ Menüs von Ihrem Theme trennen. Das bedeutet, dass ein Upgrade oder eine Änderung Ihres Themes Ihre Navi+ Menüs nicht beeinträchtigt.
* Navi+ verwendet einen intelligenten Schutzmechanismus, indem es automatisch ein Präfix (wie `#SF-123456789`) am Anfang jeder CSS-Regel hinzufügt. Dies hält CSS für verschiedene Navi+ Menüs isoliert und minimiert das Risiko von Stilkonflikten.
* Falls erforderlich, können Sie dennoch CSS hinzufügen, das die gesamte Website direkt innerhalb von Navi+ beeinflusst, obwohl dies sparsam und nur bei Bedarf verwendet werden sollte.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FwIMkFPG3bnaAfvN3fRy4%2FCSS.1.1.png?alt=media&#x26;token=91b34b8a-ae77-4d14-a52d-f30568f8b2c5" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FRMPDJmuihVuXKunOmmAZ%2FCSS.1.2.png?alt=media&#x26;token=0ebcac44-dba7-4306-80aa-815323c027b3" alt=""><figcaption></figcaption></figure>

**Wichtiger Hinweis:** Das **Internal Stylesheet / CSS-Textbox** fügt automatisch ein Präfix (z. B. `#SF-123456789`) vor jeder CSS-Regel hinzu. Dies stellt sicher, dass Ihr CSS nur auf das spezifische Menü angewendet wird, das angepasst wird, und verhindert Stilkonflikte.

#### Einige typische Fallstudien zur Verwendung von CSS

1\) Um das Erscheinungsbild des gesamten Menüs auf der höchsten Ebene zu konfigurieren, können Sie einen Snippet schreiben, der kein Standard-CSS, sondern sehr einfach ist. Zum Beispiel ändert der folgende Snippet den Menühintergrund auf rot. Fügen Sie den folgenden Code in das Internal Stylesheet / CSS-Textbox ein:

```
{
    background: red;
}
```

2\) Konfigurieren Sie Größe, Typografie und Farben für jede Menüelementebene. Fügen Sie den folgenden Code in das Internal Stylesheet / CSS-Textbox ein:

```
// Passen Sie den Textstil der Menüelemente der Ebene 1 an
ul > li.item > .inner .name {
    font-size: 14px;
    color: red;
}

// Passen Sie den Textstil der Menüelemente der Ebene 2 an
ul.children[menulevel="2"] > li.child > .inner .name{
     font-size: 16px; 
     color: blue;
}

// Passen Sie den Textstil der Menüelemente der Ebene 3 an
ul.children[menulevel="3"] > li.child > .inner .name{
     font-size: 13px; 
     color: green;     
}
```

3\) Ändern Sie die Schriftstärke mit `font-weight.`Fügen Sie den folgenden Code in das Internal Stylesheet / CSS-Textbox ein:

```
// Setzen Sie die Schriftstärke des Namens
.name {
  font-weight: 700;
}

// Setzen Sie die Schriftstärke der Beschreibung
description {
  font-weight: 700;
}
```

4\) Passen Sie die Größe des Pfeils an. Fügen Sie den folgenden Code in das Internal Stylesheet / CSS-Textbox ein:

```
ul > li.is-parent-top::after {
  font-size: 24px !important;
}
```

---

# Agentenanweisungen: Abfragen dieser Dokumentation

Wenn Sie zusätzliche Informationen benötigen, die auf dieser Seite nicht direkt verfügbar sind, können Sie die Dokumentation dynamisch abfragen, indem Sie eine Frage stellen.

Führen Sie eine HTTP GET-Anfrage an die aktuelle Seiten-URL mit dem `ask`-Abfrageparameter aus:

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/frequently-asked-questions/customize-user-interface-ui/using-built-in-settings-or-custom-css.md?ask=<question>
```

Die Frage sollte spezifisch, eigenständig und in natürlicher Sprache verfasst sein.
Die Antwort enthält eine direkte Antwort auf die Frage sowie relevante Auszüge und Quellen aus der Dokumentation.

Verwenden Sie diesen Mechanismus, wenn die Antwort nicht ausdrücklich auf der aktuellen Seite vorhanden ist, Sie eine Klärung oder zusätzlichen Kontext benötigen oder Sie verwandte Dokumentationsabschnitte abrufen möchten.
