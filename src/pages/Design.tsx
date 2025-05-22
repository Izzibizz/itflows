import { useEffect, useState } from "react"
import { useCollabStore } from "../stores/useCollabStore"
import { ServiceComp } from "../components/ServiceComp"
import { BookingCTAComp } from "../components/BookingCTAComp"

export const Design: React.FC = () => {
  
  const { setIsLandingPage } = useCollabStore()
   const [isSmallScreen, setisSmallScreen ] = useState(window.innerWidth >= 678 && window.innerWidth < 1280)

  useEffect(() => {
    setIsLandingPage(false)
  },[])

  useEffect(() => {
  const handleResize = () => {
    setisSmallScreen(window.innerWidth >= 678 && window.innerWidth < 1280);
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
  
    return (
      <section className="animate-fadeIn ">
     <ServiceComp circleColors= " rgb(255, 246, 226), rgb(163, 184, 213), rgb(159, 154, 189), rgb(101, 136, 184))" textColor="text-stone-700" imageMobile="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746778099/design-mobile_tajesa.svg" imageLaptop="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746778097/design-laptop_taecem.svg" />
      <div className={`flex flex-col ${isSmallScreen? "flex-col" : "laptop:flex-row"} gap-10 `}>
      <img src={ isSmallScreen ? " https://res.cloudinary.com/dlp85vjwx/image/upload/v1747910808/branding-workspace-1_xyr0ai.png" : " https://res.cloudinary.com/dlp85vjwx/image/upload/v1747910808/branding-workspace-1_xyr0ai.png"} className={`${isSmallScreen ? "w-full" : "laptop:w-1/3"} object-cover`}/>
      <BookingCTAComp/>
      </div>
      </section>
    )
  }
 