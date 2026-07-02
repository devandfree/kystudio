import { Project, TeamMember, Service, FAQItem, EstimatorStep } from "../types";

export type Language = "en" | "fr";

export const translations = {
  en: {
    header: {
      home: "Home",
      studio: "Studio",
      services: "Services",
      portfolio: "Work",
      estimator: "Estimator",
      faq: "FAQ",
      contact: "Contact",
      bookBtn: "Book a Consult",
      toggleTheme: "Toggle Theme",
      toggleLang: "Switch to French"
    },
    hero: {
      badge: "Next-Gen Web Creation Studio",
      title1: "Next-Gen",
      title2: "Digital Systems",
      title3: "for Growing Brands.",
      tagline: "// Design & Craft",
      desc: "High-performance bespoke webapps, creative brand portfolios, and digital systems tailored for leaders and category disruptors.",
      viewProjects: "View Projects",
      reachOut: "Reach Out",
      tagDefine: "+ Define",
      tagDefineDesc: "Strategy & UX Wireframes",
      tagDesign: "+ Design",
      tagDesignDesc: "Interactive Mockups & Branding",
      tagDev: "+ Development",
      tagDevDesc: "Tailwind, React & Custom Engines",
      tagDeploy: "+ Deployment",
      tagDeployDesc: "Optimized Vitals & Instant Launch"
    },
    studio: {
      badge: "Who we are",
      title1: "We build search-first digital systems to help category ",
      titleLeaders: "leaders",
      title2: " lead their ",
      titleIndustries: "industries.",
      actionBtn: "ABOUT THE STUDIO"
    },
    stats: {
      badge: "BY THE NUMBERS",
      top1Label: "Expert-Vetted",
      top1Desc: "Recognized in the top 1% of digital creation studios for consistent quality, security, and world-class speed.",
      clientsLabel: "Clients Served",
      clientsDesc: "From hyper-growth SaaS startups to legacy brands, we treat every digital workspace like our flag-bearer product.",
      successLabel: "Success Score",
      successDesc: "Perfect record across client launches. No cut corners, no standard template setups, no compromises.",
      craftLabel: "Years of Craft",
      craftDesc: "Deep, battle-tested expertise in React, Next-gen Web Architectures, and Technical SEO algorithms."
    },
    services: {
      badge: "Services",
      title: "Our Services",
      capabilitiesBadge: "// CAPABILITIES",
      intro: "We craft high-impact digital experiences through strategic design, seamless coding, and creative thinking. Everything is designed from the soil up to ensure premium performance and brand value.",
      specialtyBadge: "SPECIALTY",
      coreDeliverables: "// Core Deliverables"
    },
    portfolio: {
      badge: "Selected Works",
      title: "Crafted Digital Products",
      filterAll: "All",
      filterWebApp: "Web App",
      filterEcom: "E-Commerce",
      filterBrand: "Brand Site",
      filterSaaS: "SaaS",
      similarBtn: "BUILD A SIMILAR SYSTEM",
      lighthouse: "Lighthouse Score: 100/100",
      yearLabel: "YEAR",
      clientStudy: "CLIENT CASE STUDY"
    },
    estimator: {
      badge: "Interactive Estimator",
      title: "Estimate Your Project.",
      desc: "Select your digital targets below. Our real-time engine maps your selections to dynamic studio resource hours to build an instant proposal outline.",
      stepLabel: "STEP 0{step} OF 04",
      finalStep: "FINAL STEP",
      finalTitle: "Secure Your Digital Blueprint",
      finalSubtitle: "Provide your target details. We will formulate a comprehensive strategic Scope of Work outline and email it to you within 2 hours.",
      labelName: "Your Name *",
      labelEmail: "Email Address *",
      labelNotes: "Brief Outline / Special Requests (Optional)",
      namePlaceholder: "Sarah Connor",
      emailPlaceholder: "sarah@skynet.io",
      notesPlaceholder: "Tell us about specific integrations, branding guidelines, or dynamic targets...",
      back: "Back",
      continue: "Continue",
      generateProposal: "Generate Proposal",
      successTitle: "Proposal Generated!",
      successDesc: "Thank you {name}! Our pricing engine has logged your selections. We have dispatched a comprehensive strategic Scope of Work outline to {email}.",
      summaryBadge: "// SUMMARY RECIPIENT OUTLINE",
      summaryEngine: "Project Engine:",
      summaryTotal: "Total Selections:",
      summaryPrice: "Estimated Target Price:",
      summaryTimeline: "Target Timeline:",
      estimateAnother: "Estimate Another Project",
      runningProposal: "// Running Proposal Outline",
      estBudget: "Estimated Budget Estimate",
      factorLabel: "Timeline Factor:",
      deliveryTitle: "Est. Target Delivery",
      digitalForm: "Digital Form:",
      visualScale: "Visual Scale:",
      modulesAdded: "Premium Modules Added:",
      noModules: "No custom modules added yet."
    },
    faq: {
      badge: "ANSWERS TO YOUR QUESTIONS",
      title: "FAQ // Common Questions",
      desc: "Have goals? We have answers. Learn how Kyros Studio shapes exceptional digital experiences."
    },
    contact: {
      badge: "// INTAKE BRIEF",
      title1: "Let's craft",
      title2: "something",
      titleSparkle: "legendary.",
      desc: "An idea? A specifications document? Submit your brief in a single click. Our experts analyze your data and schedule a free strategic call within 24 hours.",
      labelName: "Your Full Name *",
      labelEmail: "Professional Email *",
      labelBudget: "Estimated Project Budget",
      labelDetails: "Project Details (Goals, key features, etc.)",
      namePlaceholder: "Jean Dupont",
      emailPlaceholder: "jean@company.com",
      detailsPlaceholder: "We want to redesign our current e-commerce site with a modern architecture...",
      submitting: "Submitting...",
      submit: "Submit Brief",
      successTitle: "Brief Received!",
      successDesc: "Thank you {name}! Your request has been successfully recorded. Our team is studying your project and will contact you at {email} within 24 business hours.",
      recapBadge: "// BRIEF RECAP",
      recapClient: "Client:",
      recapEmail: "Email:",
      recapBudget: "Budget:",
      recapDetails: "Details:",
      recapEmptyDetails: "No specific details provided.",
      sendAnother: "Send Another Brief",
      workDays: "Mon - Fri, 9:00 AM - 6:30 PM UTC"
    },
    footer: {
      desc: "Next-gen design and full-stack web architectures for growing startups and industry leaders. We build fast, high-performance systems.",
      studio: "// STUDIO",
      initiatives: "// INITIATIVES",
      connect: "// CONNECT",
      newBadge: "NEW",
      acc: "Home",
      aprop: "About",
      serv: "Services",
      port: "Work",
      calc: "Price Estimator",
      faq: "FAQ",
      cont: "Direct Contact"
    }
  },
  fr: {
    header: {
      home: "Accueil",
      studio: "Studio",
      services: "Services",
      portfolio: "Portfolio",
      estimator: "Estimateur",
      faq: "FAQ",
      contact: "Contact",
      bookBtn: "Prendre RDV",
      toggleTheme: "Changer de Thème",
      toggleLang: "Basculer en Anglais"
    },
    hero: {
      badge: "Studio de Création Web Nouvelle Génération",
      title1: "Systèmes",
      title2: "Digitaux d'Élite",
      title3: "pour Marques d'Avenir.",
      tagline: "// Conception & Craft",
      desc: "Applications web sur mesure haute performance, portfolios de marque créatifs et écosystèmes digitaux taillés pour les leaders et disrupteurs.",
      viewProjects: "Découvrir Nos Travaux",
      reachOut: "Nous Contacter",
      tagDefine: "+ Définition",
      tagDefineDesc: "Stratégie & Wireframes UX",
      tagDesign: "+ Design",
      tagDesignDesc: "Maquettes & Branding Interactifs",
      tagDev: "+ Développement",
      tagDevDesc: "React, Tailwind & Moteurs sur Mesure",
      tagDeploy: "+ Déploiement",
      tagDeployDesc: "Lancement Instantané & Web Vitals Optimisés"
    },
    studio: {
      badge: "Qui nous sommes",
      title1: "Nous concevons des systèmes digitaux optimisés SEO pour aider les ",
      titleLeaders: "leaders",
      title2: " à dominer leur ",
      titleIndustries: "secteur.",
      actionBtn: "À PROPOS DU STUDIO"
    },
    stats: {
      badge: "LES CHIFFRES CLÉS",
      top1Label: "Sélection d'Élite",
      top1Desc: "Reconnu parmi le top 1% des studios digitaux pour notre qualité, sécurité et rapidité d'exécution.",
      clientsLabel: "Clients Accompagnés",
      clientsDesc: "Des startups SaaS en pleine croissance aux marques établies, nous traitons chaque projet comme un porte-drapeau.",
      successLabel: "Taux de Succès",
      successDesc: "Un parcours sans faute sur tous nos lancements. Pas de compromis, pas de templates préconçus.",
      craftLabel: "Années d'Expérience",
      craftDesc: "Une expertise éprouvée en React, architectures web modernes et algorithmes SEO techniques."
    },
    services: {
      badge: "Services",
      title: "Nos Services",
      capabilitiesBadge: "// CAPACITÉS",
      intro: "Nous créons des expériences numériques à fort impact grâce à un design stratégique, un code soigné et une pensée créative. Tout est conçu à partir de zéro pour garantir une performance premium et valoriser votre marque.",
      specialtyBadge: "SPÉCIALITÉ",
      coreDeliverables: "// Livrables Principaux"
    },
    portfolio: {
      badge: "Travaux Sélectionnés",
      title: "Produits Digitaux d'Élite",
      filterAll: "Tous",
      filterWebApp: "Application Web",
      filterEcom: "E-Commerce",
      filterBrand: "Site de Marque",
      filterSaaS: "SaaS",
      similarBtn: "CONSTRUIRE UN SYSTÈME SIMILAIRE",
      lighthouse: "Score Lighthouse: 100/100",
      yearLabel: "ANNÉE",
      clientStudy: "ÉTUDE DE CAS CLIENT"
    },
    estimator: {
      badge: "Estimateur Interactif",
      title: "Estimez Votre Projet.",
      desc: "Sélectionnez vos objectifs numériques ci-dessous. Notre moteur de calcul en temps réel associe vos choix aux ressources nécessaires pour créer instantanément une proposition.",
      stepLabel: "ÉTAPE 0{step} SUR 04",
      finalStep: "DERNIÈRE ÉTAPE",
      finalTitle: "Validez Votre Plan de Route",
      finalSubtitle: "Saisissez vos coordonnées. Nous formulerons un plan stratégique de travail complet envoyé directement par email sous 2h.",
      labelName: "Votre Nom complet *",
      labelEmail: "Adresse Email *",
      labelNotes: "Description succinte / Demandes spécifiques (Optionnel)",
      namePlaceholder: "Sarah Connor",
      emailPlaceholder: "sarah@skynet.io",
      notesPlaceholder: "Parlez-nous des intégrations spécifiques, des directives de marque ou de vos objectifs...",
      back: "Retour",
      continue: "Continuer",
      generateProposal: "Générer la Proposition",
      successTitle: "Proposition Générée !",
      successDesc: "Merci {name} ! Notre moteur a enregistré vos choix. Nous vous avons envoyé une proposition stratégique détaillée à l'adresse {email}.",
      summaryBadge: "// RÉCAPITULATIF DE LA PROPOSITION",
      summaryEngine: "Type de Projet :",
      summaryTotal: "Options sélectionnées :",
      summaryPrice: "Budget Estimé :",
      summaryTimeline: "Délai de Livraison :",
      estimateAnother: "Estimer un autre projet",
      runningProposal: "// Détails de la Proposition en Cours",
      estBudget: "Budget Global Estimé",
      factorLabel: "Coefficient de délai :",
      deliveryTitle: "Délai Estimé de Livraison",
      digitalForm: "Format Digital :",
      visualScale: "Échelle Visuelle :",
      modulesAdded: "Modules Premium Ajoutés :",
      noModules: "Aucun module ajouté pour le moment."
    },
    faq: {
      badge: "Des réponses à vos questions",
      title: "FAQ // Questions Fréquentes",
      desc: "Vous avez des objectifs ? Nous avons les réponses. Découvrez comment Kyros Studio façonne des expériences numériques exceptionnelles."
    },
    contact: {
      badge: "// FORMULAIRE DE BRIEF",
      title1: "Créons",
      title2: "quelque chose de",
      titleSparkle: "légendaire.",
      desc: "Une idée ? Un cahier des charges ? Soumettez votre brief d'un simple clic. Nos experts analysent vos données et programment un échange stratégique gratuit sous 24h.",
      labelName: "Votre nom complet *",
      labelEmail: "Email professionnel *",
      labelBudget: "Budget estimé du projet",
      labelDetails: "Détails du projet (Objectifs, fonctionnalités clés, etc.)",
      namePlaceholder: "Jean Dupont",
      emailPlaceholder: "jean@monentreprise.com",
      detailsPlaceholder: "Nous souhaitons refondre notre site e-commerce actuel avec une architecture moderne...",
      submitting: "Envoi en cours...",
      submit: "Envoyer le Brief",
      successTitle: "Briefing Reçu !",
      successDesc: "Merci {name} ! Votre demande a été enregistrée avec succès. Notre équipe étudie votre projet et vous recontactera à l'adresse {email} dans un délai de 24h ouvrées.",
      recapBadge: "// RÉCAPITULATIF BRIEF",
      recapClient: "Client :",
      recapEmail: "Email :",
      recapBudget: "Budget :",
      recapDetails: "Détails :",
      recapEmptyDetails: "Aucun détail spécifique fourni.",
      sendAnother: "Envoyer un autre brief",
      workDays: "Lun - Ven, 9:00 - 18:30 UTC"
    },
    footer: {
      desc: "Design de nouvelle génération et architectures web full-stack pour les startups en forte croissance et les leaders d'industrie. Nous construisons des systèmes rapides et performants.",
      studio: "// STUDIO",
      initiatives: "// INITIATIVES",
      connect: "// CONNECT",
      newBadge: "NOUVEAU",
      acc: "Accueil",
      aprop: "À propos",
      serv: "Services",
      port: "Travaux",
      calc: "Calculateur de Prix",
      faq: "FAQ",
      cont: "Contact Direct"
    }
  }
};

export const getTeam = (lang: Language): TeamMember[] => [
  {
    id: "steve",
    name: "Steve Emane",
    role: "Business Analyst & Product Builder",
    image: "https://www.hebergeur-image.com/upload/143.105.152.107-6a467dbb33f67.jpg",
    colorClass: "bg-red-900/40 mix-blend-multiply",
    gradientClass: "from-red-950/90 via-red-900/20 to-transparent",
    delay: 0.1,
  },
];

export const getServices = (lang: Language): Service[] => [
  {
    id: "design",
    title: lang === "fr" ? "Web Design Immersif & Sur Mesure" : "Immersive Bespoke Web Design",
    shortDesc: lang === "fr" ? "Interfaces visuelles haut de gamme conçues pour élever le statut de votre marque." : "High-end bespoke visual interfaces tailored to elevate brand status.",
    longDesc: lang === "fr" 
      ? "Nous concevons des sites internet qui ressemblent à des installations d'art contemporain tout en offrant une expérience utilisateur (UX) fluide. Nous définissons des palettes de couleurs uniques, des wireframes géométriques, des micro-interactions soignées et un espacement de mise en page premium qui captivent les visiteurs."
      : "We design websites that feel like high-art gallery installations but operate with frictionless UX. We define custom color sets, geometric wireframes, micro-interactions, and premium layout spacing that captivate visitors and reinforce elite status.",
    iconName: "Monitor",
    deliverables: lang === "fr" ? [
      "Prototypes Figma interactifs haute fidélité",
      "Branding visuel personnalisé & création de logos",
      "Systèmes typographiques & chromatiques réactifs",
      "Planification de rythme de mise en page & grilles"
    ] : [
      "Interactive High-Fidelity Figma Prototypes",
      "Custom Visual Branding & Logo Designs",
      "Responsive Typography & Color Systems",
      "Layout Rhythm & Grid Planning",
    ],
    features: lang === "fr" ? [
      "Esthétique unique adaptée à votre secteur",
      "Contrastes de couleurs audités pour l'accessibilité",
      "Schémas d'interactions au survol dynamiques"
    ] : [
      "Unique aesthetic tailored to your industry",
      "Accessibility-vetted contrast layers",
      "Dynamic hover interaction blueprints",
    ],
  },
  {
    id: "dev",
    title: lang === "fr" ? "Applications Web & React Ultra-Performantes" : "High-Performance React & Web Apps",
    shortDesc: lang === "fr" ? "Moteurs d'applications fluides et ultra-rapides, bâtis pour évoluer." : "Frictionless, lightning-fast application engines built to scale.",
    longDesc: lang === "fr"
      ? "La vitesse est notre priorité absolue. Aucun template lourd, aucun plugin inutile. En utilisant React 19, Vite et Tailwind CSS, nous assemblons des structures de code légères et modulaires qui atteignent un score de 100/100 au test Google Core Web Vitals sur mobile et desktop."
      : "We implement raw speed. No clunky templates, no unnecessary plugin weight. Using React 19, Vite, and tailwindcss, we assemble self-contained, light-weight code structures that score 100/100 on Google Core Web Vitals on desktop and mobile alike.",
    iconName: "Code",
    deliverables: lang === "fr" ? [
      "Bases de code React 19 prêtes pour la production",
      "Optimisation de performance avec Vite & Tailwind CSS",
      "Architectures de composants propres et modulaires",
      "Passerelles d'API Serverless & intégrations de base de données"
    ] : [
      "Production-ready React 19 Codebases",
      "Vite & Tailwind CSS Performance Tuning",
      "Clean, Modular Component Architectures",
      "Serverless API Gateways & Database Hooks",
    ],
    features: lang === "fr" ? [
      "Structures de grilles 100% réactives",
      "Paramètres TypeScript typés de manière sécurisée",
      "Routage de pages & gestion de d'états fluides"
    ] : [
      "100% responsive grid structures",
      "Type-safe TypeScript parameters",
      "Smooth page routing & state containers",
    ],
  },
  {
    id: "ecommerce",
    title: lang === "fr" ? "Solutions E-Commerce Axées sur la Conversion" : "Conversion-Focused E-Commerce Solutions",
    shortDesc: lang === "fr" ? "Boutiques en ligne haut de gamme qui convertissent les visiteurs en ambassadeurs." : "Elite digital storefronts that convert visitors into advocates.",
    longDesc: lang === "fr"
      ? "L'e-commerce est une question de confiance, de rapidité et de parcours d'achat fluide. Nous créons des boutiques sur mesure avec des paniers latéraux ultra-rapides, des filtres dynamiques instantanés et des tunnels de commande optimisés pour maximiser le panier moyen."
      : "E-Commerce is about trust, speed, and seamless pathways. We craft bespoke storefronts featuring custom cart slide-outs, ultra-fast filter parameters, and micro-optimized checkout funnels that maximize average order value.",
    iconName: "ShoppingCart",
    deliverables: lang === "fr" ? [
      "Développement Headless Shopify sur mesure",
      "Intégrations de paiements sécurisés Stripe & Paypal",
      "Mécaniques avancées de filtres dynamiques",
      "Synchronisation CRM & Email Marketing automatisée"
    ] : [
      "Custom Shopify Headless Development",
      "Bespoke Stripe & Payment Integrations",
      "Advanced Dynamic Filter Mechanics",
      "Automated CRM & Email Marketing Sync",
    ],
    features: lang === "fr" ? [
      "Retours d'état de panier 'Ajout instantané'",
      "Zones tactiles optimisées pour mobile (44px+)",
      "Calculateurs automatiques de taxes & codes promos locaux"
    ] : [
      "Instant 'Add-To-Cart' state feedbacks",
      "Mobile-optimized tap targets (44px+)",
      "Automated discount & localized tax engines",
    ],
  },
  {
    id: "seo",
    title: lang === "fr" ? "SEO Technique axé Recherche" : "Search-First Technical SEO",
    shortDesc: lang === "fr" ? "Optimisation structurelle ciblée pour dominer les résultats de recherche." : "Targeted structural optimization for leading search results.",
    longDesc: lang === "fr"
      ? "Un site somptueux est inutile s'il est invisible. Nous intégrons le SEO directement au cœur de la structure de code. Nos sites sont développés de façon sémantique avec un balisage strict de schéma, des graphes JSON-LD, des sitemaps automatisés et une empreinte DOM légère hautement appréciée par les moteurs de recherche."
      : "A gorgeous website is useless if invisible. We embed SEO directly into the structural bone. Our codebases are written semantically with strict schema markup, JSON-LD graphs, automated sitemaps, and lightweight DOM footprints that search crawlers favor.",
    iconName: "Search",
    deliverables: lang === "fr" ? [
      "Balises sémantiques strictes & Schémas JSON-LD",
      "Fichiers Robots.txt & Sitemaps dynamiques automatisés",
      "Optimisation avancée des signaux Google Core Web Vitals",
      "Audits complets d'architecture d'information & sémantique"
    ] : [
      "JSON-LD & Semantic Schema Structuring",
      "Automated Robots.txt & Dynamic Sitemaps",
      "Core Web Vitals & Loading Optimization",
      "Comprehensive Content-Hierarchy Audits",
    ],
    features: lang === "fr" ? [
      "Indexation prête et configurée dès le premier jour",
      "Compression d'images & d'assets ultra-efficace",
      "Cartographie des mots-clés stratégiques et structurels"
    ] : [
      "Instant indexation readiness parameters",
      "Highly-efficient asset compression",
      "Competitive search keyword structural maps",
    ],
  },
];

export const getProjects = (lang: Language): Project[] => [
  {
    id: "zenith",
    title: lang === "fr" ? "Boutique Zenith Haute Couture" : "Zenith Haute Couture Storefront",
    client: "Zenith Apparel Paris",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    description: lang === "fr"
      ? "Une boutique de mode haut de gamme sans tête (headless) développée avec React 19, des intégrations d'API Shopify personnalisées et des modules multi-devises Stripe. Le principal défi consistait à maintenir des transitions ultra-rapides en moins d'une seconde entre les grilles de produits et à gérer les taxes régionales complexes."
      : "A headless architectural fashion storefront built with React 19, custom Shopify API integrations, and Stripe multi-currency modules. Key challenges included maintaining lightning fast sub-second transitions between luxury product grids and handling complex regional taxes.",
    year: "2026",
    tags: ["Tailwind v4", "React 19", "Shopify API", "Stripe Checkout"],
    link: "https://zenith-apparel-mockup.com",
    featured: true,
  },
  {
    id: "krypton",
    title: lang === "fr" ? "Tableau de Bord de Sécurité Krypton" : "Krypton Cyber Security Dashboard",
    client: "Krypton Inc",
    category: "SaaS",
    image: "/src/assets/images/portfolio_mockup_1_1782997333387.jpg",
    description: lang === "fr"
      ? "Un moteur de tableau de bord hautement personnalisé en mode sombre affichant en temps réel les niveaux de menace et les tunnels de base de données actifs. Utilise des conteneurs SVG D3.js, des hooks personnalisés et des machines d'état robustes pour un rendu ultra-fluide des graphiques de suivi haute densité."
      : "A highly customized dark-mode dashboard engine displaying threat levels and active database tunnels in real-time. Employs D3.js SVG containers, custom hooks, and robust state machines to render high-density tracking graphs smoothly without any interface lag.",
    year: "2025",
    tags: ["D3.js Visualization", "TypeScript", "Tailwind CSS", "WebSockets"],
    link: "https://krypton-saas-dashboard.com",
    featured: true,
  },
  {
    id: "aether",
    title: lang === "fr" ? "Portfolio Minimaliste d'Architecte Aether" : "Aether Minimalist Architect Portfolio",
    client: "Aether Architectes",
    category: "Brand Site",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: lang === "fr"
      ? "Une page de présentation élégante et épurée mettant en valeur des projets architecturaux de luxe. Accent mis sur les espaces vides, l'association de polices de caractères haut de gamme et une mise en page fluide utilisant des animations à ressort physique."
      : "An elegant, grid-honoring presentation landing page showcasing luxury structures. Emphasizes negative space, custom fonts, typography pairings, and a fluid layout utilizing Spring physics animations.",
    year: "2026",
    tags: ["Typography Pairing", "Fluid Layouts", "Framer Motion", "Vitals Opt"],
    link: "https://aether-architects-showcase.com",
    featured: false,
  },
  {
    id: "nexus",
    title: lang === "fr" ? "Suivi de Chaîne Logistique Globale Nexus" : "Nexus Global Supply-Chain Tracker",
    client: "Nexus Global Logistics",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    description: lang === "fr"
      ? "Un panneau de contrôle logistique sur mesure comprenant le suivi d'itinéraires de flotte interactifs, des modules de gestion des expéditions et des systèmes d'alerte automatisés basés sur des API météo."
      : "A custom logistic control panel featuring interactive fleet routing, dispatch management modules, and automated alert systems based on weather APIs. Built to secure sub-100ms updates.",
    year: "2025",
    tags: ["Full-Stack App", "React Server Actions", "Node.js API", "Custom Canvas"],
    link: "https://nexus-fleet-logistics.com",
    featured: false,
  },
];

export const getEstimatorSteps = (lang: Language): EstimatorStep[] => [
  {
    id: "type",
    title: lang === "fr" ? "Sélectionnez la forme de votre projet digital" : "Select your project's digital form",
    subtitle: lang === "fr" ? "Que construisons-nous ensemble ? Choisissez la fondation." : "What are we building together? Choose the foundation.",
    type: "single",
    options: [
      { 
        id: "brand", 
        label: lang === "fr" ? "Site Vitrine de Marque Premium" : "Premium Brand Showcase", 
        description: lang === "fr" 
          ? "Site au design personnalisé haut de gamme avec des interactions dynamiques et une rédaction à fort impact."
          : "Bespoke high-contrast design site with custom interactions, layout pairing & high-readability copywriting.", 
        priceWeight: 3500 
      },
      { 
        id: "ecommerce", 
        label: lang === "fr" ? "Boutique E-Commerce à Haute Conversion" : "Conversion E-Commerce Shop", 
        description: lang === "fr"
          ? "Boutique Headless sur mesure, paniers latéraux ultra-rapides et connexions sécurisées Stripe & Shopify."
          : "Seamless, custom headless shop, high-speed cart sliders, and fully secure Stripe & Shopify connections.", 
        priceWeight: 6500 
      },
      { 
        id: "saas", 
        label: lang === "fr" ? "SaaS / Application Web Full-Stack" : "SaaS / Full-Stack Application", 
        description: lang === "fr"
          ? "Tableau de bord personnalisé, graphiques de données en temps réel, bases de données et tunnels d'API sécurisés."
          : "Bespoke user control dashboards, dynamic real-time tables, data visuals, database hooks & server API tunnels.", 
        priceWeight: 9500 
      },
      { 
        id: "mvp", 
        label: lang === "fr" ? "MVP Stratégique de Lancement" : "Strategic MVP & Launchpad", 
        description: lang === "fr"
          ? "Présentation optimisée pour valider rapidement votre concept avec d'excellents Core Web Vitals."
          : "Fast-tracked single-page presentation with optimized Core Web Vitals to validate high-growth concepts.", 
        priceWeight: 2500 
      },
    ],
  },
  {
    id: "scope",
    title: lang === "fr" ? "Définissez l'échelle visuelle" : "Define the visual scale",
    subtitle: lang === "fr" ? "De combien d'écrans ou d'architectures de vues spécifiques avez-vous besoin ?" : "How many key views or dedicated screen architectures are required?",
    type: "single",
    options: [
      { 
        id: "small", 
        label: lang === "fr" ? "Portée Ciblée (1-4 pages)" : "Focused Scope (1-4 pages)", 
        description: lang === "fr"
          ? "Compact et percutant. Idéal pour les pages de destination, vitrines d'équipes et lancements essentiels."
          : "Compact and powerful. Perfect for landing pages, team showcase, and essential copy setups.", 
        priceWeight: 0 
      },
      { 
        id: "medium", 
        label: lang === "fr" ? "Croissance Standard (5-10 pages)" : "Standard Growth (5-10 pages)", 
        description: lang === "fr"
          ? "Contenu riche. Liste d'articles de blog personnalisée, fiches produits complexes et présentation de services."
          : "Rich details. Custom blog lists, modular product pages, multiple service deep-dives.", 
        priceWeight: 1500 
      },
      { 
        id: "large", 
        label: lang === "fr" ? "Échelle Étendue (11-20 pages)" : "Expansive Interface (11-20 pages)", 
        description: lang === "fr"
          ? "Structures d'entreprise complètes, tableaux de bord multi-niveaux et espaces utilisateurs dynamiques."
          : "Comprehensive corporate structures, multi-layered dashboards, dynamic user portals.", 
        priceWeight: 3500 
      },
      { 
        id: "enterprise", 
        label: lang === "fr" ? "Écosystème Multi-Sites sur Mesure" : "Bespoke Multi-Site Ecosystem", 
        description: lang === "fr"
          ? "Sites mondiaux traduits, navigation complexe, bases de données d'entreprise et haute sécurité."
          : "Global localized sites, complex multi-branch navigation rails, enterprise databases.", 
        priceWeight: 7500 
      },
    ],
  },
  {
    id: "features",
    title: lang === "fr" ? "Équipez de fonctionnalités premium" : "Equip with premium features",
    subtitle: lang === "fr" ? "Ajoutez des modules de haute performance pour maximiser l'engagement. Sélectionnez tout ce qui s'applique." : "Add high-performance modules to maximize engagement and SEO. Select all that apply.",
    type: "multiple",
    options: [
      { 
        id: "seo", 
        label: lang === "fr" ? "SEO Technique axé Recherche" : "Search-First Technical SEO Setup", 
        description: lang === "fr"
          ? "Balisages de schémas JSON-LD, sémantique HTML et indexation automatique."
          : "JSON-LD schema blueprints, semantic HTML, Google Index prep.", 
        priceWeight: 800 
      },
      { 
        id: "animations", 
        label: lang === "fr" ? "Effets et Animations Immersives" : "Immersive Motion Mechanics", 
        description: lang === "fr"
          ? "Animations de physique Framer Motion, effets de survol magnétiques, écran de chargement sur mesure."
          : "Framer Motion physics, stagger entries, magnetic mouse states, custom loader.", 
        priceWeight: 1200 
      },
      { 
        id: "copywriting", 
        label: lang === "fr" ? "Rédaction Stratégique de Conversion" : "Strategic Conversion Copywriting", 
        description: lang === "fr"
          ? "Création de slogans marquants, fiches et argumentaires bilingues à forte conversion."
          : "High-impact headers, professional French & English brand copy that sells.", 
        priceWeight: 1500 
      },
      { 
        id: "auth", 
        label: lang === "fr" ? "Portail Membre & Authentification" : "Auth Portal & Member Access", 
        description: lang === "fr"
          ? "Authentification OAuth sécurisée, sessions de tableau de bord et profils utilisateurs."
          : "Secure OAuth systems, dashboard sessions, user profile database.", 
        priceWeight: 2000 
      },
      { 
        id: "stripe", 
        label: lang === "fr" ? "Portail de Paiement Stripe" : "Stripe Payment Portal", 
        description: lang === "fr"
          ? "Tunnels de commande express en un clic, abonnements récurrents et retours de transaction sécurisés."
          : "One-click express checkouts, recurring subscriptions, secure transaction callbacks.", 
        priceWeight: 1000 
      },
    ],
  },
  {
    id: "timeline",
    title: lang === "fr" ? "Déterminez le délai de livraison" : "Establish the delivery timeline",
    subtitle: lang === "fr" ? "Quand souhaitez-vous que ce système digital soit mis en ligne ?" : "When do you require these digital systems to go live?",
    type: "single",
    options: [
      { 
        id: "express", 
        label: lang === "fr" ? "Prioritaire Express (2-3 semaines)" : "Express Priority (2-3 weeks)", 
        description: lang === "fr"
          ? "Délai accéléré. Équipe renforcée de plusieurs experts. Révisions ultra-rapides (+30% de majoration)."
          : "Accelerated timeline. Multi-expert assignment. Direct instant review loops. (+30% weight)", 
        priceWeight: 1.3 
      },
      { 
        id: "standard", 
        label: lang === "fr" ? "Cadence Studio Standard (4-6 semaines)" : "Standard Craft (4-6 weeks)", 
        description: lang === "fr"
          ? "Meticulous respect du rythme de conception et révision par sprints de notre studio."
          : "Standard, meticulous studio cadence. Balanced review sprints. Baseline rate.", 
        priceWeight: 1.0 
      },
      { 
        id: "flexible", 
        label: lang === "fr" ? "Horizon Flexible (2-3 mois)" : "Flexible Horizon (2-3 months)", 
        description: lang === "fr"
          ? "Progression continue et constante. Parfait pour les lancements stratégiques de long terme (-10% de réduction)."
          : "Steady progressive pacing. Great for long-term strategic rollouts. (-10% reduction)", 
        priceWeight: 0.9 
      },
    ],
  },
];

export const getFAQs = (lang: Language): FAQItem[] => [
  {
    question: lang === "fr" ? "Combien de temps faut-il pour créer une application web ?" : "How long does it take to build a web application?",
    answer: lang === "fr"
      ? "La plupart de nos projets d'applications web et de sites de marque durent entre 4 et 6 semaines de la stratégie initiale au déploiement de production final. Des délais prioritaires plus courts (2 à 3 semaines) peuvent être activés si nécessaire."
      : "Most of our web application projects and brand sites take between 4 and 6 weeks from strategy to final production launch. Accelerated priority sprints (2-3 weeks) can be requested when needed.",
  },
  {
    question: lang === "fr" ? "Quelles technologies utilisez-vous chez Kyros Studio ?" : "What technologies do you use at Kyros Studio?",
    answer: lang === "fr"
      ? "Nous construisons des architectures web modernes, typées, hautement extensibles et conformes aux meilleures pratiques. Notre pile technique comprend React 19, TypeScript, Tailwind CSS, Vite et Node.js, ce qui garantit des sites robustes, modulaires et d'une rapidité incomparable."
      : "We assemble modern, type-safe, highly extensible web architectures. Our core stack comprises React 19, TypeScript, Tailwind CSS, Vite, and Node.js, ensuring robust, modular structures with lightning-fast speeds.",
  },
  {
    question: lang === "fr" ? "Allez-vous optimiser le site pour les moteurs de recherche (SEO) ?" : "Will my website be fully optimized for search engines (SEO)?",
    answer: lang === "fr"
      ? "Absolument. Nous n'ajoutons pas le SEO à la fin ; nous le construisons directement dans la structure de notre code. Tous nos systèmes incluent des balises de données sémantiques strictes JSON-LD, des optimisations d'assets, d'excellents scores Core Web Vitals (100/100) et des configurations d'indexation automatique."
      : "Absolutely. We do not tack on SEO as an afterthought; we construct it directly into our codebase skeleton. All our systems feature JSON-LD semantic markups, efficient asset compression, perfect 100/100 Core Web Vitals scores, and automated indexing configurations.",
  },
  {
    question: lang === "fr" ? "Comment s'organise l'accompagnement post-lancement ?" : "How does post-launch support and maintenance work?",
    answer: lang === "fr"
      ? "Nous offrons un support post-lancement garanti de 30 jours pour surveiller la mise en ligne, corriger d'éventuels ajustements et nous assurer que les performances de chargement sont idéales. Nous proposons également des forfaits de maintenance mensuelle pour l'ajout de nouvelles fonctionnalités."
      : "We provide a 30-day dedicated post-launch support window to monitor real-world interactions, troubleshoot, and fine-tune vitals. We also offer monthly maintenance retainers for continuous feature expansions.",
  },
];
