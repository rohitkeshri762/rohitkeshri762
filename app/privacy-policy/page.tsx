import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Privacy Policy | KedarFly',
  description:
    'How KedarFly collects, uses and protects your personal information.',
}

type Section = {
  h: string
  p?: string
  list?: string[]
}

const SECTIONS: Section[] = [
  {
    h: 'Information We Collect',
    p: 'We collect the details you share when you enquire or book, so we can plan and coordinate your pilgrimage. This typically includes:',
    list: [
      'Your name, phone number and email address',
      'Travel dates, group size and itinerary preferences',
      'Identification documents (such as Passport, Voter ID, Driving License or Aadhaar) required for hotel check-in and helicopter or temple registrations',
    ],
  },
  {
    h: 'How We Use Your Information',
    p: 'Your information is used solely to respond to enquiries, prepare itineraries, make bookings with our partners and keep you informed about your journey. We do not sell your data to anyone.',
  },
  {
    h: 'Sharing With Partners',
    p: 'To deliver your trip, we share only the necessary details with trusted service partners such as hotels, transport providers and helicopter operators (including HELI-IRCTC). They are expected to handle your data responsibly and use it only to provide the booked service.',
  },
  {
    h: 'Identification Documents',
    p: 'ID documents are collected only to complete mandatory check-ins, permits and registrations. They are shared strictly with the relevant authority or accommodation provider and are not used for any other purpose.',
  },
  {
    h: 'WhatsApp & Communication',
    p: 'When you contact us via WhatsApp, phone or email, your messages and contact details are used to assist you with your enquiry and booking. Standard messaging-platform privacy terms also apply to those conversations.',
  },
  {
    h: 'Confidentiality',
    p: 'Quotations and itineraries we share are confidential, intended only for the recipient, and must not be forwarded or disclosed to any other agency or person without our written consent.',
  },
  {
    h: 'Data Security',
    p: 'We take reasonable measures to protect your information against unauthorised access. However, no method of transmission over the internet or electronic storage is completely secure.',
  },
  {
    h: 'Your Choices',
    p: 'You may ask us to update or delete your personal information at any time by contacting us. We will honour such requests subject to any records we are legally required to retain.',
  },
  {
    h: 'Governing Jurisdiction',
    p: 'This Privacy Policy is governed by the laws of India, and any disputes are subject to the exclusive jurisdiction of the courts of NOIDA, Uttar Pradesh, India.',
  },
  {
    h: 'Contact Us',
    p: 'If you have any questions about this policy or how your data is handled, please reach out to us using the contact details on our website.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        image="/images/gallery-5.png"
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your trust matters to us. Here is how we handle the information you share."
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
