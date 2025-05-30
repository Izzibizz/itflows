import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import paketData from "../../data/prislista.json";

type Package = {
  title: string;
  price: string;
  included: string[];
  for: string;
};

interface refProps {
    priceRef?: React.RefObject<HTMLDivElement | null>;
}

const paketInfo: Package[] = paketData;

export const PrisInfo: React.FC<refProps>= ( {priceRef}) => {
  const [openStates, setOpenStates] = useState([false, false, false]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  const toggleOpen = (index: number) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  useEffect(() => {
     const handleResize = () => {
  setIsMobile(window.innerWidth < 768);
  };

  handleResize(); 
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
  })

  return (
    <section className="flex flex-col gap-10 laptop:gap-20 desktop:max-w-[1300px] desktop:mx-auto " ref={priceRef}>
      <div className="flex flex-col gap-8">
        <h3 className="font-collab text-4xl desktop:text-[40px]">
          Välj det paket som passar dig
        </h3>
        <h4 className="font-c-body text-xl tablet:max-w-[600px]">
          Stort eller litet – varje paket är byggt med omsorg.{" "}
          <span className="font-medium">Du</span> väljer nivån,{" "}
          <span className="font-medium">vi </span>
          ser till att känslan och resultatet levererar.
        </h4>
      </div>
      <div className="flex flex-col ">
        {paketInfo.map((paket, index) => (
          <div
            key={index}
            className={`grid grid-cols-[auto_1fr] tablet:grid-cols-12 ${
              index === paketInfo.length - 1
                ? "border-y"
                : index === 0
                ? ""
                : "border-t"
            } border-dotted`}
          >
            {/* Siffra */}
            <div
              className={`${
                index === 0 && "border-t border-dotted"
              } flex flex-col items-center justify-center gap-4 col-span-1 row-span-2 tablet:col-start-1 tablet:col-end-3 tablet:row-span-1`}
            >
              <div className={` ${ isMobile && index === 0 ? "bg-collab-whitegreen" : isMobile && index === 1 ? "bg-collab-lightgreen" : isMobile && "bg-collab-mediumgreen"} tablet:border self-center border-dotted rounded-full h-[150px] w-[150px] tablet:h-[100px] tablet:w-[100px] laptop:h-[150px] laptop:w-[150px] flex items-center justify-center text-[30px] tablet:text-[40px] laptop:text-[60px] font-collab `}>
               {isMobile ? paket.title : index + 1 }
              </div>
              <h3 className="hidden tablet:block laptop:hidden text-center font-collab text-2xl laptop:text-4xl">
                {paket.title}
              </h3>
            </div>

            {/* Titel och pris */}
            <div
              className={`${
                index === 0 && "border-t border-dotted"
              } flex flex-col gap-2 col-span-1 tablet:col-start-3 tablet:col-end-5 pl-4 pt-4 tablet:p-0 tablet:items-center laptop:items-start justify-center`}
            >
              <h3 className="hidden laptop:block font-collab text-2xl laptop:text-4xl">
                {paket.title}
              </h3>
                 <p className="tablet:hidden text-xs italic">{paket.for}</p>
            </div>

            {/* Vad som ingår-knapp */}
            <div
              className={` ${
                index === 0 && "tablet:border-t border-dotted"
              } flex flex-col col-span-1 tablet:col-start-5 tablet:col-end-10   pl-6 tablet:pl-0`}
            >
              <button
                onClick={() => toggleOpen(index)}
                className="flex gap-2 items-center cursor-pointer pt-1 tablet:hidden"
              >
                <p className="underline decoration-dotted underline-offset-6 text-sm">
                  Vad som ingår:
                </p>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openStates[index] ? "rotate-180" : ""
                  }`}
                />
              </button>
              <ul className="py-6 text-sm col-span-full hidden tablet:flex px-6 flex-col">
                {paket.included.map((item, i) => (
                  <li key={i} className="list-disc ml-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pris (desktop only) */}
            <div
              className={`hidden tablet:flex justify-between flex-col rounded-tr-[50px] gap-4 ${
                index === 0
                  ? "bg-collab-lightgreen text-warm-black"
                  : index === 1
                  ? "bg-collab-mediumgreen text-warm-black"
                  : "bg-collab-green text-warm-white"
              } p-6 col-span-1 tablet:col-start-10 tablet:col-end-13 `}
            >
              <div className="hidden tablet:flex flex-col gap-4">
                {paket.for}
              </div>
              <p className="text-xl self-end">{paket.price}</p>
            </div>

            {/* Lista – visas under allt i mobil/tablet */}
            {openStates[index] && (
              <ul className="p-6 text-sm col-span-full laptop:hidden col-span-1 flex flex-col">
                {paket.included.map((item, i) => (
                  <li key={i} className="list-disc ml-4">
                    {item}
                  </li>
                ))}
                <h4 className="tablet:hidden bg-collab-beige rounded-2xl w-fit p-2 px-4 self-end mt-6">
                  {paket.price}
                </h4>
              </ul>
            )}
          </div>
        ))}
        <div className="flex flex-col gap-6 p-6 py-10 mt-8 bg-collab-beige rounded-4xl">
          <h3 className="font-collab text-xl laptop:text-3xl">Tillägg:</h3>
          <ul className="list-disc px-6">
            <li>Guide och mall (fotografering)</li>
            <li>Filter</li>
            <li>Copy (t.ex. Rubrik- och budskapsformulering)</li>
            <li>Prenumerationsmail - mall / design</li>
            <li>Webbhotell & mail-setup</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
