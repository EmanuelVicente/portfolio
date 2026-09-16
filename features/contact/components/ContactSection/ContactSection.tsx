import { Container } from '@/components/layout/Container/Container';

import styles from './ContactSection.module.css';

export function ContactSection() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <Container>
        <div className={styles.content}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Contact</p>

            <h2 id="contact-title">
              Have a project
              <br />
              in mind?
            </h2>
          </div>

          <div className={styles.body}>
            <p>
              I&apos;m always interested in discussing new products, technical challenges and opportunities to build
              something useful.
            </p>

            <a href="mailto:emanuelvicente14@gmail.com" className={styles.email}>
              emanuelvicente14@gmail.com
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
