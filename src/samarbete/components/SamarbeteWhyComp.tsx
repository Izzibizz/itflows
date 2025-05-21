import { useNavigate } from "react-router-dom"

export const SamarbeteWhyComp = () => {

    const navigate = useNavigate()

  return (
    <section className="py-20">
       
      <h3 className="font-collab text-4xl laptop:text-[40px]">Varför?</h3>
        <button className="bg-red-beige text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-body tablet:text-xl cursor-pointer shadow-lg hover:scale-110 hover:bg-warm-white hover:text-dark-red" onClick={() => navigate("/samarbete/prislista")}>Se priser</button>
    </section>
  )
}


