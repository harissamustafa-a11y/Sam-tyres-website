// Adapted from the 21st.dev "Service Grid" by ravikatiyar162
// (https://21st.dev/@ravikatiyar162/components/service-grid).
// Uses SVG icons with descriptions instead of images, and animates on scroll.
import * as React from 'react'
import { motion, type Variants } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Service {
  name: string
  description: string
  icon: LucideIcon
}

export interface ServiceGridProps {
  id?: string
  title: string
  subtitle?: string
  services: Service[]
  className?: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 16 } },
}

export const ServiceGrid = React.forwardRef<HTMLElement, ServiceGridProps>(
  ({ id, title, subtitle, services, className }, ref) => (
    <section id={id} ref={ref} className={cn('w-full py-16 md:py-24', className)}>
      <div className="container">
        <div className="mb-10 max-w-2xl md:mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
        </div>

        <motion.ul
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service) => (
            <motion.li
              key={service.name}
              variants={itemVariants}
              className="group rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/40"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                <service.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">{service.name}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  ),
)

ServiceGrid.displayName = 'ServiceGrid'
