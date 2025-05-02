import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Overview } from "../components/Overview";
import { ClientsOverview } from "../components/ClientsOverview";
import { useCollabStore } from "../stores/useCollabStore";
import { IntroductionAbout } from "../components/IntroductionAbout";
import { TestimonialSwiper } from "../components/TestimonialSwiper";

export const LandningsSida: React.FC = () => {
  const { isLandingPage, setIsLandingPage } = useCollabStore();

  useEffect(() => {
    setIsLandingPage(true);
  }, []);

  console.log(isLandingPage);

  return (
    <section className=" animate-fadeIn ">
      <Hero />
      <Overview />
      <ClientsOverview />
      <TestimonialSwiper/>
      <IntroductionAbout/>
    </section>
  );
};
