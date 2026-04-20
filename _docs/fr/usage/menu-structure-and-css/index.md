---
description: 'Guide rapide pour styliser le menu avec **CSS personnalisé pour ce menu**, **Classes réutilisables (CSS)**, et le HTML par défaut. Le menu a **trois niveaux** : barre principale...'
lang: fr
layout: default
permalink: /fr/docs/usage/menu-structure-and-css/
title: Structure du menu et CSS
---
# Structure du menu et CSS

Guide rapide pour styliser le menu avec **CSS personnalisé pour ce menu**, **Classes réutilisables (CSS)**, et le HTML par défaut. Le menu a **trois niveaux** : barre principale, sous-menu, sous-menu imbriqué.

> **Remarque :** Cette démo couvre un **menu Slide / Standard**. La structure est la même pour la plupart des types de menus ; TABBAR et Mega Menu peuvent avoir des différences mineures — utilisez DevTools sur la page en direct pour confirmer.

***

### CSS personnalisé — ce qu'il faut taper

Dans **Avancé → CSS personnalisé pour ce menu**, Navi+ **ajoute un préfixe** (y compris `#SF-…` et portée du menu). Écrivez **uniquement des sélecteurs normaux** — ne tapez **pas** `#SF-12345678` vous-même.

````css
.inner-level1 { padding: 12px 16px; }
ul.children[menulevel="2"] { border-radius: 8px; }
```

Utilisez **`#SF-…` manuellement** uniquement lorsque vous **n'utilisez pas** cette boîte (par exemple CSS dans le fichier de thème).

**Feuille de style globale / CSS** est un champ **séparé** : il s'applique à **l'ensemble du site** et n'est pas limité à un menu — utilisez avec précaution.

**Classes réutilisables (CSS) :** définissez `.yourClass { … }` dans le tableau réutilisable et assignez la classe aux éléments — les règles restent dans le même bundle CSS interne ; vous **n'avez pas** besoin d'ajouter `#SF-…` dans la boîte. La classe apparaît sur le **`li`**.

Ne **pas** envelopper le contenu dans une balise `<style>` dans la boîte — uniquement du CSS simple.

***

### Démo détaillée : une branche à trois niveaux (icône, image, nom, description)

Exemples d'étiquettes : **Boutique** (niveau 1 : **icône** + nom + description) → **Vêtements** (niveau 2 : **image** + nom) → **T-Shirts** (niveau 3 : **icône** + nom + description). Cela montre **les deux types de médias** et **la description**.

L'ensemble du menu se trouve dans un seul bloc :

````html
<div id="SF-…" class="…">
  <ul class="navigation"> … </ul>
</div>
```

`SF-…` est l'**id d'intégration** du menu — visible dans le tableau de bord Navi+ (le badge bleu à côté du titre du menu) et dans DevTools sur la page en direct.

#### Ordre à l'intérieur de chaque `div.inner` (runtime)

1. **`span.arrow`** — flèche (sous-menu / mobile, dépend du type de menu).
2. *(Optionnel)* **`span.cart_count`** — uniquement lorsque l'élément utilise un badge de panier avec un compte.
3. **Média — un des :**
   * **Icône (Remix Icon / `ri-…`):** `span.icon` → `i.ri-…`
   * **Image :** `div.image-border` → `span.image-box` → `span.image` → `img`\
     \&#xNAN;*Remarque :* si l'élément **a une image**, l'application **affiche l'image** et ne rend pas l'icône pour cette ligne.
4. **`div.info`** → **`div.flexcol`** → **`span.name`** (étiquette) → **`div.description`** *(uniquement si vous remplissez la description dans l'éditeur)*.
5. *(Optionnel / SEO)* l'icône ou l'image peut être enveloppée dans **`a[href]`** — vous pouvez voir `<a>…</a>` autour de `span.icon` ou du bloc image dans DevTools.

#### Classes `li` expliquées

| Classe                             | Signification                                                        |
| --------------------------------- | -------------------------------------------------------------- |
| `level-1` / `level-2` / `level-3` | Profondeur de cet élément                                             |
| `is-parent-top`                   | Élément de niveau 1 qui a des enfants                                 |
| `is-parent`                       | Élément de niveau 2+ qui a des enfants                                |
| `data-name="…"`                   | Étiquette de l'élément (attribut, utile pour les sélecteurs CSS `[data-name]`) |

#### Démo HTML complète (classes / URLs illustratives)

````html
<div id="SF-8167331678" class="naviItem …">
  <ul class="navigation">

    <li class="item level-1 is-parent-top" linkto="/collections/all" data-name="Shop">
      <!-- NIVEAU 1 : icône + nom + description -->
      <div class="inner inner-level1">
        <span class="arrow"></span>
        <!-- <span class="cart_count">3</span>  ← badge de panier uniquement -->

        <!-- ICÔNE : Remix Icon (ri-…) -->
        <span class="icon">
          <i class="ri-store-2-line"></i>
        </span>

        <div class="info">
          <div class="flexcol">
            <span class="name">Shop</span>
            <div class="description">Parcourez toutes les catégories</div>
          </div>
        </div>
      </div>

      <ul class="children" menulevel="2">

        <li class="child level-2 is-parent" linkto="/collections/clothing" data-name="Clothing">
          <!-- NIVEAU 2 : image + nom (pas de description) -->
          <div class="inner inner-level2">
            <span class="arrow"></span>

            <!-- IMAGE : lorsque définie, l'icône n'est pas rendue -->
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
                <!-- pas de .description si la description est vide dans l'éditeur -->
              </div>
            </div>
          </div>

          <ul class="children" menulevel="3">

            <li class="child level-3" linkto="/collections/t-shirts" data-name="T-Shirts">
              <!-- NIVEAU 3 : icône + nom + description -->
              <div class="inner inner-level3">
                <span class="arrow"></span>

                <span class="icon">
                  <i class="ri-t-shirt-line"></i>
                </span>

                <div class="info">
                  <div class="flexcol">
                    <span class="name">T-Shirts</span>
                    <div class="description">Nouvelle collection</div>
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

#### Extraits multimédias (pour référence)

**Icône uniquement (pas d'image) :**

````html
<span class="icon"><i class="ri-home-5-line"></i></span>
```

**Image uniquement (URL de l'image définie sur l'élément) :**

````html
<div class="image-border">
  <span class="image-box">
    <span class="image">
      <img src="…" alt="…" title="…" loading="lazy" decoding="async">
    </span>
  </span>
</div>
```

#### Exemples de sélecteurs pour CSS personnalisé (dans la boîte Navi+ — ne tapez pas `#SF-…`)

````css
/* Flèche */
.inner-level1 .arrow { }

/* Icône (tous niveaux) */
.inner-level2 .icon i { font-size: 20px; }

/* Image */
.inner-level2 .image img { border-radius: 8px; }

/* Titre et description */
.inner-level1 .name { font-weight: 600; }
.inner-level1 .description { font-size: 12px; opacity: 0.85; }

/* Cible par nom d'élément */
[data-name="Shop"] .name { color: red; }
```

**Rappelez-vous :** les sous-menus de niveau 2 / 3 se trouvent **à l'intérieur** du parent **`li`**, **après** le `div.inner` du parent — pas comme des enfants directs de `ul.navigation`.

**Même branche, diagramme textuel :**

```
Shop              ← niveau 1 (barre principale)
  └─ Clothing     ← niveau 2 (premier sous-menu)
        └─ T-Shirts ← niveau 3 (sous-menu imbriqué)
```

***

### Référence rapide (classes suggérées)

| Niveau | Ligne (`li`) | Wrapper de contenu | Sous-menu suivant                        |
| ----- | ---------- | --------------- | ----------------------------------- |
| 1     | `level-1`  | `.inner-level1` | `ul.children[menulevel="2"]`        |
| 2     | `level-2`  | `.inner-level2` | `ul.children[menulevel="3"]` si présent |
| 3     | `level-3`  | `.inner-level3` | —                                   |

`menulevel="2"` / `"3"` est l'index de **ce** panneau de sous-menu — pas le même que `level-1` sur un élément de niveau supérieur.

***

### Conseils rapides

* Ciblez **une profondeur** avec `.inner-level1`, `.inner-level2`, `.inner-level3` au lieu de seulement `.inner`.
* Stylisez un **panneau entier** (arrière-plan, rayon) : `ul.children[menulevel="2"]` ou `[menulevel="3"]`.
* Texte : `.info` → `.flexcol` → `.name`, `.description`.
* Icône : `.icon` ou `.icon i` — image : `.image-border`, `.image img` (voir démo détaillée ci-dessus).
* Flèche : `.arrow` (généralement en premier à l'intérieur de `.inner`).
* Ciblez un élément spécifique par nom : `[data-name="Home"] .name { … }`.

***

### Classes manquantes sur la boutique ?

Videz le cache du thème, republiez le menu, ou vérifiez la version du script. Utilisez DevTools pour confirmer les noms de classes sur la page en direct.

***

Documentation de support — **Navi+**
