import type { Template } from '../types';

export const templates: Template[] = [
  {
    id: 'hello-world',
    name: 'Hello World',
    description: 'Le point de départ - votre premier site statique',
    category: 'Débutant',
    difficulty: 'beginner',
    files: {
      'index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Bonjour le Monde!</h1>
    <p>Bienvenue dans C!AoWORD</p>
    <script src="script.js"></script>
</body>
</html>`,
      'style.css': `body {
    font-family: system-ui, sans-serif;
    margin: 0;
    padding: 2rem;
    background: linear-gradient(135deg, #98D8C8 0%, #C8B5D8 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1 {
    color: #2D4A42;
    font-size: 3rem;
    margin: 0;
}

p {
    color: #3A5A4F;
    font-size: 1.5rem;
}`,
      'script.js': `console.log('Bienvenue dans C!AoWORD!');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page chargée avec succès');
});`,
    },
  },
  {
    id: 'portfolio-simple',
    name: 'Portfolio Simple',
    description: 'Un portfolio professionnel responsive',
    category: 'Intermédiaire',
    difficulty: 'intermediate',
    files: {
      'index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <h1>Mon Portfolio</h1>
            <ul>
                <li><a href="#about">À propos</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h2>Créateur Web</h2>
            <p>Bienvenue sur mon portfolio</p>
        </section>

        <section id="about">
            <h2>À propos</h2>
            <p>Développeur passionné par le web statique et les performances.</p>
        </section>

        <section id="projects">
            <h2>Mes Projets</h2>
            <div class="project-grid">
                <article class="project-card">
                    <h3>Projet 1</h3>
                    <p>Description du projet</p>
                </article>
                <article class="project-card">
                    <h3>Projet 2</h3>
                    <p>Description du projet</p>
                </article>
            </div>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <p>Contactez-moi pour discuter de votre projet</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Mon Portfolio</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>`,
      'style.css': `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --color-primary: #7CB9A8;
    --color-secondary: #B39BC8;
    --color-bg: #F5FAF8;
    --color-text: #2D4A42;
}

body {
    font-family: system-ui, -apple-system, sans-serif;
    background: var(--color-bg);
    color: var(--color-text);
    line-height: 1.6;
}

header {
    background: white;
    padding: 1rem 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 2rem;
}

nav a {
    color: var(--color-text);
    text-decoration: none;
    transition: color 0.3s;
}

nav a:hover {
    color: var(--color-primary);
}

main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

section {
    margin: 4rem 0;
}

#hero {
    text-align: center;
    padding: 4rem 0;
}

#hero h2 {
    font-size: 3rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.project-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
}

footer {
    background: var(--color-text);
    color: white;
    text-align: center;
    padding: 2rem;
    margin-top: 4rem;
}

@media (max-width: 768px) {
    nav {
        flex-direction: column;
        gap: 1rem;
    }

    nav ul {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
}`,
      'script.js': `document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('Portfolio chargé avec succès');`,
    },
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'Page d\'atterrissage moderne avec animations',
    category: 'Avancé',
    difficulty: 'advanced',
    files: {
      'index.html': `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page Pro</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <div class="logo">Brand</div>
            <button class="cta-btn">Commencer</button>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Créez Votre Futur Digital</h1>
            <p class="hero-subtitle">La solution moderne pour les sites statiques performants</p>
            <button class="hero-cta">Découvrir</button>
        </div>
        <div class="hero-visual"></div>
    </section>

    <section class="features">
        <h2>Pourquoi Nous Choisir?</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3>Ultra Rapide</h3>
                <p>Performance optimale</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🔒</div>
                <h3>Sécurisé</h3>
                <p>Pas de serveur, pas de failles</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🎨</div>
                <h3>Personnalisable</h3>
                <p>Design sur mesure</p>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>`,
      'style.css': `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

:root {
    --primary: #7CB9A8;
    --secondary: #B39BC8;
    --dark: #2D4A42;
    --light: #F5FAF8;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: var(--light);
    color: var(--dark);
    overflow-x: hidden;
}

.header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1.5rem 5%;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0,0,0,0.05);
}

.nav {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
}

.cta-btn {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(124, 185, 168, 0.3);
}

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8rem 5% 4rem;
    background: linear-gradient(135deg, #F5FAF8 0%, #E8F3F0 100%);
    position: relative;
    overflow: hidden;
}

.hero-content {
    max-width: 600px;
    z-index: 2;
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: #6B8580;
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease-out 0.2s backwards;
}

.hero-cta {
    background: var(--dark);
    color: white;
    border: none;
    padding: 1rem 3rem;
    font-size: 1.125rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s;
    animation: fadeInUp 1s ease-out 0.4s backwards;
}

.hero-cta:hover {
    background: var(--primary);
    transform: scale(1.05);
}

.hero-visual {
    position: absolute;
    right: 5%;
    width: 500px;
    height: 500px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;
}

.features {
    padding: 6rem 5%;
    max-width: 1400px;
    margin: 0 auto;
}

.features h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 4rem;
    color: var(--dark);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
}

.feature-card {
    background: white;
    padding: 3rem 2rem;
    border-radius: 20px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(124, 185, 168, 0.15);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--dark);
}

.feature-card p {
    color: #6B8580;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(10deg);
    }
}

@media (max-width: 768px) {
    .hero {
        text-align: center;
    }

    .hero-visual {
        width: 300px;
        height: 300px;
    }
}`,
      'script.js': `const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = \`all 0.6s ease-out \${index * 0.2}s\`;
    observer.observe(card);
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Button clicked:', button.textContent);
    });
});`,
    },
  },
];
