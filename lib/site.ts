export const WHATSAPP_NUMBER = '918796727273'
export const PHONE_DISPLAY = '+91 87967 27273'
export const PHONE_TEL = '+918796727273'
export const PHONE_DISPLAY_2 = '+91 97604 93743'
export const PHONE_TEL_2 = '+919760493743'
export const EMAIL_INFO = 'info@kedarfly.in'
export const EMAIL_SALES = 'sales@kedarfly.in'
export const OFFICE_LOCATION = 'L 3, Amrapali Golf Homes, Noida, Sector 04, Gautam buddha Nagar, Uttar Pradesh, 201301'

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Namaste KedarFly, I would like to plan a sacred pilgrimage journey.',
)}`

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/kedarfly.in/',
  facebook: 'https://www.facebook.com/kedarfly.in',
  x: 'https://x.com/kedarfly_in',
}

// Authenticity & Compliance
export const GST_NO = '09EPTPR4327K1ZZ'
export const MSME_NO = 'UDYAM-UP-28-0225552'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Char Dham', href: '/chardham-yatra-package' },
  { label: 'Packages', href: '/packages' },
  { label: 'Helicopter', href: '/kedarnath-helicopter-assistance' },
  { label: 'Temple Tours', href: '/temple-tours' },
  { label: 'Ritual Services', href: '/ritual-services' },
  { label: 'Blogs', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export type Package = {
  slug: string
  title: string
  short: string
  duration: string
  nights: string
  price: string
  elevation: string
  bestTime: string
  image: string
  tagline: string
  overview: string
  highlights: string[]
  inclusions: string[]
  exclusions: string[]
  hotels: string[]
  itinerary: { day: string; title: string; route: string; details: string[] }[]
  faqs: { q: string; a: string }[]
}

export const PACKAGES: Package[] = [
  {
    slug: 'kedarnath-tour-package',
    title: 'Kedarnath Yatra',
    short: 'Kedarnath 4D / 3N',
    duration: '4 Days',
    nights: '3 Nights',
    price: '₹12,499',
    elevation: '3,583 m',
    bestTime: 'May – Oct',
    image: '/images/kedarnath-package.png',
    tagline: 'Where the Himalayas meet the divine.',
    overview:
      'Journey to the abode of Lord Shiva at Kedarnath, one of the twelve Jyotirlingas, set against the towering Garhwal Himalayas. This carefully crafted four-day pilgrimage blends comfort, devotion and the raw majesty of the mountains.',
    highlights: [
      'Evening Ganga Aarti at Haridwar',
      'Scenic drive through Devprayag & Rudraprayag',
      'Darshan at Kedarnath Temple',
      'Option of trek or helicopter assistance',
      'Handpicked riverside & hill hotels',
      'Experienced Himalayan drivers',
    ],
    inclusions: [
      'Accommodation on twin-sharing basis',
      'Daily breakfast and dinner',
      'Private air-conditioned vehicle',
      'All toll, parking and driver charges',
      'Temple assistance & coordination',
      '24x7 on-trip support',
    ],
    exclusions: [
      'Helicopter tickets (assistance provided)',
      'Pony, palki or porter charges',
      'Lunch and personal expenses',
      'Anything not mentioned in inclusions',
    ],
    hotels: [
      'Haridwar — Premium riverside hotel',
      'Guptkashi — Boutique hill resort',
      'Kedarnath — Curated mountain stay',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Delhi → Haridwar',
        route: 'Arrival & Ganga Aarti',
        details: [
          'Pickup from Delhi in a luxury cab.',
          'Drive to the holy city of Haridwar.',
          'Hotel check-in and refreshment.',
          'Evening Ganga Aarti at Har Ki Pauri.',
        ],
      },
      {
        day: 'Day 2',
        title: 'Haridwar → Guptkashi',
        route: 'Devprayag • Rudraprayag',
        details: [
          'Scenic drive along the Alaknanda river.',
          'Stop at the sacred Devprayag confluence.',
          'Continue through Rudraprayag valley.',
          'Overnight stay at Guptkashi.',
        ],
      },
      {
        day: 'Day 3',
        title: 'Guptkashi → Kedarnath',
        route: 'Trek or helicopter • Darshan',
        details: [
          'Early transfer to Sonprayag.',
          'Trek to Kedarnath or take helicopter.',
          'Darshan at the ancient Kedarnath Temple.',
          'Overnight stay near the temple.',
        ],
      },
      {
        day: 'Day 4',
        title: 'Return Journey',
        route: 'Kedarnath → Delhi',
        details: [
          'Morning descent to the valley.',
          'Comfortable drive back towards Delhi.',
          'Drop with blessings and memories.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is the Kedarnath trek difficult?',
        a: 'The trek is roughly 16-18 km and moderately challenging. We provide pony, palki and porter assistance, and helicopter options for those who prefer to fly.',
      },
      {
        q: 'When is the best time to visit Kedarnath?',
        a: 'The temple is typically open between May and October. May-June and September offer the most pleasant weather.',
      },
      {
        q: 'Do you guarantee helicopter tickets?',
        a: 'We provide dedicated helicopter booking assistance, but we do not claim guaranteed tickets as availability is governed by operators and weather.',
      },
    ],
  },

  {
    slug: 'do-dham-yatra',
    title: 'Do Dham Yatra',
    short: 'Do Dham 5D / 4N',
    duration: '5 Days',
    nights: '4 Nights',
    price: '₹13,999',
    elevation: '3,583 m',
    bestTime: 'May – Oct',
    image: '/images/dodham-package.png',
    tagline: 'Kedarnath & Badrinath, two divine abodes.',
    overview:
      'Combine the spiritual power of both Kedarnath and Badrinath in one seamless journey. This six-day pilgrimage takes you to the seats of Lord Shiva and Lord Vishnu through the most dramatic landscapes of the Garhwal Himalayas.',
    highlights: [
      'Darshan at Kedarnath & Badrinath',
      'Ganga Aarti at Haridwar',
      'Tapt Kund & Mana village',
      'Helicopter assistance available',
      'Premium curated stays throughout',
      'Dedicated trip coordinator',
    ],
    inclusions: [
      'Accommodation on twin-sharing basis',
      'Daily breakfast and dinner',
      'Private air-conditioned vehicle',
      'All toll, parking and driver charges',
      'Temple assistance & coordination',
      '24x7 on-trip support',
    ],
    exclusions: [
      'Helicopter tickets (assistance provided)',
      'Pony, palki or porter charges',
      'Lunch and personal expenses',
      'Anything not mentioned in inclusions',
    ],
    hotels: [
      'Haridwar — Premium riverside hotel',
      'Guptkashi — Boutique hill resort',
      'Kedarnath — Curated mountain stay',
      'Badrinath — Curated mountain stay',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Delhi → Haridwar',
        route: 'Arrival & Ganga Aarti',
        details: [
          'Luxury cab pickup from Delhi.',
          'Hotel check-in at Haridwar.',
          'Evening Ganga Aarti at Har Ki Pauri.',
        ],
      },
      {
        day: 'Day 2',
        title: 'Haridwar → Guptkashi',
        route: 'Devprayag • Rudraprayag',
        details: [
          'Drive along the Alaknanda river.',
          'Visit sacred river confluences.',
          'Overnight stay at Guptkashi.',
        ],
      },
      {
        day: 'Day 3',
        title: 'Guptkashi → Kedarnath',
        route: 'Trek or helicopter • Darshan',
        details: [
          'Transfer to Sonprayag.',
          'Trek or fly to Kedarnath.',
          'Darshan and overnight stay.',
        ],
      },
      {
        day: 'Day 4',
        title: 'Kedarnath → Guptkashi → Joshimath',
        route: 'Descent & transfer',
        details: [
          'Return to the valley.',
          'Scenic drive to Joshimath.',
          'Overnight stay at Joshimath.',
        ],
      },
      {
        day: 'Day 5',
        title: 'Joshimath → Badrinath',
        route: 'Darshan • Mana Village',
        details: [
          'Transfer to Badrinath.',
          'Tapt Kund dip and darshan.',
          'Visit Mana village.',
        ],
      },
      {
        day: 'Day 6',
        title: 'Return Journey',
        route: 'Badrinath → Delhi',
        details: [
          'Morning descent.',
          'Comfortable drive back to Delhi.',
          'Drop with blessings.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can the Do Dham itinerary be customised?',
        a: 'Absolutely. We tailor stay durations, add helicopter legs and adjust pacing to suit your group.',
      },
      {
        q: 'Is helicopter included for Kedarnath?',
        a: 'We provide helicopter booking assistance. Tickets are subject to operator availability and weather.',
      },
      {
        q: 'How fit do I need to be?',
        a: 'Moderate fitness helps for the Kedarnath leg. Helicopter and pony options make it accessible for most pilgrims.',
      },
    ],
  },
  {
    slug: 'chardham-yatra-package',
    title: 'Char Dham Yatra',
    short: 'Char Dham 9D / 8N',
    duration: '9 Days',
    nights: '8 Nights',
    price: '₹18,499',
    elevation: '3,583 m',
    bestTime: 'May – Oct',
    image: '/images/chardham-package.png',
    tagline: 'The complete sacred circuit of the Himalayas.',
    overview:
      'The ultimate pilgrimage — Yamunotri, Gangotri, Kedarnath and Badrinath in one grand journey. Eleven days through the heart of the Garhwal Himalayas, crafted with premium stays, seamless logistics and deep devotional care.',
    highlights: [
      'All four Dhams in one journey',
      'Yamunotri & Gangotri source shrines',
      'Kedarnath & Badrinath darshan',
      'Ganga Aarti at Haridwar',
      'Helicopter assistance available',
      'Dedicated trip coordinator throughout',
    ],
    inclusions: [
      'Accommodation on twin-sharing basis',
      'Daily breakfast and dinner',
      'Private air-conditioned vehicle',
      'All toll, parking and driver charges',
      'Temple assistance & coordination',
      '24x7 on-trip support',
    ],
    exclusions: [
      'Helicopter tickets (assistance provided)',
      'Pony, palki or porter charges',
      'Lunch and personal expenses',
      'Anything not mentioned in inclusions',
    ],
    hotels: [
      'Barkot — Hill resort',
      'Uttarkashi — Riverside hotel',
      'Guptkashi — Boutique hill resort',
      'Badrinath — Curated mountain stay',
    ],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Delhi → Haridwar',
        route: 'Arrival & Ganga Aarti',
        details: ['Luxury cab pickup.', 'Evening Ganga Aarti at Har Ki Pauri.'],
      },
      {
        day: 'Day 2',
        title: 'Haridwar → Barkot',
        route: 'Towards Yamunotri',
        details: ['Scenic mountain drive.', 'Overnight stay at Barkot.'],
      },
      {
        day: 'Day 3',
        title: 'Yamunotri Darshan',
        route: 'Janki Chatti trek',
        details: ['Trek to Yamunotri.', 'Darshan and return to Barkot.'],
      },
      {
        day: 'Day 4',
        title: 'Barkot → Uttarkashi',
        route: 'Towards Gangotri',
        details: ['Drive to Uttarkashi.', 'Overnight stay.'],
      },
      {
        day: 'Day 5',
        title: 'Gangotri Darshan',
        route: 'Source of the Ganga',
        details: ['Visit Gangotri temple.', 'Return to Uttarkashi.'],
      },
      {
        day: 'Day 6',
        title: 'Uttarkashi → Guptkashi',
        route: 'Long scenic transfer',
        details: ['Drive through valleys.', 'Overnight at Guptkashi.'],
      },
      {
        day: 'Day 7',
        title: 'Kedarnath Darshan',
        route: 'Trek or helicopter',
        details: ['Transfer to Sonprayag.', 'Darshan and stay.'],
      },
      {
        day: 'Day 8',
        title: 'Kedarnath → Joshimath',
        route: 'Descent & transfer',
        details: ['Return to valley.', 'Drive to Joshimath.'],
      },
      {
        day: 'Day 9',
        title: 'Badrinath Darshan',
        route: 'Tapt Kund & Mana',
        details: ['Darshan at Badrinath.', 'Visit Mana village.'],
      },
      {
        day: 'Day 10',
        title: 'Badrinath → Rudraprayag',
        route: 'Return transfer',
        details: ['Scenic descent.', 'Overnight stay.'],
      },
      {
        day: 'Day 11',
        title: 'Return Journey',
        route: 'Rudraprayag → Delhi',
        details: ['Comfortable drive back.', 'Drop with blessings.'],
      },
    ],
    faqs: [
      {
        q: 'How physically demanding is the Char Dham Yatra?',
        a: 'It involves long drives and two treks (Yamunotri and Kedarnath). We provide pony, palki and helicopter options to suit all fitness levels.',
      },
      {
        q: 'Can I start the Yatra from a city other than Delhi?',
        a: 'Yes, we customise pickup from Dehradun, Haridwar or other points on request.',
      },
      {
        q: 'Are registrations and permits handled?',
        a: 'Our team assists with Char Dham registration and coordination so you can travel with peace of mind.',
      },
    ],
  },
]

export function getPackage(slug: string) {
  return PACKAGES.find((p) => p.slug === slug)
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  body: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'kedarnath-yatra-complete-guide',
    title: 'The Complete Guide to Kedarnath Yatra',
    excerpt:
      'Everything you need to know before you set out for the abode of Lord Shiva — routes, timing, fitness and what to pack.',
    image: '/images/blog-1.png',
    category: 'Travel Guide',
    date: 'April 12, 2025',
    readTime: '8 min read',
    body: [
      'Kedarnath sits at 3,583 metres in the Garhwal Himalayas, one of the twelve Jyotirlingas and among the most revered shrines in Hinduism. Reaching it is a pilgrimage in the truest sense — a journey of both distance and devotion.',
      'The temple typically opens in late April or early May and closes around Diwali, when the deity is moved to Ukhimath for the winter. The most comfortable months to travel are May, June and September, when the weather is clear and the trails are open.',
      'From Sonprayag, the final stretch is a 16-18 km trek to the temple. Pilgrims can walk, ride a pony, take a palki, or fly in by helicopter from Phata, Sersi or Guptkashi. We help arrange all of these based on your fitness and preference.',
      'Pack warm layers even in summer — temperatures near the temple drop sharply after sunset. Sturdy shoes, a raincoat, basic medication and a refillable water bottle make the journey far more comfortable.',
    ],
  },
  {
    slug: 'what-to-pack-himalayan-pilgrimage',
    title: 'What to Pack for a Himalayan Pilgrimage',
    excerpt:
      'A practical checklist for high-altitude temple journeys — from layers and footwear to documents and medication.',
    image: '/images/blog-2.png',
    category: 'Tips',
    date: 'March 28, 2025',
    readTime: '6 min read',
    body: [
      'Packing for the Char Dham or any high-altitude shrine is about balance — enough to stay warm and safe, light enough to carry on a trek.',
      'Start with layers: thermal innerwear, a fleece, and a waterproof outer jacket. Mountain weather changes within hours, and rain is common even in clear seasons.',
      'Footwear matters most. A broken-in pair of trekking shoes with good grip will save you on wet stone paths. Carry a walking stick and a small daypack for essentials.',
      'Keep your ID, registration documents and emergency contacts in a waterproof pouch. Carry any personal medication, a basic first-aid kit and altitude-sickness remedies recommended by your doctor.',
    ],
  },
  {
    slug: 'helicopter-vs-trek-kedarnath',
    title: 'Helicopter or Trek? Choosing Your Kedarnath Route',
    excerpt:
      'Weighing the two ways to reach Kedarnath so you can pick what suits your time, budget and fitness.',
    image: '/images/blog-3.png',
    category: 'Planning',
    date: 'March 10, 2025',
    readTime: '5 min read',
    body: [
      'There are two ways to complete the final leg to Kedarnath: trek the mountain path or fly in by helicopter. Each offers a different kind of pilgrimage.',
      'The trek is the traditional route — demanding but deeply rewarding, with the mountains revealing themselves slowly across the climb. It suits travellers with moderate fitness and time to spare.',
      'The helicopter is ideal for elderly pilgrims, families with children, or those short on time. Flights run from Phata, Sersi and Guptkashi, subject to weather and operator availability.',
      'We provide dedicated helicopter booking assistance, but we never claim guaranteed tickets — availability is governed entirely by operators and mountain weather. Whatever you choose, we coordinate the rest.',
    ],
  },
]

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((b) => b.slug === slug)
}

export const FAQS = [
  {
    q: 'How do I book a pilgrimage with KedarFly?',
    a: 'Simply reach out via WhatsApp, phone or our enquiry form. Our coordinator will understand your dates, group size and preferences, then share a tailored itinerary and quote.',
  },
  {
    q: 'Do you guarantee helicopter tickets to Kedarnath?',
    a: 'No. We provide dedicated helicopter booking assistance, but availability is controlled by operators and weather. We never claim guaranteed tickets — only honest, hands-on support.',
  },
  {
    q: 'Are your packages customisable?',
    a: 'Completely. Every itinerary can be adjusted for pace, stay category, pickup point, helicopter legs and additional shrines. We build the journey around you.',
  },
  {
    q: 'What is included in the package price?',
    a: 'Typically accommodation on twin-sharing, daily breakfast and dinner, a private vehicle, all tolls and driver charges, temple coordination and 24x7 support. Exact inclusions are listed on each package.',
  },
  {
    q: 'Is the Yatra suitable for elderly travellers?',
    a: 'Yes. Badrinath is accessible by road, and for Kedarnath we arrange pony, palki and helicopter options. We pace itineraries thoughtfully for senior pilgrims.',
  },
  {
    q: 'When is the best time to travel?',
    a: 'The shrines are generally open from late April or May to October-November. May-June and September offer the most pleasant weather and clearest mountain views.',
  },
  {
    q: 'Do you arrange Char Dham registration?',
    a: 'Yes, our team assists with the mandatory Char Dham registration and related coordination so you can travel with complete peace of mind.',
  },
  {
    q: 'What support do I get during the trip?',
    a: 'A dedicated coordinator is reachable 24x7 throughout your journey for any assistance — from itinerary changes to on-ground help.',
  },
]
