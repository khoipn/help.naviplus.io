---
description: 在这里，您将找到有关如何将Navi+与其他应用程序（如聊天工具、忠诚度等）连接的指南。您可以将它们添加为菜单项，直接从Navi+打开应用程序，并确保一切顺利协作，而不会在您的网站上重叠。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/integrations/integrating-navi-with-your-website-and-external-apps/
title: 将Navi+与您的网站和外部应用程序集成
---
# 将Navi+与您的网站和外部应用程序集成

在这里，您将找到有关如何将Navi+与其他应用程序（如聊天工具、忠诚度等）连接的指南。您可以将它们添加为菜单项，直接从Navi+打开应用程序，并确保一切顺利协作，而不会在您的网站上重叠。

### 1. 将其他粘性应用程序集成到单个Navi+菜单项中

Navi+将多个应用程序（聊天框、忠诚度、社交证明、促销条等）整合为菜单项，使您的网站保持整洁，防止重叠——这在屏幕空间有限的移动设备上尤其有价值。\
要实现这一点，请按照以下2个步骤操作：

• 第一步：使用CSS隐藏粘性应用程序图标。详细信息请参见这里\
• 第二步：使用JavaScript为菜单项，以便单击它们时打开相应的应用程序面板。

请参见Tidi聊天集成的示例。这是一个相对高级的设置，因此请联系Navi+支持以获取帮助。

### 2. JavaScript触发器 – 与外部应用程序交互

Navi+允许在用户单击菜单项时运行JavaScript函数（javascript:Function）。请参见Tidi聊天集成的示例，以了解如何使用两个JavaScript函数将Tidio聊天集成到Navi+菜单项中：

1. 隐藏Tidio图标：一个全局函数，等待Tidio渲染，然后隐藏它
2. openTidio()：当用户单击"与我们聊天"菜单项时，打开Tidio的聊天面板

Navi+还支持您定义类和属性分配（甚至以id="menu-item-1"的形式）以启用与其他应用程序或JavaScript代码的交互。您可以使用JavaScript函数通过类或属性直接访问菜单项，例如：创建一个逐步教程。

### 3. 使用外部CSS自定义Navi+界面

每个Navi+菜单由一个id="SF-123456789"的div元素定义（嵌入id）。在这里查看Navi+菜单的HTML/CSS结构框架，以编写CSS代码自定义菜单界面。\
例如，要更改二级菜单项的颜色，您可以编写以下CSS：

`#SF-123456789 ul li ul.children li .name { color: red; }`

Navi+还支持您定义类和属性分配（甚至以id="menu-item-1"的形式）以启用与其他应用程序或JavaScript代码的交互。您可以使用类名或属性为每个菜单项设置样式。

### 4. Navi+菜单之间的通信

从Navi+菜单项，您可以调用打开另一个Navi+ Slide菜单，语法为：`open:NaviMenu.`\
使用此语法，您可以通过让滑动菜单调用其他滑动菜单来无限扩展菜单级别。

### 5. 从您网站的任何地方打开Slide菜单

使用滑动菜单，除了通过其他Navi+菜单中的菜单项打开它们外，您还可以通过调用JavaScript函数：`naviman.openNaviMenu()`来触发Navi+滑动菜单。\
例如：使用HTML和CSS创建一个浮动按钮，然后将其单击操作分配为打开Navi+ Slide菜单 – 您将立即拥有一个专业外观的菜单。

### 6. 模拟用户操作（单击、聚焦、滚动等）

Navi+提供了几个函数（在单击菜单项时触发）：

* `open:clickTo`模拟单击HTML CSS选择器。这对于启用Navi+菜单触发默认汉堡菜单、搜索工具、购物车面板、语言下拉菜单...或激活来自其他应用程序的聊天工具非常有帮助。
* `open:focusTo`模拟聚焦于HTML CSS选择器。这对于模拟单击搜索工具或电子邮件订阅字段非常有用
* `scroll:Top`、`scroll:Bottom`、`scroll:OnPage`将网页滚动到所需区域。当您想要滚动到页面上的目标部分而不是导航到不同页面时，这非常有用。

### 7. 用于分享和提高网站参与度

Navi+提供了几个函数（在单击菜单项时触发）：

* `open:ShareMe`分享网站链接
* `share:CopyUrl`将当前URL复制到设备剪贴板
* `share:Facebook`将当前URL分享至Facebook
* `share:Tweet`将当前URL分享至Twitter（X）

### 8. 与其他设备应用程序集成（如电话）

Navi+提供了几个函数（在单击菜单项时触发）：

* `tel:+[国家代码][电话]`拨打号码
* `sms:+[国家代码][电话]?body=[文本]`向号码发送带有设置内容的短信（可选）
* `mailto:[地址]`发送电子邮件
* `https://m.me/[YourName]`与您的Facebook Messenger聊天
* `https://wa.me/[电话]`与您的WhatsApp聊天
* `https://lin.ee/[line-code]`与您的Line聊天
* `https://zalo.me/+[国家代码][电话]`与您的Zalo聊天

### 9. 仅适用于Shopify

Navi+提供了几个函数（在单击菜单项时触发）：

* `open:ChangeLanguage`如果网站使用Shopify，则更改语言
* Shopify Inbox：隐藏Shopify Inbox图标，并将其集成到Navi+菜单中，作为单击时打开聊天面板的菜单项。详细信息请参见这里
* 打开汉堡菜单或购物车、搜索面板：详细信息请参见这里

### 没有在列表中看到它？

随时向我发送您的集成请求。我很高兴提供帮助，这也支持Navi+的增长。

---

# 代理说明：查询此文档

如果您需要此页面中未直接提供的其他信息，您可以通过提问动态查询文档。

在当前页面URL上执行HTTP GET请求，使用`ask`查询参数：

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/integrations/integrating-navi+-with-your-website-and-external-apps.md?ask=<question>
```

问题应具体、自包含，并用自然语言书写。
响应将包含对问题的直接回答以及文档中的相关摘录和来源。

当答案未在当前页面中明确存在时，您需要澄清或获取额外上下文，或希望检索相关文档部分时，请使用此机制。
