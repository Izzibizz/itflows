import { forwardRef } from "react"
import { useCollabStore } from "../stores/useCollabStore";

interface MenuToggleProps {
    isOpen: boolean;
    toggleMenu: () => void;
    buttonRef?: React.Ref<HTMLButtonElement>;
  }
  
  export const MenuToggle = forwardRef<HTMLButtonElement, MenuToggleProps>(
    ({ isOpen, toggleMenu }, ref) => {
      
      const { isSamarbete } = useCollabStore()

      return (
        <button
          ref={ref}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="relative w-10 h-10 z-50 cursor-pointer"
        >
          <span
            className={`absolute block h-0.5 w-full ${isSamarbete ? "bg-warm-black" : "bg-warm-white" } transition-transform duration-300 
              ${isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1/3"}`}
          ></span>

          <span
            className={`absolute block h-0.5 w-full ${isSamarbete ? "bg-warm-black" : "bg-warm-white" } transition-transform duration-300 
              ${isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-2/3 translate-x-2"}`}
          ></span>
        </button>
      );
    }
  );
  

  MenuToggle.displayName = "MenuToggle";