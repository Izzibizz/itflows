import { useNavigate } from "react-router-dom";
import { Testimonial } from "./Testimonial";
import { VideoBg } from "./VideoBg.js";
import testimonials from "../data/testimonials.json";
import { Banner } from "./Banner.js";

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col gap-10 justify-evenly tablet:min-h-[80vh]">
      <VideoBg />
      <div className="relative pt-42 tablet:pt-48 w-10/12 mx-auto flex flex-col gap-6  tablet:justify-evenly laptop:justify-start laptop:gap-6 ">
        <div className="text-white flex flex-col gap-6">
          <h1
            className=" leading-none font-bold"
            style={{
              fontSize: "clamp(50px, 5vw, 90px)",
            }}
          >
            BRANDING, DESIGN & WEBBUTVECKLING
            <br />
            <span style={{ fontSize: "clamp(28px, 4vw, 60px)" }}>
              {" "}
              enkelt, snyggt och skräddarsytt för dig
            </span>
          </h1>
          <h2
            className="font-header text-light tracking-wide"
            style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
          >
            Vi bygger. Du växer.
          </h2>
        </div>
        <div className="flex flex-col gap-12 laptop:gap-10 laptop:flex-row justify-between">
          <div className="flex gap-4 laptop:gap-10">
            <button
              className="bg-red-beige text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-body tablet:text-xl cursor-pointer shadow-lg hover:scale-110 hover:bg-warm-white hover:text-dark-red"
              onClick={() => navigate("/erbjudanden")}
            >
              Erbjudanden
            </button>
            <button
              className="bg-red-beige text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-body  tablet:text-xl cursor-pointer shadow-lg hover:scale-110  hover:bg-warm-white hover:text-dark-red"
              onClick={() => navigate("/kontakt")}
            >
              Boka intro
            </button>
          </div>
          <Testimonial
            testimonial={testimonials[0]}
            style={
              "self-end bg-warm-white tablet:max-w-3/4 laptop:hidden rounded-br-none rounded-tr-[120px]"
            }
          />
        </div>
        <div className="flex-col w-full  hidden laptop:flex ">
          <Testimonial
            testimonial={testimonials[0]}
            style={
              "self-end bg-warm-white max-w-[800px] laptop:w-2/3 laptop:mt-10 rounded-br-none rounded-tr-[120px] laptop:rounded-tr-[150px]"
            }
          />
        </div>
      </div>
      <Banner />
    </section>
  );
};
