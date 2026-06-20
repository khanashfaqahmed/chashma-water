import Hero from '@/components/sections/hero'
import WhyChooseUs from '@/components/sections/why-choose-us'
import HowItWorks from '@/components/sections/how-it-works'
import SubscriptionPlans from '@/components/sections/subscription-plans'
import AreaChecker from '@/components/sections/area-checker'
import Testimonials from '@/components/sections/testimonials'
import Faq from '@/components/sections/faq'
import CtaBanner from '@/components/sections/cta-banner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <SubscriptionPlans />
      <AreaChecker />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  )
}
