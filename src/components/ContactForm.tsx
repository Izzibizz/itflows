import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  websiteType: string;
  description: string;
  materials: {
    texts: boolean;
    images: boolean;
    logo: boolean;
    domain: boolean;
  };
  deadline: string;
  budget: string;
  referral: string;
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    websiteType: "",
    description: "",
    materials: {
      texts: false,
      images: false,
      logo: false,
      domain: false,
    },
    deadline: "",
    budget: "",
    referral: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name in formData.materials) {
      setFormData((prev) => ({
        ...prev,
        materials: {
          ...prev.materials,
          [name]: (e.target as HTMLInputElement).checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Skicka till e-post, API eller formulärtjänst
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col tablet:flex-row gap-4 laptop:gap-14 font-body bg-gradient-to-b from-light-beige rounded-4xl drop-shadow-xl p-10"
    >
      <div className="gap-4 flex flex-col">
        <label>
          Namn:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-warm-white w-full"
          />
        </label>

        <label>
          E-post:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-warm-white  w-full"
          />
        </label>

        <label>
          Telefonnummer:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-warm-white w-full "
          />
        </label>

        <label>
          Typ av hemsida:
          <select
            name="websiteType"
            value={formData.websiteType}
            onChange={handleChange}
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

        <label className="flex flex-col gap-2">
          Beskriv vad du är ute efter:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="bg-warm-white h-32 p-2"
          />
        </label>
      </div>
      <div className="gap-4 flex flex-col">
        <fieldset className="flex flex-col gap-2">
          <legend className="mb-2">Har du redan material?</legend>
          <label>
            <input
              type="checkbox"
              name="texts"
              checked={formData.materials.texts}
              onChange={handleChange}
              className="cursor-pointer "
            />{" "}
            Texter
          </label>
          <label>
            <input
              type="checkbox"
              name="images"
              checked={formData.materials.images}
              onChange={handleChange}
              className="cursor-pointer"
            />{" "}
            Bilder
          </label>
          <label>
            <input
              type="checkbox"
              name="logo"
              checked={formData.materials.logo}
              onChange={handleChange}
              className="cursor-pointer"
            />{" "}
            Logotyp
          </label>
          <label>
            <input
              type="checkbox"
              name="domain"
              checked={formData.materials.domain}
              onChange={handleChange}
              className="cursor-pointer"
            />{" "}
            Domännamn
          </label>
        </fieldset>

        <label>
          Önskad lansering:
          <select
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="bg-warm-white cursor-pointer  w-full"
          >
            <option value="">Välj...</option>
            <option value="inom_1_månad">Inom 1 månad</option>
            <option value="inom_3_månader">Inom 1–3 månader</option>
            <option value="flexibel">flexibel</option>
          </select>
        </label>

        <label>
          Budget (valfritt):
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="bg-warm-white cursor-pointer  w-full"
          >
            <option value="">Välj...</option>
            <option value="under_10k">Under 10 000 kr</option>
            <option value="10k_25k">10 000–25 000 kr</option>
            <option value="25k_50k">25 000–50 000 kr</option>
          </select>
        </label>

        <label>
          Hur hittade du itFlows?
          <select
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            className="bg-warm-white cursor-pointer  w-full"
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
        <button
        type="submit"
        className="bg-dark-blue text-white p-3 rounded-full hover:scale-105 transition-all w-fit self-start tablet:self-end cursor-pointer"
      >
        Skicka förfrågan
      </button>
      </div>
    </form>
  );
};
