import { ScrollToTop } from "./components/ScrollToTop";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainRoutes } from "./routes/Mainroutes";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCollabStore } from "./stores/useCollabStore";

export const App: React.FC = () => {

  const { isSamarbete, setIsSamarbete } = useCollabStore()
  const [ isLandingPage, setIsLandingPage ] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      setIsLandingPage(true);
      setIsSamarbete(false);
    } else if (location.pathname.includes("samarbete")) {
      setIsLandingPage(false);
      setIsSamarbete(true);
    } else {
      setIsLandingPage(false);
      setIsSamarbete(false);
    }
  }, [location]);

  return (
    <>
    <ScrollToTop />
    <div className={`max-w-screen min-h-screen flex flex-col overflow-hidden relative ${isSamarbete? "bg-warm-white font-c-body" : "bg-warm-beige" } text-warm-black `}>
      <Header />
      <main className={`flex-grow mb-20 ${!isLandingPage && "pt-48 w-10/12 laptop:w-9/12 mx-auto "} `}>
        <MainRoutes />
      </main>
      <Footer />
    </div>
    </>
  );
}


