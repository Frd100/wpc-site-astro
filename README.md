# WPC Site - HTML/CSS/JS Pur

Site web de West Paris Consulting en HTML/CSS/JavaScript pur.

## 🚀 Technologies

- **HTML5** : Structure sémantique
- **CSS3** : Styles personnalisés
- **JavaScript (ES6+)** : Interactions et animations
- **Tailwind CSS** : Framework CSS utility-first (via CDN)
- **GSAP** : Bibliothèque d'animations (via CDN)

## 📂 Structure du projet

```
├── html/              # Pages HTML (7 pages)
│   ├── index.html
│   ├── equipe.html
│   ├── contact.html
│   ├── nous-rejoindre.html
│   ├── mentions-legales.html
│   ├── confidentialite.html
│   └── exercer-mes-droits.html
├── css/               # Styles CSS
│   ├── global.css     # Styles globaux
│   └── custom.css     # Styles personnalisés
├── js/                # Scripts JavaScript
│   ├── utils.js
│   ├── button-animation.js
│   ├── header.js
│   ├── hero.js
│   ├── domaines-cards.js
│   └── timeline.js
└── public/            # Assets statiques
    ├── icons/         # Favicons
    ├── images/        # Images
    └── models/        # Modèles 3D
```

## 🖥️ Utilisation

Ouvrez directement les fichiers HTML dans votre navigateur :

```bash
open html/index.html
```

Ou utilisez un serveur local simple :

```bash
python3 -m http.server 8000
```

Puis ouvrez : `http://localhost:8000/html/index.html`

## 📄 Pages

- `index.html` - Page d'accueil
- `equipe.html` - Notre équipe
- `contact.html` - Contact
- `nous-rejoindre.html` - Nous rejoindre
- `mentions-legales.html` - Mentions légales
- `confidentialite.html` - Politique de confidentialité
- `exercer-mes-droits.html` - Exercer ses droits RGPD

## 🎨 Styles

Les styles utilisent Tailwind CSS via CDN avec des styles personnalisés dans `css/custom.css`.

Les classes GSAP (`.split-chars`, `.split-words`, etc.) sont définies dans `css/custom.css`.

## ⚡ Dépendances externes

- **Tailwind CSS** : Chargé via CDN
- **GSAP** : Chargé via CDN (inclut SplitText premium)
- **Google Fonts** : Inter et Cormorant Garamond

## 📝 Notes

- Tous les chemins sont **relatifs** pour permettre l'ouverture directe des fichiers
- Aucune dépendance npm requise
- Compatible avec tous les navigateurs modernes
