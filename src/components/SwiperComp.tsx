
import { Swiper, SwiperSlide } from 'swiper/react';
import projects from "../data/projectsData.json"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';

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


