---
description: Install Navi+ on Shopify or any website, and understand the three ways Navi+ deploys menus — floating, positioned, and triggered.
layout: default
permalink: /docs/how-to-install-navi/
title: Install Navi+
---
# Install Navi+

## Step 1 — Install

**Shopify:** Install from the [Shopify App Store](https://apps.shopify.com/pronavi-navigation-design). The app opens automatically after installation.

**Other platforms** (WordPress, WooCommerce, Wix, Webflow, Squarespace, or any website):
1. Create a free account at [dash.naviplus.app](https://dash.naviplus.app)
2. Add your website domain
3. Copy your embed snippet — you'll use this in Step 2

---

## Step 2 — Understand how your menu will be deployed

Navi+ uses **three different deployment methods** depending on the menu type. Understanding this upfront saves time during setup.

### 1. Floating menus — Tab Bar & FAB

Tab Bar and FAB are **sticky menus** that float on top of your page at a fixed position. They never scroll away.

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">📍</div>
    <strong>Position</strong><br>Top, bottom, left, or right edge of the screen
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔼</div>
    <strong>Auto-hide on scroll</strong><br>Hides when scrolling down, reappears when scrolling back up
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">👇</div>
    <strong>Show on scroll down</strong><br>Hidden by default, appears only when the user scrolls down — saves screen space
  </div>
</div>

**A common use case:** consolidate other floating elements — WhatsApp, Crisp, Messenger, live chat widgets — into Navi+ menu items. This frees up screen space and removes the clutter of multiple floating icons stacking on top of each other.

### 2. Positioned menus — Mega Menu & Grid Menu

Mega Menu and Grid Menu need to be **placed at a specific location** on your page. There are several ways to do this:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🎯</div>
    <strong>CSS Selector</strong><br>Point Navi+ to any element on your page. Insert before, after, or replace it entirely — this is how Mega Menu can fully replace your theme's existing navigation.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🧩</div>
    <strong>Shopify Section</strong><br>Use an App Block inside the Theme Customizer to drop the menu into any section of your layout — no code needed.
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🖥️</div>
    <strong>Embed code</strong><br>Paste a short snippet directly into your page's HTML at the exact spot where the menu should appear.
  </div>
</div>

> **CSS Selector** is a way to identify any point on a webpage — it's how browsers target specific elements. Navi+ uses it to know exactly where to inject your menu. You don't need to write CSS yourself; Navi+ has a visual picker that finds the selector for you.

### 3. Triggered menus — Slide Menu

Slide Menu **does not appear on its own**. It stays hidden until something triggers it:

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.75rem;margin:1.25rem 0">
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">☰</div>
    <strong>Existing element</strong><br>A user clicks something already on your page — like your theme's hamburger icon
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">⚡</div>
    <strong>Custom trigger</strong><br>Any element on your page — designated by its CSS Selector
  </div>
  <div style="background:#fff;border:1px solid var(--color-border);border-radius:var(--radius-md);padding:0.875rem 1rem">
    <div style="font-size:1.4rem;margin-bottom:0.4rem">🔗</div>
    <strong>Another Navi+ menu</strong><br>A Tab Bar or FAB item that opens the Slide Menu when clicked
  </div>
</div>

This makes Slide Menu flexible — it can replace your existing navigation without visually adding anything new to the page.

---

## Step 3 — Create your first menu

Once installed, head to the dashboard and create your first menu. → [Your first menu (5-minute quickstart)](/docs/getting-started/your-first-menu/)
