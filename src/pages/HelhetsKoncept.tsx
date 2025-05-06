/* import { useNavigate } from "react-router-dom" */
import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"
import { MovingCircle } from "../components/MovingCircle"

export const HelhetsKoncept: React.FC = () => {
/* 
  const navigate = useNavigate() */

  const { setIsLandingPage } = useCollabStore()
  
    useEffect(() => {
      setIsLandingPage(false)
    },[])
    

    return (
      <section className="animate-fadeIn ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col justify-center uppercase ">
        <h1 className="font-bold text-[60px] laptop:text-[50px] text-dark-blue text-center">Helhetskoncept</h1>
        <h2 className="font-bold text-3xl tablet:text-4xl laptop:text-[40px] text-center text-warm-white ">En enhetlig upplevelse som <br/> bygger förtroende.</h2>
        </div>
        <MovingCircle/>
      </section>
    )
  }
  