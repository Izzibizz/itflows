import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"

import { ServiceComp } from "../components/ServiceComp"

export const Branding: React.FC = () => {

  const { setIsLandingPage } = useCollabStore()

  useEffect(() => {
    setIsLandingPage(false)
  },[])
  

    return ( 
      <section className="animate-fadeIn  flex flex-col gap-14 laptop:gap-18 font-body">
      <ServiceComp circleColors=" rgb(255, 246, 226), rgb(247, 220, 199), rgb(251, 177, 130), rgb(255, 148, 106))" textColor="text-medium-red"/>
      </section>
    )
  }
  