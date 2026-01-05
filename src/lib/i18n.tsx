import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export type Language = 'fr' | 'en' | 'nl' | 'de';

export const languageNames: Record<Language, string> = {
  fr: 'Francais',
  en: 'English',
  nl: 'Nederlands',
  de: 'Deutsch',
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useLocalStorage<Language>('ciaoword-language', 'fr');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        const fallback = translations.fr;
        let fallbackValue: unknown = fallback;
        for (const fk of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue) {
            fallbackValue = (fallbackValue as Record<string, unknown>)[fk];
          } else {
            return key;
          }
        }
        return typeof fallbackValue === 'string' ? fallbackValue : key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export const translations: Record<Language, Record<string, unknown>> = {
  fr: {
    common: {
      next: 'Suivant',
      previous: 'Precedent',
      close: 'Fermer',
      finish: 'Terminer',
      tips: 'Conseils',
      revelation: 'Revelation',
      limits: 'Limites',
      goFurther: 'Pour aller plus loin',
      loadExample: 'Charger l\'exemple de code',
      guideComplete: 'Guide termine. Vous avez les bases. Explorez les missions pour aller plus loin.',
      exampleLoaded: 'Code d\'exemple charge',
    },
    sidebar: {
      missions: 'Missions',
      analyzer: 'Analyseur',
      campaign: 'Campagne',
      editor: 'Editeur',
      guide: 'Guide',
      export: 'Exporter',
      settings: 'Parametres',
      console: 'Console',
      assistant: 'Assistant',
    },
    tutorial: {
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
    },
  },
  en: {
    common: {
      next: 'Next',
      previous: 'Previous',
      close: 'Close',
      finish: 'Finish',
      tips: 'Tips',
      revelation: 'Revelation',
      limits: 'Limits',
      goFurther: 'Going further',
      loadExample: 'Load example code',
      guideComplete: 'Guide complete. You have the basics. Explore missions to go further.',
      exampleLoaded: 'Example code loaded',
    },
    sidebar: {
      missions: 'Missions',
      analyzer: 'Analyzer',
      campaign: 'Campaign',
      editor: 'Editor',
      guide: 'Guide',
      export: 'Export',
      settings: 'Settings',
      console: 'Console',
      assistant: 'Assistant',
    },
    tutorial: {
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
    },
  },
  nl: {
    common: {
      next: 'Volgende',
      previous: 'Vorige',
      close: 'Sluiten',
      finish: 'Voltooien',
      tips: 'Tips',
      revelation: 'Onthulling',
      limits: 'Beperkingen',
      goFurther: 'Verder gaan',
      loadExample: 'Voorbeeldcode laden',
      guideComplete: 'Handleiding voltooid. Je hebt de basis. Verken missies om verder te gaan.',
      exampleLoaded: 'Voorbeeldcode geladen',
    },
    sidebar: {
      missions: 'Missies',
      analyzer: 'Analysator',
      campaign: 'Campagne',
      editor: 'Editor',
      guide: 'Handleiding',
      export: 'Exporteren',
      settings: 'Instellingen',
      console: 'Console',
      assistant: 'Assistent',
    },
    tutorial: {
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
    },
  },
  de: {
    common: {
      next: 'Weiter',
      previous: 'Zuruck',
      close: 'Schliessen',
      finish: 'Beenden',
      tips: 'Tipps',
      revelation: 'Offenbarung',
      limits: 'Grenzen',
      goFurther: 'Weiter gehen',
      loadExample: 'Beispielcode laden',
      guideComplete: 'Anleitung abgeschlossen. Sie haben die Grundlagen. Erkunden Sie Missionen, um weiterzugehen.',
      exampleLoaded: 'Beispielcode geladen',
    },
    sidebar: {
      missions: 'Missionen',
      analyzer: 'Analysator',
      campaign: 'Kampagne',
      editor: 'Editor',
      guide: 'Anleitung',
      export: 'Exportieren',
      settings: 'Einstellungen',
      console: 'Konsole',
      assistant: 'Assistent',
    },
    tutorial: {
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
    },
  },
};
