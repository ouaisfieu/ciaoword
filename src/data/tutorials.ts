import type { TutorialStep } from '../types';

export const tutorialSteps: TutorialStep[] = [
  {
    id: 'welcome',
    title: 'Bienvenue dans C!AoWORD',
    description: 'Découvrez votre poste de travail pour sites statiques',
    content: `C!AoWORD est un environnement de développement complet conçu pour créer des sites web statiques.

**Qu'est-ce qu'un site statique ?**

Un site statique est composé de fichiers HTML, CSS et JavaScript qui sont servis directement au navigateur sans traitement serveur. C'est la forme la plus pure et performante du web.`,
    tips: [
      'Les sites statiques sont ultra-rapides',
      'Pas de base de données = pas de failles de sécurité',
      'Hébergement gratuit ou très économique',
      'Idéal pour portfolios, blogs, landing pages',
    ],
    constraints: [
      'Pas de contenu dynamique côté serveur',
      'Pas de formulaires avec traitement serveur natif',
      'Pas de zones membres sans services externes',
    ],
    nextSteps: [
      'Utiliser des services externes pour les formulaires (Formspree, Netlify Forms)',
      'Ajouter des CMS headless (Strapi, Contentful) pour gérer le contenu',
      'Utiliser des générateurs de sites statiques (Eleventy, Hugo, Next.js SSG)',
    ],
  },
  {
    id: 'interface',
    title: 'Découverte de l\'Interface',
    description: 'Familiarisez-vous avec les panneaux et outils',
    content: `**L'interface se compose de plusieurs zones :**

1. **Éditeur de Code** (gauche) : Écrivez votre HTML, CSS et JavaScript
2. **Prévisualisation** (droite) : Voyez le résultat en temps réel
3. **Explorateur de Fichiers** (sidebar) : Gérez vos fichiers
4. **Console** (bas) : Messages, erreurs et logs
5. **Assistant** : Aide contextuelle et suggestions

**Personnalisation :**
- Redimensionnez les panneaux en glissant les bordures
- Changez les thèmes via les paramètres
- Masquez/affichez les panneaux selon vos besoins`,
    tips: [
      'Les modifications sont sauvegardées automatiquement',
      'Utilisez les raccourcis clavier pour gagner du temps',
      'La prévisualisation se met à jour en temps réel',
    ],
  },
  {
    id: 'html-basics',
    title: 'HTML : La Structure',
    description: 'Comprendre le squelette de votre page',
    content: `**HTML (HyperText Markup Language)** définit la structure et le contenu de votre page.

**Structure de base :**
\`\`\`html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Titre de la page</title>
</head>
<body>
    <h1>Contenu ici</h1>
</body>
</html>
\`\`\`

**Balises essentielles :**
- \`<header>\` : En-tête de page
- \`<main>\` : Contenu principal
- \`<footer>\` : Pied de page
- \`<nav>\` : Navigation
- \`<section>\` : Section de contenu
- \`<article>\` : Article autonome`,
    code: {
      'index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma Première Page</title>
</head>
<body>
    <header>
        <h1>Mon Site</h1>
    </header>

    <main>
        <section>
            <h2>Bienvenue</h2>
            <p>Ceci est ma première page HTML.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Mon Site</p>
    </footer>
</body>
</html>`,
    },
    tips: [
      'Utilisez des balises sémantiques pour un meilleur SEO',
      'La balise viewport est essentielle pour le responsive',
      'Toujours fermer vos balises',
    ],
  },
  {
    id: 'css-styling',
    title: 'CSS : Le Style',
    description: 'Donnez vie à votre design',
    content: `**CSS (Cascading Style Sheets)** contrôle l'apparence de votre site.

**Sélecteurs de base :**
- \`element\` : Cible tous les éléments d'un type
- \`.class\` : Cible par classe
- \`#id\` : Cible par identifiant unique

**Box Model :**
Chaque élément est une boîte avec :
- Content (contenu)
- Padding (espacement intérieur)
- Border (bordure)
- Margin (espacement extérieur)

**Flexbox & Grid :**
Systèmes modernes de mise en page.`,
    code: {
      'style.css': `/* Variables CSS */
:root {
    --primary-color: #7CB9A8;
    --secondary-color: #B39BC8;
}

/* Reset de base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: system-ui, sans-serif;
    line-height: 1.6;
    color: #2D4A42;
}

/* Layout Flexbox */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: var(--primary-color);
    color: white;
}

/* Layout Grid */
main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
}`,
    },
    tips: [
      'Utilisez des variables CSS pour la cohérence',
      'Flexbox pour les layouts 1D, Grid pour 2D',
      'Mobile-first : commencez par le mobile',
    ],
    constraints: [
      'Certaines propriétés CSS ne fonctionnent pas sur tous les navigateurs',
      'Les animations peuvent impacter les performances',
    ],
    nextSteps: [
      'Apprendre les préprocesseurs CSS (Sass, PostCSS)',
      'Explorer les frameworks CSS (Tailwind, Bootstrap)',
      'Maîtriser les animations et transitions',
    ],
  },
  {
    id: 'javascript-interactivity',
    title: 'JavaScript : L\'Interactivité',
    description: 'Rendez votre site dynamique et interactif',
    content: `**JavaScript** ajoute de l'interactivité à votre site.

**Concepts clés :**
- DOM : Manipulation des éléments HTML
- Events : Réagir aux actions utilisateur
- Fetch : Récupérer des données externes
- LocalStorage : Sauvegarder des données localement

**Sites statiques vs dynamiques :**
Même "statique", votre site peut être très interactif avec JavaScript !`,
    code: {
      'script.js': `// Attendre le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page chargée');

    // Sélectionner un élément
    const button = document.querySelector('button');

    // Écouter un événement
    button?.addEventListener('click', () => {
        alert('Bouton cliqué!');
    });

    // Fetch API
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Erreur:', error));

    // LocalStorage
    localStorage.setItem('theme', 'dark');
    const theme = localStorage.getItem('theme');
});`,
    },
    tips: [
      'Toujours vérifier que le DOM est chargé',
      'Utilisez const/let au lieu de var',
      'Gérez les erreurs avec try/catch',
    ],
    constraints: [
      'JavaScript peut être désactivé par l\'utilisateur',
      'Le code est visible par tous (pas de secrets)',
      'Pas de traitement serveur',
    ],
    nextSteps: [
      'Apprendre des frameworks (React, Vue, Svelte)',
      'Utiliser des bundlers (Vite, Webpack)',
      'Explorer TypeScript pour plus de sécurité',
    ],
  },
  {
    id: 'performance',
    title: 'Performance & Optimisation',
    description: 'Créez des sites ultra-rapides',
    content: `**Optimisation des sites statiques :**

**Images :**
- Utilisez des formats modernes (WebP, AVIF)
- Compressez vos images
- Utilisez lazy loading

**CSS & JavaScript :**
- Minifiez vos fichiers
- Utilisez le code splitting
- Chargez les ressources critiques en premier

**Hébergement :**
- CDN pour distribution globale
- HTTP/2 ou HTTP/3
- Compression GZIP/Brotli`,
    tips: [
      'Un site statique est naturellement performant',
      'Testez avec Lighthouse pour des scores 100/100',
      'Moins de code = plus de vitesse',
    ],
    constraints: [
      'Les images trop lourdes ralentissent le chargement',
      'Trop de JavaScript peut annuler les bénéfices',
    ],
    nextSteps: [
      'Utiliser des outils de build (Vite, Parcel)',
      'Implémenter un Service Worker pour PWA',
      'Générer des images responsive automatiquement',
    ],
  },
  {
    id: 'deployment',
    title: 'Déploiement & Hébergement',
    description: 'Mettez votre site en ligne',
    content: `**Options d'hébergement pour sites statiques :**

**Gratuit :**
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

**Processus :**
1. Exportez votre site depuis C!AoWORD
2. Créez un repository Git (optionnel)
3. Déployez sur la plateforme choisie

**Domaine personnalisé :**
Tous ces services permettent d'ajouter votre propre nom de domaine.`,
    tips: [
      'Le déploiement prend quelques secondes',
      'Les mises à jour sont instantanées',
      'HTTPS est automatiquement activé',
    ],
    nextSteps: [
      'Configurer un CI/CD automatique',
      'Ajouter un CMS headless',
      'Implémenter des fonctions serverless',
    ],
  },
  {
    id: 'beyond',
    title: 'Aller Plus Loin',
    description: 'Quand C!AoWORD ne suffit plus',
    content: `**C!AoWORD est parfait pour apprendre, mais vous aurez peut-être besoin de :**

**Générateurs de sites statiques :**
- Eleventy (11ty) - Simple et flexible
- Hugo - Ultra rapide
- Next.js (SSG) - React avec génération statique
- Astro - Multi-framework

**Quand migrer :**
- Besoin de centaines de pages
- Contenu géré par des non-développeurs
- Optimisations avancées automatiques
- Intégrations complexes

**C!AoWORD reste utile pour :**
- Prototyper rapidement
- Apprendre les fondamentaux
- Créer des pages simples
- Tester des idées`,
    tips: [
      'Ne pas sur-complexifier inutilement',
      'Les fondamentaux HTML/CSS/JS sont universels',
      'C!AoWORD peut exporter du code compatible',
    ],
    nextSteps: [
      'Explorer les JAMstack architectures',
      'Apprendre un générateur comme Eleventy',
      'Découvrir les CMS headless',
      'Continuer à créer et expérimenter',
    ],
  },
];
