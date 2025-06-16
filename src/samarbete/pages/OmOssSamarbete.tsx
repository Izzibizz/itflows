import { useState, useEffect } from "react";
import { SamarbeteWhyComp } from "../components/SamarbeteWhyComp";

export const OmOssSamarbete: React.FC = () => {
  const [isLaptop, setIsLaptop] = useState(window.innerWidth > 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth > 1024);
    };

    handleResize(); // Run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLaptop]);

  return (
    <section className=" animate-fadeIn flex flex-col gap-10 laptop:gap-28">
      <div className="flex flex-col gap-6 laptop:gap-20 laptop:flex-row justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="font-collab text-4xl desktop:text-[40px]">
            Vilka är vi?
          </h2>
          <p className="text-justify">
            Vi heter <span className="font-semibold">Izabel och Emma</span> – vänner sedan barnsben och idag <span className="italic">kreativa
            samarbets&shy;partners</span> med gemensam vision och massor av driv. Efter
            många års vänskap, projekt och idéer har vi landat i det <span className="font-semibold">vi älskar
            mest</span>: att hjälpa andra <span className="italic">synas, kännas och nå fram</span>.
          </p>
          <p className="hidden laptop:block text-justify">
            Hos oss får du <span className="font-semibold">inte bara ett uppdrag utfört</span> – du får <span className="italic">två engagerade
            hjärtan</span>, massa skratt och ett samarbete som <span className="font-semibold">känns mer</span> som ett
            riktigt roligt projekt än ett “jobb”. <span className="font-semibold">För när vi har kul, blir
            resultatet som bäst</span>. Och det smittar av sig.
          </p>
          <div className="flex flex-col gap-10 laptop:mt-10">
            <img
              src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748872716/har-kul_wrc5jy.svg"
              alt="Vi levererar projekt med hjärta"
              className="max-w-[300px] tablet:max-w-[380px]"
            />
            <img
              src={
                isLaptop
                  ? "https://res.cloudinary.com/dlp85vjwx/image/upload/v1748873080/med-hj%C3%A4rta_hbiuje.svg"
                  : "https://res.cloudinary.com/dlp85vjwx/image/upload/v1748873354/levererar-med-hj%C3%A4rtat-mobil_vmstur.svg"
              }
              alt="Vi levererar projekt med hjärta"
              className="max-w-[200px] tablet:max-w-[300px] self-end"
            />
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748868999/emma-iza-utomhus_yvhoyx.png"
          alt="Emma och Izabel"
          className="laptop:w-1/2 object-cover rounded-4xl"
        />
        <p className="laptop:hidden text-justify">
          Hos oss får du inte bara ett uppdrag utfört – du får två engagerade
          hjärtan, massa skratt och ett samarbete som känns mer som ett riktigt
          roligt projekt än ett “jobb”. För när vi har kul, blir resultatet som
          bäst. Och det smittar av sig.
        </p>
      </div>
      <div className="grid tablet:grid-cols-2 desktop:grid-cols-4 gap-10 bg-collab-beige p-6 tablet:p-10 rounded-4xl">
            <div className="flex flex-col laptop:max-w-[300px] ">
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748857775/it-flows-studio-mamama-3_dim3z2.jpg"
          alt="emma"
          className="w-full rounded-4xl"
        />
            <a href="https://studiomamama.se" target="_blank" rel="noopener noreferrer" className="self-end">
            <img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1744875557/logga-studio-mamama_va4bfr.svg" alt="logga Emma Studio Mamama" className="w-[120px] "/>
            </a>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h3 className="font-collab text-2xl">Emma</h3>
            <h4 className="font-c-boy text-lg">Fotograf & Content creator</h4>
          </div>
          <div className="flex flex-col gap-4">
            <p className="laptop:max-w-[400px]">
              Emma är en <span className="font-semibold">passionerad content creator</span> och utbildad <span className="font-semibold">fotograf</span> med
              över 10 års erfarenhet bakom kameran. Emma är expert på att skapa
              <span className="italic">trygg stämning framför kameran</span> – och det syns i resultatet.
              Bilderna känns levande, äkta och fulla av <span className="italic">din energi</span>.
            </p>
            <p>
              Med ett öga för både känsla och strategi jobbar hon med  <span className="font-semibold">visuell
              kommunikation</span>,  <span className="font-semibold">marknads&shy;föring</span> och  <span className="font-semibold">innehålls&shy;planering</span>.
            </p>
          
          </div>
        </div>
        <div className="flex flex-col gap-4  laptop:max-w-[300px] ">
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748857781/it-flows_jgajmx.jpg"
          alt="emma"
          className="w-full rounded-4xl"
        />
      
        <a href="https://itflows.se" target="_blank" rel="noopener noreferrer"  className="self-end">
          <img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1744875992/itflows-logo-green_lb3upj.svg" alt="logga Izabel itFlows" className="w-[90px]"/>
          </a>
          </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h3 className="font-collab text-2xl">Izabel</h3>
            <h4 className="font-c-boy text-lg">Designer & Utvecklare</h4>
          </div>
          <p className="laptop:max-w-[400px]">
            Izabel är <span className="font-semibold">konstnär</span> i grunden med en <span className="font-semibold">master i Fri Konst</span> på Kungliga
            Konsthögskolan. Efter en Frontend-utbildning applicerar hon nu sin
            kreativitet på <span className="italic">genomtänkta system</span> och <span className="italic">visuell teknik</span> – genom att koda
            användarvänliga, snygga och intuitiva hemsidor från grunden.
            </p>
            <p><span className="italic">Med en stark känsla för estetik</span> skapar
            hon allt från <span className="font-semibold">webbdesign</span> och <span className="font-semibold">illustrationer</span> till <span className="font-semibold">grafisk design</span> till t.ex. tryckmaterial.
          </p>
          
        </div>
      </div>

      <SamarbeteWhyComp />
    </section>
  );
};
