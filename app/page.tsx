import AboutUsSection from "@/components/about-us-section";
import ContactUsSection from "@/components/contact-us-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactUsSection />
    </main>
  );
}
