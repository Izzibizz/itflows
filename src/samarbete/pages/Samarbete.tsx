import { useRef } from "react";
import { SamarbetsHero } from "../components/SamarbetsHero";
import { SamarbetsOverview } from "../components/SamarbetsOverview";
import { SamarbeteWhyComp } from "../components/SamarbeteWhyComp";
import { PrisInfo } from "../components/PrisInfo";
import { KontaktaOssComp } from "../components/KontaktaOssComp";

export const Samarbete: React.FC = () => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const kontaktRef = useRef<HTMLDivElement>(null);

  const scrolltoPrisLista = () => {
    priceRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="animate-fadeIn flex flex-col">
      <SamarbetsHero priceRef={priceRef} overviewRef={overviewRef} />
      <SamarbetsOverview
        overviewRef={overviewRef}
        scrolltoPrisLista={scrolltoPrisLista}
      />
      <div className="flex flex-col gap-4">
                <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1749631095/nyfiken_yg89xf.svg"
          alt="nyfiken på att veta mer?"
          className="w-[350px]"
        />
        <button
          className=" laptop:hidden bg-collab-green text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-c-body tablet:text-base cursor-pointer shadow-lg hover:scale-110 hover:bg-collab-red hover:text-warm-white"
          onClick={() => scrolltoPrisLista()}
        >
          Se våra prispaket
        </button>
        <div className="h-full w-full laptop:h-[500px] self-end overflow-hidden">
          <video
            src="https://res.cloudinary.com/dlp85vjwx/video/upload/v1749560309/ovanifr%C3%A5n.moodboarding_q03zmu.mp4"
            muted
            autoPlay
            playsInline
            loop
            className="rounded-4xl w-full h-full object-cover"
          />
        </div>
      </div>
      <SamarbeteWhyComp kontaktRef={kontaktRef} style="pt-30" />
      <PrisInfo style="pt-30" priceRef={priceRef} />
      <KontaktaOssComp kontaktRef={kontaktRef} style="pt-28 laptop:pt-40 " />
    </section>
  );
};
