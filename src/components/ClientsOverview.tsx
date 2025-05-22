import { useState, useEffect } from "react";
import { SwiperComp } from "./SwiperComp";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Testimonial } from "./Testimonial";
import projectsJson from "../data/projectsData.json";

export const ClientsOverview: React.FC = () => {
  const navigate = useNavigate();
  const [ isLaptop, setIsLaptop ] = useState(window.innerWidth > 1280)
  const swiperRef = useRef(null);
  const swiperIsInView = useInView(swiperRef, { once: true });
  const [ testimonialIndex, setTestimonialIndex ] = useState(0)
  const projects = projectsJson
  
  const setIndex = (index:number) => {
    setTestimonialIndex(index)
  }

    useEffect(() => {
  const handleResize = () => {
    setIsLaptop( window.innerWidth > 1280);
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

    console.log(testimonialIndex)

  return (
    <section>
      <div className="w-10/12 laptop:w-9/12 mx-auto py-30 laptop:py-48 flex flex-col gap-10 laptop:gap-8">
      <motion.div
      ref={swiperRef}
      initial={{ opacity: 0}}
      animate={swiperIsInView ? { opacity: 1 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
    >
        <SwiperComp onSlideChange={setIndex} projects={projects}/>
        </motion.div>
        <div className="flex flex-col laptop:flex-row">
        <motion.div className="flex flex-col gap-6" initial={{ opacity: 0}}
      animate={swiperIsInView ? { opacity: 1} : {}}
      transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}>
          <div className="flex flex-col gap-2">
            <h3 className="font-header text-2xl tablet:text-4xl laptop:text-[35px] text-stone-700">
              Våra Kunder
            </h3>
            <h4 className="font-heading italic text-lg tablet:text-xl">
              itFlows skapar unika uttryck för varje kund
            </h4>
            </div>
            <p className="laptop:w-8/12 text-justify font-body">
              Varje projekt är en skräddarsydd upplevelse, formad utifrån våra
              kunders vision, målgrupp och identitet. Våra kunder är otroligt
              viktiga för oss, vårt mål är att hjälpa dem förstå och formulera
              deras vision och sen förverkliga den. Med stark känsla för form,
              tonalitet och strategi bygger itFlows digitala lösningar som
              sticker ut och som stannar kvar i minnet. 
            </p>
            <motion.button
             initial={{ opacity: 0 }}
             animate={swiperIsInView ? { opacity: 1} : {}}
             transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
             className="text-lg w-fit font-header relative flex gap-2 items-center 
             after:content-[''] after:block after:h-[1px] after:bg-stone-500 after:absolute after:left-0 after:bottom-0 
             after:w-full 
             laptop:after:w-0 laptop:hover:after:w-full 
             after:transition-all after:duration-300 cursor-pointer"
              onClick={() => navigate("/kunder")}
            >
              Se alla projekt
              <HiOutlineArrowSmallRight />
              </motion.button>

        </motion.div>
        { isLaptop &&
        <Testimonial testimonial={projects[testimonialIndex]} style={`bg-light-beige w-full self-end h-fit x-auto rounded-bl-none rounded-tl-[120px] laptop:rounded-tl-[150px]`}/>
}
        </div>
      </div>
    </section>
  );
};
