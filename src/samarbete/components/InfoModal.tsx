import { useRef, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

interface InfoProps {
  title: string;
  index: number;
  onClose: () => void;
  description: string[];
}

export const InfoModal: React.FC<InfoProps> = ({
  title,
  index,
  onClose,
  description,
}) => {
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
    document.body.style.overflow = "hidden";

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
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-collab-beige/90 flex items-center justify-center z-50 cursor-pointer">
      <div
        ref={modalRef}
        className="flex flex-col max-w-[90vw] max-h-[80vh] w-11/12 tablet:w-9/12 mx-auto bg-warm-white rounded-xl p-4 px-6 tablet:px-6 tablet:pb-8 pb-6 gap-4"
        onClick={onClose}
      >
        <RxCross1 className="self-end" />
        {title && description && (
          <>
            <h3 className="font-collab text-2xl flex gap-4">
              <span className="border rounded-full inline-flex items-center justify-center w-10 h-10 aspect-square">
                {index + 1}
              </span>
              {title}
            </h3>

<ul className="flex flex-col gap-6">
            {description.length > 1 ? (
              description.map((item, idx) => (
                <li key={idx} className="font-c-body text-black">
                  {item}
                </li>
              ))
            ) : (
              <p className="font-c-body text-black">{description[0]}</p>
            )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
