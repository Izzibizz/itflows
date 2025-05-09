
import { useNavigate} from "react-router-dom";
import overviewCards from "../data/overviewCards.json";

export const Overview: React.FC = () => {

  const navigate = useNavigate()





  return (
    <section className="grid grid-cols-2 laptop:grid-cols-4 relative">
      {overviewCards.map(
        ({ title, path }) => {
        

          return (
            <div
              key={path}
              className={`group bg-warm-white border-b-2 border-x-1 border-t-2 border-stone-700 bg-cover bg-center aspect-square laptop:aspect-[3/4] desktop:aspect-square flex flex-col items-center justify-center text-center text-stone-700 p-4 cursor-pointer transition-all duration-500 `}
         
              onClick={() => navigate(path)}
            >
              <h3
                className={`text-xl tablet:text-4xl transition-opacity duration-300 font-bold tracking-wide group-hover:italic `}
              >
                {title}
              </h3>

           
            </div>
          );
        }
      )}
    </section>
  );
};
