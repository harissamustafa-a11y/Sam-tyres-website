// All the shop's details live here. Anything marked TODO is a placeholder:
// replace it with the real information before the site goes live.

export const business = {
  name: 'Sam Tyres',
  tagline: 'Tyres fitted today, at a fair price.',
  phoneDisplay: '01234 567890', // TODO
  phoneHref: 'tel:+441234567890', // TODO
  email: 'hello@samtyres.co.uk', // TODO
  address: {
    line1: '1 Example Road', // TODO
    town: 'Your Town', // TODO
    postcode: 'AB1 2CD', // TODO
  },
  hours: [
    { days: 'Monday – Friday', time: '8:30am – 6:00pm' }, // TODO
    { days: 'Saturday', time: '8:30am – 4:00pm' }, // TODO
    { days: 'Sunday', time: 'Closed' }, // TODO
  ],
  stats: [
    { value: '4.9★', label: 'Google rating' }, // TODO
    { value: '15+', label: 'Years trading' }, // TODO
    { value: '30 min', label: 'Typical fitting' }, // TODO
  ],
}

export const fullAddress = `${business.address.line1}, ${business.address.town}, ${business.address.postcode}`

// TODO: replace with real customer reviews (e.g. copied from your Google Business profile).
export const reviews = [
  {
    quote: 'Placeholder review. Paste a real customer review here, ideally one that mentions speed or price.',
    author: 'Customer name',
    source: 'Google review',
  },
  {
    quote: 'Placeholder review. A second real review works best if it mentions friendly or honest service.',
    author: 'Customer name',
    source: 'Google review',
  },
  {
    quote: 'Placeholder review. A third real review could mention a puncture repair or an emergency fix.',
    author: 'Customer name',
    source: 'Google review',
  },
]
