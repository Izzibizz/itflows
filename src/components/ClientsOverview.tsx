import { SwiperComp } from "./SwiperComp";
import { useNavigate } from "react-router-dom"

export const ClientsOverview: React.FC = () => {

  const navigate = useNavigate()
  return (
    <section className="bg-warm-white">
      <div className="w-10/12 laptop:w-9/12 mx-auto py-30 laptop:py-48 ">
      <div className="flex flex-col gap-6 mb-10">
        <h3 className="font-bold text-4xl laptop:text-[50px] text-dark-blue">Våra Kunder</h3>
        <h4 className="font-heading italic text-xl">Vi skapar unika uttryck för varje kund</h4>
        <p className="laptop:w-1/2 text-justify font-body">Varje projekt är en skräddarsydd upplevelse, formad utifrån våra kunders vision, målgrupp och identitet. Våra kunder är otroligt viktiga för oss, vårt mål är att hjälpa dem förstå och formulera deras vision och sen förverkliga den. Med stark känsla för form, tonalitet och strategi bygger itFlows digitala lösningar som sticker ut och som stannar kvar i minnet. Här ser du ett urval av våra uppdrag.</p>
        <button className="bg-dark-blue p-3 px-6 rounded-full w-fit h-fit text-sm cursor-pointer shadow-lg text-white font-body hover:scale-110" onClick={() => navigate("/kunder")}>Se alla projekt</button>
      </div>
      <SwiperComp />
      </div>
    </section>
  );
};
