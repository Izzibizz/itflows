
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import animation from "../assets/animations/Animation - dots.json";

export const ContactForm: React.FC = () => {
   const [state, handleSubmit] = useForm("xdkzpzak");


  return (
    <>
    {state.succeeded ? (
      <div className="flex flex-col gap-2 items-center justify-center">
        <h3>Tack för din bokning!</h3>
        <p>Vi hör av oss inom kort</p>
      </div>
    ) : 
    (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col tablet:grid grid-cols-2 gap-8 laptop:gap-14 font-body bg-gradient-to-b from-light-beige rounded-4xl drop-shadow-xl p-10 pb-32"
    >
      <div className="gap-4 flex flex-col">
        <label>
          Namn:
          <input
            type="text"
            name="name"
            id="name"
            required
            className="bg-warm-white w-full"
          />
        </label>

        <label>
          E-post:
          <input
            type="email"
            name="email"
            id="email"
            required
            className="bg-warm-white  w-full"
          />
        </label>

        <label>
          Telefonnummer:
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            className="bg-warm-white w-full "
          />
        </label>

                <label>
          Länk nuvarande hemsida/instagram:
          <input
            type="tel"
            name="link"
            id="link"
            className="bg-warm-white w-full "
          />
        </label>

        <label>
          Önskad typ av hemsida:
          <select
            name="websiteType"
            id="websiteType"
            required
            className="bg-warm-white cursor-pointer w-full"
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
            className="bg-warm-white cursor-pointer  w-full"
          >
            <option value="">Välj...</option>
            <option value="inom_1_månad">Inom 1 månad</option>
            <option value="inom_3_månader">Inom 1–3 månader</option>
            <option value="flexibel">flexibel</option>
          </select>
        </label>
      </div>
      <div className="gap-4 flex flex-col">
               <fieldset className="grid grid-cols-2  gap-2">
          <legend className="mb-2 underline">Vad behöver du hjälp med?</legend>
          <label>
            <input
              type="checkbox"
              name="branding"
              id="branding"
              className="cursor-pointer "
            />{" "}
            Branding
          </label>
          <label>
            <input
              type="checkbox"
              name="design"
              id="design"
              className="cursor-pointer"
            />{" "}
            Design
          </label>
          <label>
            <input
              type="checkbox"
              name="hemsida"
              id="hemsida"
              className="cursor-pointer"
            />{" "}
            Bygga hemsida
          </label>
             <label>
            <input
              type="checkbox"
              name="helhetskoncept"
            id="helhetskoncept"
              className="cursor-pointer"
            />{" "}
            Helhetskoncept
          </label>
        </fieldset>
        <fieldset className="grid grid-cols-2  gap-2">
          <legend className="mb-2 underline">Har du redan material?</legend>
          <label>
            <input
              type="checkbox"
              name="texts"
              id="texts"
              className="cursor-pointer "
            />{" "}
            Texter
          </label>
          <label>
            <input
              type="checkbox"
              name="images"
            id="images"
              className="cursor-pointer"
            />{" "}
            Bilder
          </label>
          <label>
            <input
              type="checkbox"
              name="logo"
              id="logo"
              className="cursor-pointer"
            />{" "}
            Logotyp
          </label>
          <label>
            <input
              type="checkbox"
              name="domain"
              id="domain"
              className="cursor-pointer"
            />{" "}
            Domän
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
            <option value="under_10k">Under 10 000 kr</option>
            <option value="10k_25k">10 000–25 000 kr</option>
            <option value="25k_50k">25 000–50 000 kr</option>
            <option value="vet-ej">Vet ej</option>
          </select>
        </label>
     <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <label>
          Hur hittade du itFlows?
          <select
            name="referral"
            id="referral"
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
        prefix="referral" 
        field="referral"
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
