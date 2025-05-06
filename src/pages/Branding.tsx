import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"
import { MovingCircle } from "../components/MovingCircle"

export const Branding: React.FC = () => {

  const { setIsLandingPage } = useCollabStore()

  useEffect(() => {
    setIsLandingPage(false)
  },[])
  

    return ( 
      <section className="animate-fadeIn ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col justify-center uppercase ">
        <h1 className="font-bold text-[70px] laptop:text-[60px] text-center text-dark-blue">Branding</h1>
        <h2 className="font-bold text-4xl laptop:text-[40px] text-center text-warm-white ">Bli ett företag folk minns<br className="hidden tablet:block"/> - inte bara scrollar förbi.<br className=" tablet:hidden"/></h2>
        </div>
        <MovingCircle/>
      </section>
    )
  }
  