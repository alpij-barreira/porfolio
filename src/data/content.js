// Contenido del portfolio en español e inglés (ES / EN)
// Se consume desde useLanguage() → content

const es = {
  personal: {
    name: "Javier Pineda",
    role: "Product Designer",
    tagline: "Diseño de producto · UX/UI · Ingeniero Informático",
    bio: [
      "Soy diseñador de producto digital e ingeniero informático. Investigo qué necesita la gente, prototipo soluciones y las construyo con herramientas de desarrollo asistido por IA. Mi base técnica me ayuda a entenderme con los desarrolladores y a tomar decisiones de diseño que luego se pueden implementar.",
      "Me interesa ir hacia la gestión de producto digital, juntando la parte estratégica con la técnica y la de llevar una idea desde la investigación hasta algo que funcione. Es la dirección en la que sigo formándome."
    ],
    photo: "/profile.jpg",
    marginNote: "estos párrafos cambian tanto como este sector",
    contact: {
      email: "pinedaux@gmail.com",
      phone: "+34639418865",
      linkedin: "https://www.linkedin.com/in/javier-pineda-alonso/",
      cv: "/cv-es.pdf"
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
      { name: "Claude", icon: "claude", note: "Para diseñar y programar a la vez" },
      { name: "Suite de Adobe", icon: "adobe", note: "Para el diseño gráfico" },
      { name: "Notion", icon: "notion", note: "Donde organizo el trabajo" },
      { name: "Jira", icon: "jira", note: "Para proyectos con equipo" }
    ]
  },

  experience: [
    {
      company: "Tramiting",
      logo: "Tramiting",
      logoImage: "/logo-tramiting.png",
      role: "Diseñador UX/UI & Digitalización",
      period: "Enero 2025 a octubre 2025",
      duration: "10 meses",
      summary: "",
      description: [
        "Tramiting es una oficina técnica valenciana que legaliza instalaciones fotovoltaicas y gestiona trámites energéticos. Entré para digitalizar procesos que hasta entonces se hacían a mano. El puesto mezclaba UX/UI y digitalización: analizar los flujos de trabajo, definir requisitos y diseñar la arquitectura de una aplicación interna, haciendo de puente entre la oficina técnica y el equipo de desarrollo en React y AWS.",
        "Buena parte del trabajo fue automatización documental: estructuras JSON, plantillas dinámicas e integraciones por API con clientes como Octopus Energy y Solar360. Al ser el único perfil de UX/UI de la empresa, también recogí requisitos con los clientes, preparé reportes de impacto y fui anticipando lo que el sistema iba a necesitar al crecer."
      ],
      achievements: [
        { status: "done", text: "Arquitectura y prototipos de alta fidelidad de la aplicación interna de gestión de expedientes" },
        { status: "done", text: "Automatización de la generación documental por API con Octopus Energy y Solar360" },
        { status: "done", text: "Traslado de las especificaciones técnicas al equipo de desarrollo (React, AWS)" },
        { status: "progress", text: "Definición de requisitos y diseño de módulos pendientes de implementación" }
      ],
      skills: ["UX/UI Design", "Prototipado", "React / AWS", "Automatización", "API Integration", "Requisitos funcionales"]
    },
    {
      company: "Sexplace",
      logo: "Sexplace",
      logoImage: "/logo-sexplace.png",
      role: "Diseño web, redes sociales & e-commerce",
      period: "Marzo 2024 a noviembre 2024",
      duration: "9 meses",
      summary: "",
      description: [
        "SexPlace es una empresa valenciana de e-commerce de juguetes para adultos, un sector bastante más profesionalizado y complejo de lo que parece. Participé en el rediseño de la web para su expansión a Sudamérica, maquetando en CSS y adaptando plantillas de Prestashop, y me encargué de un catálogo amplio con control de stock, pedidos y redacción SEO.",
        "También llevé el diseño gráfico de la marca: banners, campañas de mailing, publicaciones para redes y edición de vídeo con Premiere Pro. Me sirvió para comprobar que el diseño aporta en cualquier sector si entiendes a quien va a usarlo."
      ],
      achievements: [
        { status: "done", text: "Rediseño web orientado a la expansión en Sudamérica (Prestashop, CSS)" },
        { status: "done", text: "Gestión de un catálogo de gran volumen con control de stock, pedidos y SEO" },
        { status: "done", text: "Creación de banners, campañas de mailing e historias de Instagram" },
        { status: "done", text: "Producción y edición de vídeo con Adobe Premiere Pro" }
      ],
      skills: ["UX/UI Design", "Prestashop", "CSS", "E-commerce", "SEO", "Diseño gráfico", "Adobe Premiere"]
    }
  ],

  projects: [
    {
      title: "Tramiting: CRM con generación documental",
      year: "2026",
      image: "/crm-tramiting.png",
      summary: "Recreación del concepto de la plataforma interna que ayudé a diseñar en Tramiting. Es un CRM que acompaña cada trámite energético de principio a fin (pedido, datos, documentos, firma y entrega) y cuyo núcleo es la generación de documentos a partir de una sola estructura de formulario.",
      tags: ["UX/UI Design", "Prototipado", "Claude Code"],
      tools: ["Claude Code", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://crm-documental.vercel.app",
      sections: [
        {
          title: "Una recreación del concepto",
          content: "Esta demo recrea cómo funcionaría la plataforma interna de Tramiting con las funciones que se diseñaron y se plantearon en desarrollo, en cuyo diseño colaboré. La plataforma real es de uso interno para la oficina técnica y sus empresas cliente, así que no puedo enseñarla. El concepto sí puedo mostrarlo como parte del trabajo que hice allí. Ninguna empresa, persona ni dato de la demo es real."
        },
        {
          title: "La idea del CRM",
          content: "La herramienta acompaña cada trámite energético (fotovoltaica, aerotermia, CAE, subvenciones) de principio a fin, siempre con la misma estructura: pedido, datos, documentos, firma y entrega. La empresa cliente contrata un servicio y aporta sus datos. La oficina técnica recoge ese expediente, lo tramita y devuelve la documentación firmada. El CRM sirve para que los dos lados miren el mismo trámite y sepan en qué punto está."
        },
        {
          title: "Tres formas de mirarlo",
          content: "La demo se recorre desde tres cuentas. La empresa cliente ve solo lo suyo, por un camino guiado y simple. El técnico de tramitación trabaja en una vista densa y operativa: pedidos por urgencia, procedimiento, documentos e incidencias. La dirección técnica añade la supervisión: visado, reparto de carga y analítica. Mi trabajo se centró en la vista del técnico, que es donde se resuelve el trámite."
        },
        {
          title: "Un formulario, todos los documentos",
          content: "El núcleo es la generación de documentos a partir de una sola estructura de formulario. El técnico rellena los datos del expediente una vez, con cálculos cruzados en vivo (potencia pico, producción estimada, bonificación del IBI, CO₂ evitado), y de esa misma estructura salen todos los documentos del trámite mediante plantillas dinámicas, listos para previsualizar y enviar a firma. Era la parte que más tiempo manual ahorraba y en la que más trabajé."
        }
      ]
    },
    {
      title: "Reviu: Recomendador fallero por presupuesto",
      year: "2026",
      image: "/reviu/reviu-cover.png",
      summary: "Trabajo de fin de máster en Barreira, todavía en desarrollo. Es una web-app que recomienda indumentaria y servicios falleros dentro del presupuesto que marca la usuaria, con el mismo planteamiento que un buscador de vuelos.",
      tags: ["UX Research", "UX/UI Design", "Claude Code"],
      tools: ["Figma", "Claude Code", "Next.js", "GitHub", "Vercel"],
      liveUrl: "https://reviu-flax.vercel.app",
      liveHook: "El proyecto sigue en desarrollo. En este enlace puedes ver en qué estado está en cada momento:",
      sections: [
        {
          title: "El proyecto",
          content: "Reviu es el trabajo con el que cerramos el Máster de UX/UI & AI-Native de Diseño de Producto en Barreira Arte + Diseño. Lo desarrollamos una compañera de clase y yo, y sigue abierto. Ahora estamos levantando el prototipo navegable de alta fidelidad, con datos simulados y controlados, que defenderemos ante el tribunal del máster."
        },
        {
          title: "El problema",
          content: "Vestirse de fallera es una compra cara y repartida entre muchos proveedores. El traje, el peinado, las joyas y el calzado están en sitios distintos, los precios rara vez son públicos y la usuaria acaba sumando presupuestos sueltos sin saber hasta el final cuánto le va a costar el conjunto."
        },
        {
          title: "La idea",
          content: "Le damos la vuelta al proceso. En lugar de buscar pieza a pieza y sumar al final, la usuaria dice cuánto puede gastar y qué artículos necesita, y Reviu compone paquetes completos y coherentes dentro de ese límite. El planteamiento es el de un buscador de vuelos aplicado al traje de fallera."
        },
        {
          title: "Cómo lo estamos construyendo",
          content: "El proyecto reúne lo que hemos aprendido en el máster. El diseño se decide en Figma, con su propia librería, y desde ahí levantamos la interfaz con Claude Code. Trabajamos por historias de usuario, con una rama y una pull request en GitHub por cada una, que es como nos repartimos el trabajo sin pisarnos. Se publica en Vercel."
        }
      ]
    },
    {
      title: "FC Barcelona: Plataforma para aficionados",
      year: "2026",
      image: "/FCBCover.png",
      summary: "Proyecto troncal del Máster de UX/UI & AI-Native de Diseño de Producto en Barreira Arte + Diseño. Seis meses aplicando Design Sprint a un briefing ficticio del FC Barcelona, con el reto de acercar el club a sus aficionados en el extranjero. Cerramos con una demo funcional hecha entre Figma y Claude Code.",
      tags: ["Design Sprint", "UX Research", "UX/UI Design", "Claude Code"],
      tools: ["Figma", "Claude Code", "Maze"],
      liveUrl: "https://fcb-buddies-prototype.vercel.app",
      sections: [
        {
          title: "El contexto",
          content: "Es el trabajo troncal del Máster de UX/UI & AI-Native de Diseño de Producto en Barreira Arte + Diseño: seis meses en los que aprendimos a fondo la metodología Design Sprint y recorrimos el proceso completo de diseño de producto sobre un caso planteado como si fuera un encargo real."
        },
        {
          title: "El briefing",
          content: "Partíamos de un encargo hipotético en el que nos situábamos dentro del equipo de innovación del FC Barcelona. El objetivo era diseñar una aplicación que ayudase a los aficionados del club en el extranjero a sentirse más cerca, sobre todo en los momentos en los que ver un partido pesa más que estar en el Camp Nou."
        },
        {
          title: "Investigación con usuarios",
          content: "Aplicamos las técnicas del Design Sprint en todas las fases: entrevistas con aficionados culés, encuestas, pruebas de concepto y sesiones de validación con usuarios reales. La investigación mostró un patrón. Muchos aficionados viven el fútbol como algo colectivo y echan de menos con quién compartirlo cuando están lejos de casa."
        },
        {
          title: "La solución",
          content: "De ahí salió una plataforma que conecta a aficionados con bares, negocios locales y otros usuarios dispuestos a hostear encuentros para ver los partidos en compañía. La aplicación reúne el calendario completo del FC Barcelona y sus resultados en directo, y permite descubrir eventos cercanos donde ver cada partido acompañado."
        },
        {
          title: "Prototipo interactivo",
          content: "Cerramos con una demo funcional construida entre Figma y Claude Code, siguiendo el flujo de diseño y desarrollo con IA que fuimos cogiendo durante el máster. El prototipo permite recorrer la experiencia completa: descubrir bares y usuarios que hostean partidos cerca, unirse a un evento y seguir el calendario del club."
        }
      ]
    },
    {
      title: "Reimagine: Landing page",
      year: "2026",
      image: "/ReimagineCover.png",
      summary: "Diseño y desarrollo de la landing de Reimagine, una marca de moda deportiva dirigida a corredores que entienden el entrenamiento como algo personal. Fue la primera web que diseñé y construí entera con Claude Code.",
      tags: ["Claude Code", "Figma", "Design Sprint"],
      tools: ["Claude Code", "Figma", "Vercel"],
      liveUrl: "https://reimagine-landing.vercel.app",
      sections: [
        {
          title: "El brief",
          content: "Reimagine se dirige a corredores que entienden el entrenamiento como una práctica personal más que como una competición. El encargo era diseñar y publicar una landing que transmitiera esa idea desde la primera pantalla."
        },
        {
          title: "Metodología Design Sprint",
          content: "Apliqué un Design Sprint corto para llegar rápido a un concepto, un mood y una arquitectura de información. El formato obliga a decidir pronto y a iterar sin perder de vista lo que la marca quiere decir."
        },
        {
          title: "Diseño en Figma",
          content: "Monté el sistema visual en Figma: serif para los titulares, una escala neutra para el cuerpo, bastante espacio en blanco y una jerarquía clara entre bloques."
        },
        {
          title: "Desarrollo con Claude Code",
          content: "El desarrollo lo llevé con Claude Code, dirigiéndolo desde el diseño hasta el código final en React y Vite. Fue mi primera web diseñada y construida con IA, y los ciclos de iteración salieron mucho más rápidos que en cualquier proyecto anterior."
        },
        {
          title: "El resultado",
          content: "La landing está publicada en Vercel y mantiene el tono tranquilo de la marca."
        }
      ]
    }
  ],

  additionalWork: [
    {
      title: "Sexplace: Diseño de publicidad",
      year: "2024",
      thumbnail: "/sexplace/sexplace-logo.jpg",
      summary: "En Sexplace era el único encargado del diseño de la marca en todos sus entornos, así que diseñé una veintena de piezas: campañas de mailing, historias de Instagram y publicidad para los distintos e-commerce de la compañía.",
      tools: ["Photoshop"],
      sections: [
        {
          title: "El encargo",
          content: "Cada mes me pasaban las campañas de ofertas, promociones y artículos nuevos que iban a salir en las tiendas y en las webs. Mi trabajo era planificar la línea gráfica de esas promociones y crear los recursos necesarios para todos los entornos."
        },
        {
          title: "Responsabilidades adicionales",
          content: "Además de las piezas gráficas, me encargaba de redactar y montar el resto de elementos que las acompañaban. Programaba las promociones, publicaba los contenidos, escribía las newsletters y usaba Prestashop para sacar métricas y valorar los resultados de las campañas."
        }
      ],
      gallery: [
        {
          src: "/sexplace/sexplace-banner-web.jpg",
          caption: "Banner de home para una campaña cruzada de dos productos",
          format: "Banner web · 1920 × 600"
        },
        {
          src: "/sexplace/sexplace-banner-movil.jpg",
          caption: "Adaptación cuadrada del lanzamiento para el mercado latinoamericano",
          format: "Banner móvil · 600 × 600"
        },
        {
          src: "/sexplace/sexplace-historia-instagram.jpg",
          caption: "Historia para el Día del Soltero con código promocional",
          format: "Historia de Instagram · 1080 × 1920"
        },
        {
          src: "/sexplace/sexplace-newsletter.jpg",
          caption: "Cabecera de newsletter para el calendario de adviento de Satisfyer",
          format: "Newsletter · 1080 × 1465"
        }
      ]
    },
    {
      title: "Sexplace TV: Edición de vídeo para Youtube e Instagram",
      year: "2024",
      thumbnail: "/sexplace/sexplace-tv.jpg",
      summary: "Como encargado del diseño de la marca, también editaba los vídeos que se publicaban en redes. No participaba en la grabación: recibía los brutos de nuestros colaboradores y me ocupaba de todo lo que venía después, hasta dejar cada pieza lista para publicar.",
      tools: ["Premiere Pro"],
      sections: [
        {
          title: "El encargo",
          content: "De cada bruto salía el montaje completo para YouTube: efectos, música, corrección de color y ritmo. Después preparaba la versión simplificada para Instagram, ajustada a un formato y a un consumo mucho más rápidos sin perder lo que hacía funcionar al vídeo original."
        },
        {
          title: "Responsabilidades adicionales",
          content: "La tarea no terminaba en el montaje. También preparaba la publicación, escribía las descripciones, respondía los comentarios y decidía el ritmo con el que salía cada vídeo y cómo se repartía entre las dos plataformas."
        }
      ],
      videos: ["y0SnmQqByuI", "GPxX2hBOyo8", "jUOz1jo8D78", "OcMTl44hMW4"]
    },
    {
      title: "Mental Hub: Divulgación de salud mental para la juventud",
      year: "2023",
      thumbnail: "/mental-hub/mental-hub-thumb.jpg",
      summary: "Trabajo final del módulo de Interfaces y Experiencia de Usuario en CEI. Es el diseño de una app que reúne artículos y vídeos verificados sobre salud mental y pone en contacto a los jóvenes con profesionales, para combatir la desinformación y el autodiagnóstico.",
      tools: ["Figma", "draw.io"],
      sections: [
        {
          title: "El encargo",
          content: "El punto de partida era un dato: el 59,3% de los jóvenes españoles de entre 15 y 29 años reconoce haber tenido problemas de salud mental. Buena parte se informa en redes sociales, donde el contenido se banaliza y empuja al autodiagnóstico erróneo. Hacía falta una fuente fiable."
        },
        {
          title: "El proceso",
          content: "Apliqué Design Thinking con un modelo de doble diamante en cuatro fases: observar, sintetizar, idear y diseñar. De ahí salieron el desk research, la netnografía, la user persona, el customer journey, la matriz DAFO y el Business Model Canvas, hasta cerrar con un prototipo de alta fidelidad en Figma."
        }
      ],
      pdf: {
        file: "/mental-hub/mental-hub.pdf",
        downloadName: "Mental-Hub-Javier-Pineda.pdf",
        cover: "/mental-hub/mental-hub-portada.jpg",
        meta: "PDF · 30 páginas · 5,8 MB"
      }
    },
    {
      title: "Ventura: App interactiva para museos",
      year: "2023",
      thumbnail: "/ventura.png",
      thumbFit: "cover",
      summary: "Audioguías gamificadas para que los niños disfruten de los museos tanto como los adultos. La idea salió de una visita al Van Gogh de Ámsterdam.",
      tools: ["Figma", "Whimsical", "Google Forms"],
      figmaUrl: "https://www.figma.com/design/V9c4Ulz1MMmPJuCFIPmkbn/Ventura?node-id=1-4&p=f",
      sections: [
        {
          title: "El origen del problema",
          content: "Visitando el museo Van Gogh de Ámsterdam vi un problema concreto. El sistema de audioguías, premiado en los Dutch Design Awards 2015, era técnicamente sólido, pero los niños que acompañaban a sus padres no participaban. Navegaban entre menús sin entender nada porque la interfaz no estaba pensada para ellos."
        },
        {
          title: "Oportunidad de mercado",
          content: "Al revisar el ecosistema de guías para museos confirmé que no había soluciones enfocadas al público infantil y juvenil. La oportunidad era una plataforma que cualquier museo pudiese adoptar sin desarrollos a medida, viable y escalable desde el diseño."
        },
        {
          title: "Metodología de investigación",
          content: "Abordé el proyecto desde el diseño centrado en el usuario. Tras analizar el mercado, planteé una investigación cualitativa con tres ejes: competencias tecnológicas del público objetivo, tipo de ocio y relación con la cultura. Para cubrirlos usé dos técnicas complementarias: cuestionarios y talleres."
        },
        {
          title: "Cuestionario",
          content: "Con el colegio Sagrado Corazón Vedruna de Valencia distribuí un cuestionario a alumnos de 4.º de Primaria a 4.º de la ESO, de 8 a 15 años. Las 185 respuestas recogidas sirvieron para construir perfiles de usuario, escenarios de uso y los principios de diseño."
        },
        {
          title: "Talleres",
          content: "Los cuestionarios daban datos cuantitativos, pero necesitaba información más subjetiva: intereses, preferencias, emociones. Organicé 6 talleres presenciales con grupos de 30 a 40 alumnos y presentaciones adaptadas a cada franja de edad, que me permitieron ver qué tecnologías usaban de verdad y qué tipos de museos les daban más curiosidad."
        },
        {
          title: "La solución: Ventura",
          content: "Los datos apuntaban a un formato de juego interactivo. Ventura propone un recorrido gamificado en el que el usuario recibe preguntas y retos adaptados mientras explora la exposición, en el museo o desde casa. El niño participa desde el primer momento, la experiencia se adapta a su perfil y, por su diseño modular, cualquier museo puede implementarlo."
        },
        {
          title: "Prototipo y alta fidelidad",
          content: "Empecé con wireframes en Whimsical para definir estructura, flujos y principios visuales. Después lo rediseñé en Figma con diseño atómico: componentes independientes, un sistema de diseño propio y un prototipo interactivo de alta fidelidad."
        }
      ]
    },
    {
      title: "Calendario académico: Rediseño",
      year: "2023",
      thumbnail: "/calendario.png",
      thumbFit: "cover",
      thumbPosition: "left top",
      summary: "Análisis heurístico y rediseño del calendario académico de nuestro propio centro, un caso real con problemas de usabilidad que conocíamos todos los alumnos.",
      tools: ["Figma", "Whimsical"],
      figmaUrl: "https://www.figma.com/design/5eM1kDf2G6RLH9xYYyeALq/Calendario-CEI?node-id=52-450",
      sections: [
        {
          title: "El contexto del proyecto",
          content: "En uno de los proyectos finales del módulo de UX/UI en CEI, toda la clase simulamos ser una agencia de diseño. Con Agustina Irarrázaval al frente, nos dividimos en equipos para llevar 3 proyectos a la vez. A mí me tocó el calendario académico del centro, una herramienta con problemas de usabilidad que conocíamos todos los alumnos."
        },
        {
          title: "Análisis heurístico",
          content: "Junto con Marco Garnés analizamos la web área por área según los principios de usabilidad, puntuando cada problema por gravedad. Salió un mapa claro de qué era imprescindible corregir y qué funcionaba bien y convenía mantener."
        },
        {
          title: "Desarrollo de la solución",
          content: "Con el análisis hecho, creamos un perfil de usuario para asegurarnos de que la solución atacaba problemas reales. La propuesta la desarrollé en solitario: primero un wireframe en Whimsical con nuevos sistemas de reserva y filtrado, más ágiles, y una jerarquía visual más clara. El diseño final lo construí en Figma con diseño atómico, montando las distintas vistas del calendario."
        }
      ]
    }
  ],

  education: [
    {
      institution: "Universidad Politécnica de Valencia",
      degree: "Máster Universitario en Ingeniería de Computadores y Redes",
      period: "Desde septiembre de 2026",
      current: true,
      description: "Lo curso para reforzar mi base como informático. Busco más contexto sobre las tecnologías que hay por debajo de cada producto, para poder diseñar y a la vez trabajar de cerca con un equipo técnico."
    },
    {
      institution: "CEI: Centro de Estudios de Innovación",
      degree: "Doble módulo de Cloud Computing y Big Data",
      period: "Desde julio de 2026",
      current: true,
      description: "Formación en tecnologías cloud y procesamiento de grandes volúmenes de datos. Me interesa incorporar la lógica de la infraestructura y los datos a las decisiones de diseño."
    },
    {
      institution: "Barreira Arte + Diseño",
      degree: "Máster Intensivo en AI-Native Product Design",
      period: "Enero a septiembre de 2026",
      description: "Máster de seis meses sobre diseño de producto digital con enfoque AI-First. Aplicamos la metodología Design Sprint sobre proyectos reales, recorriendo el proceso desde la estrategia hasta el prototipo, y combinando Figma con herramientas de desarrollo asistido por IA como Claude Code."
    },
    {
      institution: "CEI: Centro de Estudios de Innovación",
      degree: "Doble módulo de UX/UI y Diseño Gráfico",
      period: "2023 a 2024",
      description: "Formación en las bases del diseño de experiencia de usuario y del diseño gráfico. Aquí hice mis primeros proyectos reales con metodologías como Design Thinking y Design Sprint, y aprendí a investigar, prototipar y validar soluciones digitales."
    },
    {
      institution: "Universidad Politécnica de Valencia",
      degree: "Ingeniería Informática",
      period: "2017 a 2023",
      description: "Base técnica en programación, bases de datos y redes. Entender las posibilidades y los límites técnicos de cada proyecto me ayuda a hablar con los equipos de desarrollo y a decidir con más información."
    }
  ],

  footer: {
    signature: "Diseñado y programado por mí, con Claude Code."
  },

  ui: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      work: "Trabajo",
      studies: "Estudios",
      contact: "Contacto",
      openMenu: "Abrir menú",
      downloadCV: "Descargar CV"
    },
    sections: {
      experience: "Experiencia laboral",
      skills: "Habilidades",
      projects: "Proyectos principales",
      additionalWork: "Trabajos adicionales",
      education: "Estudios",
      about: "Sobre mí",
      contact: "Contacto"
    },
    cover: {
      callMe: "Llámame",
      writeMe: "Escríbeme"
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
      readCase: "Leer el caso",
      year: "Año",
      disciplines: "Disciplinas",
      tools: "Herramientas",
      close: "Cerrar",
      figmaHook: "Puedes ver el archivo de Figma aquí:",
      figmaButton: "Abrir en Figma",
      figmaAria: "Proyecto de Figma, se abre en una pestaña nueva",
      liveHook: "Puedes verlo funcionando aquí:",
      liveButton: "Visitar el sitio",
      liveAria: "Enlace al sitio en vivo, se abre en una pestaña nueva"
    },
    additionalWork: {
      intro: "Trabajos independientes, encargos del entorno laboral y proyectos de mis estudios de posgrado, con distintas habilidades aplicadas en contextos reales.",
      expand: "Ver trabajos",
      collapse: "Ocultar trabajos",
      moreInfo: "Ver el trabajo",
      close: "Cerrar",
      gallery: "Piezas seleccionadas",
      videos: "Vídeos editados",
      videoLabel: "Vídeo",
      videoAria: "en YouTube, se abre en una pestaña nueva",
      pdfHeading: "La presentación del proyecto",
      pdfAction: "Descargar",
      pdfAria: "Descargar la presentación del proyecto en PDF",
      liveHook: "Puedes verlo funcionando aquí:",
      liveButton: "Visitar el sitio",
      liveAria: "Enlace al sitio en vivo, se abre en una pestaña nueva",
      figmaHook: "Puedes ver el archivo de Figma aquí:",
      figmaButton: "Abrir en Figma",
      figmaAria: "Proyecto de Figma, se abre en una pestaña nueva"
    },
    footer: {
      emailLead: "Puedes escribirme a:",
      cv: "Consulta mi CV",
      email: "Correo",
      phone: "Teléfono",
      cvLabel: "Currículum",
      linkedin: "LinkedIn"
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
      "I'm a digital product designer and a computer engineer. I look into what people need, prototype solutions and build them with AI-assisted development tools. My technical background helps me work with developers and make design decisions that can actually be implemented.",
      "I want to move towards digital product management, putting the strategic side together with the technical one and with taking an idea from research to something that works. That's the direction I keep training for."
    ],
    photo: "/profile.jpg",
    marginNote: "these paragraphs change as often as this industry does",
    contact: {
      email: "pinedaux@gmail.com",
      phone: "+34639418865",
      linkedin: "https://www.linkedin.com/in/javier-pineda-alonso/",
      cv: "/cv.pdf"
    }
  },

  skills: {
    core: [
      "Interface design",
      "User research",
      "Wireframes",
      "High and low fidelity prototyping",
      "Usability testing",
      "Web layout",
      "Newsletters",
      "Banners and advertising",
      "Social media experience",
      "Video editing"
    ],
    tools: [
      { name: "Figma", icon: "figma", note: "My first UX/UI tool" },
      { name: "Claude", icon: "claude", note: "To design and code at once" },
      { name: "Adobe Suite", icon: "adobe", note: "For graphic design" },
      { name: "Notion", icon: "notion", note: "Where I organise the work" },
      { name: "Jira", icon: "jira", note: "For projects with a team" }
    ]
  },

  experience: [
    {
      company: "Tramiting",
      logo: "Tramiting",
      logoImage: "/logo-tramiting.png",
      role: "UX/UI Designer & Digitalisation",
      period: "January 2025 to October 2025",
      duration: "10 months",
      summary: "",
      description: [
        "Tramiting is a technical consultancy in Valencia that legalises solar PV installations and handles energy-sector paperwork. I joined to digitalise processes that until then were done by hand. The job mixed UX/UI and digitalisation: analysing workflows, defining requirements and designing the architecture of an internal application, acting as a bridge between the technical office and the development team working in React and AWS.",
        "A good part of the work was document automation: JSON structures, dynamic templates and API integrations with clients such as Octopus Energy and Solar360. As the only UX/UI profile in the company, I also gathered requirements directly with clients, prepared impact reports and anticipated what the system would need as it grew."
      ],
      achievements: [
        { status: "done", text: "Architecture and high-fidelity prototypes of the internal case management application" },
        { status: "done", text: "Document generation automated over API with Octopus Energy and Solar360" },
        { status: "done", text: "Technical specifications handed over to the development team (React, AWS)" },
        { status: "progress", text: "Requirements and design of modules still pending implementation" }
      ],
      skills: ["UX/UI Design", "Prototyping", "React / AWS", "Automation", "API Integration", "Functional Requirements"]
    },
    {
      company: "Sexplace",
      logo: "Sexplace",
      logoImage: "/logo-sexplace.png",
      role: "Web design, social media & e-commerce",
      period: "March 2024 to November 2024",
      duration: "9 months",
      summary: "",
      description: [
        "SexPlace is an e-commerce company in Valencia selling adult toys, a sector far more professional and complex than it might seem. I took part in redesigning the site for its expansion into South America, writing CSS and adapting Prestashop templates, and I handled a large catalogue with stock control, orders and SEO copy.",
        "I also ran the brand's graphic design: banners, mailing campaigns, social media posts and video editing in Premiere Pro. It showed me that design adds value in any sector if you understand the person who is going to use it."
      ],
      achievements: [
        { status: "done", text: "Site redesign aimed at the expansion into South America (Prestashop, CSS)" },
        { status: "done", text: "Management of a large catalogue with stock control, orders and SEO" },
        { status: "done", text: "Banners, mailing campaigns and Instagram stories" },
        { status: "done", text: "Video production and editing in Adobe Premiere Pro" }
      ],
      skills: ["UX/UI Design", "Prestashop", "CSS", "E-commerce", "SEO", "Graphic Design", "Adobe Premiere"]
    }
  ],

  projects: [
    {
      title: "Tramiting: CRM with document generation",
      year: "2026",
      image: "/crm-tramiting.png",
      summary: "A recreation of the concept behind the internal platform I helped design at Tramiting. It is a CRM that follows every energy procedure from start to finish (order, data, documents, signature and delivery), built around generating documents from a single form structure.",
      tags: ["UX/UI Design", "Prototyping", "Claude Code"],
      tools: ["Claude Code", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://crm-documental.vercel.app",
      sections: [
        {
          title: "A recreation of the concept",
          content: "This demo recreates how Tramiting's internal platform would work with the features that were designed and planned for development, and which I helped design. The real platform is for internal use by the technical office and its client companies, so I cannot show it. The concept I can show, as part of the work I did there. No company, person or figure in the demo is real."
        },
        {
          title: "The idea behind the CRM",
          content: "The tool follows every energy procedure (solar PV, heat pumps, energy-saving certificates, grants) from start to finish, always with the same structure: order, data, documents, signature and delivery. The client company contracts a service and supplies its data. The technical office picks up that case, processes it and returns the signed paperwork. The CRM exists so both sides look at the same procedure and know where it stands."
        },
        {
          title: "Three ways of looking at it",
          content: "The demo can be explored from three accounts. The client company only sees its own work, along a guided and simple path. The case officer works in a dense, operational view: orders by urgency, procedure, documents and incidents. Technical management adds oversight: approval, workload distribution and analytics. My work focused on the case officer view, which is where the procedure gets resolved."
        },
        {
          title: "One form, every document",
          content: "The core is generating documents from a single form structure. The case officer fills in the data once, with live cross-calculations (peak power, estimated output, property tax rebate, CO₂ avoided), and from that same structure every document comes out through dynamic templates, ready to preview and send for signature. It was the part that saved the most manual time and the one I worked on most."
        }
      ]
    },
    {
      title: "Reviu: Budget-led fallera outfit recommender",
      year: "2026",
      image: "/reviu/reviu-cover.png",
      summary: "My final master's project at Barreira, still in progress. It is a web app that recommends fallera clothing and services within the budget the user sets, with the same approach as a flight search engine.",
      tags: ["UX Research", "UX/UI Design", "Claude Code"],
      tools: ["Figma", "Claude Code", "Next.js", "GitHub", "Vercel"],
      liveUrl: "https://reviu-flax.vercel.app",
      liveHook: "The project is still in progress. This link shows where it stands at any given time:",
      sections: [
        {
          title: "The project",
          content: "Reviu is the project closing the Master's in UX/UI & AI-Native Product Design at Barreira Arte + Diseño. A classmate and I are developing it, and it is still open. Right now we are building the high-fidelity clickable prototype, with simulated and controlled data, which we will defend before the master's panel."
        },
        {
          title: "The problem",
          content: "Dressing as a fallera is an expensive purchase split across many suppliers. The dress, the hairpieces, the jewellery and the shoes come from different places, prices are rarely public, and the buyer ends up adding up separate quotes without knowing until the end what the whole outfit will cost."
        },
        {
          title: "The idea",
          content: "We turn the process around. Instead of searching piece by piece and adding up at the end, the user says how much she can spend and what she needs, and Reviu puts together complete, coherent packages within that limit. The approach is that of a flight search engine applied to the fallera outfit."
        },
        {
          title: "How we are building it",
          content: "The project brings together what we have learned on the master's. Design is settled in Figma, with its own library, and from there we build the interface with Claude Code. We work by user stories, with a branch and a pull request on GitHub for each one, which is how we split the work without getting in each other's way. It is published on Vercel."
        }
      ]
    },
    {
      title: "FC Barcelona: Fan platform",
      year: "2026",
      image: "/FCBCover.png",
      summary: "The core project of the Master's in UX/UI & AI-Native Product Design at Barreira Arte + Diseño. Six months applying Design Sprint to a fictional FC Barcelona brief, with the challenge of bringing the club closer to its fans abroad. We closed with a working demo built between Figma and Claude Code.",
      tags: ["Design Sprint", "UX Research", "UX/UI Design", "Claude Code"],
      tools: ["Figma", "Claude Code", "Maze"],
      liveUrl: "https://fcb-buddies-prototype.vercel.app",
      sections: [
        {
          title: "The context",
          content: "This is the core project of the Master's in UX/UI & AI-Native Product Design at Barreira Arte + Diseño: six months in which we learned the Design Sprint methodology thoroughly and went through the full product design process on a case set up as if it were a real commission."
        },
        {
          title: "The brief",
          content: "We started from a hypothetical commission in which we were part of FC Barcelona's innovation team. The goal was to design an application that would help the club's fans abroad feel closer to it, especially at the moments when watching a match matters more than being at the Camp Nou."
        },
        {
          title: "User research",
          content: "We applied Design Sprint techniques across every phase: interviews with culé fans, surveys, concept tests and validation sessions with real users. The research showed a pattern. Many fans experience football as something collective and miss having someone to share it with when they are far from home."
        },
        {
          title: "The solution",
          content: "Out of that came a platform connecting fans with bars, local businesses and other users willing to host gatherings to watch the matches together. The app brings together FC Barcelona's full fixture list and live results, and lets you find nearby events to watch each match with other people."
        },
        {
          title: "Interactive prototype",
          content: "We closed with a working demo built between Figma and Claude Code, following the AI-assisted design and development flow we picked up during the master's. The prototype lets you go through the whole experience: finding bars and users hosting matches nearby, joining an event and following the club's fixture list."
        }
      ]
    },
    {
      title: "Reimagine: Landing page",
      year: "2026",
      image: "/ReimagineCover.png",
      summary: "Design and development of the Reimagine landing page, a sportswear brand aimed at runners who treat training as something personal. It was the first site I designed and built entirely with Claude Code.",
      tags: ["Claude Code", "Figma", "Design Sprint"],
      tools: ["Claude Code", "Figma", "Vercel"],
      liveUrl: "https://reimagine-landing.vercel.app",
      sections: [
        {
          title: "The brief",
          content: "Reimagine is aimed at runners who treat training as a personal practice rather than a competition. The commission was to design and publish a landing page that got that idea across from the first screen."
        },
        {
          title: "Design Sprint methodology",
          content: "I ran a short Design Sprint to get quickly to a concept, a mood and an information architecture. The format forces you to decide early and to iterate without losing sight of what the brand wants to say."
        },
        {
          title: "Design in Figma",
          content: "I put the visual system together in Figma: a serif for headlines, a neutral scale for body text, plenty of white space and a clear hierarchy between blocks."
        },
        {
          title: "Development with Claude Code",
          content: "I handled development with Claude Code, directing it from the design through to the final code in React and Vite. It was my first site designed and built with AI, and the iteration cycles came out much faster than in any earlier project."
        },
        {
          title: "The result",
          content: "The landing page is published on Vercel and keeps the calm tone of the brand."
        }
      ]
    }
  ],

  additionalWork: [
    {
      title: "Sexplace: Advertising design",
      year: "2024",
      thumbnail: "/sexplace/sexplace-logo.jpg",
      summary: "At Sexplace I was the only person in charge of the brand's design across all its channels, so I designed around twenty pieces: mailing campaigns, Instagram stories and advertising for the company's different online shops.",
      tools: ["Photoshop"],
      sections: [
        {
          title: "The brief",
          content: "Every month I was given the campaigns of offers, promotions and new items that were going out in the shops and on the websites. My job was to plan the graphic line for those promotions and create the assets needed for every channel."
        },
        {
          title: "Additional responsibilities",
          content: "Beyond the graphic pieces, I also wrote and put together everything that went with them. I scheduled the promotions, published the content, wrote the newsletters and used Prestashop to pull metrics and assess how the campaigns had gone."
        }
      ],
      gallery: [
        {
          src: "/sexplace/sexplace-banner-web.jpg",
          caption: "Homepage banner for a cross-promotion of two products",
          format: "Web banner · 1920 × 600"
        },
        {
          src: "/sexplace/sexplace-banner-movil.jpg",
          caption: "Square adaptation of the launch for the Latin American market",
          format: "Mobile banner · 600 × 600"
        },
        {
          src: "/sexplace/sexplace-historia-instagram.jpg",
          caption: "Singles' Day story with a promo code",
          format: "Instagram story · 1080 × 1920"
        },
        {
          src: "/sexplace/sexplace-newsletter.jpg",
          caption: "Newsletter header for the Satisfyer advent calendar",
          format: "Newsletter · 1080 × 1465"
        }
      ]
    },
    {
      title: "Sexplace TV: Video editing for YouTube and Instagram",
      year: "2024",
      thumbnail: "/sexplace/sexplace-tv.jpg",
      summary: "As the person in charge of the brand's design, I also edited the videos published on social media. I wasn't involved in filming: I received the raw footage from our collaborators and handled everything that came after, until each piece was ready to publish.",
      tools: ["Premiere Pro"],
      sections: [
        {
          title: "The brief",
          content: "Each batch of raw footage became the full edit for YouTube: effects, music, colour correction and pacing. I then prepared the simplified version for Instagram, adjusted to a much faster format without losing what made the original video work."
        },
        {
          title: "Additional responsibilities",
          content: "The task didn't end with the edit. I also prepared the publication, wrote the descriptions, replied to comments and decided the pace at which each video went out and how it was split between the two platforms."
        }
      ],
      videos: ["y0SnmQqByuI", "GPxX2hBOyo8", "jUOz1jo8D78", "OcMTl44hMW4"]
    },
    {
      title: "Mental Hub: Mental-health outreach for young people",
      year: "2023",
      thumbnail: "/mental-hub/mental-hub-thumb.jpg",
      summary: "Final project for the Interfaces and User Experience module at CEI. It is the design of an app that gathers verified articles and videos on mental health and puts young people in touch with professionals, to push back against misinformation and self-diagnosis.",
      tools: ["Figma", "draw.io"],
      sections: [
        {
          title: "The brief",
          content: "The starting point was one figure: 59.3% of Spaniards aged 15 to 29 report having had mental health problems. Many of them get their information on social media, where the subject is trivialised and pushes people towards mistaken self-diagnosis. A reliable source was needed."
        },
        {
          title: "The process",
          content: "I applied Design Thinking with a double diamond model across four phases: observe, synthesise, ideate and design. Out of it came the desk research, the netnography, the user persona, the customer journey, the SWOT matrix and the Business Model Canvas, closing with a high-fidelity prototype in Figma."
        }
      ],
      pdf: {
        file: "/mental-hub/mental-hub.pdf",
        downloadName: "Mental-Hub-Javier-Pineda.pdf",
        cover: "/mental-hub/mental-hub-portada.jpg",
        meta: "PDF · 30 pages · 5.8 MB"
      }
    },
    {
      title: "Ventura: Interactive museum app",
      year: "2023",
      thumbnail: "/ventura.png",
      thumbFit: "cover",
      summary: "Gamified audio guides so children enjoy museums as much as adults do. The idea came out of a visit to the Van Gogh Museum in Amsterdam.",
      tools: ["Figma", "Whimsical", "Google Forms"],
      figmaUrl: "https://www.figma.com/design/V9c4Ulz1MMmPJuCFIPmkbn/Ventura?node-id=1-4&p=f",
      sections: [
        {
          title: "Where the problem came from",
          content: "Visiting the Van Gogh Museum in Amsterdam I saw a specific problem. The audio guide system, awarded at the Dutch Design Awards 2015, was technically solid, but the children who came along with their parents weren't taking part. They navigated menus without understanding any of it, because the interface wasn't designed for them."
        },
        {
          title: "Market opportunity",
          content: "Looking through the ecosystem of museum guides, I confirmed there were no solutions aimed at children and teenagers. The opportunity was a platform any museum could adopt without custom development, viable and scalable from the design onwards."
        },
        {
          title: "Research methodology",
          content: "I approached the project through user-centred design. After analysing the market, I set up qualitative research along three lines: the target audience's technical skills, the kind of leisure they go for and their relationship with culture. To cover them I used two complementary techniques: questionnaires and workshops."
        },
        {
          title: "Questionnaire",
          content: "With the Sagrado Corazón Vedruna school in Valencia I distributed a questionnaire to pupils from Year 5 of primary to Year 10, aged 8 to 15. The 185 responses collected went into building user profiles, use scenarios and the design principles."
        },
        {
          title: "Workshops",
          content: "The questionnaires gave me quantitative data, but I needed more subjective information: interests, preferences, emotions. I ran 6 in-person workshops with groups of 30 to 40 pupils and presentations adapted to each age range, which let me see which technologies they actually used and which kinds of museums made them curious."
        },
        {
          title: "The solution: Ventura",
          content: "The data pointed to an interactive game format. Ventura proposes a gamified route in which the user gets questions and challenges adapted to them while exploring the exhibition, at the museum or from home. The child takes part from the start, the experience adapts to their profile and, thanks to its modular design, any museum can implement it."
        },
        {
          title: "Prototype and high fidelity",
          content: "I started with wireframes in Whimsical to define structure, flows and visual principles. I then redesigned it in Figma using atomic design: independent components, a design system of its own and a high-fidelity interactive prototype."
        }
      ]
    },
    {
      title: "Academic calendar: Redesign",
      year: "2023",
      thumbnail: "/calendario.png",
      thumbFit: "cover",
      thumbPosition: "left top",
      summary: "Heuristic analysis and redesign of our own school's academic calendar, a real case with usability problems every student knew about.",
      tools: ["Figma", "Whimsical"],
      figmaUrl: "https://www.figma.com/design/5eM1kDf2G6RLH9xYYyeALq/Calendario-CEI?node-id=52-450",
      sections: [
        {
          title: "Project context",
          content: "In one of the final projects of the UX/UI module at CEI, the whole class acted as a design agency. With Agustina Irarrázaval leading, we split into teams to run 3 projects at once. I got the school's academic calendar, a tool with usability problems every student knew about."
        },
        {
          title: "Heuristic analysis",
          content: "Together with Marco Garnés we analysed the site area by area against usability principles, scoring each problem by severity. The result was a clear map of what had to be fixed and what worked well and was worth keeping."
        },
        {
          title: "Developing the solution",
          content: "With the analysis done, we created a user profile to make sure the solution tackled real problems. I developed the proposal on my own: first a wireframe in Whimsical with new booking and filtering systems, quicker to use, and a clearer visual hierarchy. I built the final design in Figma using atomic design, putting together the different calendar views."
        }
      ]
    }
  ],

  education: [
    {
      institution: "Polytechnic University of Valencia",
      degree: "Master's Degree in Computer and Network Engineering",
      period: "Since September 2026",
      current: true,
      description: "I'm taking it to strengthen my base as an engineer. I want more context on the technologies sitting underneath each product, so I can design and at the same time work closely with a technical team."
    },
    {
      institution: "CEI: Centro de Estudios de Innovación",
      degree: "Cloud Computing and Big Data double module",
      period: "Since July 2026",
      current: true,
      description: "Training in cloud technologies and large-scale data processing. I'm interested in bringing the logic of infrastructure and data into design decisions."
    },
    {
      institution: "Barreira Arte + Diseño",
      degree: "Intensive Master's in AI-Native Product Design",
      period: "January to September 2026",
      description: "A six-month master's on digital product design with an AI-first approach. We applied the Design Sprint methodology to real projects, going through the process from strategy to prototype, and combining Figma with AI-assisted development tools such as Claude Code."
    },
    {
      institution: "CEI: Centro de Estudios de Innovación",
      degree: "UX/UI and Graphic Design double module",
      period: "2023 to 2024",
      description: "Training in the foundations of user experience and graphic design. This is where I did my first real projects with methodologies like Design Thinking and Design Sprint, and learned to research, prototype and validate digital solutions."
    },
    {
      institution: "Polytechnic University of Valencia",
      degree: "Computer Engineering",
      period: "2017 to 2023",
      description: "A technical base in programming, databases and networks. Understanding what is and isn't technically possible in each project helps me talk to development teams and decide with better information."
    }
  ],

  footer: {
    signature: "Designed and coded by me, with Claude Code."
  },

  ui: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      work: "Work",
      studies: "Education",
      contact: "Contact",
      openMenu: "Open menu",
      downloadCV: "Download CV"
    },
    sections: {
      experience: "Work experience",
      skills: "Skills",
      projects: "Main projects",
      additionalWork: "Additional work",
      education: "Education",
      about: "About me",
      contact: "Contact"
    },
    cover: {
      callMe: "Call me",
      writeMe: "Email me"
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
      readCase: "Read the case",
      year: "Year",
      disciplines: "Disciplines",
      tools: "Tools",
      close: "Close",
      figmaHook: "You can open the Figma file here:",
      figmaButton: "Open in Figma",
      figmaAria: "Figma project, opens in a new tab",
      liveHook: "You can see it running here:",
      liveButton: "Visit the site",
      liveAria: "Live site link, opens in a new tab"
    },
    additionalWork: {
      intro: "Independent pieces, work done on the job and projects from my postgraduate studies, with different skills applied in real settings.",
      expand: "View work",
      collapse: "Hide work",
      moreInfo: "View the work",
      close: "Close",
      gallery: "Selected pieces",
      videos: "Edited videos",
      videoLabel: "Video",
      videoAria: "on YouTube, opens in a new tab",
      pdfHeading: "The project presentation",
      pdfAction: "Download",
      pdfAria: "Download the project presentation as a PDF",
      liveHook: "You can see it running here:",
      liveButton: "Visit the site",
      liveAria: "Live site link, opens in a new tab",
      figmaHook: "You can open the Figma file here:",
      figmaButton: "Open in Figma",
      figmaAria: "Figma project, opens in a new tab"
    },
    footer: {
      emailLead: "You can write to me at:",
      cv: "Check my CV",
      email: "Email",
      phone: "Phone",
      cvLabel: "Résumé",
      linkedin: "LinkedIn"
    },
    language: {
      switchToEs: "Cambiar a español",
      switchToEn: "Switch to English"
    }
  }
};

export const content = { es, en };
