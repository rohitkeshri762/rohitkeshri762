import { Hero } from "@/components/home/hero"
import { Intro } from "@/components/home/intro"
import { PackagesShowcase } from "@/components/home/packages-showcase"
import { Journey } from "@/components/home/journey"
import { HelicopterFeature } from "@/components/home/helicopter-feature"
import { WhyUs } from "@/components/home/why-us"
import { Gallery } from "@/components/home/gallery"
import { Testimonials } from "@/components/home/testimonials"
import { FinalCta } from "@/components/final-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <PackagesShowcase />
      <Journey />
      <HelicopterFeature />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <FinalCta />
    </>
  )
}
