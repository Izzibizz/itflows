import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCollabStore } from "../stores/useCollabStore";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

export const OmOss: React.FC = () => {
  const { setIsLandingPage } = useCollabStore();
  const navigate = useNavigate()

  const text3Ref = useRef(null);
  const text3IsInView = useInView(text3Ref, { once: true });
  

  useEffect(() => {
    setIsLandingPage(false);
  }, []);

  return (
    <section className=" animate-fadeIn">
      <h1 className="font-header text-dark-blue text-4xl laptop:text-[50px]">
        Om{" "}
      </h1>
      <img
        src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1745912964/itflows-logo-blue_r6ce5a.svg"
        className="w-full laptop:w-10/12"
      />
      <div className="py-20 flex flex-col gap-18 laptop:gap-28">
        <div className="laptop:w-2/3 flex flex-col gap-3">
          <h2 className="font-header text-4xl">
            Allt från design till utveckling
          </h2>
          <p className="font-body text-justify">
            itFlows är en webbyrå i Stockholm som skapar skräddarsydda, visuellt
            starka och strategiskt genomtänkta helhetslösningar för företag och
            varumärken. Vi bygger inte bara hemsidor – vi formar identiteter,
            kommunikation och digitala upplevelser som sticker ut och håller
            över tid. Bakom itFlows står utvecklare, designer och konstnär
            Izabel Lind med backning av konsulter. Med en unik kombination av
            teknisk kompetens och konstnärlig expertis erbjuder vi branding,
            webbdesign, illustrationer och logotyper av hög kvalitet. Projekten
            genomförs i samarbete med noggrant utvalda fotografer och externa
            specialister, för att skapa en stark visuell helhet som lyfter varje
            kunds vision.
          </p>
        </div>
        <div className="self-end laptop:w-1/2 text-end flex flex-col gap-3">
          {" "}
          <h2 className="font-header text-4xl">Hur det började</h2>
          <p className="font-body text-justify ">
            itFlows startades ur en insikt: att många företag kämpar med att
            hitta rätt uttryck för sin vision. Ofta finns idéerna där – om vilka
            de är, vad de vill och hur de vill uppfattas – men det är svårt att
            formulera det i ord, bild och struktur. Att skapa en hemsida som
            faktiskt speglar verksamheten kräver mer än bara tekniska verktyg.
            Många vänder sig till drag-and-drop-plattformar, men fastnar ändå i
            designbeslut, mallar som inte riktigt passar och en känsla av att
            det aldrig riktigt blir som man tänkt sig. Resultatet blir ibland en
            väldigt grundlösning. Ibland blir det inget alls. itFlows växte fram
            som ett svar på detta behov. Vi tror på helhetstänk: att en hemsida
            ska vara både funktionell och kännas genomtänkt – från tonalitet och
            färger till bildval och struktur. Att ta in expertis gör skillnad,
            och det märks, både i känslan och i resultatet. En tydlig och
            professionell närvaro stärker varumärket och kan i förlängningen
            skapa en mer lönsam verksamhet.
          </p>
        </div>
        <div className=" laptop:w-10/12 flex flex-col laptop:flex-row gap-3 laptop:gap-10" ref={text3Ref}>
        <img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746194309/izabel-lind-farnstrand-webbyra-itflows-grudnare_wj1zn0.webp" className="laptop:w-1/3 object-cover"/>
        <div className="flex flex-col gap-3">
          <h2 className="font-header text-4xl">Personerna bakom itFlows</h2>
          <p className="font-body text-justify">
            Grundaren Izabel Lind är konstnär, designer och webbutvecklare med
            lång erfarenhet av att skapa hemsidor och ännu längre av visuell
            formgivning. Med en stark känsla för estetik, struktur och
            användarupplevelse skapar hon digitala lösningar som är både
            funktionella och visuellt genomtänkta. Izabel har ett genuint
            intresse för att förstå varje kunds behov och vision, och formger
            helt unika lösningar för varje projekt. Vid behov tar hon in externa
            konsulter, och samarbetar nära med fotograf Emma Vistrand på <span className="font-semibold">Studio
            Mamama.</span> Tillsammans kan de erbjuda fotografier, allt från porträtt
            och produktbilder till miljöbilder, som matchar hemsidans uttryck i
            stil och kvalitet. Det gör att itFlows kan leverera helhetskoncept
            där design, innehåll och teknik går hand i hand. En investering som
            ger ditt företag en starkare digital närvaro och ett professionellt
            första intryck.
          </p>
          <motion.button
             initial={{ opacity: 0 }}
             animate={text3IsInView ? { opacity: 1} : {}}
             transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
             className="text-lg w-fit font-header relative flex gap-2 items-center 
             after:content-[''] after:block after:h-[1px] after:bg-stone-500 after:absolute after:left-0 after:bottom-0 
             after:w-full 
             laptop:after:w-0 laptop:hover:after:w-full 
             after:transition-all after:duration-300 cursor-pointer"
              onClick={() => navigate("/samarbete")}
            >
              Läs mer om samarbetet
              <HiOutlineArrowSmallRight />
              </motion.button>
              </div>
        </div>
      </div>
    </section>
  );
};
