---
description: So verwenden Sie die Mehrsprachigkeitsunterstützung von Navi+ – Inline-Übersetzungssyntax, Sprachumschalter und vollständige Sprachcode-Referenz.
lang: de
layout: default
permalink: /de/docs/usage/shopify/use-the-multi-language-feature/
title: Mehrsprachigkeit (Shopify Markets)
---
# Mehrsprachigkeit (Shopify Markets)

Navi+ unterstützt Mehrsprachigkeit auf zwei Arten: **Inline-Übersetzungssyntax** und einen **Sprachumschalter**, der direkt in Ihr Menü integriert ist.

## 1. Inline-Übersetzungssyntax

Fügen Sie Übersetzungen direkt im Label eines Menüelements mit dieser Syntax hinzu:

```
Default-content <language-code-1: Content-1><language-code-2: Content-2>
```

**Beispiel** – eine Tab Bar, die auf Englisch, Französisch und Vietnamesisch angezeigt wird:

```
Home <fr: Maison><vi: Trang chủ>
```

Wenn das Menü gerendert wird, überprüft Navi+ die aktuelle Seiten Sprache und zeigt die passende Übersetzung an. Wenn keine Übereinstimmung gefunden wird, wird auf die Standardversion zurückgegriffen.

Diese Syntax funktioniert in den Feldern **Label**, **Beschreibung** und **Link zu**.

## 2. Sprachumschalter

Sie können einen Sprachumschalter in jedes Navi+ Menü einfügen. Verwenden Sie die `open:ChangeLanguage()` Aktion auf einem Menüelement:

```
open:ChangeLanguage(fr)
```

Wenn ein Besucher dieses Element antippt, wechselt die Seite zu Französisch. Sie können Flaggen-Icons von einer Seite wie [Flaticon](https://www.flaticon.com) hinzufügen, um den Umschalter visuell ansprechender zu gestalten.

## Sprachcode-Referenz

Navi+ unterstützt alle standardmäßigen ISO 639-1 Sprachcodes. Wenn Ihr SEO-System ein anderes Format verwendet (z. B. `en-EN` anstelle von `en`), funktioniert der zweibuchstabige Code dennoch.

| Code | Sprache |
|---|---|
| ab | Abchasisch |
| aa | Afar |
| af | Afrikaans |
| ak | Akan |
| sq | Albanisch |
| am | Amharisch |
| ar | Arabisch |
| an | Aragonisch |
| hy | Armenisch |
| as | Assamesisch |
| av | Avarisch |
| ae | Avestisch |
| ay | Aymara |
| az | Aserbaidschanisch |
| bm | Bambara |
| ba | Baschkirisch |
| eu | Baskisch |
| be | Weißrussisch |
| bn | Bengalisch |
| bh | Bihari-Sprachen |
| bi | Bislama |
| bs | Bosnisch |
| br | Bretonisch |
| bg | Bulgarisch |
| my | Burmesisch |
| ca | Katalanisch, Valencianisch |
| km | Zentral-Khmer |
| ch | Chamorro |
| ce | Tschetschenisch |
| ny | Chichewa, Chewa, Nyanja |
| zh | Chinesisch |
| cu | Kirchenslawisch, Altbulgarisch |
| cv | Tschuwasch |
| kw | Kornisch |
| co | Korsisch |
| cr | Cree |
| hr | Kroatisch |
| cs | Tschechisch |
| da | Dänisch |
| dv | Divehi, Dhivehi, Maledivisch |
| nl | Niederländisch, Flämisch |
| dz | Dzongkha |
| en | Englisch |
| eo | Esperanto |
| et | Estnisch |
| ee | Ewe |
| fo | Färöisch |
| fj | Fidschianisch |
| fi | Finnisch |
| fr | Französisch |
| ff | Fulah |
| gd | Gälisch, Schottisch-Gälisch |
| gl | Galicisch |
| lg | Ganda |
| ka | Georgisch |
| de | Deutsch |
| ki | Gikuyu, Kikuyu |
| el | Griechisch (Modern) |
| kl | Grönländisch, Kalaallisut |
| gn | Guarani |
| gu | Gujarati |
| ht | Haitianisches Kreol |
| ha | Hausa |
| he | Hebräisch |
| hz | Herero |
| hi | Hindi |
| ho | Hiri Motu |
| hu | Ungarisch |
| ia | Interlingua |
| id | Indonesisch |
| ie | Interlingue |
| ga | Irisch |
| ig | Igbo |
| ik | Inupiaq |
| io | Ido |
| is | Isländisch |
| it | Italienisch |
| iu | Inuktitut |
| ja | Japanisch |
| jv | Javanesisch |
| kn | Kannada |
| kr | Kanuri |
| ks | Kaschmirisch |
| kk | Kasachisch |
| rw | Kinyarwanda |
| kv | Komi |
| kg | Kongo |
| ko | Koreanisch |
| ku | Kurdisch |
| kj | Kuanyama, Kwanyama |
| la | Latein |
| lb | Luxemburgisch |
| li | Limburgisch |
| ln | Lingala |
| lo | Laotisch |
| lt | Litauisch |
| lu | Luba-Katanga |
| lv | Lettisch |
| gv | Manx |
| mk | Mazedonisch |
| mg | Malagassi |
| ms | Malaiisch |
| ml | Malayalam |
| mt | Maltesisch |
| mi | Maori |
| mr | Marathi |
| mh | Marshallesisch |
| mn | Mongolisch |
| na | Nauru |
| nv | Navajo, Navaho |
| nd | Nord-Ndebele |
| ne | Nepali |
| ng | Ndonga |
| nb | Norwegisch Bokmål |
| nn | Norwegisch Nynorsk |
| no | Norwegisch |
| ii | Sichuan Yi |
| nr | Süd-Ndebele |
| oc | Okzitanisch |
| oj | Ojibwa |
| om | Oromo |
| or | Oriya |
| os | Ossetisch, Ossetisch |
| pa | Punjabi |
| pi | Pali |
| fa | Persisch |
| pl | Polnisch |
| ps | Pashto, Pushto |
| pt | Portugiesisch |
| qu | Quechua |
| rm | Rätoromanisch |
| rn | Rundi |
| ro | Rumänisch |
| ru | Russisch |
| sa | Sanskrit |
| sc | Sardisch |
| sd | Sindhi |
| se | Nord-Sami |
| sm | Samoanisch |
| sg | Sango |
| sr | Serbisch |
| gd | Schottisch-Gälisch |
| sn | Shona |
| si | Singhalesisch |
| sk | Slowakisch |
| sl | Slowenisch |
| so | Somali |
| st | Süd-Sotho |
| es | Spanisch, Kastilisch |
| su | Sundanesisch |
| sw | Swahili |
| ss | Swati |
| sv | Schwedisch |
| ta | Tamil |
| te | Telugu |
| tg | Tadschikisch |
| th | Thailändisch |
| ti | Tigrinya |
| bo | Tibetisch |
| tk | Turkmenisch |
| tl | Tagalog |
| tn | Tswana |
| to | Tonga |
| tr | Türkisch |
| ts | Tsonga |
| tt | Tatar |
| tw | Twi |
| ty | Tahitianisch |
| ug | Uighur, Uyghur |
| uk | Ukrainisch |
| ur | Urdu |
| uz | Usbekisch |
| ve | Venda |
| vi | Vietnamesisch |
| vo | Volapük |
| wa | Wallonisch |
| cy | Walisisch |
| wo | Wolof |
| fy | Westfriesisch |
| xh | Xhosa |
| yi | Jiddisch |
| yo | Yoruba |
| za | Zhuang, Chuang |
| zu | Zulu |
