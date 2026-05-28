---
description: Utilisez ChatGPT, Claude ou Gemini pour redessiner votre menu Navi+ — Navi+ génère le prompt, vous collez le résultat JSON.
lang: fr
layout: default
permalink: /fr/docs/ai/auto-design-your-ai/
title: Design automatique avec ton app IA
---
# Design automatique avec ton app IA

Redessinez votre menu avec un outil IA que vous connaissez déjà — ChatGPT, Claude ou Gemini. Navi+ prépare les données et le prompt ; il vous suffit de le faire passer dans l'IA et de rapporter le résultat. Cette fonctionnalité est **gratuite**.

Ouvrir : le bouton **AI** → carte **Design automatique avec ton app IA**.

---

## Avant de commencer — sauvegardez votre menu

> **⋮ Plus → Backup / Restore** — enregistrez votre menu actuel sous forme de fichier ou dans le cloud avant d'apporter des modifications. Ne sautez pas cette étape.

---

<div class="install-step" markdown="1">
### 1 — Entraînez votre IA

Vous avez besoin d'un outil IA en ligne. Modèles à grand contexte recommandés : **Claude Opus 4.7**, **ChatGPT GPT-5** ou **Gemini Pro 1.5**.

Cliquez sur **Open training docs**, copiez tout, et collez-le dans votre chat IA. Cela apprend à l'IA comment les menus Navi+ sont structurés.
</div>

<div class="install-step" markdown="1">
### 2 — Envoyez votre menu actuel (JSON) à l'IA

Une fois que l'IA a compris la structure de l'étape 1, envoyez-lui votre menu actuel :

- **Copiez le menu actuel dans le presse-papiers** et collez-le dans le chat, ou
- **Téléchargez le fichier JSON** et joignez-le au chat.
</div>

<div class="install-step" markdown="1">
### 3 — Donnez vos instructions de design

Tapez votre demande en langage naturel. Vous avez un contrôle total sur le design ; l'IA renvoie un nouveau menu au format JSON. Par exemple :

- Ajoute 2 éléments : Blog et Carrières.
- Change la couleur principale en bleu `#1a73e8`.
- Réduis à 4 éléments principaux, déplace le reste sous un élément Plus.
- Ajoute une icône adaptée à chaque élément et mets l'élément Promotions en gras.
- Traduis tous les noms d'éléments en anglais.
</div>

<div class="install-step" markdown="1">
### 4 — Collez le résultat et appliquez

Copiez le JSON renvoyé par l'IA, puis appliquez-le à Navi+ de l'une des deux façons suivantes :

- **Option 1 :** Collez le JSON dans la zone de saisie et cliquez sur **Apply**.
- **Option 2 :** Cliquez sur **Upload JSON file** et choisissez votre fichier `.json`.

Répétez les étapes 3 et 4 jusqu'à ce que le menu vous convienne, puis cliquez sur **Save**.
</div>

> Astuce : L'IA ne modifie que la structure et le contenu du JSON. Les champs que vous avez configurés mais n'avez pas mentionnés sont conservés — mais vérifiez tout de même le menu après l'application.

---

## Étude de cas — désencombrer une tab bar avec Claude

**Contexte :** Une boutique a une Tab Bar désordonnée de 8 éléments et souhaite la réduire à 5 éléments et ajouter des icônes, tout en conservant tous les liens existants.

1. **Sauvegardez :** ⋮ Plus → Backup / Restore → enregistrez une copie.
2. **Étape 1 — Entraînez l'IA :** Ouvrez Claude (Opus 4.7), cliquez sur **Open training docs** dans Navi+, copiez tout, et collez-le dans Claude.
3. **Étape 2 — Envoyez le menu :** Cliquez sur **Copy current menu to clipboard** et collez le JSON dans Claude.
4. **Étape 3 — Donnez des instructions :** Dites à Claude :

   ```
   Fusionne ces 8 éléments en 5 éléments principaux : Accueil, Produits,
   Promotions, Blog, Compte. Déplace les éléments restants dans des
   sous-groupes adaptés. Ajoute une icône à chaque élément de niveau 1.
   Conserve tous les liens existants inchangés.
   ```

5. **Étape 4 — Appliquez :** Claude renvoie un nouveau JSON. Copiez-le, collez-le dans la zone **Apply** de Navi+ → cliquez sur **Apply**.
6. Vérifiez : 5 éléments, icônes complètes, liens d'origine intacts. Besoin d'autres ajustements ? Répétez les étapes 3 et 4. Satisfait ? Cliquez sur **Save**.

**Résultat :** Une Tab Bar propre de 5 éléments avec icônes, tous les liens préservés — sans modifier chaque élément à la main.
