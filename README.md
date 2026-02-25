# القرآن الكريم — Lecteur du Coran

Application de lecture du Coran avec traduction **mot à mot** en français, construite avec **Vite + React**.

## Fonctionnalités

- 📖 Traduction mot à mot sous chaque mot arabe
- 🔤 Translittération phonétique
- 🌙 Design sombre doré inspiré des manuscrits islamiques
- 📱 Responsive (mobile + desktop)
- ⚡ 100% hors-ligne, aucune API externe
- 🎨 Navigation par panneau latéral animé
- ✨ Animations fluides au chargement

## Sourates disponibles

| N° | Nom arabe | Nom français |
|----|-----------|--------------|
| 1 | الفاتحة | L'Ouverture |
| 36 | يس | Yâ-Sîn |
| 55 | الرحمن | Le Tout Miséricordieux |
| 67 | الملك | La Royauté |
| 112 | الإخلاص | La Sincérité |
| 113 | الفلق | L'Aube naissante |
| 114 | الناس | Les Hommes |

## Installation & lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev

# 3. Build pour la production
npm run build
```

## Structure du projet

```
src/
├── data/
│   └── quran.js          ← Données coraniques (arabe + translittération + français)
├── components/
│   ├── Word.jsx           ← Affichage d'un mot (arabe / translit / français)
│   ├── Word.module.css
│   ├── Verse.jsx          ← Verset complet avec tous ses mots
│   ├── Verse.module.css
│   ├── SurahHeader.jsx    ← En-tête de la sourate
│   ├── SurahHeader.module.css
│   ├── Sidebar.jsx        ← Navigation latérale
│   └── Sidebar.module.css
├── App.jsx
├── App.module.css
├── index.css
└── main.jsx
```

## Ajouter de nouvelles sourates

Dans `src/data/quran.js`, ajoutez une entrée dans l'objet `SURAHS` :

```js
99: {
  number: 99,
  nameAr: 'الزلزلة',
  nameFr: 'Le Séisme',
  nameEn: 'Az-Zalzala',
  revelation: 'Médinoise',
  verses: [
    {
      number: 1,
      words: [
        { ar: 'إِذَا', tr: 'idhā', fr: 'quand' },
        { ar: 'زُلْزِلَتِ', tr: 'zulzilati', fr: 'sera ébranlée' },
        { ar: 'الْأَرْضُ', tr: "l-arḍu", fr: 'la terre' },
        { ar: 'زِلْزَالَهَا', tr: 'zilzālahā', fr: 'de son ébranlement' },
      ],
      translation: "Quand la Terre sera ébranlée d'un violent tremblement,",
    },
    // ...
  ],
}
```

N'oubliez pas d'ajouter aussi dans `SURAH_LIST` :

```js
{ n: 99, label: '99 · Az-Zalzala', nameAr: 'الزلزلة', nameFr: 'Le Séisme' },
```

## Technologies

- [Vite](https://vitejs.dev/) — build ultra-rapide
- [React 18](https://react.dev/) — UI
- [CSS Modules](https://vitejs.dev/guide/features.html#css-modules) — styles scopés
- [Scheherazade New](https://fonts.google.com/specimen/Scheherazade+New) — police arabe
- [Crimson Pro](https://fonts.google.com/specimen/Crimson+Pro) — police latine
