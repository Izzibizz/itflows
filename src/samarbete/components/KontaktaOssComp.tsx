import { useState, useEffect } from "react";
import { GoMail } from "react-icons/go";

interface RefProps {
  kontaktRef?: React.RefObject<HTMLDivElement | null>;
  style?: string;
}

export const KontaktaOssComp: React.FC<RefProps> = ({ kontaktRef, style }) => {
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={` ${style} flex flex-col laptop:flex-row tablet:justify-between laptop:w-10/12 mx-auto gap-6`}
      ref={kontaktRef}
    >
      <div className="flex flex-col gap-4 max-w-[600px]">
        <h3 className="font-collab text-3xl laptop:text-4xl">Säg hej!</h3>
        <h4 className="font-c-collab text-lg">
          Har du frågor, idéer eller vill veta mer om våra paket? Hör av dig –
          vi lyssnar gärna, bollar tankar och hjälper dig ta nästa steg med ditt
          varumärke.
        </h4>
        <div className="flex gap-4 laptop:gap-10">
          <div className="flex items-end gap-10 bg-collab-green laptop:bg-warm-white p-6 laptop:p-0 text-warm-white w-fit laptop:text-warm-black rounded-4xl">
            <a
              href="mailto:info@itflows.se?subject=Bokning konsultation&body=Hej, jag skulle vilja boka en första konsultation. Namn: företag: telefonnummer:"
               aria-label="Email me at info@itflows.se"
              className="relative w-fit flex gap-2 items-center after:content-[''] after:block after:w-0 after:h-[1px] after:bg-stone-500 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full text-xl font-c-body"
            >
              {" "}
              <GoMail />
              info@itflows.se
            </a>
          </div>
          <img
            src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748867553/pil-3_g674kd.svg"
            alt="pil"
            className="h-[60px] max-w-[100px]"
          />
        </div>
      </div>
{isLaptop ? (
  <>
      <img
        src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748867774/ser-fram-emot_cvwksy.svg"
        alt="vi ser fram emot att höra från dig"
        className="w-[300px] self-end"
      />
      <img
        src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748855949/BellaEmma-1000_fbpc4k.png"
        alt="emma och Izabel"
        className="rounded-4xl laptop:max-h-[650px]"
      />
      </>
) : (
  <>
        <img
        src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748855949/BellaEmma-1000_fbpc4k.png"
        alt="emma och Izabel"
        className="rounded-4xl laptop:max-h-[650px]"
      />
        <img
        src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748868376/vi-ser-fram-emot_w8zug0.svg"
        alt="vi ser fram emot att höra från dig"
        className="w-[230px] self-center"
      />

  </>

)}
    </section>
  );
};
