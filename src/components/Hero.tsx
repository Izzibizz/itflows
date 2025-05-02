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
      <div className="relative pt-42 laptop:pt-48 w-10/12 mx-auto flex flex-col gap-6 tablet:justify-evenly tablet:gap-16 mb-20 laptop:mb-0 laptop:h-[95vh]">
        <div className="text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
            className="text-[50px] tablet:text-[90px] leading-tight font-bold"
          >
            BRANDING, DESIGN & WEBBUTVECKLING
            <br />
            <span className="text-2xl tablet:text-[70px]">
              {" "}
              enkelt, snyggt och skräddarsytt för dig
            </span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7, ease: "easeOut" }}
            className="text-xl tablet:text-[40px] font-header text-light tracking-wide"
          >
            Vi bygger. Du växer.
          </motion.h2>
        </div>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
        className="flex flex-col gap-16 laptop:gap-10 laptop:flex-row justify-between">
          <div className="flex gap-4 laptop:gap-10">
            <motion.button
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 4, duration: 0.7 }}
              className="bg-red-beige text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-body tablet:text-xl cursor-pointer shadow-lg hover:scale-110 hover:bg-warm-white hover:text-dark-red"
              onClick={() => navigate("/erbjudanden")}
            >
              Våra Erbjudanden
            </motion.button>
            <motion.button
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 4.5, duration: 0.7 }}
              className="bg-red-beige text-white p-3 px-6 rounded-full w-fit h-fit text-sm font-body  tablet:text-xl cursor-pointer shadow-lg hover:scale-110  hover:bg-warm-white hover:text-dark-red"
              onClick={() => navigate("/kontakt")}
            >
              Få Offert
            </motion.button>
          </div>
          <Testimonial testimonial={testimonials[0]} position={"self-end laptop:w-1/2 rounded-br-none rounded-tr-[120px] laptop:rounded-tr-[150px]"} />
        </motion.div>
      </div>
    </section>
  );
};
