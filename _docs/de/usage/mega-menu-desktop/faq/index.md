---
description: Zwei Einstellungen halten Ihr Desktop Mega Menu davon ab, sich auf eine zweite Zeile umzubrechen oder zu früh auf Mobilgeräte zu wechseln, und eine zeigt es auf Mobilgeräten als Slide-Menü an.
lang: de
layout: default
permalink: /de/docs/usage/mega-menu-desktop/faq/
title: FAQ
---
# FAQ

#### Frage 1: Wie kann ich verhindern, dass mein Desktop Mega Menu auf eine zweite Zeile umgebrochen wird?

Es gibt zwei Situationen, die das Layout einer Desktop Mega Menu-Leiste beeinträchtigen können: zu viele Elemente auf der obersten Ebene oder die Website wird in einem Fenster angezeigt, das schmäler als ein Standard-Desktop ist. Zwei Einstellungen unter `Setting → Layout → Desktop` beheben dies – kein Code erforderlich.

<div align="center">

<svg viewBox="0 0 680 340" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="24" font-size="14" font-weight="600" fill="#1a1d21">Before — too many items wrap to a second line</text>
  <rect x="20" y="36" width="640" height="110" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="69" y="68" text-anchor="middle">Home</text>
    <rect x="112" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="147" y="68" text-anchor="middle">Shop</text>
    <rect x="190" y="50" width="110" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="245" y="68" text-anchor="middle">Categories</text>
    <rect x="308" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="343" y="68" text-anchor="middle">Sale</text>
    <rect x="386" y="50" width="70" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="421" y="68" text-anchor="middle">Blog</text>
    <rect x="464" y="50" width="82" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="505" y="68" text-anchor="middle">About</text>
    <rect x="554" y="50" width="42" height="28" rx="14" fill="#fff" stroke="#e6e8eb" stroke-dasharray="3 2"/>
  </g>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="92" width="42" height="28" rx="14" fill="#fff" stroke="#e6e8eb" stroke-dasharray="3 2"/>
    <rect x="84" y="92" width="94" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="131" y="110" text-anchor="middle">Contact</text>
    <rect x="186" y="92" width="94" height="28" rx="14" fill="#fff" stroke="#e6e8eb"/><text x="233" y="110" text-anchor="middle">Support</text>
  </g>
  <text x="600" y="140" font-size="20" text-anchor="middle" fill="#dc2626">⚠</text>
  <text x="20" y="170" font-size="12" fill="#4b5563">The second row pushes page content down, and the header height changes unpredictably across screen sizes.</text>

  <text x="20" y="204" font-size="14" font-weight="600" fill="#1a1d21">After — "Menu overflow navigation" keeps it on one row</text>
  <rect x="20" y="216" width="640" height="50" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <g font-size="13" fill="#1a1d21">
    <rect x="34" y="228" width="70" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="69" y="245" text-anchor="middle">Home</text>
    <rect x="112" y="228" width="70" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="147" y="245" text-anchor="middle">Shop</text>
    <rect x="190" y="228" width="106" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="243" y="245" text-anchor="middle">Categories</text>
    <rect x="304" y="228" width="66" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="337" y="245" text-anchor="middle">Sale</text>
    <rect x="378" y="228" width="66" height="26" rx="13" fill="#fff" stroke="#e6e8eb"/><text x="411" y="245" text-anchor="middle">Blog</text>
  </g>
  <rect x="600" y="228" width="40" height="26" rx="13" fill="#1a7a4f"/>
  <text x="620" y="246" font-size="14" text-anchor="middle" fill="#fff">›</text>
  <path d="M615 216 L625 216 L620 208 Z" fill="#fff" stroke="#e6e8eb"/>
  <rect x="520" y="150" width="140" height="66" rx="6" fill="#fff" stroke="#e6e8eb"/>
  <text x="590" y="170" font-size="12" text-anchor="middle" fill="#1a1d21">About</text>
  <text x="590" y="188" font-size="12" text-anchor="middle" fill="#1a1d21">Contact</text>
  <text x="590" y="206" font-size="12" text-anchor="middle" fill="#1a1d21">Support</text>
  <text x="20" y="298" font-size="12" fill="#4b5563">Items that don't fit (About, Contact, Support...) live behind the arrow button — click to reveal them, without wrapping.</text>
</svg>

</div>

##### Menü-Overflow-Navigation

Schalten Sie `Show navigation arrows when menu overflows` ein. Die Leiste auf oberster Ebene bleibt immer in einer Reihe; Elemente, die nicht passen, sind stattdessen hinter einer `›`-Pfeilschaltfläche versteckt, anstatt umzubrechen. Zwei Farbfelder, `Button background color` und `Arrow icon color`, ermöglichen es Ihnen, die Schaltfläche zu gestalten.

##### Mobiler Umschaltpunkt

Standardmäßig schaltet jeder Bildschirm, der schmäler als 768px ist, das gesamte Menü in den Mobilmodus, auch wenn noch genug Platz für ein Desktop-Layout vorhanden ist – häufig auf Tablets oder in vergrößerten Browserfenstern. Senken Sie das Feld `Breakpoint (px)` auf eine schmalere Breite, um die Desktop-Leiste sichtbar zu halten.

<div align="center">

<svg viewBox="0 0 640 210" width="100%" style="max-width:600px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="10" width="600" height="190" rx="10" fill="#fff" stroke="#e6e8eb"/>
  <text x="40" y="34" font-size="12" font-style="italic" fill="#4b5563">Setting → Layout → Desktop</text>
  <line x1="40" y1="44" x2="580" y2="44" stroke="#e6e8eb"/>
  <rect x="40" y="62" width="24" height="24" rx="6" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="52" y="79" font-size="13" text-anchor="middle" fill="#1a7a4f">↔</text>
  <text x="76" y="72" font-size="13" font-weight="600" fill="#1a1d21">Mobile switch breakpoint</text>
  <text x="76" y="90" font-size="11" fill="#6b7280">Screen width below which the menu switches to mobile</text>
  <rect x="480" y="60" width="80" height="26" rx="5" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="520" y="78" font-size="12" text-anchor="middle" fill="#1a1d21">768 px</text>
  <line x1="40" y1="114" x2="580" y2="114" stroke="#f0f2f4"/>
  <rect x="40" y="132" width="24" height="24" rx="6" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="52" y="149" font-size="13" text-anchor="middle" fill="#1a7a4f">›</text>
  <text x="76" y="142" font-size="13" font-weight="600" fill="#1a1d21">Menu overflow navigation</text>
  <text x="76" y="160" font-size="11" fill="#6b7280">Show navigation arrows when the menu overflows</text>
  <rect x="520" y="130" width="40" height="22" rx="11" fill="#1a7a4f"/>
  <circle cx="550" cy="141" r="9" fill="#fff"/>
  <text x="40" y="188" font-size="11" fill="#6b7280">Both cards only appear for a Desktop Mega Menu — not Tabbar, FAB, Slide, or Mobile Mega Menu.</text>
</svg>

</div>

<div align="center">

<svg viewBox="0 0 680 260" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="22" font-size="14" font-weight="600" fill="#1a1d21">Default — fixed at 768px</text>
  <rect x="40" y="34" width="384" height="34" fill="#e6e8eb"/>
  <text x="232" y="56" font-size="12" text-anchor="middle" fill="#4b5563">Mobile / Hamburger</text>
  <rect x="424" y="34" width="216" height="34" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="532" y="56" font-size="12" text-anchor="middle" fill="#0f5c3a">Desktop Mega Menu</text>
  <line x1="424" y1="26" x2="424" y2="76" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="424" y="90" font-size="11" text-anchor="middle" fill="#1a1d21">768px</text>

  <text x="20" y="140" font-size="14" font-weight="600" fill="#1a1d21">After setting Breakpoint = 600 (+ overflow navigation enabled)</text>
  <rect x="40" y="152" width="300" height="34" fill="#e6e8eb"/>
  <text x="190" y="174" font-size="12" text-anchor="middle" fill="#4b5563">Mobile / Hamburger</text>
  <rect x="340" y="152" width="84" height="34" fill="#e6f4ed" stroke="#1a7a4f" stroke-dasharray="4 2"/>
  <text x="382" y="169" font-size="10.5" text-anchor="middle" fill="#0f5c3a">Desktop</text>
  <text x="382" y="181" font-size="10.5" text-anchor="middle" fill="#0f5c3a">(new range)</text>
  <rect x="424" y="152" width="216" height="34" fill="#e6f4ed" stroke="#1a7a4f"/>
  <text x="532" y="174" font-size="12" text-anchor="middle" fill="#0f5c3a">Desktop Mega Menu</text>
  <line x1="340" y1="144" x2="340" y2="194" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="340" y="208" font-size="11" text-anchor="middle" fill="#1a1d21">600px</text>
  <line x1="424" y1="144" x2="424" y2="194" stroke="#1a1d21" stroke-dasharray="3 2"/>
  <text x="424" y="208" font-size="11" text-anchor="middle" fill="#1a1d21">768px</text>
  <text x="20" y="238" font-size="12" fill="#4b5563">The 600–768px range used to be hidden as mobile — it now keeps the desktop layout.</text>
</svg>

</div>

> Der neue Bereich, den dies öffnet (zwischen Ihrem Breakpoint und 768px), ist schmäler als ein Standard-Desktop – schalten Sie auch die Menü-Overflow-Navigation ein, damit Elemente auf der obersten Ebene in diesem Bereich nicht umgebrochen werden.

Beispiel: breakpoint = `600` mit eingeschalteter Menü-Overflow-Navigation:

| Bildschirmbreite | Verhalten |
|---|---|
| Unter 600px | Mobil-/Hamburger-Menü |
| 600px – 768px | Desktop Mega Menu, Pfeilschaltfläche hält Elemente in einer Reihe |
| Über 768px | Desktop Mega Menu, Standardverhalten |

Diese beiden Einstellungen sind unabhängig und beeinflussen nur das Desktop Mega Menu – nicht Tabbar, FAB, Slide-Menü oder Mobile Mega Menu.

***

#### Frage 2: Wie kann ich mein Desktop Mega Menu auf Mobilgeräten als Slide-Menü anzeigen?

Manchmal möchten Sie den klassischen responsive Ansatz: Erstellen Sie ein Desktop Mega Menu und lassen Sie es auf Mobilgeräten automatisch in ein Slide-(Hamburger-)Menü einklappen, anstatt ein separates Mobilmenü von Grund auf zu erstellen.

<div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1.25rem 0;">
<div style="flex:1 1 260px;border-left:3px solid #1a7a4f;background:#e6f4ed;padding:0.85rem 1.1rem;border-radius:0 8px 8px 0;">
<span style="color:#0f5c3a;font-weight:600;">Stärke</span><br>
<span style="color:#374151;">Sie verwalten nur ein Menü – die Desktop-Version. Die mobile Kopie folgt automatisch, ohne zweiten Baum, um synchron zu bleiben.</span>
</div>
<div style="flex:1 1 260px;border-left:3px solid #dc2626;background:#fef2f2;padding:0.85rem 1.1rem;border-radius:0 8px 8px 0;">
<span style="color:#b91c1c;font-weight:600;">Schwäche</span><br>
<span style="color:#374151;">Mobile-First ist die Art, wie Navigation heute gestaltet werden sollte – Telefone bringen die meisten Besuche und oft die meisten Einnahmen. Ein von einer breiten Desktop-Leiste zusammengepresstes Menü ist wirklich Desktop-First: zu viele Taps pro Link, Dropdown-Gruppen, die als gestapelte Liste schwer zu lesen sind, kein Platz für nur mobile Verknüpfungen.</span>
</div>
</div>

Für die Hauptnavigation eines Shops ist ein von Anfang an für Mobilgeräte gestaltetes Menü – ein dediziertes Slide-, Grid- oder TabBar-Menü – normalerweise die zusätzliche Wartung wert.

> Mittelweg: Spiegeln Sie das Desktop Mega Menu mit `Smart responsive` (Schritte unten) in ein Slide-Menü, und fügen Sie ein TabBar-Element hinzu, das es direkt öffnet. Legen Sie das Feld `Link To` des Elements auf `open:NaviMenu(SF-xxxxxxxxxx)` fest (Business / Elite) – mit der Embed-ID des Slide-Menüs – damit mobile Besucher einen echten Einstiegspunkt in der unteren Leiste bekommen, anstatt eines versteckten Hamburger-Symbols.

##### Richten Sie Smart responsive ein

Öffnen Sie Ihr Desktop Mega Menu → `Setting → Mobile` → Karte `Smart responsive`. Es bettet einen Live-Verweis dieses Menüs in ein Slide-Menü ein – Sie bearbeiten den Inhalt hier nur noch, und die mobile Version wird automatisch aktualisiert.

<div align="center">

<svg viewBox="0 0 640 300" width="100%" style="max-width:600px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="20" font-size="13" font-weight="600" fill="#1a1d21">Desktop Mega Menu — 3 columns</text>
  <rect x="20" y="30" width="270" height="230" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="35" y="50" font-size="11" font-weight="600" fill="#1a1d21">Collections</text>
  <line x1="20" y1="58" x2="290" y2="58" stroke="#e6e8eb"/>
  <line x1="110" y1="66" x2="110" y2="252" stroke="#e6e8eb"/>
  <line x1="200" y1="66" x2="200" y2="252" stroke="#e6e8eb"/>
  <text x="35" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Women</text>
  <text x="35" y="94" font-size="10.5" fill="#1a1d21">Dresses</text>
  <text x="35" y="112" font-size="10.5" fill="#1a1d21">Tops</text>
  <text x="125" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Men</text>
  <text x="125" y="94" font-size="10.5" fill="#1a1d21">New in</text>
  <text x="125" y="112" font-size="10.5" fill="#1a1d21">Sale</text>
  <text x="215" y="76" font-size="10.5" font-weight="600" fill="#4b5563">Info</text>
  <text x="215" y="94" font-size="10.5" fill="#1a1d21">Size guide</text>
  <text x="215" y="112" font-size="10.5" fill="#1a1d21">Shipping</text>

  <text x="315" y="150" font-size="22" text-anchor="middle" fill="#1a7a4f">→</text>
  <text x="315" y="172" font-size="10" text-anchor="middle" fill="#6b7280">Smart</text>
  <text x="315" y="184" font-size="10" text-anchor="middle" fill="#6b7280">responsive</text>

  <text x="360" y="20" font-size="13" font-weight="600" fill="#1a1d21">Slide menu — flattened to 1 column</text>
  <rect x="360" y="30" width="130" height="250" rx="16" fill="#1a1d21"/>
  <rect x="368" y="42" width="114" height="226" rx="4" fill="#fff"/>
  <text x="425" y="60" font-size="10.5" font-weight="600" text-anchor="middle" fill="#1a1d21">Collections</text>
  <line x1="374" y1="68" x2="476" y2="68" stroke="#e6e8eb"/>
  <text x="380" y="86" font-size="9.5" fill="#1a1d21">Dresses</text>
  <text x="380" y="102" font-size="9.5" fill="#1a1d21">Tops</text>
  <line x1="374" y1="112" x2="476" y2="112" stroke="#f0f2f4"/>
  <text x="380" y="128" font-size="9.5" fill="#1a1d21">New in</text>
  <text x="380" y="144" font-size="9.5" fill="#1a1d21">Sale</text>
  <line x1="374" y1="154" x2="476" y2="154" stroke="#f0f2f4"/>
  <text x="380" y="170" font-size="9.5" fill="#1a1d21">Size guide</text>
  <text x="380" y="186" font-size="9.5" fill="#1a1d21">Shipping</text>
  <text x="425" y="250" font-size="8.5" text-anchor="middle" fill="#6b7280">one tap reaches every link</text>
</svg>

</div>

1. Klicken Sie auf `Copy embed item`, um diese Menüelementvorlage zu kopieren.
2. Fügen Sie es auf `level 1` eines vorhandenen Slide-Menüs ein – oder erstellen Sie zuerst eines, wenn Sie noch keines haben.

Layouts mit mehreren Spalten werden automatisch vereinfacht: Spalten werden zu einer vertikalen Liste, Spaltentitel werden gelöscht, und eine Trennlinie wird eingefügt, wo es früher separate Spalten gab – damit Besucher jeden Link in einem Tap anstelle von zwei erreichen.

Nach der Einbettung zeigt die Karte `This menu already shows on mobile` mit direktem Link zum Slide-Menü an, damit Sie es jederzeit überprüfen können.

##### Verfeinern Sie die mobile Kopie

- **Desktop-Elemente ausblenden.** Öffnen Sie das Element auf dem Desktop Mega Menu → `Visibility` → schalten Sie `Exclude when embedded` ein. Es bleibt auf dem Desktop und verschwindet nur aus der mobilen Kopie.
- **Nur mobile Elemente hinzufügen.** Das Slide-Menü ist nicht auf das beschränkt, was die Referenz einbringt – fügen Sie normale Elemente der Ebene 1 direkt neben dem eingebetteten ein für Dinge, die die Desktop-Leiste nicht benötigt: eine Anruf-/WhatsApp-Schaltfläche, Öffnungszeiten, ein Sprachschalter oder Links, die normalerweise in der Theme-Kopf- oder Fußzeile angezeigt werden. Diese befinden sich direkt im Slide-Menü und berühren die Desktop-Version überhaupt nicht.
