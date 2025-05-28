import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"

export const SamarbeteWhyComp = () => {
  const [ isSmallScreen, setisSmallScreen ] = useState(window.innerWidth < 1024)
  const navigate = useNavigate();

  useEffect(() => {
 const handleResize = () => {
  setisSmallScreen(window.innerWidth < 1024);
  };

  handleResize(); // Run once
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <section className="py-30 flex flex-col gap-10">
      <div className="flex flex-col desktop:flex-row justify-between gap-10">
        <div className="flex flex-col gap-6 desktop:w-1/3 desktop:max-w-[600px]">
          <h3 className="font-collab text-4xl desktop:text-[40px]">
            Därför vill du jobba med oss
          </h3>
          <p className="text-justify">
            Vi skapar helhetslösningar som känns – på riktigt. Vi vet hur det
            känns att ha en vision, men inte riktigt veta hur man ska ta den
            hela vägen. Många företagare står där – med en idé, en produkt eller
            en dröm – men utan en tydlig bild av hur allt ska se ut, kännas
            eller kommuniceras. Och vi vet hur svårt det kan vara att förklara
            det för någon annan.
          </p>
          <p className="text-justify">
            Vi tror på kraften i visuellt uttryck. På att rätt bilder gör hela
            skillnaden. Att en genomtänkt helhet inte bara imponerar – den
            skapar förtroende och väcker känslor. Och det är precis där du
            vinner dina kunder.
          </p>
          <h4 className="font-collab text-3xl desktop:text-[30px] pt-6">
            Från barndomsvänner till kreativa partners
          </h4>
          <p className="text-justify">
            Vi, Emma och Izabel, har känt varandra sedan vi var små och har
            samarbetat i olika projekt genom hela livet – från danstävlingar och
            skolprojekt till filmidéer och nu inom företagsvärlden. Vi är båda
            kreativa skapare med ett starkt entreprenörskap som driver oss
            framåt. Tillsammans delar vi en tydlig vision och ett brinnande
            driv, och vårt samarbete är både inspirerande och effektivt. Vi har
            roligt på vägen samtidigt som vi tar både varandra och våra
            produkter på största allvar.
          </p>
          <p className="text-justify">
            Hos oss får du inte bara en snygg yta – du får en riktning, en
            känsla och ett team som lyssnar och lyfter fram det som gör just din
            verksamhet unik. Och vi lovar: det blir både roligt, inspirerande
            och riktigt, riktigt bra.
          </p>
          <button
            className="bg-red-beige text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-c-body tablet:text-base cursor-pointer shadow-lg hover:scale-110 hover:bg-warm-white hover:text-dark-red"
            onClick={() => navigate("/samarbete/om-oss")}
          >
           Läs mer
          </button>
        </div>
        <div className="relative flex w-full h-[700px] tablet:h-[900px] desktop:w-2/3 desktop:max-w-[900px] py-40 laptop:py-0 laptop:px-40">
          <img src={ isSmallScreen ? "https://res.cloudinary.com/dlp85vjwx/image/upload/v1748440767/utveckl.iz-mobil_ln8afv.svg" : "https://res.cloudinary.com/dlp85vjwx/image/upload/v1748438132/utvecklaren_Izabel_czjxxy.svg"} alt="Izabel utvecklare" className={`${ isSmallScreen ? "bottom-0 left-20" : "bottom-20 left-[-10px]" } w-[200px] absolute `}/>
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748273899/it-flows-studio-mamama_rg2i7h.jpg"
          className="object-cover w-full"
        />
         <img src={ isSmallScreen ? "https://res.cloudinary.com/dlp85vjwx/image/upload/v1748441375/emma-mbil_btcg1i.svg" : "https://res.cloudinary.com/dlp85vjwx/image/upload/v1748439022/fotografen-emma_t3bzso.svg"} alt="Emma fotograf" className={`${ isSmallScreen ? "top-0 right-20  w-[200px] " : "right-[-10px] top-30  w-[280px]  "}absolute `}/>
        </div>
      </div>
    </section>
  );
};
