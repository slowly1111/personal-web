"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { InterestsSection } from "@/components/interests-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />

        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <InterestsSection />

        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}
