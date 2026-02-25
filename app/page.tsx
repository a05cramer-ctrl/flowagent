import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import TokenUtility from '@/components/TokenUtility'
import Tokenomics from '@/components/Tokenomics'
import NetworkMap from '@/components/NetworkMap'
import Roadmap from '@/components/Roadmap'
import Operators from '@/components/Operators'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-flow-bg text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <TokenUtility />
      <Tokenomics />
      <NetworkMap />
      <Roadmap />
      <Operators />
      <Footer />
    </main>
  )
}
