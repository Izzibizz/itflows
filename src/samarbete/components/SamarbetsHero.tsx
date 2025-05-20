import { useNavigate } from "react-router-dom";
import { Testimonial } from "../../components/Testimonial";
import testimonials from "../../data/testimonials.json";

export const SamarbetsHero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col-reverse laptop:flex-row gap-10 laptop:gap-26">
      <Testimonial
        testimonial={testimonials[0]}
        style={
          "laptop:hidden self-end bg-collab-beige rounded-br-none rounded-tr-[120px]"
        }
      />
      <img
        src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747730179/itflows-studio-mamama_vikw63.jpg"
        className="laptop:w-1/3"
      />
      <div className="flex flex-col">
        <div className="flex flex-col gap-6 laptop:mt-10">
          <h2 className="font-collab text-4xl laptop:text-[60px]">
            Ett helhetskoncept
          </h2>
          <h3 className="text-c-body text-lg laptop:w-1/2 ">
            Vi hjälper dig att hitta ditt visuella uttryck – genom skräddarsydd
            webbdesign och fotografering som speglar din vision.
          </h3>
          <button
            className="bg-collab-green text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-c-body tablet:text-base cursor-pointer shadow-lg hover:scale-110 hover:bg-warm-white hover:text-dark-red"
            onClick={() => navigate("/erbjudanden")}
          >
            Mer om erbjudandet
          </button>
        </div>
        <Testimonial
          testimonial={testimonials[0]}
          style={
            "hidden laptop:flex mt-auto self-end bg-collab-beige rounded-br-none rounded-tr-[120px]"
          }
        />
      </div>
    </section>
  );
};
