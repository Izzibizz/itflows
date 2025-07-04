import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"

import { ServiceComp } from "../components/ServiceComp"
import { BookingCTAComp } from "../components/BookingCTAComp"

export const Branding: React.FC = () => {


  const { setIsLandingPage } = useCollabStore()

  useEffect(() => {
    setIsLandingPage(false)
  },[])
  


    return ( 
      <section className="animate-fadeIn  flex flex-col gap-14 laptop:gap-18 font-body">
      <ServiceComp circleColors=" rgb(255, 246, 226), rgb(247, 220, 199), rgb(251, 177, 130), rgb(255, 148, 106))" textColor="text-dark-blue" imageMobile="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746714108/branding-mobile1_mqk3ut.svg" imageLaptop="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746712625/branding-laptop_m18sdv.svg"/>
      <BookingCTAComp horizontalImage="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747852720/dator-itflows-webbutveckling-izabel-lind-3_p6kuxh.png" image="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747852072/dator-itflows-webbutveckling-izabel-lind_pxw9he.png"/>
      </section>
    )
  }
