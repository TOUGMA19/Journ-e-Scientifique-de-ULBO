# JS-ULBO 2026 — Site officiel

Site des Vèmes Journées Scientifiques de l'Université Lédéa Bernard OUEDRAOGO.

## Stack

- React 19 + TypeScript
- TanStack Router (SPA)
- Tailwind CSS v4
- shadcn/ui

## Déploiement sur Vercel

### 1. Pousser sur GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE_COMPTE/science-day-hub.git
git push -u origin main
```

### 2. Importer sur Vercel

- Aller sur [vercel.com](https://vercel.com) → **Add New Project**
- Sélectionner le dépôt GitHub
- Les paramètres sont automatiquement détectés via `vercel.json` :
  - **Framework**: Vite
  - **Build Command**: `npm run build`
  - **Output Directory**: `dist`

### 3. Ajouter les fichiers téléchargeables

Avant de déployer, déposez vos fichiers dans `public/downloads/` :

| Fichier | Description |
|--------|-------------|
| `programme-js-ulbo-2026.pdf` | Programme officiel |
| `template-resume-js-ulbo-2026.docx` | Modèle Word |
| `template-resume-js-ulbo-2026-latex.zip` | Modèle LaTeX |

Ces fichiers seront accessibles à l'URL `/downloads/nom-du-fichier`.

## Développement local

```bash
npm install
npm run dev
```
