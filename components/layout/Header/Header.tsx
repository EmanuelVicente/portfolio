import Link from 'next/link';

import { Container } from '@/components/layout/Container/Container';
import { MobileMenu } from './MobileMenu';
import styles from './Header.module.css';
import { navigation } from '../navigation';

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            EV<span>.</span>
          </Link>

          <nav className={styles.navigationWrapper} aria-label="Main navigation">
            <ul className={styles.navigation}>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <a href="/resume.pdf" className={styles.cv}>
              CV
              <span aria-hidden="true">↗</span>
            </a>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
