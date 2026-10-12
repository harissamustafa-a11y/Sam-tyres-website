import { MotionConfig } from 'framer-motion'
import { CircleDot, Recycle, Wrench, Gauge, Crosshair, ShieldCheck } from 'lucide-react'
import { HeroSection } from '@/components/ui/hero-section'
import { ServiceGrid, type Service } from '@/components/ui/service-grid'
import { SiteHeader } from '@/components/sections/site-header'
import {
  HowItWorks,
  MobileCallBar,
  QuoteForm,
  Reviews,
  SiteFooter,
  Visit,
} from '@/components/sections/sections'

const services: Service[] = [
  {
    name: 'New tyres',
    description: 'Budget, mid-range and premium brands in stock for cars, vans and 4x4s.',
    icon: CircleDot,
  },
  {
    name: 'Part-worn tyres',
    description: 'Quality-checked part-worns that meet legal tread depth, for a lower price.',
    icon: Recycle,
  },
  {
    name: 'Fitting & balancing',
    description: 'Every tyre fitted and balanced on modern machines, with new valves as standard.',
    icon: Wrench,
  },
  {
    name: 'Puncture repair',
    description: 'Safe, British Standard repairs where possible, so you only replace when needed.',
    icon: ShieldCheck,
  },
  {
    name: 'Wheel alignment',
    description: 'Laser alignment to stop uneven wear, pulling and wasted fuel.',
    icon: Crosshair,
  },
  {
    name: 'TPMS sensors',
    description: 'Tyre pressure sensor checks, replacement and resetting.',
    icon: Gauge,
  },
]

export default function App() {
  return (
    // Respects the visitor's "reduce motion" setting for every animation.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <div id="top">
        <SiteHeader />
        <main id="main">
          <HeroSection />
          <ServiceGrid
            id="services"
            title="Everything your tyres need"
            subtitle="From a quick puncture fix to a full set of new tyres, done properly and priced honestly."
            services={services}
          />
          <HowItWorks />
          <Reviews />
          <QuoteForm />
          <Visit />
        </main>
        <SiteFooter />
        <MobileCallBar />
      </div>
    </MotionConfig>
  )
}
