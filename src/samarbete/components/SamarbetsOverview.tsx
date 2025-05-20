import { useState, useEffect } from "react"
import { InfoModal } from "./InfoModal"
import steps from "../../data/samarbeteStepByStep.json"
import Lottie from 'lottie-react';
import clickAnimation from '../../assets/animations/clickAnimation.json';

export const SamarbetsOverview: React.FC = () => {

const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ clickedDescription, setClickedDescription ] = useState("")
  const [ clickedTitle, setClickedTitle ] = useState("")

   const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const setInfo = (description: string, title:string) => {
    setClickedDescription(description)
    setClickedTitle(title)
    setIsModalOpen(true)
  }

useEffect(() => {
  const handleResize = () => {
    setIsTabletOrMobile(window.innerWidth < 1025); // Adjust to your "laptop" breakpoint
  };

  handleResize(); // Run once
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <section className="py-40 laptop:py-48 flex flex-col gap-20 laptop:gap-24">
      <div className="flex flex-col gap-6">
        <h2 className="font-collab text-4xl laptop:text-[40px]">
          Hur går det till?
        </h2>
        <h3 className="text-xl laptop:max-w-1/3">
          Såhär går det till steg för steg från första mötet då vi försöker
          förstå visionen hela vägen till en färdig hemsida
        </h3>
      </div>
{isTabletOrMobile ? (
 <div className="relative flex flex-col overflow-hidden">
      {/* Sticky animation, within this section only */}
      <div className="absolute top-24 z-20 right-1/3 pointer-events-none laptop:hidden">
        <div className="w-10 h-10 tablet:w-20 tablet:h-20">
          <Lottie
            animationData={clickAnimation}
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
      </div>

      {/* The scrollable content */}
      {steps.map((step, index) => (
        <img
          key={index}
          src={step.image}
          alt=""
          className="w-full"
          onClick={() => setInfo(step.description, step.title)}
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
      <div key={`text-${index}`} className="flex flex-col gap-2">
        <h4 className="font-collab text-2xl">{step.title}</h4>
        <p className="font-c-body">{step.description}</p>
      </div>
  ))}
  </div>
      </div>
  )}
  {isModalOpen && (
            <InfoModal
              title={clickedTitle}
              description={clickedDescription}
              onClose={handleCloseModal}
            />
          )}
    </section>
  );
};
