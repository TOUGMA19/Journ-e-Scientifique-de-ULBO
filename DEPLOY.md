# Déploiement sur Vercel

## Pré-requis
- Compte [Vercel](https://vercel.com)
- [Node.js](https://nodejs.org) 18+ installé

## Étapes

### 1. Ajouter vos fichiers téléchargeables
Placez vos fichiers dans `public/downloads/` avec ces noms exacts :
- `programme-js-ulbo-2026.pdf`
- `template-resume-js-ulbo-2026.docx`
- `template-resume-js-ulbo-2026-latex.zip`
- `affiche-js-ulbo-2026.pdf`

### 2. Pousser sur GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/votre-user/votre-repo.git
git push -u origin main
```

### 3. Déployer sur Vercel
1. Allez sur [vercel.com/new](https://vercel.com/new)
2. Importez votre dépôt GitHub
3. Vercel détecte automatiquement Vite — laissez les paramètres par défaut :
   - **Framework** : Vite
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
4. Cliquez **Deploy**

### 4. Tester en local avant de déployer
```bash
npm install
npm run build
npm run preview
```

## Configuration Vercel (déjà incluse)
Le fichier `vercel.json` gère le routing SPA automatiquement.
Les fichiers `public/downloads/` sont servis directement à `/downloads/`.
