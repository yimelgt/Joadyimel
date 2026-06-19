import { lazy, Suspense } from 'react'
import { Navbar } from './components/shared/Navbar'
import { Footer } from './components/shared/Footer'

const HeroSection = lazy(() => import('./components/sections/HeroSection'))
const AboutSection = lazy(() => import('./components/sections/AboutSection'))
const ProcessSection = lazy(() => import('./components/sections/ProcessSection'))
const ServicesSection = lazy(() => import('./components/sections/ServicesSection'))
const PortfolioSection = lazy(() => import('./components/sections/PortfolioSection'))
const SkillsSection = lazy(() => import('./components/sections/SkillsSection'))
const ExperienceSection = lazy(() => import('./components/sections/ExperienceSection'))
const EducationSection = lazy(() => import('./components/sections/EducationSection'))
const ContactSection = lazy(() => import('./components/sections/ContactSection'))

function SectionFallback() {
  return <div className="h-64 flex items-center justify-center text-muted">Loading...</div>
}

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-body overflow-hidden">
      <Navbar />

      <main>
        <Suspense fallback={<SectionFallback />}><HeroSection /></Suspense>
        <Suspense fallback={<SectionFallback />}><AboutSection /></Suspense>
        <Suspense fallback={<SectionFallback />}><ProcessSection /></Suspense>
        <Suspense fallback={<SectionFallback />}><ServicesSection /></Suspense>
        <Suspense fallback={<SectionFallback />}><PortfolioSection /></Suspense>
        <Suspense fallback={<SectionFallback />}><SkillsSection /></Suspense>
        <Suspense fallback={<SectionFallback />}><ExperienceSection /></Suspense>
        <Suspense fallback={<SectionFallback />}><EducationSection /></Suspense>
        <Suspense fallback={<SectionFallback />}><ContactSection /></Suspense>
      </main>

      <Footer />
    </div>
  )
}
