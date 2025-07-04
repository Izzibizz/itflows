import { useEffect, useState } from "react"
import { MdOutlineArrowOutward } from "react-icons/md";
import { useCollabStore } from "../stores/useCollabStore"
import { ContactForm } from "../components/ContactForm"

export const Kontakt: React.FC = () => {
  const [ isMobile, setIsMobile ] = useState(window.innerWidth < 768)
  const { setIsLandingPage } = useCollabStore()
  
  useEffect(() => {
    setIsLandingPage(false)
  },[])

useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  
  return (
    <section className="laptop:mt-20 animate-longFadeIn flex flex-col laptop:flex-row gap-10 laptop:gap-26">
      <div className="flex flex-col gap-4 laptop:w-1/2 max-w-[500px]">
      <h1 className="font-header text-dark-blue text-4xl">Kontakt</h1>
      <h2 className="font-header text-xl">Vill du ha hjälp med en hemsida?
      </h2>
      <p className="text-justify mb-10 tablet:mb-0">Du är varmt välkommen att höra av dig direkt via mejl eller Instagram om du har frågor eller bara vill bolla idéer. Fyll annars i formuläret nedan för att få bästa möjliga estimering direkt.</p>
        { isMobile && (
      <ContactForm/>
      )}
      <div  className="laptop:w-8/12  text-xl text-justify font-body flex flex-col gap-4 mt-8" 
       >
          <a href="mailto:izabel@itflows.se"   className="relative w-fit flex gap-2 items-center after:content-[''] after:block after:w-0 after:h-[1px] after:bg-stone-500 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                     > <MdOutlineArrowOutward />
          Mail
          </a>
          <a href="https://www.instagram.com/itflows.se/" rel="noopener noreferrer" target="_blank" className="relative w-fit flex gap-2 items-center after:content-[''] after:block after:w-0 after:h-[1px] after:bg-stone-500 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                     > <MdOutlineArrowOutward />
          Instagram
          </a>
        
          </div>
      </div>
      { !isMobile && (
      <ContactForm/>
      )}
    </section>
  )
}


