import { useEffect, useState } from "react";

export const DiscountCard: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1025);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1025);
    };

    handleResize(); // Run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSmallScreen]);

  return (
    <div>
      <img
        src={
          isSmallScreen
            ? "https://res.cloudinary.com/dlp85vjwx/image/upload/v1749650980/7f51c925d33b8486d6360239e7e9adaf_nieqbw.jpg"
            : "https://res.cloudinary.com/dlp85vjwx/image/upload/v1749651296/bild-erbjudande_vng4vi.png"
        }
        alt="grass"
        className="w-full laptop:w-1/2 object-cover"
      />
     <div className="flex items-center gap-2">
        <h3 className="font-bold text-warm-black text-[40px] laptop:text-[70px]">Just nu </h3><div className="h-1 bg-warm-black w-[50px] laptop:h-2 laptop:w-[100px]"/><h3  className="font-bold text-warm-black text-[40px] laptop:text-[70px]"> 25% rabatt</h3>
      </div>
    </div>
  );
};
