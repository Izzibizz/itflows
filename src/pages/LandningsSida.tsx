import { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
/* import { Overview } from "../components/Overview"; */
import { ClientsOverview } from "../components/ClientsOverview";
import { useCollabStore } from "../stores/useCollabStore";
import { IntroductionAbout } from "../components/IntroductionAbout";
import { TestimonialSwiper } from "../components/TestimonialSwiper";
import { ContactComp } from "../components/ContactComp";

export const LandningsSida: React.FC = () => {
  const { setIsLandingPage } = useCollabStore();
  const [isLaptop, setIsLaptop] = useState(window.innerWidth > 1280);

  useEffect(() => {
    setIsLandingPage(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth > 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className=" animate-fadeIn ">
      <Hero />
      <ClientsOverview />
      {!isLaptop && (
        <TestimonialSwiper
          style="bg-warm-white"
          bubbleStyle="bg-collab-beige"
        />
      )}
      <IntroductionAbout />
      <ContactComp />
    </section>
  );
};
