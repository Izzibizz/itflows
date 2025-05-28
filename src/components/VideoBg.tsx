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
          src={ isLaptop? "https://res.cloudinary.com/dewmyq6c0/video/upload/v1748273325/Sequence_01_5_lneyda.mp4" : "https://res.cloudinary.com/dewmyq6c0/video/upload/v1748273345/Sequence_01_7_cl8bu0.mp4"}
          type="video/mp4"
        />
      </video>
  )
}

