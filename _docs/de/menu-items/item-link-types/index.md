---
description: Alle von Navi+ unterstützten Linktypen – interne Seiten, externe URLs, Anker, Panels öffnen, Telefon/E-Mail, Chat-Apps, Teilen und JavaScript.
lang: de
layout: default
permalink: /de/docs/menu-items/item-link-types/
title: Linktypen
---
# Linktypen

Das **Link zu**-Feld in den Basisinformationen steuert, was passiert, wenn ein Besucher ein Element antippt oder anklickt. Navi+ unterstützt viele Linktypen über eine einfache URL hinaus.

Wenn Sie auf das Link zu-Feld klicken, öffnet sich automatisch ein Hilfepopup mit vollständigen Beispielen. Sie können auch direkt in das Feld eingeben.

---

## 1. Interne Store-Seiten

Verwenden Sie kurze Pfade (keine Domain), um auf Seiten innerhalb Ihres Shopify-Stores zu verlinken.

| Ziel | Eingeben |
|---|---|
| Startseite | *(leer lassen)* |
| Alle Produkte | `collections/all` |
| Eine Kollektion | `collections/collection-handle` |
| Eine Produktseite | `products/product-handle` |
| Eine statische Seite (Über, FAQ…) | `pages/page-handle` |
| Blog-Listing | `blogs/news` |
| Ein Blogbeitrag | `blogs/news/post-handle` |
| Warenkorb | `cart` |
| Suche | `search` |
| Kontakt | `pages/contact` |

**Auto Clean-Tipp:** Fügen Sie eine vollständige URL ein (z. B. `https://mystore.com/collections/sale`) → aktivieren Sie den **Auto clean**-Schalter → das System entfernt die Domain und behält nur `collections/sale`.

---

## 2. Vollständige URL (Externer Link)

Verlinken Sie auf jede Website mit einer vollständigen URL.

```
https://brand.com/campaign
https://instagram.com/yourpage
```

---

## 3. In neuem Tab öffnen

Fügen Sie `@new` zu jedem Link hinzu, um ihn in einem neuen Tab zu öffnen.

```
collections/all@new
https://brand.com/campaign@new
```

---

## 4. Keine Navigation (Elternelement)

Verwenden Sie `#`, wenn ein Element ein Elternteil ist, das untergeordnete Elemente enthält – das Antippen erweitert die Kinder, ohne irgendwohin zu navigieren.

```
#
```

---

## 5. Scrollen (Anker)

| Aktion | Syntax |
|---|---|
| Nach oben scrollen | `scroll:Top` |
| Nach oben scrollen mit 100px Versatz | `scroll:Top(100)` |
| Nach unten scrollen | `scroll:Bottom` |
| Zu einem Abschnitt nach CSS-Selektor scrollen | `scroll:OnPage(#section-id)` *(Business / Elite)* |

**Beispiel:** Ein "Zurück nach oben"-Button → Link zu ist `scroll:Top`.

---

## 6. Panel / Popup öffnen *(Business / Elite)*

Öffnen Sie UI-Komponenten des Themas, ohne die Seite zu verlassen.

| Aktion | Syntax |
|---|---|
| Öffnen Sie ein Navi+ Slide menu | `open:NaviMenu(SF-XXXXXXXXXX)` |
| Klicken Sie auf ein CSS-Element | `open:clickTo(#cart-button)` |
| Fokussieren Sie ein Eingabefeld | `open:focusTo(.search-input)` |
| Öffnen Sie die Theme-Suche / Warenkorb-Schublade | Verwenden Sie das Hilfepopup → *Panels öffnen* |
| Öffnen Sie den Shopify Inbox-Chat | Verwenden Sie das Hilfepopup → *Andere Anwendungen öffnen* |

`open:clickTo` und `open:focusTo` akzeptieren `Down` oder `Up`, um vor dem Handeln zu scrollen:  
`open:clickTo(.footer-element, Down)`

---

## 7. Telefon, SMS, E-Mail

| Aktion | Syntax |
|---|---|
| Telefonanruf | `tel:+12125550100` |
| SMS | `sms:+12125550100?body=Hello` |
| E-Mail | `mailto:hello@yourdomain.com` |

---

## 8. Chat-Apps

| App | Syntax |
|---|---|
| WhatsApp | `https://wa.me/12125550100` *(kein + Präfix)* |
| Messenger | `https://m.me/YourPageName` |
| Zalo | `https://zalo.me/+0123456789` |
| Line | `https://lin.ee/your-line-code` |

---

## 9. Teilen

| Aktion | Syntax |
|---|---|
| Aktuelle Seite teilen (natives Dialogfeld zum Teilen) | `open:ShareMe` |
| URL in die Zwischenablage kopieren | `share:CopyUrl` |
| Auf Facebook teilen | `share:Facebook` |
| Auf Twitter / X teilen | `share:Tweet` |

---

## 10. JavaScript aufrufen

Rufen Sie jede auf der Seite definierte JavaScript-Funktion auf.

```
javascript:openCustomModal
javascript:toggleDarkMode
```

---

## 11. Sprache wechseln

```
open:ChangeLanguage(fr)    ← auf Französisch wechseln
open:ChangeLanguage(vi)    ← auf Vietnamesisch wechseln
open:ChangeLanguage()      ← auf Standardsprache zurücksetzen
```
