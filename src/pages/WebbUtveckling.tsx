import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"
import { MovingCircle } from "../components/MovingCircle"

export const WebbUtveckling: React.FC = () => {

    
    const { setIsLandingPage } = useCollabStore()
  
    useEffect(() => {
      setIsLandingPage(false)
    },[])

  return (
      <section className="animate-fadeIn ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col justify-center uppercase ">
        <h1 className="font-bold text-[60px] laptop:text-[50px] text-dark-blue text-center">Webbutveckling</h1>
        <h2 className="font-bold text-3xl tablet:text-4xl laptop:text-[40px] text-center text-warm-white ">För dig som vill ha mer<br/> än en mall.</h2>
        </div>
        <MovingCircle/>
      </section>
  )
}


