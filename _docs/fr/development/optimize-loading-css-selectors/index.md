---
description: "Syntaxe des sélecteurs CSS pour les déclencheurs de menu squelette et l'intégration de thème — optimisation du temps de chargement du menu et UX avec des formats de sélecteur spécifiques à l'appareil et étiquetés."
layout: default
permalink: /fr/docs/development/optimize-loading-css-selectors/
title: Optimisation de la vitesse et de l'UX — syntaxe des sélecteurs CSS
---
# Optimisation de la vitesse et de l'UX — syntaxe des sélecteurs CSS

Dans **Theme Editor → App embeds → Store Connector**, sous le groupe **Speed & UX optimization**, vous trouverez 2 champs de sélecteur CSS qui aident votre menu à se charger en douceur — pas besoin d'écrire du CSS/JS personnalisé comme avant. Ce guide explique la syntaxe des deux champs.

---

## 2 champs, 2 objectifs différents

| Champ | Utilisé pour | Mécanisme |
|---|---|---|
| **Mobile Menu CSS Selector** | Bouton de déclenchement de menu (hamburger) lors de l'utilisation de la liaison d'événements de sélecteur CSS | Cliquez sur le bouton AVANT que Navi+ se charge → affiche un menu squelette immédiatement (rétroaction instantanée) au lieu d'une attente silencieuse. À mesure que Navi+ se charge, le squelette cède la place au menu réel à mesure que le contenu arrive. |
| **CSS Selector for Mega Menu Replacement** | Zone de menu du thème d'origine, quand Navi+ fonctionne en mode Remplacement | Couvre cette zone avec un effet de chargement shimmer en attendant que Navi+ se charge, empêchant le contenu d'origine de scintiller lorsqu'il est remplacé. |

Les deux champs sont **facultatifs** — laissez-les vides et rien ne change du comportement par défaut.

---

## Syntaxe commune — plusieurs sélecteurs séparés par une virgule

```
selector-1, selector-2, selector-3
```

Séparez plusieurs sélecteurs dans un seul champ en utilisant des virgules `,` ou des points-virgules `;`. Les virgules/points-virgules à l'intérieur de parenthèses `(...)`, crochets `[...]` ou chaînes entre guillemets `"..."` / `'...'` (comme dans les sélecteurs d'attribut `[data-value="a,b"]`) sont reconnus en contexte et ne seront pas confondus avec des délimiteurs de sélecteurs.

---

## Syntaxe Legacy — suffixes `(M)` / `(D)`

Fonctionne dans **les deux champs**. Ajoutez un suffixe immédiatement après le sélecteur pour limiter par appareil:

```
.hamburger-mobile (M)
.hamburger-desktop (D)
.trigger-all-devices
```

| Suffixe | S'applique à |
|---|---|
| `(M)` | Uniquement Mobile |
| `(D)` | Uniquement Desktop |
| *(pas de suffixe)* | Tous les appareils |

---

## Syntaxe Labeled — champ "Mobile Menu CSS Selector" uniquement

Le champ **Mobile Menu CSS Selector** prend en charge une syntaxe avancée pour personnaliser l'apparence du menu squelette — le champ **Mega Menu (Replacement mode)** ne prend PAS cela en charge, acceptant uniquement `(M)` / `(D)`.

```
.hamburger (Device:M | Color:#1a1a1a | Direction:left | Width:85%)
```

Identifié par des deux-points `:` à l'intérieur de `(...)` — s'il y a des deux-points, c'est le format Labeled; sinon, c'est Legacy (`(M)` / `(D)`). Les paramètres sont séparés par des tuyaux `|`:

| Paramètre | Valeurs valides | Par défaut lorsqu'omis/invalide |
|---|---|---|
| `Device` | `M` ou `D` (lister les deux `M,D` = pas de restriction d'appareil, comme l'omission) | Tous les appareils |
| `Color` | Code CSS hexadécimal: `#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa` | `#fff` |
| `Direction` | `left` ou `right` — direction du glissement du squelette | `left` |
| `Width` | Pourcentage `NN%` ou pixels `NNpx` (entier ou décimal) | `85%` |

**Exemple:**
```
.hamburger (Device:M | Color:#1a1a1a | Width:320px)
```
→ S'applique uniquement sur Mobile, fond du squelette `#1a1a1a`, largeur fixe `320px`.

### Tolérance aux pannes par paramètre

- L'espace blanc et la casse dans les clés et les valeurs sont normalisés avant la comparaison (`Color: #1A1A1A` et `color:#1a1a1a` sont identiques).
- Un format de paramètre invalide (p. ex., `Color:red` — pas hexadécimal) ou une clé inconnue (faute de frappe, nom inexistant) est **silencieusement ignorée uniquement pour ce paramètre**, en utilisant la valeur par défaut — cela ne cassera pas d'autres paramètres ou d'autres sélecteurs dans le même champ.

---

## Sélecteurs invalides (erreurs de syntaxe CSS)

Si un sélecteur dans le champ **Mobile Menu CSS Selector** a une véritable erreur de syntaxe CSS (différente des paramètres Labeled invalides — c'est un sélecteur qui ne peut pas être analysé), Navi+ enregistre un avertissement dans la console du navigateur (F12 → Console), pointant directement vers le champ:

```
[Navi+] INVALID TRIGGER CSS SELECTOR — this one was skipped
selector      : <sélecteur invalide>
browser error : <message d'erreur du navigateur>
Fix it in Theme Editor → App embeds → Store Connector →
Mobile Menu CSS Selector.
```

Le sélecteur invalide est ignoré seul; les autres sélecteurs valides dans le champ continuent de fonctionner normalement.

---

## Exemples concrets

### 1. Protéger le hamburger par défaut, aucune personnalisation requise

```
#Details-menu-drawer-container
```
Les clics précoces obtiennent toujours une rétroaction immédiate (squelette par défaut), pas besoin de déclarer Device/Color/Direction/Width.

### 2. Hamburger Mobile uniquement, glisse de droite, couleur de marque

```
.hamburger-mobile (Device:M | Color:#0f172a | Direction:right | Width:90%)
```

### 3. Remplacer la zone de menu d'origine du thème sur les deux appareils

```
nav.header__inline-menu
```
(dans le champ **CSS Selector for Mega Menu Replacement**, pas de suffixe = s'applique à tous les appareils)

### 4. Combiner plusieurs sélecteurs, limites spécifiques à l'appareil

```
.mega-menu (D), .mobile-nav-wrapper (M)
```
