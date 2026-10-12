import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Clock, Star, Quote, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { business, fullAddress, reviews } from '@/data/business'
import { Logo } from './site-header'

const steps = [
  {
    title: 'Tell us your tyre size',
    body: 'It’s on the sidewall, e.g. 205/55 R16. Or just give us your reg and we’ll look it up.',
  },
  {
    title: 'Get a clear price',
    body: 'We quote the full cost up front, including fitting, balancing, valve and disposal.',
  },
  {
    title: 'Drive away the same day',
    body: 'Pop in or book a time. Most fittings take around 30 minutes while you wait.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-muted py-16 md:py-24">
      <div className="container">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          New tyres in three simple steps
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-lg font-bold text-white"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-muted-foreground">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <Button asChild size="lg" className="mt-10">
          <a href="#quote">Start with a free quote</a>
        </Button>
      </div>
    </section>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What our customers say</h2>
          <p className="flex items-center gap-2 font-medium text-muted-foreground">
            <span className="flex text-accent" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </span>
            {business.stats[0].value} on Google
          </p>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((review, i) => (
            <li key={i}>
              <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
                <Quote className="size-6 text-primary" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-card-foreground">“{review.quote}”</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{review.author}</span>
                  <span className="text-muted-foreground"> · {review.source}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const serviceOptions = ['New tyres', 'Part-worn tyres', 'Puncture repair', 'Wheel alignment', 'Something else']

type Errors = Partial<Record<'name' | 'phone', string>>

export function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({})

  // No backend yet: the form opens the visitor's email app with everything filled in.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const next: Errors = {}
    if (!name) next.name = 'Please enter your name.'
    if (!/^[+\d][\d\s()-]{6,}$/.test(phone)) next.phone = 'Please enter a phone number we can call you on.'
    setErrors(next)
    if (Object.keys(next).length) {
      document.getElementById(next.name ? 'name' : 'phone')?.focus()
      return
    }
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${data.get('service')}`,
      `Reg or tyre size: ${data.get('vehicle') || '-'}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n')
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      `Quote request from ${name}`,
    )}&body=${encodeURIComponent(body)}`
  }

  const field =
    'mt-1.5 block w-full rounded-md border border-border bg-card px-3 py-2.5 text-base text-foreground placeholder:text-zinc-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30 aria-invalid:border-red-600'

  return (
    <section id="quote" className="bg-ink py-16 text-white md:py-24">
      <div className="container grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get a free quote</h2>
          <p className="mt-4 max-w-md text-lg text-zinc-300">
            Send us your details and we’ll call you back with a price. In a hurry? Just ring us.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href={business.phoneHref}>
              <Phone aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
          </Button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rounded-lg bg-card p-6 text-foreground md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input id="name" name="name" autoComplete="name" className={field}
                aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
              {errors.name && <p id="name-error" className="mt-1.5 text-sm text-red-700">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field}
                aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} />
              {errors.phone && <p id="phone-error" className="mt-1.5 text-sm text-red-700">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="service" className="text-sm font-medium">What do you need?</label>
              <select id="service" name="service" className={field}>
                {serviceOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="vehicle" className="text-sm font-medium">
                Reg or tyre size <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <input id="vehicle" name="vehicle" placeholder="e.g. 205/55 R16" className={field} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium">
                Anything else? <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <textarea id="message" name="message" rows={3} className={field} />
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full">
            <Send aria-hidden="true" />
            Send quote request
          </Button>
        </form>
      </div>
    </section>
  )
}

export function Visit() {
  const mapQuery = encodeURIComponent(`${business.name}, ${fullAddress}`)
  return (
    <section id="visit" className="py-16 md:py-24">
      <div className="container grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Find us</h2>
          <ul className="mt-8 space-y-6">
            <li className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold">Address</p>
                <address className="not-italic text-muted-foreground">{fullAddress}</address>
                <a className="mt-1 inline-block font-medium text-primary underline-offset-4 hover:underline"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                  target="_blank" rel="noreferrer">
                  Get directions
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="w-full">
                <p className="font-semibold">Opening hours</p>
                <dl className="mt-1 grid max-w-xs grid-cols-2 gap-y-1 text-muted-foreground">
                  {business.hours.map((h) => (
                    <div key={h.days} className="contents">
                      <dt>{h.days}</dt>
                      <dd className="text-right">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold">Phone</p>
                <a href={business.phoneHref} className="text-muted-foreground hover:text-foreground">{business.phoneDisplay}</a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold">Email</p>
                <a href={`mailto:${business.email}`} className="text-muted-foreground hover:text-foreground">{business.email}</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted lg:col-span-3 lg:aspect-auto lg:min-h-[420px]">
          <iframe
            title={`Map showing ${business.name}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            className="size-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

const year = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="border-t border-border pb-24 pt-10 md:pb-10">
      <div className="container flex flex-col justify-between gap-4 text-sm text-muted-foreground md:flex-row md:items-center">
        <div className="text-foreground"><Logo /></div>
        <p>© {year} {business.name}. {fullAddress}</p>
      </div>
    </footer>
  )
}

// Always-visible call button on phones, where most visitors will be.
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <Button asChild size="lg" className="w-full">
        <a href={business.phoneHref}>
          <Phone aria-hidden="true" />
          Call {business.phoneDisplay}
        </a>
      </Button>
    </div>
  )
}
