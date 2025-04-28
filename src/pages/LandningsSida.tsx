import { Hero } from "../components/Hero"
import { Overview } from "../components/Overview"
import { ClientsOverview } from "../components/ClientsOverview"

export const LandningsSida: React.FC = () => {
  return (
    <section className=" animate-fadeIn ">
      <Hero />
      <Overview />
      <ClientsOverview />
    </section >
  )
}


