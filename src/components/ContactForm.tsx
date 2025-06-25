import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import animation from "../assets/animations/Animation - dots.json";

export const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xdkzpzak");

  return (
    <>
      {state.succeeded ? (
        <div className="flex flex-col gap-2 w-full items-center justify-center p-10 border-l-2 border-t-2">
          <h3 className="font-bold text-4xl">Tack för din bokning!</h3>
          <p className=" font-body">Vi hör av oss inom kort</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col tablet:grid grid-cols-2 gap-8 laptop:gap-14 font-body p-6 tablet:p-10 border-l-2 border-t-2"
        >
          <div className="gap-6 flex flex-col">
            <label>
              Namn:
              <input
                type="text"
                name="name"
                id="name"
                required
                className="border-b py-1 w-full"
              />
            </label>

            <label>
              E-post:
              <input
                type="email"
                name="email"
                id="email"
                required
                className="border-b py-1  w-full"
              />
            </label>

            <label>
              Länk nuvarande hemsida/instagram:
              <input
                type="url"
                name="link"
                id="link"
                className="border-b py-1  w-full "
              />
            </label>

            <label>
              Önskad typ av hemsida:
              <select
                name="hemsidetyp"
                id="hemsidetyp"
                required
                className="bg-warm-white cursor-pointer border-b w-full"
              >
                <option value="">Välj...</option>
                <option value="företagssida">Företagssida</option>
                <option value="portfolio">Portfolio</option>
                <option value="ehandel">E-handel</option>
                <option value="bokningssida">Bokningssida</option>
                <option value="medlemsportal">Medlemsportal</option>
                <option value="annat">Annat</option>
              </select>
            </label>
            <label>
              Önskad lansering:
              <select
                name="deadline"
                id="deadline"
                required
                className="bg-warm-white cursor-pointer border-b w-full"
              >
                <option value="">Välj...</option>
                <option value="inom_1_månad">Inom 1 månad</option>
                <option value="inom_3_månader">Inom 1–3 månader</option>
                <option value="flexibel">flexibel</option>
              </select>
            </label>
                       <label className="flex flex-col gap-2 w-full">
                    Övriga kommentarer:
                    <textarea
                      name="message"
                      style={{resize: "none", height: "50px"}}
                      placeholder="Kort om ditt företag och hur vi kan hjälpa dig"
                      className="border-b w-full"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </label>
          </div>
          <div className="gap-4 flex flex-col">
            <fieldset className="grid grid-cols-2 gap-2">
              <legend className="mb-2 underline">
                Vad behöver du hjälp med?
              </legend>
              <label className="inline-flex items-center cursor-pointer relative select-none">
                <input
                  type="checkbox"
                  name="behov"
                  value="branding"
                  id="branding"
                  className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer
                 checked:bg-warm-black checked:border-warm-black transition-colors duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-2.5 top-2.5 w-2.5 h-2 border-b-2 border-l-2 border-white
                 rotate-310 scale-0 peer-checked:scale-100 transform origin-bottom-left
                 transition-transform duration-300 ease-in-out"
                ></span>
                <span className="ml-2 select-none">Branding</span>
              </label>

              <label className="inline-flex items-center cursor-pointer relative select-none">
                <input
                  type="checkbox"
                  name="behov"
                  value="design"
                  id="design"
                  className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer
                 checked:bg-warm-black checked:border-warm-black transition-colors duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-2.5 top-2.5 w-2.5 h-2 border-b-2 border-l-2 border-white
                 rotate-310 scale-0 peer-checked:scale-100 transform origin-bottom-left
                 transition-transform duration-300 ease-in-out"
                ></span>
                <span className="ml-2 select-none">Design</span>
              </label>

              <label className="inline-flex items-center cursor-pointer relative select-none">
                <input
                  type="checkbox"
                  name="behov"
                  value="hemsida"
                  id="hemsida"
                  className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer
                 checked:bg-warm-black checked:border-warm-black transition-colors duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-2.5 top-2.5 w-2.5 h-2 border-b-2 border-l-2 border-white
                 rotate-310 scale-0 peer-checked:scale-100 transform origin-bottom-left
                 transition-transform duration-300 ease-in-out"
                ></span>
                <span className="ml-2 select-none">Hemsida</span>
              </label>

              <label className="inline-flex items-center cursor-pointer relative select-none">
                <input
                  type="checkbox"
                  name="behov"
                  value="helhetskoncept"
                  id="helhetskoncept"
                  className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer
                 checked:bg-warm-black checked:border-warm-black transition-colors duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-2.5 top-2.5 w-2.5 h-2 border-b-2 border-l-2 border-white
                 rotate-310 scale-0 peer-checked:scale-100 transform origin-bottom-left
                 transition-transform duration-300 ease-in-out"
                ></span>
                <span className="ml-2 select-none break-words">Allt</span>
              </label>
            </fieldset>

            <fieldset className="grid grid-cols-2 gap-2 mt-6">
              <legend className="mb-2 underline">Har du redan material-tillgang?</legend>

              <label className="inline-flex items-center cursor-pointer relative select-none">
                <input
                  type="checkbox"
                  name="material-tillgang"
                  value="texts"
                  id="texts"
                  className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer
                 checked:bg-warm-black checked:border-warm-black transition-colors duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-2.5 top-2.5 w-2.5 h-2 border-b-2 border-l-2 border-white
                 rotate-310 scale-0 peer-checked:scale-100 transform origin-bottom-left
                 transition-transform duration-300 ease-in-out"
                ></span>
                <span className="ml-2 select-none">Texter</span>
              </label>

              <label className="inline-flex items-center cursor-pointer relative select-none">
                <input
                  type="checkbox"
                  name="material-tillgang"
                  value="images"
                  id="images"
                  className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer
                 checked:bg-warm-black checked:border-warm-black transition-colors duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-2.5 top-2.5 w-2.5 h-2 border-b-2 border-l-2 border-white
                 rotate-310 scale-0 peer-checked:scale-100 transform origin-bottom-left
                 transition-transform duration-300 ease-in-out"
                ></span>
                <span className="ml-2 select-none">Bilder</span>
              </label>

              <label className="inline-flex items-center cursor-pointer relative select-none">
                <input
                  type="checkbox"
                  name="material-tillgang"
                  value="logo"
                  id="logo"
                  className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer
                 checked:bg-warm-black checked:border-warm-black transition-colors duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-2.5 top-2.5 w-2.5 h-2 border-b-2 border-l-2 border-white
                 rotate-310 scale-0 peer-checked:scale-100 transform origin-bottom-left
                 transition-transform duration-300 ease-in-out"
                ></span>
                <span className="ml-2 select-none">Logga</span>
              </label>

              <label className="inline-flex items-center cursor-pointer relative select-none">
                <input
                  type="checkbox"
                  name="material-tillgang"
                  value="domain"
                  id="domain"
                  className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer
                 checked:bg-warm-black checked:border-warm-black transition-colors duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-2.5 top-2.5 w-2.5 h-2 border-b-2 border-l-2 border-white
                 rotate-310 scale-0 peer-checked:scale-100 transform origin-bottom-left
                 transition-transform duration-300 ease-in-out"
                ></span>
                <span className="ml-2 select-none">Domän</span>
              </label>
            </fieldset>

            <label>
              Budget (valfritt):
              <select
                name="budget"
                id="budget"
                className="bg-warm-white cursor-pointer  w-full"
              >
                <option value="">Välj...</option>
                <option value="under10k">Under 10 000 kr</option>
                <option value="10k-25k">10 000–25 000 kr</option>
                <option value="25k-50k">25 000–50 000 kr</option>
                <option value="vet-ej">Vet ej</option>
              </select>
            </label>
            <ValidationError
              prefix="budget"
              field="budget"
              errors={state.errors}
            />
            <label>
              Hur hittade du itFlows?
              <select
                name="rekommendation-via"
                id="rekommendation-via"
                className="bg-warm-white cursor-pointer w-full"
              >
                <option value="">Välj...</option>
                <option value="instagramk">Instagram</option>
                <option value="google">Google</option>
                <option value="linkedin">Linkedin</option>
                <option value="facebook">Facebook</option>
                <option value="rekommendation">Rekommendation</option>
                <option value="annat">Annat</option>
              </select>
            </label>
            <ValidationError
              prefix="rekommendation-via"
              field="rekommendation-via"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-dark-blue text-white p-3 rounded-full hover:scale-105 transition-all w-fit self-start tablet:self-end cursor-pointer mt-6"
            >
              Skicka förfrågan
            </button>
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
    </>
  );
};
