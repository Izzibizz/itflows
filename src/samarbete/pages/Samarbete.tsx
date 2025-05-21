
import { useRef } from "react"
import { SamarbetsHero } from "../components/SamarbetsHero"
import { SamarbetsOverview } from "../components/SamarbetsOverview"

export const Samarbete: React.FC = () => {

  const overviewRef = useRef<HTMLDivElement>(null);

  return (
    <section className=" animate-fadeIn">
  
     <SamarbetsHero overviewRef={overviewRef}/>
     <SamarbetsOverview overviewRef={overviewRef}/>
    </section>
  )
}

