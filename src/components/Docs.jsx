import "./dock.scss";

const dockApps = [
  { id: 'calendar', label: 'Google Calendar', icon: '/doc-icons/calender.svg', url: 'https://calendar.google.com/' },
  { id: 'cli', label: 'CLI', icon: '/doc-icons/cli.svg' },
  { id: 'github', label: 'GitHub', icon: '/doc-icons/github.svg' },
  { id: 'link', label: 'LinkedIn', icon: '/doc-icons/link.svg', url: 'https://www.linkedin.com/' },
  { id: 'mail', label: 'Gmail', icon: '/doc-icons/mail.svg', url: 'https://mail.google.com/' },
  { id: 'note', label: 'Notes', icon: '/doc-icons/note.svg' },
  { id: 'pdf', label: 'Resume', icon: '/doc-icons/pdf.svg' },
  { id: 'spotify', label: 'Spotify', icon: '/doc-icons/spotify.svg' },
]

function Docs({ onOpen }) {
  return (
    <footer className="docs">
      {dockApps.map(({ id, label, icon, url }) => url ? (
        <a
          className={`icons ${id}`}
          key={id}
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${label}`}
          title={label}
        >
          <img src={icon} alt="" />
        </a>
      ) : (
        <button
          className={`icons ${id}`}
          key={id}
          type="button"
          aria-label={`Open ${label}`}
          title={label}
          onClick={() => onOpen(id)}
        >
          <img src={icon} alt="" />
        </button>
      ))}
    </footer>
  );
}

export default Docs;
