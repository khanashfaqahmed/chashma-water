import Hero from '@/components/sections/hero'
import QuickActions from '@/components/sections/quick-actions'
import WhyChooseUs from '@/components/sections/why-choose-us'
import HowItWorks from '@/components/sections/how-it-works'
import AreaChecker from '@/components/sections/area-checker'
import Testimonials from '@/components/sections/testimonials'
import Faq from '@/components/sections/faq'
import CtaBanner from '@/components/sections/cta-banner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <WhyChooseUs />
      <HowItWorks />
      <AreaChecker />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  )
}
