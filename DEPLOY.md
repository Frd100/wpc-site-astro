# Guide de déploiement sur GitHub Pages

## Déploiement manuel (HTML/CSS/JS pur)

Pour déployer le site sur GitHub Pages, il suffit de copier les fichiers directement :

### Méthode 1 : Branche gh-pages

1. **Basculer sur la branche gh-pages** :
   ```bash
   git checkout gh-pages
   ```
   (ou créer la branche si elle n'existe pas : `git checkout --orphan gh-pages`)

2. **Copier les fichiers nécessaires** :
   ```bash
   # Depuis la branche main
   git checkout main
   cp -r html/* .
   cp -r css .
   cp -r js .
   cp -r public .
   ```

3. **Commit et push** :
   ```bash
   git add -A
   git commit -m "Deploy: mise à jour du site"
   git push origin gh-pages
   ```

4. **Retourner sur main** :
   ```bash
   git checkout main
   ```

### Méthode 2 : Déployer depuis la racine (plus simple)

Si vous configurez GitHub Pages pour utiliser la branche `main` et le dossier `/html` :

1. Dans les **Settings** du repository → **Pages** :
   - Source : **Deploy from a branch**
   - Branch : **main**
   - Folder : **/html**

2. Les fichiers seront servis directement depuis `html/`

⚠️ **Note** : Il faudra ajuster les chemins dans les fichiers HTML pour qu'ils soient relatifs à la racine du site (pas `../css` mais `/css`).

## Configuration GitHub Pages recommandée

Dans les **Settings** du repository → **Pages** :
- Source : **Deploy from a branch**
- Branch : **gh-pages**
- Folder : **/ (root)**

Le site sera disponible sur : `https://frd100.github.io/wpc-site-astro/`

## Structure de déploiement

Les fichiers suivants doivent être à la racine de gh-pages :
```
gh-pages/
├── index.html
├── equipe.html
├── contact.html
├── nous-rejoindre.html
├── mentions-legales.html
├── confidentialite.html
├── exercer-mes-droits.html
├── css/
│   ├── global.css
│   └── custom.css
├── js/
│   ├── utils.js
│   ├── button-animation.js
│   ├── header.js
│   ├── hero.js
│   ├── domaines-cards.js
│   └── timeline.js
└── public/
    ├── icons/
    ├── images/
    └── models/
```
