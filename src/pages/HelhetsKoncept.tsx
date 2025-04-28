import { useNavigate } from "react-router-dom"

export const HelhetsKoncept: React.FC = () => {

  const navigate = useNavigate()

    return (
      <section className=" animate-fadeIn ">
       <h1 className="font-header text-4xl text-warm-white">Helhetskoncept</h1> 
        <button className="bg-dark-blue p-3 px-6 rounded-full w-fit h-fit text-xl cursor-pointer shadow-lg hover:" onClick={() => navigate("/samarbete/studio-mamama")}>Se samarbete</button>
      </section>
    )
  }
  