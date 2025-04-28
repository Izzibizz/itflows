import { useEffect, useState }from "react"

export const VideoBg = () => {

    const [ isLaptop, setIsLaptop ] = useState(false)
  
    useEffect(() => {
      const handleResize = () => {
        setIsLaptop(window.innerWidth >= 1024);
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
     <video
        autoPlay
        loop
        muted="true"
        playsInline="true"
        className={`hide-controls absolute inset-0 w-full h-full max-h-[100vh] laptop:max-h-[95vh] object-cover z-0`}
      >
        <source
          src="https://res.cloudinary.com/dlp85vjwx/video/upload/v1745864887/Sequence_01_5_gkogqj.mp4"
          type="video/mp4"
        />
      </video>
  )
}

