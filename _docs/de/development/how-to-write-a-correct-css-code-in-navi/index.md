---
description: CSS ist der Schlüssel zu jedem Problem, wenn Sie tiefgreifende Anpassungen für Navi+ benötigen. Fast alle Schnittstellensachen auf Navi+ können mit CSS-Code gelöst werden. In Navi+, ther...
lang: de
layout: default
permalink: /de/docs/development/how-to-write-a-correct-css-code-in-navi/
title: Wie man einen korrekten CSS-Code in Navi+ schreibt
---
# Wie man einen korrekten CSS-Code in Navi+ schreibt

CSS ist der Schlüssel zu jedem Problem, wenn Sie tiefgreifende Anpassungen für Navi+ benötigen. Fast alle Schnittstellensachen auf Navi+ können mit CSS-Code gelöst werden. In Navi+ gibt es 2 Ebenen von CSS:

### Ebene 1: Internes Stylesheet / CSS (#SF-123456789)

Dies ist die empfohlene Ebene, die in den meisten Fällen verwendet werden sollte. Wenn Sie Code in dieses Feld schreiben, fügt das System automatisch ein Präfix hinzu, das #SF-123456789 (das ist Ihre Menü-ID) zu Beginn der CSS-Tags. Dies stellt sicher, dass es keine Konflikte mit allen anderen Schnittstellenelementen gibt.

Sehen Sie sich das Beispiel vor und nach dem Kompilieren von CSS in diesem Feld unten an

```css
// Ihr CSS-Code
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
// Der CSS-Code nach dem Kompilieren

#SF-123456789 {
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   #SF-123456789 {
      margin-bottom: 164px;
   }
}

```

### Ebene 2: Globales Stylesheet / CSS

Es sei denn, Sie haben Erfahrung mit CSS, vermeiden Sie es, dieses Feld zu missbrauchen, da alles direkt in der Form, in der Sie CSS-Code schreiben, ohne eine Konfliktschutzschicht herausgeschoben wird.
