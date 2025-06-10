
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

import { EffectCoverflow, Pagination, Autoplay  } from "swiper/modules";
import "../styles/swiper.css";
import "../styles/effect-coverflow.css";
import "../styles/pagination.css";

interface ProjectProps {
  name: string;
  year: number;
  company: string;
  title: string;
  text: string;
  pictures: string[];
  website: string;
  typeOfProject: string[];
};


interface SwiperProps {
  projects: ProjectProps[];             
  onSlideChange: (index: number) => void;
}

export const SwiperComp: React.FC<SwiperProps> = ({onSlideChange, projects}) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-visible w-full laptop:w-9/12 laptop:mx-auto flex flex-col">
      <Swiper
       onSlideChange={(swiper) => {
    // Vänta lite innan du uppdaterar – för att undvika glitch
    setTimeout(() => {
      onSlideChange(swiper.realIndex);
    }, 100); 
  }}
      onSlideChangeTransitionEnd={(swiper) => {
    onSlideChange(swiper.realIndex);
  }}
        effect={"coverflow"}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false, 
        }}
        speed={1500}
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
          stretch: 40,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="my-custom-swiper w-full h-[300px] tablet:h-auto"
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
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
