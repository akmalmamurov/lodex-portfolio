import { Link } from "react-scroll";
import { logo } from "@/assets/images";
import { navLinks } from "@/data";
import { Container } from "@/container";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 py-2 bg-white/90">
      <Container>
        <div className="flex items-center justify-between ">
          {/* logo */}
          <img
            src={logo}
            alt="logo"
            className="w-[80px] object-contain -translate-x-[10.5px]"
          />
          {/* menu */}
          <ul className="hidden gap-8 lgl:flex">
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
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
