---
description: Cách sử dụng hỗ trợ đa ngôn ngữ của Navi+ — cú pháp dịch nội tuyến, công tắc ngôn ngữ và tham chiếu mã ngôn ngữ đầy đủ.
lang: vi
layout: default
permalink: /vi/docs/usage/shopify/use-the-multi-language-feature/
title: Đa ngôn ngữ (Shopify Markets)
---
# Đa ngôn ngữ (Shopify Markets)

Navi+ hỗ trợ đa ngôn ngữ theo hai cách: **cú pháp dịch nội tuyến** và **công tắc ngôn ngữ** được tích hợp trực tiếp vào menu của bạn.

## 1. Cú pháp dịch nội tuyến

Thêm các bản dịch trực tiếp vào nhãn của mục menu bằng cách sử dụng cú pháp này:

```
Default-content <language-code-1: Content-1><language-code-2: Content-2>
```

**Ví dụ** — một Tab Bar hiển thị bằng tiếng Anh, tiếng Pháp và tiếng Việt:

```
Home <fr: Maison><vi: Trang chủ>
```

Khi menu được hiển thị, Navi+ kiểm tra ngôn ngữ của trang hiện tại và hiển thị bản dịch phù hợp. Nếu không tìm thấy bản dịch, nó sẽ quay lại mặc định.

Cú pháp này hoạt động trong các trường **nhãn**, **mô tả** và **liên kết đến**.

## 2. Công tắc ngôn ngữ

Bạn có thể xây dựng một công tắc ngôn ngữ bên trong bất kỳ menu nào của Navi+. Sử dụng hành động `open:ChangeLanguage()` trên một mục menu:

```
open:ChangeLanguage(fr)
```

Khi một khách truy cập chạm vào mục đó, trang web sẽ chuyển sang tiếng Pháp. Bạn có thể thêm biểu tượng cờ từ một trang như [Flaticon](https://www.flaticon.com) để làm cho công tắc trở nên trực quan hơn.

## Tham chiếu mã ngôn ngữ

Navi+ hỗ trợ tất cả các mã ngôn ngữ ISO 639-1 tiêu chuẩn. Nếu hệ thống SEO của bạn sử dụng định dạng khác (ví dụ: `en-EN` thay vì `en`), mã hai ký tự vẫn hoạt động.

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
