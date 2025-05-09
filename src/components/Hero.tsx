import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Testimonial } from "./Testimonial";
import { VideoBg } from "./VideoBg.js";
import testimonials from "../data/testimonials.json";

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section>
      <VideoBg />
      <div className="relative pt-42 laptop:pt-48 w-10/12 mx-auto flex flex-col gap-6 tablet:min-h-[95vh] tablet:justify-evenly laptop:justify-start laptop:gap-6 mb-20 tablet:mb-0">
        <div className="text-white flex flex-col gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
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
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7, ease: "easeOut" }}
            className= "font-header text-light tracking-wide"
            style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
          >
            Vi bygger. Du växer.
          </motion.h2>
        </div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 2 }}
        className="flex flex-col gap-12 laptop:gap-10 laptop:flex-row justify-between">
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
              Få Offert
            </button>
          </div>
          <Testimonial testimonial={testimonials[0]} position={"self-end laptop:hidden rounded-br-none rounded-tr-[120px]"} />
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 2 }}
        className="flex flex-col w-full">
        <Testimonial testimonial={testimonials[0]} position={"self-end hidden laptop:flex max-w-[800px] laptop:w-2/3 laptop:mt-20 rounded-br-none rounded-tr-[120px] laptop:rounded-tr-[150px]"} />
        </motion.div>
      </div>
    </section>
  );
};
