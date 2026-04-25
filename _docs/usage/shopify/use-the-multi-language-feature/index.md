---
description: How to use Navi+ multi-language support — inline translation syntax, language switcher, and full language code reference.
layout: default
permalink: /docs/usage/shopify/use-the-multi-language-feature/
title: Multi-language (Shopify Markets)
---
# Multi-language (Shopify Markets)

Navi+ supports multi-language in two ways: **inline translation syntax** and a **language switcher** built directly into your menu.

## 1. Inline translation syntax

Add translations directly in a menu item's label using this syntax:

```
Default-content <language-code-1: Content-1><language-code-2: Content-2>
```

**Example** — a Tab Bar shown in English, French, and Vietnamese:

```
Home <fr: Maison><vi: Trang chủ>
```

When the menu renders, Navi+ checks the current page language and shows the matching translation. If no match is found, it falls back to the default.

This syntax works in the **label**, **description**, and **link-to** fields.

## 2. Language switcher

You can build a language switcher inside any Navi+ menu. Use the `open:ChangeLanguage()` action on a menu item:

```
open:ChangeLanguage(fr)
```

When a visitor taps that item, the site switches to French. You can add flag icons from a site like [Flaticon](https://www.flaticon.com) to make the switcher more visual.

## Language code reference

Navi+ supports all standard ISO 639-1 language codes. If your SEO system uses a different format (e.g. `en-EN` instead of `en`), the two-character code still works.

| Code | Language |
|---|---|
| ab | Abkhazian |
| aa | Afar |
| af | Afrikaans |
| ak | Akan |
| sq | Albanian |
| am | Amharic |
| ar | Arabic |
| an | Aragonese |
| hy | Armenian |
| as | Assamese |
| av | Avaric |
| ae | Avestan |
| ay | Aymara |
| az | Azerbaijani |
| bm | Bambara |
| ba | Bashkir |
| eu | Basque |
| be | Belarusian |
| bn | Bengali |
| bh | Bihari languages |
| bi | Bislama |
| bs | Bosnian |
| br | Breton |
| bg | Bulgarian |
| my | Burmese |
| ca | Catalan, Valencian |
| km | Central Khmer |
| ch | Chamorro |
| ce | Chechen |
| ny | Chichewa, Chewa, Nyanja |
| zh | Chinese |
| cu | Church Slavonic, Old Bulgarian |
| cv | Chuvash |
| kw | Cornish |
| co | Corsican |
| cr | Cree |
| hr | Croatian |
| cs | Czech |
| da | Danish |
| dv | Divehi, Dhivehi, Maldivian |
| nl | Dutch, Flemish |
| dz | Dzongkha |
| en | English |
| eo | Esperanto |
| et | Estonian |
| ee | Ewe |
| fo | Faroese |
| fj | Fijian |
| fi | Finnish |
| fr | French |
| ff | Fulah |
| gd | Gaelic, Scottish Gaelic |
| gl | Galician |
| lg | Ganda |
| ka | Georgian |
| de | German |
| ki | Gikuyu, Kikuyu |
| el | Greek (Modern) |
| kl | Greenlandic, Kalaallisut |
| gn | Guarani |
| gu | Gujarati |
| ht | Haitian Creole |
| ha | Hausa |
| he | Hebrew |
| hz | Herero |
| hi | Hindi |
| ho | Hiri Motu |
| hu | Hungarian |
| ia | Interlingua |
| id | Indonesian |
| ie | Interlingue |
| ga | Irish |
| ig | Igbo |
| ik | Inupiaq |
| io | Ido |
| is | Icelandic |
| it | Italian |
| iu | Inuktitut |
| ja | Japanese |
| jv | Javanese |
| kn | Kannada |
| kr | Kanuri |
| ks | Kashmiri |
| kk | Kazakh |
| rw | Kinyarwanda |
| kv | Komi |
| kg | Kongo |
| ko | Korean |
| ku | Kurdish |
| kj | Kuanyama, Kwanyama |
| la | Latin |
| lb | Luxembourgish |
| li | Limburgan |
| ln | Lingala |
| lo | Lao |
| lt | Lithuanian |
| lu | Luba-Katanga |
| lv | Latvian |
| gv | Manx |
| mk | Macedonian |
| mg | Malagasy |
| ms | Malay |
| ml | Malayalam |
| mt | Maltese |
| mi | Maori |
| mr | Marathi |
| mh | Marshallese |
| mn | Mongolian |
| na | Nauru |
| nv | Navajo, Navaho |
| nd | North Ndebele |
| ne | Nepali |
| ng | Ndonga |
| nb | Norwegian Bokmål |
| nn | Norwegian Nynorsk |
| no | Norwegian |
| ii | Sichuan Yi |
| nr | South Ndebele |
| oc | Occitan |
| oj | Ojibwa |
| om | Oromo |
| or | Oriya |
| os | Ossetian, Ossetic |
| pa | Punjabi |
| pi | Pali |
| fa | Persian |
| pl | Polish |
| ps | Pashto, Pushto |
| pt | Portuguese |
| qu | Quechua |
| rm | Romansh |
| rn | Rundi |
| ro | Romanian |
| ru | Russian |
| sa | Sanskrit |
| sc | Sardinian |
| sd | Sindhi |
| se | Northern Sami |
| sm | Samoan |
| sg | Sango |
| sr | Serbian |
| gd | Scottish Gaelic |
| sn | Shona |
| si | Sinhala, Sinhalese |
| sk | Slovak |
| sl | Slovenian |
| so | Somali |
| st | Southern Sotho |
| es | Spanish, Castilian |
| su | Sundanese |
| sw | Swahili |
| ss | Swati |
| sv | Swedish |
| ta | Tamil |
| te | Telugu |
| tg | Tajik |
| th | Thai |
| ti | Tigrinya |
| bo | Tibetan |
| tk | Turkmen |
| tl | Tagalog |
| tn | Tswana |
| to | Tonga |
| tr | Turkish |
| ts | Tsonga |
| tt | Tatar |
| tw | Twi |
| ty | Tahitian |
| ug | Uighur, Uyghur |
| uk | Ukrainian |
| ur | Urdu |
| uz | Uzbek |
| ve | Venda |
| vi | Vietnamese |
| vo | Volapük |
| wa | Walloon |
| cy | Welsh |
| wo | Wolof |
| fy | Western Frisian |
| xh | Xhosa |
| yi | Yiddish |
| yo | Yoruba |
| za | Zhuang, Chuang |
| zu | Zulu |
