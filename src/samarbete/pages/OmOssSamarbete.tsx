import { useState, useEffect } from "react";
import { SamarbeteWhyComp } from "../components/SamarbeteWhyComp";

export const OmOssSamarbete: React.FC = () => {
  const [isLaptop, setIsLaptop] = useState(window.innerWidth > 1024);

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
            Vi heter Izabel och Emma – vänner sedan barnsben och idag kreativa
            samarbets&shy;partners med gemensam vision och massor av driv. Efter
            många års vänskap, projekt och idéer har vi landat i det vi älskar
            mest: att hjälpa andra synas, kännas och nå fram.
          </p>
          <p className="hidden laptop:flex text-justify">
            Hos oss får du inte bara ett uppdrag utfört – du får två engagerade
            hjärtan, massa skratt och ett samarbete som känns mer som ett
            riktigt roligt projekt än ett “jobb”. För när vi har kul, blir
            resultatet som bäst. Och det smittar av sig.
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
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748857775/it-flows-studio-mamama-3_dim3z2.jpg"
          alt="emma"
          className="w-full laptop:max-w-[300px] rounded-4xl"
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h3 className="font-collab text-2xl">Emma</h3>
            <h4 className="font-c-boy text-lg">Fotograf & Content creator</h4>
          </div>
          <div className="flex flex-col gap-4">
            <p className="laptop:max-w-[400px]">
              Emma är en passionerad content creator och utbildad fotograf med
              över 10 års erfarenhet bakom kameran. Emma är expert på att skapa
              trygg stämning framför kameran – och det syns i resultatet.
              Bilderna känns levande, äkta och fulla av din energi.
            </p>
            <p>
              Med ett öga för både känsla och strategi jobbar hon med visuell
              kommunikation, marknads&shy;föring och innehålls&shy;planering.
            </p>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748857781/it-flows_jgajmx.jpg"
          alt="emma"
          className="w-full laptop:max-w-[300px] rounded-4xl"
        />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h3 className="font-collab text-2xl">Izabel</h3>
            <h4 className="font-c-boy text-lg">Designer & Utvecklare</h4>
          </div>
          <p className="laptop:max-w-[400px]">
            Izabel är konstnär i grunden med en master i Fri Konst på Kungliga
            Konsthögskolan. Efter en Frontend-utbildning applicerar hon nu sin
            kreativitet på genomtänkta system och visuell teknik – genom att koda
            användarvänliga, snygga och intuitiva hemsidor från grunden.
            </p>
            <p>Med en stark känsla för estetik skapar
            hon allt från webbdesign och illustrationer till grafisk design till t.ex. tryckmaterial.
          </p>
        </div>
      </div>

      <SamarbeteWhyComp />
    </section>
  );
};
