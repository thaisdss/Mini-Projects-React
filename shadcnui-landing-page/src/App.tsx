import { CTA } from "./components/CTA"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { HowItWork } from "./components/HowItWork"
import { Plan } from "./components/Plan"

export const App = () => {
  return (
    <div className='bg-zinc-100 w-full flex flex-col'>
      <Header />
      <Hero />
      <HowItWork />
      <Plan />
      <CTA />
      <Footer />
    </div>
  )
}
