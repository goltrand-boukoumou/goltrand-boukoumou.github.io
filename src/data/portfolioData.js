export const projects = [
  {
    id: "saas-dashboard",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/goltrand-boukoumou/saas-dashboard",
    demoUrl: "https://saas-dashboard-demo.io",
    image: "/project-saas.webp",
    translations: {
      fr: {
        title: "SaaS Analytics Dashboard",
        description: "Application SaaS pour le suivi et l'analyse de données en temps réel avec graphiques interactifs et export de rapports.",
        longDescription: "Ce projet complet a été développé dans le cadre d'une solution de gestion d'entreprise. Il permet de centraliser les métriques clés, d'afficher des graphiques dynamiques avec Recharts, et de gérer les rôles utilisateurs.",
        problem: "Les entreprises manquaient d'une vue centralisée et fluide pour analyser leurs indicateurs financiers et de trafic en direct.",
        solution: "Développement d'un tableau de bord ultra-réactif avec des composants modulaires et un design system cohérent.",
        impact: "Réduction de 40% du temps de génération des rapports mensuels pour les équipes de gestion."
      },
      en: {
        title: "SaaS Analytics Dashboard",
        description: "SaaS application for real-time data monitoring and analysis with interactive charts and report exports.",
        longDescription: "This complete project was developed for an enterprise management solution. It centralizes key metrics, displays dynamic charts with Recharts, and manages user roles.",
        problem: "Businesses lacked a centralized and fluid view to analyze their financial and traffic indicators in real time.",
        solution: "Built a highly responsive dashboard using modular components and a cohesive design system.",
        impact: "Cut monthly report generation time by 40% for management teams."
      },
      es: {
        title: "Panel de Analítica SaaS",
        description: "Aplicación SaaS para seguimiento y análisis de datos en tiempo real con gráficos interactivos y exportación de informes.",
        longDescription: "Este proyecto completo se desarrolló para una solución de gestión empresarial. Centraliza métricas clave, muestra gráficos dinámicos con Recharts y administra roles de usuario.",
        problem: "Las empresas carecían de una vista centralizada y fluida para analizar sus indicadores financieros y de tráfico en directo.",
        solution: "Desarrollo de un panel ultrarrápido con componentes modulares y un sistema de diseño coherente.",
        impact: "Reducción del 40% en el tiempo de generación de informes mensuales para los equipos de gestión."
      },
      zh: {
        title: "SaaS 分析仪表板",
        description: "用于实时数据监控和分析的 SaaS 应用，包含交互式图表和报表导出功能。",
        longDescription: "该完整项目是为企业管理解决方案开发的。它集中展示关键指标、使用 Recharts 动态图表，并管理用户角色。",
        problem: "企业缺乏一个集中且流畅的视图来实时分析其财务和流量指标。",
        solution: "构建了一个高度响应的仪表板，采用模块化组件和一致的设计系统。",
        impact: "管理团队每月生成报告的时间减少了 40%。"
      }
    }
  },
  {
    id: "ecommerce-hub",
    technologies: ["JavaScript", "React", "Node.js", "CSS Modules"],
    githubUrl: "https://github.com/goltrand-boukoumou/ecommerce-hub",
    demoUrl: "https://ecommerce-hub-demo.io",
    image: "/project-ecommerce.webp",
    translations: {
      fr: {
        title: "E-Commerce Luxe Hub",
        description: "Plateforme e-commerce haut de gamme axée sur l'expérience utilisateur et les micro-interactions fluides.",
        longDescription: "Boutique en ligne conçue pour présenter des produits d'exception avec un catalogue filtrable en temps réel, un panier synchrone et un tunnel de commande sécurisé.",
        problem: "Taux d'abandon de panier élevé sur l'ancienne plateforme en raison de temps de chargement trop lents et d'un tunnel trop complexe.",
        solution: "Refonte complète avec une approche Single Page App, lazy loading des images et tunnel de commande en 2 étapes.",
        impact: "Augmentation de 25% du taux de conversion et diminution du taux de rebond de 30%."
      },
      en: {
        title: "Luxury E-Commerce Hub",
        description: "Premium e-commerce platform focused on user experience and smooth micro-interactions.",
        longDescription: "Online store designed to showcase exceptional products with a real-time filterable catalog, synced cart, and secure checkout flow.",
        problem: "The previous platform suffered from high cart abandonment due to slow loading and a complex checkout flow.",
        solution: "Complete redesign using a Single Page App approach, lazy image loading, and a two-step checkout experience.",
        impact: "Converted rate up 25% and reduced bounce rate by 30%."
      },
      es: {
        title: "Centro de Comercio de Lujo",
        description: "Plataforma de comercio electrónico premium centrada en la experiencia de usuario y las microinteracciones fluidas.",
        longDescription: "Tienda en línea diseñada para presentar productos excepcionales con catálogo filtrable en tiempo real, carrito sincronizado y proceso de compra seguro.",
        problem: "La plataforma anterior presentaba una alta tasa de abandono del carrito por tiempos de carga lentos y un proceso de compra demasiado complejo.",
        solution: "Rediseño completo con enfoque SPA, carga diferida de imágenes y proceso de compra en dos pasos.",
        impact: "Aumento del 25% en la tasa de conversión y reducción del 30% en la tasa de rebote."
      },
      zh: {
        title: "奢华电商中心",
        description: "以用户体验和流畅微交互为核心的高端电商平台。",
        longDescription: "在线商店用于展示精选商品，配备实时筛选目录、同步购物车和安全结账流程。",
        problem: "旧平台因加载缓慢和结账流程过于复杂，导致购物车放弃率高。",
        solution: "采用单页应用方案、图片懒加载和两步结账流程进行全面重构。",
        impact: "转化率提升 25%，跳出率下降 30%。"
      }
    }
  },
  {
    id: "weather-app",
    technologies: ["JavaScript", "React", "API REST", "Leaflet"],
    githubUrl: "https://github.com/goltrand-boukoumou/weather-app",
    demoUrl: "https://weather-app-demo.io",
    image: "/project-weather.webp",
    translations: {
      fr: {
        title: "Météo Intelligente & Cartographie",
        description: "Application météo géolocalisée avec prévisions heure par heure et alertes dynamiques.",
        longDescription: "Application web progressif (PWA) consommant l'API météo mondiale, intégrant des visualisations graphiques des températures et des cartes interactives.",
        problem: "Besoin d'accéder rapidement à des données météorologiques hyper-locales avec une interface épurée sans publicité.",
        solution: "Interface intuitive avec géolocalisation automatique, recherche rapide et mode sombre natif.",
        impact: "Adopté par plus de 5 000 utilisateurs actifs mensuels."
      },
      en: {
        title: "Smart Weather & Mapping",
        description: "Geo-localized weather app with hourly forecasts and dynamic alerts.",
        longDescription: "Progressive web app consuming the global weather API, integrating temperature data visualizations and interactive maps.",
        problem: "Need for quick access to hyper-local weather data with a clean ad-free interface.",
        solution: "Intuitive interface with automatic geolocation, fast search, and native dark mode.",
        impact: "Adopted by more than 5,000 monthly active users."
      },
      es: {
        title: "Meteorología Inteligente y Cartografía",
        description: "Aplicación meteorológica geolocalizada con previsiones por horas y alertas dinámicas.",
        longDescription: "Aplicación web progresiva (PWA) que consume la API meteorológica mundial e integra visualizaciones gráficas de temperatura y mapas interactivos.",
        problem: "Necesidad de acceder rápidamente a datos meteorológicos hiperlocales con una interfaz limpia y sin anuncios.",
        solution: "Interfaz intuitiva con geolocalización automática, búsqueda rápida y modo oscuro nativo.",
        impact: "Adoptada por más de 5.000 usuarios activos mensuales."
      },
      zh: {
        title: "智能天气与地图",
        description: "基于地理位置的天气应用，提供逐小时预报和动态警报。",
        longDescription: "渐进式 Web 应用（PWA）接入全球天气 API，整合温度图表和交互式地图。",
        problem: "需要快速访问超本地天气数据，并且界面干净且无广告。",
        solution: "采用自动地理定位、快速搜索和原生深色模式的直观界面。",
        impact: "月活跃用户超过 5,000 人。"
      }
    }
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
    avatar: "/avatar-1.webp",
    translations: {
      fr: {
        content: "Travailler avec Goltrand a été une révélation. Son sens du détail, sa maîtrise de React et son œil pour le design ont propulsé notre projet vers un niveau supérieur."
      },
      en: {
        content: "Working with Goltrand was a revelation. His eye for detail, mastery of React, and design sense took our project to the next level."
      },
      es: {
        content: "Trabajar con Goltrand fue una revelación. Su atención al detalle, dominio de React y visión de diseño llevaron nuestro proyecto a un nivel superior."
      },
      zh: {
        content: "与 Goltrand 合作是一种启发。他对细节的关注、对 React 的掌握以及设计敏感度让我们的项目提升到了一个新高度。"
      }
    }
  },
  {
    id: 2,
    name: "Marc Leroy",
    role: "CTO",
    company: "TechFlow Solutions",
    avatar: "/avatar-2.webp",
    translations: {
      fr: {
        content: "Un développeur exceptionnel qui comprend à la fois la technique et les besoins utilisateurs. Les livrables étaient toujours impeccables et dans les temps."
      },
      en: {
        content: "An exceptional developer who understands both the technical side and user needs. Deliverables were always impeccable and on time."
      },
      es: {
        content: "Un desarrollador excepcional que entiende tanto la parte técnica como las necesidades del usuario. Los entregables siempre fueron impecables y puntuales."
      },
      zh: {
        content: "一位非常出色的开发者，既懂技术，也能理解用户需求。交付物始终高质量且准时完成。"
      }
    }
  }
];

export const faqData = [
  {
    translations: {
      fr: {
        question: "Comment se déroule une collaboration avec vous ?",
        answer: "Nous commençons par définir vos besoins précis lors d'un premier échange. Ensuite, je propose une maquette et un plan technique avant de procéder au développement itératif avec des points réguliers."
      },
      en: {
        question: "How does a collaboration with you work?",
        answer: "We begin by defining your precise needs during an initial exchange. Then I propose a mockup and technical plan before moving into iterative development with regular checkpoints."
      },
      es: {
        question: "¿Cómo funciona una colaboración contigo?",
        answer: "Empezamos definiendo tus necesidades precisas durante un primer intercambio. Luego propongo un mockup y un plan técnico antes de pasar al desarrollo iterativo con revisiones regulares."
      },
      zh: {
        question: "与您合作的流程是怎样的？",
        answer: "我们会先在初次沟通中明确您的具体需求。随后，我会提出原型和技术方案，然后进行定期评审的迭代开发。"
      }
    }
  },
  {
    translations: {
      fr: {
        question: "Quelles technologies utilisez-vous principalement ?",
        answer: "Je me spécialise en JavaScript moderne (ES6+), React, Vite, et CSS/Tailwind pour le design responsive et performant."
      },
      en: {
        question: "What technologies do you mainly use?",
        answer: "I specialize in modern JavaScript (ES6+), React, Vite, and CSS/Tailwind for responsive and high-performance design."
      },
      es: {
        question: "¿Qué tecnologías utilizas principalmente?",
        answer: "Me especializo en JavaScript moderno (ES6+), React, Vite y CSS/Tailwind para un diseño responsive y de alto rendimiento."
      },
      zh: {
        question: "你主要使用哪些技术？",
        answer: "我专注于现代 JavaScript（ES6+）、React、Vite 和 CSS/Tailwind，用于高性能且响应式的设计。"
      }
    }
  },
  {
    translations: {
      fr: {
        question: "Quels sont vos délais moyens de réalisation ?",
        answer: "Les délais varient selon la complexité du projet : de 2 à 4 semaines pour un portfolio ou site vitrine, et de 4 à 8 semaines pour une application web sur mesure."
      },
      en: {
        question: "What are your average delivery times?",
        answer: "Timelines vary by project complexity: 2 to 4 weeks for a portfolio or showcase site, and 4 to 8 weeks for a custom web application."
      },
      es: {
        question: "¿Cuáles son sus tiempos medios de entrega?",
        answer: "Los plazos varían según la complejidad del proyecto: de 2 a 4 semanas para un portafolio o sitio de presentación, y de 4 a 8 semanas para una aplicación web a medida."
      },
      zh: {
        question: "你的平均交付周期是什么？",
        answer: "交付周期因项目复杂度而异：个人作品集或展示型网站通常为 2 到 4 周，自定义 Web 应用约为 4 到 8 周。"
      }
    }
  }
];

export const teamMembers = [
  {
    name: "Goltrand Boukoumou",
    photo: "/team-goltrand.webp",
    translations: {
      fr: { role: "Développeur Fullstack & Designer UI/UX" },
      en: { role: "Fullstack Developer & UI/UX Designer" },
      es: { role: "Desarrollador Fullstack y Diseñador UI/UX" },
      zh: { role: "全栈开发者与 UI/UX 设计师" }
    }
  }
];
