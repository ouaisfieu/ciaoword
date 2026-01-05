import type { Language } from '../../lib/i18n';

export interface TranslatedTutorialStep {
  title: string;
  description: string;
  content: string;
  tips: string[];
  awakening?: string;
  narrative?: string;
}

export const tutorialTranslations: Record<Language, Record<string, TranslatedTutorialStep>> = {
  fr: {
    welcome: {
      title: 'Bienvenue dans C!AoWORD',
      description: 'Le web vous appartient. Reprenez le controle.',
      content: `C!AoWORD n'est pas qu'un simple editeur de sites. C'est un outil d'emancipation.

**La verite qu'on ne vous dit pas :**

Le web a ete cree pour etre decentralise, libre, accessible a tous. Mais les grandes plateformes nous ont fait oublier que nous n'avons besoin de personne pour exister en ligne.

Un simple fichier HTML suffit pour publier au monde entier. Pas de compte a creer, pas de conditions a accepter, pas de donnees a ceder.

**Ce que vous allez apprendre ici :**

1. Les fondamentaux techniques (HTML, CSS, JavaScript)
2. L'analyse critique des sites existants
3. Les techniques de detournement et de contre-influence
4. La creation de reseaux de sites coordonnes
5. Le lancement de campagnes d'envergure

Vous n'etes pas ici par hasard. Quelque chose vous a amene a chercher une alternative aux sentiers battus. Faites confiance a cette intuition.`,
      tips: [
        'Tout ce que vous creez ici vous appartient vraiment',
        'Aucune donnee n\'est collectee ni envoyee',
        'L\'outil fonctionne entierement en local',
        'Vous pouvez l\'heberger vous-meme',
      ],
      awakening: 'Vous venez de faire le premier pas. La plupart des gens ne realisent jamais qu\'ils ont le pouvoir de publier sans demander la permission.',
    },
    interface: {
      title: 'Votre Poste de Travail',
      description: 'Un atelier de creation et de resistance',
      content: `**Votre interface de travail :**

1. **Editeur de Code** : Votre atelier de creation
2. **Previsualisation** : Voir le resultat immediatement
3. **Console** : Comprendre ce qui se passe en coulisses
4. **Missions** : Votre parcours d'apprentissage et d'action
5. **Assistant** : Un guide (pas un surveillant)

**Personnalisation totale :**

C!AoWORD est fait pour s'adapter a vous, pas l'inverse. Redimensionnez, reorganisez, changez les couleurs. C'est votre espace.

**Philosophie :**

Contrairement aux outils "no-code" qui vous enferment dans des templates, ici vous apprenez vraiment. Le code que vous ecrivez est le votre, lisible, exportable, independant.`,
      tips: [
        'Chaque modification est sauvegardee automatiquement',
        'Vous pouvez exporter votre travail a tout moment',
        'L\'assistant ne juge pas, il guide',
        'Les raccourcis clavier accelerent le travail',
      ],
    },
    htmlPower: {
      title: 'HTML : Le Squelette du Pouvoir',
      description: 'Comprendre la structure pour mieux la subvertir',
      content: `**HTML n'est pas neutre.**

La structure d'une page web influence profondement comment elle est percue. Les balises semantiques (header, main, footer, article) ne sont pas que techniques : elles organisent la pensee.

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
    <footer>D'ou vient ce discours ?</footer>
</body>
</html>
\`\`\`

**Lecture critique :**

Quand vous visitez un site, demandez-vous :
- Quelle hierarchie d'information est etablie ?
- Qu'est-ce qui est mis en avant / cache ?
- Comment la structure guide-t-elle l'attention ?`,
      tips: [
        'Les moteurs de recherche lisent la structure HTML pour comprendre le contenu',
        'Une bonne structure = meilleur referencement = plus de visibilite',
        'Les lecteurs d\'ecran dependent des balises semantiques',
      ],
      awakening: 'Vous venez de creer votre premier espace sur le web. Il n\'appartient a aucune plateforme.',
    },
    cssAesthetics: {
      title: 'CSS : L\'Esthetique du Message',
      description: 'Le style n\'est jamais innocent',
      content: `**Le design influence la perception.**

Les grandes marques et institutions investissent des millions dans leur identite visuelle. Pourquoi ? Parce que l'esthetique cree la confiance, la credibilite, l'emotion.

**Les codes visuels du pouvoir :**

- Couleurs sobres = serieux, institutionnel
- Police serif = tradition, autorite
- Blanc = purete, modernite, luxe
- Bleu = confiance, technologie

**Votre choix :**

Vous pouvez adopter ces codes pour etre pris au serieux... ou les detourner pour creer un contraste saisissant.

**CSS Variables pour la coherence :**
\`\`\`css
:root {
    --color-power: #2D4A42;
    --color-rebellion: #B39BC8;
}
\`\`\``,
      tips: [
        'Etudiez le design des sites que vous voulez contrer',
        'Un design "amateur" peut etre percu comme authentique',
        'La coherence visuelle renforce la credibilite',
        'Les contrastes de couleur affectent l\'accessibilite',
      ],
      narrative: 'Le design n\'est pas de la decoration. C\'est un langage de pouvoir.',
    },
    jsAction: {
      title: 'JavaScript : Rendre Vivant',
      description: 'L\'interactivite au service du message',
      content: `**JavaScript permet l'interaction.**

Mais attention : il peut aussi etre utilise pour traquer, manipuler, enfermer. Utilisez-le de maniere ethique.

**Usages legitimes :**
- Animation et feedback visuel
- Formulaires et validation
- Contenu dynamique
- Personnalisation locale (sans serveur)

**Ce qu'on ne fera pas :**
- Tracking invasif
- Manipulation comportementale
- Scroll infini addictif
- Notifications intrusives

**Exemple : Compteur de partage honnete**
\`\`\`javascript
// Pas de faux compteurs pour creer l'urgence
// Juste une vraie interaction
button.addEventListener('click', () => {
    shares++;
    updateDisplay(shares);
});
\`\`\``,
      tips: [
        'Testez toujours sans JavaScript (accessibilite)',
        'Le moins de code = moins de failles',
        'localStorage permet la persistance sans serveur',
        'Respectez le choix "Do Not Track"',
      ],
      narrative: 'Chaque ligne de code est un choix ethique. Vous pouvez creer sans manipuler.',
    },
    criticalAnalysis: {
      title: 'Analyse Critique',
      description: 'Deconstruire pour mieux comprendre',
      content: `**Tout site porte un discours.**

Apprenez a analyser n'importe quel site web pour comprendre :

**1. Qui parle ?**
- Qui est derriere ce site ?
- Quels interets defend-il ?
- Qui finance ?

**2. A qui ?**
- Quel est le public cible ?
- Quels codes sont utilises pour l'atteindre ?
- Quelles emotions sont visees ?

**3. Comment ?**
- Quelle structure d'information ?
- Quels dark patterns ?
- Quelles techniques de persuasion ?

**4. Pourquoi ?**
- Quel est l'objectif reel ?
- Que veut-on vous faire faire/penser/acheter ?

**Exercice :**
Prenez un site institutionnel et appliquez cette grille d'analyse.`,
      tips: [
        'Les mentions legales revelent souvent qui possede vraiment le site',
        'Le design coute cher : qui a paye ?',
        'Les formulaires collectent des donnees : lesquelles et pourquoi ?',
        'Les cookies trahissent les partenaires commerciaux',
      ],
      narrative: 'Voir les ficelles, c\'est deja commencer a s\'en liberer.',
      awakening: 'Vous ne regarderez plus jamais un site web de la meme facon.',
    },
    cloning: {
      title: 'L\'Art du Clone',
      description: 'Reproduire pour mieux detourner',
      content: `**Cloner n'est pas copier.**

Le clonage de site est une technique d'etude et de detournement. On reproduit pour :

1. **Etudier** : comprendre la structure
2. **Analyser** : identifier les techniques utilisees
3. **Detourner** : creer des versions critiques
4. **Tester** : experimenter des contre-messages

**Comment ca marche :**

Le module de clonage extrait :
- La structure HTML
- Les styles CSS
- Les ressources (images, fonts)

Vous obtenez une copie locale modifiable.

**Usages ethiques :**
- Parodie et satire (protege juridiquement)
- Analyse academique
- Education aux medias
- Contre-campagnes citoyennes

**Attention :** Le droit a la parodie existe mais verifiez les lois de votre pays.`,
      tips: [
        'La parodie est protegee dans la plupart des democraties',
        'Modifiez suffisamment pour que ce soit clairement satirique',
        'Documentez votre intention critique',
        'Hebergez sur des juridictions protectrices',
      ],
      narrative: 'Les puissants detestent etre parodies. C\'est precisement pourquoi la parodie est protegee.',
    },
    deployment: {
      title: 'Publier Sans Permission',
      description: 'Mettre en ligne votre creation',
      content: `**Le web decentralise existe encore.**

Plusieurs options pour publier sans dependre des GAFAM :

**Gratuit et respectueux :**
- **GitHub Pages** : Gratuit, HTTPS, custom domain
- **Netlify** : Gratuit, CDN global, formulaires
- **Vercel** : Gratuit, tres rapide
- **Neocities** : L'esprit du web libre

**Plus autonome :**
- **Serveur personnel** : Controle total
- **Hebergeurs ethiques** : Gandi, OVH, Infomaniak

**Processus :**
1. Exportez votre projet (ZIP)
2. Creez un compte sur la plateforme choisie
3. Uploadez ou connectez un repo Git
4. Votre site est en ligne en minutes

**Conseils :**
- Choisissez un nom de domaine parlant
- Activez HTTPS (automatique sur la plupart)
- Pas de tracking = pas de RGPD a gerer`,
      tips: [
        'Un .fr coute ~7eur/an - c\'est votre independance',
        'GitHub Pages = hebergement gratuit illimite',
        'Netlify offre des fonctions serverless gratuites',
        'Pensez a la resilience : backup sur plusieurs plateformes',
      ],
      awakening: 'Votre voix est maintenant publique. Personne ne peut vous la retirer.',
    },
    networkStrategy: {
      title: 'Strategie de Reseau',
      description: 'Un site c\'est bien, un reseau c\'est mieux',
      content: `**La force du reseau decentralise.**

Un seul site peut etre :
- Ignore
- Dereference
- Censure
- DDoS

Mais un reseau de sites interconnectes est resilient.

**Architecture conseillee :**

1. **Hub central** : Votre site principal, votre message
2. **Satellites** : Sites sur des angles specifiques
3. **Miroirs** : Copies de sauvegarde
4. **Relais** : Sites amis qui font echo

**Techniques de liaison :**
- Liens croises (SEO mutuel)
- Contenu complementaire
- References mutuelles
- Coordination editoriale

**Exemple :**
- Hub : manifeste-climat.org
- Satellite 1 : donnees-climat.info (data)
- Satellite 2 : actions-locales.net (mobilisation)
- Satellite 3 : temoignages-climat.fr (stories)`,
      tips: [
        'Diversifiez les hebergeurs pour la resilience',
        'Utilisez des registrars differents pour les domaines',
        'Coordonnez le timing de publication',
        'Creez une identite visuelle commune mais des sites distincts',
      ],
      narrative: 'Ils peuvent couper une voix. Ils ne peuvent pas faire taire un choeur.',
    },
    campaignLaunch: {
      title: 'Lancer une Campagne',
      description: 'De l\'idee a l\'impact',
      content: `**Une campagne reussie :**

**1. Definir l'objectif**
- Quel changement voulez-vous ?
- Comment mesurer le succes ?
- Quelle est votre theorie du changement ?

**2. Identifier l'audience**
- Qui peut faire levier ?
- Quels sont leurs canaux ?
- Quels messages resonnent ?

**3. Creer le contenu**
- Hub + satellites coordonnes
- Visuels partageables
- Messages adaptes aux canaux

**4. Planifier le timing**
- Evenements declencheurs
- Fenetres d'opportunite
- Calendrier de publication

**5. Amplifier**
- Relais par des allies
- Partage organique
- Relations presse alternatives

**6. Mesurer et ajuster**
- Analytics ethiques
- Feedback qualitatif
- Iteration continue`,
      tips: [
        'Le timing est crucial : surfez sur l\'actualite',
        'Les petites victoires maintiennent la motivation',
        'Documentez tout pour les futures campagnes',
        'Le repos fait partie de la strategie',
      ],
      narrative: 'Vous n\'etes plus spectateur. Vous etes acteur du changement.',
      awakening: 'Le systeme compte sur notre passivite. Votre action prouve qu\'il a tort.',
    },
    beyond: {
      title: 'Aller Plus Loin',
      description: 'C!AoWORD n\'est qu\'un debut',
      content: `**C!AoWORD est une porte d'entree.**

Quand vous serez pret a aller plus loin :

**Outils avances :**
- Generateurs de sites : Eleventy, Hugo, Astro
- Frameworks : React, Vue, Svelte
- CMS headless : Strapi, Directus

**Competences complementaires :**
- SEO avance et strategie de contenu
- Analytics ethiques (Plausible, Umami)
- Automatisation et CI/CD
- Securite et anonymat

**La suite CIAoWORLD :**
- C!AoSCAN : Veille et analyse automatisee
- C!AoNET : Gestion de reseaux de sites
- C!AoVOX : Amplification coordonnee
- C!AoSAFE : Securite et anonymat

**Communaute :**
Vous n'etes pas seul. D'autres ont fait ce parcours avant vous. D'autres le feront apres. Le code est ouvert, la connaissance se partage.

**Le vrai objectif :**
Ce n'est pas de maitriser des outils. C'est de reprendre du pouvoir sur votre vie numerique et, a travers elle, sur le monde.`,
      tips: [
        'L\'apprentissage ne s\'arrete jamais',
        'Partagez vos connaissances : enseignez',
        'Le code source de C!AoWORD est libre : contribuez',
        'Chaque site cree est une victoire',
      ],
      narrative: 'Le web libre existe. Il attend juste qu\'on le peuple.',
      awakening: 'Vous faites maintenant partie de ceux qui construisent plutot que de ceux qui consomment.',
    },
  },
  en: {
    welcome: {
      title: 'Welcome to C!AoWORD',
      description: 'The web belongs to you. Take back control.',
      content: `C!AoWORD is not just a website editor. It's an emancipation tool.

**The truth they don't tell you:**

The web was created to be decentralized, free, accessible to all. But big platforms made us forget that we don't need anyone's permission to exist online.

A simple HTML file is enough to publish to the entire world. No account to create, no terms to accept, no data to give away.

**What you will learn here:**

1. Technical fundamentals (HTML, CSS, JavaScript)
2. Critical analysis of existing websites
3. Counter-influence and subversion techniques
4. Creating coordinated website networks
5. Launching large-scale campaigns

You're not here by accident. Something led you to seek an alternative to the beaten path. Trust that intuition.`,
      tips: [
        'Everything you create here truly belongs to you',
        'No data is collected or sent anywhere',
        'The tool works entirely locally',
        'You can host it yourself',
      ],
      awakening: 'You just took the first step. Most people never realize they have the power to publish without asking permission.',
    },
    interface: {
      title: 'Your Workstation',
      description: 'A workshop for creation and resistance',
      content: `**Your work interface:**

1. **Code Editor**: Your creation workshop
2. **Preview**: See results immediately
3. **Console**: Understand what's happening behind the scenes
4. **Missions**: Your learning and action path
5. **Assistant**: A guide (not a supervisor)

**Total customization:**

C!AoWORD is made to adapt to you, not the other way around. Resize, reorganize, change colors. It's your space.

**Philosophy:**

Unlike "no-code" tools that lock you into templates, here you really learn. The code you write is yours, readable, exportable, independent.`,
      tips: [
        'Every change is saved automatically',
        'You can export your work at any time',
        'The assistant doesn\'t judge, it guides',
        'Keyboard shortcuts speed up your work',
      ],
    },
    htmlPower: {
      title: 'HTML: The Skeleton of Power',
      description: 'Understand the structure to better subvert it',
      content: `**HTML is not neutral.**

A web page's structure deeply influences how it's perceived. Semantic tags (header, main, footer, article) aren't just technical: they organize thought.

**Basic structure:**
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Message</title>
</head>
<body>
    <header>Who speaks?</header>
    <main>What is said?</main>
    <footer>Where does this discourse come from?</footer>
</body>
</html>
\`\`\`

**Critical reading:**

When you visit a site, ask yourself:
- What information hierarchy is established?
- What is highlighted / hidden?
- How does the structure guide attention?`,
      tips: [
        'Search engines read HTML structure to understand content',
        'Good structure = better SEO = more visibility',
        'Screen readers depend on semantic tags',
      ],
      awakening: 'You just created your first space on the web. It belongs to no platform.',
    },
    cssAesthetics: {
      title: 'CSS: The Aesthetics of Message',
      description: 'Style is never innocent',
      content: `**Design influences perception.**

Big brands and institutions invest millions in their visual identity. Why? Because aesthetics create trust, credibility, emotion.

**Visual codes of power:**

- Sober colors = serious, institutional
- Serif font = tradition, authority
- White = purity, modernity, luxury
- Blue = trust, technology

**Your choice:**

You can adopt these codes to be taken seriously... or subvert them to create a striking contrast.

**CSS Variables for consistency:**
\`\`\`css
:root {
    --color-power: #2D4A42;
    --color-rebellion: #B39BC8;
}
\`\`\``,
      tips: [
        'Study the design of sites you want to counter',
        'An "amateur" design can be perceived as authentic',
        'Visual consistency reinforces credibility',
        'Color contrasts affect accessibility',
      ],
      narrative: 'Design is not decoration. It\'s a language of power.',
    },
    jsAction: {
      title: 'JavaScript: Bring It to Life',
      description: 'Interactivity serving the message',
      content: `**JavaScript enables interaction.**

But beware: it can also be used to track, manipulate, lock in. Use it ethically.

**Legitimate uses:**
- Animation and visual feedback
- Forms and validation
- Dynamic content
- Local personalization (no server)

**What we won't do:**
- Invasive tracking
- Behavioral manipulation
- Addictive infinite scroll
- Intrusive notifications

**Example: Honest share counter**
\`\`\`javascript
// No fake counters to create urgency
// Just real interaction
button.addEventListener('click', () => {
    shares++;
    updateDisplay(shares);
});
\`\`\``,
      tips: [
        'Always test without JavaScript (accessibility)',
        'Less code = fewer vulnerabilities',
        'localStorage enables persistence without server',
        'Respect the "Do Not Track" choice',
      ],
      narrative: 'Every line of code is an ethical choice. You can create without manipulating.',
    },
    criticalAnalysis: {
      title: 'Critical Analysis',
      description: 'Deconstruct to better understand',
      content: `**Every site carries a discourse.**

Learn to analyze any website to understand:

**1. Who speaks?**
- Who is behind this site?
- What interests does it defend?
- Who finances it?

**2. To whom?**
- What is the target audience?
- What codes are used to reach them?
- What emotions are targeted?

**3. How?**
- What information structure?
- What dark patterns?
- What persuasion techniques?

**4. Why?**
- What is the real objective?
- What do they want you to do/think/buy?

**Exercise:**
Take an institutional website and apply this analysis grid.`,
      tips: [
        'Legal mentions often reveal who really owns the site',
        'Design is expensive: who paid?',
        'Forms collect data: which and why?',
        'Cookies betray commercial partners',
      ],
      narrative: 'Seeing the strings is already starting to free yourself from them.',
      awakening: 'You will never look at a website the same way again.',
    },
    cloning: {
      title: 'The Art of Cloning',
      description: 'Reproduce to better subvert',
      content: `**Cloning is not copying.**

Site cloning is a study and subversion technique. We reproduce to:

1. **Study**: understand the structure
2. **Analyze**: identify techniques used
3. **Subvert**: create critical versions
4. **Test**: experiment with counter-messages

**How it works:**

The cloning module extracts:
- HTML structure
- CSS styles
- Resources (images, fonts)

You get a modifiable local copy.

**Ethical uses:**
- Parody and satire (legally protected)
- Academic analysis
- Media education
- Citizen counter-campaigns

**Warning:** The right to parody exists but check your country's laws.`,
      tips: [
        'Parody is protected in most democracies',
        'Modify enough so it\'s clearly satirical',
        'Document your critical intention',
        'Host on protective jurisdictions',
      ],
      narrative: 'The powerful hate being parodied. That\'s precisely why parody is protected.',
    },
    deployment: {
      title: 'Publish Without Permission',
      description: 'Put your creation online',
      content: `**The decentralized web still exists.**

Several options to publish without depending on Big Tech:

**Free and respectful:**
- **GitHub Pages**: Free, HTTPS, custom domain
- **Netlify**: Free, global CDN, forms
- **Vercel**: Free, very fast
- **Neocities**: The spirit of the free web

**More autonomous:**
- **Personal server**: Total control
- **Ethical hosts**: Gandi, OVH, Infomaniak

**Process:**
1. Export your project (ZIP)
2. Create an account on chosen platform
3. Upload or connect a Git repo
4. Your site is online in minutes

**Tips:**
- Choose a meaningful domain name
- Enable HTTPS (automatic on most)
- No tracking = no GDPR to manage`,
      tips: [
        'A .com costs ~$12/year - that\'s your independence',
        'GitHub Pages = unlimited free hosting',
        'Netlify offers free serverless functions',
        'Think resilience: backup on multiple platforms',
      ],
      awakening: 'Your voice is now public. No one can take it away from you.',
    },
    networkStrategy: {
      title: 'Network Strategy',
      description: 'One site is good, a network is better',
      content: `**The power of decentralized network.**

A single site can be:
- Ignored
- Delisted
- Censored
- DDoSed

But a network of interconnected sites is resilient.

**Recommended architecture:**

1. **Central hub**: Your main site, your message
2. **Satellites**: Sites on specific angles
3. **Mirrors**: Backup copies
4. **Relays**: Friendly sites that echo

**Linking techniques:**
- Cross-links (mutual SEO)
- Complementary content
- Mutual references
- Editorial coordination

**Example:**
- Hub: climate-manifesto.org
- Satellite 1: climate-data.info (data)
- Satellite 2: local-actions.net (mobilization)
- Satellite 3: climate-stories.com (stories)`,
      tips: [
        'Diversify hosts for resilience',
        'Use different registrars for domains',
        'Coordinate publication timing',
        'Create a common visual identity but distinct sites',
      ],
      narrative: 'They can cut one voice. They cannot silence a chorus.',
    },
    campaignLaunch: {
      title: 'Launch a Campaign',
      description: 'From idea to impact',
      content: `**A successful campaign:**

**1. Define the objective**
- What change do you want?
- How to measure success?
- What is your theory of change?

**2. Identify the audience**
- Who can create leverage?
- What are their channels?
- What messages resonate?

**3. Create the content**
- Hub + coordinated satellites
- Shareable visuals
- Messages adapted to channels

**4. Plan the timing**
- Trigger events
- Windows of opportunity
- Publication calendar

**5. Amplify**
- Relay through allies
- Organic sharing
- Alternative press relations

**6. Measure and adjust**
- Ethical analytics
- Qualitative feedback
- Continuous iteration`,
      tips: [
        'Timing is crucial: ride the news',
        'Small victories maintain motivation',
        'Document everything for future campaigns',
        'Rest is part of the strategy',
      ],
      narrative: 'You are no longer a spectator. You are an agent of change.',
      awakening: 'The system counts on our passivity. Your action proves it wrong.',
    },
    beyond: {
      title: 'Going Further',
      description: 'C!AoWORD is just the beginning',
      content: `**C!AoWORD is a gateway.**

When you're ready to go further:

**Advanced tools:**
- Site generators: Eleventy, Hugo, Astro
- Frameworks: React, Vue, Svelte
- Headless CMS: Strapi, Directus

**Complementary skills:**
- Advanced SEO and content strategy
- Ethical analytics (Plausible, Umami)
- Automation and CI/CD
- Security and anonymity

**The CIAoWORLD suite:**
- C!AoSCAN: Automated monitoring and analysis
- C!AoNET: Site network management
- C!AoVOX: Coordinated amplification
- C!AoSAFE: Security and anonymity

**Community:**
You're not alone. Others have taken this path before you. Others will follow. The code is open, knowledge is shared.

**The real objective:**
It's not about mastering tools. It's about reclaiming power over your digital life and, through it, over the world.`,
      tips: [
        'Learning never stops',
        'Share your knowledge: teach',
        'C!AoWORD source code is free: contribute',
        'Every site created is a victory',
      ],
      narrative: 'The free web exists. It just waits for us to populate it.',
      awakening: 'You are now part of those who build rather than those who consume.',
    },
  },
  nl: {
    welcome: {
      title: 'Welkom bij C!AoWORD',
      description: 'Het web is van jou. Neem de controle terug.',
      content: `C!AoWORD is niet zomaar een website-editor. Het is een emancipatietool.

**De waarheid die ze je niet vertellen:**

Het web is gemaakt om gedecentraliseerd, vrij en toegankelijk voor iedereen te zijn. Maar grote platforms hebben ons doen vergeten dat we niemands toestemming nodig hebben om online te bestaan.

Een eenvoudig HTML-bestand is genoeg om naar de hele wereld te publiceren. Geen account aan te maken, geen voorwaarden te accepteren, geen gegevens af te staan.

**Wat je hier gaat leren:**

1. Technische basiskennis (HTML, CSS, JavaScript)
2. Kritische analyse van bestaande websites
3. Tegen-invloed en subversietechnieken
4. Gecoordineerde websitenetwerken creeren
5. Grootschalige campagnes lanceren

Je bent hier niet per ongeluk. Iets heeft je ertoe gebracht een alternatief te zoeken voor de gebaande paden. Vertrouw op die intuitie.`,
      tips: [
        'Alles wat je hier maakt is echt van jou',
        'Er worden geen gegevens verzameld of verzonden',
        'De tool werkt volledig lokaal',
        'Je kunt het zelf hosten',
      ],
      awakening: 'Je hebt zojuist de eerste stap gezet. De meeste mensen beseffen nooit dat ze de macht hebben om te publiceren zonder toestemming te vragen.',
    },
    interface: {
      title: 'Jouw Werkplek',
      description: 'Een werkplaats voor creatie en verzet',
      content: `**Jouw werkinterface:**

1. **Code-editor**: Jouw creatieve werkplaats
2. **Voorbeeld**: Zie direct het resultaat
3. **Console**: Begrijp wat er achter de schermen gebeurt
4. **Missies**: Jouw leer- en actiepad
5. **Assistent**: Een gids (geen toezichthouder)

**Volledige aanpassing:**

C!AoWORD is gemaakt om zich aan jou aan te passen, niet andersom. Verander de grootte, reorganiseer, verander kleuren. Het is jouw ruimte.

**Filosofie:**

In tegenstelling tot "no-code" tools die je in templates opsluiten, leer je hier echt. De code die je schrijft is van jou, leesbaar, exporteerbaar, onafhankelijk.`,
      tips: [
        'Elke wijziging wordt automatisch opgeslagen',
        'Je kunt je werk op elk moment exporteren',
        'De assistent oordeelt niet, hij begeleidt',
        'Sneltoetsen versnellen je werk',
      ],
    },
    htmlPower: {
      title: 'HTML: Het Skelet van Macht',
      description: 'Begrijp de structuur om deze beter te ondermijnen',
      content: `**HTML is niet neutraal.**

De structuur van een webpagina beinvloedt diepgaand hoe deze wordt waargenomen. Semantische tags (header, main, footer, article) zijn niet alleen technisch: ze organiseren het denken.

**Basisstructuur:**
\`\`\`html
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Jouw Boodschap</title>
</head>
<body>
    <header>Wie spreekt?</header>
    <main>Wat wordt er gezegd?</main>
    <footer>Waar komt dit discours vandaan?</footer>
</body>
</html>
\`\`\`

**Kritisch lezen:**

Wanneer je een site bezoekt, vraag jezelf af:
- Welke informatiehierarchie is er vastgesteld?
- Wat wordt benadrukt / verborgen?
- Hoe stuurt de structuur de aandacht?`,
      tips: [
        'Zoekmachines lezen HTML-structuur om inhoud te begrijpen',
        'Goede structuur = betere SEO = meer zichtbaarheid',
        'Schermlezers zijn afhankelijk van semantische tags',
      ],
      awakening: 'Je hebt zojuist je eerste ruimte op het web gecreeerd. Het behoort tot geen enkel platform.',
    },
    cssAesthetics: {
      title: 'CSS: De Esthetiek van de Boodschap',
      description: 'Stijl is nooit onschuldig',
      content: `**Ontwerp beinvloedt perceptie.**

Grote merken en instellingen investeren miljoenen in hun visuele identiteit. Waarom? Omdat esthetiek vertrouwen, geloofwaardigheid en emotie creert.

**Visuele codes van macht:**

- Sobere kleuren = serieus, institutioneel
- Serif lettertype = traditie, autoriteit
- Wit = zuiverheid, moderniteit, luxe
- Blauw = vertrouwen, technologie

**Jouw keuze:**

Je kunt deze codes overnemen om serieus genomen te worden... of ze ondermijnen om een treffend contrast te creeren.

**CSS Variabelen voor consistentie:**
\`\`\`css
:root {
    --color-power: #2D4A42;
    --color-rebellion: #B39BC8;
}
\`\`\``,
      tips: [
        'Bestudeer het ontwerp van sites die je wilt tegenwerken',
        'Een "amateur" ontwerp kan als authentiek worden ervaren',
        'Visuele consistentie versterkt geloofwaardigheid',
        'Kleurcontrasten beinvloeden toegankelijkheid',
      ],
      narrative: 'Ontwerp is geen decoratie. Het is een taal van macht.',
    },
    jsAction: {
      title: 'JavaScript: Tot Leven Brengen',
      description: 'Interactiviteit ten dienste van de boodschap',
      content: `**JavaScript maakt interactie mogelijk.**

Maar let op: het kan ook worden gebruikt om te volgen, manipuleren, opsluiten. Gebruik het ethisch.

**Legitiem gebruik:**
- Animatie en visuele feedback
- Formulieren en validatie
- Dynamische inhoud
- Lokale personalisatie (zonder server)

**Wat we niet doen:**
- Invasieve tracking
- Gedragsmanipulatie
- Verslavend oneindig scrollen
- Opdringerige meldingen

**Voorbeeld: Eerlijke deelteller**
\`\`\`javascript
// Geen nepgetallen om urgentie te creeren
// Gewoon echte interactie
button.addEventListener('click', () => {
    shares++;
    updateDisplay(shares);
});
\`\`\``,
      tips: [
        'Test altijd zonder JavaScript (toegankelijkheid)',
        'Minder code = minder kwetsbaarheden',
        'localStorage maakt persistentie zonder server mogelijk',
        'Respecteer de "Do Not Track" keuze',
      ],
      narrative: 'Elke regel code is een ethische keuze. Je kunt creeren zonder te manipuleren.',
    },
    criticalAnalysis: {
      title: 'Kritische Analyse',
      description: 'Deconstrueren om beter te begrijpen',
      content: `**Elke site draagt een discours.**

Leer elke website te analyseren om te begrijpen:

**1. Wie spreekt?**
- Wie zit er achter deze site?
- Welke belangen verdedigt het?
- Wie financiert?

**2. Tegen wie?**
- Wat is de doelgroep?
- Welke codes worden gebruikt om hen te bereiken?
- Welke emoties worden beoogd?

**3. Hoe?**
- Welke informatiestructuur?
- Welke dark patterns?
- Welke overtuigingstechnieken?

**4. Waarom?**
- Wat is het echte doel?
- Wat willen ze dat je doet/denkt/koopt?

**Oefening:**
Neem een institutionele website en pas dit analyseraster toe.`,
      tips: [
        'Juridische vermeldingen onthullen vaak wie echt eigenaar is van de site',
        'Ontwerp is duur: wie heeft betaald?',
        'Formulieren verzamelen gegevens: welke en waarom?',
        'Cookies verraden commerciele partners',
      ],
      narrative: 'De touwtjes zien is al beginnen jezelf ervan te bevrijden.',
      awakening: 'Je zult nooit meer op dezelfde manier naar een website kijken.',
    },
    cloning: {
      title: 'De Kunst van het Klonen',
      description: 'Reproduceren om beter te ondermijnen',
      content: `**Klonen is niet kopieren.**

Site klonen is een studie- en ondermijningstechniek. We reproduceren om:

1. **Studeren**: de structuur begrijpen
2. **Analyseren**: gebruikte technieken identificeren
3. **Ondermijnen**: kritische versies maken
4. **Testen**: experimenteren met tegenboodschappen

**Hoe het werkt:**

De kloonmodule extraheert:
- HTML-structuur
- CSS-stijlen
- Bronnen (afbeeldingen, lettertypen)

Je krijgt een aanpasbare lokale kopie.

**Ethisch gebruik:**
- Parodie en satire (juridisch beschermd)
- Academische analyse
- Media-educatie
- Burger tegencampagnes

**Let op:** Het recht op parodie bestaat, maar controleer de wetten van je land.`,
      tips: [
        'Parodie is beschermd in de meeste democratieen',
        'Wijzig genoeg zodat het duidelijk satirisch is',
        'Documenteer je kritische intentie',
        'Host op beschermende jurisdicties',
      ],
      narrative: 'Machthebbers haten geparodieerd te worden. Dat is precies waarom parodie beschermd is.',
    },
    deployment: {
      title: 'Publiceren Zonder Toestemming',
      description: 'Zet je creatie online',
      content: `**Het gedecentraliseerde web bestaat nog.**

Verschillende opties om te publiceren zonder afhankelijk te zijn van Big Tech:

**Gratis en respectvol:**
- **GitHub Pages**: Gratis, HTTPS, aangepast domein
- **Netlify**: Gratis, wereldwijde CDN, formulieren
- **Vercel**: Gratis, zeer snel
- **Neocities**: De geest van het vrije web

**Meer autonoom:**
- **Persoonlijke server**: Totale controle
- **Ethische hosts**: Gandi, OVH, Infomaniak

**Proces:**
1. Exporteer je project (ZIP)
2. Maak een account op het gekozen platform
3. Upload of koppel een Git repo
4. Je site is binnen minuten online

**Tips:**
- Kies een betekenisvolle domeinnaam
- Activeer HTTPS (automatisch op de meeste)
- Geen tracking = geen AVG te beheren`,
      tips: [
        'Een .nl kost ~8eur/jaar - dat is je onafhankelijkheid',
        'GitHub Pages = onbeperkte gratis hosting',
        'Netlify biedt gratis serverless functies',
        'Denk aan veerkracht: backup op meerdere platforms',
      ],
      awakening: 'Je stem is nu openbaar. Niemand kan het je afnemen.',
    },
    networkStrategy: {
      title: 'Netwerkstrategie',
      description: 'Een site is goed, een netwerk is beter',
      content: `**De kracht van het gedecentraliseerde netwerk.**

Een enkele site kan:
- Genegeerd worden
- Gedelist worden
- Gecensureerd worden
- DDoSed worden

Maar een netwerk van onderling verbonden sites is veerkrachtig.

**Aanbevolen architectuur:**

1. **Centrale hub**: Je hoofdsite, je boodschap
2. **Satellieten**: Sites op specifieke invalshoeken
3. **Spiegels**: Backupkopieen
4. **Relais**: Bevriende sites die echo geven

**Koppelingstechnieken:**
- Kruislinks (wederzijdse SEO)
- Aanvullende inhoud
- Wederzijdse verwijzingen
- Redactionele coordinatie

**Voorbeeld:**
- Hub: klimaat-manifest.nl
- Satelliet 1: klimaat-data.info (data)
- Satelliet 2: lokale-acties.net (mobilisatie)
- Satelliet 3: klimaat-verhalen.nl (verhalen)`,
      tips: [
        'Diversifieer hosts voor veerkracht',
        'Gebruik verschillende registrars voor domeinen',
        'Coordineer publicatietiming',
        'Creeer een gemeenschappelijke visuele identiteit maar onderscheidende sites',
      ],
      narrative: 'Ze kunnen een stem afsnijden. Ze kunnen een koor niet het zwijgen opleggen.',
    },
    campaignLaunch: {
      title: 'Lanceer een Campagne',
      description: 'Van idee naar impact',
      content: `**Een succesvolle campagne:**

**1. Definieer het doel**
- Welke verandering wil je?
- Hoe meet je succes?
- Wat is je veranderingstheorie?

**2. Identificeer het publiek**
- Wie kan hefboom creeren?
- Wat zijn hun kanalen?
- Welke boodschappen resoneren?

**3. Creeer de inhoud**
- Hub + gecoordineerde satellieten
- Deelbare visuals
- Boodschappen aangepast aan kanalen

**4. Plan de timing**
- Triggergebeurtenissen
- Kansen
- Publicatiekalender

**5. Versterk**
- Doorgifte via bondgenoten
- Organisch delen
- Alternatieve persrelaties

**6. Meet en pas aan**
- Ethische analytics
- Kwalitatieve feedback
- Continue iteratie`,
      tips: [
        'Timing is cruciaal: surf op het nieuws',
        'Kleine overwinningen houden motivatie hoog',
        'Documenteer alles voor toekomstige campagnes',
        'Rust maakt deel uit van de strategie',
      ],
      narrative: 'Je bent niet langer toeschouwer. Je bent een agent van verandering.',
      awakening: 'Het systeem rekent op onze passiviteit. Jouw actie bewijst dat het ongelijk heeft.',
    },
    beyond: {
      title: 'Verder Gaan',
      description: 'C!AoWORD is pas het begin',
      content: `**C!AoWORD is een toegangspoort.**

Wanneer je klaar bent om verder te gaan:

**Geavanceerde tools:**
- Site generatoren: Eleventy, Hugo, Astro
- Frameworks: React, Vue, Svelte
- Headless CMS: Strapi, Directus

**Aanvullende vaardigheden:**
- Geavanceerde SEO en contentstrategie
- Ethische analytics (Plausible, Umami)
- Automatisering en CI/CD
- Veiligheid en anonimiteit

**De CIAoWORLD suite:**
- C!AoSCAN: Geautomatiseerde monitoring en analyse
- C!AoNET: Sitenetwerkbeheer
- C!AoVOX: Gecoordineerde versterking
- C!AoSAFE: Veiligheid en anonimiteit

**Gemeenschap:**
Je bent niet alleen. Anderen hebben dit pad voor je bewandeld. Anderen zullen volgen. De code is open, kennis wordt gedeeld.

**Het echte doel:**
Het gaat niet om tools beheersen. Het gaat om het terugwinnen van macht over je digitale leven en, daardoor, over de wereld.`,
      tips: [
        'Leren stopt nooit',
        'Deel je kennis: onderwijs',
        'C!AoWORD broncode is vrij: draag bij',
        'Elke gecreeerde site is een overwinning',
      ],
      narrative: 'Het vrije web bestaat. Het wacht alleen tot wij het bevolken.',
      awakening: 'Je maakt nu deel uit van degenen die bouwen in plaats van degenen die consumeren.',
    },
  },
  de: {
    welcome: {
      title: 'Willkommen bei C!AoWORD',
      description: 'Das Web gehort Ihnen. Ubernehmen Sie die Kontrolle.',
      content: `C!AoWORD ist nicht nur ein Website-Editor. Es ist ein Emanzipationswerkzeug.

**Die Wahrheit, die man Ihnen nicht sagt:**

Das Web wurde geschaffen, um dezentralisiert, frei und fur alle zuganglich zu sein. Aber grosse Plattformen haben uns vergessen lassen, dass wir niemandes Erlaubnis brauchen, um online zu existieren.

Eine einfache HTML-Datei genugt, um der ganzen Welt zu veroffentlichen. Kein Konto zu erstellen, keine Bedingungen zu akzeptieren, keine Daten abzugeben.

**Was Sie hier lernen werden:**

1. Technische Grundlagen (HTML, CSS, JavaScript)
2. Kritische Analyse bestehender Websites
3. Gegen-Einfluss und Subversionstechniken
4. Koordinierte Website-Netzwerke erstellen
5. Grosskampagnen starten

Sie sind nicht zufallig hier. Etwas hat Sie dazu gebracht, eine Alternative zu den ausgetretenen Pfaden zu suchen. Vertrauen Sie dieser Intuition.`,
      tips: [
        'Alles, was Sie hier erstellen, gehort wirklich Ihnen',
        'Es werden keine Daten gesammelt oder gesendet',
        'Das Tool funktioniert vollstandig lokal',
        'Sie konnen es selbst hosten',
      ],
      awakening: 'Sie haben gerade den ersten Schritt getan. Die meisten Menschen erkennen nie, dass sie die Macht haben, ohne um Erlaubnis zu fragen zu veroffentlichen.',
    },
    interface: {
      title: 'Ihr Arbeitsplatz',
      description: 'Eine Werkstatt fur Kreation und Widerstand',
      content: `**Ihre Arbeitsoberflache:**

1. **Code-Editor**: Ihre Kreativwerkstatt
2. **Vorschau**: Sehen Sie sofort das Ergebnis
3. **Konsole**: Verstehen Sie, was hinter den Kulissen passiert
4. **Missionen**: Ihr Lern- und Aktionspfad
5. **Assistent**: Ein Fuhrer (kein Aufseher)

**Vollstandige Anpassung:**

C!AoWORD ist gemacht, um sich an Sie anzupassen, nicht umgekehrt. Andern Sie die Grosse, reorganisieren Sie, andern Sie Farben. Es ist Ihr Raum.

**Philosophie:**

Im Gegensatz zu "No-Code"-Tools, die Sie in Vorlagen einsperren, lernen Sie hier wirklich. Der Code, den Sie schreiben, gehort Ihnen, ist lesbar, exportierbar, unabhangig.`,
      tips: [
        'Jede Anderung wird automatisch gespeichert',
        'Sie konnen Ihre Arbeit jederzeit exportieren',
        'Der Assistent urteilt nicht, er fuhrt',
        'Tastaturkurzel beschleunigen Ihre Arbeit',
      ],
    },
    htmlPower: {
      title: 'HTML: Das Skelett der Macht',
      description: 'Verstehen Sie die Struktur, um sie besser zu unterwandern',
      content: `**HTML ist nicht neutral.**

Die Struktur einer Webseite beeinflusst tiefgreifend, wie sie wahrgenommen wird. Semantische Tags (header, main, footer, article) sind nicht nur technisch: sie organisieren das Denken.

**Grundstruktur:**
\`\`\`html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Ihre Botschaft</title>
</head>
<body>
    <header>Wer spricht?</header>
    <main>Was wird gesagt?</main>
    <footer>Woher kommt dieser Diskurs?</footer>
</body>
</html>
\`\`\`

**Kritisches Lesen:**

Wenn Sie eine Website besuchen, fragen Sie sich:
- Welche Informationshierarchie wird etabliert?
- Was wird hervorgehoben / versteckt?
- Wie lenkt die Struktur die Aufmerksamkeit?`,
      tips: [
        'Suchmaschinen lesen die HTML-Struktur, um Inhalte zu verstehen',
        'Gute Struktur = besseres SEO = mehr Sichtbarkeit',
        'Bildschirmleser sind auf semantische Tags angewiesen',
      ],
      awakening: 'Sie haben gerade Ihren ersten Raum im Web geschaffen. Er gehort keiner Plattform.',
    },
    cssAesthetics: {
      title: 'CSS: Die Asthetik der Botschaft',
      description: 'Stil ist niemals unschuldig',
      content: `**Design beeinflusst die Wahrnehmung.**

Grosse Marken und Institutionen investieren Millionen in ihre visuelle Identitat. Warum? Weil Asthetik Vertrauen, Glaubwurdigkeit und Emotion schafft.

**Visuelle Codes der Macht:**

- Nuchterne Farben = seriös, institutionell
- Serifenschrift = Tradition, Autoritat
- Weiss = Reinheit, Modernitat, Luxus
- Blau = Vertrauen, Technologie

**Ihre Wahl:**

Sie konnen diese Codes ubernehmen, um ernst genommen zu werden... oder sie unterwandern, um einen frappierenden Kontrast zu schaffen.

**CSS Variablen fur Konsistenz:**
\`\`\`css
:root {
    --color-power: #2D4A42;
    --color-rebellion: #B39BC8;
}
\`\`\``,
      tips: [
        'Studieren Sie das Design von Seiten, die Sie kontern wollen',
        'Ein "Amateur"-Design kann als authentisch wahrgenommen werden',
        'Visuelle Konsistenz starkt die Glaubwurdigkeit',
        'Farbkontraste beeinflussen die Barrierefreiheit',
      ],
      narrative: 'Design ist keine Dekoration. Es ist eine Sprache der Macht.',
    },
    jsAction: {
      title: 'JavaScript: Zum Leben Erwecken',
      description: 'Interaktivitat im Dienst der Botschaft',
      content: `**JavaScript ermoglicht Interaktion.**

Aber Vorsicht: Es kann auch zum Verfolgen, Manipulieren, Einsperren verwendet werden. Nutzen Sie es ethisch.

**Legitime Verwendung:**
- Animation und visuelles Feedback
- Formulare und Validierung
- Dynamische Inhalte
- Lokale Personalisierung (ohne Server)

**Was wir nicht tun:**
- Invasives Tracking
- Verhaltensmanipulation
- Suchtig machendes unendliches Scrollen
- Aufdringliche Benachrichtigungen

**Beispiel: Ehrlicher Teilzahler**
\`\`\`javascript
// Keine falschen Zahler, um Dringlichkeit zu erzeugen
// Nur echte Interaktion
button.addEventListener('click', () => {
    shares++;
    updateDisplay(shares);
});
\`\`\``,
      tips: [
        'Testen Sie immer ohne JavaScript (Barrierefreiheit)',
        'Weniger Code = weniger Schwachstellen',
        'localStorage ermoglicht Persistenz ohne Server',
        'Respektieren Sie die "Do Not Track"-Wahl',
      ],
      narrative: 'Jede Codezeile ist eine ethische Entscheidung. Sie konnen erschaffen ohne zu manipulieren.',
    },
    criticalAnalysis: {
      title: 'Kritische Analyse',
      description: 'Dekonstruieren, um besser zu verstehen',
      content: `**Jede Seite tragt einen Diskurs.**

Lernen Sie, jede Website zu analysieren, um zu verstehen:

**1. Wer spricht?**
- Wer steckt hinter dieser Seite?
- Welche Interessen verteidigt sie?
- Wer finanziert?

**2. Zu wem?**
- Was ist die Zielgruppe?
- Welche Codes werden verwendet, um sie zu erreichen?
- Welche Emotionen werden angesprochen?

**3. Wie?**
- Welche Informationsstruktur?
- Welche Dark Patterns?
- Welche Uberzeugungstechniken?

**4. Warum?**
- Was ist das eigentliche Ziel?
- Was wollen sie, dass Sie tun/denken/kaufen?

**Ubung:**
Nehmen Sie eine institutionelle Website und wenden Sie dieses Analyseraster an.`,
      tips: [
        'Rechtliche Hinweise enthullen oft, wer die Seite wirklich besitzt',
        'Design ist teuer: Wer hat bezahlt?',
        'Formulare sammeln Daten: welche und warum?',
        'Cookies verraten kommerzielle Partner',
      ],
      narrative: 'Die Faden zu sehen bedeutet bereits, sich von ihnen zu befreien.',
      awakening: 'Sie werden eine Website nie wieder auf die gleiche Weise betrachten.',
    },
    cloning: {
      title: 'Die Kunst des Klonens',
      description: 'Reproduzieren, um besser zu unterwandern',
      content: `**Klonen ist nicht Kopieren.**

Website-Klonen ist eine Studien- und Unterwanderungstechnik. Wir reproduzieren, um:

1. **Studieren**: die Struktur verstehen
2. **Analysieren**: verwendete Techniken identifizieren
3. **Unterwandern**: kritische Versionen erstellen
4. **Testen**: mit Gegenbotschaften experimentieren

**Wie es funktioniert:**

Das Klonmodul extrahiert:
- HTML-Struktur
- CSS-Stile
- Ressourcen (Bilder, Schriften)

Sie erhalten eine anpassbare lokale Kopie.

**Ethische Verwendung:**
- Parodie und Satire (rechtlich geschutzt)
- Akademische Analyse
- Medienbildung
- Burger-Gegenkampagnen

**Achtung:** Das Recht auf Parodie existiert, aber prufen Sie die Gesetze Ihres Landes.`,
      tips: [
        'Parodie ist in den meisten Demokratien geschutzt',
        'Andern Sie genug, damit es klar satirisch ist',
        'Dokumentieren Sie Ihre kritische Absicht',
        'Hosten Sie auf schutzenden Gerichtsbarkeiten',
      ],
      narrative: 'Die Machtigen hassen es, parodiert zu werden. Genau deshalb ist Parodie geschutzt.',
    },
    deployment: {
      title: 'Veroffentlichen Ohne Erlaubnis',
      description: 'Bringen Sie Ihre Kreation online',
      content: `**Das dezentralisierte Web existiert noch.**

Mehrere Optionen zum Veroffentlichen ohne Abhangigkeit von Big Tech:

**Kostenlos und respektvoll:**
- **GitHub Pages**: Kostenlos, HTTPS, benutzerdefinierte Domain
- **Netlify**: Kostenlos, globales CDN, Formulare
- **Vercel**: Kostenlos, sehr schnell
- **Neocities**: Der Geist des freien Webs

**Mehr autonom:**
- **Personlicher Server**: Totale Kontrolle
- **Ethische Hoster**: Gandi, OVH, Infomaniak

**Prozess:**
1. Exportieren Sie Ihr Projekt (ZIP)
2. Erstellen Sie ein Konto auf der gewahlten Plattform
3. Laden Sie hoch oder verbinden Sie ein Git-Repo
4. Ihre Seite ist in Minuten online

**Tipps:**
- Wahlen Sie einen aussagekraftigen Domainnamen
- Aktivieren Sie HTTPS (bei den meisten automatisch)
- Kein Tracking = keine DSGVO zu verwalten`,
      tips: [
        'Eine .de kostet ~8EUR/Jahr - das ist Ihre Unabhangigkeit',
        'GitHub Pages = unbegrenztes kostenloses Hosting',
        'Netlify bietet kostenlose serverlose Funktionen',
        'Denken Sie an Widerstandsfahigkeit: Backup auf mehreren Plattformen',
      ],
      awakening: 'Ihre Stimme ist jetzt offentlich. Niemand kann sie Ihnen wegnehmen.',
    },
    networkStrategy: {
      title: 'Netzwerkstrategie',
      description: 'Eine Seite ist gut, ein Netzwerk ist besser',
      content: `**Die Kraft des dezentralisierten Netzwerks.**

Eine einzelne Seite kann:
- Ignoriert werden
- Delistiert werden
- Zensiert werden
- DDoSed werden

Aber ein Netzwerk von miteinander verbundenen Seiten ist widerstandsfahig.

**Empfohlene Architektur:**

1. **Zentraler Hub**: Ihre Hauptseite, Ihre Botschaft
2. **Satelliten**: Seiten zu spezifischen Aspekten
3. **Spiegel**: Sicherungskopien
4. **Relais**: Befreundete Seiten, die Echo geben

**Verknupfungstechniken:**
- Kreuzlinks (gegenseitige SEO)
- Erganzende Inhalte
- Gegenseitige Verweise
- Redaktionelle Koordination

**Beispiel:**
- Hub: klima-manifest.de
- Satellit 1: klima-daten.info (Daten)
- Satellit 2: lokale-aktionen.net (Mobilisierung)
- Satellit 3: klima-geschichten.de (Geschichten)`,
      tips: [
        'Diversifizieren Sie Hoster fur Widerstandsfahigkeit',
        'Verwenden Sie verschiedene Registrare fur Domains',
        'Koordinieren Sie den Veroffentlichungszeitpunkt',
        'Schaffen Sie eine gemeinsame visuelle Identitat, aber unterschiedliche Seiten',
      ],
      narrative: 'Sie konnen eine Stimme abschneiden. Sie konnen einen Chor nicht zum Schweigen bringen.',
    },
    campaignLaunch: {
      title: 'Eine Kampagne Starten',
      description: 'Von der Idee zur Wirkung',
      content: `**Eine erfolgreiche Kampagne:**

**1. Ziel definieren**
- Welche Veranderung wollen Sie?
- Wie messen Sie Erfolg?
- Was ist Ihre Veranderungstheorie?

**2. Publikum identifizieren**
- Wer kann Hebelwirkung erzeugen?
- Was sind ihre Kanale?
- Welche Botschaften resonieren?

**3. Inhalt erstellen**
- Hub + koordinierte Satelliten
- Teilbare Visuals
- An Kanale angepasste Botschaften

**4. Timing planen**
- Auslösende Ereignisse
- Gelegenheitsfenster
- Veroffentlichungskalender

**5. Verstarken**
- Weiterleitung durch Verbundete
- Organisches Teilen
- Alternative Pressebeziehungen

**6. Messen und anpassen**
- Ethische Analytics
- Qualitatives Feedback
- Kontinuierliche Iteration`,
      tips: [
        'Timing ist entscheidend: Reiten Sie auf den Nachrichten',
        'Kleine Siege halten die Motivation aufrecht',
        'Dokumentieren Sie alles fur zukunftige Kampagnen',
        'Ruhe ist Teil der Strategie',
      ],
      narrative: 'Sie sind nicht langer Zuschauer. Sie sind ein Agent des Wandels.',
      awakening: 'Das System zahlt auf unsere Passivitat. Ihre Aktion beweist, dass es sich irrt.',
    },
    beyond: {
      title: 'Weiter Gehen',
      description: 'C!AoWORD ist nur der Anfang',
      content: `**C!AoWORD ist ein Tor.**

Wenn Sie bereit sind, weiterzugehen:

**Fortgeschrittene Tools:**
- Site-Generatoren: Eleventy, Hugo, Astro
- Frameworks: React, Vue, Svelte
- Headless CMS: Strapi, Directus

**Erganzende Fahigkeiten:**
- Fortgeschrittene SEO und Content-Strategie
- Ethische Analytics (Plausible, Umami)
- Automatisierung und CI/CD
- Sicherheit und Anonymitat

**Die CIAoWORLD-Suite:**
- C!AoSCAN: Automatisierte Uberwachung und Analyse
- C!AoNET: Site-Netzwerk-Management
- C!AoVOX: Koordinierte Verstarkung
- C!AoSAFE: Sicherheit und Anonymitat

**Gemeinschaft:**
Sie sind nicht allein. Andere haben diesen Weg vor Ihnen gegangen. Andere werden folgen. Der Code ist offen, Wissen wird geteilt.

**Das wahre Ziel:**
Es geht nicht darum, Tools zu beherrschen. Es geht darum, Macht uber Ihr digitales Leben zuruckzugewinnen und durch es uber die Welt.`,
      tips: [
        'Lernen hort nie auf',
        'Teilen Sie Ihr Wissen: unterrichten Sie',
        'C!AoWORD-Quellcode ist frei: tragen Sie bei',
        'Jede erstellte Seite ist ein Sieg',
      ],
      narrative: 'Das freie Web existiert. Es wartet nur darauf, dass wir es besiedeln.',
      awakening: 'Sie sind jetzt Teil derer, die bauen, anstatt derer, die konsumieren.',
    },
  },
};

export const tutorialStepIds = [
  'welcome',
  'interface',
  'htmlPower',
  'cssAesthetics',
  'jsAction',
  'criticalAnalysis',
  'cloning',
  'deployment',
  'networkStrategy',
  'campaignLaunch',
  'beyond',
] as const;

export type TutorialStepId = typeof tutorialStepIds[number];
