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
     <ServiceComp circleColors= " rgb(255, 246, 226), rgb(163, 184, 213), rgb(159, 154, 189), rgb(101, 136, 184))" textColor="text-stone-700" imageMobile="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746778099/design-mobile_tajesa.svg" imageLaptop="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746778097/design-laptop_taecem.svg" />
      </section>
    )
  }
  