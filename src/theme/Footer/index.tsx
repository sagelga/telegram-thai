import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';
import ThemeSettingsModal from './ThemeSettingsModal';

interface FooterLink {label: string; url: string; external?: boolean}
interface FooterColumn {title: string; links: FooterLink[]}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'โปรเจกต์',
    links: [
      {label: 'sagelga.com',    url: 'https://sagelga.com',                                      external: true},
      {label: 'Telegram ไทย',  url: 'https://telegram.sagelga.com'},
      {label: 'บทเรียน',        url: 'https://learn.sagelga.com',                                external: true},
      {label: 'เอกสาร',         url: 'https://docs.sagelga.com',                                 external: true},
    ],
  },
  {
    title: 'ติดตาม',
    links: [
      {label: 'GitHub',   url: 'https://github.com/sagelga',        external: true},
      {label: 'Facebook', url: 'https://facebook.com/sagelga',      external: true},
    ],
  },
  {
    title: 'อื่นๆ',
    links: [
      {label: 'สถานะระบบ',   url: 'https://status.sagelga.com',                                external: true},
      {label: 'รายงานปัญหา', url: 'https://github.com/sagelga/telegram-thai/issues/',           external: true},
    ],
  },
];

function SunIcon(): React.JSX.Element {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon(): React.JSX.Element {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Footer(): React.JSX.Element {
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="https://sagelga.com" className={styles.logoText}>sagelga</a>
            <p className={styles.tagline}>
              <span className={styles.taglineProduct}>Telegram Thai</span>{' '}
              <span className={styles.taglineBy}>by sagelga</span>
            </p>
          </div>
          <div className={styles.columns}>
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className={styles.col}>
                <p className={styles.colTitle}>{col.title}</p>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.url}>
                      {link.external ? (
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.url}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <span>© 2020–{year} sagelga</span>
          <div className={styles.themeArea}>
            <button
              className={styles.themeBtn}
              onClick={() => setIsThemeModalOpen(true)}
              aria-label="Theme settings"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              <span>Theme</span>
            </button>
            <span className={styles.madeWith}>
              Made with{' '}
              <svg
                className={styles.heart}
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>{' '}
              by{' '}
              <a href="https://sagelga.com" className={styles.author}>
                @sagelga
              </a>
            </span>
          </div>
        </div>
      </div>

      <ThemeSettingsModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
      />
    </footer>
  );
}
