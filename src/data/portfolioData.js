export const projects = [
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description: "Application SaaS pour le suivi et l'analyse de données en temps réel avec graphiques interactifs et export de rapports.",
    longDescription: "Ce projet complet a été développé dans le cadre d'une solution de gestion d'entreprise. Il permet de centraliser les métriques clés, d'afficher des graphiques dynamiques avec Recharts, et de gérer les rôles utilisateurs.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/goltrand-boukoumou/saas-dashboard",
    demoUrl: "https://saas-dashboard-demo.io",
    image: "/project-saas.webp",
    problem: "Les entreprises manquaient d'une vue centralisée et fluide pour analyser leurs indicateurs financiers et de trafic en direct.",
    solution: "Développement d'un tableau de bord ultra-réactif avec des composants modulaires et un design system cohérent.",
    impact: "Réduction de 40% du temps de génération des rapports mensuels pour les équipes de gestion."
  },
  {
    id: "ecommerce-hub",
    title: "E-Commerce Luxe Hub",
    description: "Plateforme e-commerce haut de gamme axée sur l'expérience utilisateur et les micro-interactions fluides.",
    longDescription: "Boutique en ligne conçue pour présenter des produits d'exception avec un catalogue filtrable en temps réel, un panier synchrone et un tunnel de commande sécurisé.",
    technologies: ["JavaScript", "React", "Node.js", "CSS Modules"],
    githubUrl: "https://github.com/goltrand-boukoumou/ecommerce-hub",
    demoUrl: "https://ecommerce-hub-demo.io",
    image: "/project-ecommerce.webp",
    problem: "Taux d'abandon de panier élevé sur l'ancienne plateforme en raison de temps de chargement trop lents et d'un tunnel trop complexe.",
    solution: "Refonte complète avec une approche Single Page App, lazy loading des images et tunnel de commande en 2 étapes.",
    impact: "Augmentation de 25% du taux de conversion et diminution du taux de rebond de 30%."
  },
  {
    id: "weather-app",
    title: "Météo Intelligente & Cartographie",
    description: "Application météo géolocalisée avec prévisions heure par heure et alertes dynamiques.",
    longDescription: "Application web progressif (PWA) consommant l'API météo mondiale, intégrant des visualisations graphiques des températures et des cartes interactives.",
    technologies: ["JavaScript", "React", "API REST", "Leaflet"],
    githubUrl: "https://github.com/goltrand-boukoumou/weather-app",
    demoUrl: "https://weather-app-demo.io",
    image: "/project-weather.webp",
    problem: "Besoin d'accéder rapidement à des données météorologiques hyper-locales avec une interface épurée sans publicité.",
    solution: "Interface intuitive avec géolocalisation automatique, recherche rapide et mode sombre natif.",
    impact: "Adopté par plus de 5 000 utilisateurs actifs mensuels."
  }
];

export const skills = [
  { name: "JavaScript (ES6+)", level: 90, category: "Frontend / Langage" },
  { name: "React / React Router", level: 85, category: "Framework" },
  { name: "HTML5 / CSS3 / Tailwind", level: 95, category: "Design & Intégration" },
  { name: "Node.js / Express", level: 75, category: "Backend" },
  { name: "Git / GitHub / CI", level: 80, category: "Outils & DevOps" },
  { name: "UI/UX Design / Figma", level: 85, category: "Design" }
];

export const testimonials = [
  {
    id: 1,
    name: "Elena Vance",
    role: "Lead Product Manager",
    company: "Aura Digital",
    content: "Travailler avec Goltrand a été une révélation. Son sens du détail, sa maîtrise de React et son œil pour le design ont propulsé notre projet vers un niveau supérieur.",
    avatar: "/avatar-1.webp"
  },
  {
    id: 2,
    name: "Marc Leroy",
    role: "CTO",
    company: "TechFlow Solutions",
    content: "Un développeur exceptionnel qui comprend à la fois la technique et les besoins utilisateurs. Les livrables étaient toujours impeccables et dans les temps.",
    avatar: "/avatar-2.webp"
  }
];

export const faqData = [
  {
    question: "Comment se déroule une collaboration avec vous ?",
    answer: "Nous commençons par définir vos besoins précis lors d'un premier échange. Ensuite, je propose une maquette et un plan technique avant de procéder au développement itératif avec des points réguliers."
  },
  {
    question: "Quelles technologies utilisez-vous principalement ?",
    answer: "Je me spécialise en JavaScript moderne (ES6+), React, Vite, et CSS/Tailwind pour le design responsive et performant."
  },
  {
    question: "Quels sont vos délais moyens de réalisation ?",
    answer: "Les délais varient selon la complexité du projet : de 2 à 4 semaines pour un portfolio ou site vitrine, et de 4 à 8 semaines pour une application web sur mesure."
  }
];

export const teamMembers = [
  {
    name: "Goltrand Boukoumou",
    role: "Développeur Fullstack & Designer UI/UX",
    photo: "/team-goltrand.webp"
  }
];
