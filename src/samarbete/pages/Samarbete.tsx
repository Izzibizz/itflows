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

  return (
    <section className="animate-fadeIn flex flex-col">
      <SamarbetsHero priceRef={priceRef} overviewRef={overviewRef} />
      <SamarbetsOverview overviewRef={overviewRef} />
 <div className= "h-full w-full laptop:h-[500px] self-end overflow-hidden">
<video src="https://res.cloudinary.com/dlp85vjwx/video/upload/v1749560309/ovanifr%C3%A5n.moodboarding_q03zmu.mp4" muted autoPlay playsInline loop className="rounded-4xl w-full h-full object-cover"/>
</div>
      <SamarbeteWhyComp kontaktRef={kontaktRef} style="pt-30" />
      <PrisInfo style="pt-30" priceRef={priceRef} />
      <KontaktaOssComp kontaktRef={kontaktRef} style="pt-28 laptop:pt-40 " />
    </section>
  );
};
