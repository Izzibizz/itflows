import { useState, useEffect } from "react";
import { useCollabStore } from "../stores/useCollabStore";
import { DiscountCard } from "../components/DiscountCard";

export const Erbjudanden: React.FC = () => {
  const { setIsLandingPage } = useCollabStore();

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1025);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1025);
    };

    handleResize(); // Run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSmallScreen]);

  useEffect(() => {
    setIsLandingPage(false);
  }, []);

  return (
    <section className=" animate-fadeIn">
      <h1 className="font-header text-dark-blue text-4xl">Erbjudanden</h1>
      <img
        src={
          isSmallScreen
            ? "https://res.cloudinary.com/dlp85vjwx/image/upload/v1749650980/7f51c925d33b8486d6360239e7e9adaf_nieqbw.jpg"
            : "https://res.cloudinary.com/dlp85vjwx/image/upload/v1749651296/bild-erbjudande_vng4vi.png"
        }
        alt="grass"
        className="w-full laptop:w-1/2 object-cover"
      />
      <DiscountCard />
    </section>
  );
};
