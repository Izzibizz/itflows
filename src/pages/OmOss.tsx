import { useEffect } from "react"
import { useCollabStore } from "../stores/useCollabStore"

export const OmOss:React.FC = () => {

    
  const { setIsLandingPage } = useCollabStore()

  useEffect(() => {
    setIsLandingPage(false)
  },[])

  return (
    <section className=" animate-fadeIn">
       <h1 className="font-header text-dark-blue text-4xl laptop:text-[50px]">Om </h1><img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1745912964/itflows-logo-blue_r6ce5a.svg" className="w-full laptop:w-10/12"/>
    </section>
  )
}


