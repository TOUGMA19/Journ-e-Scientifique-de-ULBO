# Déploiement sur Vercel — JS-ULBO 2026

## Changements effectués (vs version Lovable/Cloudflare)

| Fichier | Modification |
|---|---|
| `vite.config.ts` | Remplacé `@lovable.dev/vite-tanstack-config` → `@tanstack/react-start/config` avec `preset: "vercel"` |
| `vercel.json` | Nouveau fichier — config de déploiement Vercel |
| `package.json` | Supprimé `@cloudflare/vite-plugin` et `@lovable.dev/vite-tanstack-config` |

---

## Étapes de déploiement

### 1. Ajouter vos fichiers téléchargeables

Placez vos fichiers dans `public/downloads/` avec ces noms exacts :

```
public/downloads/
├── programme-js-ulbo-2026.pdf
├── template-resume-js-ulbo-2026.docx
├── template-resume-js-ulbo-2026-latex.zip
└── affiche-js-ulbo-2026.pdf
```

### 2. Pousser sur GitHub

```bash
git init
git add .
git commit -m "Init JS-ULBO 2026 — Vercel deployment"
git remote add origin https://github.com/votre-compte/science-day-hub.git
git push -u origin main
```

### 3. Connecter à Vercel

1. Aller sur [vercel.com](https://vercel.com) → **Add New Project**
2. Importer votre dépôt GitHub
3. Vercel détecte automatiquement `vercel.json` — **aucune config manuelle**
4. Cliquer **Deploy** ✅

### 4. Variables d'environnement (si nécessaire)

Aucune variable requise pour ce projet.

---

## Tester en local avant déploiement

```bash
npm install
npm run dev      # développement
npm run build    # vérifier que le build passe
```

---

## Structure des fichiers statiques

Sur Vercel, tout ce qui est dans `public/` est servi directement :
- `public/downloads/fichier.pdf` → accessible à `https://votre-site.vercel.app/downloads/fichier.pdf`
- Les boutons de téléchargement de la page `/soumission` pointent déjà vers ces URLs.
