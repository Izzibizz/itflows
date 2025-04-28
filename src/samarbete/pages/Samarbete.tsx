
import { useNavigate } from "react-router-dom"

export const Samarbete: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className=" animate-fadeIn">
     <h2 className="font-collab">Sömlöst innehåll - flowigt resultat</h2>

    <h3 className="">allt + fotografering</h3>
  
      <button className="bg-dark-blue p-3 px-6 rounded-full w-fit h-fit text-xl cursor-pointer shadow-lg hover:" onClick={() => navigate("/samarbete/om-oss")}>Läs mer</button>
      <button className="bg-dark-blue p-3 px-6 rounded-full w-fit h-fit text-xl cursor-pointer shadow-lg hover:" onClick={() => navigate("/samarbete/prislista")}>Se priser</button>
    </section>
  )
}

