import { useState, useRef, useEffect } from 'react';
import { useApp } from '../lib/AppContext';
import { MessageCircle, Send, X, Bot, Sparkles } from 'lucide-react';
import type { AssistantMessage } from '../types';

const predefinedResponses: Record<string, string> = {
  hello: "Bonjour ! Je suis votre assistant C!AoWORD. Comment puis-je vous aider aujourd'hui ?",
  help: "Je peux vous aider avec :\n- Comprendre le HTML, CSS et JavaScript\n- Résoudre des erreurs dans votre code\n- Apprendre les bonnes pratiques du web statique\n- Trouver des ressources pour aller plus loin\n\nPosez-moi une question !",
  html: "HTML (HyperText Markup Language) est le langage de structure du web. Il définit le contenu et la hiérarchie de votre page avec des balises comme <div>, <h1>, <p>, etc. Besoin d'aide sur un point spécifique ?",
  css: "CSS (Cascading Style Sheets) contrôle l'apparence de votre site. Utilisez les sélecteurs pour cibler des éléments et appliquer des styles. Les propriétés modernes comme Flexbox et Grid facilitent la mise en page. Que voulez-vous styliser ?",
  javascript: "JavaScript ajoute l'interactivité à votre site. Avec le DOM, vous pouvez manipuler les éléments, réagir aux événements utilisateur, et créer des expériences dynamiques. Sur quoi avez-vous besoin d'aide ?",
  static: "Un site statique est composé de fichiers HTML/CSS/JS servis directement, sans serveur. Avantages : ultra-rapide, sécurisé, économique. Inconvénients : pas de traitement serveur natif. Parfait pour portfolios, blogs, landing pages !",
  deploy: "Pour déployer votre site statique :\n1. Exportez-le via le bouton dans la sidebar\n2. Choisissez un hébergeur (Netlify, Vercel, GitHub Pages)\n3. Uploadez vos fichiers ou connectez votre repo Git\n4. Votre site est en ligne en quelques secondes !",
  error: "Pour résoudre une erreur :\n1. Regardez la console (en bas)\n2. Lisez le message d'erreur\n3. Vérifiez les balises fermées, la syntaxe\n4. Utilisez la validation HTML/CSS\nQuelle erreur rencontrez-vous ?",
};

export function VirtualAssistant() {
  const { theme, layout, setLayout } = useApp();
  const [messages, setMessages] = useState<AssistantMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: "👋 Bonjour ! Je suis votre assistant virtuel C!AoWORD.\n\nJe peux vous aider à comprendre le HTML, CSS, JavaScript et les concepts du web statique.\n\nTapez 'help' pour voir ce que je peux faire !",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [useAI, setUseAI] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: AssistantMessage = {
      id: `${Date.now()}-user`,
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    const lowerInput = input.toLowerCase();
    let response = '';

    if (lowerInput.includes('bonjour') || lowerInput.includes('hello') || lowerInput.includes('salut')) {
      response = predefinedResponses.hello;
    } else if (lowerInput.includes('help') || lowerInput.includes('aide')) {
      response = predefinedResponses.help;
    } else if (lowerInput.includes('html')) {
      response = predefinedResponses.html;
    } else if (lowerInput.includes('css') || lowerInput.includes('style')) {
      response = predefinedResponses.css;
    } else if (lowerInput.includes('javascript') || lowerInput.includes('js')) {
      response = predefinedResponses.javascript;
    } else if (lowerInput.includes('statique') || lowerInput.includes('static')) {
      response = predefinedResponses.static;
    } else if (lowerInput.includes('deploy') || lowerInput.includes('héberg') || lowerInput.includes('publier')) {
      response = predefinedResponses.deploy;
    } else if (lowerInput.includes('erreur') || lowerInput.includes('error') || lowerInput.includes('bug')) {
      response = predefinedResponses.error;
    } else if (useAI) {
      response = "🤖 Mode IA non encore connecté.\n\nPour l'instant, je peux répondre aux questions sur :\n- HTML, CSS, JavaScript\n- Web statique\n- Déploiement\n- Résolution d'erreurs\n\nEssayez de reformuler votre question avec ces mots-clés !";
    } else {
      response = "Je ne suis pas sûr de comprendre votre question. 🤔\n\nTapez 'help' pour voir les sujets sur lesquels je peux vous aider, ou activez le mode IA pour des réponses plus avancées.";
    }

    setTimeout(() => {
      const assistantMessage: AssistantMessage = {
        id: `${Date.now()}-assistant`,
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClose = () => {
    setLayout({ ...layout, showAssistant: false });
  };

  if (!layout.showAssistant) {
    return (
      <button
        onClick={() => setLayout({ ...layout, showAssistant: true })}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
        }}
        title="Ouvrir l'assistant virtuel"
      >
        <MessageCircle size={28} />
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '400px',
        height: '600px',
        background: theme.colors.surface,
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 999,
        border: `1px solid ${theme.colors.border}`,
      }}
    >
      <div
        style={{
          padding: '1rem',
          background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
          color: 'white',
          borderRadius: '16px 16px 0 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Bot size={24} />
          <div>
            <div style={{ fontWeight: 600 }}>Assistant C!AoWORD</div>
            <div style={{ fontSize: '0.75rem', opacity: 0.9 }}>Toujours là pour vous aider</div>
          </div>
        </div>
        <button
          onClick={handleClose}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            padding: '0.5rem',
            borderRadius: '6px',
          }}
        >
          <X size={18} />
        </button>
      </div>

      <div
        style={{
          padding: '1rem',
          borderBottom: `1px solid ${theme.colors.border}`,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer',
            fontSize: '0.875rem',
            color: theme.colors.text,
          }}
        >
          <input
            type="checkbox"
            checked={useAI}
            onChange={(e) => setUseAI(e.target.checked)}
            style={{ cursor: 'pointer' }}
          />
          <Sparkles size={16} color={theme.colors.secondary} />
          Mode IA (expérimental)
        </label>
      </div>

      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                maxWidth: '80%',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                background:
                  msg.role === 'user'
                    ? theme.colors.primary
                    : theme.colors.background,
                color: msg.role === 'user' ? 'white' : theme.colors.text,
                fontSize: '0.875rem',
                whiteSpace: 'pre-wrap',
              }}
            >
              {msg.content}
            </div>
            <div
              style={{
                fontSize: '0.625rem',
                color: theme.colors.textSecondary,
                marginTop: '0.25rem',
              }}
            >
              {new Date(msg.timestamp).toLocaleTimeString()}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div
        style={{
          padding: '1rem',
          borderTop: `1px solid ${theme.colors.border}`,
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Posez votre question..."
          style={{
            flex: 1,
            padding: '0.75rem',
            border: `1px solid ${theme.colors.border}`,
            borderRadius: '8px',
            background: theme.colors.background,
            color: theme.colors.text,
            fontSize: '0.875rem',
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: '0.75rem',
            background: theme.colors.primary,
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
