import { forwardRef } from "react"
import { useCollabStore } from "../stores/useCollabStore";

interface MenuToggleProps {
    isOpen: boolean;
    toggleMenu: () => void;
    buttonRef?: React.Ref<HTMLButtonElement>;
  }
  
  export const MenuToggle = forwardRef<HTMLButtonElement, MenuToggleProps>(
    ({ isOpen, toggleMenu }, ref) => {

      const { isSamarbete, isLandingPage, headerBg } = useCollabStore()
      


      return (
        <button
          ref={ref}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="relative w-10 h-10 z-50 mt-4 cursor-pointer"
        >
          <span
            className={`absolute block h-0.5 w-full ${isSamarbete ? "bg-collab-green" : isLandingPage && headerBg ? "bg-stone-800" : isLandingPage ? "bg-warm-white" : "bg-dark-blue"} transition-transform duration-300 
              ${isOpen && isLandingPage ? "top-1/2 -translate-y-1/2 rotate-45 bg-warm-white" : isOpen && isSamarbete ? "top-1/2 -translate-y-1/2 rotate-45 bg-collab-green" : isOpen? "top-1/2 -translate-y-1/2 rotate-45 bg-dark-blue" : "top-1/3"}`}
          ></span>

          <span
            className={`absolute block h-0.5 w-full ${isSamarbete ? "bg-collab-green"  : isLandingPage && headerBg ? "bg-stone-800" : isLandingPage ? "bg-warm-white" : "bg-dark-blue" } transition-transform duration-300 
              ${isOpen && isLandingPage ? "top-1/2 -translate-y-1/2 -rotate-45 bg-warm-white" : isOpen && isSamarbete ? "top-1/2 -translate-y-1/2 -rotate-45 bg-collab-green" : isOpen? "top-1/2 -translate-y-1/2 -rotate-45 bg-dark-blue" : "top-2/3 translate-x-2"}`}
          ></span>
        </button>
      );
    }
  );
  

  MenuToggle.displayName = "MenuToggle";