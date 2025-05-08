import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"
import { ServiceComp } from "../components/ServiceComp"


export const WebbUtveckling: React.FC = () => {

    
    const { setIsLandingPage } = useCollabStore()
  
    useEffect(() => {
      setIsLandingPage(false)
    },[])

  return (
      <section className="animate-fadeIn flex flex-col gap-14 laptop:gap-18 font-body">
      <ServiceComp  circleColors=" rgb(255, 246, 226), rgb(250, 183, 152), rgb(238, 142, 113), rgb(255, 111, 106))" textColor="text-dark-blue" />
      <img src={window.innerWidth < 1025 ? "https://res.cloudinary.com/dlp85vjwx/image/upload/v1746710652/process-mobile_i7yalp.svg" :"https://res.cloudinary.com/dlp85vjwx/image/upload/v1746711179/process-laptop_l2nrev.svg"} className="w-full laptop:w-2/3 mx-auto object-cover" />
      </section>
  )
}


