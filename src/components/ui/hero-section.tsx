// Adapted from the 21st.dev "Hero Section" by moumensoliman
// (https://21st.dev/@moumensoliman/components/hero-section-shadcnui).
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Phone, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { business } from '@/data/business'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function HeroSection() {
  return (
    <section className="tread relative overflow-hidden bg-ink text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container flex min-h-[560px] flex-col items-center justify-center py-20 text-center md:min-h-[640px]"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-zinc-200">
            <Clock className="size-4 text-accent" aria-hidden="true" />
            Same-day fitting · No appointment needed
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-6 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl"
        >
          New tyres, fitted
          <br />
          <span className="text-accent">while you wait.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-2xl text-pretty text-lg text-zinc-300"
        >
          Budget to premium brands, puncture repairs and wheel alignment. Honest prices,
          quoted up front, from a local team that gets you back on the road fast.
        </motion.p>

        <motion.div variants={itemVariants} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <Button size="lg" asChild>
            <a href={business.phoneHref}>
              <Phone aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
          </Button>
          <Button size="lg" variant="inverse" asChild>
            <a href="#quote">
              Get a free quote
              <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </motion.div>

        <motion.dl
          variants={itemVariants}
          className="mt-14 flex items-center gap-6 text-sm text-zinc-400 sm:gap-10"
        >
          {business.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
              {i > 0 && <div className="h-10 w-px bg-white/15" aria-hidden="true" />}
              <div className="flex flex-col">
                <dt className="order-2">{stat.label}</dt>
                <dd className="order-1 text-2xl font-bold text-white">{stat.value}</dd>
              </div>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  )
}
