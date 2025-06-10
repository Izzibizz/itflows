
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

interface imageProps {
  horizontalImage: string;
  image: string;
  isHelhetskoncept?: boolean;
}

export const BookingCTAComp: React.FC<imageProps> = ({horizontalImage, image, isHelhetskoncept}) => {
    const [isSmallScreen, setisSmallScreen ] = useState(window.innerWidth >= 678 && window.innerWidth < 1280)
    const navigate = useNavigate()

    useEffect(() => {
  const handleResize = () => {
    setisSmallScreen(window.innerWidth >= 678 && window.innerWidth < 1280);
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <section className={`flex flex-col desktop:flex-row desktop:max-h-[400px]`}>
      {isHelhetskoncept ? (
        <div className= "h-full aspect-[4/3] tablet:aspect-[16/9] desktop:aspect-[9/16] desktop:h-[400px] desktop:w-full overflow-hidden">
<video src="https://res.cloudinary.com/dlp85vjwx/video/upload/v1749555739/emma-izabel-itflows-studio-mamama-helhetsl%C3%B6sningar_ogjchs.mp4" muted autoPlay playsInline loop className="laptop:rounded-l-4xl laptop:rounded-t-none rounded-t-4xl w-full h-full object-cover"/>
</div>
      ) : (
      <img src={ isSmallScreen ? horizontalImage : image } className={`${isSmallScreen ? "w-full" : "laptop:w-1/3 laptop:rounded-l-4xl laptop:rounded-t-none"} rounded-t-4xl object-cover aspect-[4/3] tablet:aspect-[16/9] desktop:aspect-[4/3]`}/>
      )}
    <div className={` bg-red-beige py-14 px-6 tablet:py-20 tablet:px-10 laptop:px-20 text-warm-white flex flex-col tablet:flex-row gap-6 z-20 rounded-b-4xl desktop:rounded-bl-none desktop:rounded-r-4xl`}>
      <div className="flex flex-col gap-1 tablet:w-1/2">
      <h3 className="font-header text-2xl  tablet:text-3xl underline decoration-dotted decoration-1 tablet:decoration-2 underline-offset-4">Boka tid för gratis konsultation</h3>
      <h4 className="font-header text-lg tablet:text-xl tablet:w-10/12">Konsultationen är kostnadsfri och det kan vara ditt första steg mot hemsidan du längtat efter.</h4>
      <button className="flex mt-4 bg-warm-white text-dark-red p-3 px-6 rounded-full w-fit h-fit font-body tablet:text-xl cursor-pointer shadow-lg hover:scale-110  hover:text-dark-blue" onClick={() => navigate("/kontakt")}>Boka nu</button>
      </div>
      <p className="font-body text-lg text-justify tablet:w-1/2">Att ta tag i något som gnagt länge kan kännas stort, men det behöver inte vara det. En kort konsultation på 20 minuter är ett enkelt och kravlöst sätt att ta tempen, ställa dina frågor och känna efter om vi är rätt för dig. Ingen press – bara ett samtal där vi lyssnar in dina behov och berättar vad vi kan erbjuda. Ibland är det just den lilla starten som leder till något stort.</p>
   </div>
    </section>
  )
}
