import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      title: 'E-Commerce Pièces Auto',
      description:
        'Site e-commerce de pièces automobiles avec Angular SSR, Strapi CMS (GraphQL/Apollo), Spring Boot pour l\'intégration ERP Epicor. Elasticsearch, Redis, Docker, paiement Moneris.',
      tags: ['Angular', 'Strapi', 'Spring Boot', 'Elasticsearch', 'Redis'],
      image: 'shopping',
      logo: 'images/pasuper-logo.png',
      link: 'https://pasuper.com',
      note: 'Site accessible uniquement au Canada — Utilisez un VPN pointant vers le Canada pour y accéder.',
    },
    {
      title: 'Bureaux Virtuels',
      description:
        'Plateforme de bureaux virtuels avec appel vidéo, tchat et webinar. Utilisation de KonvaJS pour la création des espaces et WebRTC (mediasoup) pour les communications temps réel.',
      tags: ['Angular', 'WebRTC', 'KonvaJS', 'Socket.io', 'Stripe'],
      image: 'video',
      logo: 'images/hublive-logo.png',
      link: 'https://hublive.io',
    },
    {
      title: 'EvidMind — Consultation en ligne',
      description:
        'Plateforme de consultation et d\'accompagnement personnel avec appels VoIP via Twilio, système de crédits temps réel et paiement sécurisé Stripe. Thème WordPress sur-mesure.',
      tags: ['WordPress', 'PHP', 'Twilio', 'WebRTC', 'VoIP', 'Stripe'],
      image: 'brain',
      logo: 'images/evidmind-logo.png',
      link: 'https://evidmind.com',
    },
    {
      title: 'Communication Multicanale',
      description:
        'Marketplace de services professionnels avec communication multicanale : appels vidéo/voix (Vonage), SMS, WhatsApp, Telegram et tchat in-app. Vente de vidéos et images à la demande ou par abonnement. Système de crédits et paiement Stripe.',
      tags: ['Angular', 'Node.js', 'Vonage', 'Stripe', 'Socket.io', 'Swagger'],
      image: 'chat',
      logo: 'images/livitalk-logo.png',
      link: 'https://livitalk.com/',
    },
    {
      title: 'Expériences Cloud Salesforce',
      description:
        'Développement de sites et communities Salesforce. Transformation des besoins clients en solutions techniques avec Apex, Aura Components et LWC.',
      tags: ['Salesforce', 'Apex', 'LWC', 'Aura', 'Jest'],
      image: 'cloud',
    },
    {
      title: 'Gestion Transport (Bus)',
      description:
        'Application de gestion, géolocalisation et démonétisation des transports en commun à Madagascar. Serveur Node.js temps réel avec Socket.io et MQTT.',
      tags: ['Angular', 'Node.js', 'MapBox', 'Socket.io', 'MQTT'],
      image: 'map',
    },
    {
      title: 'Site OTIV Tana',
      description:
        'Création du site local de l\'institution de microfinance OTIV Tana avec le framework Laravel.',
      tags: ['Laravel', 'PHP', 'MySQL'],
      image: 'code',
    },
  ];
}
