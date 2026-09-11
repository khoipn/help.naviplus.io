---
description: "Wie Navi+ Ihr Menü über zwei unabhängige Content-Delivery-Netzwerke ausliefert, damit es online bleibt, und was die Option \"Use a second CDN (BunnyCDN)\" im App-Embed bewirkt — auch wenn Besucher in manchen Regionen Cloudflare nicht erreichen."
lang: de
layout: default
permalink: /de/docs/frequently-asked-questions/second-cdn-bunnycdn/
title: "Wie Navi+ Ihr Menü online hält — die Option \"Use a second CDN (BunnyCDN)\""
---
# Wie Navi+ Ihr Menü online hält — die Option "Use a second CDN (BunnyCDN)"

Ihr Menü ist nicht in Ihrem Theme gespeichert. Bei jedem Seitenaufruf lädt der Browser einige kleine Dateien von Navi+ — die Menü-Engine, ihre Styles und Ihre Menüdaten. Woher diese Dateien kommen, entscheidet darüber, ob das Menü erscheint und wie schnell. Diese Seite erklärt, wie diese Auslieferung funktioniert, wie sie gegen Ausfälle abgesichert ist und was das Kontrollkästchen **Use a second CDN (BunnyCDN)** im Shopify-App-Embed ändert.

---

## Zwei Netzwerke, ein Menü

Navi+ liefert die Menüdateien über ein Content Delivery Network (CDN) aus: eine Gruppe von Servern rund um die Welt, die Kopien derselben Dateien vorhalten, sodass jeder Besucher von einem nahegelegenen Standort bedient wird.

Damit ein Problem in einem Netzwerk Ihr Menü niemals lahmlegen kann, werden dieselben Dateien auf **zwei unabhängigen Netzwerken** von zwei verschiedenen Anbietern vorgehalten:

| Netzwerk | Anbieter | Rolle |
|---|---|---|
| Hauptnetzwerk | Cloudflare | Bedient standardmäßig jeden Shop. |
| Zweites Netzwerk | BunnyCDN | Hält eine identische Kopie, die bei jedem Navi+-Release aktualisiert wird. Springt ein, wenn das Hauptnetzwerk nicht liefern kann. |

Jeder Anbieter betreibt seine eigene globale Infrastruktur mit eigenen Verfügbarkeitszusagen. Da sich die beiden keine Server teilen, bleibt der eine von einem Vorfall beim anderen unberührt — das Menü hängt nie davon ab, dass ein einzelnes Unternehmen erreichbar bleibt.

---

## So läuft ein Seitenaufruf standardmäßig ab

<div align="center">

<svg viewBox="0 0 720 330" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="20" y="120" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="150" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Browser des Besuchers</text>
  <text x="95" y="172" text-anchor="middle" font-size="12" fill="#4b5563">öffnet Ihren Shop</text>
  <text x="95" y="190" text-anchor="middle" font-size="12" fill="#4b5563">Navi+-Startskript läuft</text>

  <rect x="290" y="40" width="200" height="100" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="390" y="66" text-anchor="middle" font-size="14" font-weight="600" fill="#9a3412">Hauptnetzwerk</text>
  <text x="390" y="86" text-anchor="middle" font-size="12" fill="#7c2d12">Cloudflare</text>
  <text x="390" y="110" text-anchor="middle" font-size="11" fill="#7c2d12">Menü-Engine · Styles · Menüdaten</text>
  <text x="390" y="126" text-anchor="middle" font-size="11" fill="#7c2d12">vom nächstgelegenen Standort geliefert</text>

  <rect x="290" y="200" width="200" height="100" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="390" y="226" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Zweites Netzwerk</text>
  <text x="390" y="246" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN</text>
  <text x="390" y="270" text-anchor="middle" font-size="11" fill="#1e40af">identische Kopie jeder Datei</text>
  <text x="390" y="286" text-anchor="middle" font-size="11" fill="#1e40af">bei jedem Navi+-Release aktualisiert</text>

  <rect x="560" y="120" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="152" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Menü erscheint</text>
  <text x="630" y="174" text-anchor="middle" font-size="12" fill="#047857">auf der Seite</text>

  <path d="M170,150 C230,150 230,90 290,90" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="222" y="108" text-anchor="middle" font-size="11" fill="#374151">1. Dateien anfordern</text>

  <path d="M490,90 C530,90 530,150 560,150" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="522" y="108" text-anchor="middle" font-size="11" fill="#374151">2. liefern</text>

  <path d="M170,180 C230,180 230,250 290,250" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>
  <text x="222" y="230" text-anchor="middle" font-size="11" fill="#dc2626">wenn eine Datei fehlschlägt →</text>
  <text x="222" y="244" text-anchor="middle" font-size="11" fill="#dc2626">automatischer Neuversuch</text>

  <path d="M490,250 C530,250 530,180 560,180" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>

  <path d="M390,140 L390,200" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="404" y="174" font-size="10" fill="#6b7280">synchron gehalten</text>
</svg>

</div>

1. Das Navi+-App-Embed in Ihrem Theme führt ein winziges Startskript aus.
2. Das Startskript fordert vom **Hauptnetzwerk** die Menü-Engine, ihre Styles und Ihre Menüdaten an.
3. Das Menü erscheint.

Kommt eine dieser Dateien nicht vom Hauptnetzwerk an — Ausfall, Zeitüberschreitung, regionales Problem — versucht das Startskript **dieselbe Datei automatisch erneut von BunnyCDN**. Das geschieht von selbst im Browser des Besuchers, ohne dass Sie etwas konfigurieren müssen. In der Praxis bleibt ein schlechter Tag eines einzelnen Netzwerks für Ihre Kunden unsichtbar.

---

## Der eine Fall, den der automatische Neuversuch nicht abdecken kann

Der automatische Neuversuch steckt im Startskript. Das erzeugt einen blinden Fleck: Kommt das **Startskript selbst** nie an, läuft nichts — und es gibt nichts mehr, das erneut versucht werden könnte.

Das passiert, wenn die Verbindung eines Besuchers das Hauptnetzwerk überhaupt nicht erreicht. Cloudflare ist eines der größten Netzwerke im Internet, aber nicht von überall erreichbar:

- Einige Länder beschränken oder drosseln Cloudflare-Verkehr auf nationaler Ebene.
- Einige Firmen- oder Schulnetzwerke blockieren es im Rahmen ihrer Webfilter.
- Einige Internetanbieter routen in bestimmten Regionen schlecht zu Cloudflare, sodass Anfragen ins Leere laufen.

Für einen Shop, dessen Kunden überwiegend an einem solchen Ort sitzen, kann ein Menü, das bei Ihnen perfekt funktioniert, bei ihnen fehlen — und der automatische Neuversuch bekommt nie die Chance zu helfen.

---

## Was "Use a second CDN (BunnyCDN)" bewirkt

Wird die Option eingeschaltet, dreht sich die Priorität um, sodass das Menü überhaupt nicht mehr vom Hauptnetzwerk abhängt:

<div align="center">

<svg viewBox="0 0 720 300" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb"/>
    </marker>
  </defs>

  <rect x="20" y="105" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="135" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Browser des Besuchers</text>
  <text x="95" y="157" text-anchor="middle" font-size="12" fill="#4b5563">öffnet Ihren Shop</text>
  <text x="95" y="175" text-anchor="middle" font-size="12" fill="#4b5563">Startskript zweimal angefordert</text>

  <rect x="290" y="30" width="200" height="80" rx="10" fill="#fafafa" stroke="#d1d5db" stroke-width="1.5"/>
  <text x="390" y="56" text-anchor="middle" font-size="14" font-weight="600" fill="#6b7280">Hauptnetzwerk</text>
  <text x="390" y="76" text-anchor="middle" font-size="12" fill="#6b7280">Cloudflare</text>
  <text x="390" y="96" text-anchor="middle" font-size="11" fill="#6b7280">nur Startskript</text>

  <rect x="290" y="150" width="200" height="120" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="390" y="176" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Zweites Netzwerk</text>
  <text x="390" y="196" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN — jetzt primär</text>
  <text x="390" y="220" text-anchor="middle" font-size="11" fill="#1e40af">Startskript</text>
  <text x="390" y="236" text-anchor="middle" font-size="11" fill="#1e40af">Menü-Engine · Styles · Menüdaten</text>
  <text x="390" y="256" text-anchor="middle" font-size="11" fill="#1e40af">alles nach dem Start</text>

  <rect x="560" y="105" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="137" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Menü erscheint</text>
  <text x="630" y="159" text-anchor="middle" font-size="12" fill="#047857">auf der Seite</text>

  <path d="M170,135 C230,135 230,70 290,70" fill="none" stroke="#9ca3af" stroke-width="1.5" marker-end="url(#cdnArrow2)"/>
  <text x="222" y="90" text-anchor="middle" font-size="11" fill="#6b7280">Start (wer zuerst</text>
  <text x="222" y="104" text-anchor="middle" font-size="11" fill="#6b7280">antwortet)</text>

  <path d="M170,165 C230,165 230,210 290,210" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>

  <path d="M490,210 C530,210 530,150 560,150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>
  <text x="522" y="192" text-anchor="middle" font-size="11" fill="#2563eb">liefern</text>
</svg>

</div>

- Das **Startskript wird von beiden Netzwerken angefordert**, sodass das Menü startet, solange eines der beiden vom Standort des Besuchers aus erreichbar ist.
- **Alles danach** — die Menü-Engine, ihre Styles und Ihre Menüdaten — wird von **BunnyCDN** statt von Cloudflare geladen.

Das Hauptnetzwerk bleibt nur als zweite Chance für das Startskript im Spiel; BunnyCDN wird zur primären Quelle für das Menü selbst.

---

## Wann sollten Sie es einschalten?

Lassen Sie es **aus**, es sei denn, einer dieser Fälle trifft zu:

- **Der Navi+-Support hat Sie darum gebeten.** Wenn Sie melden, dass das Menü bei einigen Besuchern fehlt, prüfen wir, wo diese Besucher sind und welches Netzwerk sie erreichen. Liegt das Problem beim Hauptnetzwerk, bitten wir Sie, diese Option zu aktivieren.
- **Sie wissen, dass Ihre Kunden in einer Region sind, in der Cloudflare eingeschränkt oder unzuverlässig ist.** Wenn Ihr Shop hauptsächlich eine solche Region bedient, ist BunnyCDN für Sie die sicherere primäre Wahl. Setzen Sie das Häkchen und sagen Sie uns Bescheid — wir bestätigen gern, dass die Änderung von unserer Seite aus richtig aussieht.

Ein typisches Anzeichen: Das Menü erscheint bei Ihnen und den meisten Besuchern, aber Kunden in einem bestimmten Land oder in einem bestimmten Netzwerk melden, dass es nie auftaucht.

---

## Warum es standardmäßig aus ist

Beide Netzwerke sind global und schnell. Für die allermeisten Shops bringt ein Wechsel nichts, und der Standardpfad ist derjenige, den wir am genauesten überwachen und auf dem wir Korrekturen zuerst ausrollen. Die Option ist ein Werkzeug für die seltenen Fälle oben, keine Performance-Einstellung.

---

## Beeinflusst es die Seitengeschwindigkeit?

Es ist keine spürbare Änderung zu erwarten. BunnyCDN liefert dieselben Dateien von seinen eigenen weltweiten Standorten. Das Startskript von zwei Netzwerken anzufordern, fügt eine kleine zusätzliche Anfrage hinzu; die Menü-Engine und Ihre Menüdaten werden weiterhin nur einmal aus einer einzigen Quelle geladen.

---

## So schalten Sie es ein oder aus

1. Öffnen Sie in Ihrem Shopify-Admin **Onlineshop → Themes → Anpassen**.
2. Klicken Sie in der linken Seitenleiste auf das Symbol **App-Embeds**.
3. Suchen Sie **Navi+** und klappen Sie es auf.
4. Setzen oder entfernen Sie unter **Advanced** das Häkchen bei **Use a second CDN (BunnyCDN)**.
5. Klicken Sie auf **Speichern**.

Die Änderung gilt ab dem nächsten Seitenaufruf. In der Navi+-App muss nichts konfiguriert werden.

> Wenn der Support Sie gebeten hat, es während der Untersuchung eines Problems einzuschalten, lassen Sie es eingeschaltet, bis er bestätigt, dass das Problem behoben ist — danach können Sie es wieder ausschalten.
