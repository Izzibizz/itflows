
import { SamarbetsHero } from "../components/SamarbetsHero"
import { SamarbetsOverview } from "../components/SamarbetsOverview"

export const Samarbete: React.FC = () => {


  return (
    <section className=" animate-fadeIn">
  
     <SamarbetsHero/>
     <SamarbetsOverview/>
    </section>
  )
}

