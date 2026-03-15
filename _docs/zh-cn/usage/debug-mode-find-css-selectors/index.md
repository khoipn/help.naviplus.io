---
description: 调试模式是内置于 Navi+ 库的轻量级工具集，帮助您更有效地使用 Navi+ 菜单。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/usage/debug-mode-find-css-selectors/
title: 调试模式 - 查找 CSS 选择器
---
# 调试模式 - 查找 CSS 选择器

调试模式是内置于 Navi+ 库的轻量级工具集，帮助您更有效地使用 Navi+ 菜单。

### 1. 查找 CSS 选择器

要启用调试模式，请使用以下 URL 格式：\
`yourdomain.com#navidebug-on`

您的网站将切换到 Navi+ 调试模式。将鼠标悬停在网站的不同区域，以查看其对应的 CSS 选择器。移动光标以精确定位所需的目标区域。

请注意下面的键盘快捷键，以更高效地工作。

**快捷键 1.** 复制 CSS 选择器

* 在 MacOS 上按 **⌘+C** 或在 Windows 上按 **Ctrl+C** 以复制所选的 CSS 选择器。

然后，您可以将其粘贴到 **发布菜单** 设置中：

* Mega Menu / Grid Menu：在目标 CSS 选择器之前、之后插入菜单或替换目标 CSS 选择器
* Slide Menu：在点击或轻触目标 CSS 选择器时触发滑动菜单

**快捷键 2.** 在选择器级别之间导航

* 按 [↑/←] 或 Backspace 移动到父级选择器
* 按 [↓/→] 移动到子级选择器

**重要提示：** 在大多数情况下，您不会立即找到完美的 CSS 选择器。根据经验，通常更容易：

1. 从选择子级选择器开始
2. 然后向上移动 1–2 个父级（您的网站上将出现视觉高亮）
3. 使用 ⌘+C（Ctrl+C）复制选择器
4. 将其粘贴到菜单配置中并进行测试

有时，您可能需要多次重复此过程，以便在插入、替换或绑定菜单事件到 CSS 选择器时实现所需的用户体验。

#### 1.1. 在桌面上查找 CSS 选择器

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FlstMiQTp0fQqvJ89jXhD%2FFrame%20210.webp?alt=media&#x26;token=95d6a152-b58b-4894-9cdc-150200fae5e1" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2Fuc7fc7CicJcQ3XNvwDVA%2FFrame%20211.webp?alt=media&#x26;token=84a5c3ad-04bf-4b4e-9c8c-bc334f7f4646" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FuE3IlMcHedAfwQR98YhM%2FFrame%20212.webp?alt=media&#x26;token=e02c2aa2-0792-4811-8005-46a5b7b0b9fe" alt=""><figcaption></figcaption></figure>

#### 1.2. 在移动设备上查找 CSS 选择器

要在移动设备上查找 CSS 选择器，请在浏览器中启用移动（响应式）模式。\
然后在页面上的任意位置右键单击并选择：

* Chrome：检查
* Safari：检查元素
* Firefox：检查
* Edge：检查 / 检查元素

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FK7F58NVYCerBTqG9EWjB%2FFrame%20213.webp?alt=media&#x26;token=2f2c059a-1346-446d-a19f-e2998050791a" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FsNvXhBMniymbZ1tD9c4p%2FFrame%20214.webp?alt=media&#x26;token=257f082d-ff6b-4ce0-8eaa-6160a697a67e" alt=""><figcaption></figcaption></figure>

<figure><img src="https://4226540503-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4y2gLTmg4ToH5vkorG8s%2Fuploads%2FJAZm1dPEZrfeqtpNXA8O%2FFrame%20215.webp?alt=media&#x26;token=2847a4ef-e298-4986-9367-36a6abf914d8" alt=""><figcaption></figcaption></figure>
