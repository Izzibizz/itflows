import { IoIosArrowDown } from "react-icons/io";

export const PrisInfo = () => {

  return (
    <section className="flex flex-col gap-10">
      <h3 className="font-collab text-4xl desktop:text-[40px]">
        Välj det paket som passar dig
      </h3>
      <h4 className="font-c-body text-xl tablet:max-w-[600px]">
        Stort eller litet – varje paket är byggt med omsorg. <span className="font-medium">Du</span> väljer nivån, <span className="font-medium">vi </span> 
        ser till att känslan och resultatet levererar.
      </h4>
      <div className="flex flex-col desktop:w-11/12">
        <div className="flex border-t border-dotted">
          <div className="border border-dotted p-6 rounded-full h-[150px] w-[150px] items-center flex justify-center text-[60px] font-collab">
            1
          </div>
          <div className="p-6">
            <h3 className="font-collab text-2xl">Lilla</h3>
            <h4>Pris: 29 995 kr</h4>
            <div className="flex gap-3 items-center laptop:hidden"><p>Vad som ingår</p><IoIosArrowDown /></div>
          </div>
        </div>
        <div className="flex border-t border-dotted">
          <div className="border border-dotted p-6 rounded-full h-[150px] w-[150px] items-center flex justify-center text-[60px] font-collab">
            2
          </div>
          <div className="p-6">
             <h3 className="font-collab text-2xl">Mellan</h3>
            <h4>Pris: 38 995 kr</h4>
            <div className="flex gap-3 items-center laptop:hidden"><p>Vad som ingår</p><IoIosArrowDown /></div>
          </div>
        </div>
        <div className="flex border-y border-dotted">
          <div className="border border-dotted p-6 rounded-full h-[150px] w-[150px] items-center flex justify-center text-[60px] font-collab">
            3
          </div>
          <div className="p-6">
             <h3 className="font-collab text-2xl">Stora</h3>
            <h4>Pris: 55 995 kr</h4>
            <div className="flex gap-3 items-center laptop:hidden"><p>Vad som ingår</p><IoIosArrowDown /></div>
          </div>
        </div>
      </div>
    </section>
  );
};
