---
description: "Les règles de visibilité s''appliquent aux menus et éléments de menu — affichage ou masquage selon le dispositif, contenu du panier, calendrier, marché, étiquettes clients et clients B2B."
lang: fr
layout: default
permalink: /fr/docs/development/setup-visibility-rule/
title: Configurer les règles de visibilité
---
# Configurer les règles de visibilité

Les Visibility Rules sont un ensemble de conditions qui détermine si un **menu** ou un **élément de menu** s''affiche pour un visiteur spécifique — selon le dispositif, le contenu du panier, le calendrier, le marché, les étiquettes clients ou les clients B2B — s''appliquant aux deux niveaux avec exactement un ensemble de règles.

---

## Où les configurer

- **Niveau élément de menu** : ouvrez **Edit item** → groupe **Visibility** → cliquez sur **Setup the Visibility rules**. *(Le groupe Visibility se trouve dans un bloc rétracté — si vous ne le voyez pas immédiatement, cliquez sur **See more** pour l''expander.)*
- **Niveau menu** : ouvrez le panneau **Setting** du menu → carte **Visibility Rules**.

À partir de là, toutes les conditions, syntaxes et la façon dont elles se combinent sont **partagées** pour les deux niveaux — seule la localisation diffère.

> Market / Customer tag / B2B s''appliquent uniquement à **Shopify** et sont actuellement des champs de texte libre (pas de menu déroulant prédéfini) — chaque champ dispose d''un lien **"View your Markets"** / **"Manage customer tags"** / **"Manage B2B companies"** qui vous dirige directement vers la page Shopify Admin correspondante pour vérifier la valeur exacte avant de taper.

---

## Conditions soutenues

| Condition | Plan | Afficher quand | Valeur d''entrée |
|---|---|---|---|
| **Device** | Business et supérieur | Correspond au dispositif sélectionné | `All devices` / `Mobile only` / `Desktop only` |
| **Page / URL** | Business et supérieur | Type de page correct ou URL contient/ne contient pas de mot-clé | Cochez les types de page (Home/Products/Collections/Pages/Blogs/Others) + 2 champs de mot-clé |
| **Cart contents** | Business et supérieur | Le panier contient N produits ou plus | Nombre entier, par ex. `1` |
| **Schedule** | Business et supérieur | Dans une plage de dates définie | Date de début → Date de fin (vérifié selon l''heure du dispositif du visiteur) |
| **Referrer / campaign** | Business et supérieur | L''URL de référence contient du texte | Par ex. `instagram.com` ou `utm_campaign=summer` |
| **Market / Country** | Elite | Le visiteur navigue sous le marché sélectionné | Handle du marché, plusieurs valeurs séparées par des virgules : `us, ca` |
| **Customer tag** | Elite | Le visiteur connecté possède l''étiquette | Une étiquette unique, par ex. `vip` |
| **B2B customer** | Elite | Le visiteur connecté utilise un compte B2B | Interrupteur marche/arrêt |

> ⚠️ Les conditions au **niveau menu** ne s''appliquent actuellement **pas à Mobile Menu (Slide)** — si vous définissez des Visibility Rules sur un Mobile Menu, elles n''ont aucun effet lors de l''affichage en magasin. Les conditions au **niveau élément** (à l''intérieur du Mobile Menu) fonctionnent normalement. Nous corrigeons cette limitation.

---

## Comment les conditions se combinent

Toutes les conditions activées doivent **toutes correspondre** pour que le menu/élément s''affiche — une seule condition non remplie le masque immédiatement. Les conditions vides sont ignorées et ne comptent pas.

Par exemple, activer à la fois Device = Mobile only **et** Schedule = 01/09–15/09 : affiche uniquement aux visiteurs sur téléphones mobiles, **et** uniquement pendant ces 2 semaines exactes.

<div align="center">

<svg viewBox="0 0 680 300" width="100%" style="max-width:640px;font-family:-apple-system,Segoe UI,Roboto,sans-serif" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="vrArrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#1a7a4f"/>
    </marker>
    <marker id="vrArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#dc2626"/>
    </marker>
  </defs>

  <rect x="150" y="10" width="180" height="30" rx="15" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="30" font-size="12.5" text-anchor="middle" fill="#1a1d21">Le visiteur arrive sur la page</text>

  <line x1="240" y1="40" x2="240" y2="58" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="60" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="86" font-size="12.5" text-anchor="middle" fill="#1a1d21">Device — correspond au dispositif sélectionné ?</text>

  <line x1="240" y1="104" x2="240" y2="122" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="124" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="150" font-size="12.5" text-anchor="middle" fill="#1a1d21">Page/URL, Cart, Schedule, Referrer — conditions remplies ?</text>

  <line x1="240" y1="168" x2="240" y2="186" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="60" y="188" width="360" height="44" rx="8" fill="#f8f9fa" stroke="#e6e8eb"/>
  <text x="240" y="214" font-size="12.5" text-anchor="middle" fill="#1a1d21">Market, Tag, B2B (plan Elite) — correspond à ce visiteur ?</text>

  <line x1="240" y1="232" x2="240" y2="250" stroke="#1a7a4f" stroke-width="1.5" marker-end="url(#vrArrowGreen)"/>

  <rect x="150" y="252" width="180" height="34" rx="17" fill="#1a7a4f"/>
  <text x="240" y="274" font-size="13" font-weight="600" text-anchor="middle" fill="#fff">Afficher</text>

  <rect x="470" y="55" width="160" height="182" rx="10" fill="#fef2f2" stroke="#fecaca"/>
  <text x="550" y="140" font-size="16" font-weight="700" text-anchor="middle" fill="#b91c1c">Masquer</text>
  <text x="550" y="158" font-size="11" text-anchor="middle" fill="#b91c1c">immédiatement</text>

  <line x1="420" y1="82" x2="470" y2="82" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="76" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="146" x2="470" y2="146" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="140" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>

  <line x1="420" y1="210" x2="470" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#vrArrowRed)"/>
  <text x="440" y="204" font-size="11" text-anchor="middle" fill="#dc2626">✗</text>
</svg>

</div>

*Une seule condition activée qui échoue (branche droite ✗) masque immédiatement le menu/élément — indépendamment du fait que d''autres conditions réussissent. Les conditions vides (non activées) sont ignorées et omises.*

---

## 5 exemples concrets

### 1. Gros et détail à la fois, masquer les prix de gros aux clients au détail (niveau menu)

Votre boutique vend à la fois en gros et au détail. Les clients de gros (avec un compte B2B approuvé par Shopify) achètent à de meilleurs prix et ont leur propre groupe produit/collection. Vous voulez un groupe de menu "Prix de gros", "Commandes de gros rapides", "Produits en gros" — affichage uniquement aux clients de gros, tandis que les visiteurs au détail ne voient aucun tel menu (éviter la confusion des prix et masquer les remises).

**Comment faire :** Construisez un menu séparé (ou groupe de menu) contenant des liens de gros. Allez à **Setting → Visibility Rules**, activez **B2B customer**. Résultat : ce menu entier s''affiche uniquement pour les visiteurs connectés avec des comptes B2B ; les clients au détail (même s''ils sont connectés) ne verront pas ce menu en naviguant.

### 2. Banner de promotion à durée limitée, affichage uniquement pendant l''achat (niveau élément)

Vous voulez un banner « Livraison gratuite à partir de 50€ » s''affichant uniquement pendant la vente, et uniquement pour les clients qui ont ajouté au moins un produit à leur panier (éviter de distraire les nouveaux visitants à l''arrivée).

**Comment faire :** Sur l''élément banner, cliquez sur **Setup the Visibility rules** → activez **Cart contents** = `1`, et **Schedule** = dates de début/fin de vente.

### 3. Lien d''offre exclusif pour les clients VIP (niveau élément)

Vous voulez un élément de menu "Offres VIP" visible uniquement pour les clients marqués VIP, tandis que les clients réguliers ne savent même pas qu''il existe.

**Comment faire :** Marquez le groupe de clients VIP via Shopify Flow/Customer Segment (Segment → Flow "Customer enters segment" → appliquer l''étiquette). Sur l''élément, cliquez sur **Setup the Visibility rules** → activez **Customer tag** = `vip`.

### 4. Tab Bar Premium pour les clients VIP (niveau menu)

Votre boutique souhaite que les clients VIP aient une expérience de navigation différente — fond sombre, effets brillants, sensation premium — au lieu de partager l''interface standard avec tout le monde.

**Comment faire :** Construisez une Tab Bar séparée avec un modèle sombre premium, publiez-la à la même position de Tab Bar que votre boutique utilise par défaut. Allez à **Setting → Visibility Rules**, activez **Customer tag** = `vip` (marquer via Shopify Flow/Customer Segment comme dans l''exemple 3). Résultat : les clients marqués VIP voient la Tab Bar premium ; les clients réguliers voient toujours votre Tab Bar standard. *(Mobile Menu utilise la même approche — mais consultez d''abord la note de limitation de Mobile Menu (Slide) ci-dessus.)*

### 5. FAB incite à la vente additionnelle juste quand le client ajoute le premier article (niveau menu)

Le client vient d''ajouter son premier produit au panier — le moment décisif — et vous voulez qu''un bouton flottant (FAB) avec des infos de promotion s''affiche ("achetez plus pour débloquer la livraison gratuite", cadeau gratuit...) pour le pousser plus vite vers le paiement, au lieu que le FAB soit toujours affiché et désordonne la vue dès le départ.

**Comment faire :** Construisez un FAB (Floating Button) avec du contenu promotionnel. Allez à **Setting → Visibility Rules**, activez **Cart contents** = `1` (affichage uniquement quand le panier a 1+ produits). Résultat : le FAB reste masqué jusqu''à ce qu''un client ajoute le premier produit à son panier. *Note : la condition vérifie uniquement le NOMBRE de produits dans le panier, pas la valeur de la commande — "50€+ débloque la livraison gratuite" est le texte marketing que vous écrivez dans le FAB lui-même, pas une Visibility Rule qui calcule selon le prix.*

---
