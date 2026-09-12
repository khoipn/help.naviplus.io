---
description: "How Navi+ delivers your menu through two independent content delivery networks so it stays online, and what the \"Use a Secondary CDN (BunnyCDN)\" option in the app embed does — including when visitors in some regions cannot reach Cloudflare."
layout: default
permalink: /docs/frequently-asked-questions/second-cdn-bunnycdn/
title: "How Navi+ keeps your menu online — the \"Use a Secondary CDN (BunnyCDN)\" option"
---
# How Navi+ keeps your menu online — the "Use a Secondary CDN (BunnyCDN)" option

Your menu is not stored inside your theme. Every time a page loads, the browser fetches a few small files from Navi+ — the menu engine, its styles, and your menu data. Where those files come from decides whether the menu shows up, and how fast. This page explains how that delivery works, how it is protected against outages, and what the **Use a Secondary CDN (BunnyCDN)** checkbox in the Shopify app embed changes.

---

## Two networks, one menu

Navi+ serves the menu files through a content delivery network (CDN): a set of servers spread around the world that keep copies of the same files, so each visitor is served from a location close to them.

To make sure a problem on one network can never take your menu down, the same files are kept on **two independent networks**, run by two different providers:

| Network | Provider | Role |
|---|---|---|
| Main network | Cloudflare | Serves every store by default. |
| Second network | BunnyCDN | Holds an identical copy, refreshed on every Navi+ release. Steps in when the main network cannot deliver. |

Each provider operates its own global infrastructure with its own uptime commitments. Because the two do not share servers, an incident on one side leaves the other unaffected — the menu never depends on a single company staying up.

---

## How a page load works by default

<div align="center">

<svg viewBox="0 0 720 330" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="20" y="120" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="150" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Visitor's browser</text>
  <text x="95" y="172" text-anchor="middle" font-size="12" fill="#4b5563">opens your store</text>
  <text x="95" y="190" text-anchor="middle" font-size="12" fill="#4b5563">Navi+ starter script runs</text>

  <rect x="290" y="40" width="200" height="100" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="390" y="66" text-anchor="middle" font-size="14" font-weight="600" fill="#9a3412">Main network</text>
  <text x="390" y="86" text-anchor="middle" font-size="12" fill="#7c2d12">Cloudflare</text>
  <text x="390" y="110" text-anchor="middle" font-size="11" fill="#7c2d12">menu engine · styles · menu data</text>
  <text x="390" y="126" text-anchor="middle" font-size="11" fill="#7c2d12">served from the location nearest the visitor</text>

  <rect x="290" y="200" width="200" height="100" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="390" y="226" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Second network</text>
  <text x="390" y="246" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN</text>
  <text x="390" y="270" text-anchor="middle" font-size="11" fill="#1e40af">identical copy of every file</text>
  <text x="390" y="286" text-anchor="middle" font-size="11" fill="#1e40af">refreshed on every Navi+ release</text>

  <rect x="560" y="120" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="152" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Menu appears</text>
  <text x="630" y="174" text-anchor="middle" font-size="12" fill="#047857">on the page</text>

  <path d="M170,150 C230,150 230,90 290,90" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="222" y="108" text-anchor="middle" font-size="11" fill="#374151">1. request files</text>

  <path d="M490,90 C530,90 530,150 560,150" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="522" y="108" text-anchor="middle" font-size="11" fill="#374151">2. deliver</text>

  <path d="M170,180 C230,180 230,250 290,250" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>
  <text x="222" y="230" text-anchor="middle" font-size="11" fill="#dc2626">if a file fails →</text>
  <text x="222" y="244" text-anchor="middle" font-size="11" fill="#dc2626">automatic retry</text>

  <path d="M490,250 C530,250 530,180 560,180" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>

  <path d="M390,140 L390,200" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="404" y="174" font-size="10" fill="#6b7280">kept in sync</text>
</svg>

</div>

1. The Navi+ app embed in your theme runs a tiny starter script.
2. The starter script asks the **main network** for the menu engine, its styles, and your menu data.
3. The menu appears.

If any of those files fails to arrive from the main network — an outage, a timeout, a regional problem — the starter script **automatically retries the same file from BunnyCDN**. This happens on its own, in the visitor's browser, with nothing for you to configure. In practice a single network having a bad day is invisible to your customers.

---

## The one case the automatic retry cannot cover

The automatic retry lives inside the starter script. That creates a blind spot: if the **starter script itself** never arrives, nothing runs, so there is nothing left to retry.

This happens when a visitor's connection cannot reach the main network at all. Cloudflare is one of the largest networks on the internet, but it is not reachable from everywhere:

- Some countries restrict or throttle Cloudflare traffic at the national level.
- Some corporate or school networks block it as part of their web filtering.
- Some internet providers route to Cloudflare poorly in specific regions, so requests time out.

For a store whose customers are mostly in one of those places, a menu that works perfectly for you can be missing for them — and the automatic retry never gets a chance to help.

---

## What "Use a Secondary CDN (BunnyCDN)" does

Turning on the option flips the priority so the menu no longer depends on the main network at all:

<div align="center">

<svg viewBox="0 0 720 300" width="100%" style="max-width:700px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cdnArrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#374151"/>
    </marker>
    <marker id="cdnArrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#2563eb"/>
    </marker>
  </defs>

  <rect x="20" y="105" width="150" height="90" rx="10" fill="#f3f4f6" stroke="#9ca3af"/>
  <text x="95" y="135" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Visitor's browser</text>
  <text x="95" y="157" text-anchor="middle" font-size="12" fill="#4b5563">opens your store</text>
  <text x="95" y="175" text-anchor="middle" font-size="12" fill="#4b5563">starter script requested twice</text>

  <rect x="290" y="30" width="200" height="80" rx="10" fill="#fafafa" stroke="#d1d5db" stroke-width="1.5"/>
  <text x="390" y="56" text-anchor="middle" font-size="14" font-weight="600" fill="#6b7280">Main network</text>
  <text x="390" y="76" text-anchor="middle" font-size="12" fill="#6b7280">Cloudflare</text>
  <text x="390" y="96" text-anchor="middle" font-size="11" fill="#6b7280">starter script only</text>

  <rect x="290" y="150" width="200" height="120" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="390" y="176" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Second network</text>
  <text x="390" y="196" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN — now primary</text>
  <text x="390" y="220" text-anchor="middle" font-size="11" fill="#1e40af">starter script</text>
  <text x="390" y="236" text-anchor="middle" font-size="11" fill="#1e40af">menu engine · styles · menu data</text>
  <text x="390" y="256" text-anchor="middle" font-size="11" fill="#1e40af">everything after the start</text>

  <rect x="560" y="105" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="137" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Menu appears</text>
  <text x="630" y="159" text-anchor="middle" font-size="12" fill="#047857">on the page</text>

  <path d="M170,135 C230,135 230,70 290,70" fill="none" stroke="#9ca3af" stroke-width="1.5" marker-end="url(#cdnArrow2)"/>
  <text x="222" y="90" text-anchor="middle" font-size="11" fill="#6b7280">starter (whichever</text>
  <text x="222" y="104" text-anchor="middle" font-size="11" fill="#6b7280">answers first)</text>

  <path d="M170,165 C230,165 230,210 290,210" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>

  <path d="M490,210 C530,210 530,150 560,150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>
  <text x="522" y="192" text-anchor="middle" font-size="11" fill="#2563eb">deliver</text>
</svg>

</div>

- The **starter script is requested from both networks**, so the menu starts as long as either one is reachable from where the visitor is.
- **Everything after that** — the menu engine, its styles, and your menu data — is loaded from **BunnyCDN** instead of Cloudflare.

The main network stays in the picture only as a second chance for the starter script; BunnyCDN becomes the primary source for the menu itself.

---

## When should you turn it on?

Leave it **off** unless one of these applies:

- **Navi+ support asked you to.** When you report a menu that is missing for some visitors, we check where those visitors are and which network they can reach. If the main network is the problem, we will ask you to enable this option.
- **You know your customers are in a region where Cloudflare is restricted or unreliable.** If your store mainly serves such a region, BunnyCDN is the safer primary choice for you. Tick the option and let us know — we are happy to confirm the change looks right from our side.

A typical sign: the menu shows for you and for most visitors, but customers in one specific country or on one specific network report that it never appears.

---

## Why it is off by default

Both networks are global and fast. For the vast majority of stores there is nothing to gain from switching, and the default path is the one we monitor most closely and roll fixes out to first. The option is a tool for the uncommon cases above, not a performance setting.

---

## Does it affect page speed?

No noticeable change is expected. BunnyCDN serves the same files from its own worldwide locations. Requesting the starter script from two networks adds one small extra request; the menu engine and your menu data are still loaded once, from a single source.

---

## How to turn it on or off

1. In your Shopify admin, open **Online Store → Themes → Customize**.
2. Click the **App embeds** icon in the left sidebar.
3. Find **Navi+** and expand it.
4. Tick or untick **Use a Secondary CDN (BunnyCDN)**.
5. Click **Save**.

The change applies on the next page load. There is nothing to configure inside the Navi+ app.

> If support asked you to turn it on while investigating an issue, keep it on until they confirm the issue is resolved — then you can switch it back off.
