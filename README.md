# Dis-moi Tout

Jeu de révision orale en informatique. Tu choisis un ou plusieurs thèmes, un concept tombe au hasard, et tu as un temps limité (30 s à 2 min) pour dire à voix haute tout ce que tu sais dessus. À la fin du chrono, les points clés s'affichent et tu te notes : à revoir, moyen ou maîtrisé.

- 10 thèmes, environ 250 concepts : Dev Full Stack, IA & ML, Data Science, Cybersécurité, DevOps & Cloud, Bases de données, Algo & Structures, Réseaux, Systèmes & OS, Archi & Génie logiciel
- Mode « à revoir » pour retravailler ses points faibles
- Concepts perso (`concept | point clé, point clé`)
- Mode multijoueur en se passant le téléphone, avec scores
- PWA : s'installe sur l'écran d'accueil et marche hors ligne
- Aucune donnée envoyée : tout reste dans le `localStorage` du navigateur

## Lancer en local

Le service worker demande un serveur HTTP (pas `file://`) :

```bash
python -m http.server 8000
```

puis ouvrir http://localhost:8000.

## Ajouter des concepts

Les concepts sont dans l'objet `RAW` de `index.html`, une ligne par concept : `Nom du concept|point clé, point clé, ...`.

Après une modification, change `CACHE` dans `sw.js` (`dis-moi-tout-v2`, etc.) pour que les téléphones récupèrent la nouvelle version.
