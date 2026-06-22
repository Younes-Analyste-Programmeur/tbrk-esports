# TBRK Esports — Landing page multilingue

Landing page statique pour Team Breakers / TBRK Esports, prête pour GitHub Pages.

## Nouveautés de la V5

Cette version est basée sur la V4 avec icônes sociales et ajoute le support de 3 langues :

- Français
- English
- العربية

Le visiteur peut changer la langue avec les boutons `FR`, `EN`, `AR` dans le menu. Le choix est sauvegardé dans le navigateur avec `localStorage`. La version arabe active automatiquement l'affichage RTL.

## Structure

```text
index.html
css/style.css
js/app.js
data/events.json
data/participants.json
data/socials.json
assets/images/
```

## Modifier les liens sociaux

Ouvre :

```text
data/socials.json
```

Remplace les liens fictifs par tes vrais liens :

```json
{
  "discord": "https://discord.gg/ton-invitation",
  "youtube": "https://www.youtube.com/@tonhandle",
  "tiktok": "https://www.tiktok.com/@tonhandle",
  "facebook": "https://www.facebook.com/tonhandle",
  "instagram": "https://www.instagram.com/tonhandle"
}
```

## Modifier le formulaire d'inscription

Ouvre :

```text
data/events.json
```

Puis remplace :

```json
"formUrl": ""
```

par ton lien Google Forms :

```json
"formUrl": "https://forms.gle/ton-vrai-lien"
```

Tant que `formUrl` est vide, le site affiche un bouton désactivé comme `Formulaire à venir`, `Form coming soon` ou `النموذج قريباً` selon la langue.

## Modifier les textes de l'événement en 3 langues

Dans `data/events.json`, les textes principaux de l'événement sont dans le bloc `i18n` :

```json
"i18n": {
  "fr": {
    "description": "Texte français"
  },
  "en": {
    "description": "English text"
  },
  "ar": {
    "description": "النص العربي"
  }
}
```

Tu peux modifier seulement le texte de la langue souhaitée. Garde les clés `fr`, `en`, `ar`.

## Modifier les participants

Ouvre :

```text
data/participants.json
```

Tu peux garder un vrai gamertag identique dans les trois langues :

```json
"name": "MonGamertag"
```

Ou utiliser une forme multilingue :

```json
"name": {
  "fr": "Joueur 01",
  "en": "Player 01",
  "ar": "لاعب 01"
}
```

La même logique fonctionne pour `tag`, `role`, `squad` et `status`.

## Modifier les textes généraux du site

Les textes fixes de l'interface, par exemple la navigation, les titres de sections, la FAQ et les notes, sont dans :

```text
js/app.js
```

Cherche le bloc :

```js
const translations = {
  fr: { ... },
  en: { ... },
  ar: { ... }
};
```

## Déploiement GitHub Pages

1. Crée un dépôt GitHub public.
2. Dépose le contenu de ce dossier à la racine du dépôt.
3. Va dans `Settings > Pages`.
4. Choisis `Deploy from a branch`.
5. Branche : `main`.
6. Dossier : `/root`.
7. Sauvegarde.

Important : `index.html` doit être à la racine du dépôt.

Bonne structure :

```text
index.html
css/
js/
data/
assets/
```

Mauvaise structure :

```text
tbrk-landing-page/index.html
```

## Domaine personnalisé

Après avoir confirmé que l'URL GitHub Pages fonctionne, tu peux connecter ton domaine acheté chez WHC depuis `Settings > Pages > Custom domain`.
