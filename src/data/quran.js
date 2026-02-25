// Données Coraniques — traduction mot à mot (arabe / translittération / français)
// Source : Traduction Hamidullah, translittération phonétique

export const SURAHS = {
  1: {
    number: 1,
    nameAr: 'الفاتحة',
    nameFr: "L'Ouverture",
    nameEn: 'Al-Fatiha',
    revelation: 'Mecquoise',
    verses: [
      {
        number: 1,
        words: [
          { ar: 'بِسْمِ', tr: 'bismi', fr: 'au nom' },
          { ar: 'اللَّهِ', tr: 'llāhi', fr: "d'Allah" },
          { ar: 'الرَّحْمَٰنِ', tr: 'r-raḥmāni', fr: 'le Tout Miséricordieux' },
          { ar: 'الرَّحِيمِ', tr: 'r-raḥīmi', fr: 'le Très Miséricordieux' },
        ],
        translation: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
      },
      {
        number: 2,
        words: [
          { ar: 'الْحَمْدُ', tr: 'al-ḥamdu', fr: 'toute louange' },
          { ar: 'لِلَّهِ', tr: 'lillāhi', fr: 'à Allah' },
          { ar: 'رَبِّ', tr: 'rabbi', fr: 'Seigneur' },
          { ar: 'الْعَالَمِينَ', tr: "l-ʿālamīna", fr: 'des mondes' },
        ],
        translation: "Toute louange est due à Allah, Seigneur de l'univers.",
      },
      {
        number: 3,
        words: [
          { ar: 'الرَّحْمَٰنِ', tr: 'r-raḥmāni', fr: 'le Tout Miséricordieux' },
          { ar: 'الرَّحِيمِ', tr: 'r-raḥīmi', fr: 'le Très Miséricordieux' },
        ],
        translation: 'Le Tout Miséricordieux, le Très Miséricordieux,',
      },
      {
        number: 4,
        words: [
          { ar: 'مَالِكِ', tr: 'māliki', fr: 'Maître' },
          { ar: 'يَوْمِ', tr: 'yawmi', fr: 'du Jour' },
          { ar: 'الدِّينِ', tr: 'd-dīni', fr: 'du Jugement' },
        ],
        translation: 'Maître du Jour de la rétribution.',
      },
      {
        number: 5,
        words: [
          { ar: 'إِيَّاكَ', tr: 'iyyāka', fr: 'Toi seul' },
          { ar: 'نَعْبُدُ', tr: "naʿbudu", fr: 'nous adorons' },
          { ar: 'وَإِيَّاكَ', tr: 'wa-iyyāka', fr: 'et Toi seul' },
          { ar: 'نَسْتَعِينُ', tr: "nastaʿīnu", fr: 'nous implorons' },
        ],
        translation: "C'est Toi Seul que nous adorons, et c'est Toi Seul dont nous implorons secours.",
      },
      {
        number: 6,
        words: [
          { ar: 'اهْدِنَا', tr: 'ihdinā', fr: 'guide-nous' },
          { ar: 'الصِّرَاطَ', tr: 'ṣ-ṣirāṭa', fr: 'le chemin' },
          { ar: 'الْمُسْتَقِيمَ', tr: 'l-mustaqīma', fr: 'droit' },
        ],
        translation: 'Guide-nous dans le droit chemin,',
      },
      {
        number: 7,
        words: [
          { ar: 'صِرَاطَ', tr: 'ṣirāṭa', fr: 'le chemin' },
          { ar: 'الَّذِينَ', tr: 'lladhīna', fr: 'de ceux' },
          { ar: 'أَنْعَمْتَ', tr: "anʿamta", fr: 'que Tu as comblés' },
          { ar: 'عَلَيْهِمْ', tr: "ʿalayhim", fr: 'de bienfaits' },
          { ar: 'غَيْرِ', tr: 'ghayri', fr: 'non pas' },
          { ar: 'الْمَغْضُوبِ', tr: 'l-maghḍūbi', fr: 'des courroucés' },
          { ar: 'عَلَيْهِمْ', tr: "ʿalayhim", fr: 'sur eux' },
          { ar: 'وَلَا', tr: 'wa-lā', fr: 'ni' },
          { ar: 'الضَّالِّينَ', tr: 'ḍ-ḍāllīna', fr: 'des égarés' },
        ],
        translation:
          "Le chemin de ceux que Tu as comblés de faveurs, non pas ceux qui ont encouru Ta colère, ni les égarés.",
      },
    ],
  },

  112: {
    number: 112,
    nameAr: 'الإخلاص',
    nameFr: 'La Sincérité',
    nameEn: 'Al-Ikhlas',
    revelation: 'Mecquoise',
    verses: [
      {
        number: 1,
        words: [
          { ar: 'قُلْ', tr: 'qul', fr: 'dis' },
          { ar: 'هُوَ', tr: 'huwa', fr: 'Il est' },
          { ar: 'اللَّهُ', tr: 'llāhu', fr: 'Allah' },
          { ar: 'أَحَدٌ', tr: 'aḥad', fr: "l'Unique" },
        ],
        translation: "Dis : « Il est Allah, [le] Un. »",
      },
      {
        number: 2,
        words: [
          { ar: 'اللَّهُ', tr: 'llāhu', fr: 'Allah' },
          { ar: 'الصَّمَدُ', tr: 'ṣ-ṣamad', fr: "l'Absolu" },
        ],
        translation: "Allah, le Seul à être imploré pour ce que nous désirons.",
      },
      {
        number: 3,
        words: [
          { ar: 'لَمْ', tr: 'lam', fr: "Il n'a" },
          { ar: 'يَلِدْ', tr: 'yalid', fr: 'pas engendré' },
          { ar: 'وَلَمْ', tr: 'wa-lam', fr: "et n'a" },
          { ar: 'يُولَدْ', tr: 'yūlad', fr: 'pas été engendré' },
        ],
        translation: "Il n'a pas engendré, et n'a pas été engendré,",
      },
      {
        number: 4,
        words: [
          { ar: 'وَلَمْ', tr: 'wa-lam', fr: "et il n'y a" },
          { ar: 'يَكُن', tr: 'yakun', fr: 'pas' },
          { ar: 'لَّهُ', tr: 'lahu', fr: 'pour Lui' },
          { ar: 'كُفُوًا', tr: 'kufuwan', fr: "d'égal" },
          { ar: 'أَحَدٌ', tr: 'aḥad', fr: 'aucun' },
        ],
        translation: "Et il n'y a personne qui Lui soit égal. »",
      },
    ],
  },

  113: {
    number: 113,
    nameAr: 'الفلق',
    nameFr: "L'Aube naissante",
    nameEn: 'Al-Falaq',
    revelation: 'Mecquoise',
    verses: [
      {
        number: 1,
        words: [
          { ar: 'قُلْ', tr: 'qul', fr: 'dis' },
          { ar: 'أَعُوذُ', tr: "aʿūdhu", fr: 'je cherche refuge' },
          { ar: 'بِرَبِّ', tr: 'bi-rabbi', fr: 'auprès du Seigneur' },
          { ar: 'الْفَلَقِ', tr: 'l-falaqi', fr: "de l'aube" },
        ],
        translation: "Dis : « Je cherche refuge auprès du Seigneur de l'aube naissante,",
      },
      {
        number: 2,
        words: [
          { ar: 'مِن', tr: 'min', fr: 'contre' },
          { ar: 'شَرِّ', tr: 'sharri', fr: 'le mal' },
          { ar: 'مَا', tr: 'mā', fr: 'de ce' },
          { ar: 'خَلَقَ', tr: 'khalaqa', fr: "qu'Il a créé" },
        ],
        translation: "contre le mal de ce qu'Il a créé,",
      },
      {
        number: 3,
        words: [
          { ar: 'وَمِن', tr: 'wa-min', fr: 'et contre' },
          { ar: 'شَرِّ', tr: 'sharri', fr: 'le mal' },
          { ar: 'غَاسِقٍ', tr: 'ghāsiqin', fr: 'de la nuit' },
          { ar: 'إِذَا', tr: 'idhā', fr: 'quand' },
          { ar: 'وَقَبَ', tr: 'waqaba', fr: "elle s'obscurcit" },
        ],
        translation: "contre le mal de la nuit quand elle s'obscurcit,",
      },
      {
        number: 4,
        words: [
          { ar: 'وَمِن', tr: 'wa-min', fr: 'et contre' },
          { ar: 'شَرِّ', tr: 'sharri', fr: 'le mal' },
          { ar: 'النَّفَّاثَاتِ', tr: 'n-naffāthāti', fr: 'des souffleuses' },
          { ar: 'فِي', tr: 'fī', fr: 'dans' },
          { ar: 'الْعُقَدِ', tr: "l-ʿuqadi", fr: 'les nœuds' },
        ],
        translation: "contre le mal des souffleuses dans les nœuds,",
      },
      {
        number: 5,
        words: [
          { ar: 'وَمِن', tr: 'wa-min', fr: 'et contre' },
          { ar: 'شَرِّ', tr: 'sharri', fr: 'le mal' },
          { ar: 'حَاسِدٍ', tr: 'ḥāsidin', fr: "de l'envieux" },
          { ar: 'إِذَا', tr: 'idhā', fr: 'quand' },
          { ar: 'حَسَدَ', tr: 'ḥasada', fr: 'il envie' },
        ],
        translation: "et contre le mal de l'envieux quand il envie. »",
      },
    ],
  },

  114: {
    number: 114,
    nameAr: 'الناس',
    nameFr: 'Les Hommes',
    nameEn: 'An-Nas',
    revelation: 'Mecquoise',
    verses: [
      {
        number: 1,
        words: [
          { ar: 'قُلْ', tr: 'qul', fr: 'dis' },
          { ar: 'أَعُوذُ', tr: "aʿūdhu", fr: 'je cherche refuge' },
          { ar: 'بِرَبِّ', tr: 'bi-rabbi', fr: 'auprès du Seigneur' },
          { ar: 'النَّاسِ', tr: 'n-nāsi', fr: 'des hommes' },
        ],
        translation: "Dis : « Je cherche refuge auprès du Seigneur des hommes,",
      },
      {
        number: 2,
        words: [
          { ar: 'مَلِكِ', tr: 'maliki', fr: 'Roi' },
          { ar: 'النَّاسِ', tr: 'n-nāsi', fr: 'des hommes' },
        ],
        translation: "le Souverain des hommes,",
      },
      {
        number: 3,
        words: [
          { ar: 'إِلَٰهِ', tr: 'ilāhi', fr: 'Dieu' },
          { ar: 'النَّاسِ', tr: 'n-nāsi', fr: 'des hommes' },
        ],
        translation: "le Dieu des hommes,",
      },
      {
        number: 4,
        words: [
          { ar: 'مِن', tr: 'min', fr: 'contre' },
          { ar: 'شَرِّ', tr: 'sharri', fr: 'le mal' },
          { ar: 'الْوَسْوَاسِ', tr: 'l-waswāsi', fr: 'du tentateur' },
          { ar: 'الْخَنَّاسِ', tr: 'l-khannāsi', fr: 'qui se dérobe' },
        ],
        translation: "contre le mal du mauvais tentateur qui se dérobe,",
      },
      {
        number: 5,
        words: [
          { ar: 'الَّذِي', tr: 'lladhī', fr: 'celui qui' },
          { ar: 'يُوَسْوِسُ', tr: 'yuwaswisu', fr: 'souffle le mal' },
          { ar: 'فِي', tr: 'fī', fr: 'dans' },
          { ar: 'صُدُورِ', tr: 'ṣudūri', fr: 'les poitrines' },
          { ar: 'النَّاسِ', tr: 'n-nāsi', fr: 'des hommes' },
        ],
        translation: "qui souffle le mal dans les poitrines des hommes,",
      },
      {
        number: 6,
        words: [
          { ar: 'مِنَ', tr: 'mina', fr: 'parmi' },
          { ar: 'الْجِنَّةِ', tr: 'l-jinnati', fr: 'les djinns' },
          { ar: 'وَالنَّاسِ', tr: 'wa-n-nāsi', fr: 'et les hommes' },
        ],
        translation: "qu'il soit djinn ou être humain. »",
      },
    ],
  },

  67: {
    number: 67,
    nameAr: 'الملك',
    nameFr: 'La Royauté',
    nameEn: 'Al-Mulk',
    revelation: 'Mecquoise',
    verses: [
      {
        number: 1,
        words: [
          { ar: 'تَبَارَكَ', tr: 'tabāraka', fr: 'béni soit' },
          { ar: 'الَّذِي', tr: 'lladhī', fr: 'Celui' },
          { ar: 'بِيَدِهِ', tr: 'bi-yadihi', fr: 'en la main de Qui' },
          { ar: 'الْمُلْكُ', tr: 'l-mulku', fr: 'est la royauté' },
          { ar: 'وَهُوَ', tr: 'wa-huwa', fr: 'et Il est' },
          { ar: 'عَلَىٰ', tr: "ʿalā", fr: 'sur' },
          { ar: 'كُلِّ', tr: 'kulli', fr: 'toute' },
          { ar: 'شَيْءٍ', tr: "shay'in", fr: 'chose' },
          { ar: 'قَدِيرٌ', tr: 'qadīr', fr: 'Tout-Puissant' },
        ],
        translation: "Béni soit Celui en la main de Qui est la Royauté. Il est Omnipotent.",
      },
      {
        number: 2,
        words: [
          { ar: 'الَّذِي', tr: 'lladhī', fr: 'Celui qui' },
          { ar: 'خَلَقَ', tr: 'khalaqa', fr: 'a créé' },
          { ar: 'الْمَوْتَ', tr: 'l-mawta', fr: 'la mort' },
          { ar: 'وَالْحَيَاةَ', tr: 'wa-l-ḥayāta', fr: 'et la vie' },
          { ar: 'لِيَبْلُوَكُمْ', tr: 'li-yabluwakum', fr: 'pour vous éprouver' },
          { ar: 'أَيُّكُمْ', tr: 'ayyukum', fr: "lequel d'entre vous" },
          { ar: 'أَحْسَنُ', tr: 'aḥsanu', fr: 'est le meilleur' },
          { ar: 'عَمَلًا', tr: "ʿamalan", fr: 'en œuvre' },
        ],
        translation: "Qui a créé la mort et la vie afin de vous éprouver et de savoir qui de vous est le meilleur en œuvres.",
      },
      {
        number: 3,
        words: [
          { ar: 'الَّذِي', tr: 'lladhī', fr: 'Celui qui' },
          { ar: 'خَلَقَ', tr: 'khalaqa', fr: 'a créé' },
          { ar: 'سَبْعَ', tr: "sabʿa", fr: 'sept' },
          { ar: 'سَمَاوَاتٍ', tr: 'samāwātin', fr: 'cieux' },
          { ar: 'طِبَاقًا', tr: 'ṭibāqan', fr: 'superposés' },
          { ar: 'مَّا', tr: 'mā', fr: 'tu ne' },
          { ar: 'تَرَىٰ', tr: 'tarā', fr: 'vois' },
          { ar: 'فِي', tr: 'fī', fr: 'dans' },
          { ar: 'خَلْقِ', tr: 'khalqi', fr: 'la création' },
          { ar: 'الرَّحْمَٰنِ', tr: 'r-raḥmāni', fr: 'du Miséricordieux' },
          { ar: 'مِن', tr: 'min', fr: 'aucune' },
          { ar: 'تَفَاوُتٍ', tr: 'tafāwut', fr: 'imperfection' },
        ],
        translation: "Il a créé sept cieux superposés. Tu ne vois aucune imperfection dans la création du Tout Miséricordieux.",
      },
      {
        number: 4,
        words: [
          { ar: 'فَارْجِعِ', tr: 'farjiʿi', fr: 'puis retourne' },
          { ar: 'الْبَصَرَ', tr: 'l-baṣara', fr: 'le regard' },
          { ar: 'هَلْ', tr: 'hal', fr: 'vois-tu' },
          { ar: 'تَرَىٰ', tr: 'tarā', fr: 'quelque' },
          { ar: 'مِن', tr: 'min', fr: 'une' },
          { ar: 'فُطُورٍ', tr: 'fuṭūrin', fr: 'fissure' },
        ],
        translation: "Retourne donc le regard : vois-tu une fissure ?",
      },
    ],
  },

  36: {
    number: 36,
    nameAr: 'يس',
    nameFr: 'Yâ-Sîn',
    nameEn: 'Ya-Sin',
    revelation: 'Mecquoise',
    verses: [
      {
        number: 1,
        words: [{ ar: 'يس', tr: 'yā-sīn', fr: 'Yâ-Sîn' }],
        translation: "Yâ-Sîn.",
      },
      {
        number: 2,
        words: [
          { ar: 'وَالْقُرْآنِ', tr: "wa-l-qur'āni", fr: 'par le Coran' },
          { ar: 'الْحَكِيمِ', tr: 'l-ḥakīmi', fr: 'plein de sagesse' },
        ],
        translation: "Par le Coran plein de sagesse !",
      },
      {
        number: 3,
        words: [
          { ar: 'إِنَّكَ', tr: 'innaka', fr: 'tu es' },
          { ar: 'لَمِنَ', tr: 'la-mina', fr: 'certes parmi' },
          { ar: 'الْمُرْسَلِينَ', tr: 'l-mursalīna', fr: 'les envoyés' },
        ],
        translation: "Tu es certes parmi les Messagers,",
      },
      {
        number: 4,
        words: [
          { ar: 'عَلَىٰ', tr: "ʿalā", fr: 'sur' },
          { ar: 'صِرَاطٍ', tr: 'ṣirāṭin', fr: 'un chemin' },
          { ar: 'مُّسْتَقِيمٍ', tr: 'mustaqīmin', fr: 'droit' },
        ],
        translation: "sur un chemin droit,",
      },
      {
        number: 5,
        words: [
          { ar: 'تَنزِيلَ', tr: 'tanzīla', fr: 'révélation' },
          { ar: 'الْعَزِيزِ', tr: "l-ʿazīzi", fr: 'du Puissant' },
          { ar: 'الرَّحِيمِ', tr: 'r-raḥīmi', fr: 'du Miséricordieux' },
        ],
        translation: "révélation du Puissant, du Très Miséricordieux,",
      },
    ],
  },

  55: {
    number: 55,
    nameAr: 'الرحمن',
    nameFr: 'Le Tout Miséricordieux',
    nameEn: 'Ar-Rahman',
    revelation: 'Médinoise',
    verses: [
      {
        number: 1,
        words: [{ ar: 'الرَّحْمَٰنُ', tr: 'r-raḥmānu', fr: 'le Tout Miséricordieux' }],
        translation: "Le Tout Miséricordieux.",
      },
      {
        number: 2,
        words: [
          { ar: 'عَلَّمَ', tr: "ʿallama", fr: 'a enseigné' },
          { ar: 'الْقُرْآنَ', tr: "l-qur'āna", fr: 'le Coran' },
        ],
        translation: "Il a enseigné le Coran,",
      },
      {
        number: 3,
        words: [
          { ar: 'خَلَقَ', tr: 'khalaqa', fr: 'Il a créé' },
          { ar: 'الْإِنسَانَ', tr: 'l-insāna', fr: "l'homme" },
        ],
        translation: "Il a créé l'homme,",
      },
      {
        number: 4,
        words: [
          { ar: 'عَلَّمَهُ', tr: "ʿallamahu", fr: 'lui a enseigné' },
          { ar: 'الْبَيَانَ', tr: 'l-bayāna', fr: "l'expression" },
        ],
        translation: "lui a appris à s'exprimer.",
      },
      {
        number: 5,
        words: [
          { ar: 'الشَّمْسُ', tr: 'sh-shamsu', fr: 'le soleil' },
          { ar: 'وَالْقَمَرُ', tr: 'wa-l-qamaru', fr: 'et la lune' },
          { ar: 'بِحُسْبَانٍ', tr: 'bi-ḥusbānin', fr: 'selon un calcul précis' },
        ],
        translation: "Le soleil et la lune [suivent leur cours] selon un calcul précis.",
      },
      {
        number: 13,
        words: [
          { ar: 'فَبِأَيِّ', tr: 'fa-bi-ayyi', fr: 'laquelle donc' },
          { ar: 'آلَاءِ', tr: 'ālāi', fr: 'des faveurs' },
          { ar: 'رَبِّكُمَا', tr: 'rabbikumā', fr: 'de votre Seigneur' },
          { ar: 'تُكَذِّبَانِ', tr: 'tukadhdhibāni', fr: 'nierez-vous' },
        ],
        translation: "Laquelle donc des faveurs de votre Seigneur nierez-vous ?",
      },
    ],
  },
}

export const SURAH_LIST = [
  { n: 1,   label: '1 · Al-Fatiha',  nameAr: 'الفاتحة',   nameFr: "L'Ouverture" },
  { n: 36,  label: '36 · Yâ-Sîn',   nameAr: 'يس',         nameFr: 'Yâ-Sîn' },
  { n: 55,  label: '55 · Ar-Rahman', nameAr: 'الرحمن',     nameFr: 'Le Tout Miséricordieux' },
  { n: 67,  label: '67 · Al-Mulk',   nameAr: 'الملك',      nameFr: 'La Royauté' },
  { n: 112, label: '112 · Al-Ikhlas',nameAr: 'الإخلاص',    nameFr: 'La Sincérité' },
  { n: 113, label: '113 · Al-Falaq', nameAr: 'الفلق',      nameFr: "L'Aube naissante" },
  { n: 114, label: '114 · An-Nas',   nameAr: 'الناس',      nameFr: 'Les Hommes' },
]
