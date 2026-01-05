import type { Mission } from '../types';

export const missions: Mission[] = [
  {
    id: 'awakening-001',
    phase: 'awakening',
    title: 'Premier Contact',
    subtitle: 'Le web vous appartient',
    description: 'Créez votre première page web et découvrez que vous avez toujours eu le pouvoir de publier.',
    narrative: `Chaque jour, des milliards de personnes consomment du contenu web sans jamais réaliser qu'elles pourraient en créer. Le web a été conçu pour être décentralisé, ouvert, accessible. Mais les plateformes nous ont fait oublier cette vérité fondamentale : publier sur le web ne nécessite aucune permission.`,
    objectives: [
      { id: 'a001-1', description: 'Créer une page HTML avec votre premier message', type: 'create', completed: false },
      { id: 'a001-2', description: 'Styliser votre page avec CSS', type: 'create', completed: false },
      { id: 'a001-3', description: 'Ajouter une interaction JavaScript', type: 'create', completed: false },
    ],
    rewards: [
      { type: 'insight', id: 'insight-001', name: 'Souveraineté Numérique', description: 'Vous comprenez que le web vous appartient autant qu\'aux géants.' },
      { type: 'tool', id: 'tool-preview', name: 'Prévisualisation', description: 'Voir votre création en temps réel' },
    ],
    criticalInsight: 'Les plateformes (Facebook, Twitter, Medium...) vous font croire que vous avez besoin d\'elles pour exister en ligne. C\'est faux. Un fichier HTML sur un serveur suffit.',
    completed: false,
  },
  {
    id: 'awakening-002',
    phase: 'awakening',
    title: 'L\'Architecture du Contrôle',
    subtitle: 'Comprendre pour mieux résister',
    description: 'Analysez comment les sites dominants sont construits pour capturer votre attention et vos données.',
    narrative: `Les interfaces que nous utilisons quotidiennement ne sont pas neutres. Chaque couleur, chaque bouton, chaque notification est le fruit d'une optimisation pour maximiser l'engagement - souvent au détriment de notre bien-être et de notre autonomie.`,
    objectives: [
      { id: 'a002-1', description: 'Étudier la structure d\'un site mainstream', type: 'analyze', completed: false },
      { id: 'a002-2', description: 'Identifier 3 dark patterns', type: 'analyze', completed: false },
      { id: 'a002-3', description: 'Documenter les techniques de persuasion utilisées', type: 'analyze', completed: false },
    ],
    rewards: [
      { type: 'insight', id: 'insight-002', name: 'Lecture Critique', description: 'Vous voyez désormais les mécanismes cachés.' },
      { type: 'tool', id: 'tool-analyzer', name: 'Analyseur de Sites', description: 'Déconstruire n\'importe quel site' },
    ],
    criticalInsight: 'Les dark patterns ne sont pas des bugs, ce sont des features. Scroll infini, notifications, likes, streaks... tout est conçu pour créer de la dépendance.',
    unlocks: ['observation-001'],
    completed: false,
  },
  {
    id: 'observation-001',
    phase: 'observation',
    title: 'Cartographie du Pouvoir',
    subtitle: 'Qui parle ? À qui ? Pourquoi ?',
    description: 'Apprenez à analyser la communication institutionnelle et corporative pour déceler les narratifs dominants.',
    narrative: `Tout message est porteur d'une intention. Les sites institutionnels, les pages corporate, les médias mainstream construisent une vision du monde qui sert des intérêts spécifiques. Apprendre à les lire, c'est commencer à s'en émanciper.`,
    objectives: [
      { id: 'o001-1', description: 'Cloner un site institutionnel', type: 'clone', completed: false },
      { id: 'o001-2', description: 'Analyser son vocabulaire et ses images', type: 'analyze', completed: false },
      { id: 'o001-3', description: 'Identifier le public cible et l\'intention', type: 'analyze', completed: false },
    ],
    rewards: [
      { type: 'insight', id: 'insight-003', name: 'Décryptage', description: 'Vous lisez entre les lignes.' },
      { type: 'tool', id: 'tool-cloner', name: 'Module de Clonage', description: 'Reproduire n\'importe quelle page' },
    ],
    criticalInsight: 'La "neutralité" n\'existe pas. Chaque choix éditorial (ce qui est mis en avant, ce qui est caché, les mots utilisés) est politique.',
    resources: [
      { id: 'res-001', title: 'Manufacturing Consent - Chomsky', type: 'book', description: 'Comment les médias fabriquent le consentement', critical: true },
      { id: 'res-002', title: 'La société du spectacle - Debord', type: 'book', description: 'Critique de la société de consommation médiatique', critical: true },
    ],
    unlocks: ['observation-002', 'deconstruction-001'],
    completed: false,
  },
  {
    id: 'observation-002',
    phase: 'observation',
    title: 'Veille Stratégique',
    subtitle: 'Observer sans être vu',
    description: 'Mettez en place un système de veille pour surveiller les communications de cibles stratégiques.',
    narrative: `L'information est pouvoir. Savoir ce que communiquent vos adversaires, comprendre leurs stratégies, anticiper leurs mouvements - c'est le premier pas vers une contre-offensive efficace.`,
    objectives: [
      { id: 'o002-1', description: 'Identifier 3 cibles à surveiller', type: 'analyze', completed: false },
      { id: 'o002-2', description: 'Créer une page de veille avec flux RSS', type: 'create', completed: false },
      { id: 'o002-3', description: 'Documenter les patterns de communication observés', type: 'analyze', completed: false },
    ],
    rewards: [
      { type: 'tool', id: 'tool-watch', name: 'Tableau de Veille', description: 'Centraliser votre surveillance' },
      { type: 'insight', id: 'insight-004', name: 'Anticipation', description: 'Vous voyez venir les coups.' },
    ],
    completed: false,
  },
  {
    id: 'deconstruction-001',
    phase: 'deconstruction',
    title: 'Détournement',
    subtitle: 'Retourner leurs armes contre eux',
    description: 'Apprenez l\'art du détournement : prendre un message dominant et le subvertir pour révéler sa vraie nature.',
    narrative: `Le détournement est une arme puissante. En reprenant les codes visuels et langagiers du pouvoir, on peut les retourner, les parodier, les déconstruire. C'est une forme de guérilla sémiotique.`,
    objectives: [
      { id: 'd001-1', description: 'Cloner un site corporate ou institutionnel', type: 'clone', completed: false },
      { id: 'd001-2', description: 'Modifier son contenu pour révéler ses non-dits', type: 'create', completed: false },
      { id: 'd001-3', description: 'Créer une version satirique convaincante', type: 'create', completed: false },
    ],
    rewards: [
      { type: 'template', id: 'tpl-subvert', name: 'Templates Subversifs', description: 'Structures prêtes à détourner' },
      { type: 'power', id: 'power-subvert', name: 'Subversion', description: 'Capacité à détourner les codes' },
    ],
    criticalInsight: 'Le pouvoir repose sur des symboles et des narratifs. Les attaquer, c\'est fragiliser le pouvoir lui-même.',
    resources: [
      { id: 'res-003', title: 'Culture Jamming - Lasn', type: 'book', description: 'L\'art du détournement publicitaire', critical: true },
      { id: 'res-004', title: 'The Yes Men', type: 'video', description: 'Documentaire sur l\'activisme par le détournement' },
    ],
    unlocks: ['creation-001'],
    completed: false,
  },
  {
    id: 'creation-001',
    phase: 'creation',
    title: 'Votre Première Arme',
    subtitle: 'Créer pour influencer',
    description: 'Créez un site complet avec un message fort, prêt à être déployé et partagé.',
    narrative: `Vous avez appris à lire, à analyser, à déconstruire. Il est temps de créer. Votre site sera votre voix, votre plateforme, votre espace de liberté. Concevez-le pour qu'il porte votre message loin.`,
    objectives: [
      { id: 'c001-1', description: 'Définir votre message central', type: 'create', completed: false },
      { id: 'c001-2', description: 'Créer un site complet (HTML, CSS, JS)', type: 'create', completed: false },
      { id: 'c001-3', description: 'Optimiser pour le partage social', type: 'create', completed: false },
      { id: 'c001-4', description: 'Déployer sur un hébergement gratuit', type: 'deploy', completed: false },
    ],
    rewards: [
      { type: 'power', id: 'power-publish', name: 'Publication', description: 'Capacité à mettre en ligne' },
      { type: 'tool', id: 'tool-deploy', name: 'Déploiement Express', description: 'Publier en un clic' },
    ],
    unlocks: ['influence-001'],
    completed: false,
  },
  {
    id: 'influence-001',
    phase: 'influence',
    title: 'Amplification',
    subtitle: 'Faire résonner votre voix',
    description: 'Apprenez les techniques d\'amplification organique pour maximiser l\'impact de votre message.',
    narrative: `Un message, même brillant, ne sert à rien s'il n'est pas entendu. Vous allez apprendre à optimiser votre contenu pour qu'il se propage naturellement, sans dépendre des algorithmes des plateformes.`,
    objectives: [
      { id: 'i001-1', description: 'Optimiser les métadonnées pour le SEO', type: 'create', completed: false },
      { id: 'i001-2', description: 'Créer des visuels partageables', type: 'create', completed: false },
      { id: 'i001-3', description: 'Mettre en place le tracking éthique', type: 'create', completed: false },
    ],
    rewards: [
      { type: 'insight', id: 'insight-005', name: 'Viralité', description: 'Comprendre ce qui se propage.' },
      { type: 'tool', id: 'tool-seo', name: 'Optimiseur SEO', description: 'Maximiser votre visibilité' },
    ],
    unlocks: ['network-001'],
    completed: false,
  },
  {
    id: 'network-001',
    phase: 'network',
    title: 'Tisser la Toile',
    subtitle: 'Seul on va vite, ensemble on va loin',
    description: 'Créez un réseau de sites satellites qui se renforcent mutuellement.',
    narrative: `Un seul site peut être ignoré, censuré, oublié. Mais un réseau de sites interconnectés, qui se font écho, qui se soutiennent, devient impossible à faire taire. C'est l'heure de penser en réseau.`,
    objectives: [
      { id: 'n001-1', description: 'Créer 3 sites satellites sur des angles différents', type: 'create', completed: false },
      { id: 'n001-2', description: 'Établir des liens stratégiques entre eux', type: 'connect', completed: false },
      { id: 'n001-3', description: 'Déployer le réseau', type: 'deploy', completed: false },
    ],
    rewards: [
      { type: 'power', id: 'power-network', name: 'Réseau', description: 'Capacité à coordonner plusieurs sites' },
      { type: 'tool', id: 'tool-campaign', name: 'Gestionnaire de Campagne', description: 'Orchestrer votre réseau' },
    ],
    unlocks: ['campaign-001'],
    completed: false,
  },
  {
    id: 'campaign-001',
    phase: 'campaign',
    title: 'Opération',
    subtitle: 'Lancer l\'offensive',
    description: 'Concevez et lancez une campagne coordonnée pour influencer un débat public.',
    narrative: `Vous avez les outils, les compétences, le réseau. Il est temps d'agir. Choisissez votre bataille, planifiez votre campagne, coordonnez vos forces, et frappez là où ça compte.`,
    objectives: [
      { id: 'camp-1', description: 'Définir l\'objectif de la campagne', type: 'create', completed: false },
      { id: 'camp-2', description: 'Créer le hub central et les satellites', type: 'create', completed: false },
      { id: 'camp-3', description: 'Planifier le calendrier de publication', type: 'create', completed: false },
      { id: 'camp-4', description: 'Lancer et monitorer la campagne', type: 'deploy', completed: false },
    ],
    rewards: [
      { type: 'power', id: 'power-campaign', name: 'Stratège', description: 'Capacité à mener des campagnes d\'envergure' },
      { type: 'insight', id: 'insight-006', name: 'Impact', description: 'Vous savez comment changer les choses.' },
    ],
    criticalInsight: 'Le changement ne vient jamais d\'en haut. Il se construit, patiemment, par ceux qui refusent l\'ordre établi.',
    completed: false,
  },
];

export const getPhaseInfo = (phase: string): { name: string; description: string; color: string } => {
  const phases: Record<string, { name: string; description: string; color: string }> = {
    awakening: {
      name: 'Éveil',
      description: 'Prendre conscience de son pouvoir',
      color: '#7CB9A8',
    },
    observation: {
      name: 'Observation',
      description: 'Comprendre les mécanismes du pouvoir',
      color: '#6BA89A',
    },
    deconstruction: {
      name: 'Déconstruction',
      description: 'Démystifier les narratifs dominants',
      color: '#B39BC8',
    },
    creation: {
      name: 'Création',
      description: 'Forger ses propres armes',
      color: '#A58BBB',
    },
    influence: {
      name: 'Influence',
      description: 'Amplifier sa voix',
      color: '#977BAE',
    },
    network: {
      name: 'Réseau',
      description: 'Tisser des alliances',
      color: '#896BA1',
    },
    campaign: {
      name: 'Campagne',
      description: 'Changer le monde',
      color: '#7B5B94',
    },
  };
  return phases[phase] || { name: phase, description: '', color: '#888' };
};
