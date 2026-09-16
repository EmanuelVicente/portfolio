import type { Project } from '@/features/profile/profile.types';

import styles from './ProjectsSection.module.css';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Projects</p>

            <h2 id="projects-title">Selected work</h2>
          </div>

          <p className={styles.intro}>
            A selection of products and systems I have worked on across web and mobile environments.
          </p>
        </div>

        <div className={styles.list}>
          {projects.map((project, index) => (
            <article key={project.id} className={styles.item}>
              <div className={styles.visual} aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>

                <div className={styles.visualLines}>
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className={styles.content}>
                <p className={styles.type}>{project.type}</p>

                <h3>{project.name}</h3>

                <p className={styles.description}>{project.description}</p>

                {project.highlights.length > 0 && (
                  <ul className={styles.highlights}>
                    {project.highlights.map((highlight) => (
                      <li key={highlight.id}>
                        <span aria-hidden="true">↗</span>
                        {highlight.text}
                      </li>
                    ))}
                  </ul>
                )}

                {project.technologies.length > 0 && (
                  <div className={styles.technologies}>
                    {project.technologies.map((technology) => (
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
