/* import { useNavigate } from "react-router-dom" */
import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"
import { ServiceComp } from "../components/ServiceComp"

export const HelhetsKoncept: React.FC = () => {
/* 
  const navigate = useNavigate() */

  const { setIsLandingPage } = useCollabStore()
  
    useEffect(() => {
      setIsLandingPage(false)
    },[])
    

    return (
      <section className="animate-fadeIn ">
        <ServiceComp circleColors= " rgb(255, 246, 226), rgb(208, 218, 229), rgb(172, 189, 204), rgb(76, 98, 125))" textColor="text-red-beige" />
      </section>
    )
  }
  