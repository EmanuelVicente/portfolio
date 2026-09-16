import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
import { ContactSection } from '@/features/contact/components/ContactSection/ContactSection';
import { ExperienceSection } from '@/features/experience/components/ExperienceSection/ExperienceSection';
import { Hero } from '@/features/profile/components/Hero/Hero';
import { getProfile } from '@/features/profile/profile.api';
import { ProjectsSection } from '@/features/projects/components/ProjectsSection/ProjectsSection';
import { SkillsSection } from '@/features/skills/components/SkillsSection/SkillsSection';
import { AssistantProvider } from '@/features/assistant/AssistantProvider';

export default async function Home() {
  const profile = await getProfile();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    description: profile.summary,
    url: process.env.NEXT_PUBLIC_SITE_URL,
  };

  return (
    <AssistantProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />

      <Header />

      <main>
        <Hero profile={profile} />
        <ExperienceSection experiences={profile.experiences} />
        <ProjectsSection projects={profile.projects} />
        <SkillsSection skills={profile.skills} />
        <ContactSection />
      </main>

      <Footer />
    </AssistantProvider>
  );
}
