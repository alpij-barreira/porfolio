// FRAMER-READY

const ICONS = {
  done: '●',
  progress: '○',
  note: '—',
  discarded: '✕',
  migrated: '>',
};

const BulletJournalIcon = ({ type = 'done', size = '1rem', color }) => {
  return (
    <span
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: size,
        color: color || 'var(--color-graphite-soft)',
        lineHeight: 1,
        userSelect: 'none',
        flexShrink: 0,
      }}
      aria-hidden="true"
    >
      {ICONS[type] || ICONS.note}
    </span>
  );
};

export default BulletJournalIcon;
