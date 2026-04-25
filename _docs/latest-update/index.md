---
description: What's new in Navi+ — features, improvements, and fixes by month.
layout: default
permalink: /docs/latest-update/
title: Changelog / Release Notes
---
# Changelog / Release Notes

### April 2026

#### Multi-language menus — now works automatically

Your menu now shows the right language to each visitor without any extra setup. If your store runs in English, French, and Vietnamese, Navi+ detects the current language and switches the menu labels instantly. The language switcher you can embed inside any menu is also more reliable.

**What this means for you:** Visitors from different countries see your menu in their language — without you having to create separate menus for each language.

#### Tab Slide — group menu items into tabs

A new layout option for any menu type. Instead of showing all items in a flat list, you can group them into horizontal tabs. Great for organizing a busy navigation into cleaner sections (e.g. "Men / Women / Sale" as tabs inside a slide menu).

#### Color templates and redesigned color picker

Pick from preset color palettes or build your own. Applying a brand color across your entire menu now takes seconds instead of editing field by field.

#### Settings panel consolidated into one place

All advanced options — touch feedback, animation style, navigation icons, reusable CSS classes — are now in a single unified panel. Much easier to find and configure.

#### Better WordPress support

Faster embed, fewer conflicts with popular themes and page builders (Elementor, Divi, WPBakery). If you're on WordPress, the setup is now much smoother.

- Speed & experience improvements: faster language detection on page load · color preview renders without page reload · settings panel opens in under 100ms

---

### March 2026

#### Section headers can now link to a page

Previously, a group header in your menu was either a link or a toggle to expand children — not both. Now it can do both at the same time. Tap to expand, long-press (or click the arrow) to navigate. Useful for category headers that should also go somewhere.

#### Grid Menu layout fixes

Edge cases where Grid Menu items would wrap or overflow on small screens have been fixed. The layout is now consistent across all phone sizes.

#### Custom colors for touch lines and dividers

The separator lines and touch-feedback highlight inside menus can now be set to any color. Useful for matching your brand palette exactly.

- Speed & experience improvements: grid menu renders ~20% faster on first load · divider colors apply without full menu reload

---

### February 2026

#### Z-index conflicts — solved automatically

This was the most-requested fix. Navi+ menus now automatically detect when your store's native panels (cart drawer, search overlay, cookie consent banner) appear, and step behind them so nothing gets covered. In most cases, you no longer need to manually set any z-index.

#### Slide Horizontal — menus that slide sideways

A new slide direction for mobile menus. Instead of the standard top-down list, level 2 panels slide in from the right — like a native iOS app. Feels much more natural for deep product category trees.

#### Export and Import as full popup

You can now backup, move, or duplicate your entire menu configuration in seconds — open the export popup, copy the JSON, import on another store. No need to rebuild from scratch.

#### Lazy image loading

Images in your menu (product photos, category thumbnails) now load only when they appear in view. This means faster initial page load, especially on menus with many images.

#### Emoji support in menu labels

You can now add emoji to any menu item label directly — no workarounds needed. ✅

- Speed & experience improvements: page no longer scrolls in the background while a menu is open · overlay performance improved on Android · menu data cached in IndexedDB for near-instant repeat loads

---

### January 2026

#### Slide Horizontal menu type

New menu type built for deep navigation trees on mobile. Each level slides in from the right, keeping the user oriented at all times. The back button and header update automatically as you navigate deeper.

#### Item templates — save and reuse menu structures

Build a menu item once (with all its children, icons, and settings), save it as a template, then insert it into any menu with one click. Huge time-saver if you manage menus across multiple stores or repeat the same structure often.

#### Import / Export with AI

Paste a list of links, a sitemap, or just describe what you want — Navi+ can generate the full menu tree automatically. You can also export any menu as JSON, edit it in an AI tool, then import it back.

#### Debug mode

A new built-in inspector you can activate from the dashboard. It overlays your live site with z-index values, menu boundaries, and selector highlights — useful when something doesn't look right and you need to diagnose it fast.

- Speed & experience improvements: CDN infrastructure upgraded to Cloudflare R2 edge network (faster in Southeast Asia and Oceania) · second failover CDN added · LCP scores improved — Navi+ assets now load within the browser's critical render window

---

### December 2025

#### Navi+ now works on every platform

Previously Shopify-only. Now Navi+ runs on WordPress, WooCommerce, Wix, Webflow, Squarespace — and any website that accepts a `<script>` tag. Same dashboard, same menu types, same one-line embed.

**What this means for you:** One tool for all your sites. If you manage stores on multiple platforms, you can build and update menus from a single place at [dash.naviplus.app](https://dash.naviplus.app/).

#### Dashboard now available in multiple languages

The Navi+ dashboard UI is now localized. More languages will be added over time.

- Speed & experience improvements: Remix Icons served from CDN instead of bundled — reduces menu script size · Safari (iOS) rendering fixes — menus open and animate smoothly on all iPhone models

---

### November 2025

#### Fix: menu flickering at scroll edges

The auto-hide / auto-show behavior was incorrectly triggering at the very top and bottom of the page on some devices — causing the menu to flash in and out as users reached the edge. A safe-edge threshold now prevents this, so the show/hide behavior feels smooth and intentional.

---

### October 2025

#### CDN migrated to Cloudflare

All Navi+ assets now run on Cloudflare's global edge network. Average menu load time dropped to ~52ms. For Elite plan users, a secondary failover via BunnyCDN was added — meaning if one CDN goes down, your menus still load without interruption. SLA upgraded to 99.99%.
