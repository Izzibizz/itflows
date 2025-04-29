import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"

export const Branding: React.FC = () => {

  const { setIsLandingPage } = useCollabStore()

  useEffect(() => {
    setIsLandingPage(false)
  },[])
  

    return (
      <section className="h-screen w-screen  animate-fadeIn">
        <h1 className="font-header text-4xl text-dark-blue">Branding</h1>
      </section>
    )
  }
  