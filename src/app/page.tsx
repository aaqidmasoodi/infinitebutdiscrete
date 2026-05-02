'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faYoutube, faInstagram, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const links = [
  {
    label: 'Join the Discord Community',
    url: 'https://discord.gg/bdFMrpkbBJ',
    icon: <FontAwesomeIcon icon={faDiscord} />,
  },
  {
    label: 'Buy Me a Coffee',
    url: 'https://buymeacoffee.com/infinitebutdiscrete',
    variant: 'coffee',
    icon: <FontAwesomeIcon icon={faCoffee} />,
  },
  {
    label: '@infinitebutdiscrete',
    url: 'https://www.youtube.com/@infinitebutdiscrete/',
    icon: <FontAwesomeIcon icon={faYoutube} />,
  },
  {
    label: '@infinitebutdiscrete',
    url: 'https://www.instagram.com/infinitebutdiscrete/',
    icon: <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    label: '@infinitebutdisc',
    url: 'https://x.com/infinitebutdisc',
    icon: <FontAwesomeIcon icon={faXTwitter} />,
  },
  {
    label: '@infinitebutdiscrete',
    url: 'https://www.tiktok.com/@infinitebutdiscrete/',
    icon: <FontAwesomeIcon icon={faTiktok} />,
  },
];

export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.content}>
        <img
          src="/profile.jpg"
          alt="Profile"
          style={styles.profileImg}
        />

        <h1 style={styles.username}>@infinitebutdiscrete</h1>
        <p style={styles.bio}>Chess & IRL Streams!</p>

        <div style={styles.links}>
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.link,
                ...(link.variant === 'coffee' ? styles.linkCoffee : {}),
              }}
            >
              <span style={styles.icon}>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 20px',
  },
  content: {
    maxWidth: '480px',
    width: '100%',
    textAlign: 'center',
  },
  profileImg: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    objectFit: 'cover',
    objectPosition: 'center',
    border: '4px solid rgba(255, 255, 255, 0.2)',
    marginBottom: '20px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },
  username: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#fff',
  },
  bio: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.75)',
    marginBottom: '32px',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    width: '100%',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    background: 'rgba(255, 255, 255, 0.12)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    color: '#fff',
    textDecoration: 'none',
    padding: '16px 24px',
    borderRadius: '50px',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'all 0.25s ease',
  },
  linkCoffee: {
    background: '#FFDD00',
    color: '#000',
    fontWeight: '600',
  },
  icon: {
    width: '22px',
    height: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};