'use client';

const links = [
  {
    label: 'Join the Discord Community',
    url: 'https://discord.gg/bdFMrpkbBJ',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0747.0747 0 00-.0785.0378c-.211.375-.444.864-.608 1.249a18.2698 18.2698 0 00-5.487 0 12.64 12.64 0 00-.617-1.249.077.077 0 00-.0785-.0378A19.736 19.736 0 003.677 4.3698a.07.07 0 00-.0321.027C.533 9.0457-.3195 13.5795.0992 18.0572a.0817.0817 0 00.0312.0568 19.8999 19.8999 0 005.9933 3.0298.0782.0782 0 00.0843-.0275 14.0897 14.0897 0 001.226-1.9936.0763.0763 0 00-.0414-.1062 13.107 13.107 0 01-1.8718-.8919.0775.0775 0 01-.0084-.128 10.2 10.2 0 00.3723-.292.0743.0743 0 01.077-.01c3.9283 1.793 8.1797 1.793 12.0625 0a.0743.0743 0 01.0785.01c.1197.0977.2459.1982.3728.292a.0777.0777 0 01-.0063.1273 12.2989 12.2989 0 01-1.873.8919.0777.0777 0 00-.0414.1072c.3605.6987.7722.9745 1.2136 1.2395a.0783.0783 0 00.0843.0275 19.8395 19.8395 0 006.0024-3.0298.0768.0768 0 00.0317-.0543c.5-5.1767-.8382-9.6736-3.549-13.6596a.0611.0611 0 00-.0311-.0295zM8.0206 15.3299c-1.1829 0-2.1569-1.0847-2.1569-2.4193 0-1.3332.9557-2.4189 2.1569-2.4189 1.2108 0 2.1758 1.096 2.1569 2.4193 0 1.3332-.9559 2.4184-2.1569 2.4184zm7.9748 0c-1.1829 0-2.1569-1.0847-2.1569-2.4193 0-1.3332.9546-2.4189 2.1569-2.4189 1.2108 0 2.1758 1.096 2.1569 2.4193 0 1.3332-.9458 2.4184-2.1569 2.4184z"/>
      </svg>
    ),
  },
  {
    label: 'Buy Me a Coffee',
    url: 'https://buymeacoffee.com/infinitebutdiscrete',
    variant: 'coffee',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 8H7c-.55 0-1 .45-1 1v1c0 2.76 2.24 5 5 5s5-2.24 5-5V9c0-.55-.45-1-1-1zm0 6c-1.66 0-3-1.34-3-3V9l3-1 3 1v2c0 1.66-1.34 3-3 3zM4 3h16v2H4V3zm18 4v5H2V7h4c0 1.66 1.34 3 3 3s3-1.34 3-3h-4v5c0 1.1.9 2 2 2H2v2h20v-2h-2c-1.1 0-2-.9-2-2z"/>
      </svg>
    ),
  },
  {
    label: '@infinitebutdiscrete',
    url: 'https://www.youtube.com/@infinitebutdiscrete/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: '@infinitebutdiscrete',
    url: 'https://www.instagram.com/infinitebutdiscrete/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.227 2.967.164 7.051.072 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.786 2.531 5.824 5.817 5.824 1.194 0 1.592-.014 2.072-.072 2.682-.2 3.703-1.595 4.891-4.848.062-.38.09-.665.09-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.786-2.531-5.824-5.817-5.824-1.194 0-1.592.014-2.072.072-2.683.2-3.703 1.595-4.891 4.848-.062.38-.09.665-.09 4.948zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: '@infinitebutdisc',
    url: 'https://x.com/infinitebutdisc',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.2442 2.25h3.3083l-7.227 8.2603 8.502 11.2402H16.1719l-5.2141-6.8172L4.9899 21.75H1.6799l7.7297-8.8355L1.2537 2.25H8.0808l4.7131 6.2313zm-1.1613 17.5203h1.8327L7.0837 4.1265H5.1179z"/>
      </svg>
    ),
  },
  {
    label: '@infinitebutdiscrete',
    url: 'https://www.tiktok.com/@infinitebutdiscrete/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.7-2.86V8.63a2 2 0 00-1.42-1.73L4.55 5.48a2.88 2.88 0 000 4.08l2.67 1.71a2.06 2.06 0 01-1-2.41 2.07 2.07 0 01.39-.89L7 6.52v3.58a6.85 6.85 0 002.32.32 5.45 5.45 0 005.22-3.85 5.45 5.45 0 00-2.73-2.77V2.91h1.82a4.84 4.84 0 013.8 3.78z"/>
      </svg>
    ),
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