---
description: Nutze ChatGPT, Claude oder Gemini, um dein Navi+ Menü neu zu gestalten — Navi+ generiert den Prompt, du fügst das JSON-Ergebnis zurück ein.
lang: de
layout: default
permalink: /de/docs/ai/auto-design-your-ai/
title: Automatisches Design mit deiner KI-App
---
# Automatisches Design mit deiner KI-App

Gestalte dein Menü mit einem KI-Tool, das du bereits kennst — ChatGPT, Claude oder Gemini. Navi+ bereitet die Daten und den Prompt vor; du lässt es einfach durch die KI laufen und bringst das Ergebnis zurück. Diese Funktion ist **kostenlos**.

Öffnen: Schaltfläche **AI** → Karte **Automatisches Design mit deiner KI-App**.

---

## Bevor du beginnst — sichere dein Menü

> **⋮ Mehr → Backup / Restore** — speichere dein aktuelles Menü als Datei oder in der Cloud, bevor du Änderungen vornimmst. Überspringe diesen Schritt nicht.

---

<div class="install-step" markdown="1">
### 1 — Trainiere deine KI

Du benötigst ein webbasiertes KI-Tool. Empfohlene Modelle mit großem Kontext: **Claude Opus 4.7**, **ChatGPT GPT-5** oder **Gemini Pro 1.5**.

Klicke auf **Trainingsdokumente öffnen**, kopiere alles und füge es in deinen KI-Chat ein. So lernt die KI, wie Navi+ Menüs aufgebaut sind.
</div>

<div class="install-step" markdown="1">
### 2 — Sende dein aktuelles Menü (JSON) an die KI

Sobald die KI die Struktur aus Schritt 1 verstanden hat, sende ihr dein aktuelles Menü:

- **Aktuelles Menü in die Zwischenablage kopieren** und in den Chat einfügen, oder
- **Die JSON-Datei herunterladen** und an den Chat anhängen.
</div>

<div class="install-step" markdown="1">
### 3 — Gib Design-Anweisungen

Tippe deine Anfrage in natürlicher Sprache. Du hast volle Kontrolle über das Design. Die KI liefert ein neues Menü als JSON zurück. Zum Beispiel:

- Füge 2 Elemente hinzu: Blog und Karriere.
- Ändere die Primärfarbe zu Blau `#1a73e8`.
- Kürze auf 4 Hauptelemente, verschiebe den Rest unter ein Element „Mehr".
- Füge jedem Element ein passendes Icon hinzu und setze das Element „Aktionen" fett.
- Übersetze alle Elementnamen ins Englische.
</div>

<div class="install-step" markdown="1">
### 4 — Füge das Ergebnis ein und wende es an

Kopiere das von der KI zurückgegebene JSON und wende es auf eine von zwei Arten auf Navi+ an:

- **Option 1:** Füge das JSON in das Eingabefeld ein und klicke auf **Anwenden**.
- **Option 2:** Klicke auf **JSON-Datei hochladen** und wähle deine `.json`-Datei.

Wiederhole die Schritte 3–4, bis das Menü richtig aussieht, und klicke dann auf **Speichern**.
</div>

> Tipp: Die KI ändert nur die Struktur und den Inhalt im JSON. Felder, die du konfiguriert, aber nicht erwähnt hast, bleiben erhalten — überprüfe das Menü dennoch nach dem Anwenden.

---

## Fallstudie — eine Tab Bar mit Claude aufräumen

**Kontext:** Ein Shop hat eine unübersichtliche Tab Bar mit 8 Elementen und möchte sie auf 5 Elemente kürzen und Icons hinzufügen, während alle bestehenden Links erhalten bleiben.

1. **Backup:** ⋮ Mehr → Backup / Restore → speichere eine Kopie.
2. **Schritt 1 — Trainiere die KI:** Öffne Claude (Opus 4.7), klicke in Navi+ auf **Trainingsdokumente öffnen**, kopiere alles und füge es in Claude ein.
3. **Schritt 2 — Sende das Menü:** Klicke auf **Aktuelles Menü in die Zwischenablage kopieren** und füge das JSON in Claude ein.
4. **Schritt 3 — Anweisen:** Sage Claude:

   ```
   Führe diese 8 Elemente zu 5 Hauptelementen zusammen: Startseite, Produkte, Aktionen,
   Blog, Konto. Verschiebe die übrigen Elemente in passende Untergruppen.
   Füge jedem Element der Ebene 1 ein Icon hinzu. Lasse alle bestehenden Links unverändert.
   ```

5. **Schritt 4 — Anwenden:** Claude gibt neues JSON zurück. Kopiere es, füge es in das Feld **Anwenden** in Navi+ ein → klicke auf **Anwenden**.
6. Prüfen: 5 Elemente, vollständige Icons, ursprüngliche Links intakt. Weitere Anpassungen nötig? Wiederhole die Schritte 3–4. Zufrieden? Klicke auf **Speichern**.

**Ergebnis:** Eine aufgeräumte Tab Bar mit 5 Elementen und Icons, alle Links erhalten — ohne jedes Element von Hand zu bearbeiten.
