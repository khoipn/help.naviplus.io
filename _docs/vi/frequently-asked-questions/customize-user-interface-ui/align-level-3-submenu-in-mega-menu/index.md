---
description: Một số mega menu có thể rất cao. Trong trường hợp đó, việc mở rộng menu cấp 3 có thể không để lại đủ không gian. Khi điều này xảy ra, bạn nên ghim menu cấp 3 lên trên cùng.
lang: vi
layout: default
permalink: /vi/docs/frequently-asked-questions/customize-user-interface-ui/align-level-3-submenu-in-mega-menu/
title: Căn chỉnh menu con cấp 3 trong mega menu?
---
# Căn chỉnh menu con cấp 3 trong mega menu?

Một số mega menu có thể rất cao. Trong trường hợp đó, việc mở rộng menu cấp 3 có thể không để lại đủ không gian. Khi điều này xảy ra, bạn nên ghim menu cấp 3 lên trên cùng thay vì vậy.

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fro68elhDmY0dYZVM33lW%2F1.1.png?alt=media&#x26;token=f8dc87a7-e10d-4ac7-a398-a4b5220ce72c" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FX4M1o8bgaNDF6VYTtini%2F1.2.png?alt=media&#x26;token=e2d65a92-418c-4c4a-bff7-51a5b9044d41" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2F2tyR71IfHrMmPmZN0Ewi%2F1.3.png?alt=media&#x26;token=cdd6854c-2782-40ec-a959-a74d576eb177" alt=""><figcaption></figcaption></figure>

Dán nó vào hộp Internal Stylesheet / CSS:

```
ul.children[menulevel="2"] li.child.is-parent.menu-expand {
  position: initial;
}

ul.children[menulevel="2"] li.child.is-parent.menu-expand ul.children[menulevel="3"]{
  top: 0px;
}
```
