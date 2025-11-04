# Guide de déploiement sur GitHub Pages

## Déploiement manuel

Pour déployer le site sur GitHub Pages :

1. **Builder le projet** :
   ```bash
   npm run build
   ```

2. **Basculer sur la branche gh-pages** :
   ```bash
   git checkout gh-pages
   ```

3. **Copier le contenu de dist/** :
   ```bash
   cp -r dist/* .
   rm -rf dist
   ```

4. **Commit et push** :
   ```bash
   git add -A
   git commit -m "Deploy: mise à jour du site"
   git push origin gh-pages
   ```

5. **Retourner sur main** :
   ```bash
   git checkout main
   ```

## Configuration GitHub Pages

Dans les **Settings** du repository → **Pages** :
- Source : **Deploy from a branch**
- Branch : **gh-pages**
- Folder : **/ (root)**

Le site sera disponible sur : `https://frd100.github.io/wpc-site-astro/`

