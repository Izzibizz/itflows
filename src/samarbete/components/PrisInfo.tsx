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
  style?: string;
}

const paketInfo: Package[] = paketData;

export const PrisInfo: React.FC<refProps> = ({ priceRef, style }) => {
  const [openStates, setOpenStates] = useState([false, false, false]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
  });

  return (
    <section
      className={`flex flex-col gap-10 laptop:gap-20 desktop:max-w-[1300px] desktop:mx-auto ${style}`}
      ref={priceRef}
    >
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
              } flex flex-col items-center justify-center gap-4 col-span-1 row-span-2 tablet:col-start-1 tablet:col-end-3 tablet:row-span-1 py-4 tablet:py-0`}
            >
              <div
                className={` ${
                  isMobile && index === 0
                    ? "bg-collab-whitegreen"
                    : isMobile && index === 1
                    ? "bg-collab-lightgreen"
                    : isMobile && "bg-collab-mediumgreen"
                } tablet:border self-center border-dotted rounded-full h-[120px] w-[120px] tablet:h-[100px] tablet:w-[100px] laptop:h-[150px] laptop:w-[150px] flex items-center justify-center text-[30px] tablet:text-[40px] laptop:text-[60px] font-collab `}
              >
                {isMobile ? paket.title : index + 1}
              </div>
              <h3 className="hidden tablet:block laptop:hidden text-center font-collab text-2xl laptop:text-4xl">
                {paket.title}
              </h3>
            </div>

            {/* Titel och pris */}
            <div
              className={`${
                index === 0 && "border-t border-dotted"
              } flex flex-col gap-2 col-span-1 tablet:col-start-3 tablet:col-end-3 laptop:col-end-5 pl-4 pt-4 tablet:p-0 tablet:items-center laptop:items-start justify-center`}
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
              } flex flex-col col-span-1 tablet:col-start-4 laptop:col-start-5 tablet:col-end-10   pl-6 tablet:pl-0`}
            >
              <button
                onClick={() => toggleOpen(index)}
                className="flex gap-2 items-center cursor-pointer pt-1 tablet:hidden"
              >
                <p className="underline decoration-dotted underline-offset-6 text-sm">
                  Pris & innehåll
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
              <div className="hidden tablet:flex font-c-body text-lg flex-col gap-4">
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
           <img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748850530/G%C3%B6r-mer_fqq6jb.svg" alt="gör mer av din satsning" className="w-9/12 self-end mt-14 max-w-[300px]" />
        <div className=" flex flex-col gap-6 p-6 py-10 bg-collab-beige rounded-4xl">
          <h3 className="font-collab text-3xl laptop:text-4xl pl-6">Tillval:</h3>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
          <ul className="list-disc px-6">
            <h4 className="font-collab text-xl underline decoration-dotted underline-offset-6 pb-2">Extra material</h4>
            <li>
              Produktfoton Premium - fota alla era produkter (i studio / miljö)
            </li>
            <li>Promofilm - behind the scenes eller introduktion</li>
             <li>Köp loss alla foton från fotograferingen</li>
          </ul>
          <ul className="list-disc px-6">
            <h4 className="font-collab text-xl  underline decoration-dotted underline-offset-6 pb-2">Sociala medier</h4>
            <li>Lanseringsstrategi Premium (idéer & struktur)</li>
            <li>
              Guide för egen produktion av bilder/material av hög kvalitet i
              samma stil
            </li>
            <li>
              Sociala medie-kit: profilbild, omslagsbild, post- och
              storiesmallar
            </li>
            <li>Filter till sociala medier</li>
          </ul>
          <ul className="list-disc px-6">
            <h4 className="font-collab text-xl  underline decoration-dotted underline-offset-6 pb-2">Identitet: Copy och tryck</h4>
            <li>
              Brand book: sammanfattning av färger, typsnitt, logotypanvändning
            </li>
            <li>Tryckmaterial marknadsföring - t.ex. flyers eller affischer</li>
            <li>
              Copywriting: professionell text för hemsidan, kampanjer eller
              annonser
            </li>
          </ul>
          <ul className="list-disc px-6">
            <h4 className="font-collab text-xl  underline decoration-dotted underline-offset-6 pb-2">Mail</h4>
            <li>Extra support med mail-setup av profesionell mail</li>
            <li>Prenumeration mailutskick - mall / design</li>
            <li>E-postsignaturer: designade enligt varumärket</li>
            </ul>
               <ul className="list-disc px-6">
                <h4 className="font-collab text-xl  underline decoration-dotted underline-offset-6 pb-2">Uppdatering</h4>
            <li>
              Uppdateringspaket: Köp till uppdateringar av hemsidan vid ett
              senare tillfälle
            </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
