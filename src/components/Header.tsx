import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MenuToggle } from "../components/MenuToggle";
import { useCollabStore } from "../stores/useCollabStore";
import { FaPlus } from "react-icons/fa";

type NavLinkItem = {
  name: string;
  path: string;
  children?: NavLinkItem[];
};

export const Header: React.FC = () => {
  const { isSamarbete, isLandingPage, headerBg, setHeaderBg } = useCollabStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const currentPath = location.pathname;

  const navLinksBase: NavLinkItem[] = [
    {
      name: "Tjänster",
      path: "/tjanster",
      children: [
        { name: "Branding", path: "/branding" },
        { name: "Webbutveckling", path: "/webbutveckling" },
        { name: "Design", path: "/design" },
        { name: "Helhetskoncept", path: "/helhetskoncept" },
        { name: "Erbjudanden", path: "/erbjudanden" },
      ],
    },
    { name: "Kunder", path: "/kunder" },
    { name: "Om oss", path: "/om-oss" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  const collabNav: NavLinkItem[] = [
    { name: "Hem", path: "/" },
    { name: "Prislista", path: "/samarbete/prislista" },
    { name: "Om oss", path: "/samarbete/om-oss" },
    { name: "Kontakt", path: "/samarbete/kontakt" },
  ];

  const omOssNav: NavLinkItem[] = [{ name: "Hem", path: "/" }, ...navLinksBase];

  const navChildren =
    navLinksBase.find((link) => link.name === "Tjänster")?.children ?? [];

  const navLinks = isSamarbete
    ? collabNav
    : currentPath === "/om-oss"
    ? omOssNav
    : isMobile
    ? [
        { name: "Hem", path: "/" },
        ...navChildren,
        ...navLinksBase.filter(
          (link) => link.name !== "Tjänster" && link.name !== "Hem"
        ),
      ]
    : navLinksBase;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const logoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(currentPath);

  return (
    <>
      <header
        className={`${
          isSamarbete ? "font-c-body" : "font-header"
        } px-9 p-8 laptop:px-18 fixed top-0 z-70 w-full h-6 flex ${
          currentPath === "/om-oss" ? "justify-end" : "justify-between"
        } items-center  animate-fadeIn ${
          headerBg
            ? "bg-warm-white shadow-lg backdrop-blur-[15px] p-8 "
            : "bg-light/0 p-12"
        }`}
      >
        {currentPath !== "/om-oss" &&
          (isSamarbete ? (
            <div className="flex gap-2 items-center animate-fadeIn">
              <img
                src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1744875992/itflows-logo-green_lb3upj.svg"
                alt="logo itflows"
                className="w-[100px] tablet:w-[200px] laptop:hover:scale-105 cursor-pointer mr-8"
                onClick={() => logoClick()}
              />
              <FaPlus className="text-collab-green" />
              <a
                href="https://studiomamama.se"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dlp85vjwx/image/upload/v1744875557/logga-studio-mamama_va4bfr.svg"
                  alt="logo studio mamama"
                  className="w-[100px] tablet:w-[200px] laptop:hover:scale-105 cursor-pointer"
                />
              </a>
            </div>
          ) : (
            <img
              src={
                isLandingPage && headerBg
                  ? "https://res.cloudinary.com/dlp85vjwx/image/upload/v1746101541/itflows-logo-stone-800_nkoomt.svg"
                  : isLandingPage
                  ? "https://res.cloudinary.com/dlp85vjwx/image/upload/v1744819259/itflows-logo-white_mbvqfy.svg"
                  : "https://res.cloudinary.com/dlp85vjwx/image/upload/v1745912964/itflows-logo-blue_r6ce5a.svg"
              }
              alt="logo itflows"
              className={`${
                headerBg ? "w-[100px]" : "w-[200px]"
              } laptop:hover:scale-105 cursor-pointer animate-fadeIn`}
              onClick={() => logoClick()}
            />
          ))}
        {isMobile ? (
          <>
            <MenuToggle
              isOpen={isOpen}
              toggleMenu={toggleMenu}
              ref={buttonRef}
            />
            <AnimatePresence>
              {isOpen && isMobile && (
                <motion.div
                  initial={{ clipPath: "circle(5% at 100% 0%)" }}
                  animate={{ clipPath: "circle(150% at 50% 50%)" }}
                  exit={{ clipPath: "circle(5% at 100% 0%)" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className={`fixed top-0 right-0 h-screen w-screen overflow-hidden font-body text-2xl backdrop-blur-xl ${
                    isSamarbete
                      ? "text-collab-green bg-warm-white/98"
                      : isLandingPage
                      ? "text-warm-white bg-warm-beige/98"
                      : "text-dark-blue bg-warm-white/98"
                  } flex justify-end px-10 `}
                  ref={dropdownRef}
                >
                  <ul className="flex flex-col laptop:flex-row items-end gap-5 font-light absolute bottom-26 tablet:bottom-40 animate-fadeIn">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={closeMenu}
                        className="hover:scale-110 hover:text-dark-brown transform transition-transform duration-300"
                      >
                        {link.name}
                      </NavLink>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <ul
            className={`flex gap-20 ${
              isSamarbete
                ? "text-collab-green"
                : isLandingPage && headerBg
                ? "text-stone-800"
                : isLandingPage
                ? "text-white"
                : "text-dark-blue"
            } tracking-wider h-fit `}
          >
            {navLinks.map((link) => {
              const isTjanster = link.name === "Tjänster";

              if (isTjanster) {
                return (
                  <li
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setShowDropdown(true)}
                  >
                    <span className="cursor-pointer inline-block transition-transform duration-50 hover:scale-110 ">
                      {link.name}
                    </span>

                    {showDropdown && (
                      <ul
                        className={`absolute left-[-35%] top-full rounded-b-md shadow-xl p-2 z-60 flex flex-col ${
                          headerBg &&
                          "bg-warm-white z-10 backdrop-blur-[15px] mt-2"
                        }`}
                        onMouseLeave={() => setShowDropdown(false)}
                      >
                        {link.name === "Tjänster" &&
                          Array.isArray(link.children) &&
                          link.children.map(
                            (child: { name: string; path: string }) => (
                              <li key={child.name}>
                                <NavLink
                                  to={child.path}
                                  className="block px-4 py-2 whitespace-nowrap hover:scale-105"
                                  onClick={() => setShowDropdown(false)}
                                >
                                  {child.name}
                                </NavLink>
                              </li>
                            )
                          )}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="inline-block transition-transform duration-50 hover:scale-110 "
                    onMouseEnter={() => setShowDropdown(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </header>
    </>
  );
};
