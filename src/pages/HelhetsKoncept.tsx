import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"

export const HelhetsKoncept: React.FC = () => {

  const navigate = useNavigate()

  const { setIsLandingPage } = useCollabStore()
  
    useEffect(() => {
      setIsLandingPage(false)
    },[])
    

    return (
      <section className=" animate-fadeIn ">
       <h1 className="font-header text-4xl text-dark-blue">Helhetskoncept</h1> 
        <button className="bg-dark-blue p-3 px-6 rounded-full w-fit h-fit text-xl cursor-pointer shadow-lg hover:" onClick={() => navigate("/samarbete/studio-mamama")}>Se samarbete</button>
      </section>
    )
  }
  