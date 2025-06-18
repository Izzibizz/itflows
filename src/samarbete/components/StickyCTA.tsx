import { useState, useRef, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { useCollabStore } from "../../stores/useCollabStore";

export const StickyCTA: React.FC = () => {
  const [isPopup, setIsPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const { popupHasBeenSeen, setPopupHasBeenSeen } = useCollabStore()

  const closePopup = () => {
    setIsPopup(false);
     setPopupHasBeenSeen(true)
  };

  useEffect(() => {
    setTimeout(() => {
      setIsPopup(true);
    }, 30000);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        closePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      className={`animate-fadeIn  ${
        isPopup && !popupHasBeenSeen
          ? "w-screen h-screen bg-warm-black/50 text-warm-black "
          : " rounded-tl-3xl hover:scale-110 laptop:origin-right bg-collab-red hover:bg-collab-green p-3 px-6  cursor-pointer text-warm-white"
      } fixed bottom-0 right-0 z-80 laptop:text-lg text-sm `}
    >
      {isPopup && !popupHasBeenSeen ? (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 laptop:w-1/2 laptop:max-w-[1000px] animate-fadeIn rounded-4xl flex flex-col bg-warm-white"
          ref={popupRef}
        >
          <div className="flex flex-col tablet:flex-row justify-between relative">
            <RxCross1
              className="absolute z-60 top-4 right-4 laptop:top-8 laptop:right-8 laptop:w-6 laptop:h-6 text-warm-black"
              onClick={() => closePopup()}
            />

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="flex flex-col gap-10 bg-warm-white p-6 laptop:p-8 rounded-t-4xl tablet:rounded-l-4xl tablet:rounded-r-none tablet:w-2/3"
            >
              <input type="hidden" name="form-name" value="contact" />

              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div className="flex flex-col gap-2 items-center self-center">
                <h3 className="text-2xl">
                  <span className="underline">Just nu</span> erbjuder vi en{" "}
                  <br />{" "}
                  <span className="font-semibold font-collab text-4xl tablet:text-3xl laptop:text-[50px]">
                    gratis
                  </span>{" "}
                  <span className="text-4xl tablet:text-3xl laptop:text-4xl font-collab">
                    första konsultation
                  </span>
                </h3>
                <h4 className="text-2xl self-end">helt utan bindning</h4>
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex gap-2">
                  Namn:
                  <input
                    type="text"
                    name="name"
                    className="border border-dotted border-collab-green rounded-lg"
                    required
                  />
                </label>

                <label className="flex gap-2">
                  E-post:
                  <input
                    type="email"
                    name="email"
                    className="border border-dotted border-collab-green rounded-lg"
                    required
                  />
                </label>

                <label className="flex flex-col gap-2">
                  Meddelande:
                  <textarea
                    name="message"
                    className="border border-dotted border-collab-green rounded-lg"
                    required
                  ></textarea>
                </label>
                <button
                  type="submit"
                  className="w-fit rounded-3xl bg-collab-red px-3 py-1 self-end"
                >
                  Skicka
                </button>
              </div>
              <div className="">
                <p className="text-sm text-justify">
                  Under 30 minuter träffas vi online och går tillsammans igenom
                  dina eller ert företags behov, mål och potential. Vi
                  presenterar hur vi kan hjälpa just dig/er – och vad som skulle
                  passa bäst utifrån din/er situation. Tillsammans diskuterar vi
                  vilket av våra paket som är mest relevant, helt utan
                  förpliktelser.
                </p>
              </div>
            </form>
            <video
              src="https://res.cloudinary.com/dlp85vjwx/video/upload/v1750153021/itflows-studio-mamama_y4wwbc.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-[4/3] tablet:w-1/2 tablet:aspect-[3/4] laptop:h-full object-cover object-[center_35%] tablet:object-center rounded-b-4xl tablet:rounded-r-4xl tablet:rounded-l-none"
            />
          </div>
        </div>
      ) : (
        <a
          href="mailto:info@itflows.se?subject=Bokning konsultation&body=Hej, jag skulle vilja boka en första konsultation. Namn: företag: telefonnummer:"
          aria-label="Email me at info@itflows.se"
          className={`flex gap-2 font-light items-center
        `}
        >
          Boka gratis konsultation
        </a>
      )}
    </section>
  );
};
