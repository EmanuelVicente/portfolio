'use client';

import { useState } from 'react';

import { navigation } from '../navigation';
import styles from './MobileMenu.module.css';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.menu}>
      <button
        type="button"
        className={styles.button}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}>
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {isOpen && (
        <nav id="mobile-navigation" className={styles.navigation} aria-label="Mobile navigation">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
