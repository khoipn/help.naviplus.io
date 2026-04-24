---
description: CSS est la clé de chaque problème lorsque vous devez personnaliser en profondeur pour Navi+. Presque toutes les choses d'interface sur Navi+ peuvent être résolues avec du code CSS. Dans Navi+, ther...
lang: fr
layout: default
permalink: /fr/docs/development/how-to-write-a-correct-css-code-in-navi/
title: Comment écrire un code CSS correct dans Navi+
---
# Comment écrire un code CSS correct dans Navi+

CSS est la clé de chaque problème lorsque vous devez personnaliser en profondeur pour Navi+. Presque toutes les choses d'interface sur Navi+ peuvent être résolues avec du code CSS. Dans Navi+, il y a 2 niveaux de CSS :

### Niveau 1 : Feuille de style interne / CSS (#SF-123456789)

C'est le niveau recommandé à utiliser dans la plupart des cas. Lorsque vous écrivez du code dans cette boîte, le système ajoute automatiquement un préfixe qui est #SF-123456789 (c'est votre ID de menu) au début des balises CSS. Cela garantira qu'il n'y a pas de conflit avec tous les autres composants d'interface.

Voir l'exemple avant et après la compilation du CSS dans cette boîte ci-dessous

```css
// Votre code CSS
{
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   {
      margin-bottom: 164px;
   }
}
```

```css
// Le code CSS après compilation

#SF-123456789 {
   margin-bottom: 64px;
}

@media only screen and (max-width: 600px) {
   #SF-123456789 {
      margin-bottom: 164px;
   }
}

```

### Niveau 2 : Feuille de style globale / CSS

À moins que vous n'ayez de l'expérience avec CSS, évitez d'abuser de cette boîte car tout sera poussé directement sous la forme dans laquelle vous écrivez le code CSS sans aucune couche de protection contre les conflits.

---

# Instructions pour l'agent : Interroger cette documentation

Si vous avez besoin d'informations supplémentaires qui ne sont pas directement disponibles sur cette page, vous pouvez interroger la documentation dynamiquement en posant une question.

Effectuez une requête HTTP GET sur l'URL de la page actuelle avec le paramètre de requête `ask` :

```
GET https://help.shopifas.com/manual/website/help.naviplus.io/development/how-to-write-a-correct-css-code-in-navi+.md?ask=<question>
```

La question doit être spécifique, autonome et écrite en langage naturel.
La réponse contiendra une réponse directe à la question et des extraits pertinents et des sources de la documentation.

Utilisez ce mécanisme lorsque la réponse n'est pas explicitement présente sur la page actuelle, que vous avez besoin de clarification ou de contexte supplémentaire, ou que vous souhaitez récupérer des sections de documentation connexes.
