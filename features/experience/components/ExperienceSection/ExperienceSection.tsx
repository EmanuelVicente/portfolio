import type { Experience } from '@/features/profile/profile.types';

import styles from './ExperienceSection.module.css';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-title">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Experience</p>

          <h2 id="experience-title">Building products, not just interfaces.</h2>
        </div>

        <div className={styles.list}>
          {experiences.map((experience, index) => (
            <article key={experience.id} className={styles.item}>
              <div className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className={styles.content}>
                <div className={styles.top}>
                  <div>
                    <p className={styles.company}>{experience.company}</p>

                    <h3>{experience.role}</h3>
                  </div>
                </div>

                <p className={styles.description}>{experience.description}</p>

                {experience.highlights.length > 0 && (
                  <ul className={styles.highlights}>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight.id}>
                        <span aria-hidden="true">↗</span>
                        {highlight.text}
                      </li>
                    ))}
                  </ul>
                )}

                {experience.technologies.length > 0 && (
                  <div className={styles.technologies}>
                    {experience.technologies.map((technology) => (
                      <span key={technology.id}>{technology.name}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
