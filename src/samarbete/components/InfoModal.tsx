import { useRef, useEffect } from 'react';
import { RxCross1 } from "react-icons/rx";

interface InfoProps {
  title: string;
  onClose: () => void;
  description: string;
}



export const InfoModal: React.FC<InfoProps> = ({ title, onClose, description }) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
          if (
        modalRef.current &&
        event.target instanceof Node && 
        !modalRef.current.contains(event.target)
      ) {
        onClose();
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [onClose]);

    useEffect(() => {
  // Lås scroll
  document.body.style.overflow = 'hidden';

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRef.current &&
      event.target instanceof Node &&
      !modalRef.current.contains(event.target)
    ) {
      onClose();
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    // Återställ scroll och rensa event
    document.body.style.overflow = '';
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [onClose]);
  
    return (
      <div className="fixed inset-0 bg-warm-white/80 flex items-center justify-center z-50 cursor-pointer">
        <div ref={modalRef} className="flex flex-col max-w-[90vw] max-h-[80vh] bg-warm-white rounded-xl p-4 gap-4" onClick={onClose}>
      <RxCross1 className="self-end"/>
          {title && description && (
            <>
            <h3 className="font-collab text-2xl">{title}</h3>
            <p className="font-c-body text-black text-justify ">
              {description}
            </p>
            </>
          )}
        </div>
      </div>
    )
}