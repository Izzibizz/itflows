
import { useNavigate } from "react-router-dom"

export const BookingCTAComp: React.FC = () => {
    const navigate = useNavigate()

  return (
    <section className={` bg-red-beige h-fit  py-14 px-6 tablet:py-20 tablet:px-10 text-warm-white flex flex-col tablet:flex-row gap-6 z-20`}>
      <div className="flex flex-col gap-1 tablet:w-1/2">
      <h3 className="font-header text-2xl  tablet:text-3xl underline decoration-dotted decoration-1 tablet:decoration-2 underline-offset-4">Boka tid för konsultation</h3>
      <h4 className="font-header text-lg tablet:text-xl tablet:w-10/12">Konsultationen är kostnadsfri och det kan vara ditt första steg mot hemsidan du längtat efter.</h4>
      <button className="flex mt-4 bg-warm-white text-dark-red p-3 px-6 rounded-full w-fit h-fit text-sm font-body tablet:text-xl cursor-pointer shadow-lg hover:scale-110  hover:text-dark-blue" onClick={() => navigate("/kontakt")}>Boka nu</button>
      </div>
      <p className="font-body text-lg text-justify tablet:w-1/2">Att ta tag i något som gnagt länge kan kännas stort, men det behöver inte vara det. En kort konsultation på 20 minuter är ett enkelt och kravlöst sätt att ta tempen, ställa dina frågor och känna efter om vi är rätt för dig. Ingen press – bara ett samtal där vi lyssnar in dina behov och berättar vad vi kan erbjuda. Ibland är det just den lilla starten som leder till något stort.</p>
    </section>
  )
}
