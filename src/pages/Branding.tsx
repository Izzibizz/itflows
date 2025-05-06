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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex gap-6 flex-col tablet:flex-row justify-center uppercase ">
        <h1 className="font-bold text-[70px] laptop:text-[60px] text-dark-blue">Branding</h1>
        <h2 className="font-bold text-4xl laptop:text-[40px] text-center ">Bygg ett varumärke som <br className="hidden tablet:block"/>man känner<br className=" tablet:hidden"/> – och minns.</h2>
        </div>
        <MovingCircle/>
      </section>
    )
  }
  