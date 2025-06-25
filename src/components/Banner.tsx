import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";

export const Banner: React.FC = () => {
  const items = [
    { label: "Webbutveckling", url: "/webbutveckling" },
    { label: "Design", url: "/design" },
    { label: "Branding", url: "/branding" },
    { label: "Helhetskoncept", url: "/helhetskoncept" },
  ];

  // Duplicate the list for seamless scroll
  const duplicatedItems = [...items, ...items];

  return (
    <section className="w-full h-fit self-end">
      <Marquee gradient={false} speed={50} pauseOnHover>
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center  overflow-hidden">
            <NavLink
              to={item.url}
              className="text-4xl laptop:text-[50px] text-warm-white font-header px-6 py-4 whitespace-nowrap hover:scale-110"
            >
              {item.label}
            </NavLink>

            <div className="inline-block w-10 h-[4px] bg-warm-white self-center" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};
