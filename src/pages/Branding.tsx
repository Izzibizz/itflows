import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"
import { MovingCircle } from "../components/MovingCircle"

export const Branding: React.FC = () => {

  const { setIsLandingPage } = useCollabStore()

  useEffect(() => {
    setIsLandingPage(false)
  },[])
  

    return (
      <section className="h-screen w-screen  animate-fadeIn">
        <div className="mt-[20vh]w-fit z-20 relative flex flex-col justify-center">
        <h1 className="font-bold text-4xl laptop:text-[60px] text-dark-blue">Branding</h1>
        <h2 className="font-bold text-3xl laptop:text-[40px]">Bygg ett varumärke som man<br/> känner – och minns.</h2>
        </div>
        <MovingCircle/>
      </section>
    )
  }
  