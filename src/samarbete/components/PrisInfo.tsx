import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import paketData from "../../data/prislista.json"

type Package = {
  title: string;
  price: string;
};

const paketInfo: Package[] = paketData;

export const PrisInfo = () => {

 const [openStates, setOpenStates] = useState([false, false, false]);


 const toggleOpen = (index: number) => {
  setOpenStates((prev) =>
    prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
  );
};
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
       {paketInfo.map((paket, index) => (
          <div
            key={index}
            className={`flex ${
              index === paketInfo.length - 1
                ? "border-y"
                : "border-t"
            } border-dotted`}
          >
            <div className="border border-dotted p-6 rounded-full h-[150px] w-[150px] items-center flex justify-center text-[60px] font-collab">
              {index + 1}
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h3 className="font-collab text-2xl">{paket.title}</h3>
              <h4>Pris: {paket.price}</h4>
              <button
                onClick={() => toggleOpen(index)}
                className="flex gap-3 items-center laptop:hidden cursor-pointer"
              >
                <p>Vad som ingår</p>
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openStates[index] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openStates[index] && (
                <ul className="pt-2 text-sm">
                  <li>✔ Punkt 1</li>
                  <li>✔ Punkt 2</li>
                  <li>✔ Punkt 3</li>
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
