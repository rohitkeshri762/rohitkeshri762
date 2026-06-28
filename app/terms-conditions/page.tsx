import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Terms & Conditions | KedarFly',
  description:
    'Bookings, payments, cancellations, inclusions, helicopter policy and travel terms for your KedarFly pilgrimage.',
}

type Section = {
  h: string
  p?: string
  list?: string[]
}

const SECTIONS: Section[] = [
  {
    h: 'Package Inclusions',
    p: 'Unless stated otherwise in your specific itinerary, your package includes the following:',
    list: [
      'Accommodation on quad-sharing room basis',
      'Pick up from Haridwar',
      'Drop at Haridwar',
      'All land transfers and sightseeing by Tempo Traveller or similar vehicle',
      'Driver allowances, toll, parking, fuel and permit charges',
      'All applicable taxes, service charges and permits',
    ],
  },
  {
    h: 'Package Exclusions',
    p: 'The following are not part of the package cost and are payable directly by the traveller:',
    list: [
      'Monument and temple entry fees',
      'Food at Kedarnath',
      'Lunch and guide charges',
      'Air, rail or bus fare',
      'Personal expenses in hotels',
      'Camera charges',
      'Gala dinner charges',
      '5% GST',
      'Anything not specifically mentioned under inclusions',
    ],
  },
  {
    h: 'Payment Schedule',
    p: 'Your booking proceeds in three stages:',
    list: [
      '20% advance to proceed with and confirm the booking',
      '50% at the time of arrival',
      '30% after Kedarnath darshan',
    ],
  },
  {
    h: 'Cancellation Policy',
    p: 'Cancellation charges are calculated as a percentage of the total tour cost, with a minimum cancellation charge of INR 5,000 per person per tour:',
    list: [
      '40% — between 15 and 10 days before tour departure',
      '50% — between 10 and 5 days before tour departure',
      '75% — between 5 and 1 day before tour departure',
      '100% — on the same day of departure or in case of a no-show',
    ],
  },
  {
    h: 'Helicopter Ticket Policy (as of 2025)',
    p: 'KedarFly only books helicopter tickets to Kedarnath; we do not own or operate aircraft. Indicative round-trip base fares are: Guptkashi–Kedarnath–Guptkashi INR 12,762; Phata–Kedarnath–Phata INR 10,164; Sersi–Kedarnath–Sersi INR 6,390.',
    list: [
      'Refunds are governed entirely by the HELI-IRCTC policy — please refer to heliyatra.irctc.co.in/cancellation-policy.',
      'Convenience fees and payment-gateway charges are payable extra as per heliyatra.',
      'Helicopter tickets are subject to availability; we cannot give a 100% assurance of confirmation.',
      'We are not responsible for any cancellation made by the helicopter operators.',
      'Refunds are credited to your bank account within 15–45 days of cancellation, after the amount is received from the heli services.',
      'No refund is provided on the service charge for booking helicopter tickets.',
      'If we are unable to provide the tickets, the amount paid for the helicopter is refunded or adjusted.',
    ],
  },
  {
    h: 'Hotels & Accommodation',
    list: [
      'Hotels are subject to availability and a dedicated car is provided for the entire trip.',
      'At Kedarnath, due to high altitude, stay is generally in dormitories, guest houses or dharamshalas only.',
      'Standard check-in is 14:00 hrs and check-out is 11:00 hrs across India. Early check-in or late check-out is subject to availability and chargeable if not included in your cost — kindly coordinate complimentary requests with the hotel directly.',
      'All Indian and foreign nationals must present a valid photo ID at check-in (Passport & Visa, Voter ID, current Driving License or Aadhaar Card). Accommodation may be denied without valid ID, and the company is not responsible for any ID-related issues.',
      'For extra beds on double-sharing rooms, many hotels provide a rolling or extra mattress instead of a separate bed.',
    ],
  },
  {
    h: 'Meals',
    list: [
      'Where meals are included, they are served on a set-menu, buffet or fixed-menu basis, or as a meal credit decided by the hotel. Items outside the standard menu are charged extra.',
      'If meal-credit bills exceed the allotted amount, the balance is to be settled directly at the hotel. Room service for food is charged extra at many hotels.',
      'Breakfast is generally served between 07:00 AM and 09:00 AM.',
    ],
  },
  {
    h: 'Vehicle & Sightseeing',
    list: [
      'Pick-up and drop are from one point only; please mention multiple pick-up or drop points at the time of booking.',
      'Drivers will not enter no-entry zones or narrow lanes. In several hill areas, driving after sunset and loud music are not permitted.',
      'Routes and sightseeing cannot be changed without prior notice, and a similar vehicle may be provided if the booked one is unavailable.',
      'AC does not operate in hilly terrain. At some destinations, mall roads and certain areas are marked "No Entry" for vehicles.',
      'In case of a vehicle breakdown, a replacement is arranged as soon as possible. No refund is given for short stays or unutilised facilities.',
    ],
  },
  {
    h: 'Weather & Force Majeure',
    p: 'Himalayan travel is subject to weather, landslides, road closures and other natural events. KedarFly is not liable for delays, alterations or cancellations arising from circumstances beyond our control, and no refund is applicable for such situations.',
  },
  {
    h: 'Traveller Responsibility',
    p: 'Travellers must ensure they are medically fit for high-altitude travel, carry valid identification, complete required registrations and follow the guidance of our team and local authorities at all times.',
  },
  {
    h: 'Liability & Jurisdiction',
    p: 'The company is not responsible for any accident, injury, death, or theft of person or property during the course of the tour. Management reserves the right to cancel any service without refund until the full advance is received and accepted. The company disclaims any implied warranties under the laws of any jurisdiction other than India and submits exclusively to the jurisdiction of the courts of NOIDA, Uttar Pradesh, India.',
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        image="/images/gallery-4.png"
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before booking your pilgrimage with us."
      />

      <section className="mx-auto max-w-3xl px-5 py-24 lg:px-8 md:py-32">
        <Reveal>
          <p className="text-sm text-muted-foreground">Last updated: June 2025</p>
        </Reveal>
        <div className="mt-10 space-y-12">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.h} delay={(i % 3) * 0.05}>
              <div>
                <h2 className="font-heading text-2xl font-light text-foreground">
                  {s.h}
                </h2>
                {s.p && (
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {s.p}
                  </p>
                )}
                {s.list && (
                  <ul className="mt-4 space-y-3">
                    {s.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 leading-relaxed text-muted-foreground"
                      >
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: 'var(--saffron)' }}
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
