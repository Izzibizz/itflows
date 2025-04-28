import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Testimonial } from "./Testimonial";
import { VideoBg } from "./VideoBg.jsx"
import testimonials from "../data/testimonials.json"

export const Hero: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const navigate = useNavigate()

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


  return (
    <section
  className="bg-cover bg-center pb-20"
 /*  style={{
    backgroundImage: `url(${isMobile 
      ? 'https://res.cloudinary.com/dlp85vjwx/image/upload/v1745840233/itflows-webbutveckling-bg-izabel-laptop-2_-_kopia_hhkezn.png' 
      : 'https://res.cloudinary.com/dlp85vjwx/image/upload/v1745840210/itflows-webbutveckling-bg-izabel-laptop-2_vgd81h.png'})`
  }} */
>
  <VideoBg />
      <div className="relative pt-48 w-10/12 mx-auto flex flex-col gap-16">
        <div className="bg-light-beige shadow-lg rounded-[150px] rounded-bl-none rounded-tl-[140px] laptop:rounded-tl-[200px] laptop:w-1/2 p-8 pt-12 laptop:p-16 laptop:pl-32 laptop:pr-28 font-header text-end flex flex-col gap-8 text-sm">
        <h1 className="laptop:text-2xl"><span className="laptop:text-3xl">Branding, design och</span><span className="text-xl laptop:text-4xl"> webbutveckling </span><br/>
        enkelt, snyggt och skräddarsytt för dig</h1>
        <h2 className="text-2xl laptop:text-4xl">Vi bygger. Du växer.</h2>
        </div>
        <div className="flex flex-col gap-10 laptop:flex-row justify-between">
        <div className="flex gap-10">
        <button className="bg-red-beige p-3 px-6 rounded-full w-fit h-fit laptop:text-xl cursor-pointer shadow-lg hover:" onClick={()  => navigate("/erbjudanden")}>Våra Erbjudanden</button>
        <button className="bg-warm-white p-3 px-6 rounded-full w-fit h-fit laptop:text-xl cursor-pointer shadow-lg hover:" onClick={()  => navigate("/kontakt")}>Få Offert</button>
        </div>
        <Testimonial testimonial={testimonials[0]} position={"self-end"}/>
        </div>
      </div>
    </section>
  )
}
