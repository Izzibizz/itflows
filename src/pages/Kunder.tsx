import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"

export const Kunder: React.FC = () => {

    
  const { setIsLandingPage } = useCollabStore()

  useEffect(() => {
    setIsLandingPage(false)
  },[])
  
  return (
    <section className=" animate-fadeIn ">
       <h1 className="font-header text-dark-blue text-4xl">Kunder</h1>
    </section>
  )
}

