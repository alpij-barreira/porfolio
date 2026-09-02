// Contenido del portfolio en español e inglés (ES / EN)
// Se consume desde useLanguage() → content

const es = {
  personal: {
    name: "Javier Pineda",
    role: "Product Designer",
    tagline: "Diseño de producto · UX/UI · Ingeniero Informático",
    bio: [
      "Soy diseñador de producto digital e ingeniero informático. Investigo necesidades, prototipo soluciones y las construyo utilizando herramientas de desarrollo con inteligencia artificial. Mi base técnica me permite colaborar con desarrolladores de forma fluida y tomar decisiones de diseño más realistas.",
      "Mi proyección profesional es evolucionar hacia la gestión de producto digital, combinando visión estratégica, conocimiento técnico y la capacidad de llevar ideas desde la investigación hasta un producto funcional."
    ],
    photo: "/profile.jpg",
    marginNote: "estos párrafos cambian tanto como este sector",
    contact: {
      email: "pinedaux@gmail.com",
      phone: "+34639418865",
      linkedin: "https://www.linkedin.com/in/javier-alonso-pineda-4b70aa285/",
      cv: "/cv.pdf"
    }
  },

  skills: {
    core: [
      "Diseño de interfaces",
      "Investigación de usuarios",
      "Wireframes",
      "Prototipado alto/bajo nivel",
      "Pruebas de usabilidad",
      "Maquetación web",
      "Newsletters",
      "Banners y publicidad",
      "Experiencia en RRSS",
      "Edición de vídeo"
    ],
    tools: [
      { name: "Figma", icon: "figma", note: "Mi primera herramienta de UX/UI" },
      { name: "Suite de Adobe", icon: "adobe", note: "Para profundizar en diseño" },
      { name: "Notion", icon: "notion", note: "Donde se organiza la magia" },
      { name: "Jira", icon: "jira", note: "Para los grandes proyectos" },
      { name: "Whimsical", icon: "whimsical", note: "Mi preferencia para wireframes" }
    ],
    learning: [
      "Cursando el Máster en Diseño UX/UI & AI Native de Diseño de Producto en la escuela Barreira de Arte + Diseño, con posibilidad de convenio",
      "Aprendiendo acerca de las nuevas herramientas del sector, como Figma Make, Claude Code o Framer.",
      "Estudiando para presentarme al examen Cambridge de C1 para mejorar mi nivel actual de B2 en inglés."
    ]
  },

  experience: [
    {
      company: "Tramiting",
      logo: "Tramiting",
      logoImage: "/logo-tramiting.png",
      role: "Diseñador UX/UI & Digitalización",
      period: "Enero 2025 — Octubre 2025",
      duration: "10 meses",
      summary: "",
      description: [
        "Tramiting es una oficina técnica valenciana dedicada a legalizar instalaciones fotovoltaicas y gestionar trámites energéticos. Me incorporé para digitalizar procesos que hasta entonces eran completamente manuales. Mi rol combinaba UX/UI y digitalización: análisis de flujos de trabajo, definición de requisitos y diseño de la arquitectura de una aplicación interna, haciendo de puente entre la oficina técnica y el equipo de desarrollo en React y AWS.",
        "Gran parte del trabajo se centró en automatización documental: estructuras JSON, plantillas dinámicas e integraciones API con clientes como Octopus Energy y Solar360. Al ser el único perfil UX/UI de la empresa, también recogí requisitos directamente de los clientes, elaboré reportes de impacto y anticipé las necesidades de crecimiento del sistema."
      ],
      achievements: [
        { status: "done", text: "Arquitectura y prototipos de alta fidelidad de la aplicación interna de gestión de expedientes" },
        { status: "done", text: "Automatización de generación documental vía API con Octopus Energy y Solar360" },
        { status: "done", text: "Transmisión de especificaciones técnicas al equipo de desarrollo (React, AWS)" },
        { status: "progress", text: "Definición de requisitos y diseño de módulos pendientes de implementación" }
      ],
      skills: ["UX/UI Design", "Prototipado", "React / AWS", "Automatización", "API Integration", "Requisitos funcionales"]
    },
    {
      company: "Sexplace",
      logo: "Sexplace",
      logoImage: "/logo-sexplace.png",
      role: "Diseño web, redes sociales & e-commerce",
      period: "Marzo 2024 — Noviembre 2024",
      duration: "9 meses",
      summary: "",
      description: [
        "SexPlace es una empresa valenciana de e-commerce en el sector de juguetes para adultos, un mercado bastante más profesional y complejo de lo que podría parecer. Participé en el rediseño de la web para su expansión hacia Sudamérica, maquetando en CSS y adaptando plantillas en Prestashop, además de gestionar un catálogo amplio con control de stock, pedidos y redacción SEO.",
        "También llevé el diseño gráfico de la marca: banners, campañas de mailing, publicaciones para redes sociales y edición de vídeo con Premiere Pro. Una experiencia que confirmó que el diseño aporta valor en cualquier sector si entiendes al usuario."
      ],
      achievements: [
        { status: "done", text: "Rediseño web orientado a expansión internacional en Sudamérica (Prestashop, CSS)" },
        { status: "done", text: "Gestión de catálogo de gran volumen con control de stock, pedidos y SEO" },
        { status: "done", text: "Creación de banners, campañas de mailing e historias de Instagram" },
        { status: "done", text: "Producción y edición de vídeo con Adobe Premiere Pro" }
      ],
      skills: ["UX/UI Design", "Prestashop", "CSS", "E-commerce", "SEO", "Diseño gráfico", "Adobe Premiere"]
    }
  ],

  projects: [
    {
      title: "Reimagine: Landing page",
      image: "/ReimagineCover.png",
      summary: "Diseño y desarrollo de la landing de Reimagine, una marca de moda deportiva pensada para corredores introspectivos. Mi primera web diseñada y construida íntegramente con Claude Code.",
      tags: ["Claude Code", "Figma", "Design Sprint"],
      tools: ["Claude Code", "Figma", "Vercel"],
      liveUrl: "https://reimagine-landing.vercel.app",
      sections: [
        {
          title: "El brief",
          content: "Reimagine es una marca dirigida a deportistas introspectivos: corredores que entienden el entrenamiento como una práctica personal más que como una competición. El reto era diseñar y publicar una landing page que transmitiera esa estética serena y enfocada desde la primera pantalla."
        },
        {
          title: "Metodología Design Sprint",
          content: "Apliqué un Design Sprint condensado para llegar rápido a un concepto, un mood y una arquitectura de información sólidos. El formato obliga a tomar decisiones claras desde el primer día y a iterar sin perder el norte de la marca."
        },
        {
          title: "Diseño en Figma",
          content: "Construí el sistema visual en Figma: tipografía serif para los titulares, escala neutra para el cuerpo, mucho aire negativo y una jerarquía pensada para que cada bloque respirase. La hero respeta el silencio de la marca: una palabra, una imagen."
        },
        {
          title: "Desarrollo con Claude Code",
          content: "El desarrollo lo llevé íntegramente con Claude Code, dirigiéndolo desde el diseño hasta el código final en React + Vite. Mi primera experiencia diseñando y construyendo una web con IA como pareja de programación, con ciclos de iteración mucho más rápidos que en cualquier proyecto anterior."
        },
        {
          title: "El resultado",
          content: "La landing está publicada en Vercel y captura la voz pausada de Reimagine: una invitación a correr por uno mismo, no contra los demás."
        }
      ]
    },
    {
      title: "Ventura: App interactiva para museos",
      image: "/ventura.png",
      summary: "Audioguías gamificadas para que los niños disfruten de los museos tanto como los adultos. Todo empezó con una observación real en el Van Gogh de Ámsterdam.",
      tags: ["UX Research", "Investigación cualitativa", "Prototipado"],
      tools: ["Figma", "Whimsical", "Google Forms"],
      figmaUrl: "https://www.figma.com/design/V9c4Ulz1MMmPJuCFIPmkbn/Ventura?node-id=1-4&p=f",
      sections: [
        {
          title: "El origen del problema",
          content: "Visitando el museo Van Gogh de Ámsterdam observé un problema concreto: el sistema de audioguías, premiado en los Dutch Design Awards 2015, era técnicamente sólido pero los niños que acompañaban a sus padres no participaban. Navegaban entre menús sin entender nada. La interfaz no estaba pensada para ellos."
        },
        {
          title: "Oportunidad de mercado",
          content: "Al investigar el ecosistema de guías para museos confirmé que no existían soluciones enfocadas en público infantil y juvenil. La oportunidad era clara: una plataforma que cualquier museo pudiese adoptar sin desarrollos a medida, viable y escalable desde el diseño."
        },
        {
          title: "Metodología de investigación",
          content: "Abordé el proyecto desde el diseño centrado en el usuario. Tras analizar el mercado, diseñé una investigación cualitativa con tres ejes: competencias tecnológicas del público objetivo, tipo de ocio y relación con la cultura. Para cubrirlos empleé dos técnicas complementarias: cuestionarios y talleres."
        },
        {
          title: "Cuestionario",
          content: "En colaboración con el colegio Sagrado Corazón Vedruna de Valencia, distribuí un cuestionario a alumnos de 4.º de Primaria a 4.º de la ESO, de 8 a 15 años. Las 185 respuestas recogidas sirvieron para construir perfiles de usuario, escenarios de uso y definir los principios de diseño."
        },
        {
          title: "Talleres",
          content: "Los cuestionarios aportaban datos cuantitativos, pero necesitaba información más subjetiva: intereses, preferencias, emociones. Organicé 6 talleres presenciales con grupos de 30 a 40 alumnos y presentaciones adaptadas a cada franja de edad, lo que permitió identificar qué tecnologías usaban realmente y qué tipos de museos les despertaban más curiosidad."
        },
        {
          title: "La solución: Ventura",
          content: "Los datos apuntaban a un formato de juego interactivo. Ventura propone un recorrido gamificado donde el usuario recibe preguntas y retos adaptados mientras explora la exposición, tanto en el museo como desde casa. El niño participa desde el primer momento, la experiencia se adapta a su perfil y, por su diseño modular, cualquier museo puede implementarlo."
        },
        {
          title: "Prototipo y alta fidelidad",
          content: "Empecé con wireframes en Whimsical para definir estructura, flujos y principios visuales. Después lo rediseñé en Figma con diseño atómico: componentes independientes, sistema de diseño propio y prototipo interactivo de alta fidelidad."
        }
      ]
    },
    {
      title: "Calendario académico: Rediseño",
      image: "/calendario.png",
      summary: "Análisis heurístico y rediseño del calendario académico de nuestro propio centro, un caso real con problemas de usabilidad conocidos por todos los alumnos.",
      tags: ["Análisis heurístico", "UX/UI Design", "Wireframing"],
      tools: ["Figma", "Whimsical"],
      figmaUrl: "https://www.figma.com/design/5eM1kDf2G6RLH9xYYyeALq/Calendario-CEI?node-id=52-450",
      sections: [
        {
          title: "El contexto del proyecto",
          content: "En uno de los proyectos finales del módulo de UX/UI en CEI, toda la clase simulamos ser una agencia de diseño. Con Agustina Irarrázaval al frente, nos dividimos en equipos para abordar 3 proyectos simultáneos. Mi foco fue el calendario académico del centro, una herramienta con problemas de usabilidad conocidos por todos los alumnos."
        },
        {
          title: "Análisis heurístico",
          content: "Junto con Marco Garnés, analizamos la web área por área según los principios de usabilidad, aplicando un sistema de puntuaciones por gravedad. El resultado fue un mapa claro de qué era imprescindible corregir y qué funcionaba correctamente y debía mantenerse."
        },
        {
          title: "Desarrollo de la solución",
          content: "Con el análisis completado, creamos un perfil de usuario para asegurarnos de que la solución abordara problemas reales. Desarrollé la propuesta en solitario: primero un wireframe en Whimsical con nuevos sistemas de reserva y filtrado, más ágiles e intuitivos, y una jerarquía visual más clara. El diseño final lo construí en Figma con diseño atómico, desarrollando las diferentes vistas del calendario."
        }
      ]
    },
    {
      title: "FC Barcelona: Próximamente",
      image: null,
      summary: "Proyecto en preparación. Próximamente publicaré aquí los detalles del trabajo desarrollado para el FC Barcelona en el marco del Máster de Barreira Arte + Diseño.",
      tags: ["FC Barcelona", "Barreira", "Próximamente"],
      tools: [],
      sections: [
        {
          title: "Próximamente",
          content: "Este espacio recogerá el proyecto que estoy desarrollando para el FC Barcelona junto a Barreira. El contenido completo — contexto, metodología, decisiones de diseño y resultados — estará disponible aquí en cuanto termine de prepararlo."
        }
      ]
    }
  ],

  education: [
    {
      institution: "CEI: Centro de Estudios de Innovación",
      degree: "Doble módulo de UX/UI y Diseño Gráfico",
      period: "2023 — 2024",
      description: "Formación intensiva donde adquirí las bases del diseño de experiencia de usuario y diseño gráfico. Aquí desarrollé mis primeros proyectos reales con metodologías como Design Thinking y Design Sprint, aprendiendo a investigar, prototipar y validar soluciones digitales."
    },
    {
      institution: "Universidad Politécnica de Valencia",
      degree: "Ingeniería Informática",
      period: "2017 — 2023",
      description: "Base técnica sólida en programación, bases de datos y sistemas de redes. Mi contexto como informático me permite entender las posibilidades y limitaciones técnicas de cada proyecto, facilitando la comunicación con equipos de desarrollo y tomando decisiones de diseño más informadas."
    }
  ],

  footer: {
    signature: "Hecho con cariño, café y Claude Code."
  },

  ui: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      openMenu: "Abrir menú",
      downloadCV: "Descargar CV"
    },
    sections: {
      experience: "Experiencia laboral",
      skills: "Competencias y herramientas",
      projects: "Proyectos",
      education: "Estudios"
    },
    skills: {
      competencias: "Competencias",
      herramientas: "Herramientas",
      aprendiendo: "Actualmente aprendiendo"
    },
    experienceCard: {
      moreInfo: "Más información",
      achievements: "Logros & responsabilidades"
    },
    projectCard: {
      moreInfo: "Más información",
      close: "Cerrar",
      figmaHook: "¿Quieres ver el proyecto por dentro?",
      figmaButton: "Abrir en Figma",
      figmaAria: "Proyecto de Figma, se abre en una pestaña nueva",
      liveHook: "¿Quieres ver el resultado en vivo?",
      liveButton: "Visitar el sitio",
      liveAria: "Enlace al sitio en vivo, se abre en una pestaña nueva"
    },
    footer: {
      cv: "Consulta mi CV"
    },
    language: {
      switchToEs: "Cambiar a español",
      switchToEn: "Switch to English"
    }
  }
};

const en = {
  personal: {
    name: "Javier Pineda",
    role: "Product Designer",
    tagline: "Product Design · UX/UI · Computer Engineer",
    bio: [
      "I'm a digital product designer and computer engineer. I research user needs, prototype solutions and build them using AI-powered development tools. My technical background lets me collaborate with developers naturally and make more realistic design decisions.",
      "My professional goal is to move into digital product management — combining strategic vision, technical expertise and the ability to take ideas from research all the way to a working product."
    ],
    photo: "/profile.jpg",
    marginNote: "these paragraphs change as often as this industry does",
    contact: {
      email: "pinedaux@gmail.com",
      phone: "+34639418865",
      linkedin: "https://www.linkedin.com/in/javier-alonso-pineda-4b70aa285/",
      cv: "/cv.pdf"
    }
  },

  skills: {
    core: [
      "Interface Design",
      "User Research",
      "Wireframing",
      "Hi/Lo-Fi Prototyping",
      "Usability Testing",
      "Web Layout",
      "Newsletters",
      "Banners & Advertising",
      "Social Media",
      "Video Editing"
    ],
    tools: [
      { name: "Figma", icon: "figma", note: "My first UX/UI tool" },
      { name: "Adobe Suite", icon: "adobe", note: "For going deeper into design" },
      { name: "Notion", icon: "notion", note: "Where the magic gets organised" },
      { name: "Jira", icon: "jira", note: "For the bigger projects" },
      { name: "Whimsical", icon: "whimsical", note: "My go-to for wireframes" }
    ],
    learning: [
      "Studying the Master's in UX/UI & AI-Native Product Design at Barreira Arte + Diseño, with an internship option.",
      "Exploring the latest tools in the industry, like Figma Make, Claude Code and Framer.",
      "Preparing for the Cambridge C1 exam to step up from my current B2 in English."
    ]
  },

  experience: [
    {
      company: "Tramiting",
      logo: "Tramiting",
      logoImage: "/logo-tramiting.png",
      role: "UX/UI Designer & Digitalisation",
      period: "January 2025 — October 2025",
      duration: "10 months",
      summary: "",
      description: [
        "Tramiting is a Valencia-based technical office that handles the legalisation of photovoltaic installations and energy-related paperwork. I joined with a clear mission: digitalise processes that until then had been entirely manual. My role blended UX/UI and digitalisation — mapping workflows, defining requirements and designing the architecture of an internal app, acting as the bridge between the technical office and the development team working with React and AWS.",
        "A big part of the job focused on document automation: JSON data structures, dynamic templates, and API integrations with clients like Octopus Energy and Solar360. As the only UX/UI profile in the company, I also gathered requirements directly from clients, put together impact reports, and anticipated what the system would need as it scaled."
      ],
      achievements: [
        { status: "done", text: "Architecture and high-fidelity prototypes for the internal case-management app" },
        { status: "done", text: "Document generation automated via API with Octopus Energy and Solar360" },
        { status: "done", text: "Technical specs handed over to the development team (React, AWS)" },
        { status: "progress", text: "Requirements and module designs still pending implementation" }
      ],
      skills: ["UX/UI Design", "Prototyping", "React / AWS", "Automation", "API Integration", "Functional Requirements"]
    },
    {
      company: "Sexplace",
      logo: "Sexplace",
      logoImage: "/logo-sexplace.png",
      role: "Web design, social media & e-commerce",
      period: "March 2024 — November 2024",
      duration: "9 months",
      summary: "",
      description: [
        "Sexplace is a Valencia-based e-commerce company in the adult-toy industry — a market that turns out to be far more professional and complex than it first seems. I worked on the redesign of the site to support its expansion into South America, building layouts in CSS and adapting Prestashop templates, while also managing a large catalogue with stock control, orders and SEO copywriting.",
        "I also ran the graphic-design side of the brand: banners, mailing campaigns, social-media posts and video editing with Premiere Pro. The experience confirmed one thing — design can deliver real value in any industry if you keep the user at the centre."
      ],
      achievements: [
        { status: "done", text: "Web redesign geared towards international expansion in South America (Prestashop, CSS)" },
        { status: "done", text: "Managed a large-volume catalogue with stock control, orders and SEO" },
        { status: "done", text: "Created banners, mailing campaigns and Instagram stories" },
        { status: "done", text: "Produced and edited video content with Adobe Premiere Pro" }
      ],
      skills: ["UX/UI Design", "Prestashop", "CSS", "E-commerce", "SEO", "Graphic Design", "Adobe Premiere"]
    }
  ],

  projects: [
    {
      title: "Reimagine: Landing page",
      image: "/ReimagineCover.png",
      summary: "Design and build of the Reimagine landing page — a sportswear brand for introspective runners. My first website designed and shipped end to end with Claude Code.",
      tags: ["Claude Code", "Figma", "Design Sprint"],
      tools: ["Claude Code", "Figma", "Vercel"],
      liveUrl: "https://reimagine-landing.vercel.app",
      sections: [
        {
          title: "The brief",
          content: "Reimagine is a brand aimed at introspective athletes — runners who treat training as a personal practice rather than a competition. The challenge was to design and ship a landing page that conveyed that quiet, focused aesthetic from the very first screen."
        },
        {
          title: "Design Sprint methodology",
          content: "I ran a condensed Design Sprint to converge quickly on a concept, a mood and a solid information architecture. The format forces clear decisions from day one and keeps iterations tied to the brand's compass."
        },
        {
          title: "Design in Figma",
          content: "I built the visual system in Figma: serif typography for headlines, a neutral scale for body, lots of negative space and a hierarchy that lets every block breathe. The hero respects the brand's silence — one word, one image."
        },
        {
          title: "Development with Claude Code",
          content: "I ran the build entirely with Claude Code, directing it from design through to the final React + Vite code. It was my first experience designing and shipping a website with AI as a pair-programmer, with iteration loops dramatically faster than any previous project."
        },
        {
          title: "The result",
          content: "The landing is live on Vercel and captures Reimagine's unhurried voice: an invitation to run for yourself, not against everyone else."
        }
      ]
    },
    {
      title: "Ventura: Interactive museum app",
      image: "/ventura.png",
      summary: "Gamified audio guides so kids can enjoy museums as much as adults do. It all started with a real observation at the Van Gogh Museum in Amsterdam.",
      tags: ["UX Research", "Qualitative Research", "Prototyping"],
      tools: ["Figma", "Whimsical", "Google Forms"],
      figmaUrl: "https://www.figma.com/design/V9c4Ulz1MMmPJuCFIPmkbn/Ventura?node-id=1-4&p=f",
      sections: [
        {
          title: "Where the problem started",
          content: "While visiting the Van Gogh Museum in Amsterdam I spotted something specific: the audio-guide system — a Dutch Design Awards 2015 winner — was technically excellent, but the kids following their parents weren't engaging with it. They scrolled through menus without really understanding a thing. The interface simply wasn't designed for them."
        },
        {
          title: "Market opportunity",
          content: "Looking into the museum-guide ecosystem I confirmed there were barely any solutions aimed at children and teenagers. The opportunity was clear: a platform any museum could adopt without commissioning a bespoke build — feasible and scalable from day one."
        },
        {
          title: "Research methodology",
          content: "I approached the project through user-centred design. After scoping the market, I set up qualitative research around three axes: the target audience's tech skills, their leisure habits and their relationship with culture. To cover them I used two complementary techniques: surveys and workshops."
        },
        {
          title: "Survey",
          content: "In collaboration with Sagrado Corazón Vedruna school in Valencia, I distributed a survey among students from Year 4 of primary to Year 4 of secondary — ages 8 to 15. The 185 responses I collected shaped the user personas, use-case scenarios and the design principles."
        },
        {
          title: "Workshops",
          content: "Surveys give you quantitative data, but I needed something more subjective: interests, preferences, emotions. I ran 6 in-person workshops with groups of 30–40 students, with presentations tailored to each age range — a great way to find out which technologies they actually used and which museums genuinely caught their attention."
        },
        {
          title: "The solution: Ventura",
          content: "The data pointed to an interactive-game format. Ventura is a gamified tour where the user gets adapted questions and challenges while exploring the exhibition, both at the museum and from home. The child is involved from minute one, the experience adapts to their profile, and the modular design means any museum can implement it."
        },
        {
          title: "Prototype and high-fidelity design",
          content: "I started with wireframes in Whimsical to define structure, flows and visual principles. Then I rebuilt it in Figma using atomic design: independent components, a custom design system and a fully interactive high-fidelity prototype."
        }
      ]
    },
    {
      title: "Academic calendar: Redesign",
      image: "/calendario.png",
      summary: "Heuristic analysis and redesign of our own school's academic calendar — a real case with usability issues every student already knew about.",
      tags: ["Heuristic Analysis", "UX/UI Design", "Wireframing"],
      tools: ["Figma", "Whimsical"],
      figmaUrl: "https://www.figma.com/design/5eM1kDf2G6RLH9xYYyeALq/Calendario-CEI?node-id=52-450",
      sections: [
        {
          title: "Project context",
          content: "In one of the final projects for the UX/UI module at CEI, the whole class played at being a design agency. With Agustina Irarrázaval leading the way, we split into teams to tackle 3 projects at the same time. My focus was the school's academic calendar — a tool every student knew had usability issues."
        },
        {
          title: "Heuristic analysis",
          content: "Working with Marco Garnés, we analysed the site area by area against usability principles, applying a severity-based scoring system. The outcome was a clear map of what absolutely had to be fixed and what was working fine and should stay as it was."
        },
        {
          title: "Building the solution",
          content: "With the analysis done, we built a user persona to make sure the solution addressed real problems. I developed the proposal solo: first a wireframe in Whimsical with new booking and filtering systems that were faster and more intuitive, and a clearer visual hierarchy. I built the final design in Figma with an atomic approach, laying out the different calendar views."
        }
      ]
    },
    {
      title: "FC Barcelona: Coming soon",
      image: null,
      summary: "Project in progress. I'll be publishing here the details of the work developed for FC Barcelona as part of the master's programme at Barreira Arte + Diseño.",
      tags: ["FC Barcelona", "Barreira", "Coming soon"],
      tools: [],
      sections: [
        {
          title: "Coming soon",
          content: "This space will cover the project I'm developing for FC Barcelona together with Barreira. Full context, methodology, design decisions and results will be published here as soon as it's ready."
        }
      ]
    }
  ],

  education: [
    {
      institution: "CEI: Centro de Estudios de Innovación",
      degree: "UX/UI and Graphic Design double module",
      period: "2023 — 2024",
      description: "Intensive training where I picked up the fundamentals of user-experience and graphic design. This is where I developed my first real projects with methodologies like Design Thinking and Design Sprint, learning how to research, prototype and validate digital solutions."
    },
    {
      institution: "Polytechnic University of Valencia",
      degree: "Computer Engineering",
      period: "2017 — 2023",
      description: "A solid technical foundation in programming, databases and networking. Coming from a computer-engineering background lets me understand the technical possibilities and constraints of every project, making it easier to talk to development teams and make better-informed design decisions."
    }
  ],

  footer: {
    signature: "Made with care, coffee and Claude Code."
  },

  ui: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      openMenu: "Open menu",
      downloadCV: "Download CV"
    },
    sections: {
      experience: "Work experience",
      skills: "Skills & tools",
      projects: "Projects",
      education: "Education"
    },
    skills: {
      competencias: "Skills",
      herramientas: "Tools",
      aprendiendo: "Currently learning"
    },
    experienceCard: {
      moreInfo: "Learn more",
      achievements: "Achievements & responsibilities"
    },
    projectCard: {
      moreInfo: "Learn more",
      close: "Close",
      figmaHook: "You can take a look inside the project here",
      figmaButton: "Open in Figma",
      figmaAria: "Figma project, opens in a new tab",
      liveHook: "Want to see it live?",
      liveButton: "Visit the site",
      liveAria: "Live site link, opens in a new tab"
    },
    footer: {
      cv: "Check my CV"
    },
    language: {
      switchToEs: "Cambiar a español",
      switchToEn: "Switch to English"
    }
  }
};

export const content = { es, en };
