
import { useRef } from "react"
import { SamarbetsHero } from "../components/SamarbetsHero"
import { SamarbetsOverview } from "../components/SamarbetsOverview"
import { TestimonialSwiper } from "../../components/TestimonialSwiper";
import { SamarbeteWhyComp } from "../components/SamarbeteWhyComp";

export const Samarbete: React.FC = () => {

  const overviewRef = useRef<HTMLDivElement>(null);

  return (
    <section className=" animate-fadeIn">
  
     <SamarbetsHero overviewRef={overviewRef}/>
     <SamarbetsOverview overviewRef={overviewRef}/>
     <img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747854939/Sk%C3%A4rmbild_2025-04-15_141958_n0rvxc.png" className="w-full max-h-[500px] object-cover"/>
     <SamarbeteWhyComp/>
     <TestimonialSwiper style="bg-warm-white" bubbleStyle="bg-collab-beige"/>
    </section>
  )
}

