import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { ClientsOverview } from "../components/ClientsOverview";
import { useCollabStore } from "../stores/useCollabStore";
import { AboutIntro } from "../components/AboutIntro";
import { ContactComp } from "../components/ContactComp";

export const LandningsSida: React.FC = () => {
  const { setIsLandingPage } = useCollabStore();

  useEffect(() => {
    setIsLandingPage(true);
  }, []);

  return (
    <section className=" animate-fadeIn ">
      <Hero />
      <ClientsOverview />
      <AboutIntro />
      <ContactComp />
    </section>
  );
};
