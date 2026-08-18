---
description: 'Guide court pour styliser le menu avec **CSS personnalisé pour ce menu**, **Classes réutilisables (CSS)**, et le HTML par défaut. Le menu a **trois niveaux** : barre principale...'
lang: fr
layout: default
permalink: /fr/docs/usage/menu-structure-and-css/
title: Structure et CSS du menu
---
# Structure et CSS du menu

Guide court pour styliser le menu avec **CSS personnalisé pour ce menu**, **Classes réutilisables (CSS)**, et le HTML par défaut. Le menu a **trois niveaux** : barre principale, sous-menu, sous-menu imbriqué.

> **Remarque :** Cette démo couvre un menu **Slide / Standard**. La structure est la même pour la plupart des types de menus ; TABBAR et Mega Menu peuvent avoir de légères différences — utilisez DevTools sur la page en direct pour confirmer.

***

### CSS personnalisé — quoi taper

Dans **Avancé → CSS personnalisé pour ce menu**, Navi+ **ajoute un préfixe** (incluant `#SF-…` et la portée du menu). Écrivez **uniquement les sélecteurs normaux** — **ne tapez pas** vous-même `#SF-12345678`.

```css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

**`&` = le menu lui-même** (le conteneur `#SF-…`). C'est optionnel — mais c'est la façon propre de styliser le menu entier, et la seule façon de le faire à l'intérieur de `@media` :

```css
&              { background: #111; }        /* the menu container */
&:hover        { box-shadow: 0 4px 12px rgba(0,0,0,.15); }
& .inner-level1 { padding: 12px 16px; }     /* '& ' with a space = inside the menu, same as .inner-level1 */

/* Responsive — only on small screens */
@media (max-width: 768px) {
  & { padding: 6px; }
  .name { font-size: 13px; }
}
```

Vous **n'avez pas besoin** d'utiliser `&` — le CSS sans lui continue de fonctionner exactement comme avant (`.inner-level1 { … }` est inchangé). `&` est juste un raccourci pour « ce menu ».

Utilisez **`#SF-…` manuellement** uniquement lorsque vous **n'utilisez pas** cette boîte (par exemple CSS dans le fichier de thème).

**Feuille de style mondiale / CSS** est un champ **séparé** : elle s'applique au **site entier** et n'est pas limitée à un menu — utilisez avec prudence.

**Classes réutilisables (CSS) :** définissez `.yourClass { … }` dans le tableau Réutilisable et assignez la classe aux éléments — les règles restent dans le même paquet CSS interne ; vous **n'avez pas** besoin d'ajouter `#SF-…` dans la boîte. La classe apparaît sur le **`li`**.

Ne **pas** envelopper le contenu dans une balise `<style>` dans la boîte — uniquement du CSS pur.

***

### CSS par élément (styliser un seul élément)

Chaque élément de menu a **sa propre** boîte CSS : **modifier l'élément → Avancé → Feuille de style interne / CSS**. C'est séparé du **CSS personnalisé pour ce menu** (qui s'applique au menu entier). Le CSS par élément **voyage avec l'élément** — si vous copiez ou dupliquez l'élément, son style vient avec.

> **Guide complet :** pour la structure HTML d'un élément et toute la syntaxe CSS, voir [Structure et CSS des éléments de menu](/docs/usage/menu-item-structure-and-css/).

Écrivez du CSS pur. **`&` signifie *cet élément*** (la ligne de l'élément / `li`) — comme `&` en Sass :

```css
& { background: #fff5f5; border-radius: 10px; }
&:hover { background: #ffe4e6; }
```

Ciblez les **parties internes** de l'élément avec des sélecteurs de classe normaux (mêmes noms que le reste du menu : `.inner`, `.name`, `.description`, `.icon`, `.image`, `.arrow`) :

```css
.name { color: #b91c1c; }
.icon i { font-size: 22px; }
& .description { opacity: 0.8; }
```

Un **espace après `&`** signifie « une partie à l'intérieur de l'élément », donc `& .name` et `.name` sont identiques. `&` écrit **sans espace** (`&:hover`, `&.active`) stylise la ligne propre de l'élément.

**Réactif (`@media`)** fonctionne — idéal pour les ajustements spécifiques aux mobiles. À l'intérieur de `@media` vous devez utiliser un sélecteur (c'est du CSS standard), donc utilisez `&` pour l'élément lui-même :

```css
@media (max-width: 768px) {
  & { padding: 8px; }
  .name { font-size: 13px; }
}
```

Notes :

* **Pas de `#SF-…` nécessaire**, et **pas de balise `<style>`** — Navi+ définit automatiquement le CSS pour cet élément seul, donc il n'affecte jamais d'autres éléments. Le CSS voyage également avec l'élément si vous le dupliquez.
* Vous pouvez toujours écrire une **déclaration brute** sans sélecteur (`color: red;`) — elle s'applique à la ligne de cet élément. Ce style plus ancien continue de fonctionner, mais `&` est plus clair et c'est la seule façon de styliser la ligne à l'intérieur de `@media`.
* Si une propriété est définie à la fois ici et par les paramètres visuels de l'élément (Ombre de boîte média / boîte interne, etc.), le **paramètre visuel gagne**. Supprimez/remplacez ce paramètre si vous voulez que le CSS prenne le relais.
* Pour **afficher/masquer** un élément par appareil, utilisez **Afficher sur mobile / Afficher sur ordinateur** dans l'éditeur — pas du CSS. Sur **Wix**, `@media` basé sur la fenêtre d'affichage peut ne pas correspondre à l'écran réel ; préférez les paramètres d'affichage là-bas.
* Utilisez l'**icône développer** (en haut à droite de la boîte) pour ouvrir un éditeur de code plus grand ; appuyez sur **Échap** ou **Terminé** pour fermer.

Utilisez **CSS par élément** pour un ajustement unique à un seul élément ; utilisez **CSS personnalisé pour ce menu** (avec `.inner-level1`, `[data-name="…"]`, etc.) lorsque vous voulez styliser plusieurs éléments ou des niveaux entiers à la fois.

***

### Démo détaillée : une branche de trois niveaux (icône, image, nom, description)

Exemples d'étiquettes : **Boutique** (niveau 1 : **icône** + nom + description) → **Vêtements** (niveau 2 : **image** + nom) → **T-shirts** (niveau 3 : **icône** + nom + description). Ceci montre **les deux types de médias** et **la description**.

Le menu entier se trouve dans un bloc :

```html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…` est l'**id d'intégration** du menu — visible dans le tableau de bord Navi+ (le badge bleu à côté du titre du menu) et dans DevTools sur la page en direct.

#### Ordre à l'intérieur de chaque `div.inner` (exécution)

1. **`span.arrow`** — flèche (sous-menu / mobile, dépend du type de menu).
2. *(Optionnel)* **`span.cart_count`** — uniquement lorsque l'élément utilise un badge de panier avec un compte.
3. **Médias — l'un des :**
   * **Icône (Remix Icon / `ri-…`):** `span.icon` → `i.ri-…`
   * **Image :** `div.image-border` → `span.image-box` → `span.image` → `img`

4. **`div.info`** → **`div.flexcol`** → **`span.name`** (label) → **`div.description`** *(seulement si vous remplissez la description dans l'éditeur)*.
5. *(Optionnel / SEO)* l'icône ou l'image peut être enveloppée dans **`a[href]`** — vous pouvez voir `<a>…</a>` autour de `span.icon` ou du bloc d'image dans DevTools.

#### Les classes `li` expliquées

| Classe | Sens |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | Profondeur de cet élément |
| `is-parent-top` | Élément de niveau 1 qui a des enfants |
| `is-parent` | Élément de niveau 2+ qui a des enfants |
| `data-name="…"` | Étiquette d'élément (attribut, utile pour les sélecteurs CSS `[data-name]`) |

#### Démo HTML complète (classes / URL illustratives)

```html
<div id="SF-8167331678" class="naviItem …">
  <ul class="navigation">

    <li class="item level-1 is-parent-top" linkto="/collections/all" data-name="Shop">
      <!-- LEVEL 1: icon + name + description -->
      <div class="inner inner-level1">
        <span class="arrow"></span>
        <!-- <span class="cart_count">3</span>  ← cart badge only -->

        <!-- ICON: Remix Icon (ri-…) -->
        <span class="icon">
          <i class="ri-store-2-line"></i>
        </span>

        <div class="info">
          <div class="flexcol">
            <span class="name">Shop</span>
            <div class="description">Browse all categories</div>
          </div>
        </div>
      </div>

      <ul class="children" menulevel="2">

        <li class="child level-2 is-parent" linkto="/collections/clothing" data-name="Clothing">
          <!-- LEVEL 2: image + name (no description) -->
          <div class="inner inner-level2">
            <span class="arrow"></span>

            <!-- IMAGE: when set, icon is not rendered -->
            <div class="image-border">
              <span class="image-box">
                <span class="image">
                  <img
                    src="https://cdn.shopify.com/…/clothing.jpg"
                    alt="Clothing"
                    title="Clothing"
                    loading="lazy"
                    decoding="async">
                </span>
              </span>
            </div>

            <div class="info">
              <div class="flexcol">
                <span class="name">Clothing</span>
                <!-- no .description if description is empty in the editor -->
              </div>
            </div>
          </div>

          <ul class="children" menulevel="3">

            <li class="child level-3" linkto="/collections/t-shirts" data-name="T-Shirts">
              <!-- LEVEL 3: icon + name + description -->
              <div class="inner inner-level3">
                <span class="arrow"></span>

                <span class="icon">
                  <i class="ri-t-shirt-line"></i>
                </span>

                <div class="info">
                  <div class="flexcol">
                    <span class="name">T-Shirts</span>
                    <div class="description">New collection</div>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </li>

      </ul>
    </li>

  </ul>
</div>
```

#### Extraits de médias (pour référence)

**Icône uniquement (pas d'image) :**

```html
<span class="icon"><i class="ri-home-5-line"></i></span>
```

**Image uniquement (URL d'image définie sur l'élément) :**

```html
<div class="image-border">
  <span class="image-box">
    <span class="image">
      <img src="…" alt="…" title="…" loading="lazy" decoding="async">
    </span>
  </span>
</div>
```

#### Exemples de sélecteur pour CSS personnalisé (dans la boîte Navi+ — ne tapez pas `#SF-…`)

```css
/* Arrow */
.inner-level1 .arrow { }

/* Icon (any level) */
.inner-level2 .icon i { font-size: 20px; }

/* Image */
.inner-level2 .image img { border-radius: 8px; }

/* Title and description */
.inner-level1 .name { font-weight: 600; }
.inner-level1 .description { font-size: 12px; opacity: 0.85; }

/* Target by item name */
[data-name="Shop"] .name { color: red; }
```

**Souvenez-vous :** les sous-menus de niveau 2 / 3 se trouvent **à l'intérieur** du parent **`li`**, **après** le `div.inner` du parent — pas comme enfants directs de `ul.navigation`.

**Même branche, diagramme textuel :**

```
Shop              ← level 1 (main bar)
  └─ Clothing     ← level 2 (first submenu)
        └─ T-Shirts ← level 3 (nested submenu)
```

***

### Référence rapide (classes suggérées)

| Niveau | Ligne (`li`) | Enveloppe de contenu | Sous-menu suivant |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1 | `level-1` | `.inner-level1` | `ul.children[menulevel="2"]` |
| 2 | `level-2` | `.inner-level2` | `ul.children[menulevel="3"]` if any |
| 3 | `level-3` | `.inner-level3` | — |

`menulevel="2"` / `"3"` est l'index de **ce** sous-menu — pas la même chose que `level-1` sur un élément de niveau supérieur.

***

### Conseils rapides

* Ciblez **une profondeur** avec `.inner-level1`, `.inner-level2`, `.inner-level3` au lieu de seulement `.inner`.
* Stylisez un **panneau entier** (arrière-plan, rayon) : `ul.children[menulevel="2"]` ou `[menulevel="3"]`.
* Texte : `.info` → `.flexcol` → `.name`, `.description`.
* Icône : `.icon` ou `.icon i` — image : `.image-border`, `.image img` (voir démo détaillée ci-dessus).
* Flèche : `.arrow` (généralement en premier à l'intérieur de `.inner`).
* Ciblez un élément spécifique par nom : `[data-name="Home"] .name { … }`.

***

### Cours manquants dans le magasin?

Effacez le cache du thème, republish le menu ou vérifiez la version du script. Utilisez DevTools pour confirmer les noms de classe sur la page en direct.

***

Support documentation — **Navi+**
