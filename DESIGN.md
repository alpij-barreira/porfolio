# DESIGN.md — Craft Journal Portfolio

Sistema visual tal y como está construido hoy. Deriva de
`../CRAFT-JOURNAL-STYLE-GUIDE.md`, que sigue siendo la referencia de estilo:
grafito sobre papel, wabi-sabi contenido, ma (aire), nada que grite.

## Concepto

El porfolio es **un dossier**. La portada presenta a la persona —nombre,
retrato y biografía— y a continuación manda el trabajo: cada proyecto es una
**polaroid** apoyada en la página junto a su ficha, y cada caso se lee en una
**lámina que se desliza desde el borde**, como sacar un documento de la
carpeta. El material de apoyo llega **plegado**.

Modo: *Experience* — manda la obra, la interfaz se retira.

## Orden de la página

1. **Portada** (`hero/`) — nombre en display serif, oficio, retrato en
   polaroid con washi tape, biografía completa, nota manuscrita y tres
   acciones. La entrada es **CSS puro** (`@keyframes cover-*`): el contenido
   nunca depende de que corra el JS.
2. **Proyectos principales** (`projects/`) — una polaroid por proyecto, con
   el año escrito a mano en el canto. Lados alternos; la columna ancha viaja
   siempre con la imagen para que todas midan igual.
3. **Experiencia** (`experience/`) — periodo y logo al margen, primer
   párrafo visible, el detalle desplegable.
4. **Apéndice plegado** (`shared/Fold.jsx`) — Trabajos adicionales, Estudios
   y Habilidades, cerrados por defecto. Una sola línea entre pliego y pliego:
   no se enmarca nada ni se cuentan las fichas.
5. **Contacto** (`layout/Footer.jsx`) — «Puedes escribirme a:» y el correo
   como enlace grande en serif, las otras tres vías como botones, y la firma
   manuscrita con el copyright al pie.

## Piezas compartidas

- `shared/Polaroid.jsx` — el marco de papel de todas las imágenes.
- `skills/Skills.jsx` reparte las competencias en dos columnas de verdad
  (`inTwoColumns`), no con `columns: 2`, para que «la última de la columna»
  sea una posición real y su filete se pueda quitar con `:last-child`.
- `shared/Action.jsx` — el botón del sitio: icono en su casilla y acción al
  lado. Portada y pie usan el mismo, nunca enlaces de texto suelto para una
  acción. En pantallas estrechas ocupa el ancho completo.
- `shared/Fold.jsx` — el pliegue de las secciones de apoyo.
- `shared/Sheet.jsx` + `CaseSheet.jsx` — una sola hoja de lectura para
  proyectos y trabajos adicionales. Bloquea el scroll, atrapa el foco, lo
  devuelve al cerrar, cierra con Escape.
- `.rail-grid` (global.css) — columna de margen para datos reales (periodo,
  título de bloque) y texto en su medida (66ch) a la derecha.

## Tokens

Todo en `src/styles/variables.css`. Nunca valores sueltos en los módulos.

- Papel `#FAF8F5` → cálido `#F4EFE6` → lámina `#EFE9DE`. Las secciones
  alternan papel/cálido para dar ritmo.
- Grafito `#272521` / soft `#605B54` / muted `#6F6A61` (mínimo AA sobre
  papel) / faint `#A9A299` **solo decoración, nunca texto**.
- Tintas apagadas (rojo, azul, salvia, ocre) como el rotulador de un bullet
  journal: pocas, deliberadas.
- Tipografía: Crimson Pro (voz principal), Inter (etiquetas y UI), Caveat
  (anotaciones a mano). Display máx. 6rem, tracking -0.03em.
- Sombras siempre con desplazamiento **y** difuminado. Radios de 2–5px: el
  papel tiene canto, no esquinas blandas.

## Reglas al editar

1. **Nada de etiquetas que repitan el título.** Si un texto diminuto dice lo
   mismo que el elemento que tiene al lado, sobra: el título de sección va
   solo, el valor de contacto no necesita su rótulo, el oficio no se repite
   bajo la foto.
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
