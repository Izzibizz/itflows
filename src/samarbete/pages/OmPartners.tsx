import { SamarbeteWhyComp } from "../components/SamarbeteWhyComp"

export const OmPartners: React.FC = () => {
  return (
    <section className=" animate-fadeIn flex flex-col gap-10">
      <h2 className="font-collab text-4xl desktop:text-[40px]">Vilka är vi?</h2>
      <div className="grid tablet:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-collab text-2xl">Emma</h3>
          <h4 className="font-c-boy text-lg">Fotograf och Kreatör</h4>
        </div>
        <img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748857775/it-flows-studio-mamama-3_dim3z2.jpg" alt="emma" className="w-full tablet:max-w-[500px] rounded-4xl"/>
        </div>
                <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-collab text-2xl">Izabel</h3>
          <h4 className="font-c-boy text-lg">Designer och utvecklare</h4>
        </div>
        <img src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1748857781/it-flows_jgajmx.jpg" alt="emma" className="w-full tablet:max-w-[500px] rounded-4xl"/>
        </div>
      </div>
      
      <p></p>
      <SamarbeteWhyComp/>
    </section>
  )
}

