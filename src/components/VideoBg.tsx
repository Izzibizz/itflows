

export const VideoBg = () => {


  return (
     <video
        autoPlay
        loop
        muted
        playsInline
        className={`hide-controls absolute inset-0 w-full h-full max-h-[120vh] laptop:max-h-[95vh] object-cover z-0`}
      >
        <source
          src="https://res.cloudinary.com/dlp85vjwx/video/upload/v1745864887/Sequence_01_5_gkogqj.mp4"
          type="video/mp4"
        />
      </video>
  )
}

