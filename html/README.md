# Structure HTML/CSS/JS

Ce projet utilise maintenant du HTML/CSS/JS pur, sans Astro.

## Structure

```
html/
  ├── index.html          # Page d'accueil
  ├── equipe.html         # Page équipe (à créer)
  ├── contact.html        # Page contact (à créer)
  ├── nous-rejoindre.html # Page nous rejoindre (à créer)
  └── ...

css/
  ├── global.css          # Styles globaux
  └── custom.css          # Styles personnalisés

js/
  ├── utils.js            # Utilitaires GSAP
  ├── button-animation.js # Animation des boutons
  ├── header.js           # Navigation
  └── hero.js             # Section hero

public/                   # Assets (images, icons, etc.)
```

## Utilisation

1. **Ouvrir directement les fichiers HTML** dans un navigateur
2. **Ou utiliser un serveur local** :
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve html
   
   # PHP
   php -S localhost:8000 -t html
   ```

## Dépendances externes

- **Tailwind CSS** : Via CDN (dans le HTML)
- **GSAP** : Via CDN (dans le HTML)
- **Google Fonts** : Via CDN (dans le HTML)

## Prochaines étapes

1. Créer les autres pages HTML (equipe, contact, etc.)
2. Tester toutes les animations
3. Optimiser les performances si nécessaire

