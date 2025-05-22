import { useEffect, useState } from "react";
import { useCollabStore } from "../stores/useCollabStore";
import { ServiceComp } from "../components/ServiceComp";
import { BookingCTAComp } from "../components/BookingCTAComp";

export const WebbUtveckling: React.FC = () => {
  const { setIsLandingPage } = useCollabStore();
  const [isSmallScreen, setisSmallScreen] = useState(
    window.innerWidth >= 678 && window.innerWidth < 1280
  );

  useEffect(() => {
    setIsLandingPage(false);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setisSmallScreen(window.innerWidth >= 678 && window.innerWidth < 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="animate-fadeIn flex flex-col gap-14 laptop:gap-18 font-body">
      <ServiceComp
        circleColors=" rgb(255, 246, 226), rgb(250, 183, 152), rgb(238, 142, 113), rgb(255, 111, 106))"
        textColor="text-dark-blue"
        imageMobile="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746715599/webbutveckling-mobile_uyldkc.svg"
        imageLaptop="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746716002/webbutveckling-laptop_w3xpyg.svg"
      />
      <div
        className={`flex flex-col ${
          isSmallScreen ? "flex-col" : "laptop:flex-row"
        } gap-10 `}
      >
        <img
          src={
            isSmallScreen
              ? "https://res.cloudinary.com/dlp85vjwx/image/upload/v1747911291/coding-2_kfmlrb.png"
              : "https://res.cloudinary.com/dlp85vjwx/image/upload/v1747910755/coding_i2pun4.jpg"
          }
          className={`${
            isSmallScreen ? "w-full" : "laptop:w-1/3 aspect-[4/3] "
          } object-cover`}
        />
        <BookingCTAComp />
      </div>
    </section>
  );
};
