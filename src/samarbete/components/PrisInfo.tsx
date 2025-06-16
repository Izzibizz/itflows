import { useState, useEffect } from "react";
import paketData from "../../data/prislista.json";
import additions from "../../data/additions.json";

type Package = {
  title: string;
  price: string;
  included: string[];
  for: string;
};

type Additions = {
  category: string;
  items: string[];
};

interface refProps {
  priceRef?: React.RefObject<HTMLDivElement | null>;
  style?: string;
}

const paketInfo: Package[] = paketData;
const extraServices: Additions[] = additions;

export const PrisInfo: React.FC<refProps> = ({ priceRef, style }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
      className={`flex flex-col gap-10 ${style} laptop:w-10/12 mx-auto`}
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
      <div className="flex flex-col gap-4 laptop:gap-6 tablet:grid tablet:grid-cols-3">
        {paketInfo.map((paket, index) => (
          <div
            key={index}
            className={`grid mx-auto grid-cols-[auto_1fr] border rounded-xl border-dotted max-w-[400px] laptop:max-w-[450px]
        tablet:grid-cols-1 tablet:grid-rows-[auto_auto_1fr_auto] gap-y-4 laptop:gap-0  laptop:grid-rows-[auto_1fr_auto]`}
          >
            {/* Siffra och titel */}
            <div className="flex items-center justify-center gap-4 p-4 row-span-1">
              <div
                className={`${
                  index === 0
                    ? "bg-collab-whitegreen"
                    : index === 1
                    ? "bg-collab-lightgreen"
                    : "bg-collab-mediumgreen"
                } self-center aspect-square rounded-full h-[120px] w-[120px] laptop:h-[100px] laptop:w-[100px] tablet:h-[120px] tablet:w-[120px] flex items-center justify-center text-[30px] tablet:text-[50px] laptop:text-[40px] font-collab`}
              >
                {isMobile ? paket.title : index + 1}
              </div>
              <div className="tablet:hidden laptop:block flex flex-col gap-4 px-4 tablet:items-center laptop:items-start justify-center">
                <h3 className="hidden laptop:block font-collab text-2xl laptop:text-4xl">
                  {paket.title}
                </h3>
                <p className="text-xs italic">{paket.for}</p>
              </div>
            </div>
            <div className="hidden tablet:block laptop:hidden flex flex-col row-span-1 gap-4 px-4 tablet:items-center laptop:items-start justify-center">
              <h3 className="font-collab text-4xl">{paket.title}</h3>
              <p className="text-xs italic">{paket.for}</p>
            </div>

            {/* Lista */}
            <ul
              className="p-4 laptop:p-6 laptop:pl-8 text-sm col-span-full flex flex-col row-span-2 reak-words 
             [word-break:break-word] 
             [overflow-wrap:break-word] "
            >
              {paket.included.map((item, i) => (
                <li key={i} className="list-disc ml-4 word-break">
                  {item}
                </li>
              ))}
            </ul>

            {/* Pris */}
            <div className="row-span-1 h-fit p-4 flex justify-end flex gap-2 laptop:gap-3">
              <a
                href={`mailto:info@itflows.se?subject=Bokning konsultation - ${paket.title}paketet&body=Hej, jag skulle vilja boka en första konsultation för ${paket.title}paketet. Namn: företag: telefonnummer:`}
                aria-label="Email me at info@itflows.se"
                className="flex gap-2 items-center font-light"
              >
                <button className="rounded-4xl w-fit p-2 px-4 border border-dotted cursor-pointer">
                  Boka
                </button>
              </a>
              <h4 className="bg-warm-beige rounded-4xl w-fit p-2 px-4">
                {paket.price}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className=" flex flex-col gap-6 p-6 py-10 bg-collab-beige rounded-4xl">
          <h3 className="font-collab text-3xl laptop:text-4xl pl-6">
            Tillval:
          </h3>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
            {extraServices.map((section, index) => (
              <ul key={index} className="list-disc px-6">
                <h4 className="font-collab text-xl underline decoration-dotted underline-offset-6 pb-2">
                  {section.category}
                </h4>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1749626710/G%C3%B6r-mer-nedanf%C3%B6r_agqere.svg"
          alt="gör mer av din satsning"
          className="w-9/12 self-end max-w-[300px]"
        />
      </div>
    </section>
  );
};
