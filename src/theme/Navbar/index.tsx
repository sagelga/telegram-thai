import React, {useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

const NAV_LINKS = [
  {label: 'ร่วมแปลภาษา',   url: 'https://bit.ly/3mjFu1d',                              external: true},
  {label: 'ใช้งานภาษา',    url: 'https://bit.ly/3J5DAtV',                              external: true},
  {label: 'แนวทางการแปล',  url: '/guideline/',                                          external: false},
  {label: 'ข้อกำหนดกลุ่ม', url: '/community/',                                          external: false},
  {label: 'รายงานปัญหา',   url: 'https://github.com/sagelga/telegram-thai/issues/',     external: true},
] as const;

export default function Navbar(): React.JSX.Element {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navTop}>
        <div className={styles.navTopInner}>
          <Link to="/" className={styles.navLogoText}>
            sagelga
          </Link>
          <div className={styles.navTopRight}>
            <a
              href="https://github.com/sagelga/telegram-thai"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navGithubLink}
              aria-label="GitHub repository"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.navBottom}>
        <div className={styles.navBottomInner}>
          <ul className={styles.navList} role="list">
            {NAV_LINKS.map((link) => {
              const isActive = !link.external && location.pathname.startsWith(link.url);
              const cls = `${styles.navLink}${isActive ? ` ${styles.navLinkActive}` : ''}`;
              return (
                <li key={link.url}>
                  {link.external ? (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className={cls}>
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.url} className={cls}>
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
