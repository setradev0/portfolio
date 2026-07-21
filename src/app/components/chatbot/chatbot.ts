import { Component, signal, computed, ElementRef, viewChild, afterNextRender } from '@angular/core';

interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
}

interface Intent {
  keywords: string[];
  answer: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot {
  isOpen = signal(false);
  isTyping = signal(false);
  input = signal('');
  messages = signal<ChatMessage[]>([
    {
      from: 'bot',
      text:
        "Bonjour 👋 Je suis l'assistant du portfolio de Franckie. Posez-moi une question sur ses compétences, ses projets, son expérience ou comment le contacter !",
    },
  ]);

  private scrollAnchor = viewChild<ElementRef<HTMLDivElement>>('scrollAnchor');

  suggestions = [
    'Quelles sont ses compétences ?',
    'Montre-moi ses projets',
    'Son expérience ?',
    'Comment le contacter ?',
    'Est-il disponible ?',
  ];

  hasUserMessage = computed(() => this.messages().some((m) => m.from === 'user'));

  // Base de connaissances — réponses construites à partir des données réelles du portfolio.
  private intents: Intent[] = [
    {
      keywords: ['bonjour', 'salut', 'hello', 'coucou', 'hey', 'bonsoir'],
      answer:
        "Bonjour ! 😊 Ravi de vous accueillir. Vous voulez en savoir plus sur les compétences, les projets, l'expérience ou le contact de Franckie ?",
    },
    {
      keywords: ['competence', 'skill', 'techno', 'stack', 'langage', 'framework', 'maitrise', 'sait faire'],
      answer:
        "Franckie est développeur Full Stack. Ses compétences principales :\n• Frontend : Angular, TypeScript, HTML5/CSS3, Bootstrap, LWC\n• Backend : Node.js, Spring Boot, Laravel (PHP), Strapi, Salesforce Apex, GraphQL\n• Bases de données : MySQL, MongoDB, Elasticsearch, Redis, Prisma\n• DevOps : Docker, CI/CD, AWS (S3), Git, Linux\n• IA / Vibe Coding : Claude Code, Cursor, GitHub Copilot",
    },
    {
      keywords: ['projet', 'realisation', 'portfolio', 'travaux', 'demo', 'application'],
      answer:
        "Voici quelques projets marquants :\n• E-Commerce Pièces Auto — Angular SSR, Strapi, Spring Boot, Elasticsearch (pasuper.com)\n• Bureaux Virtuels — appels vidéo & webinar en WebRTC/KonvaJS (hublive.io)\n• EvidMind — consultation en ligne, VoIP Twilio, Stripe (evidmind.com)\n• Salesforce Experience Cloud — Apex, LWC, Aura\n• Gestion Transport Bus — Node.js temps réel, Socket.io, MQTT, MapBox\nRendez-vous dans la section Projets pour les détails 👇",
    },
    {
      keywords: ['angular', 'frontend', 'front-end', 'front end'],
      answer:
        "Angular est la spécialité de Franckie : Angular SSR, composants signaux, Tailwind, ainsi que LWC côté Salesforce. Il l'a utilisé sur l'e-commerce Pièces Auto, la plateforme de bureaux virtuels et l'app de transport.",
    },
    {
      keywords: ['salesforce', 'apex', 'lwc', 'aura'],
      answer:
        "Franckie est Consultant & Développeur Salesforce certifié (ex-Spoon Consulting). Il maîtrise Apex, Aura Components, LWC, les tests Jest et Experience Cloud, en méthodo Agile/Scrum.",
    },
    {
      keywords: ['experience', 'parcours', 'carriere', 'annee', 'travaille', 'poste', 'emploi'],
      answer:
        "Plus de 6 ans d'expérience :\n• Freelance Fullstack (Upwork) — Mars 2021 → aujourd'hui (Top Rated Plus, +5 000 h, 100% Job Success)\n• Consultant Salesforce — Spoon Consulting (2020–2022)\n• Fullstack Angular/Node — Startup E-Kiaky (2019–2020)\n• Développeur Web — OTIV Tana (2018–2019)",
    },
    {
      keywords: ['formation', 'etude', 'diplome', 'ecole', 'universite', 'licence', 'bac'],
      answer:
        "Formation :\n• Licence en Informatique — Option Développement Web (2018–2019)\n• Baccalauréat (2013–2014)",
    },
    {
      keywords: ['contact', 'email', 'mail', 'joindre', 'ecrire', 'telephone', 'numero', 'appeler', 'coordonnee'],
      answer:
        "Vous pouvez contacter Franckie :\n• Email : setraniainafranckiedev@gmail.com\n• Téléphone : 034 58 664 16\n• Upwork : Top Rated Plus (note 4.9/5)\n• Localisation : Antananarivo, Madagascar\nOu utilisez directement le formulaire de la section Contact 👇",
    },
    {
      keywords: ['disponible', 'dispo', 'recruter', 'embaucher', 'freelance', 'mission', 'collaborer', 'travailler avec'],
      answer:
        "Oui ! Franckie est freelance et ouvert aux nouvelles missions (Top Rated Plus sur Upwork). Le plus simple est de le contacter par email ou via le formulaire de contact pour discuter de votre projet. 🚀",
    },
    {
      keywords: ['upwork', 'note', 'avis', 'rating', 'job success'],
      answer:
        "Sur Upwork, Franckie est Top Rated Plus : note de 4.9/5, 100% de Job Success et plus de 5 000 heures facturées. Un profil de confiance pour vos projets.",
    },
    {
      keywords: ['qui', 'presente', 'about', 'propos', 'parle-moi', 'toi', 'lui'],
      answer:
        "Rakotonirina Setraniaina Franckie est un développeur Full Stack basé à Antananarivo (Madagascar), avec 6+ ans d'expérience et un profil Top Rated Plus sur Upwork. Il conçoit des applications web sur mesure : e-commerce, plateformes temps réel, VoIP/WebRTC, Salesforce…",
    },
    {
      keywords: ['ia', 'intelligence', 'claude', 'copilot', 'cursor', 'vibe', 'prompt'],
      answer:
        "Franckie intègre l'IA dans son workflow (« Vibe Coding ») : Claude Code d'Anthropic, Cursor IDE, GitHub Copilot et le prompt engineering, pour livrer plus vite et plus proprement.",
    },
    {
      keywords: ['merci', 'super', 'genial', 'parfait', 'cool'],
      answer: "Avec plaisir ! 😊 N'hésitez pas si vous avez d'autres questions.",
    },
  ];

  constructor() {
    afterNextRender(() => this.scrollToBottom());
  }

  toggle() {
    this.isOpen.update((v) => !v);
    if (this.isOpen()) {
      setTimeout(() => this.scrollToBottom(), 50);
    }
  }

  sendSuggestion(text: string) {
    this.input.set(text);
    this.send();
  }

  send() {
    const text = this.input().trim();
    if (!text || this.isTyping()) return;

    this.messages.update((m) => [...m, { from: 'user', text }]);
    this.input.set('');
    this.scrollToBottom();

    this.isTyping.set(true);
    const reply = this.findAnswer(text);
    setTimeout(() => {
      this.messages.update((m) => [...m, { from: 'bot', text: reply }]);
      this.isTyping.set(false);
      this.scrollToBottom();
    }, 550);
  }

  private findAnswer(text: string): string {
    const q = this.normalize(text);
    let best: { intent: Intent; score: number } | null = null;

    for (const intent of this.intents) {
      let score = 0;
      for (const kw of intent.keywords) {
        if (q.includes(this.normalize(kw))) score++;
      }
      if (score > 0 && (!best || score > best.score)) {
        best = { intent, score };
      }
    }

    if (best) return best.intent.answer;

    return (
      "Bonne question ! Je peux surtout vous renseigner sur les compétences, les projets, l'expérience, la formation et le contact de Franckie. Essayez par exemple « Quels sont ses projets ? » ou contactez-le directement à setraniainafranckiedev@gmail.com."
    );
  }

  private normalize(s: string): string {
    return s
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '');
  }

  private scrollToBottom() {
    setTimeout(() => {
      this.scrollAnchor()?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 0);
  }
}
