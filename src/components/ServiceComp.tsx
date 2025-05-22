import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MovingCircle } from "../components/MovingCircle";
import data from "../data/services.json";

interface ServiceInfoBlock {
  title: string;
  highlight: string;
  body: string;
  layout: string;
  h3: string;
}

interface ServiceData {
  title: string;
  h2?: {
    beforeBreak: string;
    afterBreakTablet?: string;
  };
  info: ServiceInfoBlock[];
}

interface MovingCircleProps {
  circleColors: string;
  textColor: string;
  imageMobile: string;
  imageLaptop: string;
}

export const ServiceComp: React.FC<MovingCircleProps> = ({
  circleColors,
  textColor,
  imageMobile,
  imageLaptop,
}) => {
  const location = useLocation();
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  type Services = Record<string, ServiceData>;

  const typedData = data as Services;

  const currentKey: keyof Services = location.pathname.replace(
    "/",
    ""
  ) as keyof Services;

  const service = typedData[currentKey];

  const toggleExpand = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // <768px = mobil
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!service) return <div>Hittar inte tjänsten.</div>;

  console.log("currentkey", currentKey);

  return (
    <section className="animate-longFadeIn flex flex-col gap-10 laptop:gap-14 font-body">
      <div className="h-[50vh] tablet:h-[70vh] laptop:h-[60vh] w-full flex justify-center items-center flex-col relative z-20 uppercase">
        <h1
          className={`font-bold text-[60px] laptop:text-[80px] text-center ${textColor}`}
        >
          {service.title}
        </h1>
        {service.h2 && (
          <h2 className="font-bold text-4xl laptop:text-[40px] text-center text-warm-white animate-longFadeIn">
            {service.h2.beforeBreak}
            <br className="hidden tablet:block" />
            {service.h2.afterBreakTablet}
            <br className="tablet:hidden" />
          </h2>
        )}
      </div>
      <MovingCircle circleColors={circleColors} />

      {service.info.length > 0 && (
        <div className={`${service.info[0].layout} flex flex-col gap-2 z-20`}>
          <h3 className="font-header text-stone-700 text-2xl laptop:text-3xl">
            {service.info[0].title.split(service.info[0].highlight)[0]}
            <span className="font-wide tracking-wide text-3xl laptop:text-4xl">
              {service.info[0].highlight}
            </span>
            {service.info[0].title.split(service.info[0].highlight)[1]}
          </h3>
          <p
            className={`transition-all duration-300 ${
              !expandedIndexes.includes(0) ? "line-clamp-2" : ""
            }`}
          >
            {service.info[0].body}
          </p>
            <button
              onClick={() => toggleExpand(0)}
              className="text-sm w-fit cursor-pointer flex items-center gap-2 self-end "
            >
              {expandedIndexes.includes(0) ? (
                <img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747906933/plus_jwn5fm.png" alt="minimera kryss" className="rotate-45 transition-all duration-200 transform w-6 h-6 tablet:w-8 tablet:h-8"/>
              ) : (
                 <img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747906933/plus_jwn5fm.png" alt="plus" className="w-6 h-6 tablet:w-8 tablet:h-8"/>
              )}
            </button>
        </div>
      )}
        <h3 className="font-wide tracking-wide text-3xl tracking-wide laptop:text-4xl">Hur går det till?</h3>
      <img
        src={window.innerWidth < 1025 ? imageMobile : imageLaptop}
        alt="step by step - steg för steg"
        className={`w-full ${service.title === "Helhetskoncept" ? "laptop:w-10/12" : "laptop:w-2/3"} mx-auto object-cover`}
      />
    <div className="grid laptop:grid-cols-2 gap-10 laptop:gap-20 border-t-1 py-4 laptop:py-8 my-4 laptop:mt-16">
      {service.info.slice(1).map((item, i) => {
        const index = i + 1;
        const isExpanded = expandedIndexes.includes(index);
        const [before, after] = item.title.split(item.highlight);

        return (
          <div
            key={index}
            className={` ${ index >= 1 && "border-b pb-4"} flex flex-col gap-2 z-20`}
          >
            <h3 className={`font-header text-stone-700 text-2xl laptop:text-3xl ${item.h3}`}>
              {before}
              <span className="font-wide tracking-wide text-3xl laptop:text-4xl">{item.highlight}</span>
              {after}
            </h3>
            <p
              className={`transition-all duration-300 ${
                 !isExpanded ? "line-clamp-2" : ""
              }`}
            >
              {item.body}
            </p>
              <button
                onClick={() => toggleExpand(index)}
                className="text-sm w-fit cursor-pointer flex items-center gap-2 self-end"
              >
                {isExpanded ? (
                 <img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747906933/plus_jwn5fm.png" alt="minimera kryss" className="rotate-45 transition-all duration-200 transform  w-6 h-6 tablet:w-8 tablet:h-8"/>
              ) : (
                 <img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747906933/plus_jwn5fm.png" alt="plus"  className="w-6 h-6 tablet:w-8 tablet:h-8"/>
              )}
              </button>
          </div>
        );
      })}
      </div>
    </section>
  );
};
