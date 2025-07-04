import { useEffect } from "react";
import { useCollabStore } from "../stores/useCollabStore";
import { ServiceComp } from "../components/ServiceComp";
import { BookingCTAComp } from "../components/BookingCTAComp";

export const WebbUtveckling: React.FC = () => {
  const { setIsLandingPage } = useCollabStore();

  useEffect(() => {
    setIsLandingPage(false);
  }, []);

  return (
    <section className="animate-fadeIn flex flex-col gap-14 laptop:gap-18 font-body">
      <ServiceComp
        circleColors=" rgb(255, 246, 226), rgb(250, 183, 152), rgb(238, 142, 113), rgb(255, 111, 106))"
        textColor="text-dark-blue"
        imageMobile="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746715599/webbutveckling-mobile_uyldkc.svg"
        imageLaptop="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746716002/webbutveckling-laptop_w3xpyg.svg"
      />
      <BookingCTAComp
        horizontalImage="https://res.cloudinary.com/dlp85vjwx/image/upload/t_w-500/v1749718445/izabel-lind-itflows_ohxovz.webp"
        image="https://res.cloudinary.com/dlp85vjwx/image/upload/t_w-500/v1749718445/izabel-lind-itflows_ohxovz.webp"
      />
    </section>
  );
};
