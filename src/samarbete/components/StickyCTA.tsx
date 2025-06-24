import { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import animation from "../../assets/animations/Animation - dots.json";
import { RxCross1 } from "react-icons/rx";
import { useCollabStore } from "../../stores/useCollabStore";

export const StickyCTA: React.FC = () => {
  const [isPopup, setIsPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [hideSticky, setHideSticky] = useState(false)
  const { popupHasBeenSeen, setPopupHasBeenSeen } = useCollabStore();
  const [state, handleSubmit] = useForm("xkgbqlnz");

  const closePopup = () => {
    setIsPopup(false);
    setPopupHasBeenSeen(true);
  };

  const bookingClick = () => {
    setIsPopup(true)
    setPopupHasBeenSeen(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsPopup(true);
    }, 30000);
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        setIsPopup(false);
        setPopupHasBeenSeen(true);
        setHideSticky(true)
      }, 5000);
    }
  }, [state, setPopupHasBeenSeen]);

  useEffect(() => {
    if (isPopup) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isPopup]);

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

  console.log(state.succeeded);
  return (
    <section
      className={`animate-fadeIn ${hideSticky && "hidden"} ${
        isPopup && !popupHasBeenSeen
          ? "w-screen h-screen bg-warm-black/90 tablet:bg-warm-black/70 text-warm-black z-80 "
          : " rounded-tl-3xl hover:scale-110 laptop:origin-right bg-collab-red hover:bg-collab-green p-3 px-6  cursor-pointer text-warm-white z-50"
      } fixed bottom-0 right-0 laptop:text-lg text-sm `}
    >
      {isPopup && !popupHasBeenSeen ? (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 laptop:w-1/2 laptop:max-w-[1000px] animate-fadeIn rounded-4xl flex flex-col bg-warm-white"
          ref={popupRef}
        >
          <div className="flex flex-col tablet:flex-row justify-between relative">
            <RxCross1
              className="absolute z-60 top-4 right-4 w-6 h-6 laptop:top-8 laptop:right-8 text-warm-black cursor-pointer"
              onClick={() => closePopup()}
            />
            {state.succeeded ? (
              <div className="animate-fadeIn flex flex-col gap-2 p-6 tablet:w-2/3 items-center text-center justify-center">
                <h3 className="font-collab text-4xl">Tack för din bokning!</h3>
                <p>Vi hör av oss inom kort.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative flex flex-col gap-10 bg-warm-white p-6 laptop:p-8 rounded-t-4xl tablet:rounded-l-4xl tablet:rounded-r-none tablet:w-2/3"
              >
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
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                  <label className="flex gap-2">
                    Företag:
                    <input
                      type="text"
                      name="företag"
                      className="border border-dotted border-collab-green rounded-lg"
                      required
                    />
                  </label>
                  <ValidationError
                    prefix="Företag"
                    field="företag"
                    errors={state.errors}
                  />
                  <label className="flex gap-2">
                    E-post:
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="border border-dotted border-collab-green rounded-lg"
                      required
                    />
                  </label>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <label className="flex flex-col gap-2">
                    Meddelande:
                    <textarea
                      name="message"
                      className="border p-2 border-dotted border-collab-green rounded-lg"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-fit rounded-3xl bg-collab-red px-3 py-1 self-end cursor-pointer"
                  >
                    Skicka
                  </button>
                </div>
                <div className="">
                  <p className="text-xs tablet:text-sm tablet:text-justify">
                    Du får en konsultation värd 2 500 kr – helt gratis! <br /> I
                    ett 30-minuters onlinesamtal analyserar vi ditt/ert företags
                    behov och diskuterar lösningar anpassade efter just er. Vi
                    ger konkreta insikter och rekommend&shy;ationer, utan krav
                    på vidare samarbete.
                  </p>
                </div>
                {state.submitting && (
                  <div className="absolute top-0 right-0 z-30 w-full h-full flex flex-col items-center justify-center">
                    <Lottie
                      animationData={animation}
                      loop
                      autoplay
                      style={{ height: 600, width: 600 }}
                    />
                  </div>
                )}
              </form>
            )}
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
      ) :  (
        <p
          className="flex gap-2 font-light items-center
        "
        onClick={() => bookingClick()}
        >
          Boka gratis konsultation
        </p>
      )}
    </section>
  );
};
