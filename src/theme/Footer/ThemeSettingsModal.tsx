import React, {useState, useEffect} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import BottomSheet from './BottomSheet';
import styles from './ThemeSettings.module.css';

type ThemeMode = 'light' | 'dark' | 'system';

const PREF_KEY = 'telegram-thai-theme-pref';

interface ThemeSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SunIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SystemIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

interface ThemeOption {
  value: ThemeMode;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    value: 'light',
    label: 'สว่าง',
    description: 'ใช้ธีมสีสว่างเสมอ',
    icon: <SunIcon />,
  },
  {
    value: 'dark',
    label: 'มืด',
    description: 'ใช้ธีมสีมืดเสมอ',
    icon: <MoonIcon />,
  },
  {
    value: 'system',
    label: 'ตามระบบ',
    description: 'ปรับตามการตั้งค่าของอุปกรณ์',
    icon: <SystemIcon />,
  },
];

const ThemeSettingsModal: React.FC<ThemeSettingsModalProps> = ({isOpen, onClose}) => {
  const {setColorMode} = useColorMode();
  const [selected, setSelected] = useState<ThemeMode>('system');

  // Read stored preference on client only
  useEffect(() => {
    const stored = localStorage.getItem(PREF_KEY) as ThemeMode | null;
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      setSelected(stored);
    }
  }, []);

  const handleSelect = (mode: ThemeMode) => {
    setSelected(mode);
    localStorage.setItem(PREF_KEY, mode);

    if (mode === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setColorMode(prefersDark ? 'dark' : 'light');
    } else {
      setColorMode(mode);
    }

    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} title="ธีม">
      <div className={styles.list}>
        {THEME_OPTIONS.map((option) => (
          <button
            key={option.value}
            className={`${styles.option} ${selected === option.value ? styles.optionActive : ''}`}
            onClick={() => handleSelect(option.value)}
          >
            <span className={styles.optionIcon}>{option.icon}</span>
            <span className={styles.optionContent}>
              <span className={styles.optionLabel}>{option.label}</span>
              <span className={styles.optionDesc}>{option.description}</span>
            </span>
            {selected === option.value && (
              <span className={styles.optionCheck}>
                <CheckIcon />
              </span>
            )}
          </button>
        ))}
      </div>
    </BottomSheet>
  );
};

export default ThemeSettingsModal;
