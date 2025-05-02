
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialsJson from "../data/testimonials.json"
import { Testimonial } from "./Testimonial";

import { Pagination, Autoplay  } from "swiper/modules";
import "../styles/swiper.css";
import "../styles/effect-coverflow.css";
import "../styles/pagination.css";

type Testimonial = {
    name: string;
    year: number;
    company: string;
    title: string;
    text: string;
    website: string;
    typeOfProject: string[];
  };
  const testimonials: Testimonial[] = testimonialsJson;


export const TestimonialSwiper: React.FC = () => {


  return (
    <section className="bg-warm-beige py-4 laptop:py-20">
    <div className="overflow-visible w-full laptop:w-10/12 laptop:mx-auto flex flex-col">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false, 
        }}
        speed={2000}
        grabCursor={true}
        slidesPerView={2}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          }
        }}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="testimonial w-full h-[300px] tablet:h-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="py-10 flex"
          >
          <Testimonial testimonial={testimonial} position="w-10/12 laptop:w-2/3 max-w-[800px] mx-auto rounded-bl-none rounded-tl-[120px] laptop:rounded-tl-[150px]"/>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
};
