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
      <div className="relative pt-42 laptop:pt-48 w-10/12 mx-auto flex flex-col gap-6 laptop:gap-16 mb-20 laptop:mb-0 laptop:h-[95vh]">
        <div className="text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
            className="text-[50px] laptop:text-[90px] leading-tight font-bold"
          >
            BRANDING, DESIGN & WEBBUTVECKLING
            <br />
            <span className="text-2xl laptop:text-[70px]">
              {" "}
              enkelt, snyggt och skräddarsytt för dig
            </span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7, ease: "easeOut" }}
            className="text-xl laptop:text-[40px] font-body text-light tracking-wide italic"
          >
            Vi bygger. Du växer.
          </motion.h2>
        </div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 2 }}
        className="flex flex-col gap-16 laptop:gap-10 laptop:flex-row justify-between">
          <div className="flex gap-4 laptop:gap-10">
            <button
              className="bg-warm-beige text-dark-red p-3 px-6 rounded-full w-fit h-fit text-xs laptop:text-xl cursor-pointer shadow-lg hover:scale-110 hover:bg-warm-white"
              onClick={() => navigate("/erbjudanden")}
            >
              Våra Erbjudanden
            </button>
            <button
              className="bg-warm-beige text-dark-red p-3 px-6 rounded-full w-fit h-fit text-xs laptop:text-xl cursor-pointer shadow-lg hover:scale-110 hover:bg-warm-white"
              onClick={() => navigate("/kontakt")}
            >
              Få Offert
            </button>
          </div>
          <Testimonial testimonial={testimonials[0]} position={"self-end"} />
        </motion.div>
      </div>
    </section>
  );
};
