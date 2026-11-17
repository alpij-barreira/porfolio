# DESIGN.md — Craft Journal Portfolio

Sistema visual tal y como está construido hoy. Deriva de
`../CRAFT-JOURNAL-STYLE-GUIDE.md`, pero con una corrección deliberada: el
papel ya no es crema ni lleva tintas de colores. Es **tinta sobre papel de
plano**, con un solo azul de anotación, para no caer en la combinación crema,
serif y terracota que hoy delata a las webs hechas con IA. Wabi-sabi
contenido, ma (aire), nada que grite.

## Concepto

El porfolio es **un dossier**. La portada presenta a la persona —nombre,
retrato y biografía— y a continuación manda el trabajo: cada proyecto es una
**polaroid** apoyada en la página junto a su ficha, y cada caso se lee en una
**lámina que se desliza desde el borde**, como sacar un documento de la
carpeta. El material de apoyo llega **plegado**.

Modo: *Experience* — manda la obra, la interfaz se retira.

## Orden de la página

1. **Portada** (`hero/`) — nombre en display serif, una línea de valor (qué
   hago y en qué), retrato en polaroid con cinta, biografía en dos párrafos
   con la misma voz, nota manuscrita, acciones y una línea con las
   herramientas. La acción principal es **«Llámame»** (`Action` sólida), con
   escribir y el CV detrás. No hay botón para bajar a proyectos: están justo
   debajo. En móvil el retrato
   se queda pequeño a la derecha y el texto lo rodea, para que el trabajo
   llegue antes. La entrada es **CSS puro** (`@keyframes cover-*`): el
   contenido nunca depende de que corra el JS.
2. **Proyectos principales** (`projects/`) — una polaroid por proyecto. Lados
   alternos; la columna ancha viaja siempre con la imagen para que todas
   midan igual. Sólo las dos primeras llegan abiertas: el resto espera tras
   «Ver más proyectos», el mismo control de texto con chevron que «Más
   información» en experiencia. Lo que se deja visible es un número par,
   porque la alternancia va por `:nth-child` y el bloque plegado vuelve a
   contar desde 1.
   - **Portadas** (`public/portadas/`): capturas reales de cada demo a
     1600×900, sin texto encima. Si la demo es móvil, varias pantallas sobre
     el papel de lámina.
   - **Pie de la polaroid** (`kind`): de qué tipo de trabajo se trata
     («Recreación de un trabajo real», «Proyecto de máster»…). Si no se sabe,
     se deja vacío: nunca un dato inventado.
   - **Etiquetas**: disciplinas de diseño, no herramientas. Las herramientas
     van en la ficha del caso.
   - **Resumen**: empieza por el problema y lo que hice. El contexto
     (máster, recreación) va después, sin esconderlo.
3. **Experiencia** (`experience/`) — periodo y duración al margen, primer
   párrafo visible, el detalle desplegable. Sin logos: repetían el nombre de
   la empresa (regla 1).
4. **Apéndice plegado** (`shared/Fold.jsx`) — Trabajos adicionales, Estudios
   y Habilidades, cerrados por defecto. Una sola línea entre pliego y pliego:
   no se enmarca nada ni se cuentan las fichas.
5. **Contacto** (`layout/Footer.jsx`) — «Puedes escribirme a:» y el correo
   como enlace grande en serif, las otras tres vías como botones, y la firma
   manuscrita con el copyright al pie.

Fondos: portada y proyectos en papel, **experiencia en papel cálido**,
apéndice en papel y pie en cálido. Cada sección cambia de papel respecto a
la anterior, y por eso el relleno vertical se queda en `--space-2xl`.

## Piezas compartidas

- `shared/Polaroid.jsx` — el marco de papel de todas las imágenes.
- `skills/Skills.jsx` reparte las competencias en dos columnas de verdad
  (`inTwoColumns`), no con `columns: 2`, para que «la última de la columna»
  sea una posición real y su filete se pueda quitar con `:last-child`.
- `shared/Action.jsx` — el botón del sitio: icono en su casilla y acción al
  lado. Portada y pie usan el mismo, nunca enlaces de texto suelto para una
  acción. `variant="solid"` (grafito lleno) para **una sola** acción
  principal por bloque. En móvil la principal ocupa su fila y las demás se
  reparten la siguiente.
- `shared/Fold.jsx` — el pliegue de las secciones de apoyo.
- `shared/Sheet.jsx` + `CaseSheet.jsx` — una sola hoja de lectura para
  proyectos y trabajos adicionales. Bloquea el scroll, atrapa el foco, lo
  devuelve al cerrar, cierra con Escape. La ficha abre con lo que busca un
  reclutador, en este orden y sólo si existe el dato: **Resultado, Rol,
  Equipo, Duración**, Año, Disciplinas, Herramientas. Cada bloque del caso
  admite una imagen de proceso con pie (`section.image: { src, alt,
  caption }`).
- `.rail-grid` (global.css) — columna de margen para datos reales (periodo,
  título de bloque) y texto en su medida (66ch) a la derecha. **Todo el
  contenido de la página arranca en esa columna**: experiencia, estudios y
  las filas de trabajos adicionales comparten el mismo borde izquierdo, y los
  títulos de sección y de pliego el suyo. Si añades un bloque, va a la misma
  rejilla.

## Tokens

Todo en `src/styles/variables.css`. Nunca valores sueltos en los módulos.

- Papel de plano `#F7F7F4` → cálido `#EFEFEA` (secciones alternas y pie,
  `--color-paper-warm`) → lámina `#E7E8E3`. Neutro y algo frío.
- Tinta `#1F2328` / soft `#4F555D` / muted `#5F656D` (AA sobre todos los
  papeles, también la lámina) / faint `#A2A7AD` **solo decoración, nunca
  texto**.
- **Un solo acento**: azul de anotación `#2C5D8A` (`--color-accent`, con su
  lavado `#DCE6EF` en `--color-accent-wash` para la selección). Enlaces y
  controles al pasar por encima, foco, checks de logros y la cinta del
  retrato. La acción principal va en grafito. Ningún otro color en la
  interfaz: se probó el acento en reposo (petróleo en botones, etiquetas y
  filetes) y se descartó por preferir la versión sobria.
- Tipografía: Crimson Pro (voz principal), **IBM Plex Sans** (interfaz),
  **IBM Plex Mono** (metadatos: rótulos de ficha, periodos, duraciones,
  etiquetas y pies de polaroid), Caveat (anotaciones a mano). **Ningún
  componente inventa su tamaño**: todos salen de la escala `--t-display →
  --t-label` y del interlineado `--lh-tight`, `--lh-snug`, `--lh-list`,
  `--lh-ui`, `--lh-body`. Un mismo papel usa un mismo tamaño: el título de
  sección y el de un pliego son los dos `--t-h2`.
- **Nada en mayúsculas espaciadas.** Los rótulos van en minúscula normal, en
  Plex Mono a `--t-label` (12px).
- **Caveat vive en dos sitios y en una sola medida** (`--t-hand`): la nota al
  margen de la biografía y la firma del pie.
- Controles: `--control-h` (44px) para lo que se toca y `--control-h-sm`
  (38px) sólo en la barra superior. Los botones de texto suben a 44px bajo
  `@media (pointer: coarse)` con la clase `touch-target`.
- Sombras siempre con desplazamiento **y** difuminado. Radios de 2–5px, sin
  píldoras: el papel tiene canto, no esquinas blandas.
- Sin retícula de puntos: el grano del papel basta.

## Vista previa al compartir

`index.html` lleva Open Graph y `twitter:card`. La imagen es
`public/og-image.jpg` (1200×630), una captura de la portada sin la barra.
Si cambia la portada, se vuelve a generar.

## Reglas al editar

1. **Nada de etiquetas que repitan el título.** Si un texto diminuto dice lo
   mismo que el elemento que tiene al lado, sobra: el título de sección va
   solo, el valor de contacto no necesita su rótulo, el oficio no se repite
   bajo la foto, el logo no repite el nombre de la empresa.
2. **Un filete sólo cuando separa dos cosas.** Nada abre ni cierra una lista:
   la primera fila no lleva línea encima y la última no lleva línea debajo,
   también dentro de los logros, las herramientas y cada columna de
   competencias. Las demás líneas van *entre* elementos hermanos: entre
   asiento y asiento, entre pliego y pliego, entre filas. Las dos excepciones,
   porque cierran un bloque entero y no un elemento: el filete bajo el H2 de
   sección y el borde superior del pie. Nunca un filete al lado de un título.
   Las acciones tampoco se subrayan en reposo —«Leer el caso», «Más
   información», el correo del pie—: el icono o la flecha ya dicen que lo son,
   y el subrayado aparece al pasar por encima.
3. Las superficies del navegador también son diseño: selección, scrollbar y
   anillo de foco están tematizados en `global.css`.
4. Un solo momento de movimiento (la portada) y una entrada contenida
   (`shared/Reveal.jsx`) para el resto. `prefers-reduced-motion` respetado.
5. Iconos dibujados (`react-icons`), nunca glifos unicode como icono.
6. No animes `padding`, `margin`, `width` ni `height`: usa `transform`.
7. El contenido vive en `src/data/content.js`, en ES y EN. Cualquier cadena
   nueva se añade a los dos idiomas; las que dejan de usarse, se borran.
8. **Nunca un dato inventado.** Rol, equipo, duración, resultado o tipo de
   trabajo sólo se rellenan si salen de un texto real. Si falta, el campo se
   queda vacío y la ficha no lo pinta.
