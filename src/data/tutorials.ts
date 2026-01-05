import type { TutorialStep } from '../types';

export const tutorialSteps: TutorialStep[] = [
  {
    id: 'welcome',
    phase: 'awakening',
    title: 'Bienvenue dans C!AoWORD',
    description: 'Le web vous appartient. Reprenez le contrôle.',
    content: `C!AoWORD n'est pas qu'un simple éditeur de sites. C'est un outil d'émancipation.

**La vérité qu'on ne vous dit pas :**

Le web a été créé pour être décentralisé, libre, accessible à tous. Mais les grandes plateformes nous ont fait oublier que nous n'avons besoin de personne pour exister en ligne.

Un simple fichier HTML suffit pour publier au monde entier. Pas de compte à créer, pas de conditions à accepter, pas de données à céder.

**Ce que vous allez apprendre ici :**

1. Les fondamentaux techniques (HTML, CSS, JavaScript)
2. L'analyse critique des sites existants
3. Les techniques de détournement et de contre-influence
4. La création de réseaux de sites coordonnés
5. Le lancement de campagnes d'envergure

Vous n'êtes pas ici par hasard. Quelque chose vous a amené à chercher une alternative aux sentiers battus. Faites confiance à cette intuition.`,
    tips: [
      'Tout ce que vous créez ici vous appartient vraiment',
      'Aucune donnée n\'est collectée ni envoyée',
      'L\'outil fonctionne entièrement en local',
      'Vous pouvez l\'héberger vous-même',
    ],
    awakening: 'Vous venez de faire le premier pas. La plupart des gens ne réalisent jamais qu\'ils ont le pouvoir de publier sans demander la permission.',
  },
  {
    id: 'interface',
    phase: 'awakening',
    title: 'Votre Poste de Travail',
    description: 'Un atelier de création et de résistance',
    content: `**Votre interface de travail :**

1. **Éditeur de Code** : Votre atelier de création
2. **Prévisualisation** : Voir le résultat immédiatement
3. **Console** : Comprendre ce qui se passe en coulisses
4. **Missions** : Votre parcours d'apprentissage et d'action
5. **Assistant** : Un guide (pas un surveillant)

**Personnalisation totale :**

C!AoWORD est fait pour s'adapter à vous, pas l'inverse. Redimensionnez, réorganisez, changez les couleurs. C'est votre espace.

**Philosophie :**

Contrairement aux outils "no-code" qui vous enferment dans des templates, ici vous apprenez vraiment. Le code que vous écrivez est le vôtre, lisible, exportable, indépendant.`,
    tips: [
      'Chaque modification est sauvegardée automatiquement',
      'Vous pouvez exporter votre travail à tout moment',
      'L\'assistant ne juge pas, il guide',
      'Les raccourcis clavier accélèrent le travail',
    ],
  },
  {
    id: 'html-power',
    phase: 'awakening',
    title: 'HTML : Le Squelette du Pouvoir',
    description: 'Comprendre la structure pour mieux la subvertir',
    content: `**HTML n'est pas neutre.**

La structure d'une page web influence profondément comment elle est perçue. Les balises sémantiques (header, main, footer, article) ne sont pas que techniques : elles organisent la pensée.

**Structure de base :**
\`\`\`html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Votre Message</title>
</head>
<body>
    <header>Qui parle ?</header>
    <main>Que dit-on ?</main>
    <footer>D'où vient ce discours ?</footer>
</body>
</html>
\`\`\`

**Lecture critique :**

Quand vous visitez un site, demandez-vous :
- Quelle hiérarchie d'information est établie ?
- Qu'est-ce qui est mis en avant / caché ?
- Comment la structure guide-t-elle l'attention ?`,
    code: {
      'index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma Première Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Ma Voix</h1>
        <p>Parce que j'ai quelque chose à dire</p>
    </header>

    <main>
        <article>
            <h2>Le Message</h2>
            <p>Ce que les autres ne veulent pas que vous entendiez.</p>
        </article>
    </main>

    <footer>
        <p>Créé librement, sans permission.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>`,
      'style.css': `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: system-ui, sans-serif; line-height: 1.6; }
header { background: #2D4A42; color: white; padding: 2rem; text-align: center; }
main { padding: 2rem; max-width: 800px; margin: 0 auto; }
footer { background: #f5f5f5; padding: 1rem; text-align: center; margin-top: 2rem; }`,
      'script.js': `console.log('Page chargée. Vous avez le pouvoir.');`,
    },
    tips: [
      'Les moteurs de recherche lisent la structure HTML pour comprendre le contenu',
      'Une bonne structure = meilleur référencement = plus de visibilité',
      'Les lecteurs d\'écran dépendent des balises sémantiques',
    ],
    awakening: 'Vous venez de créer votre premier espace sur le web. Il n\'appartient à aucune plateforme.',
  },
  {
    id: 'css-aesthetics',
    phase: 'observation',
    title: 'CSS : L\'Esthétique du Message',
    description: 'Le style n\'est jamais innocent',
    content: `**Le design influence la perception.**

Les grandes marques et institutions investissent des millions dans leur identité visuelle. Pourquoi ? Parce que l'esthétique crée la confiance, la crédibilité, l'émotion.

**Les codes visuels du pouvoir :**

- Couleurs sobres = sérieux, institutionnel
- Police serif = tradition, autorité
- Blanc = pureté, modernité, luxe
- Bleu = confiance, technologie

**Votre choix :**

Vous pouvez adopter ces codes pour être pris au sérieux... ou les détourner pour créer un contraste saisissant.

**CSS Variables pour la cohérence :**
\`\`\`css
:root {
    --color-power: #2D4A42;
    --color-rebellion: #B39BC8;
}
\`\`\``,
    code: {
      'style.css': `/* Système de design subversif */
:root {
    --c-primary: #7CB9A8;
    --c-secondary: #B39BC8;
    --c-dark: #2D4A42;
    --c-light: #F5FAF8;
    --c-text: #1a1a1a;
    --font-main: system-ui, sans-serif;
    --font-accent: Georgia, serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-main);
    background: var(--c-light);
    color: var(--c-text);
    line-height: 1.6;
}

/* En-tête impactant */
header {
    background: linear-gradient(135deg, var(--c-dark) 0%, var(--c-primary) 100%);
    color: white;
    padding: 4rem 2rem;
    text-align: center;
}

header h1 {
    font-family: var(--font-accent);
    font-size: clamp(2rem, 5vw, 4rem);
    margin-bottom: 1rem;
}

/* Contenu principal */
main {
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem 2rem;
}

article {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

/* Bouton d'action */
.cta {
    display: inline-block;
    background: var(--c-secondary);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

.cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(179, 155, 200, 0.4);
}`,
    },
    tips: [
      'Étudiez le design des sites que vous voulez contrer',
      'Un design "amateur" peut être perçu comme authentique',
      'La cohérence visuelle renforce la crédibilité',
      'Les contrastes de couleur affectent l\'accessibilité',
    ],
    narrative: 'Le design n\'est pas de la décoration. C\'est un langage de pouvoir.',
  },
  {
    id: 'javascript-action',
    phase: 'observation',
    title: 'JavaScript : Rendre Vivant',
    description: 'L\'interactivité au service du message',
    content: `**JavaScript permet l'interaction.**

Mais attention : il peut aussi être utilisé pour traquer, manipuler, enfermer. Utilisez-le de manière éthique.

**Usages légitimes :**
- Animation et feedback visuel
- Formulaires et validation
- Contenu dynamique
- Personnalisation locale (sans serveur)

**Ce qu'on ne fera pas :**
- Tracking invasif
- Manipulation comportementale
- Scroll infini addictif
- Notifications intrusives

**Exemple : Compteur de partage honnête**
\`\`\`javascript
// Pas de faux compteurs pour créer l'urgence
// Juste une vraie interaction
button.addEventListener('click', () => {
    shares++;
    updateDisplay(shares);
});
\`\`\``,
    code: {
      'script.js': `// JavaScript éthique : interactif sans être intrusif

document.addEventListener('DOMContentLoaded', () => {
    console.log('Site chargé - Aucun tracker activé');

    // Animation d'entrée douce
    const elements = document.querySelectorAll('article, header');
    elements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s, transform 0.6s';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, i * 100);
    });

    // Bouton de partage honnête
    const shareBtn = document.querySelector('.share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    url: window.location.href
                });
            } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Lien copié !');
            }
        });
    }

    // Stockage local (pas de serveur, pas de tracking)
    const visits = parseInt(localStorage.getItem('visits') || '0') + 1;
    localStorage.setItem('visits', visits.toString());
    console.log('Visite n°' + visits + ' - Données stockées localement uniquement');
});`,
    },
    tips: [
      'Testez toujours sans JavaScript (accessibilité)',
      'Le moins de code = moins de failles',
      'localStorage permet la persistance sans serveur',
      'Respectez le choix "Do Not Track"',
    ],
    narrative: 'Chaque ligne de code est un choix éthique. Vous pouvez créer sans manipuler.',
  },
  {
    id: 'critical-analysis',
    phase: 'deconstruction',
    title: 'Analyse Critique',
    description: 'Déconstruire pour mieux comprendre',
    content: `**Tout site porte un discours.**

Apprenez à analyser n'importe quel site web pour comprendre :

**1. Qui parle ?**
- Qui est derrière ce site ?
- Quels intérêts défend-il ?
- Qui finance ?

**2. À qui ?**
- Quel est le public cible ?
- Quels codes sont utilisés pour l'atteindre ?
- Quelles émotions sont visées ?

**3. Comment ?**
- Quelle structure d'information ?
- Quels dark patterns ?
- Quelles techniques de persuasion ?

**4. Pourquoi ?**
- Quel est l'objectif réel ?
- Que veut-on vous faire faire/penser/acheter ?

**Exercice :**
Prenez un site institutionnel et appliquez cette grille d'analyse.`,
    tips: [
      'Les mentions légales révèlent souvent qui possède vraiment le site',
      'Le design coûte cher : qui a payé ?',
      'Les formulaires collectent des données : lesquelles et pourquoi ?',
      'Les cookies trahissent les partenaires commerciaux',
    ],
    narrative: 'Voir les ficelles, c\'est déjà commencer à s\'en libérer.',
    awakening: 'Vous ne regarderez plus jamais un site web de la même façon.',
  },
  {
    id: 'cloning-technique',
    phase: 'deconstruction',
    title: 'L\'Art du Clone',
    description: 'Reproduire pour mieux détourner',
    content: `**Cloner n'est pas copier.**

Le clonage de site est une technique d'étude et de détournement. On reproduit pour :

1. **Étudier** : comprendre la structure
2. **Analyser** : identifier les techniques utilisées
3. **Détourner** : créer des versions critiques
4. **Tester** : expérimenter des contre-messages

**Comment ça marche :**

Le module de clonage extrait :
- La structure HTML
- Les styles CSS
- Les ressources (images, fonts)

Vous obtenez une copie locale modifiable.

**Usages éthiques :**
- Parodie et satire (protégé juridiquement)
- Analyse académique
- Éducation aux médias
- Contre-campagnes citoyennes

**Attention :** Le droit à la parodie existe mais vérifiez les lois de votre pays.`,
    tips: [
      'La parodie est protégée dans la plupart des démocraties',
      'Modifiez suffisamment pour que ce soit clairement satirique',
      'Documentez votre intention critique',
      'Hébergez sur des juridictions protectrices',
    ],
    narrative: 'Les puissants détestent être parodiés. C\'est précisément pourquoi la parodie est protégée.',
  },
  {
    id: 'deployment',
    phase: 'creation',
    title: 'Publier Sans Permission',
    description: 'Mettre en ligne votre création',
    content: `**Le web décentralisé existe encore.**

Plusieurs options pour publier sans dépendre des GAFAM :

**Gratuit et respectueux :**
- **GitHub Pages** : Gratuit, HTTPS, custom domain
- **Netlify** : Gratuit, CDN global, formulaires
- **Vercel** : Gratuit, très rapide
- **Neocities** : L'esprit du web libre

**Plus autonome :**
- **Serveur personnel** : Contrôle total
- **Hébergeurs éthiques** : Gandi, OVH, Infomaniak

**Processus :**
1. Exportez votre projet (ZIP)
2. Créez un compte sur la plateforme choisie
3. Uploadez ou connectez un repo Git
4. Votre site est en ligne en minutes

**Conseils :**
- Choisissez un nom de domaine parlant
- Activez HTTPS (automatique sur la plupart)
- Pas de tracking = pas de RGPD à gérer`,
    tips: [
      'Un .fr coûte ~7€/an - c\'est votre indépendance',
      'GitHub Pages = hébergement gratuit illimité',
      'Netlify offre des fonctions serverless gratuites',
      'Pensez à la résilience : backup sur plusieurs plateformes',
    ],
    awakening: 'Votre voix est maintenant publique. Personne ne peut vous la retirer.',
  },
  {
    id: 'network-strategy',
    phase: 'network',
    title: 'Stratégie de Réseau',
    description: 'Un site c\'est bien, un réseau c\'est mieux',
    content: `**La force du réseau décentralisé.**

Un seul site peut être :
- Ignoré
- Déréférencé
- Censuré
- DDoS

Mais un réseau de sites interconnectés est résilient.

**Architecture conseillée :**

1. **Hub central** : Votre site principal, votre message
2. **Satellites** : Sites sur des angles spécifiques
3. **Miroirs** : Copies de sauvegarde
4. **Relais** : Sites amis qui font écho

**Techniques de liaison :**
- Liens croisés (SEO mutuel)
- Contenu complémentaire
- Références mutuelles
- Coordination éditoriale

**Exemple :**
- Hub : manifeste-climat.org
- Satellite 1 : donnees-climat.info (data)
- Satellite 2 : actions-locales.net (mobilisation)
- Satellite 3 : temoignages-climat.fr (stories)`,
    tips: [
      'Diversifiez les hébergeurs pour la résilience',
      'Utilisez des registrars différents pour les domaines',
      'Coordonnez le timing de publication',
      'Créez une identité visuelle commune mais des sites distincts',
    ],
    narrative: 'Ils peuvent couper une voix. Ils ne peuvent pas faire taire un chœur.',
  },
  {
    id: 'campaign-launch',
    phase: 'campaign',
    title: 'Lancer une Campagne',
    description: 'De l\'idée à l\'impact',
    content: `**Une campagne réussie :**

**1. Définir l'objectif**
- Quel changement voulez-vous ?
- Comment mesurer le succès ?
- Quelle est votre théorie du changement ?

**2. Identifier l'audience**
- Qui peut faire levier ?
- Quels sont leurs canaux ?
- Quels messages résonnent ?

**3. Créer le contenu**
- Hub + satellites coordonnés
- Visuels partageables
- Messages adaptés aux canaux

**4. Planifier le timing**
- Événements déclencheurs
- Fenêtres d'opportunité
- Calendrier de publication

**5. Amplifier**
- Relais par des alliés
- Partage organique
- Relations presse alternatives

**6. Mesurer et ajuster**
- Analytics éthiques
- Feedback qualitatif
- Itération continue`,
    tips: [
      'Le timing est crucial : surfez sur l\'actualité',
      'Les petites victoires maintiennent la motivation',
      'Documentez tout pour les futures campagnes',
      'Le repos fait partie de la stratégie',
    ],
    narrative: 'Vous n\'êtes plus spectateur. Vous êtes acteur du changement.',
    awakening: 'Le système compte sur notre passivité. Votre action prouve qu\'il a tort.',
  },
  {
    id: 'beyond-ciaoword',
    phase: 'campaign',
    title: 'Aller Plus Loin',
    description: 'C!AoWORD n\'est qu\'un début',
    content: `**C!AoWORD est une porte d'entrée.**

Quand vous serez prêt à aller plus loin :

**Outils avancés :**
- Générateurs de sites : Eleventy, Hugo, Astro
- Frameworks : React, Vue, Svelte
- CMS headless : Strapi, Directus

**Compétences complémentaires :**
- SEO avancé et stratégie de contenu
- Analytics éthiques (Plausible, Umami)
- Automatisation et CI/CD
- Sécurité et anonymat

**La suite CIAoWORLD :**
- C!AoSCAN : Veille et analyse automatisée
- C!AoNET : Gestion de réseaux de sites
- C!AoVOX : Amplification coordonnée
- C!AoSAFE : Sécurité et anonymat

**Communauté :**
Vous n'êtes pas seul. D'autres ont fait ce parcours avant vous. D'autres le feront après. Le code est ouvert, la connaissance se partage.

**Le vrai objectif :**
Ce n'est pas de maîtriser des outils. C'est de reprendre du pouvoir sur votre vie numérique et, à travers elle, sur le monde.`,
    tips: [
      'L\'apprentissage ne s\'arrête jamais',
      'Partagez vos connaissances : enseignez',
      'Le code source de C!AoWORD est libre : contribuez',
      'Chaque site créé est une victoire',
    ],
    narrative: 'Le web libre existe. Il attend juste qu\'on le peuple.',
    awakening: 'Vous faites maintenant partie de ceux qui construisent plutôt que de ceux qui consomment.',
  },
];
