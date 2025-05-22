import { useNavigate } from "react-router-dom" 
import { useEffect } from "react";
import { useCollabStore } from "../stores/useCollabStore";
import { ServiceComp } from "../components/ServiceComp";
import { BookingCTAComp } from "../components/BookingCTAComp";

export const HelhetsKoncept: React.FC = () => {
  
  const navigate = useNavigate() 

  const { setIsLandingPage } = useCollabStore();

  useEffect(() => {
    setIsLandingPage(false);
  }, []);

  return (
    <section className="animate-fadeIn flex flex-col gap-20 laptop:gap-42">
      <ServiceComp
        circleColors=" rgb(255, 246, 226), rgb(208, 218, 229), rgb(172, 189, 204), rgb(76, 98, 125))"
        textColor="text-dark-blue"
        imageMobile="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746789469/helhetkoncept-mobile-st%C3%B6rre_um1u3q.svg"
        imageLaptop="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746792943/helhetskoncept-laptop-1_etv6ay.svg"
      />
      <div className="grid laptop:grid-cols-2 gap-10 laptop:gap-20 z-20">
      <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746791026/it-flows-studio-mamama-test-intro-2_sqgga8.jpg"
          className="hidden tablet:block laptop:w-2/3"
        />
        <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
        <h3 className="font-wide tracking-wide text-3xl laptop:text-4xl">
          Lär känna Studio Mamama
        </h3>
        <p className="text-justify font-body">
          itFlows samarbetar med fotograf Emma Vistrand på Studio Mamama, för
          att garantera ett proffsigt resultat där foton är sammanhängande med
          design.
        </p>
        <p className="text-justify font-body">
          Emma är en fantastisk fotograf som är omtalad för att få sina kunder att
          känna sig bekväma och ha roligt framför kameran. Samarbetet har vuxit
          fram ur en lång vänskap, och ett gemensamt intresse för det kreativa
          skapandet och att bygga en vision från grunden.
        </p></div>
        <div className="flex flex-col gap-2">
        <h4 className="font-header text-xl">Vårt mål är att <span className="font-wide text-2xl">höja</span> dig och ditt företag</h4>
        <p className="font-body text-justify">Vårt gemensamma mål är att skapa det bästa möjliga resultatet – där varje steg i processen genomsyras av förståelse för dig, ditt företag och dina behov. Vi tror att ett starkt samarbete bygger på lyhördhet, kreativitet och förtroende. Vår vision är att hjälpa dig lyfta ditt varumärke till nya höjder – och att du ska känna dig både stolt och nöjd med slutresultatet.</p>
        <button className="mt-6 bg-red-beige text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-body  tablet:text-xl cursor-pointer shadow-lg hover:scale-110  hover:bg-light-beige hover:text-dark-red" onClick={() => navigate("/samarbete/studio-mamama")}>
        Ta del av erbjudandet</button>
        </div>
        </div>
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746791026/it-flows-studio-mamama-test-intro-2_sqgga8.jpg"
          className="tablet:hidden"
        />

      </div>
      <BookingCTAComp />
    </section>
  );
};
