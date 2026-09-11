---
description: "Comment Navi+ livre votre menu via deux réseaux de diffusion de contenu indépendants pour qu'il reste en ligne, et ce que fait l'option « Use a second CDN (BunnyCDN) » de l'app embed — y compris lorsque des visiteurs de certaines régions ne peuvent pas joindre Cloudflare."
lang: fr
layout: default
permalink: /fr/docs/frequently-asked-questions/second-cdn-bunnycdn/
title: "Comment Navi+ garde votre menu en ligne — l'option « Use a second CDN (BunnyCDN) »"
---
# Comment Navi+ garde votre menu en ligne — l'option « Use a second CDN (BunnyCDN) »

Votre menu n'est pas stocké dans votre thème. À chaque chargement de page, le navigateur récupère quelques petits fichiers auprès de Navi+ : le moteur du menu, ses styles et les données de votre menu. La provenance de ces fichiers détermine si le menu s'affiche, et à quelle vitesse. Cette page explique comment fonctionne cette livraison, comment elle est protégée contre les pannes et ce que change la case **Use a second CDN (BunnyCDN)** de l'app embed Shopify.

---

## Deux réseaux, un seul menu

Navi+ sert les fichiers du menu via un réseau de diffusion de contenu (CDN) : un ensemble de serveurs répartis dans le monde qui conservent des copies des mêmes fichiers, afin que chaque visiteur soit servi depuis un emplacement proche de lui.

Pour qu'un problème sur un réseau ne puisse jamais faire tomber votre menu, les mêmes fichiers sont conservés sur **deux réseaux indépendants**, exploités par deux fournisseurs différents :

| Réseau | Fournisseur | Rôle |
|---|---|---|
| Réseau principal | Cloudflare | Sert toutes les boutiques par défaut. |
| Second réseau | BunnyCDN | Conserve une copie identique, rafraîchie à chaque version de Navi+. Prend le relais quand le réseau principal ne peut pas livrer. |

Chaque fournisseur exploite sa propre infrastructure mondiale avec ses propres engagements de disponibilité. Comme les deux ne partagent aucun serveur, un incident d'un côté laisse l'autre intact : le menu ne dépend jamais du maintien en service d'une seule entreprise.

---

## Comment se déroule un chargement de page par défaut

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
  <text x="95" y="150" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Navigateur du visiteur</text>
  <text x="95" y="172" text-anchor="middle" font-size="12" fill="#4b5563">ouvre votre boutique</text>
  <text x="95" y="190" text-anchor="middle" font-size="12" fill="#4b5563">le script de démarrage Navi+ s'exécute</text>

  <rect x="290" y="40" width="200" height="100" rx="10" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="390" y="66" text-anchor="middle" font-size="14" font-weight="600" fill="#9a3412">Réseau principal</text>
  <text x="390" y="86" text-anchor="middle" font-size="12" fill="#7c2d12">Cloudflare</text>
  <text x="390" y="110" text-anchor="middle" font-size="11" fill="#7c2d12">moteur du menu · styles · données du menu</text>
  <text x="390" y="126" text-anchor="middle" font-size="11" fill="#7c2d12">servis depuis l'emplacement le plus proche</text>

  <rect x="290" y="200" width="200" height="100" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="390" y="226" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Second réseau</text>
  <text x="390" y="246" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN</text>
  <text x="390" y="270" text-anchor="middle" font-size="11" fill="#1e40af">copie identique de chaque fichier</text>
  <text x="390" y="286" text-anchor="middle" font-size="11" fill="#1e40af">rafraîchie à chaque version de Navi+</text>

  <rect x="560" y="120" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="152" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Le menu apparaît</text>
  <text x="630" y="174" text-anchor="middle" font-size="12" fill="#047857">sur la page</text>

  <path d="M170,150 C230,150 230,90 290,90" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="222" y="108" text-anchor="middle" font-size="11" fill="#374151">1. demander les fichiers</text>

  <path d="M490,90 C530,90 530,150 560,150" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#cdnArrow)"/>
  <text x="522" y="108" text-anchor="middle" font-size="11" fill="#374151">2. livrer</text>

  <path d="M170,180 C230,180 230,250 290,250" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>
  <text x="222" y="230" text-anchor="middle" font-size="11" fill="#dc2626">si un fichier échoue →</text>
  <text x="222" y="244" text-anchor="middle" font-size="11" fill="#dc2626">nouvel essai automatique</text>

  <path d="M490,250 C530,250 530,180 560,180" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4" marker-end="url(#cdnArrowRed)"/>

  <path d="M390,140 L390,200" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="404" y="174" font-size="10" fill="#6b7280">synchronisés</text>
</svg>

</div>

1. L'app embed Navi+ de votre thème exécute un minuscule script de démarrage.
2. Le script de démarrage demande au **réseau principal** le moteur du menu, ses styles et les données de votre menu.
3. Le menu apparaît.

Si l'un de ces fichiers n'arrive pas depuis le réseau principal — panne, délai dépassé, problème régional — le script de démarrage **réessaie automatiquement le même fichier depuis BunnyCDN**. Cela se fait tout seul, dans le navigateur du visiteur, sans rien à configurer de votre côté. En pratique, la mauvaise journée d'un seul réseau reste invisible pour vos clients.

---

## Le seul cas que le nouvel essai automatique ne peut pas couvrir

Le nouvel essai automatique se trouve dans le script de démarrage. Cela crée un angle mort : si le **script de démarrage lui-même** n'arrive jamais, rien ne s'exécute, et il ne reste rien à réessayer.

Cela se produit lorsque la connexion d'un visiteur ne peut pas du tout joindre le réseau principal. Cloudflare est l'un des plus grands réseaux d'internet, mais il n'est pas joignable de partout :

- Certains pays restreignent ou bride le trafic Cloudflare au niveau national.
- Certains réseaux d'entreprise ou d'école le bloquent dans le cadre de leur filtrage web.
- Certains fournisseurs d'accès routent mal vers Cloudflare dans certaines régions, et les requêtes expirent.

Pour une boutique dont les clients se trouvent surtout dans l'un de ces endroits, un menu qui fonctionne parfaitement chez vous peut manquer chez eux — et le nouvel essai automatique n'a jamais l'occasion d'aider.

---

## Ce que fait « Use a second CDN (BunnyCDN) »

Activer l'option inverse la priorité, de sorte que le menu ne dépend plus du tout du réseau principal :

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
  <text x="95" y="135" text-anchor="middle" font-size="14" font-weight="600" fill="#111827">Navigateur du visiteur</text>
  <text x="95" y="157" text-anchor="middle" font-size="12" fill="#4b5563">ouvre votre boutique</text>
  <text x="95" y="175" text-anchor="middle" font-size="12" fill="#4b5563">script de démarrage demandé deux fois</text>

  <rect x="290" y="30" width="200" height="80" rx="10" fill="#fafafa" stroke="#d1d5db" stroke-width="1.5"/>
  <text x="390" y="56" text-anchor="middle" font-size="14" font-weight="600" fill="#6b7280">Réseau principal</text>
  <text x="390" y="76" text-anchor="middle" font-size="12" fill="#6b7280">Cloudflare</text>
  <text x="390" y="96" text-anchor="middle" font-size="11" fill="#6b7280">script de démarrage seulement</text>

  <rect x="290" y="150" width="200" height="120" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="390" y="176" text-anchor="middle" font-size="14" font-weight="600" fill="#1e3a8a">Second réseau</text>
  <text x="390" y="196" text-anchor="middle" font-size="12" fill="#1e40af">BunnyCDN — désormais principal</text>
  <text x="390" y="220" text-anchor="middle" font-size="11" fill="#1e40af">script de démarrage</text>
  <text x="390" y="236" text-anchor="middle" font-size="11" fill="#1e40af">moteur du menu · styles · données du menu</text>
  <text x="390" y="256" text-anchor="middle" font-size="11" fill="#1e40af">tout ce qui suit le démarrage</text>

  <rect x="560" y="105" width="140" height="90" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
  <text x="630" y="137" text-anchor="middle" font-size="14" font-weight="600" fill="#065f46">Le menu apparaît</text>
  <text x="630" y="159" text-anchor="middle" font-size="12" fill="#047857">sur la page</text>

  <path d="M170,135 C230,135 230,70 290,70" fill="none" stroke="#9ca3af" stroke-width="1.5" marker-end="url(#cdnArrow2)"/>
  <text x="222" y="90" text-anchor="middle" font-size="11" fill="#6b7280">démarrage (celui qui</text>
  <text x="222" y="104" text-anchor="middle" font-size="11" fill="#6b7280">répond en premier)</text>

  <path d="M170,165 C230,165 230,210 290,210" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>

  <path d="M490,210 C530,210 530,150 560,150" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cdnArrowBlue)"/>
  <text x="522" y="192" text-anchor="middle" font-size="11" fill="#2563eb">livrer</text>
</svg>

</div>

- Le **script de démarrage est demandé aux deux réseaux**, donc le menu démarre tant que l'un des deux est joignable depuis l'endroit où se trouve le visiteur.
- **Tout le reste** — le moteur du menu, ses styles et les données de votre menu — est chargé depuis **BunnyCDN** au lieu de Cloudflare.

Le réseau principal ne reste en jeu que comme seconde chance pour le script de démarrage ; BunnyCDN devient la source principale du menu lui-même.

---

## Quand faut-il l'activer ?

Laissez-la **désactivée**, sauf dans l'un de ces cas :

- **Le support Navi+ vous l'a demandé.** Lorsque vous signalez un menu absent pour certains visiteurs, nous vérifions où ils se trouvent et quel réseau ils peuvent joindre. Si le réseau principal est en cause, nous vous demanderons d'activer cette option.
- **Vous savez que vos clients se trouvent dans une région où Cloudflare est restreint ou peu fiable.** Si votre boutique sert principalement une telle région, BunnyCDN est pour vous le choix principal le plus sûr. Cochez l'option et prévenez-nous — nous confirmerons volontiers que le changement est correct de notre côté.

Un signe typique : le menu s'affiche pour vous et pour la plupart des visiteurs, mais des clients d'un pays précis ou d'un réseau précis signalent qu'il n'apparaît jamais.

---

## Pourquoi elle est désactivée par défaut

Les deux réseaux sont mondiaux et rapides. Pour la grande majorité des boutiques, changer n'apporte rien, et le chemin par défaut est celui que nous surveillons de plus près et sur lequel nous déployons les correctifs en premier. L'option est un outil pour les cas rares ci-dessus, pas un réglage de performance.

---

## Cela affecte-t-il la vitesse de la page ?

Aucun changement notable n'est attendu. BunnyCDN sert les mêmes fichiers depuis ses propres emplacements dans le monde. Demander le script de démarrage à deux réseaux ajoute une petite requête supplémentaire ; le moteur du menu et vos données de menu sont toujours chargés une seule fois, depuis une source unique.

---

## Comment l'activer ou la désactiver

1. Dans votre admin Shopify, ouvrez **Boutique en ligne → Thèmes → Personnaliser**.
2. Cliquez sur l'icône **Intégrations d'applications** dans la barre latérale gauche.
3. Trouvez **Navi+** et dépliez-le.
4. Sous **Advanced**, cochez ou décochez **Use a second CDN (BunnyCDN)**.
5. Cliquez sur **Enregistrer**.

Le changement s'applique au prochain chargement de page. Il n'y a rien à configurer dans l'app Navi+.

> Si le support vous a demandé de l'activer pendant l'analyse d'un problème, laissez-la activée jusqu'à ce qu'il confirme que le problème est résolu — vous pourrez ensuite la désactiver.
