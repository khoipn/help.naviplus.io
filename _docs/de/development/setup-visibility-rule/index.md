---
description: "Sichtbarkeitsinformationen gelten für Menüs und Menüelemente — Anzeige oder Ausblendung basierend auf Gerät, Warenkorb, Zeitplan, Markt, Kundentags und B2B-Kunden."
lang: de
layout: default
permalink: /de/docs/development/setup-visibility-rule/
title: Visibility Rules einrichten
---
# Visibility Rules einrichten

Visibility Rules sind eine Reihe von Bedingungen, die bestimmen, ob ein **Menü** oder ein **Menüelement** für einen bestimmten Besucher angezeigt wird — basierend auf Gerät, Warenkorb, Zeitplan, Markt, Kundentags oder B2B-Kunden — Anwendung auf beide Ebenen mit genau einem Regelsatz.

---

## Wo man sie einstellt

- **Menüelement-Ebene**: **Edit item** öffnen → Gruppe **Visibility** → auf **Setup the Visibility rules** klicken. *(Die Gruppe Visibility befindet sich in einem zusammengeklappten Block — wenn Sie sie nicht sofort sehen, klicken Sie auf **See more**, um sie zu erweitern.)*
- **Menü-Ebene**: **Setting**-Panel des Menüs öffnen → Karte **Visibility Rules**.
- **Abkürzung über die Menüliste**: In der Menüliste zeigt die Spalte **Visibility Rules** für jedes Menü **No rule** oder **Setup** — klicken Sie auf **Setup**, um direkt zur Visibility-Rules-Karte dieses Menüs zu springen.
- **Abkürzung über den Menübaum**: Ein Element, das nicht immer sichtbar ist, zeigt im Baum ein Augen-Symbol neben seinem Namen — fahren Sie mit der Maus darüber, um eine Zusammenfassung der aktiven Bedingungen zu sehen, oder klicken Sie darauf, um direkt die Visibility Rules dieses Elements zu öffnen.

Von hier an sind alle Bedingungen, Syntax und wie sie sich kombinieren, **gemeinsam** für beide Ebenen — nur der Ort unterscheidet sich.

> Market / Customer tag / B2B gelten nur für **Shopify** und sind derzeit Freitextfelder (kein voreingestelltes Dropdown) — jedes Feld hat einen Link **"View your Markets"** / **"Manage customer tags"** / **"Manage B2B companies"**, der Sie direkt zur entsprechenden Shopify-Admin-Seite führt, um den genauen Wert vor der Eingabe zu überprüfen.

---

## Unterstützte Bedingungen

| Bedingung | Plan | Anzeige wenn | Eingabewert |
|---|---|---|---|
| **Device** | Business und höher | Passt zum ausgewählten Gerät | `All devices` / `Mobile only` / `Desktop only` |
| **Page / URL** | Business und höher | Richtige Seitentyp oder URL enthält/enthält kein Schlüsselwort | Seitentypen aktivieren (Home/Products/Collections/Pages/Blogs/Others) + 2 Schlüsselwortfelder |
| **Cart contents** | Business und höher | Warenkorb hat N oder mehr Produkte (oder weniger als N, bei aktivierter Umkehrung „ausblenden wenn weniger") | Ganzzahl, z.B. `1` |
| **Schedule** | Business und höher | Innerhalb des festgelegten Datums- + Uhrzeitbereichs | Start- → Enddatum/-uhrzeit, eingegeben in **UTC** (vor der Eingabe von lokaler Zeit umrechnen), verglichen mit der Geräteuhr des Besuchers |
| **Market / Country** | Elite | Besucher browsert auf dem ausgewählten Markt | Market Handle, mehrere Werte durch Komma getrennt: `us, ca` |
| **Customer tag** | Elite | Angemeldeter Besucher hat das Tag | Einzelnes Tag, z.B. `vip` |
| **B2B customer** | Elite | Angemeldeter Besucher nutzt ein B2B-Konto | Ein/aus-Schalter |

---

## Wie sich Bedingungen kombinieren

Alle aktivierten Bedingungen müssen **alle übereinstimmen**, damit das Menü/Element angezeigt wird — eine fehlgeschlagene Bedingung blendet es sofort aus. Leere Bedingungen werden übersprungen und zählen nicht.

Beispiel: Aktivierung sowohl von Device = Mobile only **und** Schedule = 01/09–15/09: zeigt nur für Besucher auf Mobiltelefonen, **und** nur während dieser exakten 2 Wochen.

<div align="center">

<svg viewBox="0 0 680 300" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="vrArrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#1a7a4f"/>
    </marker>
    <marker id="vrArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="150" y="10" width="180" height="30" rx="15" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="30" font-size="12.5" text-anchor="middle" fill="#1a1d21">Besucher kommt auf der Seite an</text>

  <line x1="240" y1="40" x2="240" y2="58" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="60" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="86" font-size="12.5" text-anchor="middle" fill="#1a1d21">Device — stimmt mit dem ausgewählten Gerät überein?</text>

  <line x1="240" y1="104" x2="240" y2="122" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="124" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="150" font-size="12.5" text-anchor="middle" fill="#1a1d21">Page/URL, Cart, Schedule — Bedingungen erfüllt?</text>

  <line x1="240" y1="168" x2="240" y2="186" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="188" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="214" font-size="12.5" text-anchor="middle" fill="#1a1d21">Market, Tag, B2B (Elite-Plan) — passt zu diesem Besucher?</text>

  <line x1="240" y1="232" x2="240" y2="250" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="150" y="252" width="180" height="34" rx="17" fill="#1a7a4f"/>
  <text x="240" y="274" font-size="13" font-weight="600" text-anchor="middle" fill="#fff">Anzeigen</text>

  <rect x="470" y="55" width="160" height="182" rx="10" fill="#fef2f2" stroke="#fecaca"/>
  <text x="550" y="140" font-size="16" font-weight="700" text-anchor="middle" fill="#b91c1c">Ausblenden</text>
  <text x="550" y="158" font-size="11" text-anchor="middle" fill="#b91c1c">sofort</text>

  <line x1="420" y1="82" x2="470" y2="82" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="76" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="146" x2="470" y2="146" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="140" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="210" x2="470" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="204" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>
</svg>

</div>

*Nur eine aktivierte Bedingung, die fehlschlägt (rechter Ast ✗), blendet das Menü/Element sofort aus — unabhängig davon, ob andere Bedingungen erfüllt sind. Leere Bedingungen (nicht aktiviert) werden übersprungen und ignoriert.*

---

## 5 praktische Beispiele

### 1. Großhandel und Einzelhandel gleichzeitig, verstecke Großhandelstags vor Einzelhandelskunden (Menü-Ebene)

Ihr Shop verkauft sowohl Großhandel als auch Einzelhandel. Großhandelskunden (mit genehmigtem Shopify B2B-Konto) kaufen zu besseren Preisen und haben ihre eigene Produkt-/Kollektion-Gruppe. Sie möchten ein Menü "Großhandelstags", "Schnelle Großhandelsbestellungen", "Großhandelstags" — nur für Großhandelskunden anzeigen, während Einzelhandelskäufer nichts davon sehen (Verwechslungen vermeiden und Rabatte verbergen).

**Wie man es macht:** Baut ein separates Menü (oder Menü-Gruppe) mit Großhandels-Links auf. Gehen Sie zu **Setting → Visibility Rules**, aktivieren Sie **B2B customer**. Ergebnis: Dieses Menü zeigt sich nur für angemeldete B2B-Kontobenutzer; Einzelhandelskunden (selbst wenn angemeldet) sehen dieses Menü nicht beim Stöbern.

### 2. Banner mit begrenzter Aktion, anzeigen nur beim Einkaufen (Element-Ebene)

Sie möchten ein Banner „Versandkosten ab 50€ kostenlos" nur während des Verkaufs anzeigen und nur für Kunden, die mindestens ein Produkt in ihren Warenkorb gelegt haben (vermeiden Sie Ablenkung neuer Besucher beim Laden).

**Wie man es macht:** Klicken Sie auf dem Banner-Element auf **Setup the Visibility rules** → aktivieren Sie **Cart contents** = `1` und **Schedule** = Verkaufsstart-/-enddaten.

### 3. Exklusives Angebot für VIP-Kunden (Element-Ebene)

Sie möchten ein Menüelement „VIP-Angebote" nur für VIP-gekennzeichnete Kunden sichtbar, während normale Kunden nicht einmal wissen, dass es existiert.

**Wie man es macht:** Markieren Sie die VIP-Kundengruppe über Shopify Flow/Customer Segment (Segment → Flow „Customer enters segment" → Tag anwenden). Klicken Sie auf dem Element auf **Setup the Visibility rules** → aktivieren Sie **Customer tag** = `vip`.

### 4. Premium Tab Bar für VIP-Kunden (Menü-Ebene)

Ihr Shop möchte, dass VIP-Kunden ein anderes Navigationserlebnis haben — dunkler Hintergrund, Glüheffekte, Premium-Gefühl — statt die Standard-Oberfläche mit allen anderen zu teilen.

**Wie man es macht:** Baut eine separate Tab Bar mit einer premium dunklen Vorlage auf, veröffentlicht sie an der gleichen Tab Bar-Position, die Ihr Shop standardmäßig nutzt. Gehen Sie zu **Setting → Visibility Rules**, aktivieren Sie **Customer tag** = `vip` (Tag über Shopify Flow/Customer Segment wie in Beispiel 3). Ergebnis: VIP-gekennzeichnete Kunden sehen die Premium-Tab Bar; normale Kunden sehen weiterhin Ihre Standard-Tab Bar. *(Mobile Menu nutzt den gleichen Ansatz.)*

### 5. FAB wirbt für Upsell direkt beim Hinzufügen zum Warenkorb (Menü-Ebene)

Kunde hat gerade sein erstes Produkt in den Warenkorb gelegt — der entscheidende Moment — und Sie möchten einen schwebenden Button (FAB) mit Aktionsinformationen popup lassen („mehr kaufen für kostenlosen Versand", kostenloses Geschenk...), um sie schneller zum Checkout zu bewegen, statt dass der FAB immer angezeigt wird und die Ansicht von Anfang an unordentlich aussieht.

**Wie man es macht:** Baut einen FAB (Floating Button) mit Aktionsinhalt auf. Gehen Sie zu **Setting → Visibility Rules**, aktivieren Sie **Cart contents** = `1` (anzeigen, wenn Warenkorb 1+ Produkte hat). Ergebnis: Der FAB bleibt verborgen, bis ein Kunde das erste Produkt in seinen Warenkorb legt. *Hinweis: Die Bedingung überprüft nur die ANZAHL der Produkte im Warenkorb, nicht den Bestellwert — „50€+ für kostenlosen Versand" ist der Marketingtext, den Sie selbst im FAB schreiben, keine Visibility Rule, die nach Preis berechnet.*

---
