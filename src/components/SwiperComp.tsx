import projectsJson from "../data/projectsData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

import { EffectCoverflow, Pagination } from "swiper/modules";
import "../styles/swiper.css";
import "../styles/effect-coverflow.css";
import "../styles/pagination.css";

type Project = {
  name: string;
  year: number;
  company: string;
  title: string;
  text: string;
  pictures: string[];
  website: string;
  typeOfProject: string[];
};
const projects: Project[] = projectsJson;

export const SwiperComp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-visible w-full flex flex-col">
      <Swiper
        effect={"coverflow"}
        direction={"horizontal"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        breakpoints={{
          320: {
            direction: "vertical",
          },
          640: {
            direction: "horizontal",
          },
          1024: {
            direction: "horizontal",
          },
        }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 80,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full h-[300px] tablet:h-auto"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className=" bg-warm-white"
            onClick={() => navigate("/kunder")}
          >
            <img src={project.pictures[0]} className="pb-10" />
            <div className="font-body self-end text-end hidden tablet:block">
              <a
                href={project.website}
                target="_blank"
                rel="noref noopener"
                className="text-xl"
              >
                {project.company}
              </a>
              <p className="text-sm">{project.title}</p>
              <p className="text-sm">{project.year}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
