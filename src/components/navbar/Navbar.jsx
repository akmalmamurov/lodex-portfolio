import { Link } from "react-scroll";
import { logo } from "@/assets/images";
import { Container } from "@/container";
import { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import NavbarLanguage from "./NavbarLanguage";
import { useNavLinks } from "@/data";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const navLinks = useNavLinks();
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="sticky top-0 z-10 py-2 bg-white/95">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="w-[80px] object-contain -translate-x-[10.5px]"
          />

          {/* Menu */}
          <div className="flex items-center gap-10">
            <ul className="hidden gap-8 lgl:flex">
              {navLinks.map(({ id, title, link }) => (
                <li
                  key={id}
                  className="cursor-pointer text-linkColor font-normal text-[18px] tracking-wide hover:text-titleSpan"
                >
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* language */}
            <div className="lg:block hidden">
              <NavbarLanguage />
            </div>
            <span
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center justify-center w-10 h-10 text-xl text-linkColor rounded-full lgl:hidden "
            >
              <FiMenu />
            </span>
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-1/2 h-screen overflow-scroll absolute top-0 right-0 bg-white p-4 scrollbar-hide rounded-l-3xl shadow-2xl"
                  ref={menuRef}
                >
                  <div className="relative flex flex-col items-start">
                    <div className="flex items-center gap-5">
                      <img src={logo} alt="logo" className="w-[80px]" />
                      <NavbarLanguage/>
                    </div>
                    <ul className="flex flex-col gap-3 mt-4">
                      {navLinks.map(({ id, title, link }) => (
                        <li
                          key={id}
                          className="cursor-pointer text-linkColor font-normal text-[18px] tracking-wide hover:text-linkColor/75"
                        >
                          <Link
                            activeClass="active"
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={handleCloseMenu}
                          >
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <span
                      onClick={handleCloseMenu}
                      className="absolute right-4 top-4 text-2xl cursor-pointer text-linkColor"
                    >
                      <MdClose />
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
