import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Interactive particle background */}
      <ParticleBackground />
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] noise" />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
