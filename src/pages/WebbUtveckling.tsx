import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"
import { MovingCircle } from "../components/MovingCircle"

export const WebbUtveckling: React.FC = () => {

    
    const { setIsLandingPage } = useCollabStore()
  
    useEffect(() => {
      setIsLandingPage(false)
    },[])

  return (
      <section className="animate-fadeIn flex flex-col gap-14 laptop:gap-18 ">
        <div className=" h-[50vh] laptop:h-[60vh] w-full flex justify-center items-center flex flex-col relative z-20 uppercase ">
          <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-[60px] laptop:text-[50px] text-dark-blue text-center">Webbutveckling</h1>
        <h2 className="font-bold text-3xl tablet:text-4xl laptop:text-[40px] text-center text-warm-white animate-longFadeIn">För dig som vill ha mer<br/> än en mall.</h2>
        </div>
        </div>
        <MovingCircle/>
        <div className="laptop:w-2/3 flex flex-col gap-2">
          <h3 className="font-header text-dark-blue text-3xl "><span className="font-bold text-4xl">Oändliga</span> möjligheter och full kontroll</h3>
          <p className="text-justify ">När du arbetar med en webbyrå som använder kod får du tillgång till en obegränsad mängd möjligheter. Med drag-and-drop verktyg är du alltid begränsad till vad mallarna erbjuder, vilket kan göra att din webbplats känns generisk, standardiserad och inte särskilt kreativ. Genom att koda hemsidan kan vi skapa exakt det du har i åtanke – utan några begränsningar. Oavsett om du har en väldigt specifik designidé eller om du vill implementera en komplex funktionalitet, kan vi lösa det utan att kompromissa. Allt kan byggas från grunden, vilket gör att vi kan skapa en unik webbplats som verkligen reflekterar ditt varumärke. Vi skapar något unikt som skiljer sig från mängden och verkligen fångar användarens uppmärksamhet.</p>
        </div>
        <div className="laptop:w-3/4 laptop:self-end  flex flex-col gap-2 ">
          <h3 className="font-header text-dark-blue text-3xl tablet:text-end ">Hur man <span className="font-bold text-4xl">ändrar</span> eller lägger upp nytt innehåll?</h3>
          <p className="text-justify ">En annan stor fördel med att arbeta med kod är att vi kan bygga en administrativ backend som passar just din hemsida och dina behov. Med hjälp av ett användarvänligt admin-system kan du själv enkelt uppdatera och lägga till innehåll utan att behöva röra vid designen. Du slipper sitta och justera layouten för varje nytt inlägg eller uppdatering. När vi arbetar tillsammans skapar vi en layout som passar din webbplats och därefter kan du lägga upp nytt innehåll på ett enkelt och snabbt sätt med bara några klick. Ditt nya innehåll följer designen automatiskt. Du slipper få huvudvärk och sparar tid - vilket gör att uppdateringar av hemsidan är lättare att få gjorda.</p>
        </div>
        <div className="laptop:w-1/2  flex flex-col gap-2">
          <h3 className="font-header text-dark-blue text-3xl">Din kodade hemsida kan <span className="font-bold text-4xl">enkelt växa</span> med dig</h3>
          <p className="text-justify ">En hemsida byggd med kod är mer skalbar och kan växa tillsammans med ditt företag. När du använder drag-and-drop plattformar är du ofta låst till de funktioner som finns tillgängliga och om din verksamhet växer och dina behov förändras kan du behöva byta plattform. Med en kodad lösning kan vi lägga till nya funktioner och göra förbättringar i takt med att ditt företag växer.</p>
        </div>
      </section>
  )
}


