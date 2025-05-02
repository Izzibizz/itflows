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
    <section className="grid grid-cols-2 laptop:grid-cols-4 relative">
      {overviewCards.map(
        ({ title, path, bgColor, textColor, description }, index) => {
          const isOpen = openIndex === index;

          return (
<div
  key={path}
  className={`${bgColor} aspect-square laptop:aspect-[3/4] desktop:aspect-square text-center ${textColor} p-4 cursor-pointer transition-all duration-500 relative overflow-hidden`}
  onMouseEnter={() => toggleOpen(index)}
  onMouseLeave={() => toggleOpen(null)}
  onClick={() => navigate(path)}
>
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Titel */}
    <h3
      className={`absolute transition-opacity duration-300 font-bold tracking-wide text-xl tablet:text-4xl ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    >
      {title}
    </h3>

    {/* Innehåll som animeras in */}
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-justify transform transition-all duration-500 ease-in-out ${
        isOpen && isDesktop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {description.map((line, i) => (
        <p
          key={i}
          className={i === 0 ? "text-xl text-center font-header" : "text-sm italic"}
        >
          {line}
        </p>
      ))}
      <NavLink
        to={path}
        className="bg-dark-blue text-warm-white p-2 px-6 mt-2 rounded-full w-fit h-fit cursor-pointer shadow-lg hover:scale-110 hover:bg-warm-white hover:text-dark-blue"
      >
        Läs mer
      </NavLink>
    </div>
  </div>
</div>
          );
        }
      )}
    </section>
  );
};
