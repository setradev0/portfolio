import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = [
    {
      role: 'Développeur Freelance Fullstack',
      company: 'Upwork',
      location: 'Antananarivo 101',
      period: 'Mars 2021 - Présent',
      description: [
        'Conception et développement d\'applications web sur mesure pour des clients internationaux : e-commerce, plateformes de communication, marketplaces et outils métier',
        'Plateforme e-commerce de pièces automobiles avec Angular SSR, Strapi CMS, Spring Boot et intégration ERP Epicor (Elasticsearch, Redis, Docker)',
        'Plateforme de bureaux virtuels avec appels vidéo, tchat et webinar en temps réel (KonvaJS, WebRTC via mediasoup)',
        'Marketplace multicanale avec communication vidéo/voix (Vonage), messagerie (WhatsApp, Telegram) et paiement Stripe',
        'Mise en place de systèmes de paiement sécurisés (Stripe, Moneris) et d\'architectures temps réel (Socket.io)',
      ],
      tags: ['Angular', 'Node.js', 'Spring Boot', 'WebRTC', 'Stripe'],
    },
    {
      role: 'Consultant & Développeur Salesforce Certifié',
      company: 'Spoon Consulting',
      location: '',
      period: 'Juin 2020 - Mars 2022',
      description: [
        'Conception et développement de sites et communities Salesforce Experience Cloud',
        'Analyse des besoins clients et transformation en solutions techniques adaptées',
        'Développement back-end en Apex et front-end avec Aura Components et LWC, couverture de tests unitaires Jest',
        'Gestion de projet en méthodologie Agile / Scrum : sprints, revues et livraison continue',
      ],
      tags: ['Salesforce', 'Apex', 'LWC', 'Aura', 'Jest', 'Agile'],
    },
    {
      role: 'Développeur Fullstack Angular / Node.js',
      company: 'Startup E-Kiaky',
      location: '',
      period: 'Juil 2019 - Mai 2020',
      description: [
        'Développement d\'une application de gestion, géolocalisation et démonétisation des transports en commun à Madagascar',
        'Mise en place d\'un serveur Node.js temps réel avec Socket.io et protocole MQTT pour le suivi GPS des bus',
        'Intégration de MapBox pour la cartographie interactive et AgGrid pour la gestion des données tabulaires',
      ],
      tags: ['Angular', 'Node.js', 'MapBox', 'Socket.io', 'MQTT'],
    },
    {
      role: 'Développeur Web',
      company: 'OTIV Tana',
      location: '',
      period: 'Nov 2018 - Juin 2019',
      description: [
        'Conception et développement du site institutionnel de la microfinance OTIV Tana avec le framework Laravel',
        'Mise en place de l\'architecture back-end, de la base de données MySQL et de l\'interface utilisateur',
      ],
      tags: ['Laravel', 'PHP', 'MySQL'],
    },
  ];
}
