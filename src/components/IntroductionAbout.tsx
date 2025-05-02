import { useNavigate } from "react-router-dom";

export const IntroductionAbout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="w-10/12 laptop:w-9/12 mx-auto py-30 laptop:pb-48 flex flex-col laptop:flex-row  justify-between">
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746171778/izabel-lind-farnstrand-webbyra-itflows_hmjwea.webp"
          className="laptop:w-1/3 max-w-[600px]"
        />
        <div className="flex flex-col laptop:items-end laptop:justify-end">
          <h3 className="font-header text-2xl tablet:text-4xl laptop:text-[35px] text-stone-700 mb-4">
            Om itFlows
          </h3>
          <div  className="laptop:w-8/12  text-justify font-body">
          <p>
            itFlows är en webbyrå i Stockholm som skapar skräddarsydda, visuellt
            starka och strategiskt genomtänkta helhetslösningar för företag och
            varumärken. Vi bygger inte bara hemsidor – vi formar identiteter,
            kommunikation och digitala upplevelser som sticker ut och håller
            över tid.
          </p>
          <p>
            Bakom itFlows står utvecklare, designer och konstnär Izabel Lind.
            Med en unik kombination av teknisk kompetens och konstnärlig
            expertis erbjuder vi branding, webbdesign, illustrationer och
            logotyper av hög kvalitet. Projekten genomförs i samarbete med
            noggrant utvalda fotografer och externa specialister, för att skapa
            en stark visuell helhet som lyfter varje kunds vision.
          </p>
          </div>
          <button
            className="bg-dark-blue self-center tablet:self-end p-3 px-6 rounded-full w-fit h-fit text-sm cursor-pointer shadow-lg text-white font-body hover:scale-110"
            onClick={() => navigate("/om-oss")}
          >
            Läs mer
          </button>
        </div>
      </div>
    </section>
  );
};
