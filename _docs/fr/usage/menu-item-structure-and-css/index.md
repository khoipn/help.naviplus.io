---
description: 'Plongez en profondeur dans un seul élément de menu — sa structure HTML (icône, image, nom, description, flèche, badge) et comment styliser uniquement cet élément avec la boîte CSS par élément, incluant & (cet élément), sélecteurs internes, survol et @media.'
lang: fr
layout: default
permalink: /fr/docs/usage/menu-item-structure-and-css/
title: Structure et CSS des éléments de menu
---
# Structure et CSS des éléments de menu

Cette page plonge en profondeur dans **un élément de menu** — le HTML qu'il affiche et comment styliser **uniquement cet élément** en utilisant sa propre boîte CSS (**modifier l'élément → Avancé → Feuille de style interne / CSS**).

> Cette boîte stylise **uniquement l'élément que vous modifiez**, et le CSS **voyage avec l'élément** lorsque vous le dupliquez. Pour le CSS sur tout le menu, utilisez **CSS personnalisé pour ce menu** à la place — voir [Structure et CSS du menu](/docs/usage/menu-structure-and-css/).

***

## La structure d'un élément

Chaque élément est un seul `li` contenant un `div.inner`. À l'intérieur de `.inner`, dans l'ordre :

```html
<li class="item level-1 …" data-name="Shop">
  <div class="inner inner-level1">
    <span class="arrow"></span>            <!-- submenu arrow (if any) -->
    <!-- <span class="cart_count">3</span> --> <!-- cart badge with count (optional) -->

    <!-- MEDIA — icon OR image (if the item has an image, the icon is not rendered) -->
    <span class="icon"><i class="ri-store-2-line"></i></span>
    <!-- or -->
    <div class="image-border">
      <span class="image-box"><span class="image"><img src="…"></span></span>
    </div>

    <!-- TEXT -->
    <div class="info">
      <div class="flexcol">
        <span class="name">Shop</span>
        <div class="description">Browse all categories</div>   <!-- only if you filled description -->
      </div>
    </div>
  </div>
</li>
```

### Les parties que vous pouvez cibler

| Partie | Sélecteur | Notes |
| ---- | -------- | ----- |
| L'élément lui-même (la ligne) | `&` | Le `li`. `&` est un raccourci pour « cet élément ». |
| Enveloppe de contenu | `.inner` | Enveloppe tout à l'intérieur de l'élément |
| Glyphe d'icône | `.icon i` | Remix Icon (`ri-…`) |
| Image | `.image img` (boîte : `.image-border`, `.image-box`, `.image`) | Affiché à la place de l'icône lorsque l'élément a une image |
| Titre | `.name` | L'étiquette |
| Description | `.description` | N'existe que si vous avez rempli le champ description |
| Colonne de texte | `.info`, `.flexcol` | Contient le nom + la description |
| Flèche | `.arrow` | Flèche du sous-menu |
| Badge du panier | `.cart_count` | Seulement pour les articles du panier avec un compte |

***

## Écrire du CSS pour un élément

La boîte accepte **trois formes, combinables ensemble**. Vous ne tapez jamais `#SF-…` et vous n'ajoutez jamais de balise `<style>` — Navi+ définit automatiquement la portée de tout pour cet élément seul.

### 1. `&` — cet élément (recommandé)

`&` signifie la ligne de l'élément lui-même (le `li`), tout comme `&` en Sass :

```css
& { border: 1px solid #eee; border-radius: 12px; }
&:hover { background: #f8fafc; }
```

### 2. Sélecteurs internes — les parties à l'intérieur de l'élément

Utilisez les noms de classe du tableau ci-dessus :

```css
.name { font-weight: 700; }
.description { font-size: 12px; opacity: .8; }
.icon i { font-size: 22px; color: #2563eb; }
.image img { border-radius: 10px; }
```

Un **espace après `&`** signifie également « à l'intérieur de l'élément », donc `& .name` et `.name` sont identiques. `&` écrit **sans espace** (`&:hover`, `&.active`) style de la ligne elle-même.

### 3. Déclarations brutes — le raccourci plus ancien

L'écriture de propriétés avec **aucun sélecteur** les applique à la ligne de l'élément :

```css
color: red;
font-weight: 700;
```

Cela continue de fonctionner (les anciens menus en dépendent), mais `&` est plus clair — et les déclarations brutes **ne peuvent pas** être utilisées à l'intérieur de `@media`.

***

## Réactif avec `@media`

`@media` fonctionne ici. À l'intérieur de `@media` vous devez utiliser un sélecteur (c'est du CSS standard), donc utilisez `&` pour l'élément lui-même :

```css
/* Smaller padding + hide the description on phones */
@media (max-width: 768px) {
  & { padding: 8px; }
  .description { display: none; }
  .name { font-size: 13px; }
}
```

> Pour **afficher ou masquer** un élément par appareil, préférez **Afficher sur mobile / Afficher sur ordinateur** dans l'éditeur — pas du CSS. Sur **Wix**, `@media` basé sur la fenêtre d'affichage peut ne pas correspondre à l'écran réel ; utilisez les paramètres d'affichage là-bas.

***

## Exemples

**Transformez un élément en pilule / badge :**

```css
& { background: #111; color: #fff; border-radius: 999px; padding: 6px 14px; }
.name { color: #fff; }
```

**Mettez en évidence au survol :**

```css
&:hover { transform: translateY(-2px); transition: transform .15s; }
&:hover .name { color: #2563eb; }
```

**Icône plus grande, de couleur :**

```css
.icon i { font-size: 24px; color: #e11d48; }
```

**Image arrondie avec un cadre subtil :**

```css
.image img { border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,.12); }
```

**Compact sur mobile :**

```css
& { padding: 12px; }
@media (max-width: 768px) {
  & { padding: 6px; }
  .description { display: none; }
}
```

***

## Bon à savoir

* **Pas de `#SF-…`, pas de balise `<style>`** — Navi+ définit le CSS pour cet élément seul ; il n'affecte jamais d'autres éléments.
* Le CSS **voyage avec l'élément** lorsque vous le dupliquez (il est par élément, réutilisable).
* Si une propriété est définie à la fois **ici** et par les paramètres visuels de l'élément (Boîte média / Couleur de boîte interne, bordure, ombre…), le **paramètre visuel gagne** — il est appliqué en ligne. Effacez ce paramètre si vous voulez que votre CSS prenne le relais.
* Utilisez l'**icône développer** (en haut à droite de la boîte) pour un éditeur plus grand ; appuyez sur **Échap** ou **Terminé** pour fermer.

***

Support documentation — **Navi+**
