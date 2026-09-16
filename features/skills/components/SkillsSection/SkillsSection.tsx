import type { Skill } from '@/features/profile/profile.types';

import styles from './SkillsSection.module.css';

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-title">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Skills</p>

          <div>
            <h2 id="skills-title">Tools I use to build products.</h2>

            <p className={styles.description}>
              A practical stack built around modern web, mobile and backend development.
            </p>
          </div>
        </div>

        <div className={styles.categories}>
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter((skill) => skill.category === category);

            return (
              <article key={category} className={styles.category}>
                <div className={styles.categoryNumber} aria-hidden="true">
                  {String(categoryIndex + 1).padStart(2, '0')}
                </div>

                <div className={styles.categoryContent}>
                  <h3>{category}</h3>

                  <div className={styles.list}>
                    {categorySkills.map((skill) => (
                      <span key={skill.id}>{skill.name}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
