---
description: Konfigurieren Sie den Standardstil für alle Trennlinien in Ihrem Navi+ Menü — Farbe, Dicke, Typ und Breite.
lang: de
layout: default
permalink: /de/docs/design/design-divider/
title: Design-Trenner — Trennlinien
---
# Design-Trenner — Trennlinien

Einstellungen unter **Design → Trenner** definieren das Standardaussehen für alle Trenner im Menü.

Dies ist ein **menüübergreifender** Stil — einzelne Elemente können ihren eigenen Trenner aktivieren/deaktivieren und den Stil über Element bearbeiten → Basisinfo → Trenner hinzufügen überschreiben.

---

## Felder

| Feld | Beschreibung | Standard |
|---|---|---|
| **Trennfarbe** | Linienfarbe (hex) | `#EEEEEE` |
| **Trenngröße (px)** | Linienstärke | 1px |
| **Trennertyp** | Linienstil: Durchgezogen / Gepunktet / Gestrichelt / Doppel | Durchgezogen |
| **Trennbreite** | Linienausdehnung: Voll / Eingezogen / Unter Text | Voll |

> **Trennertyp** und **Trennbreite** erfordern den Business- oder Elite-Plan.

---

## So funktioniert es

1. Die hier festgelegten Einstellungen sind die **Standard**-Einstellungen, die angewendet werden, wenn ein Element **Trennlinie hinzufügen** aktiviert hat.
2. Wenn ein Element seinen eigenen Trennerstil hat (in Element bearbeiten), **überschreibt** dieser Stil, was hier festgelegt ist.
3. Ebene 2-3 erbt `Trennfarbe` aus diesem Abschnitt, wenn das Feld `submenuDividerColor` leer ist.

---

## Optionen für die Trennbreite

| Wert | Anzeige |
|---|---|
| **Voll** | Linie erstreckt sich über die gesamte Breite des Elements |
| **Eingezogen** | Linie ist auf beiden Seiten eingerückt |
| **Unter Text** | Linie erscheint nur unter dem Textteil des Elements |
