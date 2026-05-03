---
description: Alle von Navi+ unterstützten Link-Typen — interne Seiten, externe URLs, Anker, Panels öffnen, Telefon/E-Mail, Chat-Apps, Teilen und JavaScript.
layout: default
permalink: /de/docs/menu-items/item-link-types/
title: Link-Typen
---
# Link-Typen

Das Feld **Verknüpfung zu** in den Grundinformationen steuert, was passiert, wenn ein Besucher auf ein Element tippt oder klickt. Navi+ unterstützt viele Link-Typen über eine einfache URL hinaus.

Wenn Sie auf das Feld „Verknüpfung zu" klicken, öffnet sich automatisch ein Hilfe-Popup mit vollständigen Beispielen. Sie können auch direkt in das Feld tippen.

---

## 1. Interne Shop-Seiten

Verwenden Sie kurze Pfade (ohne Domain) für Seiten in Ihrem Shopify-Shop.

| Ziel | Eingabe |
|---|---|
| Startseite | *(leer lassen)* |
| Alle Produkte | `collections/all` |
| Eine Kollektion | `collections/collection-handle` |
| Eine Produktseite | `products/product-handle` |
| Eine statische Seite (Über uns, FAQ…) | `pages/page-handle` |
| Blog-Liste | `blogs/news` |
| Ein Blog-Beitrag | `blogs/news/post-handle` |
| Warenkorb | `cart` |
| Suche | `search` |
| Kontakt | `pages/contact` |

**Auto Clean Tipp:** Fügen Sie eine vollständige URL ein (z.B. `https://meinshop.com/collections/sale`) → aktivieren Sie den **Auto Clean**-Schalter → das System entfernt die Domain und behält nur `collections/sale`.

---

## 2. Vollständige URL (Externer Link)

Link zu einer beliebigen Website mit einer vollständigen URL.

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. In neuem Tab öffnen

Fügen Sie `@new` an einen beliebigen Link an, um ihn in einem neuen Tab zu öffnen.

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. Keine Navigation (Elternelement)

Verwenden Sie `#`, wenn ein Element ein Elternelement ist, das Kindelemente enthält — das Antippen erweitert die Kinder, ohne zu navigieren.

```
#
```

---

## 5. Scrollen (Anker)

| Aktion | Syntax |
|---|---|
| Nach oben scrollen | `scroll:Top` |
| Nach oben mit 100px Versatz | `scroll:Top(100)` |
| Nach unten scrollen | `scroll:Bottom` |
| Zu einem Abschnitt per CSS-Selektor | `scroll:OnPage(#section-id)` *(Business / Elite)* |

**Beispiel:** Ein „Nach oben"-Button → Verknüpfung zu ist `scroll:Top`.

---

## 6. Panel / Popup öffnen *(Business / Elite)*

Theme-UI-Komponenten öffnen, ohne die Seite zu verlassen.

| Aktion | Syntax |
|---|---|
| Ein Navi+ Slide-Menü öffnen | `open:NaviMenu(SF-XXXXXXXXXX)` |
| Ein CSS-Element klicken | `open:clickTo(#cart-button)` |
| Ein Eingabefeld fokussieren | `open:focusTo(.search-input)` |
| Theme-Suche / Warenkorb-Drawer öffnen | Hilfe-Popup → *Panels öffnen* |
| Shopify Inbox Chat öffnen | Hilfe-Popup → *Andere Anwendungen öffnen* |

`open:clickTo` und `open:focusTo` akzeptieren `Down` oder `Up` zum Scrollen vor der Aktion:  
`open:clickTo(.footer-element, Down)`

---

## 7. Telefon, SMS, E-Mail

| Aktion | Syntax |
|---|---|
| Telefonanruf | `tel:+4930123456` |
| SMS | `sms:+4930123456?body=Hallo` |
| E-Mail | `mailto:hallo@ihredomain.de` |

---

## 8. Chat-Apps

| App | Syntax |
|---|---|
| WhatsApp | `https://wa.me/4930123456` *(kein + Präfix)* |
| Messenger | `https://m.me/IhreSeitenName` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/ihr-line-code` |

---

## 9. Teilen

| Aktion | Syntax |
|---|---|
| Aktuelle Seite teilen (nativer Teilen-Dialog) | `open:ShareMe` |
| URL in Zwischenablage kopieren | `share:CopyUrl` |
| Auf Facebook teilen | `share:Facebook` |
| Auf Twitter / X teilen | `share:Tweet` |

---

## 10. JavaScript aufrufen

Eine auf der Seite definierte JavaScript-Funktion aufrufen.

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. Sprache wechseln

```
open:ChangeLanguage(de)    ← zu Deutsch wechseln
open:ChangeLanguage(en)    ← zu Englisch wechseln
open:ChangeLanguage()      ← auf Standardsprache zurücksetzen
```
