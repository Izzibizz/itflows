import { SwiperComp } from "./SwiperComp";
import { useNavigate } from "react-router-dom"

export const ClientsOverview: React.FC = () => {

  const navigate = useNavigate()
  return (
    <section className="bg-warm-white">
      <div className="w-10/12 laptop:w-9/12 mx-auto py-48 ">
      <div className="flex flex-col gap-6">
        <h3>Våra Kunder</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum auctor augue, in consectetur mauris tempor ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra</p>
        <button className="bg-dark-blue p-3 px-6 rounded-full w-fit h-fit text-xl cursor-pointer shadow-lg hover:" onClick={() => navigate("/kunder")}>Se alla projekt</button>
      </div>
      <SwiperComp />
      </div>
    </section>
  );
};
