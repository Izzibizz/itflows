import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"
import { ServiceComp } from "../components/ServiceComp"

export const Design: React.FC = () => {
  
  const { setIsLandingPage } = useCollabStore()

  useEffect(() => {
    setIsLandingPage(false)
  },[])
  
    return (
      <section className="animate-fadeIn ">
     <ServiceComp circleColors= " rgb(255, 246, 226), rgb(163, 184, 213), rgb(159, 154, 189), rgb(101, 136, 184))" textColor="text-light-beige" />
     <img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746693489/47356d71637fef8545556703025dbab5_qtjzyu.jpg" className="w-full h-full object-cover"/>
      </section>
    )
  }
  