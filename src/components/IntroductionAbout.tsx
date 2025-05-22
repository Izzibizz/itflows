import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

export const IntroductionAbout: React.FC = () => {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const textIsInView = useInView(textRef, { once: true });

  return (
    <section>
      <div className="w-10/12 laptop:w-9/12 mx-auto py-30 laptop:pb-48 flex flex-col laptop:flex-row gap-10 justify-between">
        <img
          src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1746174843/izabel-lind-farnstrand-webbyra-itflows-2_jcc3ec.webp"
          className="laptop:w-1/3 laptop:max-w-[600px] object-cover"
        />
        <div className="flex flex-col laptop:items-end laptop:justify-end"
                    >
          <motion.h3
            className="font-header text-2xl tablet:text-4xl laptop:text-[35px] text-stone-700 mb-4"
            ref={textRef}
            initial={{ opacity: 0, y: 100 }}
            animate={textIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5,  ease: "easeOut" }}
          >
            Om itFlows
          </motion.h3>
          <motion.div
            className="laptop:w-8/12  text-justify font-body flex flex-col gap-4 mb-5"

            initial={{ opacity: 0, y: 200 }}
            animate={textIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <p>
              itFlows är en webbyrå i Stockholm som skapar skräddarsydda,
              visuellt starka och strategiskt genomtänkta helhetslösningar för
              företag och varumärken. Vi bygger inte bara hemsidor – vi formar
              identiteter, kommunikation och digitala upplevelser som sticker ut
              och håller över tid.
            </p>
            <p>
              Bakom itFlows står utvecklare, designer och konstnär Izabel Lind.
              Med en unik kombination av teknisk kompetens och konstnärlig
              expertis erbjuder vi branding, webbdesign, illustrationer och
              logotyper av hög kvalitet. Projekten genomförs i samarbete med
              noggrant utvalda fotografer och externa specialister, för att
              skapa en stark visuell helhet som lyfter varje kunds vision.
            </p>
          </motion.div>
          <motion.button
            className="self-end w-fit text-lg font-header relative flex gap-2 items-center 
  after:content-[''] after:block after:h-[1px] after:bg-stone-500 after:absolute after:left-0 after:bottom-0 
  after:w-full 
  laptop:after:w-0 laptop:hover:after:w-full 
  after:transition-all after:duration-300 cursor-pointer"
            onClick={() => navigate("/om-oss")}
            initial={{ opacity: 0 }}
            animate={textIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          >
            Läs mer
            <HiOutlineArrowSmallRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
