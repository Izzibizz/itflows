import { useCollabStore } from "../stores/useCollabStore";

interface TestimonialProps {
  testimonial: {
    name: string;
    year: number;
    title: string;
    company: string;
    text: string;
    website: string;
    typeOfProject: string[];
  };
  style: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  testimonial,
  style,
}) => {

  const { isSamarbete } = useCollabStore()
  
  return (
    <div
      className={`shadow-lg rounded-[100px]  p-8 pt-14 pr-12 laptop:pr-24 laptop:pl-20 font-body text-end flex flex-col gap-4 text-xs tablet:text-sm ${style}`}
    >
      <div className="flex gap-2 tablet:gap-4 laptop:gap-6 items-center">
      <p className="italic">"{testimonial.text}"</p>
        <img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1747904859/circle_eafw4m.png" className={isSamarbete ? "hidden" : "hidden tablet:block tablet:w-7 tablet:h-7 laptop:w-10 laptop:h-10"} />
      </div>
      <p className="text-[10px] tablet:text-xs">
        {testimonial.name}, {testimonial.title}
        <br />
        {testimonial.company}
      </p>
    </div>
  );
};
