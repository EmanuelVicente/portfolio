import { Container } from '@/components/layout/Container/Container';

import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div>
            <p className={styles.name}>Emanuel Vicente</p>

            <p className={styles.copyright}>© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <nav className={styles.links} aria-label="Social links">
            <a href="https://github.com/EmanuelVicente" target="_blank" rel="noreferrer">
              GitHub
              <span aria-hidden="true">↗</span>
            </a>

            <a href="https://linkedin.com/in/emanuelvicente/en" target="_blank" rel="noreferrer">
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
