
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";


export const ContactComp: React.FC = () => {
    const textRef = useRef(null)
    const headingRef = useRef(null)
    const headingIsInView = useInView(headingRef, { once: true });
    const textIsInView = useInView(textRef, { once: true });

  return (
    <section className="w-10/12 laptop:w-9/12 mx-auto py-30 flex flex-col">
       <div 
        className="flex flex-col">
          <motion.h3 className="font-header text-[13vw] laptop:text-[5vw] text-stone-700 mb-4"  ref={headingRef}
        initial={{ opacity: 0, y: 100 }}
        animate={headingIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}>
            Kontakt
          </motion.h3>
          <motion.div  className="laptop:w-8/12  text-4xl text-justify font-body flex flex-col gap-4"  ref={textRef}
        initial={{ opacity: 0, y: 200 }}
        animate={textIsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}>
          <a href="mailto:izabel@itflows.se"   className="relative w-fit flex gap-2 items-center after:content-[''] after:block after:w-0 after:h-[1px] after:bg-stone-500 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                     > <MdOutlineArrowOutward />
          Mail
          </a>
          <a href="https://www.instagram.com/itflows.se/" rel="noopener noreferrer" target="_blank" className="relative w-fit flex gap-2 items-center after:content-[''] after:block after:w-0 after:h-[1px] after:bg-stone-500 after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                     > <MdOutlineArrowOutward />
          Instagram
          </a>
        
          </motion.div>
        </div>
    </section>
  )
}


