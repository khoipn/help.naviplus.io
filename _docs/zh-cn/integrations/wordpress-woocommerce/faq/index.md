---
description: 关于 Navi+ 菜单构建器 WordPress 插件的常见问题 — 定价、性能、WooCommerce、多站点、页面构建器、缓存、隐私和卸载。
lang: zh-cn
layout: default
permalink: /zh-cn/docs/integrations/wordpress-woocommerce/faq/
title: Navi+ 菜单构建器常见问题
---
# Navi+ 菜单构建器常见问题

<details>
<summary>插件是免费的吗？</summary>
<p>是的。插件本身在 WordPress.org 上是免费的。您的 Navi+ 订阅（Starter / Business / Elite）决定了可用的菜单类型和配额。请参见 <a href="{{ site.baseurl }}/docs/frequently-asked-questions/navi-plans-starter-business-and-elite/">计划与定价</a>。</p>
</details>

<details>
<summary>安装之前需要一个 Navi+ 账户吗？</summary>
<p>不需要。当您在 <strong>外观 → Naviplus 菜单构建器</strong> 中保存第一个菜单时，插件会自动将您的网站连接到 Navi+ 服务 — 无需单独注册，也无需粘贴令牌。</p>
</details>

<details>
<summary>插件会减慢我的网站吗？</summary>
<p>没有可测量的影响。插件只在 <code>&lt;head&gt;</code> 中添加一个 <code>&lt;script async&gt;</code> 标签，从 Cloudflare/BunnyCDN 加载 Navi+ 运行时（约 4&nbsp;KB）。运行时是完全异步的，不会阻塞页面渲染。典型的首次加载开销为 100–200&nbsp;ms；后续加载由于 HTTP 缓存为 0&nbsp;ms。</p>
</details>

<details>
<summary>它与 WooCommerce 一起工作吗？</summary>
<p>是的。WooCommerce 页面是标准的 WordPress 页面，因此菜单可以在商店、产品、购物车和结账页面上呈现，无需额外配置。在编辑器中使用显示规则（URL 包含 <code>/cart</code>、<code>/checkout</code> 等）来控制菜单出现的位置。</p>
</details>

<details>
<summary>它在 WordPress 多站点上工作吗？</summary>
<p>是的。每个站点激活插件（也支持网络激活），并从各自的 <strong>外观 → Naviplus 菜单构建器</strong> 配置菜单。当保存第一个菜单时，每个站点会独立自动连接到 Navi+。</p>
</details>

<details>
<summary>它会与我的主题或页面构建器（Elementor、Divi、Bricks、Oxygen）冲突吗？</summary>
<p>没有已知的冲突。菜单渲染到自己的容器中，并使用隔离的样式。要在页面构建器中插入一个部分菜单，请使用带有 <code>[naviwp embed_id="SF-..."]</code> 的 <strong>短代码</strong> 小部件 — 或带有嵌入 div 的 <strong>HTML</strong> 小部件。</p>
</details>

<details>
<summary>我可以同时使用插件和通用脚本嵌入吗？</summary>
<p>不可以 — 选择其一。插件已经注入了 Navi+ 运行时，因此手动脚本标签会加载两次。如果您之前在主题中或通过头部注入器嵌入了脚本，请在激活插件之前删除该代码片段。</p>
</details>

<details>
<summary>我更新了一个菜单，但在我的网站上看不到更改。</summary>
<p>菜单在运行时获取，因此不需要刷新 WordPress 缓存。如果更改仍然没有出现，请进行强制重新加载（Cmd/Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;R）以绕过浏览器缓存。对于粘性菜单，还需确认菜单设置为 <strong>已发布</strong>（而不是草稿），并且其显示规则与页面匹配。</p>
</details>

<details>
<summary>我如何暂时隐藏所有 Navi+ 菜单？</summary>
<p>有两个选项：</p>
<ul>
<li><strong>全站范围：</strong>在插件管理中关闭 "Inject site-wide" 开关 — 除了带有 <code>[naviwp]</code> 短代码/块的页面外，运行时停止加载。</li>
<li><strong>每个菜单：</strong>在编辑器中将菜单切换为 <strong>草稿</strong>。</li>
</ul>
</details>

<details>
<summary>我如何卸载插件？</summary>
<p>在 <strong>插件 → 已安装插件</strong> 中停用并删除它。插件仅在 <code>wp_options</code> 中存储站点标识符和一些选项；卸载会自动删除它们。您在 Navi+ 服务上的菜单会被保留 — 如果您稍后重新安装，可以继续使用相同的嵌入 ID。</p>
</details>

<h2 id="privacy">隐私与外部服务</h2>

<p>插件连接到 Navi+ 菜单构建器服务以创建和渲染菜单。交换的数据可能包括（但不限于）：您的 <strong>站点域名</strong>、您的 <strong>菜单配置</strong> 和渲染菜单所需的最少使用数据。</p>

<ul>
<li>隐私政策： <a href="https://naviplus.io/privacy">https://naviplus.io/privacy</a></li>
<li>脚本加载器： <code>https://live.naviplus.app/start.js</code></li>
</ul>

<details>
<summary>我在哪里报告错误或请求功能？</summary>
<p>使用官方支持论坛： <a href="https://wordpress.org/support/plugin/naviplus-menu-builder/">https://wordpress.org/support/plugin/naviplus-menu-builder/</a>。有关账户或账单问题，请发送电子邮件至 <a href="mailto:support@naviplus.io">support@naviplus.io</a>。</p>
</details>
