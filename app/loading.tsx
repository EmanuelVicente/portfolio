import { Container } from '@/components/layout/Container/Container';

import styles from './loading.module.css';

export default function Loading() {
  return (
    <main>
      <section className={styles.loading}>
        <Container>
          <div className={styles.content}>
            <div className={styles.main}>
              <div className={`${styles.skeleton} ${styles.eyebrow}`} />

              <div className={`${styles.skeleton} ${styles.title}`} />

              <div className={`${styles.skeleton} ${styles.description}`} />

              <div className={styles.actions}>
                <div className={`${styles.skeleton} ${styles.button}`} />
                <div className={`${styles.skeleton} ${styles.buttonSecondary}`} />
              </div>
            </div>

            <div className={`${styles.skeleton} ${styles.visual}`} />
          </div>
        </Container>
      </section>
    </main>
  );
}
