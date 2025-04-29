import { useNavigate } from "react-router-dom";
import { Testimonial } from "./Testimonial";
import { VideoBg } from "./VideoBg.js";
import testimonials from "../data/testimonials.json";

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section>
      <VideoBg />
      <div className="relative pt-42 laptop:pt-48 w-10/12 mx-auto flex flex-col gap-6 laptop:gap-16 mb-20 laptop:mb-0 laptop:h-[95vh]">
        <div className="text-white">
          <h1 className="text-[50px] laptop:text-[90px] leading-tight font-bold">
            BRANDING, DESIGN & WEBBUTVECKLING
            <br />
            <span className="text-2xl laptop:text-[70px]">
              {" "}
              enkelt, snyggt och skräddarsytt för dig
            </span>
          </h1>
          <h2 className="text-xl laptop:text-[40px] font-body text-light tracking-wide italic">
            Vi bygger. Du växer.
          </h2>
        </div>
        <div className="flex flex-col gap-16 laptop:gap-10 laptop:flex-row justify-between">
          <div className="flex gap-4 laptop:gap-10">
            <button
              className="bg-red-beige text-white laptop:text-warm-black p-3 px-6 rounded-full w-fit h-fit text-xs laptop:text-xl cursor-pointer shadow-lg hover:scale-110 hover:text-white"
              onClick={() => navigate("/erbjudanden")}
            >
              Våra Erbjudanden
            </button>
            <button
              className="bg-warm-white text-stone-700 p-3 px-6 rounded-full w-fit h-fit text-xs laptop:text-xl cursor-pointer shadow-lg hover:scale-110 hover:text-dark-red"
              onClick={() => navigate("/kontakt")}
            >
              Få Offert
            </button>
          </div>
          <Testimonial testimonial={testimonials[0]} position={"self-end"} />
        </div>
      </div>
    </section>
  );
};
