export const content = {
  personal: {
    name: "Javier Pineda",
    role: "Product Designer",
    tagline: "Diseño de producto · UX/UI · Ingeniero Informático",
    bio: [
      "Finalizados mis estudios como ingeniero informático, descubrí mi pasión por el diseño de interfaces. Desde entonces, he ido estudiando y evolucionando mi perfil con el objetivo de diseñar productos digitales pensando siempre en la experiencia del usuario.",
      "Me encantaría trabajar en un entorno donde pueda participar en proyectos diversos y creativos, donde poder sumergirme en cualquier contexto aportando soluciones innovadoras. Actualmente me encuentro aprendiendo e integrando nuevas tecnologías de IA en mi flujo de trabajo."
    ],
    photo: "/profile.jpg",
    marginNote: "← estos párrafos cambian tanto como este sector",
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
      title: "Ventura",
      image: "/ventura.png",
      summary: "Audioguías gamificadas para que los niños disfruten de los museos tanto como los adultos. Todo empezó con una observación real en el Van Gogh de Ámsterdam.",
      tags: ["UX Research", "Investigación cualitativa", "UX/UI Design", "Prototipado"],
      tools: ["Figma", "Whimsical", "Google Forms"],
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
      title: "Mental Hub",
      image: "/MentalHub.png",
      summary: "Una plataforma para que los jóvenes encuentren contenido fiable sobre salud mental y profesionales cercanos. Mi proyecto final del módulo de UX/UI.",
      tags: ["UX Research", "Design Thinking", "UX/UI Design", "Prototipado"],
      tools: ["Figma", "Whimsical", "Google Forms"],
      sections: [
        {
          title: "El origen del problema",
          content: "Como proyecto final del módulo de UX/UI quise abordar la salud mental de los jóvenes. En clase estudiamos, con un caso real, cómo una mala interfaz puede tener consecuencias negativas. El razonamiento inverso es sencillo: si un mal diseño perjudica, uno bueno debería poder ayudar. La salud mental era un terreno con mucha desinformación y pocas soluciones digitales bien planteadas."
        },
        {
          title: "Metodología Design Thinking",
          content: "Seguí las cinco etapas del Design Thinking: Observar, Sintetizar, Idear, Diseñar y Probar. En cada fase analicé las experiencias de los jóvenes con su bienestar, identificando desafíos y aspiraciones para convertirlos en decisiones de diseño concretas."
        },
        {
          title: "Cuestionario e investigación",
          content: "Realicé un cuestionario a 50 jóvenes de entre 18 y 27 años sobre su interés por la salud mental, su relación con los psicólogos y sus hábitos de búsqueda en internet. Los resultados mostraron que reflexionan con frecuencia sobre su bienestar, pero los recursos digitales que encuentran no siempre son fiables."
        },
        {
          title: "User Persona",
          content: "Con los datos recogidos construí un perfil de usuario representativo, ficticio pero basado en patrones reales, que sirvió como guía para las decisiones posteriores: desde la arquitectura de la información hasta las matrices de necesidad que orientaron cada funcionalidad."
        },
        {
          title: "La solución: Mental Hub",
          content: "La plataforma ofrece recomendaciones personalizadas en su pantalla de inicio, secciones diferenciadas para contenido escrito y en vídeo, un espacio para guardar artículos y un buscador de psicólogos y profesionales cercanos. Construida con diseño atómico de tarjetas para mantener la coherencia visual y facilitar la navegación."
        },
        {
          title: "Prototipo de alta fidelidad",
          content: "Definí la arquitectura con sitemaps y flowcharts, pasé por un wireframe de baja fidelidad y construí el prototipo interactivo en Figma con diseño atómico y un sistema de componentes propio. El resultado refleja la experiencia completa de la aplicación."
        }
      ]
    },
    {
      title: "Family Flow",
      image: "/familyFlow.png",
      summary: "Gestión de tareas y emociones para familias con adolescentes. Nuestro primer Design Sprint en equipo y mi primera prueba con usuarios reales.",
      tags: ["Design Sprint", "UX Research", "UX/UI Design", "Pruebas de usuario"],
      tools: ["Figma", "Maze"],
      sections: [
        {
          title: "El origen del problema",
          content: "Family Flow nació del primer briefing real al que nos enfrentamos en CEI. La pregunta era directa: ¿cómo sería una app que mejore la vida en familia con adolescentes? Trabajamos en equipo con metodología Design Sprint, aunque el diseño final de la interfaz fue individual."
        },
        {
          title: "Metodología Design Sprint",
          content: "El Design Sprint estructura la resolución de problemas complejos en cinco días. Trabajamos con técnicas colaborativas como lluvia de ideas y Crazy 8, donde todas las propuestas tenían cabida. Un sistema de votaciones nos ayudó a filtrar y desarrollar las más prometedoras."
        },
        {
          title: "La solución del equipo",
          content: "El equipo apostó por combinar un gestor de tareas familiares con un gestor emocional, en la línea de lo que Apple Health ha empezado a hacer con la salud mental. Además de organizar el día a día, la app reconoce e informa del estado emocional de cada miembro para mejorar la comunicación familiar."
        },
        {
          title: "Prototipo de alta fidelidad",
          content: "En mi versión, Family Flow, centré el flujo en la relación entre tareas y emociones. La paleta usa 3 colores primarios para representar las 3 emociones principales, contrastando con blancos y grises para un aspecto limpio. Incluye un onboarding de 3 pantallas que presenta las ventajas de la app de forma clara."
        },
        {
          title: "Pruebas con usuarios reales",
          content: "Mediante Maze puse el prototipo en manos de usuarios reales. Además de probar la navegación, incluí preguntas para medir qué información retenían. El hallazgo principal fue que, en una pregunta de verdadero o falso, la mayoría falló con la tarea del 'examen de cálculo'. Existía en el prototipo pero estaba asignada a otro día, lo que revelaba un problema en la diferenciación visual de las fechas."
        }
      ]
    },
    {
      title: "Calendario académico",
      image: "/calendario.png",
      summary: "Análisis heurístico y rediseño del calendario académico de nuestro propio centro, un caso real con problemas de usabilidad conocidos por todos los alumnos.",
      tags: ["Análisis heurístico", "UX Research", "UX/UI Design", "Wireframing"],
      tools: ["Figma", "Whimsical"],
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
  }
};
