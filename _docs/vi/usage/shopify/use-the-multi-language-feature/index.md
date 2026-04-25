---
description: Cách dùng tính năng đa ngôn ngữ trong Navi+ — cú pháp dịch inline, bộ chuyển ngôn ngữ, và bảng mã ngôn ngữ đầy đủ.
lang: vi
layout: default
permalink: /vi/docs/usage/shopify/use-the-multi-language-feature/
title: Đa ngôn ngữ (Shopify Markets)
---
# Đa ngôn ngữ (Shopify Markets)

Navi+ hỗ trợ đa ngôn ngữ theo 2 cách: **cú pháp dịch inline** và **bộ chuyển ngôn ngữ** tích hợp ngay trong menu.

## 1. Cú pháp dịch inline

Thêm bản dịch trực tiếp vào nhãn mục menu bằng cú pháp sau:

```
Nội-dung-mặc-định <mã-ngôn-ngữ-1: Nội-dung-1><mã-ngôn-ngữ-2: Nội-dung-2>
```

**Ví dụ** — Tab Bar hiển thị bằng 3 ngôn ngữ: tiếng Anh, tiếng Pháp và tiếng Việt:

```
Home <fr: Maison><vi: Trang chủ>
```

Khi menu hiển thị, Navi+ kiểm tra ngôn ngữ hiện tại của trang và hiển thị bản dịch phù hợp. Nếu không tìm thấy, tự động fallback về mặc định.

Cú pháp này hoạt động trên cả 3 trường: **nhãn (label)**, **mô tả (description)** và **đường dẫn (link-to)**.

## 2. Bộ chuyển ngôn ngữ

Bạn có thể xây dựng bộ chuyển ngôn ngữ ngay trong bất kỳ menu Navi+ nào. Dùng action `open:ChangeLanguage()` cho mục menu:

```
open:ChangeLanguage(fr)
```

Khi khách truy cập nhấn vào mục đó, trang sẽ chuyển sang tiếng Pháp. Bạn có thể thêm icon cờ từ [Flaticon](https://www.flaticon.com) để bộ chuyển ngôn ngữ trực quan hơn.

## Bảng mã ngôn ngữ

Navi+ hỗ trợ toàn bộ mã ngôn ngữ ISO 639-1 tiêu chuẩn. Nếu hệ thống SEO của bạn dùng định dạng khác (ví dụ `en-EN` thay vì `en`), mã 2 ký tự vẫn hoạt động bình thường.

| Mã | Ngôn ngữ |
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
