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
  position: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  testimonial,
  position,
}) => {
  return (
    <div
      className={`bg-warm-white shadow-lg rounded-[100px]   p-8 pt-14 pr-12 laptop:pr-24 laptop:pl-20 font-body text-end flex flex-col gap-4 text-xs laptop:text-sm ${position}`}
    >
      <div className="flex gap-6 items-center">
      <p className="italic">"{testimonial.text}"</p>
        <svg
          id="Lager_1"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-dark-blue fill-current hidden laptop:flex" viewBox="0 0 34.82 37.4">
          <path d="M.41,27.79c-1.04-5.97-.22-11.61,4.02-16.39,1.6-1.8,3.56-3.17,6.08-1.97,2.64,1.26,4.88,3.35,4.83,6.37-.12,6.62-1.44,13.08-4.92,18.81-.83,1.37-2.84,2.49-4.47,2.76-1.93.32-2.29-1.84-2.88-3.35-.81-2.06-1.73-4.08-2.66-6.24h0Z"/>
          <path d="M34.72,5.16c-.06,2.55.4,5.25-.27,7.62-1.34,4.76-3.22,9.37-5.04,13.98-.42,1.05-1.37,1.98-2.28,2.7-2.47,1.96-5.03,1.27-5.69-1.81-1.19-5.48-2.3-11.01-2.84-16.58-.52-5.35,3.13-9.94,7.84-10.89,3.96-.79,6.91,1.06,8.28,4.98Z"/>
        </svg>
      
      </div>
      <p className="text-[10px] laptop:text-xs">
        {testimonial.name}, {testimonial.title}
        <br />
        {testimonial.company}
      </p>
    </div>
  );
};
