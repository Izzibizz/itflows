import { Testimonial } from "../../components/Testimonial";
import testimonials from "../../data/samarbetsTestimonials.json";

type RefProps = {
  overviewRef: React.RefObject<HTMLDivElement | null>;
};

export const SamarbetsHero: React.FC<RefProps> = ({ overviewRef }) => {
  const scrolltoOverview = () => {
    overviewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col-reverse laptop:flex-row items-stretch gap-6 laptop:gap-26">
      <Testimonial
        testimonial={testimonials[0]}
        style={
          "tablet:hidden self-end bg-collab-beige rounded-br-none rounded-tr-[120px]"
        }
      />
      <div className="relative tablet:hidden">
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747730179/itflows-studio-mamama_vikw63.jpg"
          alt="itflows studio mamama"
          className="self-end laptop:self-start laptop:w-1/3  mt-24 laptop:mt-0 object-right object-cover aspect-[3/4]"
        />
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748440267/ditt_f%C3%B6retag-f-mobile_l6binc.svg"
          alt="text ditt företag förtjänar det"
          className="w-[200px] laptop:hidden absolute top-0 right-0"
        />
      </div>
      <div className="flex flex-col tablet:flex-row tablet:gap-6 laptop:gap-0 laptop:flex-col laptop:min-h-[600px]">
        <div className="flex flex-col gap-6 laptop:mt-10 relative">
          <h2 className="font-collab text-4xl laptop:text-[60px]">
            Ett helhetskoncept
          </h2>
          <h3 className="text-c-body text-lg desktop:max-w-[700px] ">
            Vi hjälper dig att hitta ditt visuella uttryck – genom skräddarsydd
            webbdesign och fotografering som speglar din vision.
          </h3>
          <button
            className="bg-collab-green text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-c-body tablet:text-base cursor-pointer shadow-lg hover:scale-110 hover:bg-collab-red hover:text-warm-white"
            onClick={() => scrolltoOverview()}
          >
            Mer om erbjudandet
          </button>
          <img
            src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748440267/ditt_f%C3%B6retag-f-mobile_l6binc.svg"
            alt="text ditt företag förtjänar det"
            className="w-[250px] hidden laptop:block desktop:right-20 absolute top-3/4 right-0"
          />
        </div>

        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747730179/itflows-studio-mamama_vikw63.jpg"
          alt="studio mamama itflows"
          className="hidden tablet:block laptop:hidden self-end w-1/3 object-right object-cover aspect-[3/4]"
        />

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
