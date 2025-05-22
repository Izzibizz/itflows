import { useEffect, useState }from "react"

export const VideoBg = () => {

    const [ isLaptop, setIsLaptop ] = useState(window.innerWidth > 1024)
  
    useEffect(() => {
      const handleResize = () => {
        setIsLaptop(window.innerWidth > 1024);
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
     <video
        autoPlay
        loop
        muted
        playsInline
        className={`hide-controls absolute inset-0 w-full h-full object-cover z-0`}
      >
        <source
          src={ isLaptop? "https://res.cloudinary.com/dlp85vjwx/video/upload/v1745864887/Sequence_01_5_gkogqj.mp4" : "https://res.cloudinary.com/dlp85vjwx/video/upload/v1745942988/Sequence_01_7_ydjmi4.mp4"}
          type="video/mp4"
        />
      </video>
  )
}

