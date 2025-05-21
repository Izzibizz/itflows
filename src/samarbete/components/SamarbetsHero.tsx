
import { Testimonial } from "../../components/Testimonial";
import testimonials from "../../data/samarbetsTestimonials.json";

type RefProps = {
  overviewRef: React.RefObject<HTMLDivElement | null>; 
};

export const SamarbetsHero: React.FC<RefProps> = ({overviewRef}) => {
  
  const scrolltoOverview = () => {
     overviewRef.current?.scrollIntoView({ behavior: "smooth" });
  }



  return (
    <section className="flex flex-col-reverse laptop:flex-row items-stretch gap-10 laptop:gap-26">
      <Testimonial
        testimonial={testimonials[0]}
        style={
          "laptop:hidden self-end bg-collab-beige rounded-br-none rounded-tr-[120px]"
        }
      />
      <img
        src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747730179/itflows-studio-mamama_vikw63.jpg"
        className="laptop:w-1/3 object-right object-cover aspect-[3/4]"
      />
      <div className="flex flex-col laptop:min-h-[600px]">
        <div className="flex flex-col gap-6 laptop:mt-10">
          <h2 className="font-collab text-4xl laptop:text-[60px]">
            Ett helhetskoncept
          </h2>
          <h3 className="text-c-body text-lg desktop:max-w-[700px] ">
            Vi hjälper dig att hitta ditt visuella uttryck – genom skräddarsydd
            webbdesign och fotografering som speglar din vision.
          </h3>
          <button
            className="bg-collab-green text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-c-body tablet:text-base cursor-pointer shadow-lg hover:scale-110 hover:bg-warm-white hover:text-dark-red"
            onClick={() => scrolltoOverview()}
          >
            Mer om erbjudandet
          </button>
        </div>
        <Testimonial
          testimonial={testimonials[0]}
          style={
            "hidden laptop:flex mt-auto self-end bg-collab-beige rounded-br-none rounded-tr-[120px] desktop:max-w-10/12"
          }
        />
      </div>
    </section>
  );
};
