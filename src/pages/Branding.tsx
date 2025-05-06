import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"
import { MovingCircle } from "../components/MovingCircle"

export const Branding: React.FC = () => {

  const { setIsLandingPage } = useCollabStore()

  useEffect(() => {
    setIsLandingPage(false)
  },[])
  

    return ( 
      <section className="animate-fadeIn  flex flex-col gap-14 laptop:gap-18 font-body">
        <div className=" h-[50vh] laptop:h-[60vh] w-full flex justify-center items-center flex flex-col relative z-20 uppercase ">
          <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-[70px] laptop:text-[60px] text-center text-dark-blue">Branding</h1>
        <h2 className="font-bold text-4xl laptop:text-[40px] text-center text-warm-white animate-longFadeIn ">Bli ett företag folk minns<br className="hidden tablet:block"/> - inte bara scrollar förbi.<br className=" tablet:hidden"/></h2>
        </div>
        </div>
        <MovingCircle/>
        <div className="laptop:w-2/3 flex flex-col gap-2">
          <h3 className="font-header text-dark-blue text-3xl "><span className="font-bold text-4xl ">Därför</span> är branding avgörande för ditt företags framgång</h3>
          <p className="text-justify ">Att satsa på branding är inte bara en visuell investering – det är en strategisk grundpelare som påverkar hur ditt företag uppfattas, vilka kunder du når och hur starkt du står i konkurrensen. Ditt varumärke är det första intrycket, det visuella språket, men också känslan och igenkänningen som gör att någon minns dig – eller glömmer dig. I en värld där flödet aldrig stannar och nya produkter och tjänster lanseras dagligen, är det inte tillräckligt att bara finnas. Om din kommunikation eller design ser ut som alla andras, riskerar du att smälta in och förbli osynlig – oavsett hur bra din tjänst faktiskt är. Branding hjälper dig att positionera dig, hitta en tydlig ton och ett formspråk som gör att du känns igen och kommer ihåg. Branding är inte ett fluffigt tillval – det är en investering i långsiktig tillväxt.</p>
        </div>
        <div className="laptop:w-3/4 laptop:self-end  flex flex-col gap-2 ">
          <h3 className="font-header text-dark-blue text-3xl tablet:text-end ">Du vet vad du gör – men <span className="font-bold text-4xl">vet dina kunder</span>  det?</h3>
          <p className="text-justify ">Det är vanligt att företag har en inre känsla av sin verksamhet men har svårt att kommunicera det utåt på ett konsekvent sätt. Här spelar branding en avgörande roll. När vi jobbar tillsammans hjälper vi dig att konkretisera dina tankar. Vi ställer rätt frågor, speglar dina idéer och formulerar det som du kanske inte lyckats sätta ord på. En stark varumärkesplattform skapar klarhet – både för dig och för dina kunder.</p>
        </div>
        <div className="laptop:w-1/2  flex flex-col gap-2">
          <h3 className="font-header text-dark-blue text-3xl">Branding <span className="font-bold text-4xl">håller ihop</span> allt – från logotyp till inlägg</h3>
          <p className="text-justify ">En hemsida byggd med kod är mer skalbar och kan växa tillsammans med ditt företag. När du använder drag-and-drop plattformar är du ofta låst till de funktioner som finns tillgängliga och om din verksamhet växer och dina behov förändras kan du behöva byta plattform. Med en kodad lösning kan vi lägga till nya funktioner och göra förbättringar i takt med att ditt företag växer.</p>
        </div>
        <div className="laptop:w-1/2  flex flex-col gap-2">
          <h3 className="font-header text-dark-blue text-3xl">Professionellt intryck bygger <span className="font-bold text-4xl">förtroende</span></h3>
          <p className="text-justify ">Kunder väljer inte alltid den billigaste eller mest påträngande lösningen – de väljer den de litar på. Ett professionellt och genomarbetat varumärke signalerar seriositet och kompetens. När du ser ut att ha koll, tror man att du har det. Det är så du vinner förtroende innan ett enda ord har sagts – och det är förtroende som konverterar till affärer.</p>
        </div>
        <div className="laptop:w-1/2  flex flex-col gap-2">
          <h3 className="font-header text-dark-blue text-3xl"> Det krävs mod för att vara <span className="font-bold text-4xl">tydlig</span> – och det lönar sig</h3>
          <p className="text-justify ">Många företag vågar inte smalna av, ta ställning eller lyfta fram vad som verkligen gör dem unika. Men ju tydligare du är med din identitet, desto lättare blir det för rätt kunder att hitta dig. Branding hjälper dig att definiera den riktningen – vilka värden du står för, vad du vill signalera och hur du skiljer dig från mängden. Och när det görs rätt, kommer det också att kännas naturligt och självklart för dina kunder.</p>
        </div>
        <div className="laptop:w-1/2  flex flex-col gap-2">
          <h3 className="font-header text-dark-blue text-3xl">Du behöver inte ha alla svar – det är därför vi finns</h3>
          <p className="text-justify ">Det är lätt att fastna i sitt eget perspektiv och svårt att se sitt varumärke utifrån. Därför är det ofta avgörande att ta in hjälp utifrån. Vi hjälper dig att reda i tankarna: Vad är det du egentligen erbjuder? Vad är du inte erbjuder? Vem är din målgrupp – på riktigt? Vilka konkurrenter har du, och hur positionerar de sig? Med tydlig analys och erfarenhet som stöd, formar vi en strategi och ett uttryck som känns äkta och effektivt.</p>
        </div>
      </section>
    )
  }
  