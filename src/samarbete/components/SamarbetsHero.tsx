import { useState, useEffect } from "react"
import { Testimonial } from "../../components/Testimonial";
import testimonials from "../../data/samarbetsTestimonials.json";

type RefProps = {
  overviewRef: React.RefObject<HTMLDivElement | null>;
  priceRef: React.RefObject<HTMLDivElement | null>;
};

export const SamarbetsHero: React.FC<RefProps> = ({ overviewRef, priceRef }) => {
  const [ isTablet, setIsTablet ] = useState(window.innerWidth >= 768 && window.innerWidth <1024)

  const scrolltoOverview = () => {
    if (isTablet) {
      priceRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
    overviewRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };


  useEffect(() => {
   const handleResize = () => {
  setIsTablet(window.innerWidth >= 768 && window.innerWidth <1024);
  };

  handleResize(); // Run once
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
  }, [isTablet])

  return (
    <section className="flex flex-col-reverse tablet:min-h-[40vh] laptop:min-h-[70vh] laptop:flex-row items-stretch gap-6 laptop:gap-24 tablet:pb-20 border-b-2 border-collab-lightgreen border-dotted">
      <Testimonial
        testimonial={testimonials[0]}
        style={
          "tablet:hidden self-end mt-10 bg-collab-beige rounded-br-none rounded-tr-[120px] laptop:rounded-tr-[150px]"
        }
      />
      <div className="relative tablet:hidden">
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747730179/itflows-studio-mamama_vikw63.jpg"
          alt="itflows studio mamama"
          className="self-end mt-24 laptop:mt-0 object-right object-cover aspect-[3/4] rounded-4xl"
        />
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748596040/f%C3%B6retag-font_akkegj.svg"
          alt="text ditt företag förtjänar det"
          className="w-[200px] absolute top-0 right-0"
        />
      </div>
              <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747730179/itflows-studio-mamama_vikw63.jpg"
          alt="itflows studio mamama"
          className="hidden laptop:block self-end laptop:self-start laptop:max-w-1/3 mt-24 laptop:mt-0 object-right object-cover aspect-[3/4] rounded-4xl"
        />
      <div className="flex flex-col tablet:flex-row tablet:gap-6 laptop:gap-40 laptop:flex-col w-full">
        <div className="flex flex-col gap-6  laptop:mt-10 relative">
          <h2 className="font-collab text-4xl tablet:text-[50px] laptop:text-[60px]">
            Ett helhetskoncept
          </h2>
          <h3 className="text-c-body text-lg laptop:max-w-2/3">
            Vi hjälper dig att hitta ditt visuella uttryck – genom skräddarsydd
            webbdesign och fotografering som speglar din vision.
          </h3>
          <button
            className="bg-collab-green text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-c-body tablet:text-base cursor-pointer shadow-lg hover:scale-110 hover:bg-collab-red hover:text-warm-white"
            onClick={() => scrolltoOverview()}
          >
           {isTablet ? "Se våra paket" : "Redo? Så här går det till"}
          </button>
          <img
            src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748596040/f%C3%B6retag-font_akkegj.svg"
            alt="text ditt företag förtjänar det"
            className="w-[250px] hidden tablet:block desktop:right-40 desktop:bottom-[-10%] absolute bottom-[-10%] laptop:bottom-[-20%] right-0"
          />
        </div>

        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747730179/itflows-studio-mamama_vikw63.jpg"
          alt="studio mamama itflows"
          className="hidden tablet:block laptop:hidden self-end w-1/3 object-right object-cover aspect-[3/4] rounded-4xl"
        />
  <a href="https://lightbodyyoga.se" target="_blank" rel="noopener noreferrer" className="flex flex-col">
        <Testimonial
          testimonial={testimonials[0]}
          style={
            "hidden laptop:flex bg-collab-beige rounded-br-none rounded-tr-[120px] desktop:max-w-[600px] self-end"
          }
        />
        </a>
      </div>
    </section>
  );
};
