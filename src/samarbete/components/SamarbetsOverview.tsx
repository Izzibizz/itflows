import { useState, useEffect } from "react"
import { InfoModal } from "./InfoModal"
import steps from "../../data/samarbeteStepByStep.json"
import Lottie from 'lottie-react';
import clickAnimation from '../../assets/animations/clickAnimation.json';


type RefProps = {
  overviewRef: React.RefObject<HTMLDivElement | null>; 
};

export const SamarbetsOverview: React.FC<RefProps> = ({overviewRef}) => {

const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < 1300);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const [ clickedDescription, setClickedDescription ] = useState<string>("")
  const [ clickedTitle, setClickedTitle ] = useState<string>("")
  const [ clickedIndex, setClickedIndex ] =  useState<number | null>(null)

   const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const setInfo = (description: string, title:string, index:number) => {
    setClickedDescription(description)
    setClickedTitle(title)
    setClickedIndex(index)
    setIsModalOpen(true)
  }

useEffect(() => {
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 1300);
  };

  handleResize(); // Run once
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <section className="py-40 laptop:py-48 flex flex-col gap-10 laptop:gap-24" ref={overviewRef}>
      <div className="flex flex-col gap-6 laptop:items-end laptop:text-end">
        <h2 className="font-collab text-4xl laptop:text-[40px]">
          Hur går det till?
        </h2>
        <h3 className="text-xl laptop:max-w-1/2 text-justify laptop:text-end">
          Såhär går det till <span className="font-semibold">steg för steg</span> från första mötet då vi lär känna varandra och tillsammans försöker
          förstå och förtydliga visionen - hela vägen till en färdig hemsida. 
        </h3>
         {isSmallScreen && (
            <>
            <br/>
            <div className="flex gap-2 tablet:items-center tablet:justify-end">
               <div className="w-10 h-10 tablet:w-20 tablet:h-20">
          <Lottie
            animationData={clickAnimation}
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
            <span className="font-c-body">Klicka på de olika stegen för mer info</span>
            </div>
            </>
        )}
      </div>
{isSmallScreen ? (
 <div className="relative flex flex-col overflow-hidden">
      <div className="absolute top-1/2 z-20 right-[40px] pointer-events-none laptop:hidden">
        <div className="w-10 h-10 tablet:w-20 tablet:h-20">
          <Lottie
            animationData={clickAnimation}
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
      </div>

      {steps.map((step, index) => (
        <img
          key={index}
          src={step.image}
          alt=""
          className="w-full max-w-[600px]"
          onClick={() => setInfo(step.description, step.title, index)}
        />
      ))}
    </div>
  ) : (
      <div className="hidden laptop:flex gap-40">
        <div className="flex flex-col">
         {steps.map((step, index) => (
    
      <img
        key={`img-${index}`}
        src={step.image}
        alt={`Steg ${index + 1}`}
        className="w-full h-auto "
      />
 
      ))}
           </div>
             <div className="flex flex-col justify-evenly gap-4">
      {steps.map((step, index) => (
      <div key={`text-${index}`} className="flex flex-col gap-2 justify-between border-b-1 border-dotted pb-4">
        <h4 className="font-collab text-2xl flex gap-2"><span className="border rounded-full inline-flex items-center justify-center w-10 h-10">{index + 1}.</span> {step.title}</h4>
        <p className="font-c-body  text-justify">{step.description}</p>
      </div>
  ))}
  </div>
      </div>
  )}
  {isModalOpen && clickedIndex !== null && (
  <InfoModal
    title={clickedTitle}
    index={clickedIndex}
    description={clickedDescription}
    onClose={handleCloseModal}
  />
)}
    </section>
  );
};
