import { useState, useEffect } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import overviewCards from "../data/overviewCards.json";

export const Overview: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1025); 
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleOpen = (index: number | null) => {
    if (!isDesktop) return;
    setOpenIndex(openIndex === index ? null : index);
  };


  useEffect(() => {
    setOpenIndex(null)
  }, [])

  return (
    <section className="grid grid-cols-2 laptop:grid-cols-4 font-header">
      {overviewCards.map(
        ({ title, path, bgColor, textColor, description }, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={path}
              className={`${bgColor} aspect-square laptop:aspect-[3/4] desktop:aspect-square flex flex-col items-center justify-center text-center ${textColor} p-4 cursor-pointer transition-all duration-500 `}
              onMouseEnter={() => toggleOpen(index)}
              onMouseLeave={() => toggleOpen(null)}
              onClick={() => navigate(path)}
            >
              <h3
                className={`text-xl tablet:text-2xl transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              >
                {title}
              </h3>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden flex flex-col gap-4 items-center text-justify w-10/12 mx-auto ${
                  isOpen && isDesktop
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {description.map((line, i) => (
                  <p key={i} className={i === 0 ? "text-lg text-center" : "text-sm"}>{line}</p>
                ))}
                <NavLink
                  to={path}
                  className="bg-dark-blue text-warm-white p-2 px-6 mt-2 mb-4 rounded-full w-fit h-fit text-lg cursor-pointer shadow-lg hover:scale-110"
                >
                  Läs mer
                </NavLink>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
};
