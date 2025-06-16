import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

interface RefProps {
  kontaktRef?: React.RefObject<HTMLDivElement | null>;
  style?: string;
}

export const SamarbeteWhyComp: React.FC<RefProps> = ({ kontaktRef, style }) => {
  const [isSmallScreen, setisSmallScreen] = useState(window.innerWidth < 1024);
  const [isEndpoint, setIsEndpoint] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const scrollToKontakt = () => {
    if (kontaktRef) kontaktRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      setisSmallScreen(window.innerWidth < 1024);
    };

    handleResize(); // Run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (currentPath === "/samarbete/om-oss") {
      setIsEndpoint(true);
    }
  }, [currentPath]);

  return (
    <section
      className={`${style} flex flex-col gap-10 pb-20 border-b-2 border-dotted border-collab-lightgreen`}
    >
      <div
        className={`flex flex-col ${
          isEndpoint ? "desktop:flex-row-reverse" : "desktop:flex-row"
        } justify-between gap-10`}
      >
        <div className="flex flex-col gap-6 desktop:w-1/3 desktop:max-w-[700px]">
          <h3 className="font-collab text-4xl desktop:text-[40px]">
            Därför vill du jobba med oss
          </h3>
          <p className="text-justify">
            Vi skapar{" "}
            <span className="font-semibold">
              helhets&shy;lösningar som känns – på riktigt
            </span>
            . Vi vet hur det känns att ha en vision, men{" "}
            <span className="italic">
              inte riktigt veta hur man ska ta den hela vägen
            </span>
            . Många företagare står där – med en idé, en produkt eller en dröm –
            men utan en tydlig bild av hur allt ska{" "}
            <span className="font-semibold">
              se ut, kännas eller kommuniceras
            </span>
            . Och vi vet hur svårt det kan vara att förklara det för någon
            annan.
          </p>
          <p className="text-justify">
            Vi tror på{" "}
            <span className="font-semibold">kraften i visuellt uttryck</span>.
            På att rätt bilder gör hela skillnaden. Att en genomtänkt helhet
            inte bara imponerar – den skapar förtroende och väcker känslor. Och
            det är precis där du vinner dina kunder.
          </p>
          <img
            src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748600883/skra_sruapb.svg"
            alt="text, vi skrattar, skapar och levererar med hög kvalitet"
            className="w-9/12 mt-10 self-end tablet:hidden"
          />
          <h4 className="font-collab text-3xl desktop:text-[30px] pt-6">
            Från barndomsvänner till kreativa partners
          </h4>
          <p className="text-justify">
            Vi, <span className="font-semibold">Emma och Izabel</span>, har känt
            varandra sedan vi var små. Vi har samarbetat i allt från
            danstävlingar och skolprojekt till filmidéer – och nu, företag. Vi
            är båda <span className="italic">kreativa själar med entreprenörsdriv</span>, och vi älskar att
            skapa tillsammans.
          </p>
          <p className="text-justify">
            Tillsammans har vi en <span className="font-semibold">tydlig vision, ett brinnande driv och en stor
            dos humor</span>. Vi lyfter varandra, spånar snabbt, bygger stort – och har
            alltid kul på vägen. Men vi tar både dig, ditt varumärke och våra
            leveranser på största allvar.
          </p>
          <p className="text-justify">
            Hos oss får du inte bara en snygg yta – du får en <span className="font-semibold">riktning</span>, en
            <span className="font-semibold"> känsla</span> och ett team som lyssnar och lyfter fram det som gör just din
            verksamhet unik. Och vi lovar: <span className="italic">det blir både roligt, inspirerande
            och riktigt, riktigt bra</span>.
          </p>
          {!isEndpoint && (
            <div className="flex gap-6">
              <button
                className="bg-red-beige text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-c-body tablet:text-base cursor-pointer shadow-lg hover:scale-110 hover:bg-warm-white hover:text-dark-red"
                onClick={() => navigate("/samarbete/studio-mamama/om-oss")}
              >
                Läs mer
              </button>
              <button
                className="bg-red-beige text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-c-body tablet:text-base cursor-pointer shadow-lg hover:scale-110 hover:bg-warm-white hover:text-dark-red"
                onClick={() => scrollToKontakt()}
              >
                Kontakta oss
              </button>
            </div>
          )}
        </div>
        <div className="relative flex w-full h-[700px] tablet:h-[1500px] desktop:w-2/3 desktop:h-1/2 desktop:max-w-[900px] py-40 laptop:py-0 laptop:px-40">
          <img
            src={
              isSmallScreen
                ? "https://res.cloudinary.com/dlp85vjwx/image/upload/v1748596043/utvecklaren-font_xgxmg6.svg"
                : "https://res.cloudinary.com/dlp85vjwx/image/upload/v1748597389/utv.izabe.font_yvn0q5.svg"
            }
            alt="Izabel utvecklare"
            className={`${
              isSmallScreen
                ? "bottom-10 left-10 w-[180px] tablet:w-[250px]"
                : "bottom-20 left-[-10px]  w-[250px]"
            } absolute `}
          />
          <img
            src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748273899/it-flows-studio-mamama_rg2i7h.jpg"
            alt="izabel och emma"
            className="object-cover w-full h-full aspect-[3/4] rounded-4xl"
          />
          <img
            src={
              isSmallScreen
                ? "https://res.cloudinary.com/dlp85vjwx/image/upload/v1748596047/emma-font_d0tax5.svg"
                : "https://res.cloudinary.com/dlp85vjwx/image/upload/v1748597385/fotograf-emma-font_scpm9m.svg"
            }
            alt="Emma fotograf"
            className={`${
              isSmallScreen
                ? "top-20 right-14  w-[230px] tablet:w-[300px]"
                : "right-[-10px] top-30  w-[280px]  "
            } absolute `}
          />
        </div>
      </div>
    </section>
  );
};
