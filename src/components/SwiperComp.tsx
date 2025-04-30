

import projectsJson from "../data/projectsData.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import '../styles/swiper.css';
import '../styles/effect-coverflow.css';
import '../styles/pagination.css'; 


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

  const navigate = useNavigate()

  
    return (
        <div className="overflow-visible w-full">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
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
            className="w-full"
          >
            { projects.map((project, index) => (
            <SwiperSlide key={index} className="py-10 bg-warm-white w-[500px]" onClick={() => navigate("/kunder")}>
            <img src={project.pictures[0]} className="pb-1"/>
            <p className="flex justify-between font-body"><span className="font-semibold text-sm">{project.company}</span><span className="italic hidden tablet:flex text-xs">{project.title}</span></p>
          </SwiperSlide>
            ))}

          </Swiper>
        </div>
      );
    }


