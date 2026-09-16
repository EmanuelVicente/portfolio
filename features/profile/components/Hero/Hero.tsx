import { Container } from '@/components/layout/Container/Container';
import { AssistantTrigger } from '@/features/assistant/components/Assistant/AssistantTrigger';
import type { Profile } from '@/features/profile/profile.types';

import styles from './Hero.module.css';

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container>
        <div className={styles.content}>
          <div className={styles.main}>
            <div className={styles.eyebrow}>
              <span className={styles.status} aria-hidden="true" />

              <span>{profile.role}</span>
            </div>

            <h1 id="hero-title" className={styles.title}>
              {profile.name}
            </h1>

            <p className={styles.description}>{profile.summary}</p>

            <div className={styles.actions}>
              <a href="/resume.pdf" className={styles.primaryAction}>
                Download CV
                <span aria-hidden="true">↗</span>
              </a>

              <AssistantTrigger className={styles.secondaryAction}>
                Ask my AI
                <span aria-hidden="true">→</span>
              </AssistantTrigger>
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.grid} />

            <div className={styles.orb}>
              <span />
              <span />
              <span />
            </div>

            <div className={styles.code}>
              <span>const</span> engineer = {'{'}
              <br />
              &nbsp;&nbsp;frontend: <strong>true</strong>,
              <br />
              &nbsp;&nbsp;mobile: <strong>true</strong>,
              <br />
              &nbsp;&nbsp;backend: <strong>true</strong>
              <br />
              {'}'};
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
