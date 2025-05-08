import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MovingCircle } from "../components/MovingCircle";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import data from "../data/services.json";

interface ServiceInfoBlock {
  title: string;
  highlight: string;
  body: string;
  layout: string;
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
}

export const ServiceComp: React.FC<MovingCircleProps> = ({circleColors, textColor}) => {
  const location = useLocation();
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

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

  if (!service) return <div>Hittar inte tjänsten.</div>;

  console.log("currentkey", currentKey);

  return (
    <section className="animate-fadeIn flex flex-col gap-14 laptop:gap-18 font-body">
      <div className="h-[50vh] tablet:h-[70vh] laptop:h-[60vh] w-full flex justify-center items-center flex-col relative z-20 uppercase">
        <h1 className={`font-bold text-[60px] laptop:text-[80px] text-center ${textColor}`}>
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
      <MovingCircle circleColors={circleColors}/>
      {service.info.map((item, index) => {
        const isExpanded = expandedIndexes.includes(index);
        const [before, after] = item.title.split(item.highlight);

        return (
          <div
            key={index}
            className={`${item.layout} flex flex-col gap-2 z-20`}
          >
            <h3 className="font-header text-dark-blue text-3xl">
              {before}
              <span className="font-wide text-4xl">{item.highlight}</span>
              {after}
            </h3>
            <p
              className={`text-justify transition-all duration-300 ${
                isExpanded ? "" : "line-clamp-3"
              }`}
            >
              {item.body}
            </p>
            <button
              onClick={() => toggleExpand(index)}
              className="text-sm w-fit cursor-pointer flex items-center gap-2 self-end"
            >
              {isExpanded ? (
                <>
                  Visa mindre <SlArrowUp />
                </>
              ) : (
                <>
                  Läs mer <SlArrowDown />
                </>
              )}
            </button>
          </div>
        );
      })}
    </section>
  );
};
