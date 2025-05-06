import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"
import { MovingCircle } from "../components/MovingCircle"

export const Design: React.FC = () => {
  
  const { setIsLandingPage } = useCollabStore()

  useEffect(() => {
    setIsLandingPage(false)
  },[])
  
    return (
      <section className="animate-fadeIn ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex gap-6 flex-col laptop:flex-row justify-center uppercase ">
        <h1 className="font-bold text-[70px] laptop:text-[60px] text-dark-blue">Design</h1>
        <h2 className="font-bold text-3xl tablet:text-4xl laptop:text-[40px] text-center text-warm-white ">Luta dig tillbaka. vi  <br className="hidden tablet:block"/>tar hand om formen<br className=" tablet:hidden"/></h2>
        </div>
        <MovingCircle/>
      </section>
    )
  }
  