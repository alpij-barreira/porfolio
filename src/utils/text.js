// Pequeñas utilidades de presentación compartidas entre secciones.

// «Tramiting: CRM con generación documental» → ['Tramiting', 'CRM con generación documental']
export const splitTitle = (title = '') => {
  const i = title.indexOf(':');
  if (i === -1) return [title, null];
  return [title.slice(0, i).trim(), title.slice(i + 1).trim()];
};

// Ancla estable y legible para cada proyecto.
export const projectSlug = (title = '') =>
  'trabajo-' +
  splitTitle(title)[0]
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
