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
      { name: "Claude", icon: "claude", note: "Mi copiloto en diseño y desarrollo" },
      { name: "Suite de Adobe", icon: "adobe", note: "Para profundizar en diseño" },
      { name: "Notion", icon: "notion", note: "Donde se organiza la magia" },
      { name: "Jira", icon: "jira", note: "Para los grandes proyectos" }
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
      title: "Tramiting: CRM con generación documental",
      year: "2026",
      image: "/crm-tramiting.png",
      summary: "Recreación del concepto de la plataforma interna que ayudé a diseñar en Tramiting: un CRM que acompaña cada trámite energético de principio a fin —pedido, datos, documentos, firma y entrega—, con la generación documental a partir de una única estructura de formulario como núcleo.",
      tags: ["UX/UI Design", "Prototipado", "Claude Code"],
      tools: ["Claude Code", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://crm-documental.vercel.app",
      sections: [
        {
          title: "Una recreación del concepto",
          content: "Esta demo es una recreación de cómo funcionaría la plataforma interna de Tramiting con todas las funciones que se diseñaron y se plantearon en desarrollo, y en cuyo diseño colaboré. La plataforma real es de uso interno para los trabajadores de la oficina técnica y sus empresas cliente, así que no puede enseñarse; el concepto, en cambio, sí puede estudiarse y mostrarse como parte del trabajo que hice allí. Ninguna empresa, persona ni dato de la demo es real."
        },
        {
          title: "La idea del CRM",
          content: "La herramienta acompaña cada trámite energético —fotovoltaica, aerotermia, CAE, subvenciones— de principio a fin, con una misma espina dorsal: pedido, datos, documentos, firma y entrega. La empresa cliente contrata un servicio y aporta sus datos; la oficina técnica recoge ese expediente, lo tramita y devuelve la documentación firmada. El CRM existe para que ambos lados miren el mismo trámite y sepan en todo momento en qué punto está."
        },
        {
          title: "Tres formas de mirarlo",
          content: "La demo se recorre desde tres cuentas. La empresa cliente ve solo lo suyo, por un camino guiado y deliberadamente simple. El técnico de tramitación trabaja sobre una mesa densa y operativa: pedidos por urgencia, procedimiento, documentos e incidencias. La dirección técnica añade la supervisión: visado, reparto de carga y analítica. Mi trabajo se concentró en la vista del técnico, que es donde se resuelve el trámite."
        },
        {
          title: "Un formulario, todos los documentos",
          content: "El núcleo es la generación documental a partir de una única estructura de formulario. El técnico rellena los datos del expediente una sola vez, con cálculos cruzados en vivo —potencia pico, producción estimada, bonificación del IBI, CO₂ evitado—, y de esa misma estructura salen todos los documentos del trámite mediante plantillas dinámicas, listos para previsualizar y enviar a firma. Era la parte que más tiempo manual ahorraba y donde más trabajé en Tramiting."
        }
      ]
    },
    {
      title: "Reviu: Recomendador fallero por presupuesto",
      year: "2026",
      image: "/reviu/reviu-cover.png",
      summary: "Trabajo de fin de máster en Barreira, todavía en desarrollo: una web-app que recomienda indumentaria y servicios falleros dentro del presupuesto que marca la usuaria. El modelo mental es el de un metabuscador de vuelos, aplicado al traje de fallera.",
      tags: ["UX Research", "UX/UI Design", "Claude Code"],
      tools: ["Figma", "Claude Code", "Next.js", "GitHub", "Vercel"],
      liveUrl: "https://reviu-flax.vercel.app",
      liveHook: "El proyecto sigue en desarrollo. En este enlace puedes consultar en qué estado está en cada momento:",
      sections: [
        {
          title: "El proyecto",
          content: "Reviu es el trabajo con el que cerramos el Máster de UX/UI & AI-Native de Diseño de Producto en Barreira Arte + Diseño. Lo desarrollamos en equipo una compañera de clase y yo, y sigue abierto: ahora mismo estamos levantando el prototipo navegable de alta fidelidad, con datos simulados y controlados, que defenderemos ante el tribunal del máster."
        },
        {
          title: "El problema",
          content: "Vestirse de fallera es una compra cara y fragmentada. Cada pieza —el traje, el peinado, las joyas, el calzado— está en un proveedor distinto, los precios rara vez son públicos y la usuaria acaba componiendo el presupuesto a base de visitas y presupuestos sueltos, sin saber hasta el final cuánto le va a costar el conjunto."
        },
        {
          title: "La idea",
          content: "Le damos la vuelta al proceso: en lugar de buscar pieza a pieza y sumar al final, la usuaria dice cuánto puede gastar y qué artículos necesita, y Reviu compone paquetes completos y coherentes dentro de ese límite. El modelo mental es el de un metabuscador de vuelos, aplicado al traje de fallera."
        },
        {
          title: "Cómo lo estamos construyendo",
          content: "El proyecto reúne todo lo aprendido en el máster. Figma manda en lo visual, con su propia librería de diseño, y desde ahí levantamos la interfaz con Claude Code. Trabajamos por historias de usuario, con una rama y una pull request en GitHub por cada una, lo que nos permite repartirnos el trabajo sin pisarnos, y se publica en Vercel."
        }
      ]
    },
    {
      title: "FC Barcelona: Plataforma para aficionados",
      year: "2026",
      image: "/FCBCover.png",
      summary: "Proyecto troncal del Máster de UX/UI & AI-Native de Diseño de Producto en Barreira Arte + Diseño: seis meses aplicando Design Sprint a un briefing ficticio del FC Barcelona, con el reto de acercar el club a sus aficionados en el extranjero. Cerramos con una demo funcional entre Figma y Claude Code.",
      tags: ["Design Sprint", "UX Research", "UX/UI Design", "Claude Code"],
      tools: ["Figma", "Claude Code", "Maze"],
      liveUrl: "https://fcb-buddies-prototype.vercel.app",
      sections: [
        {
          title: "El contexto",
          content: "Este proyecto es el trabajo troncal del Máster de UX/UI & AI-Native de Diseño de Producto en Barreira Arte + Diseño: seis meses de recorrido en los que hemos aprendido a fondo la metodología Design Sprint y hemos ejercitado el proceso completo de diseño de producto sobre un caso planteado como si fuese un encargo real."
        },
        {
          title: "El briefing",
          content: "Partíamos de un encargo hipotético en el que nos situábamos dentro del equipo de innovación del FC Barcelona. El objetivo era claro: diseñar una aplicación que ayudase a los aficionados del club en el extranjero a sentirse más cerca de él, especialmente en aquellos momentos en los que ver un partido pesa más que estar en el Camp Nou."
        },
        {
          title: "Investigación con usuarios",
          content: "Aplicamos las técnicas propias del Design Sprint durante todas las fases: entrevistas con aficionados culés, encuestas, pruebas de concepto y sesiones de validación con usuarios reales. La investigación destapó un patrón claro: muchos aficionados viven el fútbol como algo colectivo y echan de menos con quién compartirlo cuando están lejos de casa."
        },
        {
          title: "La solución",
          content: "Del proceso surgió la idea de una plataforma que conecta a aficionados con bares, negocios locales y otros usuarios dispuestos a hostear encuentros para ver los partidos en compañía. La aplicación centraliza el calendario completo del FC Barcelona y sus resultados en directo, y permite descubrir eventos cercanos donde ver cada partido acompañado."
        },
        {
          title: "Prototipo interactivo",
          content: "Cerramos el proyecto con una demo funcional construida entre Figma y Claude Code, en la línea del flujo diseño-desarrollo con IA que hemos ido interiorizando durante el máster. El prototipo permite recorrer la experiencia completa: descubrir bares y usuarios que hostean partidos cerca, unirse a un evento y seguir el calendario del club."
        }
      ]
    },
    {
      title: "Reimagine: Landing page",
      year: "2026",
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
    }
  ],

  additionalWork: [
    {
      title: "Sexplace: Diseño de publicidad",
      year: "2024",
      thumbnail: "/sexplace/sexplace-logo.jpg",
      summary: "Durante mi trabajo en Tramiting, era el único encargado del diseño de la marca en todos sus entornos. Por lo que diseñé una veintena de piezas para distintos entornos: Campañas de mailing, historias de instagram y piezas publicitarias para los diferentes e-commerce de la compañía.",
      tools: ["Photoshop"],
      sections: [
        {
          title: "El encargo",
          content: "Cada mes me facilitaban las diferentes campañas de ofertas, promociones y artículos nuevos que iban a suceder tanto en las tiendas como en las webs. Mi trabajo consistía en planificar toda la línea gráfica de dichas promociones y crear los recursos necesarios para todos los entornos."
        },
        {
          title: "Responsabilidades adicionales",
          content: "Además de diseñar las piezas gráficas que iban a acompañar cada pantalla, mi trabajo también abarcaba la redacción y creación del resto de elementos que las acompañaban. Programaba las promociones, gestionaba la publicación de los contenidos, redactaba las newsletter y manejaba Prestashop para obtener métricas de éxito y valorar los resultados de las campañas."
        }
      ],
      gallery: [
        {
          src: "/sexplace/sexplace-banner-web.jpg",
          caption: "Banner de home — campaña cruzada de dos productos",
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
      summary: "Como encargado del diseño de la marca, también llevaba la edición de los vídeos que se publicaban en redes. No participaba en la grabación: recibía los brutos que realizaban nuestros colaboradores y me ocupaba de todo lo que venía después, hasta dejar cada pieza lista para publicar.",
      tools: ["Premiere Pro"],
      sections: [
        {
          title: "El encargo",
          content: "De cada bruto salía el montaje completo para YouTube: efectos, música, corrección de color y ritmo. Después preparaba su versión correspondiente y simplificada para Instagram, ajustada a un formato y a un consumo mucho más rápidos sin perder lo que hacía funcionar al vídeo original."
        },
        {
          title: "Responsabilidades adicionales",
          content: "La tarea no terminaba en el montaje. También me encargaba de todo lo relacionado con la gestión del contenido: preparaba la publicación, redactaba las descripciones, respondía los comentarios y decidía el ritmo con el que salía cada vídeo y cómo se repartía entre las dos plataformas."
        }
      ],
      videos: ["y0SnmQqByuI", "GPxX2hBOyo8", "jUOz1jo8D78", "OcMTl44hMW4"]
    },
    {
      title: "Mental Hub: Divulgación de salud mental para la juventud",
      year: "2023",
      thumbnail: "/mental-hub/mental-hub-thumb.jpg",
      summary: "Trabajo final del módulo de Interfaces y Experiencia de Usuario en CEI: el diseño de una app que reúne artículos y vídeos verificados sobre salud mental y pone en contacto a los jóvenes con profesionales, para combatir la desinformación y el autodiagnóstico.",
      tools: ["Figma", "draw.io"],
      sections: [
        {
          title: "El encargo",
          content: "El punto de partida era un dato: el 59,3% de los jóvenes españoles de entre 15 y 29 años reconoce haber tenido problemas de salud mental. Buena parte de ellos se informa en redes sociales, donde el contenido se banaliza y empuja al autodiagnóstico erróneo. Hacía falta una fuente fiable."
        },
        {
          title: "El proceso",
          content: "Apliqué Design Thinking con un modelo de doble diamante a lo largo de cuatro fases: observar, sintetizar, idear y diseñar. De ahí salieron el desk research, la netnografía, la user persona, el customer journey, la matriz DAFO y el Business Model Canvas, hasta cerrar con un prototipo de alta fidelidad en Figma."
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
      summary: "Audioguías gamificadas para que los niños disfruten de los museos tanto como los adultos. Todo empezó con una observación real en el Van Gogh de Ámsterdam.",
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
      year: "2023",
      thumbnail: "/calendario.png",
      thumbFit: "cover",
      thumbPosition: "left top",
      summary: "Análisis heurístico y rediseño del calendario académico de nuestro propio centro, un caso real con problemas de usabilidad conocidos por todos los alumnos.",
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
    }
  ],

  education: [
    {
      institution: "Universidad Politécnica de Valencia",
      degree: "Máster Universitario en Ingeniería de Computadores y Redes",
      period: "Septiembre 2026 — Actualidad",
      current: true,
      description: "Una forma de reforzar mis dotes como informático puro. Busco mayor alcance y contexto sobre las tecnologías que hay por debajo de cada producto, para ser un perfil que diseñe y que a la vez pueda colaborar estrechamente con un equipo informático en muchos ámbitos."
    },
    {
      institution: "CEI: Centro de Estudios de Innovación",
      degree: "Doble módulo de Cloud Computing y Big Data",
      period: "Julio 2026 — Actualidad",
      current: true,
      description: "Formación en tecnologías cloud y procesamiento de grandes volúmenes de datos. Mi interés en estas áreas nace del deseo de maximizar mi alcance en el diseño de producto digital, incorporando la lógica de la infraestructura y los datos a las decisiones de diseño."
    },
    {
      institution: "Barreira Arte + Diseño",
      degree: "Máster Intensivo en AI-Native Product Design",
      period: "Enero 2026 — Septiembre 2026",
      description: "Máster de seis meses centrado en el diseño de producto digital con enfoque AI-First. Aplicamos la metodología Design Sprint sobre proyectos reales, recorriendo todo el proceso desde la estrategia hasta el prototipo, y combinando herramientas tradicionales como Figma con nuevas herramientas de desarrollo asistido por IA como Claude Code."
    },
    {
      institution: "CEI: Centro de Estudios de Innovación",
      degree: "Doble módulo de UX/UI y Diseño Gráfico",
      period: "2023 — 2024",
      description: "Formación en las bases del diseño de experiencia de usuario y diseño gráfico. Aquí desarrollé mis primeros proyectos reales con metodologías como Design Thinking y Design Sprint, aprendiendo a investigar, prototipar y validar soluciones digitales."
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
      figmaHook: "¿Quieres ver el proyecto por dentro?",
      figmaButton: "Abrir en Figma",
      figmaAria: "Proyecto de Figma, se abre en una pestaña nueva",
      liveHook: "¿Quieres ver el resultado en vivo?",
      liveButton: "Visitar el sitio",
      liveAria: "Enlace al sitio en vivo, se abre en una pestaña nueva"
    },
    additionalWork: {
      intro: "Colección de trabajos independientes, encargos realizados en el entorno laboral y proyectos de mis estudios de posgrado, donde se muestran diferentes habilidades aplicadas en contextos reales.",
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
      liveHook: "¿Quieres ver el resultado en vivo?",
      liveButton: "Visitar el sitio",
      liveAria: "Enlace al sitio en vivo, se abre en una pestaña nueva",
      figmaHook: "¿Quieres ver el proyecto por dentro?",
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
      "I'm a digital product designer and computer engineer. I research user needs, prototype solutions and build them using AI-powered development tools. My technical background lets me collaborate with developers naturally and make more realistic design decisions.",
      "My professional goal is to move into digital product management — combining strategic vision, technical expertise and the ability to take ideas from research all the way to a working product."
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
      { name: "Claude", icon: "claude", note: "My design and development copilot" },
      { name: "Adobe Suite", icon: "adobe", note: "For going deeper into design" },
      { name: "Notion", icon: "notion", note: "Where the magic gets organised" },
      { name: "Jira", icon: "jira", note: "For the bigger projects" }
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
      title: "Tramiting: CRM with document generation",
      year: "2026",
      image: "/crm-tramiting.png",
      summary: "A recreation of the concept behind the internal platform I helped design at Tramiting: a CRM that follows every energy-sector trámite from start to finish — order, data, documents, signature and delivery — built around document generation from a single form structure.",
      tags: ["UX/UI Design", "Prototyping", "Claude Code"],
      tools: ["Claude Code", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://crm-documental.vercel.app",
      sections: [
        {
          title: "A recreation of the concept",
          content: "This demo is a recreation of how Tramiting's internal platform would work with all the features that were designed and planned in development, and which I helped design. The real platform is for internal use by the technical office and its client companies, so it cannot be shown; the concept, on the other hand, can be studied and shown as part of the work I did there. No company, person or figure in the demo is real."
        },
        {
          title: "The idea behind the CRM",
          content: "The tool follows every energy-sector trámite — photovoltaic, aerothermal, energy-saving certificates, grants — from start to finish, along a single spine: order, data, documents, signature and delivery. The client company contracts a service and supplies its data; the technical office picks up the case, processes it and returns the signed paperwork. The CRM exists so both sides look at the same trámite and know at any moment where it stands."
        },
        {
          title: "Three ways of looking at it",
          content: "The demo can be walked through from three accounts. The client company sees only its own world, along a guided and deliberately simple path. The processing technician works on a dense, operational desk: orders by urgency, the procedure, documents and issues. Technical management adds supervision: approvals, workload balancing and analytics. My work concentrated on the technician's view, which is where the trámite actually gets resolved."
        },
        {
          title: "One form, every document",
          content: "The core is document generation from a single form structure. The technician fills in the case data once, with live cross-field calculations — peak power, estimated output, property-tax rebate, CO₂ avoided — and from that same structure every document of the trámite comes out through dynamic templates, ready to preview and send for signature. It was the part that saved the most manual work, and where I spent most of my time at Tramiting."
        }
      ]
    },
    {
      title: "Reviu: Budget-led fallera outfit recommender",
      year: "2026",
      image: "/reviu/reviu-cover.png",
      summary: "Our master's final project at Barreira, still in progress: a web app that recommends fallera clothing and services within the budget the user sets. The mental model is a flight metasearch engine, applied to the fallera outfit.",
      tags: ["UX Research", "UX/UI Design", "Claude Code"],
      tools: ["Figma", "Claude Code", "Next.js", "GitHub", "Vercel"],
      liveUrl: "https://reviu-flax.vercel.app",
      liveHook: "The project is still in progress. This link lets you check where it stands at any time:",
      sections: [
        {
          title: "The project",
          content: "Reviu is the project closing our Master's in UX/UI & AI-Native Product Design at Barreira Arte + Diseño. A classmate and I are developing it as a team, and it is still open: right now we are building the navigable high-fidelity prototype, with simulated and controlled data, that we will defend before the master's panel."
        },
        {
          title: "The problem",
          content: "Dressing as a fallera is an expensive, fragmented purchase. Every piece — the dress, the hairwork, the jewellery, the shoes — sits with a different supplier, prices are rarely public, and the buyer ends up assembling a budget out of separate visits and quotes, without knowing what the whole outfit will cost until the very end."
        },
        {
          title: "The idea",
          content: "We turn the process around: instead of hunting piece by piece and adding it all up at the end, the user says how much she can spend and which items she needs, and Reviu puts together complete, coherent packages within that limit. The mental model is a flight metasearch engine, applied to the fallera outfit."
        },
        {
          title: "How we are building it",
          content: "The project brings together everything learned on the master's. Figma leads on the visual side, with its own design library, and from there we build the interface with Claude Code. We work user story by user story, with a branch and a pull request on GitHub for each, which lets us split the work without stepping on each other, and it ships on Vercel."
        }
      ]
    },
    {
      title: "FC Barcelona: Fan platform",
      year: "2026",
      image: "/FCBCover.png",
      summary: "The flagship project of the UX/UI & AI-Native Product Design master's at Barreira Arte + Diseño: six months applying Design Sprint to a fictional FC Barcelona brief, with the challenge of bringing the club closer to its fans abroad. We wrapped with a working demo built between Figma and Claude Code.",
      tags: ["Design Sprint", "UX Research", "UX/UI Design", "Claude Code"],
      tools: ["Figma", "Claude Code", "Maze"],
      liveUrl: "https://fcb-buddies-prototype.vercel.app",
      sections: [
        {
          title: "The context",
          content: "This is the flagship project of the UX/UI & AI-Native Product Design master's at Barreira Arte + Diseño: six months of hands-on work where we learned Design Sprint methodology in depth and ran the full product-design process end to end on a case framed as if it were a real client brief."
        },
        {
          title: "The brief",
          content: "We started from a hypothetical assignment placing us inside FC Barcelona's innovation team. The goal was clear: design an app that helps the club's fans abroad feel closer to it, especially in those moments when watching a match weighs more than being at the Camp Nou."
        },
        {
          title: "User research",
          content: "We applied Design Sprint techniques throughout every phase: interviews with Barça fans, surveys, concept tests and validation sessions with real users. The research surfaced a clear pattern: many fans live football as a collective ritual and miss the shared experience when they're far from home."
        },
        {
          title: "The solution",
          content: "Out of the process came a platform that connects fans with bars, local businesses and other users willing to host meetups to watch the matches together. The app centralises FC Barcelona's full calendar and live results, and lets you discover nearby events where you can watch each match in company."
        },
        {
          title: "Interactive prototype",
          content: "We wrapped the project with a working demo built between Figma and Claude Code, following the design-to-development-with-AI workflow we've been internalising throughout the master's. The prototype lets you walk through the full experience: discover bars and users hosting matches nearby, join an event and follow the club's calendar."
        }
      ]
    },
    {
      title: "Reimagine: Landing page",
      year: "2026",
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
    }
  ],

  additionalWork: [
    {
      title: "Sexplace: Advertising design",
      year: "2024",
      thumbnail: "/sexplace/sexplace-logo.jpg",
      summary: "While working at Tramiting I was the only person handling the brand's design across every channel, so I designed around twenty pieces for different settings: mailing campaigns, Instagram stories and advertising pieces for the company's various e-commerce sites.",
      tools: ["Photoshop"],
      sections: [
        {
          title: "The brief",
          content: "Each month I was given the offer campaigns, promotions and new products coming up in both the stores and the websites. My job was to plan the whole graphic line for those promotions and produce the assets needed for every channel."
        },
        {
          title: "Additional responsibilities",
          content: "Beyond designing the graphics for each screen, my work also covered writing and producing everything around them. I scheduled the promotions, managed content publishing, wrote the newsletters and worked in Prestashop to pull success metrics and assess how the campaigns had performed."
        }
      ],
      gallery: [
        {
          src: "/sexplace/sexplace-banner-web.jpg",
          caption: "Homepage banner — cross-promotion of two products",
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
      summary: "As the person in charge of the brand's design, I also handled the editing of the videos published on social media. I wasn't involved in filming: I received the raw footage our collaborators shot and took care of everything that came after, until each piece was ready to publish.",
      tools: ["Premiere Pro"],
      sections: [
        {
          title: "The brief",
          content: "Each batch of footage became a full edit for YouTube: effects, music, colour grading and pacing. I then prepared its matching, stripped-back version for Instagram, cut for a faster format and a faster viewing without losing what made the original video work."
        },
        {
          title: "Additional responsibilities",
          content: "The job didn't end at the edit. I also handled everything around content management: preparing each post, writing the descriptions, replying to comments and deciding the pace at which each video went out and how it was split across the two platforms."
        }
      ],
      videos: ["y0SnmQqByuI", "GPxX2hBOyo8", "jUOz1jo8D78", "OcMTl44hMW4"]
    },
    {
      title: "Mental Hub: Mental-health outreach for young people",
      year: "2023",
      thumbnail: "/mental-hub/mental-hub-thumb.jpg",
      summary: "Final project for the Interface and User Experience module at CEI: the design of an app that gathers verified articles and videos on mental health and puts young people in touch with professionals, to push back against misinformation and self-diagnosis.",
      tools: ["Figma", "draw.io"],
      sections: [
        {
          title: "The brief",
          content: "The starting point was one figure: 59.3% of Spaniards aged 15 to 29 report having had mental-health problems. Many of them get their information on social media, where the subject gets trivialised and nudges people towards mistaken self-diagnosis. A reliable source was missing."
        },
        {
          title: "The process",
          content: "I applied Design Thinking with a double-diamond model across four phases: observe, synthesise, ideate and design. That produced the desk research, netnography, user persona, customer journey, SWOT matrix and Business Model Canvas, closing with a high-fidelity prototype in Figma."
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
      summary: "Gamified audio guides so kids can enjoy museums as much as adults do. It all started with a real observation at the Van Gogh Museum in Amsterdam.",
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
      year: "2023",
      thumbnail: "/calendario.png",
      thumbFit: "cover",
      thumbPosition: "left top",
      summary: "Heuristic analysis and redesign of our own school's academic calendar — a real case with usability issues every student already knew about.",
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
    }
  ],

  education: [
    {
      institution: "Polytechnic University of Valencia",
      degree: "Master's Degree in Computer and Network Engineering",
      period: "September 2026 — Present",
      current: true,
      description: "A way of sharpening my skills as a pure computer engineer. I am after more reach and more context on the technologies sitting underneath each product, so I can be a profile that designs and, at the same time, works closely with an engineering team across many areas."
    },
    {
      institution: "CEI: Centro de Estudios de Innovación",
      degree: "Cloud Computing and Big Data double module",
      period: "July 2026 — Present",
      current: true,
      description: "Training in cloud technologies and large-scale data processing. My interest in these areas comes from wanting to broaden my reach in digital product design, bringing infrastructure and data thinking into design decisions."
    },
    {
      institution: "Barreira Arte + Diseño",
      degree: "Intensive Master's in AI-Native Product Design",
      period: "January 2026 — September 2026",
      description: "Six-month master's focused on digital product design with an AI-first approach. We apply Design Sprint methodology to real projects, going through the full process from strategy to prototype, and combining traditional tools like Figma with new AI-assisted development tools like Claude Code."
    },
    {
      institution: "CEI: Centro de Estudios de Innovación",
      degree: "UX/UI and Graphic Design double module",
      period: "2023 — 2024",
      description: "Training in the fundamentals of user-experience and graphic design. This is where I developed my first real projects with methodologies like Design Thinking and Design Sprint, learning how to research, prototype and validate digital solutions."
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
      figmaHook: "You can take a look inside the project here",
      figmaButton: "Open in Figma",
      figmaAria: "Figma project, opens in a new tab",
      liveHook: "Want to see it live?",
      liveButton: "Visit the site",
      liveAria: "Live site link, opens in a new tab"
    },
    additionalWork: {
      intro: "A collection of independent pieces, work carried out on the job and projects from my postgraduate studies, showing different skills applied in real settings.",
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
      liveHook: "Want to see it live?",
      liveButton: "Visit the site",
      liveAria: "Live site link, opens in a new tab",
      figmaHook: "You can take a look inside the project here",
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
