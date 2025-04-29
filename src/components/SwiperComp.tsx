

import projectsJson from "../data/projectsData.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


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

  
    return (
        <div className="overflow-visible laptop:w-1/2 mx-auto">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className=""
          >
            { projects.map((project, index) => (
            <SwiperSlide key={index} className="">
            <img src={project.pictures[0]} className=""/>
          </SwiperSlide>
            ))}

          </Swiper>
        </div>
      );
    }


